import { specimens } from './specimens.js';
import { createBodyMap } from './body-map.js';

const byId = id => document.getElementById(id);
const svgNS = 'http://www.w3.org/2000/svg';
const scene = byId('scene');
const stage = byId('stage');
const observer = byId('observer');
const list = byId('parts');
const presetBar = byId('display-presets');
const soloPart = byId('solo-part');
const state = { specimen: null, asset: null, parts: [], rows: new Map(), modes: new Map(), picked: null, ready: false, lost: false, loadError: null, spin: false, serial: 0 };
let viewer;
let activeScreen;
let bodyMap;

function icon(name) {
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('class', 'icon');
  svg.setAttribute('aria-hidden', 'true');
  const use = document.createElementNS(svgNS, 'use');
  use.setAttribute('href', '#i-' + name);
  svg.append(use);
  return svg;
}

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function labelButton(button, label) {
  button.setAttribute('aria-label', label);
  button.title = label;
}

function announce(text) { byId('announcement').textContent = text; }

function adjacent(specimen, step) {
  return specimens[(specimens.indexOf(specimen) + step + specimens.length) % specimens.length];
}

function partRow(part) {
  const row = element('li','part-row');
  row.dataset.part = part.id;
  const name = element('button','part-name');
  name.type = 'button';
  labelButton(name,'聚焦' + part.name);
  const dot = element('span','swatch');
  if (part.color) dot.style.setProperty('--part-color', part.color);
  name.append(dot,element('span','',part.name));
  const wire = element('button','part-action');
  const hide = element('button','part-action');
  wire.type = hide.type = 'button';
  wire.dataset.action = 'wire';
  hide.dataset.action = 'visibility';
  wire.append(icon('wire'));
  hide.append(icon('eye'));
  name.addEventListener('click', () => {
    if (state.modes.get(part.id).hidden) togglePart(part, 'visibility');
    if (viewer.framePart(part.id)) pickPart(part.id, false);
  });
  wire.addEventListener('click', () => togglePart(part,'wire'));
  hide.addEventListener('click', () => togglePart(part,'visibility'));
  row.append(name,wire,hide);
  state.rows.set(part.id,{ row, name, wire, hide });
  return row;
}

function setLayerRows(parts) {
  state.parts = parts;
  state.rows = new Map();
  state.modes = new Map();
  state.picked = null;
  const fragment = document.createDocumentFragment();
  for (const part of parts) {
    const initial = part.mode ?? part.defaultMode ?? 'solid';
    state.modes.set(part.id, { wire: initial === 'wire', hidden: initial === 'hidden' });
    fragment.append(partRow(part));
    updateRow(part);
  }
  list.replaceChildren(fragment);
  const soloLabel = state.specimen.assets?.[state.asset]?.soloLabel;
  soloPart.hidden = !soloLabel;
  soloPart.replaceChildren();
  if (soloLabel) {
    soloPart.setAttribute('aria-label', soloLabel);
    soloPart.add(new Option('选择单个肺段', ''));
    for (const part of parts) soloPart.add(new Option(part.name, part.id));
  }
  list.scrollTop = 0;
  byId('part-count').textContent = String(parts.length).padStart(2,'0');
  byId('part-count').setAttribute('aria-label', parts.length + ' 个结构图层');
}

function updateRow(part) {
  const { wire, hidden } = state.modes.get(part.id);
  const refs = state.rows.get(part.id);
  refs.row.dataset.mode = hidden ? 'hidden' : wire ? 'wire' : 'solid';
  refs.name.setAttribute('aria-pressed', String(state.picked === part.id));
  refs.row.classList.toggle('selected',state.picked === part.id);
  for (const control of [refs.name,refs.wire,refs.hide]) control.disabled = !state.ready || state.lost;
  labelButton(refs.wire, part.name + (wire ? '，切回实体' : '，切为线框'));
  labelButton(refs.hide, (hidden ? '显示' : '隐藏') + part.name);
  refs.wire.setAttribute('aria-pressed',String(wire));
  refs.hide.setAttribute('aria-pressed',String(hidden));
  refs.hide.querySelector('use').setAttribute('href',hidden ? '#i-eye-off' : '#i-eye');
}

