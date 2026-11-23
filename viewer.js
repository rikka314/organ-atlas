import * as THREE from 'three';
import { OrbitControls } from './vendor/three/controls/OrbitControls.js';
import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';

const ORIGIN = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);
const FRONT = [0, 0, 1];
const EYE_DISTANCE = 6;
const FIT_FRACTION = 0.78;
const MODES = new Set(['solid', 'wire', 'hidden']);
const DIRECTIONS = {
  front: FRONT, back: [0, 0, -1],
  side: [1, 0, 0], left: [1, 0, 0], right: [-1, 0, 0],
  top: [0, 1, 0.0001], bottom: [0, -1, 0.0001],
};

function studio(camera, scene) {
  scene.add(camera, new THREE.HemisphereLight(0xfff9f3, 0xaebed0, 0.9));
  // Lights move with the observer so a posterior or close-up view stays readable.
  for (const [color, intensity, x, y, z] of [
    [0xfff4e7, 2.4, -3, 4, 4],
    [0xe1eefb, 0.85, 4, 0.2, 2],
    [0xf0f8ff, 1.6, 0, 3, -3],
  ]) {
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(x, y, z);
    camera.add(light, light.target);
  }
}

async function readBytes(url, signal, report) {
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`文件读取失败（HTTP ${response.status}）`);
  const length = Number(response.headers.get('content-length'));
  if (!report || !response.body || !length) return response.arrayBuffer();
  const reader = response.body.getReader();
  const chunks = [];
  let received = 0;
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      chunks.push(value);
      received += value.byteLength;
      report(Math.min(1, received / length) * 0.84);
    }
  } finally {
    reader.releaseLock();
  }
  return new Blob(chunks).arrayBuffer();
}

async function checkDigest(bytes, expected, label) {
  if (!expected) return;
  const hash = new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));
  const actual = Array.from(hash, value => value.toString(16).padStart(2, '0')).join('');
  if (actual !== expected) throw new Error(`${label}的版本与部位分区记录不一致`);
}

function sourceInfo(mesh, parser) {
  const ref = parser.associations.get(mesh) ?? {};
  const names = new Set([mesh.name, mesh.userData.name, parser.json.meshes?.[ref.meshes]?.name]);
  // A glTF node with several material primitives becomes a Group in GLTFLoader.
  for (let object = mesh; object; object = object.parent) {
    const nodeId = parser.associations.get(object)?.nodes;
    if (nodeId !== undefined) {
      names.add(parser.json.nodes[nodeId].name);
      break;
    }
  }
  return { names, primitive: ref.primitives, material: mesh.material.name };
}

function matches(part, info) {
  return (!part.meshes?.length || part.meshes.some(name => info.names.has(name))) &&
    (!part.materials?.length || part.materials.includes(info.material)) &&
    (!part.primitives?.length || part.primitives.includes(info.primitive));
}

function modelResources(scene) {
  const geometries = new Set();
  const materials = new Set();
  const textures = new Set();
  scene.traverse(object => {
    if (object.geometry) geometries.add(object.geometry);
    for (const material of [].concat(object.material ?? [])) {
      materials.add(material);
      for (const property of Object.values(material)) {
        if (property?.isTexture) textures.add(property);
      }
    }
  });
  return {
    geometries, materials,
    dispose() {
      geometries.forEach(geometry => geometry.dispose());
      materials.forEach(material => material.dispose());
      textures.forEach(texture => {
        texture.dispose();
        texture.source?.data?.close?.();
      });
    },
  };
}

function triangleCount(mesh) {
  return (mesh.geometry.index?.count ?? mesh.geometry.attributes.position.count) / 3;
}

