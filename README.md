# Organ Atlas · 人体器官图谱

**[在线查看三维人体图谱](https://rikka314.github.io/organ-atlas/)**

方法迁移展区收录了四件可旋转的 Blender 作品。可以查看耳机右侧的旋钮、机器人的背部和公交站的线路牌，也可以切换到对应的成品渲染图。

[Sony α7R V](https://rikka314.github.io/organ-atlas/method-transfer.html?model=sony-a7rv) · [AirPods Max 蓝色 USB-C 款](https://rikka314.github.io/organ-atlas/method-transfer.html?model=airpods-max) · [宇树 H2-X](https://rikka314.github.io/organ-atlas/method-transfer.html?model=unitree-h2-x) · [雨歇 · 码头街公交站](https://rikka314.github.io/organ-atlas/method-transfer.html?model=quay-street)

这里展示的三维人体器官模型均由 **Agent 操作 Blender 生成**。模型库会持续更新，陆续加入新的器官和已有模型的修订版。

13 个器官的整件、切面、拆解视图与人体总览均使用 Agent 编写程序生成的贴图。颜色、表面起伏和粗糙度分别计算。观察[脾脏切面](https://rikka314.github.io/organ-atlas/?organ=spleen&view=interior)时，可以对照边缘的薄被膜与中央红髓；观察[右眼](https://rikka314.github.io/organ-atlas/?organ=eye)时，可以旋转查看透明角膜下的虹膜。颜色及光泽用于教学示意，未经同一光照下的人体标本测量标定。

## 当前模型选择

本次更新采用 2026 年 11 月 23 日最新 Harness 源码复建的双肺、气管与主支气管、肝脏、胃、食管、大小肠、左肾、胰腺、脾脏和上下恒牙列。右眼继续使用现有的最新 Harness 成品；[默认心脏](https://rikka314.github.io/organ-atlas/?organ=heart)采用房室瓣支撑 R1：打开[显露心瓣膜](https://rikka314.github.io/organ-atlas/?organ=heart&view=interior)，可分别沿[左侧](https://rikka314.github.io/organ-atlas/?organ=heart&view=left-chain)和[右侧](https://rikka314.github.io/organ-atlas/?organ=heart&view=right-chain)腱索从瓣叶追到乳头肌与室壁。[下载心脏模型](models/heart-av-support-r1/README.md)。大脑保留 USCBrain 成人 MRI 大体外观版。每件模型的研究范围和仍待核实之处见网页中的「标本说明」。

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