function applyPart(part) {
  const value = state.modes.get(part.id);
  viewer.setMode(part.id, value.hidden ? 'hidden' : value.wire ? 'wire' : 'solid');
  updateRow(part);
}

function togglePart(part, action) {
  if (!state.ready) return;
  const mode = state.modes.get(part.id);
  if (action === 'wire') mode.wire = !mode.wire;
  else mode.hidden = !mode.hidden;
  applyPart(part);
  updatePresets();
  recordLayers();
}

function pickPart(id, scrollRow = true) {
  if (state.picked === id) return;
  const old = state.rows.get(state.picked);
  if (old) {
    old.row.classList.remove('selected');
    old.name.setAttribute('aria-pressed','false');
  }
  state.picked = id;
  const current = state.rows.get(id);
  if (!current) return;
  current.row.classList.add('selected');
  current.name.setAttribute('aria-pressed','true');
  if (scrollRow && list.scrollHeight > list.clientHeight) {
    const rect = current.row.getBoundingClientRect();
    const bounds = list.getBoundingClientRect();
    if (rect.top < bounds.top) list.scrollTop += rect.top - bounds.top;
    else if (rect.bottom > bounds.bottom) list.scrollTop += rect.bottom - bounds.bottom;
  }
  announce('已选中' + current.name.textContent);
}

let displayViews = [];

function specimenViews(specimen) {
  return [
    { key: 'whole', buttonId: 'whole', label: specimen.wholeLabel ?? '完整外观', icon: 'cube' },
    specimen.interior
      ? { ...specimen.interior, key: 'interior', buttonId: 'reveal', icon: 'section' }
      : { key: 'wire', buttonId: 'reveal', label: '整体线框', icon: 'wire', defaultMode: 'wire' },
    ...(specimen.isolatedViews ?? []),
  ];
}

function showViewButtons(specimen) {
  displayViews = specimenViews(specimen);
  presetBar.replaceChildren(...displayViews.map(view => {
    const button = element('button');
    button.type = 'button';
    button.id = view.buttonId ?? 'view-' + view.key;
    button.dataset.view = view.key;
    button.disabled = !state.ready || state.lost;
    button.setAttribute('aria-pressed', 'false');
    if (view.icon) button.append(icon(view.icon));
    button.append(element('span', '', view.label));
    button.addEventListener('click', () => preset(view));
    return button;
  }));
}

function viewMode(view, partId) {
  if (view.only) return view.only.includes(partId) ? 'solid' : 'hidden';
  return view.modes?.[partId] ?? view.defaultMode ?? 'solid';
}

function updatePresets() {
  for (const [index, view] of displayViews.entries()) {
    const selected = state.ready && (view.asset ?? null) === state.asset && state.parts.every(part => {
      const mode = state.modes.get(part.id);
      const display = mode.hidden ? 'hidden' : mode.wire ? 'wire' : 'solid';
      return display === viewMode(view, part.id);
    });
    presetBar.children[index].setAttribute('aria-pressed', String(selected));
  }
  if (!soloPart.hidden) {
    const visible = state.parts.filter(part => !state.modes.get(part.id).hidden);
    soloPart.value = visible.length === 1 && !state.modes.get(visible[0].id).wire ? visible[0].id : '';
  }
}

function showSoloPart(id, remember = true) {
  const part = state.parts.find(item => item.id === id);
  const view = displayViews.find(item => item.asset === state.asset);
  if (view) preset(part ? { asset: state.asset, only: [part.id], label: part.name } : view, remember);
}

