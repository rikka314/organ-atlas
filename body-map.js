import { bodySpecimens } from './body-specimens.js?v=639ef82774f7';

const byId = id => document.getElementById(id);
const svgNS = 'http://www.w3.org/2000/svg';
const regions = [
  ['头面部', ['brain', 'eye', 'dentition']],
  ['颈胸部', ['trachea', 'esophagus', 'lungs', 'heart']],
  ['腹盆部', ['liver', 'stomach', 'pancreas', 'spleen', 'kidney', 'intestines']],
];
const shortNames = { trachea: '气管与主支气管', intestines: '大小肠', dentition: '上下恒牙列' };
const tagSide = { eye: -1, dentition: 1, trachea: 1, lungs: -1, heart: 1, esophagus: -1, liver: -1, stomach: 1, pancreas: -1, spleen: 1, kidney: 1, intestines: 1 };
const baseTags = ['eye', 'trachea', 'lungs', 'heart', 'liver', 'intestines'];
const mobileTags = ['lungs', 'heart', 'liver'];

const clamp = (v, low, high) => Math.max(low, Math.min(v,high));

export function createBodyMap(specimens, openDetail, onSelection) {
  const bySpecimenId = new Map(specimens.map(specimen => [specimen.id,specimen]));
  const nameOf = id => shortNames[id] ?? bySpecimenId.get(id)?.name ?? id;
  const canvas = byId('body-canvas'), viewport = byId('body-viewport');
  const labelRoot = byId('body-labels'), leaders = byId('body-leaders');
  const rows = new Map(), tags = new Map();
  const regionList = byId('body-index-list'), selectBox = byId('body-organ-select');
  const credit = byId('body-credit');
  let viewer, loading, generation = 0, active = false, disposed = false, labelsFrame = 0;
  let selected = null, hovered = null, lost = false, loadSummary = null;

  function showMessage(text, failure = false, retry = false) {
    byId('body-message-text').textContent = text ?? '';
    byId('body-message').hidden = !text;
    byId('body-message').classList.toggle('failure',failure);
    byId('body-retry').hidden = !retry;
  }

  function requestLabels() {
    if (!disposed && active && !labelsFrame) labelsFrame = requestAnimationFrame(layoutLabels);
  }

  function layoutLabels() {
    labelsFrame = 0;
    if (!active || !viewer || !loadSummary || lost) return;
    const w = viewport.clientWidth, h = viewport.clientHeight;
    if (w < 1 || h < 1) return;
    const compact = w < 530;
    const ids = new Set([...(compact ? mobileTags : baseTags), selected, hovered].filter(Boolean));
    const sides = [[],[]];
    for (const [id, tag] of tags) {
      const point = ids.has(id) ? viewer.getAnchor(id) : null;
      const show = Boolean(point?.visible);
      tag.button.hidden = !show;
      tag.lineGroup.style.display = show ? '' : 'none';
      if (!show) continue;
      const item = { id, tag, point, y:point.y };
      sides[(tagSide[id] ?? 1) < 0 ? 0 : 1].push(item);
    }
    const top = compact ? 55 : 23, bottom = h - 20, gap = compact ? 32 : 36;
    const distance = Math.min(w * (compact ? .24 : .31), h * .29);
    sides.forEach((items,side) => {
      items.sort((a,b) => a.point.y - b.point.y);
      let last = top-gap;
      for (const item of items) { item.y = Math.max(clamp(item.y,top,bottom), last+gap); last=item.y; }
      last = bottom+gap;
      for (let i=items.length-1;i>=0;i--) { items[i].y = Math.min(items[i].y,last-gap); last=items[i].y; }
      for (const {id,tag,point,y} of items) {
        const width = tag.button.offsetWidth;
        const x = clamp(w/2 + (side ? distance : -distance-width), 5, w-width-5);
        tag.button.style.transform = 'translate(' + Math.round(x) + 'px,' + Math.round(y-tag.button.offsetHeight/2) + 'px)';
        const edge = side ? x : x+width, knee = edge+(side ? -1 : 1)*Math.min(16,Math.abs(edge-point.x)*.3);
        tag.path.setAttribute('d','M'+edge+','+y+'H'+knee+'L'+point.x.toFixed(1)+','+point.y.toFixed(1));
        tag.dot.setAttribute('cx',point.x.toFixed(1));
        tag.dot.setAttribute('cy',point.y.toFixed(1));
        tag.lineGroup.classList.toggle('active',id===selected || id===hovered);
      }
    });
  }

  function hover(id) {
    if (hovered === id) return;
    hovered = id;
    viewer?.setHover(id);
    requestLabels();
  }

  function select(id, remember = true) {
    const specimen = bySpecimenId.get(id);
    selected = specimen?.id ?? null;
    viewer?.setSelection(selected);
    for (const [key,row] of rows) row.setAttribute('aria-pressed',String(key===selected));
    for (const [key,tag] of tags) tag.button.setAttribute('aria-pressed',String(key===selected));
    selectBox.value = selected ?? '';
    byId('body-picked-name').textContent = specimen ? nameOf(id) : '选择一个器官';
    byId('body-picked-description').textContent = bodySpecimens[id]?.version ?? specimen?.version ?? '可在人体或索引上点选';
    const image = byId('body-picked-image');
    image.hidden = !specimen?.thumbnail;
    if (specimen?.thumbnail) image.src = specimen.thumbnail;
    else image.removeAttribute('src');
    byId('body-open').disabled = !selected;
    byId('body-clear').hidden = !selected;
    if (remember) {
      const url = new URL(location.href);
      for (const key of ['organ','asset','view','wire','hide','part']) url.searchParams.delete(key);
      if (selected) url.searchParams.set('locate',selected);
      else url.searchParams.delete('locate');
      if (url.href !== location.href) history.replaceState(null,'',url);
    }
    onSelection(selected);
    requestLabels();
  }

  function addButtonListeners(button,id) {
    button.addEventListener('click',() => select(id));
    button.addEventListener('pointerenter',event => { if (event.pointerType === 'mouse') hover(id); });
    button.addEventListener('pointerleave',() => hover(null));
    button.addEventListener('focus',() => { if (button.matches(':focus-visible')) hover(id); });
    button.addEventListener('blur',() => hover(null));
  }

  function addRegion(title, ids) {
    if (!ids.length) return;
    const section = document.createElement('section');
    section.className = 'body-region';
    const heading = document.createElement('h3');
    heading.textContent = title;
    section.append(heading);
    const options = document.createElement('optgroup');
    options.label = title;
    for (const id of ids) {
      const name = nameOf(id);
      const row = document.createElement('button');
      row.type = 'button'; row.className = 'body-index-row';
      row.dataset.organ = id; row.textContent = name;
      row.setAttribute('aria-label','定位' + name);
      row.setAttribute('aria-pressed','false');
      addButtonListeners(row,id); rows.set(id,row);
      section.append(row); options.append(new Option(name,id));
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'body-tag'; button.textContent = name;
      button.dataset.organ = id;
      button.setAttribute('aria-label','在人体上定位' + name);
      button.setAttribute('aria-pressed','false'); button.hidden = true;
      addButtonListeners(button,id); labelRoot.append(button);
      const lineGroup = document.createElementNS(svgNS,'g');
      lineGroup.dataset.organ = id;
      const path = document.createElementNS(svgNS,'path'), dot = document.createElementNS(svgNS,'circle');
      dot.setAttribute('r','2.6'); lineGroup.append(path,dot); leaders.append(lineGroup);
      tags.set(id,{button,lineGroup,path,dot});
    }
    regionList.append(section); selectBox.append(options);
  }
  for (const [name,ids] of regions) addRegion(name,ids.filter(id => bySpecimenId.has(id)));
  addRegion('其他部位',specimens.filter(s => !rows.has(s.id)).map(s => s.id));
  byId('body-count').textContent = String(specimens.length);
  byId('body-count').setAttribute('aria-label',specimens.length+' 件模型');

  function facingChanged(facing) {
    byId('body-angle').textContent = ({front:'正面',back:'背面',free:'自由视角'})[facing] ?? '自由视角';
    for (const button of document.querySelectorAll('[data-facing]')) {
      button.setAttribute('aria-pressed',String(button.dataset.facing === facing));
    }
  }
  function framingChanged(framing) {
    for (const button of document.querySelectorAll('[data-frame]')) {
      button.setAttribute('aria-pressed',String(button.dataset.frame === framing));
    }
  }

  function updateSummary(summary) {
    loadSummary = summary;
    const available = new Set(summary.ids);
    for (const [id,row] of rows) row.dataset.missing = String(!available.has(id));
    byId('body-stage').setAttribute('aria-busy','false');
    if (lost) return;
    const missing = [...rows.keys()].filter(id => !available.has(id));
    const messages = [];
    if (!summary.surfaceReady) messages.push('人体体表未载入');
    if (missing.length) messages.push('未载入的部位有' + missing.map(nameOf).join('、'));
    showMessage(messages.join('。'),messages.length>0,messages.length>0);
    viewer?.setSelection(selected);
    requestLabels();
  }

  async function start() {
    if (disposed || loading || viewer) return;
    const token = ++generation;
    byId('body-stage').setAttribute('aria-busy','true');
    showMessage('正在装入人体和器官模型');
    loading = true;
    try {
      const {createBodyViewer} = await import('./body-viewer.js?v=639ef82774f7');
      if (disposed || token !== generation) return;
      viewer = createBodyViewer(canvas,{
        onPick: id => select(id), onHover: id => { hovered=id; requestLabels(); },
        onPoseChange: requestLabels, onFacingChange: facingChanged, onFramingChange: framingChanged,
        onReady: updateSummary,
        onLoadProgress: (_,progress) => { if (!lost) showMessage('正在装入模型 '+progress.done+' / '+progress.total); },
        onError: error => { if (!lost) showMessage(error.message,true,true); },
        onContextLost: () => { lost = true; labelRoot.hidden = true; showMessage('三维绘制暂时中断，正在等待浏览器恢复。',true,false); },
        onRestore: () => { lost = false; labelRoot.hidden = false; if (loadSummary) updateSummary(loadSummary); },
      });
      viewer.setActive(active);
      viewer.setSelection(selected);
      await viewer.ready;
    } catch (error) {
      if (!disposed && token === generation) {
        byId('body-stage').setAttribute('aria-busy','false');
        showMessage('人体总览加载失败。'+error.message,true,true);
      }
    } finally { if (token === generation) loading = false; }
  }

  byId('body-retry').addEventListener('click',() => {
    if (lost || disposed) return;
    generation++;
    viewer?.dispose(); viewer = null; loading = false; loadSummary = null;
    for (const tag of tags.values()) { tag.button.hidden = true; tag.lineGroup.style.display='none'; }
    start();
  });
  byId('body-open').addEventListener('click',() => { if (selected) openDetail(bySpecimenId.get(selected)); });
  byId('body-clear').addEventListener('click',() => { hover(null); select(null); });
  selectBox.addEventListener('change',event => select(event.target.value));
  for (const button of document.querySelectorAll('[data-frame]')) button.addEventListener('click',() => viewer?.setFraming(button.dataset.frame));
  for (const button of document.querySelectorAll('[data-facing]')) button.addEventListener('click',() => viewer?.setFacing(button.dataset.facing));
  byId('body-zoom-in').addEventListener('click',() => viewer?.zoom(1.25));
  byId('body-zoom-out').addEventListener('click',() => viewer?.zoom(.8));
  byId('body-reset').addEventListener('click',() => { hover(null); select(null); viewer?.reset(); });
  byId('body-credit-button').addEventListener('click',() => credit.showModal());
  return {
    get selected() { return selected; },
    select,
    setActive(value) {
      active=value; viewer?.setActive(value);
      if (value) { start(); requestLabels(); } else { hover(null); }
    },
    dispose() { disposed=true; generation++; cancelAnimationFrame(labelsFrame); viewer?.dispose(); },
  };
}