// Each byte describes the corresponding triangle in the original export. Only
// index buffers change. All attributes, original triangles and transforms survive.
function splitRegions(mesh, parts, labels, expectedCount, resources) {
  if (labels.length !== expectedCount || labels.length !== triangleCount(mesh)) {
    throw new Error('区域索引与当前模型的三角面数不一致');
  }
  const source = mesh.geometry;
  const verticesByRegion = new Map(parts.map(part => [part.region, []]));
  if (verticesByRegion.size !== parts.length) throw new Error('区域编号重复');
  const sourceIndices = source.index?.array;
  for (let face = 0; face < labels.length; face++) {
    const group = verticesByRegion.get(labels[face]);
    if (!group) throw new Error(`模型三角面包含未登记的区域 ${labels[face]}`);
    const index = face * 3;
    group.push(sourceIndices?.[index] ?? index, sourceIndices?.[index + 1] ?? index + 1,
      sourceIndices?.[index + 2] ?? index + 2);
  }
  const parent = new THREE.Group();
  parent.name = mesh.name;
  parent.position.copy(mesh.position);
  parent.quaternion.copy(mesh.quaternion);
  parent.scale.copy(mesh.scale);
  mesh.parent.add(parent);
  mesh.removeFromParent();
  for (const child of [...mesh.children]) parent.add(child);
  return parts.map(part => {
    const indices = verticesByRegion.get(part.region);
    if (!indices.length) throw new Error(`“${part.name}”缺少已标记的三角面`);
    const geometry = new THREE.BufferGeometry();
    resources.geometries.add(geometry);
    for (const [name, attribute] of Object.entries(source.attributes)) geometry.setAttribute(name, attribute);
    geometry.setIndex(indices);
    const region = new THREE.Mesh(geometry, mesh.material);
    region.name = part.id;
    parent.add(region);
    return { mesh: region, part };
  });
}

function bindParts(gltf, specimen, labels, resources) {
  const parts = specimen.parts.map(data => ({ ...data, meshCount: 0, triangleCount: 0 }));
  if (new Set(parts.map(part => part.id)).size !== parts.length) throw new Error('结构分组的标识重复');
  const sourceMeshes = [];
  gltf.scene.traverse(object => { if (object.isMesh) sourceMeshes.push(object); });
  if (!sourceMeshes.length) throw new Error('模型文件没有可显示的网格');
  const items = [];
  const unmatchedMeshes = [];
  const fallback = { id: '__unmapped', name: '未分组网格', meshCount: 0, triangleCount: 0 };
  let regionsBound = false;
  for (const mesh of sourceMeshes) {
    const info = sourceInfo(mesh, gltf.parser);
    if (specimen.regions && info.names.has(specimen.regions.mesh)) {
      if (regionsBound) throw new Error('逐面区域索引对应多个网格');
      const taggedParts = parts.filter(part => part.region !== undefined && matches(part, info));
      items.push(...splitRegions(mesh, taggedParts, labels, specimen.regions.triangles, resources));
      regionsBound = true;
      continue;
    }
    const found = parts.filter(part => part.region === undefined && matches(part, info));
    if (found.length > 1) throw new Error(`网格“${mesh.name}”同时属于多个显示组`);
    if (!found.length) unmatchedMeshes.push(mesh.name);
    items.push({ mesh, part: found[0] ?? fallback });
  }
  if (specimen.regions && !regionsBound) throw new Error('找不到区域索引对应的原始网格');
  if (unmatchedMeshes.length) parts.push(fallback);
  for (const item of items) {
    item.triangles = triangleCount(item.mesh);
    item.part.meshCount++;
    item.part.triangleCount += item.triangles;
    item.solid = item.mesh.material;
    item.mode = 'solid';
  }
  return {
    items, parts: parts.filter(part => part.meshCount), unmatchedMeshes,
    unmatchedParts: parts.filter(part => !part.meshCount).map(part => part.id),
  };
}