function preset(view, remember = true) {
  if (!state.ready) return;
  if ((view.asset ?? null) !== state.asset) {
    const url = new URL(location.href);
    clearLayerParams(url);
    if (view.key !== 'whole') url.searchParams.set('view', view.key);
    history.replaceState(null, '', url);
    selectSpecimen(state.specimen);
    return;
  }
  pickPart(null);
  for (const part of state.parts) {
    const next = viewMode(view, part.id);
    state.modes.set(part.id,{ wire: next === 'wire', hidden: next === 'hidden' });
    applyPart(part);
  }
  updatePresets();
  if (remember) recordLayers();
  if (remember && !state.lost) announce(view.label);
}

function clearLayerParams(url) {
  for (const key of ['view','asset','wire','hide','part']) url.searchParams.delete(key);
}

function assetFromUrl(specimen) {
  if (!specimen.assets) return null;
  const params = new URLSearchParams(location.search);
  const preset = specimenViews(specimen).find(view => view.key === params.get('view'));
  if (preset) return preset.asset ?? null;
  const asset = params.get('asset');
  if (asset && Object.hasOwn(specimen.assets, asset)) return asset;
  if (params.get('view') === 'wire' && specimen.legacyLayers) return specimen.legacyLayers;
  const layers = ['wire','hide'].flatMap(key => (params.get(key) ?? '').split(',')).filter(Boolean);
  if (layers.length && specimen.legacyLayers) {
    const priorParts = specimen.assets[specimen.legacyLayers].parts;
    if (layers.every(id => priorParts.some(part => part.id === id))) return specimen.legacyLayers;
  }
  return null;
}

function recordLayers() {
  const url = new URL(location.href);
  clearLayerParams(url);
  const hiddenWire = state.parts.some(part => {
    const mode = state.modes.get(part.id);
    return mode.hidden && mode.wire;
  });
  const selected = presetBar.querySelector('[aria-pressed="true"]')?.dataset.view;
  if (!hiddenWire && selected && selected !== 'whole') {
    url.searchParams.set('view',selected);
  } else if (!hiddenWire && !soloPart.hidden && soloPart.value) {
    url.searchParams.set('asset',state.asset);
    url.searchParams.set('part',soloPart.value);
  } else {
    if (state.asset) url.searchParams.set('asset',state.asset);
    for (const [key,property] of [['wire','wire'],['hide','hidden']]) {
      const ids = state.parts.filter(part => state.modes.get(part.id)[property]).map(part => part.id);
      if (ids.length) url.searchParams.set(key, ids.join(','));
    }
  }
  if (url.href !== location.href) history.replaceState(null,'',url);
}

function restoreLayerParams() {
  const params = new URLSearchParams(location.search);
  if (!soloPart.hidden && state.parts.some(part => part.id === params.get('part'))) {
    showSoloPart(params.get('part'), false);
    return;
  }
  const view = displayViews.find(item => item.key === params.get('view'));
  if (view) {
    preset(view,false);
    return;
  }
  if (params.get('view') === 'wire' && state.asset && state.asset === state.specimen.legacyLayers) {
    preset({ asset: state.asset, defaultMode: 'wire' }, false);
    return;
  }
  const wire = new Set((params.get('wire') ?? '').split(','));
  const hidden = new Set((params.get('hide') ?? '').split(','));
  for (const part of state.parts) {
    if (wire.has(part.id) || hidden.has(part.id)) {
      state.modes.set(part.id,{ wire: wire.has(part.id), hidden: hidden.has(part.id) });
      applyPart(part);
    }
  }
  updatePresets();
}

function updateAxes(azimuth, elevation) {
  const a = azimuth * Math.PI / 180, e = elevation * Math.PI / 180;
  const components = [
    [Math.cos(a), -Math.sin(a) * Math.sin(e)],
    [0, Math.cos(e)],
    [-Math.sin(a), -Math.cos(a) * Math.sin(e)],
  ];
  document.querySelectorAll('#axes g').forEach((group, i) => {
    const [x,y] = components[i];
    const line = group.querySelector('line'), label = group.querySelector('text');
    line.setAttribute('x1','32'); line.setAttribute('y1','32');
    line.setAttribute('x2',32 + x * 17); line.setAttribute('y2',32 - y * 17);
    label.setAttribute('x',32 + x * 25); label.setAttribute('y',32 - y * 25);
  });
}

