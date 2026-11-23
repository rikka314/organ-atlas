# Organ Atlas · 人体器官图谱

**[在线查看三维人体图谱](https://rikka314.github.io/organ-atlas/)**

这里展示的三维人体器官模型均由 **Agent 操作 Blender 生成**。模型库会持续更新，陆续加入新的器官和已有模型的修订版。

[![三维人体总览](preview/overview.png)](https://rikka314.github.io/organ-atlas/)

图中用于定位的体表来自 [BodyParts3D](https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html)，© The Database Center for Life Science，采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 许可。

拖动人体可以旋转，滚轮或双指可以缩放。点选一个器官，进入「单独观察」，即可逐层隐藏结构或切换为线框。例如，移去肺叶后可以沿着支气管和血管查看它们在肺内的走向。

## 正常成人脑

成人脑由 USCBrain Atlas 同一位成年人的 MRI 体素重建。观察台可分别隐藏左右大脑半球、小脑和脑干。顶面可看大脑纵裂，左右侧面可看中央沟和外侧沟。严格底面的延髓显露仍待修订，前下斜面可以看到脑桥向延髓变细的轮廓。[打开成人脑](https://rikka314.github.io/organ-atlas/?organ=brain) · [从前下方观察](https://rikka314.github.io/organ-atlas/?organ=brain&view=ventral-oblique)

Blender 工程含八个观察机位。选择小脑，将形态键“仅 MRI 表面”调到 1，即可查看补加教学细褶之前的影像表面。本模型及派生渲染按 CC BY-NC-SA 4.0 使用。[可编辑 Blender 工程](models/brain/adult-brain.blend) · [网页用 GLB](models/brain/whole.glb) · [数据来源、作者与许可](models/brain/ATTRIBUTION.md)

## 本地浏览

克隆仓库后，在仓库目录中运行下面的命令，然后打开[本机预览](http://127.0.0.1:8000/)。

```sh
python -m http.server 8000 --bind 127.0.0.1
```