// Measure the actual rendered vertices along the desired camera axes. A thin,
// oblique specimen can have a substantially wider axis-aligned bounding box.
function projectedFrame(items, direction) {
  const basis = new THREE.Matrix4().lookAt(direction, ORIGIN, UP);
  const inverse = basis.clone().transpose();
  const bounds = new THREE.Box3();
  const vertex = new THREE.Vector3();
  const transform = new THREE.Matrix4();
  for (const { mesh, part } of items) {
    transform.multiplyMatrices(inverse, mesh.matrixWorld);
    const position = mesh.geometry.attributes.position;
    const indices = part.region !== undefined ? mesh.geometry.index : null;
    const count = indices?.count ?? position.count;
    for (let i = 0; i < count; i++) {
      vertex.fromBufferAttribute(position, indices ? indices.getX(i) : i).applyMatrix4(transform);
      bounds.expandByPoint(vertex);
    }
  }
  const size = bounds.getSize(new THREE.Vector3());
  return {
    target: bounds.getCenter(new THREE.Vector3()).applyMatrix4(basis),
    width: size.x, height: size.y, direction: direction.clone(),
  };
}

function framingHeight(frame, aspect) {
  return Math.max(frame.height, frame.width / aspect, 0.001) / (frame.fitFraction ?? FIT_FRACTION);
}