function poseChanged({ zoom, azimuth, elevation, spinning }) {
  byId('zoom-value').value = zoom.toFixed(1) + '×';
  if (state.spin !== spinning) {
    state.spin = spinning;
    const button = byId('spin');
    button.setAttribute('aria-pressed',String(spinning));
    button.querySelector('span').textContent = spinning ? '暂停旋转' : '自动旋转';
    button.querySelector('use').setAttribute('href',spinning ? '#i-pause' : '#i-orbit');
    button.title = spinning ? '暂停旋转' : '自动旋转';
  }
  updateAxes(azimuth,elevation);
}

function setBusy(busy) {
  state.ready = !busy;
  stage.classList.toggle('is-loading',busy && !state.lost);
  stage.setAttribute('aria-busy',String(busy && !state.lost));
  for (const button of presetBar.children) button.disabled = busy || state.lost;
  soloPart.disabled = busy || state.lost;
  for (const id of ['zoom-in','zoom-out','spin','reset-view']) byId(id).disabled = busy || state.lost;
}

function showError(message, retry = true) {
  byId('stage-message').hidden = false;
  byId('stage-message').classList.add('is-error');
  byId('load-message').textContent = message;
  byId('retry').hidden = !retry;
  stage.setAttribute('aria-busy','false');
}

function contextChanged(lost) {
  state.lost = lost;
  setBusy(!state.ready);
  for (const part of state.parts) updateRow(part);
  if (lost) {
    showError('三维绘制暂时中断，正在等待浏览器恢复。',false);
  } else if (state.loadError) {
    showError(state.loadError);
  } else if (state.ready) {
    byId('stage-message').hidden = true;
  } else {
    byId('stage-message').classList.remove('is-error');
    byId('load-message').textContent = '正在准备图层';
  }
}

async function renderer() {
  if (viewer) return viewer;
  const { createViewer } = await import('./viewer.js');
  if (!viewer) viewer = createViewer(scene, {
    onPoseChange: poseChanged,
    onPick: pickPart,
    onLoadProgress: progress => {
      if (state.lost) return;
      byId('load-message').textContent = progress >= .88 ? '正在准备图层' : progress > 0 ? '正在读取模型 ' + Math.round(progress * 100) + '%' : '正在读取模型';
    },
    onContextLost: () => contextChanged(true),
    onRestore: () => contextChanged(false),
  });
  return viewer;
}

