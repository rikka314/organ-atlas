import * as THREE from 'three';
import { OrbitControls } from './vendor/three/controls/OrbitControls.js';
import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';
import { bodySpecimens } from './body-specimens.js?v=639ef82774f7';

const SHELL = './media/body-reference.glb?v=c5fc114afdf189';
const FRAMES = {
  whole: { y: 0.85, height: 1.89, width: 0.79 },
  torso: { y: 1.125, height: 0.76, width: 0.55 },
};
const VIEWS = { front: [0, 0, 1], back: [0, 0, -1] };
const DISTANCE = 3.2;
const toDegrees = THREE.MathUtils.radToDeg;

function enableSkinFocus(material, focus) {
  // Keep the GLB's maps and Three.js lighting; fade the trunk to reveal its organs.
  material.transparent = true;
  material.depthWrite = false;
  material.side = THREE.FrontSide;
  material.onBeforeCompile = shader => {
    shader.uniforms.atlasFocus = focus;
    shader.vertexShader = 'varying vec3 atlasSurfaceWorld;\n' + shader.vertexShader.replace(
      '#include <project_vertex>',
      '#include <project_vertex>\n atlasSurfaceWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;'
    );
    shader.fragmentShader = 'uniform float atlasFocus;\nvarying vec3 atlasSurfaceWorld;\n' +
      shader.fragmentShader.replace('#include <opaque_fragment>', `
        float rim = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 1.65);
        float detail = max(smoothstep(1.39, 1.52, atlasSurfaceWorld.y),
                           1.0 - smoothstep(0.72, 0.91, atlasSurfaceWorld.y));
        detail = max(detail, smoothstep(0.15, 0.25, abs(atlasSurfaceWorld.x)));
        diffuseColor.a *= min(mix(0.145 - 0.066 * atlasFocus, 0.39, detail) + rim * 0.42, 0.80);
        #include <opaque_fragment>`);
  };
}

function collect(root) {
  const meshes = [], geometries = new Set(), materials = new Set(), textures = new Set();
  root.traverse(node => {
    if (!node.isMesh) return;
    meshes.push(node);
    geometries.add(node.geometry);
    for (const material of [].concat(node.material)) {
      materials.add(material);
      for (const property of Object.values(material)) if (property?.isTexture) textures.add(property);
    }
  });
  return {
    meshes, materials,
    dispose() {
      root.removeFromParent();
      geometries.forEach(geometry => geometry.dispose());
      materials.forEach(material => material.dispose());
      textures.forEach(texture => { texture.dispose(); texture.source?.data?.close?.(); });
    },
  };
}

function corners(box) {
  const result = [];
  for (const x of [box.min.x, box.max.x]) for (const y of [box.min.y, box.max.y]) {
    for (const z of [box.min.z, box.max.z]) result.push(new THREE.Vector3(x, y, z));
  }
  return result;
}

function surfaceAnchor(meshes, target) {
  const point = new THREE.Vector3(), closest = target.clone();
  let best = Infinity;
  for (const mesh of meshes) {
    const positions = mesh.geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      point.fromBufferAttribute(positions, i).applyMatrix4(mesh.matrixWorld);
      const distance = point.distanceToSquared(target);
      if (distance < best) { best = distance; closest.copy(point); }
    }
  }
  return closest;
}

function studio(camera, scene) {
  scene.add(camera, new THREE.HemisphereLight(0xfff8ed, 0xb4c3c8, 0.95));
  for (const [color, intensity, x, y, z] of [
    [0xfff2e3, 2.3, -3, 4, 4], [0xe7f1fb, 0.85, 3, 0, 3], [0xeaffed, 1.35, 1, 3, -3],
  ]) {
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(x, y, z);
    camera.add(light, light.target);
  }
}

function setOpacity(organ, opacity) {
  for (const state of organ.materials) {
    const m = state.material;
    m.opacity = state.opacity * opacity;
    const transparent = opacity < 1 || state.transparent;
    if (m.transparent !== transparent) {
      m.transparent = transparent;
      // In Three r169 the opaque shader variant forces output alpha to one.
      m.needsUpdate = true;
    }
    m.depthWrite = opacity < 1 ? false : state.depthWrite;
    m.forceSinglePass = opacity < 1 || state.singlePass;
  }
  organ.opacity = opacity;
}

