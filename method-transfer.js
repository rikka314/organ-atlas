const canvas = document.getElementById('camera-canvas');
const photo = document.getElementById('camera-photo');
const dock = document.getElementById('camera-dock');
const status = document.getElementById('camera-status');
const message = document.getElementById('camera-message');
const retry = document.getElementById('camera-retry');
const spin = document.getElementById('camera-spin');
const choices = Array.from(document.querySelectorAll('[data-mode]'));

const assetBase = './media/method-transfer/sony-a7rv/';
const specimen = {
  url: assetBase + 'model.glb',
  view: [-0.53, 0.38, 1],
  parts: [{ id: 'camera', name: '机身与镜头' }],
};
const photos = {
  front: { file: 'front.webp', alt: '从握柄一侧观看 Sony α7R V、镜口刻字与镜片反光' },
  rear: { file: 'rear.webp', alt: 'Sony α7R V 背面的眼罩、背屏、摇杆和控制拨轮' },
};

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
  const selection = photos[mode];
  if (selection) {
    viewer?.setSpin(false);
    photo.src = assetBase + selection.file;
    photo.alt = selection.alt;
  }
  document.getElementById('camera-hint').textContent = selection ? 'Blender 成品渲染' : '拖动旋转 · 滚轮缩放';
  updateControls();
}

async function loadCamera() {
  ready = false;
  failed = false;
  message.textContent = '正在载入相机模型…';
  updateControls();
  try {
    if (!viewer) {
      const { createViewer } = await import('./viewer.js');
      if (disposed) return;
      viewer = createViewer(canvas, {
        onLoadProgress(value) {
          if (lost) return;
          message.textContent = value >= .88 ? '正在准备模型材质…' : '正在载入相机模型…';
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
          message.textContent = failed ? '模型未加载，可重试或查看成品渲染。' : '正在载入相机模型…';
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
    console.error('相机三维模型加载失败', error);
  }
  updateControls();
}

for (const button of choices) button.addEventListener('click', () => selectMode(button.dataset.mode));
document.getElementById('select-camera').addEventListener('click', () => {
  selectMode('model');
  canvas.focus();
});
spin.addEventListener('click', () => viewer?.setSpin(spin.getAttribute('aria-pressed') !== 'true'));
document.getElementById('camera-zoom-out').addEventListener('click', () => viewer?.zoom(.8));
document.getElementById('camera-zoom-in').addEventListener('click', () => viewer?.zoom(1.25));
document.getElementById('camera-reset').addEventListener('click', () => viewer?.reset());
retry.addEventListener('click', loadCamera);
window.addEventListener('pagehide', event => {
  if (event.persisted) viewer?.setSpin(false);
  else {
    disposed = true;
    viewer?.dispose();
  }
});
loadCamera();