async function selectSpecimen(specimen, remember = false, force = false) {
  const asset = remember ? null : assetFromUrl(specimen);
  if (!force && specimen === state.specimen && asset === state.asset) {
    if (state.ready && !remember) {
      for (const part of state.parts) {
        const initial = part.mode ?? part.defaultMode ?? 'solid';
        state.modes.set(part.id, { wire: initial === 'wire', hidden: initial === 'hidden' });
        applyPart(part);
      }
      restoreLayerParams();
    }
    return;
  }
  const presentation = asset ? { ...specimen, ...specimen.assets[asset] } : specimen;
  const serial = ++state.serial;
  state.specimen = specimen;
  state.asset = asset;
  state.loadError = null;
  setBusy(true);
  if (remember) {
    const url = new URL(location.href);
    clearLayerParams(url);
    url.searchParams.delete('locate');
    url.hash = '';
    url.searchParams.set('organ',specimen.id);
    history.pushState(null,'',url);
  }
  byId('detail-organ').value = specimen.id;
  const number = String(specimens.indexOf(specimen) + 1).padStart(2,'0');
  byId('serial').textContent = number + ' / ' + String(specimens.length).padStart(2,'0');
  byId('organ-name').textContent = specimen.name;
  byId('latin-name').textContent = specimen.latin;
  byId('system').textContent = specimen.system;
  byId('scope-note').textContent = presentation.note;
  byId('review').textContent = presentation.version + ' · ' + presentation.status;
  const sourceLink = byId('source');
  sourceLink.hidden = !presentation.source;
  if (presentation.source) {
    sourceLink.href = presentation.source;
    labelButton(sourceLink,'查看' + specimen.name + '的原图库记录');
  } else {
    sourceLink.removeAttribute('href');
  }
  showViewButtons(specimen);
  if (!state.lost) {
    byId('stage-message').hidden = false;
    byId('stage-message').classList.remove('is-error');
    byId('retry').hidden = true;
    byId('load-message').textContent = '正在读取模型';
  }
  document.title = specimen.name + ' · Organ Atlas 器官图谱';
  setLayerRows(presentation.parts);
  updatePresets();
  stage.classList.remove('switching');
  requestAnimationFrame(() => { if (serial === state.serial) stage.classList.add('switching'); });
  try {
    const activeViewer = await renderer();
    if (serial !== state.serial) return;
    const result = await activeViewer.load(presentation);
    if (serial !== state.serial) return;
    setBusy(false);
    setLayerRows(result.parts);
    restoreLayerParams();
    if (!state.lost) {
      byId('stage-message').hidden = true;
      announce('已载入' + specimen.name + '，共 ' + result.parts.length + ' 个图层');
    }
  } catch (error) {
    if (serial !== state.serial || error.name === 'AbortError') return;
    const message = /webgl|context|renderer/i.test(error.message) ?
      '浏览器未能启动三维绘制。请检查图形加速后重试。' : '模型加载失败。' + error.message;
    state.loadError = message;
    if (!state.lost) showError(message);
  }
}

function currentFromUrl() {
  const slug = new URL(location.href).searchParams.get('organ');
  return specimens.find(item => item.id === slug) ?? specimens[0];
}

function closeHelp() {
  byId('help').hidden = true;
  byId('help-toggle').setAttribute('aria-expanded','false');
}

function syncFullscreen() {
  const full = !byId('workspace').hidden && (document.fullscreenElement === observer || observer.classList.contains('fallback-full'));
  const button = byId('fullscreen');
  button.querySelector('use').setAttribute('href', full ? '#i-collapse' : '#i-expand');
  labelButton(button, full ? '退出全屏' : '全屏观察');
  button.setAttribute('aria-pressed',String(full));
  const layersButton = byId('layers-toggle');
  layersButton.setAttribute('aria-expanded',String(full));
  layersButton.querySelector('span').textContent = full ? '完成' : '结构图层';
  layersButton.querySelector('use').setAttribute('href',full ? '#i-check' : '#i-layers');
  document.body.classList.toggle('full-stage',full);
  document.querySelector('.site-header').inert = full;
  byId('collection').inert = full;
  document.querySelector('.skip-link').inert = full;
}

async function toggleFullscreen(native = true) {
  closeHelp();
  if (document.fullscreenElement === observer) await document.exitFullscreen();
  else if (observer.classList.contains('fallback-full')) observer.classList.remove('fallback-full');
  else if (!native) observer.classList.add('fallback-full');
  else {
    try {
      if (!observer.requestFullscreen || !document.fullscreenEnabled) throw new Error();
      await observer.requestFullscreen();
    } catch { observer.classList.add('fallback-full'); }
  }
  syncFullscreen();
}