export function createBodyViewer(canvas, events = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 12);
  camera.position.set(0, FRAMES.whole.y, DISTANCE);
  studio(camera, scene);
  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, FRAMES.whole.y, 0);
  controls.cursor.copy(controls.target);
  controls.maxTargetRadius = 1.05;
  controls.minZoom = 0.72; controls.maxZoom = 7;
  controls.minPolarAngle = 0.02; controls.maxPolarAngle = Math.PI - 0.02;
  controls.zoomToCursor = true;
  controls.dampingFactor = 0.15; controls.rotateSpeed = 0.7;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  controls.enableDamping = !reduce.matches;
  controls.update();
  const skinFocus = { value: 0 }, loader = new GLTFLoader(), raycaster = new THREE.Raycaster();
  const organs = new Map(), meshOwners = new WeakMap(), resources = [];
  const requests = new AbortController(), listeners = new AbortController();
  const listen = { signal: listeners.signal };
  const rayPoint = new THREE.Vector2(), scratch = new THREE.Vector3();
  let active = true, disposed = false, lost = false, surfaceReady = false, dragging = false;
  let width = 0, height = 0, dpr = 0, frame = 0, previousTime = 0, poseDirty = true;
  let framing = 'whole', facing = 'front', selected = null, externalHover = null, pointerHover = null;
  let tween, tap, hoverPoint, focusDirty = true;
  const resumeWaiters = new Set();
  const failures = [];

  function drawSoon() {
    if (active && !disposed && !lost && !document.hidden && !frame) frame = requestAnimationFrame(draw);
  }

  function span(which) {
    const preset = FRAMES[which];
    return Math.max(preset.height, preset.width / (width && height ? width / height : 1));
  }

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return false;
    const ratio = Math.min(devicePixelRatio || 1, 1.8, Math.sqrt(2200000 / (w * h)));
    if (w === width && h === height && dpr === ratio) return true;
    width = w; height = h; dpr = ratio;
    renderer.setDrawingBufferSize(w, h, ratio);
    camera.top = span('whole') * 0.5; camera.bottom = -camera.top;
    camera.right = camera.top * width / height; camera.left = -camera.right;
    camera.updateProjectionMatrix();
    poseDirty = focusDirty = true;
    return true;
  }

  function getAnchor(id) {
    const organ = organs.get(id);
    if (!organ || !width || !height) return null;
    const p = scratch.copy(organ.anchor).project(camera);
    return { x: (p.x + 1) * width / 2, y: (1 - p.y) * height / 2, depth: p.z,
      visible: Math.abs(p.x) <= 1 && Math.abs(p.y) <= 1 && Math.abs(p.z) <= 1 };
  }

  function updateOcclusion(focusId) {
    const focus = organs.get(focusId);
    if (focus) {
      for (const organ of organs.values()) {
        const box = organ.projected;
        box.makeEmpty();
        for (const corner of organ.corners) box.expandByPoint(scratch.copy(corner).project(camera));
      }
    }
    for (const organ of organs.values()) {
      const a = organ.projected, b = focus?.projected;
      const overlaps = b && a.min.x < b.max.x && a.max.x > b.min.x && a.min.y < b.max.y && a.max.y > b.min.y;
      organ.targetOpacity = organ !== focus && overlaps && a.min.z < b.max.z ? 0.15 : 1;
    }
    skinFocus.value = focus ? 1 : 0;
    focusDirty = false;
  }

  function focusId() { return externalHover ?? pointerHover ?? selected; }

  function pointerToOrgan(x, y) {
    if (!width || !height || !active) return null;
    const bounds = canvas.getBoundingClientRect();
    rayPoint.set((x - bounds.left) / bounds.width * 2 - 1, -(y - bounds.top) / bounds.height * 2 + 1);
    raycaster.setFromCamera(rayPoint, camera);
    const meshes = [];
    for (const organ of organs.values()) {
      if (raycaster.ray.intersectsBox(organ.bounds)) meshes.push(...organ.meshes);
    }
    const hits = raycaster.intersectObjects(meshes, false);
    const focus = externalHover ?? selected;
    if (focus && hits.some(hit => meshOwners.get(hit.object) === focus)) return focus;
    // A label can project exactly onto the edge of a thin source triangle.
    // Honor a few pixels of tolerance at the actual focused surface anchor.
    const anchor = focus && getAnchor(focus);
    if (anchor?.visible && Math.hypot(x - bounds.left - anchor.x, y - bounds.top - anchor.y) <= 5) return focus;
    const hit = hits.find(hit => organs.get(meshOwners.get(hit.object)).targetOpacity > 0.5) ?? hits[0];
    return hit ? meshOwners.get(hit.object) : null;
  }

  function pointerFocus(id) {
    if (id === pointerHover) return;
    pointerHover = id;
    focusDirty = true;
    canvas.style.cursor = id ? 'pointer' : '';
    events.onHover?.(id);
    drawSoon();
  }

  function applyTween(now) {
    if (!tween) return;
    const t = Math.min(1, (now - tween.time) / tween.duration), k = 1 - (1 - t) ** 3;
    controls.target.lerpVectors(tween.fromTarget, tween.target, k);
    camera.position.setFromSphericalCoords(DISTANCE,
      THREE.MathUtils.lerp(tween.from.phi, tween.to.phi, k), tween.from.theta + tween.delta * k).add(controls.target);
    camera.zoom = Math.exp(THREE.MathUtils.lerp(tween.fromZoom, tween.toZoom, k));
    camera.updateProjectionMatrix();
    if (t >= 1) tween = null;
    poseDirty = true;
  }

  function publishPose() {
    const azimuth = toDegrees(controls.getAzimuthalAngle()), elevation = 90 - toDegrees(controls.getPolarAngle());
    const next = Math.abs(elevation) > 5 ? 'free' : Math.abs(azimuth) < 5 ? 'front' : Math.abs(azimuth) > 175 ? 'back' : 'free';
    if (facing !== next) { facing = next; events.onFacingChange?.(facing); }
    events.onPoseChange?.({ zoom: camera.zoom, azimuth, elevation, framing, facing });
    poseDirty = false;
  }

  function draw(now) {
    frame = 0;
    // The browser can lose the context one animation frame before dispatching
    // its DOM event. Starting a new transparent shader in that frame is invalid.
    if (!active || disposed || lost || document.hidden || renderer.getContext().isContextLost() || !resize()) return;
    const dt = Math.min(0.075, Math.max(0.012, (now - previousTime) / 1000));
    previousTime = now;
    applyTween(now);
    const moved = controls.update(dt);
    if (moved) poseDirty = true;
    camera.updateMatrixWorld();
    if (hoverPoint && !dragging) {
      const point = hoverPoint; hoverPoint = null;
      pointerFocus(pointerToOrgan(point.x, point.y));
    }
    if (poseDirty || focusDirty) updateOcclusion(focusId());
    let fading = false;
    const speed = reduce.matches ? 1 : 1 - Math.exp(-dt / 0.065);
    for (const organ of organs.values()) {
      if (organ.opacity === organ.targetOpacity) continue;
      const alpha = THREE.MathUtils.lerp(organ.opacity, organ.targetOpacity, speed);
      setOpacity(organ, Math.abs(alpha - organ.targetOpacity) < 0.009 ? organ.targetOpacity : alpha);
      fading ||= organ.opacity !== organ.targetOpacity;
    }
    renderer.render(scene, camera);
    if (poseDirty) publishPose();
    if (tween || moved || fading) drawSoon();
  }

  function steer(target, direction, requestedZoom) {
    const zoom = THREE.MathUtils.clamp(requestedZoom, controls.minZoom, controls.maxZoom);
    const previous = controls.target.clone(), position = camera.position.clone();
    const destination = target.clone();
    // Clear any remaining drag velocity before programmatic camera motion.
    controls.enableDamping = false;
    controls.update(); controls.target.copy(previous); camera.position.copy(position); controls.update();
    controls.enableDamping = !reduce.matches;
    const from = new THREE.Spherical().setFromVector3(position.sub(previous));
    const to = new THREE.Spherical().setFromVector3(direction);
    const angle = to.theta - from.theta;
    tween = { time: performance.now(), duration: 390, fromTarget: previous, target: destination, from, to,
      delta: Math.atan2(Math.sin(angle), Math.cos(angle)), fromZoom: Math.log(camera.zoom), toZoom: Math.log(zoom) };
    if (reduce.matches || !active) {
      applyTween(tween.time + tween.duration);
      controls.update(); camera.updateMatrixWorld();
    }
    drawSoon();
  }

  function direction() {
    return tween ? new THREE.Vector3().setFromSpherical(tween.to) : camera.position.clone().sub(controls.target);
  }

  function setFraming(value) {
    if (!Object.hasOwn(FRAMES, value)) return;
    if (framing !== value) { framing = value; events.onFramingChange?.(value); }
    steer(new THREE.Vector3(0, FRAMES[value].y, 0), direction(), span('whole') / span(value));
  }

  function setFacing(value) {
    if (!Object.hasOwn(VIEWS, value)) return;
    steer(tween?.target ?? controls.target, new THREE.Vector3().fromArray(VIEWS[value]),
      tween ? Math.exp(tween.toZoom) : camera.zoom);
  }

  function reset() {
    if (framing !== 'whole') { framing = 'whole'; events.onFramingChange?.(framing); }
    steer(new THREE.Vector3(0, FRAMES.whole.y, 0), new THREE.Vector3(0, 0, 1), 1);
  }

  function zoom(factor) {
    if (!(factor > 0) || !Number.isFinite(factor)) return;
    steer(tween?.target ?? controls.target, direction(), (tween ? Math.exp(tween.toZoom) : camera.zoom) * factor);
  }

  function setSelection(id) {
    selected = id ?? null; focusDirty = true;
    const organ = organs.get(selected);
    const point = organ && getAnchor(selected);
    if (point && !point.visible) {
      const high = organ.anchor.y > 1.52 || organ.anchor.y < 0.80;
      setFraming(high ? 'whole' : framing);
    }
    drawSoon();
  }

  function setHover(id) {
    externalHover = id ?? null; focusDirty = true;
    drawSoon();
  }

  function setActive(value) {
    if (disposed || active === Boolean(value)) return;
    active = Boolean(value);
    controls.enabled = active;
    if (!active) {
      cancelAnimationFrame(frame); frame = 0; tween = tap = hoverPoint = null;
      dragging = false; externalHover = null; pointerFocus(null);
      renderer.setDrawingBufferSize(1, 1, 1);
      width = height = 0;
    } else {
      resumeWaiters.forEach(resolve => resolve()); resumeWaiters.clear();
      previousTime = 0; poseDirty = focusDirty = true; drawSoon();
    }
  }

  async function addAsset(job) {
    const url = new URL(job.url, import.meta.url);
    const response = await fetch(url, { signal: requests.signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const binary = await response.arrayBuffer();
    requests.signal.throwIfAborted();
    const gltf = await loader.parseAsync(binary, new URL('.', url).href);
    const root = gltf.scene, owned = collect(root);
    if (disposed) { owned.dispose(); return; }
    resources.push(owned);
    if (!owned.meshes.length) throw new Error('没有可显示的三维网格');
    root.updateMatrixWorld(true);
    const bounds = new THREE.Box3().setFromObject(root);
    const size = bounds.getSize(new THREE.Vector3());
    if (!Number.isFinite(size.length()) || !size.lengthSq()) throw new Error('三维尺寸无效');
    if (job.shell) {
      for (const material of owned.materials) enableSkinFocus(material, skinFocus);
      for (const mesh of owned.meshes) {
        if (!mesh.geometry.attributes.normal) mesh.geometry.computeVertexNormals();
        mesh.renderOrder = 10;
      }
      surfaceReady = true;
    } else {
      const materials = Array.from(owned.materials, material => ({
        material, opacity: material.opacity, transparent: material.transparent,
        depthWrite: material.depthWrite, singlePass: material.forceSinglePass,
      }));
      const center = bounds.getCenter(new THREE.Vector3());
      const anchor = job.anchor ? new THREE.Vector3().fromArray(job.anchor) : surfaceAnchor(owned.meshes, center);
      organs.set(job.id, { meshes: owned.meshes, bounds, corners: corners(bounds), projected: new THREE.Box3(),
        anchor, materials, opacity: 1, targetOpacity: 1 });
      for (const mesh of owned.meshes) meshOwners.set(mesh, job.id);
    }
    scene.add(root);
    poseDirty = focusDirty = true;
    drawSoon();
  }

  async function loadAll() {
    const entries = Object.values(bodySpecimens);
    const queue = [{ id: 'surface', url: SHELL, shell: true }, ...entries];
    let next = 0, done = 0;
    async function worker() {
      while (!disposed && next < queue.length) {
        if (!active) {
          await new Promise(resolve => resumeWaiters.add(resolve));
          continue;
        }
        const job = queue[next++];
        try { await addAsset(job); }
        catch (error) { if (!disposed) failures.push({ id: job.id, message: error.message }); }
        if (!disposed) events.onLoadProgress?.(++done / queue.length, { done, total: queue.length, id: job.id });
      }
    }
    await Promise.all([worker(), worker(), worker()]);
    const ids = entries.map(job => job.id).filter(id => organs.has(id));
    const summary = { ids, missing: entries.map(job => job.id).filter(id => !organs.has(id)),
      failures, surfaceReady, disposed };
    if (!disposed) {
      poseDirty = true; drawSoon();
      events.onReady?.(summary);
      if (!surfaceReady || !ids.length) {
        events.onError?.(new Error(!surfaceReady ? '人体体表模型加载失败' : '人体内的器官模型均未能加载'), summary);
      } else if (failures.length) events.onPartial?.(summary);
    }
    return summary;
  }

  function keydown(event) {
    if (!active || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === '+' || event.key === '=') zoom(1.25);
    else if (event.key === '-') zoom(0.8);
    else if (event.key === 'Home' || event.key === '0' || event.key.toLowerCase() === 'r') reset();
    else {
      const step = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[event.key];
      if (!step) return;
      const angles = new THREE.Spherical().setFromVector3(direction());
      angles.theta += step[0] * Math.PI / 10;
      angles.phi = THREE.MathUtils.clamp(angles.phi + step[1] * Math.PI / 10, 0.025, Math.PI - 0.025);
      steer(controls.target, new THREE.Vector3().setFromSpherical(angles), camera.zoom);
    }
    event.preventDefault();
  }

  controls.addEventListener('change', () => { poseDirty = true; drawSoon(); });
  controls.addEventListener('start', () => { tween = null; dragging = true; hoverPoint = null; });
  controls.addEventListener('end', () => { dragging = false; drawSoon(); });
  canvas.addEventListener('pointerdown', event => {
    tap = event.button === 0 && event.isPrimary ? { id: event.pointerId, x: event.clientX, y: event.clientY } : null;
  }, listen);
  canvas.addEventListener('pointermove', event => {
    if (!active) return;
    if (tap && Math.hypot(event.clientX - tap.x, event.clientY - tap.y) > 5) { tap = null; pointerFocus(null); }
    if (!dragging && event.pointerType !== 'touch') { hoverPoint = { x: event.clientX, y: event.clientY }; drawSoon(); }
  }, listen);
  canvas.addEventListener('pointerup', event => {
    const start = tap; tap = null;
    if (!active || !start || start.id !== event.pointerId || Math.hypot(event.clientX - start.x, event.clientY - start.y) > 5) return;
    const id = pointerToOrgan(event.clientX, event.clientY);
    events.onPick?.(id);
  }, listen);
  canvas.addEventListener('pointercancel', () => { tap = hoverPoint = null; pointerFocus(null); }, listen);
  canvas.addEventListener('pointerleave', () => { hoverPoint = null; pointerFocus(null); }, listen);
  canvas.addEventListener('keydown', keydown, listen);
  canvas.addEventListener('webglcontextlost', event => {
    event.preventDefault(); lost = true;
    if (events.onContextLost) events.onContextLost();
    else events.onError?.(new Error('人体三维绘制中断，正在等待浏览器恢复。'));
  }, listen);
  canvas.addEventListener('webglcontextrestored', () => { lost = false; width = 0; events.onRestore?.(); drawSoon(); }, listen);
  document.addEventListener('visibilitychange', drawSoon, listen);
  reduce.addEventListener('change', () => { controls.enableDamping = !reduce.matches; drawSoon(); }, listen);
  const observer = new ResizeObserver(drawSoon);
  observer.observe(canvas);
  const ready = loadAll();
  drawSoon();
  return {
    ready, setSelection, setHover, setFraming, setFacing, setActive, getAnchor, zoom, reset,
    dispose() {
      if (disposed) return;
      disposed = true; cancelAnimationFrame(frame);
      requests.abort(); resumeWaiters.forEach(resolve => resolve()); resumeWaiters.clear(); listeners.abort();
      observer.disconnect(); controls.dispose();
      resources.forEach(resource => resource.dispose()); renderer.dispose();
    },
  };
}
