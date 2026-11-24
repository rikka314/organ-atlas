const canvas = document.getElementById('camera-canvas');
const photo = document.getElementById('camera-photo');
const dock = document.getElementById('camera-dock');
const status = document.getElementById('camera-status');
const message = document.getElementById('camera-message');
const retry = document.getElementById('camera-retry');
const spin = document.getElementById('camera-spin');
const choices = Array.from(document.querySelectorAll('[data-mode]'));

// Directions use glTF coordinates: +Y is up, +Z faces the front of these exhibits.
const exhibits = {
  'sony-a7rv': {
    model: 'model.glb?v=2b46269a480c8f',
    view: [-0.53, 0.38, 1],
    front: { label: '正面渲染', alt: '从握柄一侧观看 Sony α7R V、镜口刻字与镜片反光' },
    rear: { label: '背面渲染', file: 'rear.webp?v=858a9914c04546', alt: 'Sony α7R V 背面的眼罩、背屏、摇杆和控制拨轮' },
  },
  'airpods-max': {
    view: [0.77, 0.33, 1],
    front: { label: '耳机全貌', alt: '从前侧看 AirPods Max 的金属耳罩与网状头梁' },
    rear: { label: '按键细节', file: 'controls.webp', alt: '近看耳罩上的数码旋钮和控制按钮' },
  },
  'unitree-h2-x': {
    view: [0.37, 0.18, 1],
    front: { label: '整机外观', alt: '宇树 H2-X 人形机器人正面斜视' },
    rear: { label: '背面渲染', file: 'back.webp', alt: '从背面观察宇树 H2-X 的躯干、手臂和双腿' },
  },
  'quay-street': {
    view: [0.49, 0.49, 1],
    front: { label: '傍晚街景', alt: '雨后傍晚从对街看码头街的候车棚与路面积水' },
    rear: { label: '站牌近景', file: 'routes.webp', alt: '码头街公交站牌上的站名与两条线路' },
  },
};

const requested = new URLSearchParams(location.search).get('model');
const slug = Object.hasOwn(exhibits, requested) ? requested : 'sony-a7rv';
const exhibit = exhibits[slug];
const assetBase = './media/method-transfer/' + slug + '/';
const currentLink = document.querySelector('.model-option[href="?model=' + slug + '"]');
currentLink.setAttribute('aria-current', 'page');
const title = currentLink.querySelector('strong').textContent;
document.getElementById('exhibit-title').textContent = title;
document.getElementById('exhibit-subtitle').textContent = currentLink.querySelector('small').textContent;
document.title = title + ' · 方法迁移 · Organ Atlas';
canvas.setAttribute('aria-label', title + '。' + canvas.getAttribute('aria-label'));
const specimen = {
  url: assetBase + (exhibit.model ?? 'model.glb'),
  view: exhibit.view,
  parts: [{ id: 'exhibit', name: title }],
};
for (const button of choices.filter(button => button.dataset.mode !== 'model')) {
  const shot = exhibit[button.dataset.mode];
  button.querySelector('span').textContent = shot.label;
  button.querySelector('img').src = shot.file ? assetBase + shot.file : currentLink.querySelector('img').src;
}

let viewer;
let mode = 'model';
let ready = false;
let lost = false;
let failed = false;
let disposed = false;

function updateControls() {
  const showModel = mode === 'model';
  canvas.hidden = !showModel;
  photo.hidden = showModel;
  dock.hidden = !showModel;
  status.hidden = !showModel || (ready && !lost && !failed);
  retry.hidden = !failed;
  for (const button of dock.querySelectorAll('button')) button.disabled = !ready || lost || failed;
  document.getElementById('camera-stage').setAttribute('aria-busy', String(showModel && !ready && !failed && !lost));
}

function selectMode(next) {
  mode = next;
  for (const button of choices) button.setAttribute('aria-pressed', String(button.dataset.mode === mode));
  const showPhoto = mode !== 'model';
  if (showPhoto) {
    viewer?.setSpin(false);
    const button = choices.find(button => button.dataset.mode === mode);
    photo.src = button.querySelector('img').src;
    photo.alt = exhibit[mode].alt;
  }
  document.getElementById('camera-hint').textContent = showPhoto ? 'Blender 成品渲染' : '拖动旋转 · 滚轮缩放';
  updateControls();
}

async function loadModel() {
  ready = false;
  failed = false;
  message.textContent = '正在载入模型…';
  updateControls();
  try {
    if (!viewer) {
      const { createViewer } = await import('./viewer.js?v=fd17c38593011b');
      if (disposed) return;
      viewer = createViewer(canvas, {
        lighting: 'product',
        onLoadProgress(value) {
          if (lost) return;
          message.textContent = value >= .88 ? '正在准备模型材质…' : '正在载入模型…';
        },
        onPoseChange({ zoom, spinning }) {
          document.getElementById('camera-zoom').value = zoom.toFixed(1) + '×';
          spin.setAttribute('aria-pressed', String(spinning));
          spin.querySelector('span').textContent = spinning ? '暂停旋转' : '自动旋转';
          spin.querySelector('use').setAttribute('href', spinning ? '#i-pause' : '#i-orbit');
        },
        onContextLost() {
          lost = true;
          message.textContent = '三维绘制暂时中断，可切换到成品渲染。';
          updateControls();
        },
        onRestore() {
          lost = false;
          message.textContent = failed ? '模型未加载，可重试或查看成品渲染。' : '正在载入模型…';
          updateControls();
        },
      });
    }
    await viewer.load(specimen);
    ready = true;
  } catch (error) {
    if (disposed) return;
    failed = true;
    message.textContent = '模型未加载，可重试或查看成品渲染。';
    console.error(title + ' 三维模型加载失败', error);
  }
  updateControls();
}

for (const button of choices) button.addEventListener('click', () => selectMode(button.dataset.mode));
currentLink.addEventListener('click', event => {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  selectMode('model');
  canvas.focus();
});
spin.addEventListener('click', () => viewer?.setSpin(spin.getAttribute('aria-pressed') !== 'true'));
document.getElementById('camera-zoom-out').addEventListener('click', () => viewer?.zoom(.8));
document.getElementById('camera-zoom-in').addEventListener('click', () => viewer?.zoom(1.25));
document.getElementById('camera-reset').addEventListener('click', () => viewer?.reset());
retry.addEventListener('click', loadModel);
window.addEventListener('pagehide', event => {
  if (event.persisted) viewer?.setSpin(false);
  else {
    disposed = true;
    viewer?.dispose();
  }
});
loadModel();