soloPart.addEventListener('change',() => showSoloPart(soloPart.value));
byId('spin').addEventListener('click',() => viewer?.setSpin(!state.spin));
byId('zoom-in').addEventListener('click',() => viewer?.zoom(1.25));
byId('zoom-out').addEventListener('click',() => viewer?.zoom(.8));
byId('reset-view').addEventListener('click',() => viewer?.reset());
byId('retry').addEventListener('click',() => selectSpecimen(state.specimen,false,true));
byId('prev').addEventListener('click',() => selectSpecimen(adjacent(state.specimen,-1),true));
byId('next').addEventListener('click',() => selectSpecimen(adjacent(state.specimen,1),true));
for (const specimen of specimens) byId('detail-organ').add(new Option(specimen.name,specimen.id));
byId('detail-organ').addEventListener('change', event => {
  const specimen = specimens.find(item => item.id === event.target.value);
  if (specimen) selectSpecimen(specimen,true);
});
byId('help-toggle').addEventListener('click',() => {
  const open = byId('help').hidden;
  byId('help').hidden = !open;
  byId('help-toggle').setAttribute('aria-expanded',String(open));
});
document.addEventListener('pointerdown',event => {
  if (!byId('help').hidden && !byId('help').contains(event.target) && !byId('help-toggle').contains(event.target)) closeHelp();
});
document.addEventListener('keydown',event => {
  if (event.key !== 'Escape') return;
  if (!byId('help').hidden) { closeHelp(); byId('help-toggle').focus(); }
  if (observer.classList.contains('fallback-full')) { observer.classList.remove('fallback-full'); syncFullscreen(); }
});
byId('fullscreen').addEventListener('click',() => toggleFullscreen());
byId('layers-toggle').addEventListener('click',() => toggleFullscreen(false));
document.addEventListener('fullscreenchange',syncFullscreen);
function openDetail(specimen) {
  const url = new URL(location.href);
  if (url.searchParams.get('organ') !== specimen.id) clearLayerParams(url);
  url.hash = '';
  url.searchParams.delete('locate');
  url.searchParams.set('organ',specimen.id);
  if (url.href !== location.href) history.pushState(null,'',url);
  showRoute();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function showRoute() {
  const params = new URLSearchParams(location.search);
  const overview = location.hash === '#collection' || location.hash === '#body' ||
    (location.hash !== '#workspace' && !params.has('organ') && !params.has('view') && !params.has('wire') && !params.has('hide'));
  const next = overview ? 'body' : 'detail';
  byId('collection').hidden = !overview;
  byId('workspace').hidden = overview;
  for (const [link, active] of [[byId('overview-link'),overview],[byId('detail-link'),!overview]]) {
    link.classList.toggle('active',active);
    if (active) link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  }
  if (overview) {
    document.title = '人体总览 · Organ Atlas 器官图谱';
    if (activeScreen === 'detail') {
      closeHelp();
      observer.classList.remove('fallback-full');
      if (document.fullscreenElement === observer) document.exitFullscreen().catch(syncFullscreen);
      syncFullscreen();
    }
    viewer?.setSpin(false);
    if (!bodyMap) bodyMap = createBodyMap(specimens,openDetail,id => {
      const url = new URL(location.pathname,location.href);
      url.searchParams.set('organ',id ?? state.specimen?.id ?? specimens[0].id);
      byId('detail-link').href = url.href;
    });
    bodyMap.setActive(true);
    const locate = params.get('locate') ?? params.get('organ') ?? null;
    if (activeScreen !== next || bodyMap.selected !== locate) bodyMap.select(locate,false);
  } else {
    bodyMap?.setActive(false);
    const specimen = currentFromUrl();
    document.title = specimen.name + ' · Organ Atlas 器官图谱';
    byId('detail-link').href = location.href;
    selectSpecimen(specimen);
  }
  activeScreen = next;
}

byId('detail-link').addEventListener('click',event => {
  if (activeScreen !== 'body' || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  openDetail(specimens.find(item => item.id === bodyMap?.selected) ?? state.specimen ?? specimens[0]);
});
window.addEventListener('hashchange',showRoute);
window.addEventListener('popstate',showRoute);
window.addEventListener('pagehide',event => {
  if (!event.persisted) { viewer?.dispose(); bodyMap?.dispose(); }
});
showRoute();