export function createViewer(canvas, events = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 40);
  camera.position.set(0, 0, EYE_DISTANCE);
  studio(camera, scene);
  const controls = new OrbitControls(camera, canvas);
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  controls.enableDamping = !motion.matches;
  controls.dampingFactor = 0.14;
  controls.rotateSpeed = 0.72;
  controls.zoomToCursor = true;
  controls.minZoom = 0.35;
  controls.maxZoom = 36;
  controls.maxTargetRadius = 3.5;
  controls.autoRotateSpeed = 0.65;
  const raycaster = new THREE.Raycaster();
  const loader = new GLTFLoader();
  // glTF vessel branches can parent other meshes. Hiding only this material
  // leaves independently controlled descendants in the transform hierarchy.
  const invisible = new THREE.MeshBasicMaterial({ visible: false });
  let active, request, tween, tap;
  let raf = 0, lastDraw = 0, dragging = false, disposed = false, lost = false;
  let width = 0, height = 0, pixelRatio = 0, poseKey = '';

  function redraw() {
    if (!raf && !disposed && !lost && !document.hidden) raf = requestAnimationFrame(draw);
  }

  function sizeCanvas() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return false;
    const moving = dragging || controls.autoRotate || Boolean(tween);
    const dpr = Math.min(window.devicePixelRatio || 1, moving ? 1.3 : 2,
      Math.sqrt((moving ? 1800000 : 3200000) / (w * h)));
    if (w !== width || h !== height || Math.abs(dpr - pixelRatio) > 0.01) {
      width = w; height = h; pixelRatio = dpr;
      renderer.setDrawingBufferSize(w, h, dpr);
      const half = active ? framingHeight(active.home, w / h) * 0.5 : 1;
      camera.top = half; camera.bottom = -half;
      camera.right = half * w / h; camera.left = -camera.right;
      camera.updateProjectionMatrix();
    }
    return true;
  }

  function publishPose() {
    const azimuth = THREE.MathUtils.radToDeg(controls.getAzimuthalAngle());
    const elevation = 90 - THREE.MathUtils.radToDeg(controls.getPolarAngle());
    const key = [azimuth.toFixed(1), elevation.toFixed(1), camera.zoom.toFixed(3), controls.autoRotate].join('/');
    if (key === poseKey) return;
    poseKey = key;
    events.onPoseChange?.({ zoom: camera.zoom, azimuth, elevation, spinning: controls.autoRotate });
  }

  function draw(now) {
    raf = 0;
    if (disposed || lost || document.hidden || !sizeCanvas()) return;
    const elapsed = Math.min((now - lastDraw) / 1000 || 0, 0.05);
    lastDraw = now;
    if (tween) {
      const t = Math.min(1, (now - tween.start) / tween.duration);
      const blend = 1 - (1 - t) ** 3;
      controls.target.lerpVectors(tween.fromTarget, tween.target, blend);
      const theta = tween.from.theta + tween.deltaTheta * blend;
      const phi = THREE.MathUtils.lerp(tween.from.phi, tween.to.phi, blend);
      camera.position.setFromSphericalCoords(EYE_DISTANCE, phi, theta).add(controls.target);
      camera.zoom = Math.exp(THREE.MathUtils.lerp(tween.fromZoom, tween.toZoom, blend));
      camera.updateProjectionMatrix();
      if (t === 1) tween = null;
    }
    const changed = controls.update(elapsed);
    if (active) {
      for (const item of active.items) {
        if (item.mode === 'wire') item.wire.opacity = Math.min(0.44, item.wireOpacity * camera.zoom ** 0.32);
      }
    }
    renderer.render(scene, camera);
    publishPose();
    if (tween || changed || (controls.autoRotate && active)) redraw();
  }

  function setSpin(value) {
    controls.autoRotate = Boolean(value && active);
    if (controls.autoRotate) tween = null;
    publishPose();
    redraw();
  }

  function pose(direction, target, zoom, animate = true) {
    // Flush the public damping integrator, then restore the starting pose. This
    // also cancels residual drag when a preset is chosen immediately after release.
    const position = camera.position.clone(), previous = controls.target.clone();
    controls.autoRotate = false;
    controls.enableDamping = false;
    controls.update();
    controls.target.copy(previous);
    camera.position.copy(position);
    controls.update();
    controls.enableDamping = !motion.matches;
    zoom = THREE.MathUtils.clamp(zoom, controls.minZoom, controls.maxZoom);
    if (!animate || motion.matches) {
      tween = null;
      controls.target.copy(target);
      camera.position.copy(direction).normalize().multiplyScalar(EYE_DISTANCE).add(target);
      camera.zoom = zoom;
      camera.updateProjectionMatrix();
      controls.update();
    } else {
      const from = new THREE.Spherical().setFromVector3(position.sub(previous));
      const to = new THREE.Spherical().setFromVector3(direction);
      const angle = to.theta - from.theta;
      tween = { start: performance.now(), duration: 320, fromTarget: previous, target: target.clone(),
        from, to, deltaTheta: Math.atan2(Math.sin(angle), Math.cos(angle)),
        fromZoom: Math.log(camera.zoom), toZoom: Math.log(zoom) };
    }
    redraw();
  }

  function setMode(partId, mode) {
    if (!active || !MODES.has(mode)) return false;
    const items = active.byPart.get(partId);
    if (!items) return false;
    for (const item of items) {
      if (mode === 'wire' && !item.wire) {
        item.wireOpacity = THREE.MathUtils.clamp(16 / Math.sqrt(item.triangles), 0.048, 0.38);
        item.wire = new THREE.MeshBasicMaterial({
          color: 0x90e7dc, wireframe: true, transparent: true, opacity: item.wireOpacity,
          depthWrite: false, toneMapped: false, side: THREE.DoubleSide, forceSinglePass: true,
        });
        active.resources.materials.add(item.wire);
      }
      item.mode = mode;
      item.mesh.material = mode === 'hidden' ? invisible : mode === 'wire' ? item.wire : item.solid;
    }
    redraw();
    return true;
  }

  function unload() {
    tween = null; tap = null;
    if (!active) return;
    active.root.removeFromParent();
    active.resources.dispose();
    active = null;
    controls.autoRotate = false;
    redraw();
  }

  async function load(specimen) {
    if (disposed) throw new Error('三维视图已关闭');
    request?.abort();
    const controller = new AbortController();
    request = controller;
    const { signal } = controller;
    unload();
    events.onLoadProgress?.(0);
    let resources;
    try {
      const url = new URL(specimen.url, document.baseURI);
      const [data, regionBytes] = await Promise.all([
        readBytes(url, signal, value => { if (!signal.aborted) events.onLoadProgress?.(value); }),
        specimen.regions ? readBytes(new URL(specimen.regions.url, document.baseURI), signal) : null,
      ]);
      signal.throwIfAborted();
      if (specimen.regions) {
        await Promise.all([
          checkDigest(data, specimen.regions.modelSha256, '三维模型'),
          checkDigest(regionBytes, specimen.regions.sha256, '区域索引'),
        ]);
        signal.throwIfAborted();
      }
      events.onLoadProgress?.(0.88);
      const gltf = await loader.parseAsync(data, new URL('.', url).href);
      resources = modelResources(gltf.scene);
      signal.throwIfAborted();
      const bindings = bindParts(gltf, specimen, regionBytes && new Uint8Array(regionBytes), resources);
      const root = new THREE.Group();
      root.add(gltf.scene);
      if (specimen.coordinateSpace === 'raw-z-up') root.rotation.x = -Math.PI / 2;
      root.updateMatrixWorld(true);
      const bounds = new THREE.Box3().setFromObject(root);
      const size = bounds.getSize(new THREE.Vector3());
      const span = Math.max(size.x, size.y, size.z);
      if (!(span > 0) || !Number.isFinite(span)) throw new Error('模型空间范围无效');
      root.scale.setScalar(2 / span);
      root.position.copy(bounds.getCenter(new THREE.Vector3())).multiplyScalar(-2 / span);
      root.updateMatrixWorld(true);
      const direction = new THREE.Vector3().fromArray(specimen.view ?? FRONT).normalize();
      // A photographed anatomical close-up supplies its original glTF-space framing.
      const frame = specimen.cameraFrame;
      const home = frame ? {
        direction, target: root.localToWorld(new THREE.Vector3().fromArray(frame.target)),
        width: frame.width * root.scale.x, height: frame.height * root.scale.x, fitFraction: 1,
      } : projectedFrame(bindings.items, direction);
      const byPart = new Map(bindings.parts.map(part => [part.id, []]));
      const byMesh = new Map();
      for (const item of bindings.items) {
        byPart.get(item.part.id).push(item);
        byMesh.set(item.mesh, item);
      }
      signal.throwIfAborted();
      active = { root, resources, home, byPart, byMesh, ...bindings };
      scene.add(root);
      for (const part of bindings.parts) {
        const mode = part.defaultMode ?? part.mode ?? 'solid';
        part.mode = MODES.has(mode) ? mode : 'solid';
        if (part.mode !== 'solid') setMode(part.id, part.mode);
      }
      width = 0;
      pose(home.direction, home.target, 1, false);
      sizeCanvas();
      events.onLoadProgress?.(1);
      return { parts: bindings.parts, meshCount: bindings.items.length,
        triangleCount: bindings.items.reduce((sum, item) => sum + item.triangles, 0),
        unmatchedMeshes: bindings.unmatchedMeshes, unmatchedParts: bindings.unmatchedParts };
    } catch (error) {
      if (resources && resources !== active?.resources) resources.dispose();
      if (signal.aborted) throw new DOMException('已切换模型', 'AbortError');
      controller.abort();
      events.onError?.(error);
      throw error;
    }
  }

  function reset() {
    if (active) pose(active.home.direction, active.home.target, 1);
  }

  function offset() {
    return camera.position.clone().sub(controls.target);
  }

  function zoom(factor) {
    if (!active || !(factor > 0) || !Number.isFinite(factor)) return;
    const targetZoom = tween ? Math.exp(tween.toZoom) : camera.zoom;
    pose(offset(), controls.target, targetZoom * factor);
  }

  function setView(name) {
    if (!active || !Object.hasOwn(DIRECTIONS, name)) return false;
    pose(new THREE.Vector3().fromArray(DIRECTIONS[name]), controls.target, camera.zoom);
    return true;
  }

  function rotate(direction) {
    if (!active) return;
    const delta = { left: [-1, 0], right: [1, 0], up: [0, -1], down: [0, 1] }[direction];
    if (!delta) return setView(direction);
    const angles = tween?.to.clone() ?? new THREE.Spherical().setFromVector3(offset());
    angles.theta += delta[0] * Math.PI / 9;
    angles.phi = THREE.MathUtils.clamp(angles.phi + delta[1] * Math.PI / 9, 0.001, Math.PI - 0.001);
    pose(new THREE.Vector3().setFromSpherical(angles), controls.target, camera.zoom);
  }

  function framePart(partId) {
    const items = active?.byPart.get(partId);
    if (!items?.length) return false;
    const direction = offset().normalize();
    const fit = projectedFrame(items, direction);
    const aspect = width / height || 1;
    pose(direction, fit.target, framingHeight(active.home, aspect) / framingHeight(fit, aspect));
    return true;
  }

  function onPick(event) {
    const start = tap;
    tap = null;
    if (!start || start.id !== event.pointerId || !active || !events.onPick) return;
    if (Math.hypot(event.clientX - start.x, event.clientY - start.y) > 5) return;
    const bounds = canvas.getBoundingClientRect();
    const point = new THREE.Vector2((event.clientX - bounds.left) / bounds.width * 2 - 1,
      -(event.clientY - bounds.top) / bounds.height * 2 + 1);
    raycaster.setFromCamera(point, camera);
    // Let an exposed solid structure be picked through the enclosing wire cage.
    let hit;
    for (const mode of ['solid', 'wire']) {
      const meshes = active.items.filter(item => item.mode === mode).map(item => item.mesh);
      hit = raycaster.intersectObjects(meshes, false)[0];
      if (hit) break;
    }
    events.onPick(hit ? active.byMesh.get(hit.object).part.id : null);
  }

  function keydown(event) {
    if (event.altKey || event.ctrlKey || event.metaKey || !active) return;
    const arrows = { ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down' };
    if (arrows[event.key]) rotate(arrows[event.key]);
    else if (event.key === '+' || event.key === '=') zoom(1.25);
    else if (event.key === '-') zoom(0.8);
    else if (event.key === 'Home' || event.key === '0' || event.key.toLowerCase() === 'r') reset();
    else if (event.key === ' ') setSpin(!controls.autoRotate);
    else return;
    event.preventDefault();
  }

  controls.addEventListener('start', () => { dragging = true; tween = null; setSpin(false); });
  controls.addEventListener('end', () => { dragging = false; redraw(); });
  controls.addEventListener('change', redraw);
  const listeners = new AbortController();
  const options = { signal: listeners.signal };
  canvas.addEventListener('pointerdown', event => {
    tap = event.button === 0 && event.isPrimary ? { id: event.pointerId, x: event.clientX, y: event.clientY } : null;
  }, options);
  canvas.addEventListener('pointermove', event => {
    if (tap && Math.hypot(event.clientX - tap.x, event.clientY - tap.y) > 5) tap = null;
  }, options);
  canvas.addEventListener('pointercancel', () => { tap = null; }, options);
  canvas.addEventListener('pointerup', onPick, options);
  canvas.addEventListener('keydown', keydown, options);
  canvas.addEventListener('webglcontextlost', event => {
    event.preventDefault(); lost = true;
    if (events.onContextLost) events.onContextLost();
    else events.onError?.(new Error('显卡绘制中断，正在等待浏览器恢复。'));
  }, options);
  canvas.addEventListener('webglcontextrestored', () => {
    lost = false; width = 0;
    events.onRestore?.();
    redraw();
  }, options);
  document.addEventListener('visibilitychange', redraw, options);
  motion.addEventListener('change', () => {
    controls.enableDamping = !motion.matches;
    if (motion.matches) { tween = null; setSpin(false); }
  }, options);
  const observer = new ResizeObserver(redraw);
  observer.observe(canvas);
  redraw();
  return {
    load, setMode, reset, zoom, rotate, setView, setSpin, framePart,
    dispose() {
      disposed = true;
      request?.abort();
      listeners.abort();
      observer.disconnect();
      cancelAnimationFrame(raf);
      controls.dispose();
      unload();
      invisible.dispose();
      renderer.dispose();
    },
  };
}
