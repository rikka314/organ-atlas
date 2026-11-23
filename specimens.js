export const specimens = [
  {
    "id": "heart",
    "name": "心脏",
    "latin": "Cor",
    "system": "循环系统",
    "version": "心腔、瓣膜与冠脉",
    "url": "./models/heart/whole.glb",
    "thumbnail": "./media/heart.webp",
    "status": "教学展示",
    "note": "移去房壁和室壁，可以看见四组瓣膜。局部接面与血流通路仍待核实。",
    "view": [
      0.7962,
      -0.2413,
      0.5549
    ],
    "interior": {
      "label": "显露心瓣膜",
      "modes": {
        "ventricles": "hidden",
        "atria": "hidden",
        "auricles": "hidden",
        "aorta": "hidden",
        "pulmonary": "hidden",
        "caval": "hidden",
        "pulmonaryVeins": "hidden",
        "arteries": "hidden",
        "veins": "hidden",
        "fat": "hidden"
      }
    },
    "parts": [
      {
        "id": "ventricles",
        "name": "心室壁",
        "color": "#bd796e",
        "meshes": [
          "Ventricular_myocardium"
        ]
      },
      {
        "id": "atria",
        "name": "心房壁",
        "color": "#be8b84",
        "meshes": [
          "Atrial_Myocardium"
        ],
        "materials": [
          "Atlas tissue • atrium",
          "Atlas tissue • inner"
        ]
      },
      {
        "id": "auricles",
        "name": "双侧心耳",
        "color": "#c28c80",
        "meshes": [
          "Atrial_Myocardium"
        ],
        "materials": [
          "Atlas tissue • auricle"
        ]
      },
      {
        "id": "valves",
        "name": "四组心瓣膜",
        "color": "#e3c5a0",
        "meshes": [
          "Valve_MV",
          "Valve_TV",
          "Valve_AV",
          "Valve_PV"
        ]
      },
      {
        "id": "junctions",
        "name": "瓣口与静脉接合区",
        "color": "#a06258",
        "meshes": [
          "Interface_IVC",
          "Interface_TV",
          "Interface_MV"
        ]
      },
      {
        "id": "aorta",
        "name": "主动脉",
        "color": "#bb7968",
        "meshes": [
          "Aorta"
        ]
      },
      {
        "id": "pulmonary",
        "name": "肺动脉",
        "color": "#648798",
        "meshes": [
          "Pulmonary_tree"
        ]
      },
      {
        "id": "caval",
        "name": "上、下腔静脉",
        "color": "#607d89",
        "meshes": [
          "SVC",
          "IVC"
        ]
      },
      {
        "id": "pulmonaryVeins",
        "name": "肺静脉",
        "color": "#bd786c",
        "meshes": [
          "LSPV",
          "LIPV",
          "RSPV",
          "RIPV"
        ]
      },
      {
        "id": "arteries",
        "name": "冠状动脉",
        "color": "#c65c42",
        "meshes": [
          "A00_Left_coronary_stem",
          "A01_Anterior_interventricular",
          "A02_First_diagonal",
          "A03_Second_diagonal",
          "A04_Anterior_ventricular_branch",
          "A05_Distal_diagonal",
          "A06_Left_AV_groove",
          "A07_Obtuse_marginal",
          "A08_Lateral_ventricular_branch",
          "A09_Right_AV_to_posterior",
          "A10_Acute_marginal",
          "A11_Anterior_RV_twigs",
          "A12_Posterior_wall_branch"
        ]
      },
      {
        "id": "veins",
        "name": "心静脉与冠状窦",
        "color": "#467083",
        "meshes": [
          "V01_Great_cardiac",
          "V02_Anterior_tributary",
          "V03_Coronary_sinus",
          "V04_Middle_cardiac",
          "V05_Posterior_LV_tributary",
          "V06_Small_cardiac"
        ]
      },
      {
        "id": "fat",
        "name": "沟内脂肪",
        "color": "#d4ac82",
        "meshes": [
          "F01_Anterior_groove",
          "F02_Left_coronary_groove",
          "F03_Right_coronary_groove",
          "F04_Posterior_groove"
        ]
      }
    ]
  },
  {
    "id": "lungs",
    "name": "双肺",
    "latin": "Pulmones",
    "system": "呼吸系统",
    "version": "肺叶、肺底与肺门",
    "url": "./models/lungs/whole.glb",
    "thumbnail": "./media/lungs.webp",
    "status": "教学展示",
    "note": "从正下方看左上叶舌部、右中叶和两侧下叶怎样相接。剥开右肺后，可以沿米色支气管、蓝色肺动脉和红色肺静脉追踪它们在组织中的前后位置。",
    "view": [
      0,
      0,
      1
    ],
    "interior": {
      "label": "移去肺叶",
      "modes": {
        "rightUpper": "hidden",
        "rightMiddle": "hidden",
        "rightLower": "hidden",
        "leftUpper": "hidden",
        "leftLower": "hidden"
      }
    },
    "isolatedViews": [
      {
        "key": "inferior",
        "label": "正下方看肺叶",
        "asset": "inferior"
      },
      {
        "key": "lung-base",
        "label": "前下方看肺底",
        "asset": "lung-base"
      },
      {
        "key": "dissection",
        "label": "剥开右肺",
        "asset": "dissection"
      },
      {
        "key": "dissection-oblique",
        "label": "斜看剥开处",
        "asset": "dissection-oblique"
      },
      {
        "key": "medial-base",
        "label": "看肺底内侧",
        "asset": "medial-base"
      },
      {
        "key": "hilum",
        "label": "透视肺门",
        "asset": "hilum"
      },
      {
        "key": "hilum-opposite",
        "label": "对侧斜看肺门",
        "asset": "hilum-opposite"
      },
      {
        "key": "right-fissure",
        "label": "右肺叶缘",
        "asset": "right-fissure"
      },
      {
        "key": "airway-recess",
        "label": "气道通路检查",
        "asset": "airway-recess",
        "only": [
          "leftUpper",
          "leftLower"
        ]
      },
      {
        "key": "airways",
        "label": "仅看气道",
        "only": [
          "airway",
          "cartilage"
        ]
      },
      {
        "key": "vessels",
        "label": "仅看肺血管",
        "only": [
          "arteries",
          "rightSuperiorVein",
          "rightInferiorVein",
          "leftSuperiorVein",
          "leftInferiorVein"
        ]
      },
      {
        "key": "section",
        "label": "冠状剖面",
        "asset": "section"
      },
      {
        "key": "segments",
        "label": "肺段分区",
        "asset": "segments"
      },
      {
        "key": "previous-inferior",
        "label": "肺底外形对照",
        "asset": "previous-inferior"
      }
    ],
    "assets": {
      "inferior": {
        "url": "./models/lungs/whole.glb",
        "view": [
          0,
          -1,
          -0.0001
        ],
        "version": "正下方看双肺",
        "note": "从足侧朝头侧看，画面左侧是患者左肺，上方是背侧。可分别隐藏左上叶或右中叶，查看它们在肺底前方所占的位置。"
      },
      "previous-inferior": {
        "url": "./models/lungs/previous-inferior.glb",
        "view": [
          0,
          -1,
          -0.0001
        ],
        "version": "肺底对照",
        "note": "可与「正下方看肺叶」在相同方向比较左上叶舌部和右中叶在肺底前方的显露范围。"
      },
      "lung-base": {
        "url": "./models/lungs/whole.glb",
        "view": [
          0.29209,
          -0.75743,
          0.58393
        ],
        "version": "双肺下前斜面",
        "note": "画面左侧是患者右肺。沿着粉色外缘向内转动，可以分别查看膈面、肺底内侧和两肺之间的肺门。"
      },
      "medial-base": {
        "url": "./models/lungs/whole.glb",
        "view": [
          0.3303,
          -0.0923,
          0.9394
        ],
        "version": "前内侧近于平视",
        "note": "右下肺静脉的红色管口在两肺之间。向它下方看，可以沿内侧面的凹凸追到前内侧下缘。"
      },
      "dissection": {
        "url": "./models/lungs/dissection.glb",
        "version": "右肺局部剥开",
        "view": [
          -0.099228,
          0.074421,
          0.992278
        ],
        "note": "右肺保留窗缘和深处的肺实质，左肺完整。转动模型，可看前方分支怎样遮住后方分支，以及各条管道在哪里进入肺组织。"
      },
      "dissection-oblique": {
        "url": "./models/lungs/dissection.glb",
        "version": "右肺局部剥开 · 斜面",
        "view": [
          -0.255567,
          0.374607,
          0.891266
        ],
        "note": "同一右肺窗口转过约 20°。可与正面比较，辨认右上叶前段与右下叶上段两条支气管的前后位置。"
      },
      "hilum": {
        "url": "./models/lungs/hilum.glb",
        "version": "肺门与气管分叉近景",
        "view": [
          0.2419219,
          0,
          0.9702957
        ],
        "cameraFrame": {
          "target": [
            0,
            0.153,
            -0.011
          ],
          "width": 0.143,
          "height": 0.1081219512195122
        },
        "note": "从患者左前方近看，沿气管分叉追踪右主支气管。半透明的肺叶和血管保留了与管道的前后关系。"
      },
      "hilum-opposite": {
        "url": "./models/lungs/hilum.glb",
        "version": "肺门近景 · 右前斜面",
        "view": [
          -0.2419219,
          0,
          0.9702957
        ],
        "cameraFrame": {
          "target": [
            0,
            0.153,
            -0.011
          ],
          "width": 0.143,
          "height": 0.1081219512195122
        },
        "note": "从患者右前方近看，沿较长的左主支气管追向肺门。与另一前斜面切换时，取景中心和尺度相同。"
      },
      "right-fissure": {
        "version": "右前斜面 25°",
        "url": "./models/lungs/whole.glb",
        "view": [
          -0.9063078,
          0,
          0.4226183
        ],
        "note": "右上叶和中叶之间是水平裂，中叶和下叶之间是斜裂。沿斜裂从汇合处分向前下，可见邻叶搭接。该视角的斜裂中段仍有一小段边缘偏平。"
      },
      "section": {
        "version": "冠状剖面",
        "status": "教学展示",
        "url": "./models/lungs/section.glb",
        "note": "切去双肺前部后，粉色区域是暴露的肺实质。浅色、蓝色和红色的管壁分别属于气道、肺动脉和肺静脉。旋转可看剩余肺叶，每个图层同时控制该部位的表面和切面。",
        "parts": [
          {
            "id": "rightUpper",
            "name": "右肺上叶",
            "color": "#bf8784",
            "meshes": [
              "RUL_posterior",
              "RUL_cut"
            ]
          },
          {
            "id": "rightMiddle",
            "name": "右肺中叶",
            "color": "#bf8784",
            "meshes": [
              "RML_posterior",
              "RML_cut"
            ]
          },
          {
            "id": "rightLower",
            "name": "右肺下叶",
            "color": "#bf8784",
            "meshes": [
              "RLL_posterior",
              "RLL_cut"
            ]
          },
          {
            "id": "leftUpper",
            "name": "左肺上叶",
            "color": "#bf8784",
            "meshes": [
              "LUL_posterior",
              "LUL_cut"
            ]
          },
          {
            "id": "leftLower",
            "name": "左肺下叶",
            "color": "#bf8784",
            "meshes": [
              "LLL_posterior",
              "LLL_cut"
            ]
          },
          {
            "id": "airway",
            "name": "气管与支气管树",
            "color": "#d8b49b",
            "meshes": [
              "Airway_Tree_posterior",
              "Airway_Tree_cut"
            ]
          },
          {
            "id": "cartilage",
            "name": "气管软骨",
            "color": "#dfcdc0",
            "meshes": [
              "Tracheal_Cartilage_posterior",
              "Tracheal_Cartilage_cut"
            ]
          },
          {
            "id": "arteries",
            "name": "肺动脉",
            "color": "#627e9d",
            "meshes": [
              "Pulmonary_Arteries_posterior",
              "Pulmonary_Arteries_cut"
            ]
          },
          {
            "id": "rightSuperiorVein",
            "name": "右上肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_R_Superior_posterior",
              "Pulmonary_Vein_R_Superior_cut"
            ]
          },
          {
            "id": "rightInferiorVein",
            "name": "右下肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_R_Inferior_posterior",
              "Pulmonary_Vein_R_Inferior_cut"
            ]
          },
          {
            "id": "leftSuperiorVein",
            "name": "左上肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_L_Superior_posterior",
              "Pulmonary_Vein_L_Superior_cut"
            ]
          },
          {
            "id": "leftInferiorVein",
            "name": "左下肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_L_Inferior_posterior",
              "Pulmonary_Vein_L_Inferior_cut"
            ]
          }
        ]
      },
      "airway-recess": {
        "version": "叶支气管入口",
        "status": "教学展示",
        "url": "./models/lungs/airway-recess.glb",
        "view": [
          -0.92,
          0.12,
          0.35
        ],
        "note": "从内侧看左肺两叶，再显示气道与右肺，可追踪五条叶支气管及其入口。肺血管通路另需核实。"
      },
      "segments": {
        "version": "十八个教学肺段",
        "status": "教学展示",
        "note": "右肺十段，左肺八段。左侧尖段与后段合为尖后段，内侧底段与前底段合为前内侧底段。段间界面用于教学，未经个体影像配准。",
        "url": "./models/lungs/segments.glb",
        "soloLabel": "单独查看肺段",
        "parts": [
          {
            "id": "RUL_B1",
            "name": "右上叶 · 尖段 S1",
            "color": "#c58074",
            "meshes": [
              "RUL_B1"
            ]
          },
          {
            "id": "RUL_B2",
            "name": "右上叶 · 后段 S2",
            "color": "#a38ab5",
            "meshes": [
              "RUL_B2"
            ]
          },
          {
            "id": "RUL_B3",
            "name": "右上叶 · 前段 S3",
            "color": "#e2b17c",
            "meshes": [
              "RUL_B3"
            ]
          },
          {
            "id": "RML_B4",
            "name": "右中叶 · 外侧段 S4",
            "color": "#6c9fa5",
            "meshes": [
              "RML_B4"
            ]
          },
          {
            "id": "RML_B5",
            "name": "右中叶 · 内侧段 S5",
            "color": "#baa0bf",
            "meshes": [
              "RML_B5"
            ]
          },
          {
            "id": "RLL_B6",
            "name": "右下叶 · 上段 S6",
            "color": "#86aa91",
            "meshes": [
              "RLL_B6"
            ]
          },
          {
            "id": "RLL_B7",
            "name": "右下叶 · 内侧底段 S7",
            "color": "#ce9191",
            "meshes": [
              "RLL_B7"
            ]
          },
          {
            "id": "RLL_B8",
            "name": "右下叶 · 前底段 S8",
            "color": "#8ca9cb",
            "meshes": [
              "RLL_B8"
            ]
          },
          {
            "id": "RLL_B9",
            "name": "右下叶 · 外侧底段 S9",
            "color": "#cbb373",
            "meshes": [
              "RLL_B9"
            ]
          },
          {
            "id": "RLL_B10",
            "name": "右下叶 · 后底段 S10",
            "color": "#a18b9f",
            "meshes": [
              "RLL_B10"
            ]
          },
          {
            "id": "LUL_B1p2",
            "name": "左上叶 · 尖后段 S1+2",
            "color": "#ba919d",
            "meshes": [
              "LUL_B1p2"
            ]
          },
          {
            "id": "LUL_B3",
            "name": "左上叶 · 前段 S3",
            "color": "#e2b17c",
            "meshes": [
              "LUL_B3"
            ]
          },
          {
            "id": "LUL_B4",
            "name": "左上叶 · 上舌段 S4",
            "color": "#6c9fa5",
            "meshes": [
              "LUL_B4"
            ]
          },
          {
            "id": "LUL_B5",
            "name": "左上叶 · 下舌段 S5",
            "color": "#baa0bf",
            "meshes": [
              "LUL_B5"
            ]
          },
          {
            "id": "LLL_B6",
            "name": "左下叶 · 上段 S6",
            "color": "#86aa91",
            "meshes": [
              "LLL_B6"
            ]
          },
          {
            "id": "LLL_B7p8",
            "name": "左下叶 · 前内侧底段 S7+8",
            "color": "#87a2bc",
            "meshes": [
              "LLL_B7p8"
            ]
          },
          {
            "id": "LLL_B9",
            "name": "左下叶 · 外侧底段 S9",
            "color": "#cbb373",
            "meshes": [
              "LLL_B9"
            ]
          },
          {
            "id": "LLL_B10",
            "name": "左下叶 · 后底段 S10",
            "color": "#a18b9f",
            "meshes": [
              "LLL_B10"
            ]
          }
        ]
      }
    },
    "parts": [
      {
        "id": "rightUpper",
        "name": "右肺上叶",
        "color": "#bf8784",
        "meshes": [
          "RUL"
        ]
      },
      {
        "id": "rightMiddle",
        "name": "右肺中叶",
        "color": "#bf8784",
        "meshes": [
          "RML"
        ]
      },
      {
        "id": "rightLower",
        "name": "右肺下叶",
        "color": "#bf8784",
        "meshes": [
          "RLL"
        ]
      },
      {
        "id": "leftUpper",
        "name": "左肺上叶",
        "color": "#bf8784",
        "meshes": [
          "LUL"
        ]
      },
      {
        "id": "leftLower",
        "name": "左肺下叶",
        "color": "#bf8784",
        "meshes": [
          "LLL"
        ]
      },
      {
        "id": "airway",
        "name": "气管与支气管树",
        "color": "#d8b49b",
        "meshes": [
          "Airway_Tree"
        ]
      },
      {
        "id": "cartilage",
        "name": "气管软骨",
        "color": "#dfcdc0",
        "meshes": [
          "Tracheal_Cartilage"
        ]
      },
      {
        "id": "arteries",
        "name": "肺动脉",
        "color": "#627e9d",
        "meshes": [
          "Pulmonary_Arteries"
        ]
      },
      {
        "id": "rightSuperiorVein",
        "name": "右上肺静脉",
        "color": "#af625d",
        "meshes": [
          "Pulmonary_Vein_R_Superior"
        ]
      },
      {
        "id": "rightInferiorVein",
        "name": "右下肺静脉",
        "color": "#af625d",
        "meshes": [
          "Pulmonary_Vein_R_Inferior"
        ]
      },
      {
        "id": "leftSuperiorVein",
        "name": "左上肺静脉",
        "color": "#af625d",
        "meshes": [
          "Pulmonary_Vein_L_Superior"
        ]
      },
      {
        "id": "leftInferiorVein",
        "name": "左下肺静脉",
        "color": "#af625d",
        "meshes": [
          "Pulmonary_Vein_L_Inferior"
        ]
      }
    ]
  },
  {
    "id": "trachea",
    "name": "气管与主支气管",
    "latin": "Trachea et bronchi principales",
    "system": "呼吸系统",
    "version": "气管及主支气管近段",
    "status": "教学展示",
    "url": "./models/trachea/whole.glb",
    "thumbnail": "./media/trachea.webp",
    "view": [
      0,
      0,
      1
    ],
    "note": "标本止于左右主支气管近段。正面可以比较两支的走向。转到后面，沿两列软骨端之间的膜壁向下看。仅显示软骨时，可以从上方直接辨认每条软骨的开口。",
    "parts": [
      {
        "id": "wall",
        "name": "管壁与截缘",
        "color": "#c9a08a",
        "materials": [
          "Airway exterior",
          "Section of airway wall"
        ]
      },
      {
        "id": "membrane",
        "name": "后膜壁",
        "color": "#bd9481",
        "materials": [
          "Posterior membranous wall"
        ]
      },
      {
        "id": "mucosa",
        "name": "管腔内表面",
        "color": "#bc897d",
        "materials": [
          "Luminal mucosa"
        ]
      },
      {
        "id": "trachealCartilage",
        "name": "气管软骨",
        "color": "#e8cfb3",
        "meshes": [
          "Tracheal_Cartilages"
        ]
      },
      {
        "id": "rightCartilage",
        "name": "右主支气管软骨",
        "color": "#e8cfb3",
        "meshes": [
          "Bronchial_Cartilages_R"
        ]
      },
      {
        "id": "leftCartilage",
        "name": "左主支气管软骨",
        "color": "#e8cfb3",
        "meshes": [
          "Bronchial_Cartilages_L"
        ]
      }
    ],
    "interior": {
      "label": "仅看软骨",
      "only": [
        "trachealCartilage",
        "rightCartilage",
        "leftCartilage"
      ]
    },
    "isolatedViews": [
      {
        "key": "wall",
        "label": "移去软骨",
        "only": [
          "wall",
          "membrane",
          "mucosa"
        ]
      }
    ]
  },
  {
    "id": "liver",
    "name": "肝脏",
    "latin": "Hepar",
    "system": "消化系统",
    "version": "肝实质、胆囊与肝内管道",
    "url": "./models/liver/whole.glb",
    "thumbnail": "./media/liver.webp",
    "status": "教学展示",
    "note": "隐藏胆囊和四组管道可看肝门孔口及下腔静脉沟。隐藏肝实质可看完整管网。管段本身为封端实体。",
    "view": [
      0.065,
      -0.55,
      0.36
    ],
    "interior": {
      "label": "显露肝内管网",
      "modes": {
        "parenchyma": "hidden"
      }
    },
    "isolatedViews": [
      {
        "key": "passages",
        "label": "只看肝实质孔口",
        "only": [
          "parenchyma"
        ]
      }
    ],
    "parts": [
      {
        "id": "parenchyma",
        "name": "肝实质",
        "color": "#ac6656",
        "meshes": [
          "Liver"
        ]
      },
      {
        "id": "gallbladder",
        "name": "胆囊",
        "color": "#809f53",
        "meshes": [
          "Gallbladder"
        ]
      },
      {
        "id": "portal",
        "name": "肝门静脉",
        "color": "#9453a6",
        "meshes": [
          "PV.II cranial ramus",
          "PV.II left posterolateral",
          "PV.III ventral ramus",
          "PV.III left anterolateral",
          "PV.IV superior ramus",
          "PV.IV medial supply",
          "PV.Left umbilical part",
          "PV.Left transverse part",
          "PV.V lateral ramus",
          "PV.V inferior anterior",
          "PV.VIII dorsal ramus",
          "PV.VIII superior anterior",
          "PV.Right anterior sector",
          "PV.VI caudal ramus",
          "PV.VI inferior posterior",
          "PV.VII medial ramus",
          "PV.VII superior posterior",
          "PV.Right posterior sector",
          "PV.Right branch",
          "PV.Portal vein"
        ]
      },
      {
        "id": "arterial",
        "name": "肝动脉",
        "color": "#da473b",
        "meshes": [
          "HA.Left anterior supply",
          "HA.Left posterior supply",
          "HA.Medial supply",
          "HA.Left hepatic artery",
          "HA.Anterior inferior supply",
          "HA.Anterior superior supply",
          "HA.Right anterior division",
          "HA.Posterior inferior supply",
          "HA.Posterior superior supply",
          "HA.Right posterior division",
          "HA.Right hepatic artery",
          "HA.Proper hepatic artery"
        ]
      },
      {
        "id": "venous",
        "name": "肝静脉与下腔静脉",
        "color": "#3080b5",
        "meshes": [
          "HV.Left dorsal tributary",
          "HV.Left lateral tributary",
          "HV.Left hepatic vein",
          "HV.Middle anterior tributary",
          "HV.Middle superior tributary",
          "HV.Middle hepatic vein",
          "HV.Right dorsal tributary",
          "HV.Right inferior tributary",
          "HV.Right lateral tributary",
          "HV.Right hepatic vein",
          "HV.Inferior vena cava"
        ]
      },
      {
        "id": "biliary",
        "name": "肝内外胆道",
        "color": "#139772",
        "meshes": [
          "BIL.Left lateral drainage",
          "BIL.Medial drainage",
          "BIL.Left hepatic duct",
          "BIL.Right anterior drainage",
          "BIL.Right posterior drainage",
          "BIL.Right hepatic duct",
          "BIL.Common hepatic duct",
          "BIL.Cystic duct",
          "BIL.Common bile duct"
        ]
      }
    ]
  },
  {
    "id": "stomach",
    "name": "胃",
    "latin": "Gaster",
    "system": "消化系统",
    "version": "胃壁与黏膜皱襞",
    "url": "./models/stomach/whole.glb",
    "thumbnail": "./media/stomach.webp",
    "status": "教学展示",
    "note": "打开胃前壁可观察后壁的黏膜皱襞。幽门前的胃窦逐渐收窄，出口朝向仍待核实。",
    "view": [
      0,
      0,
      1
    ],
    "interior": {
      "label": "打开胃前壁",
      "modes": {
        "frontOuter": "hidden",
        "frontInner": "hidden"
      }
    },
    "parts": [
      {
        "id": "frontOuter",
        "name": "前壁浆膜面",
        "color": "#c38579",
        "materials": [
          "Gastric serosa anterior"
        ]
      },
      {
        "id": "backOuter",
        "name": "后壁浆膜面",
        "color": "#c38579",
        "materials": [
          "Gastric serosa posterior"
        ]
      },
      {
        "id": "frontInner",
        "name": "前壁黏膜面",
        "color": "#ab5751",
        "materials": [
          "Gastric mucosa anterior"
        ]
      },
      {
        "id": "backInner",
        "name": "后壁黏膜面",
        "color": "#ab5751",
        "materials": [
          "Gastric mucosa posterior"
        ]
      },
      {
        "id": "inlet",
        "name": "食管端口缘",
        "color": "#d39c8d",
        "materials": [
          "Esophageal cut edge"
        ]
      },
      {
        "id": "outlet",
        "name": "十二指肠端口缘",
        "color": "#daa289",
        "materials": [
          "Duodenal cut edge"
        ]
      }
    ]
  },
  {
    "id": "esophagus",
    "name": "食管",
    "latin": "Oesophagus",
    "system": "消化系统",
    "version": "食管与胃的交界",
    "status": "教学展示",
    "thumbnail": "./media/esophagus.webp",
    "url": "./models/esophagus/whole.glb",
    "view": [
      0,
      0,
      1
    ],
    "parts": [
      {
        "id": "neck",
        "name": "颈段食管",
        "color": "#b7766c",
        "materials": [
          "Cervical outer anterior",
          "Cervical outer posterior",
          "Cervical inner anterior",
          "Cervical inner posterior",
          "Pharyngoesophageal cut edge"
        ]
      },
      {
        "id": "thorax",
        "name": "胸段食管",
        "color": "#b7766c",
        "materials": [
          "Thoracic outer anterior",
          "Thoracic outer posterior",
          "Thoracic inner anterior",
          "Thoracic inner posterior",
          "Lower thoracic sleeve outer anterior",
          "Lower thoracic sleeve outer posterior",
          "Lower thoracic sleeve inner anterior",
          "Lower thoracic sleeve inner posterior"
        ]
      },
      {
        "id": "abdomen",
        "name": "腹段食管",
        "color": "#c38d81",
        "materials": [
          "Abdominal sleeve outer anterior",
          "Abdominal sleeve outer posterior",
          "Abdominal sleeve inner anterior",
          "Abdominal sleeve inner posterior"
        ]
      },
      {
        "id": "stomach",
        "name": "胃及十二指肠短段",
        "color": "#c38579",
        "materials": [
          "Gastric serosa anterior",
          "Gastric serosa posterior",
          "Gastric mucosa anterior",
          "Gastric mucosa posterior",
          "Duodenal cut edge"
        ]
      }
    ],
    "note": "正面看下段渐向患者左侧入胃，转到侧面看长胸段的后凸。颈端前后较扁，胸段保留两处浅压迹。可逐段隐藏或查看线框。",
    "interior": {
      "label": "打开前壁",
      "asset": "opened"
    },
    "isolatedViews": [
      {
        "key": "isolated",
        "label": "单独食管",
        "asset": "isolated"
      }
    ],
    "assets": {
      "opened": {
        "url": "./models/esophagus/opened.glb",
        "parts": [
          {
            "id": "neck",
            "name": "颈段食管",
            "color": "#b7766c",
            "materials": [
              "Cervical outer anterior",
              "Cervical outer posterior",
              "Cervical inner anterior",
              "Cervical inner posterior",
              "Pharyngoesophageal cut edge"
            ]
          },
          {
            "id": "thorax",
            "name": "胸段食管",
            "color": "#b7766c",
            "materials": [
              "Thoracic outer anterior",
              "Thoracic outer posterior",
              "Thoracic inner anterior",
              "Thoracic inner posterior",
              "Lower thoracic sleeve outer anterior",
              "Lower thoracic sleeve outer posterior",
              "Lower thoracic sleeve inner anterior",
              "Lower thoracic sleeve inner posterior"
            ]
          },
          {
            "id": "abdomen",
            "name": "腹段食管",
            "color": "#c38d81",
            "materials": [
              "Abdominal sleeve outer anterior",
              "Abdominal sleeve outer posterior",
              "Abdominal sleeve inner anterior",
              "Abdominal sleeve inner posterior"
            ]
          },
          {
            "id": "stomach",
            "name": "胃及十二指肠短段",
            "color": "#c38579",
            "materials": [
              "Gastric serosa anterior",
              "Gastric serosa posterior",
              "Gastric mucosa anterior",
              "Gastric mucosa posterior",
              "Duodenal cut edge"
            ]
          }
        ],
        "note": "前壁已打开，可沿同一食管腔看到贲门和胃腔后壁。此处显示一例轻度开放状态。"
      },
      "isolated": {
        "url": "./models/esophagus/isolated.glb",
        "parts": [
          {
            "id": "neck",
            "name": "颈段食管",
            "color": "#b7766c",
            "materials": [
              "Cervical outer anterior",
              "Cervical outer posterior",
              "Cervical inner anterior",
              "Cervical inner posterior",
              "Pharyngoesophageal cut edge"
            ]
          },
          {
            "id": "thorax",
            "name": "胸段食管",
            "color": "#b7766c",
            "materials": [
              "Thoracic outer anterior",
              "Thoracic outer posterior",
              "Thoracic inner anterior",
              "Thoracic inner posterior",
              "Lower thoracic sleeve outer anterior",
              "Lower thoracic sleeve outer posterior",
              "Lower thoracic sleeve inner anterior",
              "Lower thoracic sleeve inner posterior"
            ]
          },
          {
            "id": "abdomen",
            "name": "腹段食管",
            "color": "#c38d81",
            "materials": [
              "Abdominal sleeve outer anterior",
              "Abdominal sleeve outer posterior",
              "Abdominal sleeve inner anterior",
              "Abdominal sleeve inner posterior"
            ]
          }
        ],
        "note": "从咽食管交界到贲门的三个连续分段。转到患者右侧可看胸段向后弯、近膈再向前的走行。"
      }
    }
  },
  {
    "id": "intestines",
    "name": "大小肠与胃",
    "latin": "Intestinum tenue et crassum",
    "system": "消化系统",
    "version": "胃、小肠和大肠",
    "status": "教学展示",
    "url": "./models/intestines/whole.glb",
    "thumbnail": "./media/intestines.webp",
    "view": [
      0,
      0,
      1
    ],
    "note": "从正面可看结肠围住小肠，移开空肠可沿回肠追到盲肠内侧。肠袢取一种教学构形，中下腹仍有几段折返偏长、过于平行。",
    "parts": [
      {
        "id": "stomach",
        "name": "胃与原有短段",
        "color": "#c38579",
        "meshes": [
          "Stomach"
        ]
      },
      {
        "id": "duodenum",
        "name": "十二指肠续段",
        "color": "#c38579",
        "meshes": [
          "Duodenum"
        ]
      },
      {
        "id": "jejunum",
        "name": "空肠",
        "color": "#c78b7f",
        "meshes": [
          "Jejunum"
        ]
      },
      {
        "id": "ileum",
        "name": "回肠",
        "color": "#c2847b",
        "meshes": [
          "Ileum"
        ]
      },
      {
        "id": "caecum",
        "name": "盲肠",
        "color": "#bf8b83",
        "meshes": [
          "Caecum"
        ]
      },
      {
        "id": "appendix",
        "name": "阑尾",
        "color": "#c1827b",
        "meshes": [
          "Appendix"
        ]
      },
      {
        "id": "ascending",
        "name": "升结肠",
        "color": "#bf8b83",
        "meshes": [
          "Ascending colon"
        ]
      },
      {
        "id": "hepatic",
        "name": "右结肠曲",
        "color": "#bf8b83",
        "meshes": [
          "Right colic flexure"
        ]
      },
      {
        "id": "transverse",
        "name": "横结肠",
        "color": "#bf8b83",
        "meshes": [
          "Transverse colon"
        ]
      },
      {
        "id": "splenic",
        "name": "左结肠曲",
        "color": "#bf8b83",
        "meshes": [
          "Left colic flexure"
        ]
      },
      {
        "id": "descending",
        "name": "降结肠",
        "color": "#bf8b83",
        "meshes": [
          "Descending colon"
        ]
      },
      {
        "id": "sigmoid",
        "name": "乙状结肠",
        "color": "#bf8b83",
        "meshes": [
          "Sigmoid colon"
        ]
      },
      {
        "id": "rectum",
        "name": "直肠",
        "color": "#b87e79",
        "meshes": [
          "Rectum"
        ]
      },
      {
        "id": "anal",
        "name": "肛管",
        "color": "#b87e79",
        "meshes": [
          "Anal canal"
        ]
      }
    ],
    "interior": {
      "label": "仅看大小肠",
      "only": [
        "duodenum",
        "jejunum",
        "ileum",
        "caecum",
        "appendix",
        "ascending",
        "hepatic",
        "transverse",
        "splenic",
        "descending",
        "sigmoid",
        "rectum",
        "anal"
      ]
    },
    "isolatedViews": [
      {
        "key": "frame",
        "label": "结肠外围",
        "only": [
          "caecum",
          "appendix",
          "ascending",
          "hepatic",
          "transverse",
          "splenic",
          "descending",
          "sigmoid",
          "rectum",
          "anal"
        ]
      },
      {
        "key": "ileocaecal",
        "label": "打开盲肠看两个开口",
        "asset": "ileocaecal"
      },
      {
        "key": "gastroduodenal",
        "label": "胃与十二指肠",
        "only": [
          "stomach",
          "duodenum"
        ]
      }
    ],
    "assets": {
      "ileocaecal": {
        "url": "./models/intestines/ileocaecal.glb",
        "view": [
          -1,
          0.06,
          0.28
        ],
        "note": "前外侧壁已切开。内侧壁上方较大的开口通向回肠，下方较小的开口通向阑尾。",
        "parts": [
          {
            "id": "outside",
            "name": "外壁与末端回肠",
            "color": "#bf8b83",
            "materials": [
              "Colonic serosa",
              "Ileum serosa",
              "Appendix serosa"
            ]
          },
          {
            "id": "inside",
            "name": "腔面",
            "color": "#af605a",
            "materials": [
              "Intestinal mucosa"
            ]
          }
        ]
      }
    }
  },
  {
    "id": "kidney",
    "name": "左肾",
    "latin": "Ren sinister",
    "system": "泌尿系统",
    "version": "左肾、肾门与集合系统",
    "status": "肾盂与静脉的显露范围仍待核实",
    "url": "./models/kidney/whole.glb",
    "thumbnail": "./media/kidney.webp",
    "view": [
      0,
      0,
      1
    ],
    "note": "从内侧可看管根周围的肾门组织。冠状剖面可追踪皮质、髓锥和集合系统，管网展示代表性分支。",
    "parts": [
      {
        "id": "frontCortex",
        "name": "前半肾实质（含被膜表面）",
        "color": "#9f6253",
        "meshes": [
          "CORTEX_L.anterior"
        ]
      },
      {
        "id": "backCortex",
        "name": "后半肾实质（含肾柱）",
        "color": "#c99078",
        "meshes": [
          "CORTEX_L.posterior"
        ]
      },
      {
        "id": "frontMedulla",
        "name": "髓锥与乳头 · 前部",
        "color": "#ab6b63",
        "meshes": [
          "PYRAMID_L.01.anterior",
          "PYRAMID_L.02.anterior",
          "PYRAMID_L.03.anterior",
          "PYRAMID_L.04.anterior",
          "PYRAMID_L.05.anterior",
          "PYRAMID_L.06.anterior",
          "PYRAMID_L.07.anterior",
          "PYRAMID_L.08.anterior",
          "PYRAMID_L.09.anterior"
        ]
      },
      {
        "id": "backMedulla",
        "name": "髓锥与乳头 · 后部",
        "color": "#ab6b63",
        "meshes": [
          "PYRAMID_L.01.posterior",
          "PYRAMID_L.02.posterior",
          "PYRAMID_L.03.posterior",
          "PYRAMID_L.04.posterior",
          "PYRAMID_L.05.posterior",
          "PYRAMID_L.06.posterior",
          "PYRAMID_L.07.posterior",
          "PYRAMID_L.08.posterior",
          "PYRAMID_L.10.posterior"
        ]
      },
      {
        "id": "sinusFat",
        "name": "肾窦脂肪",
        "color": "#d8bc83",
        "meshes": [
          "SINUS_FAT_L.posterior"
        ]
      },
      {
        "id": "minorCalyces",
        "name": "小肾盏",
        "color": "#dcc7aa",
        "meshes": [
          "MINOR_CALYX_L.01",
          "MINOR_CALYX_L.02",
          "MINOR_CALYX_L.03",
          "MINOR_CALYX_L.04",
          "MINOR_CALYX_L.05",
          "MINOR_CALYX_L.06",
          "MINOR_CALYX_L.07",
          "MINOR_CALYX_L.08",
          "MINOR_CALYX_L.09",
          "MINOR_CALYX_L.10"
        ]
      },
      {
        "id": "majorCalyces",
        "name": "大肾盏",
        "color": "#dcc7aa",
        "meshes": [
          "MAJOR_CALYX_L.01",
          "MAJOR_CALYX_L.02",
          "MAJOR_CALYX_L.03"
        ]
      },
      {
        "id": "renalPelvis",
        "name": "肾盂",
        "color": "#d8c1a3",
        "meshes": [
          "PELVIS_L"
        ]
      },
      {
        "id": "proximalUreter",
        "name": "近端输尿管",
        "color": "#d3bfa5",
        "meshes": [
          "URETER_L"
        ]
      },
      {
        "id": "renalArteries",
        "name": "肾动脉与肾内分支",
        "color": "#b66350",
        "materials": [
          "Kidney | Renal artery"
        ]
      },
      {
        "id": "renalVeins",
        "name": "肾静脉与肾内属支",
        "color": "#577d91",
        "materials": [
          "Kidney | Renal vein"
        ]
      },
      {
        "id": "hilarSupport",
        "name": "肾门唇与管根入口",
        "color": "#a46653",
        "meshes": [
          "HILAR_SUPPORT_L"
        ]
      }
    ],
    "interior": {
      "label": "冠状剖面",
      "only": [
        "backCortex",
        "backMedulla",
        "sinusFat",
        "minorCalyces",
        "majorCalyces",
        "renalPelvis",
        "proximalUreter"
      ]
    },
    "isolatedViews": [
      {
        "key": "medial",
        "label": "肾门内侧",
        "asset": "medial"
      },
      {
        "key": "medial-before",
        "label": "肾门外形对照",
        "asset": "medialBefore"
      },
      {
        "key": "window",
        "label": "打开肾盏与肾盂",
        "asset": "window"
      },
      {
        "key": "papilla",
        "label": "乳头与小盏",
        "asset": "papilla"
      },
      {
        "key": "networks",
        "label": "显露肾内管网",
        "only": [
          "minorCalyces",
          "majorCalyces",
          "renalPelvis",
          "proximalUreter",
          "renalArteries",
          "renalVeins"
        ]
      },
      {
        "key": "collecting",
        "label": "仅看集合系统",
        "only": [
          "minorCalyces",
          "majorCalyces",
          "renalPelvis",
          "proximalUreter"
        ]
      },
      {
        "key": "previous",
        "label": "原版白模",
        "asset": "previous"
      }
    ],
    "legacyLayers": "previous",
    "assets": {
      "medial": {
        "url": "./models/kidney/whole.glb",
        "view": [
          -1,
          0,
          0
        ],
        "parts": [
          {
            "id": "frontCortex",
            "name": "前半肾实质（含被膜表面）",
            "color": "#9f6253",
            "meshes": [
              "CORTEX_L.anterior"
            ]
          },
          {
            "id": "backCortex",
            "name": "后半肾实质（含肾柱）",
            "color": "#c99078",
            "meshes": [
              "CORTEX_L.posterior"
            ]
          },
          {
            "id": "frontMedulla",
            "name": "髓锥与乳头 · 前部",
            "color": "#ab6b63",
            "meshes": [
              "PYRAMID_L.01.anterior",
              "PYRAMID_L.02.anterior",
              "PYRAMID_L.03.anterior",
              "PYRAMID_L.04.anterior",
              "PYRAMID_L.05.anterior",
              "PYRAMID_L.06.anterior",
              "PYRAMID_L.07.anterior",
              "PYRAMID_L.08.anterior",
              "PYRAMID_L.09.anterior"
            ]
          },
          {
            "id": "backMedulla",
            "name": "髓锥与乳头 · 后部",
            "color": "#ab6b63",
            "meshes": [
              "PYRAMID_L.01.posterior",
              "PYRAMID_L.02.posterior",
              "PYRAMID_L.03.posterior",
              "PYRAMID_L.04.posterior",
              "PYRAMID_L.05.posterior",
              "PYRAMID_L.06.posterior",
              "PYRAMID_L.07.posterior",
              "PYRAMID_L.08.posterior",
              "PYRAMID_L.10.posterior"
            ]
          },
          {
            "id": "sinusFat",
            "name": "肾窦脂肪",
            "color": "#d8bc83",
            "meshes": [
              "SINUS_FAT_L.posterior"
            ]
          },
          {
            "id": "minorCalyces",
            "name": "小肾盏",
            "color": "#dcc7aa",
            "meshes": [
              "MINOR_CALYX_L.01",
              "MINOR_CALYX_L.02",
              "MINOR_CALYX_L.03",
              "MINOR_CALYX_L.04",
              "MINOR_CALYX_L.05",
              "MINOR_CALYX_L.06",
              "MINOR_CALYX_L.07",
              "MINOR_CALYX_L.08",
              "MINOR_CALYX_L.09",
              "MINOR_CALYX_L.10"
            ]
          },
          {
            "id": "majorCalyces",
            "name": "大肾盏",
            "color": "#dcc7aa",
            "meshes": [
              "MAJOR_CALYX_L.01",
              "MAJOR_CALYX_L.02",
              "MAJOR_CALYX_L.03"
            ]
          },
          {
            "id": "renalPelvis",
            "name": "肾盂",
            "color": "#d8c1a3",
            "meshes": [
              "PELVIS_L"
            ]
          },
          {
            "id": "proximalUreter",
            "name": "近端输尿管",
            "color": "#d3bfa5",
            "meshes": [
              "URETER_L"
            ]
          },
          {
            "id": "renalArteries",
            "name": "肾动脉与肾内分支",
            "color": "#b66350",
            "materials": [
              "Kidney | Renal artery"
            ]
          },
          {
            "id": "renalVeins",
            "name": "肾静脉与肾内属支",
            "color": "#577d91",
            "materials": [
              "Kidney | Renal vein"
            ]
          },
          {
            "id": "hilarSupport",
            "name": "肾门唇与管根入口",
            "color": "#a46653",
            "meshes": [
              "HILAR_SUPPORT_L"
            ]
          }
        ],
        "note": "沿管道朝肾门看。隐藏「肾门唇与管根入口」可以观察其后的共同肾窦。「肾门外形对照」展示相同方向的另一件模型。"
      },
      "medialBefore": {
        "url": "./models/kidney/medial-before.glb",
        "view": [
          -1,
          0,
          0
        ],
        "parts": [
          {
            "id": "frontCortex",
            "name": "前半肾实质（含被膜表面）",
            "color": "#9f6253",
            "meshes": [
              "CORTEX_L.anterior"
            ]
          },
          {
            "id": "backCortex",
            "name": "后半肾实质（含肾柱）",
            "color": "#c99078",
            "meshes": [
              "CORTEX_L.posterior"
            ]
          },
          {
            "id": "frontMedulla",
            "name": "髓锥与乳头 · 前部",
            "color": "#ab6b63",
            "meshes": [
              "PYRAMID_L.01.anterior",
              "PYRAMID_L.02.anterior",
              "PYRAMID_L.03.anterior",
              "PYRAMID_L.04.anterior",
              "PYRAMID_L.05.anterior",
              "PYRAMID_L.06.anterior",
              "PYRAMID_L.07.anterior",
              "PYRAMID_L.08.anterior",
              "PYRAMID_L.09.anterior"
            ]
          },
          {
            "id": "backMedulla",
            "name": "髓锥与乳头 · 后部",
            "color": "#ab6b63",
            "meshes": [
              "PYRAMID_L.01.posterior",
              "PYRAMID_L.02.posterior",
              "PYRAMID_L.03.posterior",
              "PYRAMID_L.04.posterior",
              "PYRAMID_L.05.posterior",
              "PYRAMID_L.06.posterior",
              "PYRAMID_L.07.posterior",
              "PYRAMID_L.08.posterior",
              "PYRAMID_L.10.posterior"
            ]
          },
          {
            "id": "sinusFat",
            "name": "肾窦脂肪",
            "color": "#d8bc83",
            "meshes": [
              "SINUS_FAT_L.posterior"
            ]
          },
          {
            "id": "minorCalyces",
            "name": "小肾盏",
            "color": "#dcc7aa",
            "meshes": [
              "MINOR_CALYX_L.01",
              "MINOR_CALYX_L.02",
              "MINOR_CALYX_L.03",
              "MINOR_CALYX_L.04",
              "MINOR_CALYX_L.05",
              "MINOR_CALYX_L.06",
              "MINOR_CALYX_L.07",
              "MINOR_CALYX_L.08",
              "MINOR_CALYX_L.09",
              "MINOR_CALYX_L.10"
            ]
          },
          {
            "id": "majorCalyces",
            "name": "大肾盏",
            "color": "#dcc7aa",
            "meshes": [
              "MAJOR_CALYX_L.01",
              "MAJOR_CALYX_L.02",
              "MAJOR_CALYX_L.03"
            ]
          },
          {
            "id": "renalPelvis",
            "name": "肾盂",
            "color": "#d8c1a3",
            "meshes": [
              "PELVIS_L"
            ]
          },
          {
            "id": "proximalUreter",
            "name": "近端输尿管",
            "color": "#d3bfa5",
            "meshes": [
              "URETER_L"
            ]
          },
          {
            "id": "renalArteries",
            "name": "肾动脉与肾内分支",
            "color": "#b66350",
            "materials": [
              "Kidney | Renal artery"
            ]
          },
          {
            "id": "renalVeins",
            "name": "肾静脉与肾内属支",
            "color": "#577d91",
            "materials": [
              "Kidney | Renal vein"
            ]
          }
        ],
        "version": "肾门外形对照",
        "status": "教学展示",
        "note": "从内侧比较肾动静脉周围的间隙，以及肾门前后两面的轮廓。"
      },
      "window": {
        "url": "./models/kidney/window.glb",
        "note": "在冠状剖面的基础上切去集合系统的部分前壁，显露乳头尖、肾盏和肾盂的内壁。深米色窄边是人为切缘。",
        "parts": [
          {
            "id": "backCortex",
            "name": "后半肾实质（含肾柱）",
            "color": "#c99078",
            "meshes": [
              "CORTEX_L.posterior"
            ]
          },
          {
            "id": "backMedulla",
            "name": "髓锥与乳头 · 后部",
            "color": "#ab6b63",
            "meshes": [
              "PYRAMID_L.01.posterior",
              "PYRAMID_L.02.posterior",
              "PYRAMID_L.03.posterior",
              "PYRAMID_L.04.posterior",
              "PYRAMID_L.05.posterior",
              "PYRAMID_L.06.posterior",
              "PYRAMID_L.07.posterior",
              "PYRAMID_L.08.posterior",
              "PYRAMID_L.10.posterior"
            ]
          },
          {
            "id": "sinusFat",
            "name": "肾窦脂肪",
            "color": "#d8bc83",
            "meshes": [
              "SINUS_FAT_L.posterior"
            ]
          },
          {
            "id": "openWall",
            "name": "切开的盏盂与输尿管壁",
            "meshes": [
              "Collecting system | opened wall"
            ],
            "color": "#d8c1a3"
          }
        ]
      },
      "papilla": {
        "url": "./models/kidney/papilla.glb",
        "view": [
          -0.008,
          0.046,
          0.999
        ],
        "note": "取上方中央的一枚乳头及对应小肾盏。转动查看乳头尖、盏内面和两侧保留的盏壁。",
        "parts": [
          {
            "id": "papillaDetail",
            "name": "上方乳头及相连髓质",
            "meshes": [
              "Papilla_02"
            ],
            "color": "#ac7268"
          },
          {
            "id": "calyxDetail",
            "name": "同一小肾盏的开窗壁",
            "meshes": [
              "Minor_calyx_02_window"
            ],
            "color": "#dac6aa"
          }
        ]
      },
      "previous": {
        "version": "肾体与近肾门管段",
        "status": "教学展示",
        "url": "./models/kidney/previous.glb",
        "note": "可观察肾体外形和近肾门管段。肾门接面仍待核实。",
        "parts": [
          {
            "id": "body",
            "name": "肾体外壳",
            "meshes": [
              "KIDNEY_L.surface"
            ]
          },
          {
            "id": "vein",
            "name": "近肾门静脉",
            "meshes": [
              "VEIN_L"
            ]
          },
          {
            "id": "artery",
            "name": "近肾门动脉",
            "meshes": [
              "ARTERY_L"
            ]
          },
          {
            "id": "ureter",
            "name": "肾盂与输尿管近段",
            "meshes": [
              "URETER_L"
            ]
          }
        ]
      }
    }
  },
  {
    "id": "pancreas",
    "name": "胰腺",
    "latin": "Pancreas",
    "system": "消化系统",
    "url": "./models/pancreas/whole.glb",
    "version": "胰实质、胰管与局部组织",
    "status": "胰头钩突根部的外形仍待核实",
    "view": [
      -0.035,
      0.09,
      1
    ],
    "thumbnail": "./media/pancreas.webp",
    "note": "打开胰实质看主胰管从尾部延向胰头，以及胰体切面中的小叶和组织隔。组织放大图可分别查看腺泡、胰岛和闰管。",
    "parts": [
      {
        "id": "gland",
        "name": "胰实质",
        "color": "#c48265",
        "meshes": [
          "PA_Parenchyma"
        ]
      },
      {
        "id": "mainDuct",
        "name": "主胰管外壁",
        "color": "#e1c4a2",
        "materials": [
          "PAN_MainDuct_Outer"
        ]
      },
      {
        "id": "accessoryDuct",
        "name": "副胰管外壁",
        "color": "#c9af89",
        "materials": [
          "PAN_AccessoryDuct_Outer"
        ]
      },
      {
        "id": "tributaries",
        "name": "侧支外壁",
        "color": "#d7b596",
        "materials": [
          "PAN_Tributary_Outer"
        ]
      },
      {
        "id": "innerWall",
        "name": "各级胰管内壁",
        "color": "#b88771",
        "materials": [
          "PAN_Duct_Inner"
        ]
      }
    ],
    "legacyLayers": "previous",
    "interior": {
      "label": "打开胰腺切面",
      "asset": "section"
    },
    "isolatedViews": [
      {
        "key": "ducts",
        "label": "仅看胰管",
        "asset": "ducts"
      },
      {
        "key": "micro",
        "label": "组织局部放大",
        "asset": "micro"
      },
      {
        "key": "previous",
        "label": "原版外形分区",
        "asset": "previous"
      }
    ],
    "assets": {
      "section": {
        "url": "./models/pancreas/section.glb",
        "parts": [
          {
            "id": "gland",
            "name": "胰实质与切面",
            "color": "#c48265",
            "meshes": [
              "PA_Section"
            ]
          },
          {
            "id": "lobules",
            "name": "胰体局部小叶群",
            "color": "#bb7e64",
            "meshes": [
              "PA_Lobules"
            ]
          },
          {
            "id": "septa",
            "name": "小叶间组织隔",
            "color": "#d6ab90",
            "meshes": [
              "PA_Septa"
            ]
          },
          {
            "id": "mainDuct",
            "name": "主胰管外壁",
            "color": "#e1c4a2",
            "materials": [
              "PAN_MainDuct_Outer"
            ]
          },
          {
            "id": "accessoryDuct",
            "name": "副胰管外壁",
            "color": "#c9af89",
            "materials": [
              "PAN_AccessoryDuct_Outer"
            ]
          },
          {
            "id": "tributaries",
            "name": "侧支外壁",
            "color": "#d7b596",
            "materials": [
              "PAN_Tributary_Outer"
            ]
          },
          {
            "id": "innerWall",
            "name": "各级胰管内壁",
            "color": "#b88771",
            "materials": [
              "PAN_Duct_Inner"
            ]
          }
        ],
        "view": [
          -0.035,
          0.065,
          1
        ],
        "note": "可沿纵向切面追踪胰管。胰体的一组小叶和组织隔可分别隐藏或切到线框。"
      },
      "ducts": {
        "url": "./models/pancreas/ducts.glb",
        "parts": [
          {
            "id": "mainDuct",
            "name": "主胰管外壁",
            "color": "#e1c4a2",
            "materials": [
              "PAN_MainDuct_Outer"
            ]
          },
          {
            "id": "accessoryDuct",
            "name": "副胰管外壁",
            "color": "#c9af89",
            "materials": [
              "PAN_AccessoryDuct_Outer"
            ]
          },
          {
            "id": "tributaries",
            "name": "侧支外壁",
            "color": "#d7b596",
            "materials": [
              "PAN_Tributary_Outer"
            ]
          },
          {
            "id": "innerWall",
            "name": "各级胰管内壁",
            "color": "#b88771",
            "materials": [
              "PAN_Duct_Inner"
            ]
          }
        ],
        "view": [
          -0.035,
          0.075,
          1
        ],
        "note": "进入胰头前后可沿主胰管追踪转向、副胰管和侧支。可分别隐藏三组外壁，查看腔面。此处展示代表性走行。"
      },
      "micro": {
        "url": "./models/pancreas/micro.glb",
        "parts": [
          {
            "id": "acini",
            "name": "外分泌腺泡",
            "color": "#bd7668",
            "meshes": [
              "PA_Acini"
            ]
          },
          {
            "id": "islet",
            "name": "胰岛细胞群",
            "color": "#e1b297",
            "meshes": [
              "PA_Islet"
            ]
          },
          {
            "id": "smallDuct",
            "name": "闰管（局部小导管）",
            "color": "#ddc3a0",
            "meshes": [
              "PA_IntercalatedDuct"
            ]
          },
          {
            "id": "stroma",
            "name": "周围结缔组织",
            "color": "#d4b09a",
            "meshes": [
              "PA_MicroStroma"
            ]
          }
        ],
        "view": [
          0,
          0.06,
          1
        ],
        "note": "这块约 420 × 248 微米的局部组织按自身尺寸单独放大，可分别查看外分泌腺泡、胰岛细胞群、闰管和周围结缔组织。"
      },
      "previous": {
        "id": "pancreas",
        "name": "胰腺",
        "latin": "Pancreas",
        "system": "消化系统",
        "version": "胰腺外形分区",
        "url": "./models/pancreas/previous.glb",
        "thumbnail": "./media/pancreas-previous.webp",
        "status": "教学展示",
        "note": "六个选区展示胰头、胰颈、胰体、胰尾、钩突和切迹周围的表面。此视图仅展示外形。",
        "view": [
          0,
          0,
          1
        ],
        "regions": {
          "mesh": "Pancreas",
          "url": "./media/pancreas-previous-regions.bin",
          "triangles": 47760,
          "modelSha256": "82df18d891be8625e820fbbd662c3cb57c4cec7c495228b09c2c0e9f0c6389e3",
          "sha256": "f8491aa8b5d865bf0d30c4b3e56767d634664671f4e6ae44f4dcb965f361f6c9"
        },
        "parts": [
          {
            "id": "head",
            "name": "胰头",
            "meshes": [
              "Pancreas"
            ],
            "region": 2
          },
          {
            "id": "neck",
            "name": "胰颈",
            "meshes": [
              "Pancreas"
            ],
            "region": 3
          },
          {
            "id": "body",
            "name": "胰体",
            "meshes": [
              "Pancreas"
            ],
            "region": 4
          },
          {
            "id": "tail",
            "name": "胰尾",
            "meshes": [
              "Pancreas"
            ],
            "region": 5
          },
          {
            "id": "uncinate",
            "name": "钩突",
            "meshes": [
              "Pancreas"
            ],
            "region": 1
          },
          {
            "id": "notch",
            "name": "切迹周围",
            "meshes": [
              "Pancreas"
            ],
            "region": 6
          }
        ]
      }
    }
  },
  {
    "id": "spleen",
    "name": "脾脏",
    "latin": "Lien",
    "system": "淋巴系统",
    "version": "脾实质与脾门血管",
    "status": "脾门沟缘与部分静脉末端的外形仍待核实",
    "url": "./models/spleen/whole.glb",
    "thumbnail": "./media/spleen.webp",
    "view": [
      1,
      0.03,
      -0.075
    ],
    "note": "脾门位于脏面，脾动静脉由这里出入。打开切面可看红髓、小梁和沿动脉分布的白髓示教区。",
    "parts": [
      {
        "id": "capsule",
        "name": "脾被膜",
        "color": "#854052",
        "materials": [
          "Splenic capsule | satin plum",
          "Fibrous capsule | cut edge"
        ]
      },
      {
        "id": "redPulp",
        "name": "红髓",
        "color": "#9e4146",
        "materials": [
          "Red pulp | exposed tissue"
        ]
      },
      {
        "id": "arteries",
        "name": "脾动脉与分支",
        "color": "#c05340",
        "materials": [
          "Splenic artery | atlas vermilion",
          "Splenic artery | atlas vermilion | wall variation"
        ]
      },
      {
        "id": "veins",
        "name": "脾静脉与属支",
        "color": "#50758c",
        "materials": [
          "Splenic vein | atlas slate blue",
          "Splenic vein | atlas slate blue | wall variation"
        ]
      },
      {
        "id": "trabeculae",
        "name": "小梁",
        "color": "#caa38c",
        "materials": [
          "Trabeculae | collagen"
        ]
      },
      {
        "id": "whitePulp",
        "name": "白髓示教区",
        "color": "#c7a4a6",
        "materials": [
          "White pulp | pale lymphoid tissue"
        ]
      }
    ],
    "legacyLayers": "previous",
    "interior": {
      "label": "打开脾脏切面",
      "asset": "section"
    },
    "isolatedViews": [
      {
        "key": "dissection",
        "label": "剥开看分支",
        "asset": "dissection"
      },
      {
        "key": "vessels",
        "label": "仅看动静脉",
        "only": [
          "arteries",
          "veins"
        ]
      },
      {
        "key": "framework",
        "label": "小梁与白髓",
        "only": [
          "trabeculae",
          "whitePulp"
        ]
      },
      {
        "key": "previous",
        "label": "原版外形分区",
        "asset": "previous"
      }
    ],
    "assets": {
      "section": {
        "url": "./models/spleen/section.glb",
        "view": [
          -1,
          0.5,
          0.18
        ],
        "note": "沿膈面一侧切开后可旋转看实质和保留的脾门。白髓团块和小梁按教学尺度显示。"
      },
      "dissection": {
        "url": "./models/spleen/dissection.glb",
        "view": [
          -0.65,
          0.8,
          0.22
        ],
        "note": "移去一部分被膜与红髓后，可沿着显露的血管走向追踪分支，也可单独查看相邻的小梁和白髓。"
      },
      "previous": {
        "version": "脾脏外表面",
        "status": "教学展示",
        "note": "六个选区显示外表面各部位。点部位名称可以聚焦相应区域。",
        "url": "./models/spleen/previous.glb",
        "view": [
          1,
          0.03,
          -0.075
        ],
        "regions": {
          "mesh": "SPLEEN",
          "url": "./media/spleen-previous-regions.bin",
          "triangles": 44616,
          "modelSha256": "966bcd5019fa27b48313d5f42acea8dbc0a388bef2c1c74062a789be69b40c27",
          "sha256": "2b8e720efcb54b4b6653569605a83935e221e98e3c41f51843265062b60cbfd3"
        },
        "parts": [
          {
            "id": "diaphragmatic",
            "name": "膈面",
            "meshes": [
              "SPLEEN"
            ],
            "region": 1
          },
          {
            "id": "hilum",
            "name": "脾门",
            "meshes": [
              "SPLEEN"
            ],
            "region": 3
          },
          {
            "id": "gastric",
            "name": "胃压迹",
            "meshes": [
              "SPLEEN"
            ],
            "region": 4
          },
          {
            "id": "renal",
            "name": "肾压迹",
            "meshes": [
              "SPLEEN"
            ],
            "region": 5
          },
          {
            "id": "colic",
            "name": "结肠压迹",
            "meshes": [
              "SPLEEN"
            ],
            "region": 6
          },
          {
            "id": "visceral",
            "name": "其余脏面",
            "meshes": [
              "SPLEEN"
            ],
            "region": 2
          }
        ]
      }
    }
  },
  {
    "id": "eye",
    "name": "右眼球",
    "latin": "Bulbus oculi dexter",
    "system": "视觉器官",
    "version": "右眼球与视神经短段",
    "status": "教学展示",
    "url": "./models/eye/whole.glb",
    "thumbnail": "./media/eye.webp",
    "view": [
      0,
      0,
      1
    ],
    "note": "正面可透过角膜看见虹膜与瞳孔。沿虹膜外围向眼白看，可找到角巩膜缘。瞳孔后方的暗色衬面只用于显示开口。",
    "parts": [
      {
        "id": "cornea",
        "name": "角膜",
        "color": "#c4d9dc",
        "meshes": [
          "CORNEA_R"
        ]
      },
      {
        "id": "sclera",
        "name": "巩膜",
        "color": "#e3ded4",
        "meshes": [
          "SCLERA_R"
        ]
      },
      {
        "id": "iris",
        "name": "虹膜",
        "color": "#8f633b",
        "meshes": [
          "IRIS_R"
        ]
      },
      {
        "id": "optic-nerve",
        "name": "视神经短段",
        "color": "#d8b69b",
        "meshes": [
          "OPTIC_NERVE_STUMP_R"
        ]
      },
      {
        "id": "backing",
        "name": "暗色衬面（展示用）",
        "color": "#403a35",
        "meshes": [
          "DISPLAY_DARK_INTERIOR"
        ]
      }
    ],
    "isolatedViews": [
      {
        "key": "profile",
        "label": "颞侧看角膜",
        "asset": "profile"
      },
      {
        "key": "posterior",
        "label": "正后方定位",
        "asset": "posterior"
      },
      {
        "key": "posterior-oblique",
        "label": "后斜看神经根",
        "asset": "posterior-oblique"
      }
    ],
    "assets": {
      "profile": {
        "view": [
          -1,
          0,
          0
        ],
        "note": "从颞侧看，画面右方是眼球前方。沿巩膜向右可追到透明角膜的弧顶。顶点比角膜缘平均平面向前 2.44 mm。"
      },
      "posterior": {
        "view": [
          0,
          0,
          -1
        ],
        "note": "正后方观察右眼时，画面左方是鼻侧。视神经根部中心相对经过角膜缘中心的前后轴向鼻侧偏 2.93 mm。"
      },
      "posterior-oblique": {
        "view": [
          0.6142,
          0.2168,
          -0.7588
        ],
        "note": "沿短段侧壁看向后巩膜，可分辨附着处与截端。也可暂时隐藏视神经，再显示它，对照同一圈接合边缘。"
      }
    }
  },
  {
    "id": "dentition",
    "name": "上下恒牙列",
    "latin": "Dentes permanentes",
    "system": "消化系统",
    "version": "上下颌 28 颗恒牙",
    "status": "教学展示",
    "note": "上下颌各 14 颗恒牙，每个象限从中切牙排到第二磨牙。左右按患者自身标注，可按 FDI 牙号聚焦。右下磨牙根端略钝。上下颌轻度分开，闭口接触未经验证。",
    "url": "./models/dentition/whole.glb",
    "thumbnail": "./media/dentition.webp",
    "view": [
      -0.66,
      0.34,
      1
    ],
    "parts": [
      {
        "id": "tooth11",
        "name": "11 右上中切牙",
        "meshes": [
          "FDI_11_UPPER_R_CI"
        ]
      },
      {
        "id": "tooth12",
        "name": "12 右上侧切牙",
        "meshes": [
          "FDI_12_UPPER_R_LI"
        ]
      },
      {
        "id": "tooth13",
        "name": "13 右上尖牙",
        "meshes": [
          "FDI_13_UPPER_R_CA"
        ]
      },
      {
        "id": "tooth14",
        "name": "14 右上第一前磨牙",
        "meshes": [
          "FDI_14_UPPER_R_PM1"
        ]
      },
      {
        "id": "tooth15",
        "name": "15 右上第二前磨牙",
        "meshes": [
          "FDI_15_UPPER_R_PM2"
        ]
      },
      {
        "id": "tooth16",
        "name": "16 右上第一磨牙",
        "meshes": [
          "FDI_16_UPPER_R_M1"
        ]
      },
      {
        "id": "tooth17",
        "name": "17 右上第二磨牙",
        "meshes": [
          "FDI_17_UPPER_R_M2"
        ]
      },
      {
        "id": "tooth21",
        "name": "21 左上中切牙",
        "meshes": [
          "FDI_21_UPPER_L_CI"
        ]
      },
      {
        "id": "tooth22",
        "name": "22 左上侧切牙",
        "meshes": [
          "FDI_22_UPPER_L_LI"
        ]
      },
      {
        "id": "tooth23",
        "name": "23 左上尖牙",
        "meshes": [
          "FDI_23_UPPER_L_CA"
        ]
      },
      {
        "id": "tooth24",
        "name": "24 左上第一前磨牙",
        "meshes": [
          "FDI_24_UPPER_L_PM1"
        ]
      },
      {
        "id": "tooth25",
        "name": "25 左上第二前磨牙",
        "meshes": [
          "FDI_25_UPPER_L_PM2"
        ]
      },
      {
        "id": "tooth26",
        "name": "26 左上第一磨牙",
        "meshes": [
          "FDI_26_UPPER_L_M1"
        ]
      },
      {
        "id": "tooth27",
        "name": "27 左上第二磨牙",
        "meshes": [
          "FDI_27_UPPER_L_M2"
        ]
      },
      {
        "id": "tooth31",
        "name": "31 左下中切牙",
        "meshes": [
          "FDI_31_LOWER_L_CI"
        ]
      },
      {
        "id": "tooth32",
        "name": "32 左下侧切牙",
        "meshes": [
          "FDI_32_LOWER_L_LI"
        ]
      },
      {
        "id": "tooth33",
        "name": "33 左下尖牙",
        "meshes": [
          "FDI_33_LOWER_L_CA"
        ]
      },
      {
        "id": "tooth34",
        "name": "34 左下第一前磨牙",
        "meshes": [
          "FDI_34_LOWER_L_PM1"
        ]
      },
      {
        "id": "tooth35",
        "name": "35 左下第二前磨牙",
        "meshes": [
          "FDI_35_LOWER_L_PM2"
        ]
      },
      {
        "id": "tooth36",
        "name": "36 左下第一磨牙",
        "meshes": [
          "FDI_36_LOWER_L_M1"
        ]
      },
      {
        "id": "tooth37",
        "name": "37 左下第二磨牙",
        "meshes": [
          "FDI_37_LOWER_L_M2"
        ]
      },
      {
        "id": "tooth41",
        "name": "41 右下中切牙",
        "meshes": [
          "FDI_41_LOWER_R_CI"
        ]
      },
      {
        "id": "tooth42",
        "name": "42 右下侧切牙",
        "meshes": [
          "FDI_42_LOWER_R_LI"
        ]
      },
      {
        "id": "tooth43",
        "name": "43 右下尖牙",
        "meshes": [
          "FDI_43_LOWER_R_CA"
        ]
      },
      {
        "id": "tooth44",
        "name": "44 右下第一前磨牙",
        "meshes": [
          "FDI_44_LOWER_R_PM1"
        ]
      },
      {
        "id": "tooth45",
        "name": "45 右下第二前磨牙",
        "meshes": [
          "FDI_45_LOWER_R_PM2"
        ]
      },
      {
        "id": "tooth46",
        "name": "46 右下第一磨牙",
        "meshes": [
          "FDI_46_LOWER_R_M1"
        ]
      },
      {
        "id": "tooth47",
        "name": "47 右下第二磨牙",
        "meshes": [
          "FDI_47_LOWER_R_M2"
        ]
      }
    ],
    "isolatedViews": [
      {
        "key": "upper",
        "label": "上颌咬合面",
        "asset": "upper",
        "only": [
          "tooth11",
          "tooth12",
          "tooth13",
          "tooth14",
          "tooth15",
          "tooth16",
          "tooth17",
          "tooth21",
          "tooth22",
          "tooth23",
          "tooth24",
          "tooth25",
          "tooth26",
          "tooth27"
        ]
      },
      {
        "key": "lower",
        "label": "下颌咬合面",
        "asset": "lower",
        "only": [
          "tooth31",
          "tooth32",
          "tooth33",
          "tooth34",
          "tooth35",
          "tooth36",
          "tooth37",
          "tooth41",
          "tooth42",
          "tooth43",
          "tooth44",
          "tooth45",
          "tooth46",
          "tooth47"
        ]
      }
    ],
    "assets": {
      "upper": {
        "view": [
          0,
          -1,
          0.001
        ],
        "note": "从下向上看上牙弓，前牙朝画面上方。画面左侧是患者右上 11–17，右侧是患者左上 21–27。"
      },
      "lower": {
        "view": [
          0,
          1,
          -0.001
        ],
        "note": "从上向下看下牙弓，前牙朝画面上方。画面左侧是患者左下 31–37，右侧是患者右下 41–47。"
      }
    }
  }
];
