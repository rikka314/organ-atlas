export const specimens = [
  {
    "id": "heart",
    "name": "心脏",
    "latin": "Cor",
    "system": "循环系统",
    "version": "房室瓣支撑 R1",
    "url": "./models/heart-av-support-r1/whole.glb",
    "thumbnail": "./media/heart.webp",
    "status": "教学展示",
    "note": "选择「显露心瓣膜」，沿腱索从瓣叶追到乳头肌与心室壁；可分别切换左、右支撑链。模型为静态教学构型，不模拟瓣膜运动或血流。",
    "view": [
      0.7962,
      -0.2413,
      0.5549
    ],
    "interior": {
      "label": "显露心瓣膜",
      "asset": "opened",
      "only": [
        "lv-wall",
        "rv-wall",
        "mv",
        "tv",
        "av",
        "pv",
        "mv-papillary-Anterolateral",
        "mv-chordae-Anterolateral_Anterior_Stem",
        "mv-chordae-Anterolateral_Anterior_01",
        "mv-chordae-Anterolateral_Anterior_02",
        "mv-chordae-Anterolateral_Posterior_Stem",
        "mv-chordae-Anterolateral_Posterior_01",
        "mv-chordae-Anterolateral_Posterior_02",
        "mv-papillary-Posteromedial",
        "mv-chordae-Posteromedial_Anterior_Stem",
        "mv-chordae-Posteromedial_Anterior_01",
        "mv-chordae-Posteromedial_Anterior_02",
        "mv-chordae-Posteromedial_Posterior_Stem",
        "mv-chordae-Posteromedial_Posterior_01",
        "mv-chordae-Posteromedial_Posterior_02",
        "tv-papillary-Anterior",
        "tv-chordae-Anterior_Anterior_Stem",
        "tv-chordae-Anterior_Anterior_01",
        "tv-chordae-Anterior_Anterior_02",
        "tv-chordae-Anterior_Posterior_Stem",
        "tv-chordae-Anterior_Posterior_01",
        "tv-chordae-Anterior_Posterior_02",
        "tv-papillary-Posterior",
        "tv-chordae-Posterior_Posterior_Stem",
        "tv-chordae-Posterior_Posterior_01",
        "tv-chordae-Posterior_Posterior_02",
        "tv-chordae-Posterior_Septal_Stem",
        "tv-chordae-Posterior_Septal_01",
        "tv-chordae-Posterior_Septal_02",
        "tv-papillary-Septal",
        "tv-chordae-Septal_Septal_Stem",
        "tv-chordae-Septal_Septal_01",
        "tv-chordae-Septal_Septal_02",
        "tv-chordae-Septal_Anterior_Stem",
        "tv-chordae-Septal_Anterior_01",
        "tv-chordae-Septal_Anterior_02"
      ]
    },
    "parts": [
      {
        "id": "ventricles",
        "name": "完整心室壁",
        "meshes": [
          "Ventricular_myocardium"
        ]
      },
      {
        "id": "atria",
        "name": "心房壁",
        "materials": [
          "Atlas tissue • atrium",
          "Atlas tissue • inner",
          "Heart tissue / atrium",
          "Heart tissue / inner"
        ],
        "meshes": [
          "Atrial_Myocardium"
        ]
      },
      {
        "id": "auricles",
        "name": "双侧心耳",
        "materials": [
          "Atlas tissue • auricle",
          "Heart tissue / auricle"
        ],
        "meshes": [
          "Atrial_Myocardium"
        ]
      },
      {
        "id": "mv",
        "name": "二尖瓣（MV）",
        "meshes": [
          "Valve_MV"
        ]
      },
      {
        "id": "tv",
        "name": "三尖瓣（TV）",
        "meshes": [
          "Valve_TV"
        ]
      },
      {
        "id": "av",
        "name": "主动脉瓣（AV）",
        "meshes": [
          "Valve_AV"
        ]
      },
      {
        "id": "pv",
        "name": "肺动脉瓣（PV）",
        "meshes": [
          "Valve_PV"
        ]
      },
      {
        "id": "aorta",
        "name": "主动脉",
        "meshes": [
          "Aorta"
        ]
      },
      {
        "id": "pulmonary",
        "name": "肺动脉",
        "meshes": [
          "Pulmonary_tree"
        ]
      },
      {
        "id": "caval",
        "name": "上、下腔静脉",
        "meshes": [
          "SVC",
          "IVC"
        ]
      },
      {
        "id": "pulmonaryVeins",
        "name": "肺静脉",
        "meshes": [
          "LSPV",
          "LIPV",
          "RSPV",
          "RIPV"
        ]
      },
      {
        "id": "junctions",
        "name": "瓣口与静脉接合区",
        "meshes": [
          "Interface_IVC",
          "Interface_TV",
          "Interface_MV"
        ]
      },
      {
        "id": "arteries",
        "name": "冠状动脉",
        "meshes": [
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
          "A12_Posterior_wall_branch",
          "A00_Left_coronary_stem"
        ]
      },
      {
        "id": "veins",
        "name": "心静脉与冠状窦",
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
        "meshes": [
          "F01_Anterior_groove",
          "F02_Left_coronary_groove",
          "F03_Right_coronary_groove",
          "F04_Posterior_groove"
        ]
      },
      {
        "id": "mv-papillary-Anterolateral",
        "name": "左室乳头肌 · Anterolateral",
        "meshes": [
          "Papillary_LV_Anterolateral"
        ]
      },
      {
        "id": "mv-chordae-Anterolateral_Anterior_Stem",
        "name": "左室腱索段 · Anterolateral_Anterior_Stem",
        "meshes": [
          "Chorda_LV_Anterolateral_Anterior_Stem"
        ]
      },
      {
        "id": "mv-chordae-Anterolateral_Anterior_01",
        "name": "左室腱索段 · Anterolateral_Anterior_01",
        "meshes": [
          "Chorda_LV_Anterolateral_Anterior_01"
        ]
      },
      {
        "id": "mv-chordae-Anterolateral_Anterior_02",
        "name": "左室腱索段 · Anterolateral_Anterior_02",
        "meshes": [
          "Chorda_LV_Anterolateral_Anterior_02"
        ]
      },
      {
        "id": "mv-chordae-Anterolateral_Posterior_Stem",
        "name": "左室腱索段 · Anterolateral_Posterior_Stem",
        "meshes": [
          "Chorda_LV_Anterolateral_Posterior_Stem"
        ]
      },
      {
        "id": "mv-chordae-Anterolateral_Posterior_01",
        "name": "左室腱索段 · Anterolateral_Posterior_01",
        "meshes": [
          "Chorda_LV_Anterolateral_Posterior_01"
        ]
      },
      {
        "id": "mv-chordae-Anterolateral_Posterior_02",
        "name": "左室腱索段 · Anterolateral_Posterior_02",
        "meshes": [
          "Chorda_LV_Anterolateral_Posterior_02"
        ]
      },
      {
        "id": "mv-papillary-Posteromedial",
        "name": "左室乳头肌 · Posteromedial",
        "meshes": [
          "Papillary_LV_Posteromedial"
        ]
      },
      {
        "id": "mv-chordae-Posteromedial_Anterior_Stem",
        "name": "左室腱索段 · Posteromedial_Anterior_Stem",
        "meshes": [
          "Chorda_LV_Posteromedial_Anterior_Stem"
        ]
      },
      {
        "id": "mv-chordae-Posteromedial_Anterior_01",
        "name": "左室腱索段 · Posteromedial_Anterior_01",
        "meshes": [
          "Chorda_LV_Posteromedial_Anterior_01"
        ]
      },
      {
        "id": "mv-chordae-Posteromedial_Anterior_02",
        "name": "左室腱索段 · Posteromedial_Anterior_02",
        "meshes": [
          "Chorda_LV_Posteromedial_Anterior_02"
        ]
      },
      {
        "id": "mv-chordae-Posteromedial_Posterior_Stem",
        "name": "左室腱索段 · Posteromedial_Posterior_Stem",
        "meshes": [
          "Chorda_LV_Posteromedial_Posterior_Stem"
        ]
      },
      {
        "id": "mv-chordae-Posteromedial_Posterior_01",
        "name": "左室腱索段 · Posteromedial_Posterior_01",
        "meshes": [
          "Chorda_LV_Posteromedial_Posterior_01"
        ]
      },
      {
        "id": "mv-chordae-Posteromedial_Posterior_02",
        "name": "左室腱索段 · Posteromedial_Posterior_02",
        "meshes": [
          "Chorda_LV_Posteromedial_Posterior_02"
        ]
      },
      {
        "id": "tv-papillary-Anterior",
        "name": "右室乳头肌 · Anterior",
        "meshes": [
          "Papillary_RV_Anterior"
        ]
      },
      {
        "id": "tv-chordae-Anterior_Anterior_Stem",
        "name": "右室腱索段 · Anterior_Anterior_Stem",
        "meshes": [
          "Chorda_RV_Anterior_Anterior_Stem"
        ]
      },
      {
        "id": "tv-chordae-Anterior_Anterior_01",
        "name": "右室腱索段 · Anterior_Anterior_01",
        "meshes": [
          "Chorda_RV_Anterior_Anterior_01"
        ]
      },
      {
        "id": "tv-chordae-Anterior_Anterior_02",
        "name": "右室腱索段 · Anterior_Anterior_02",
        "meshes": [
          "Chorda_RV_Anterior_Anterior_02"
        ]
      },
      {
        "id": "tv-chordae-Anterior_Posterior_Stem",
        "name": "右室腱索段 · Anterior_Posterior_Stem",
        "meshes": [
          "Chorda_RV_Anterior_Posterior_Stem"
        ]
      },
      {
        "id": "tv-chordae-Anterior_Posterior_01",
        "name": "右室腱索段 · Anterior_Posterior_01",
        "meshes": [
          "Chorda_RV_Anterior_Posterior_01"
        ]
      },
      {
        "id": "tv-chordae-Anterior_Posterior_02",
        "name": "右室腱索段 · Anterior_Posterior_02",
        "meshes": [
          "Chorda_RV_Anterior_Posterior_02"
        ]
      },
      {
        "id": "tv-papillary-Posterior",
        "name": "右室乳头肌 · Posterior",
        "meshes": [
          "Papillary_RV_Posterior"
        ]
      },
      {
        "id": "tv-chordae-Posterior_Posterior_Stem",
        "name": "右室腱索段 · Posterior_Posterior_Stem",
        "meshes": [
          "Chorda_RV_Posterior_Posterior_Stem"
        ]
      },
      {
        "id": "tv-chordae-Posterior_Posterior_01",
        "name": "右室腱索段 · Posterior_Posterior_01",
        "meshes": [
          "Chorda_RV_Posterior_Posterior_01"
        ]
      },
      {
        "id": "tv-chordae-Posterior_Posterior_02",
        "name": "右室腱索段 · Posterior_Posterior_02",
        "meshes": [
          "Chorda_RV_Posterior_Posterior_02"
        ]
      },
      {
        "id": "tv-chordae-Posterior_Septal_Stem",
        "name": "右室腱索段 · Posterior_Septal_Stem",
        "meshes": [
          "Chorda_RV_Posterior_Septal_Stem"
        ]
      },
      {
        "id": "tv-chordae-Posterior_Septal_01",
        "name": "右室腱索段 · Posterior_Septal_01",
        "meshes": [
          "Chorda_RV_Posterior_Septal_01"
        ]
      },
      {
        "id": "tv-chordae-Posterior_Septal_02",
        "name": "右室腱索段 · Posterior_Septal_02",
        "meshes": [
          "Chorda_RV_Posterior_Septal_02"
        ]
      },
      {
        "id": "tv-papillary-Septal",
        "name": "右室乳头肌 · Septal",
        "meshes": [
          "Papillary_RV_Septal"
        ]
      },
      {
        "id": "tv-chordae-Septal_Septal_Stem",
        "name": "右室腱索段 · Septal_Septal_Stem",
        "meshes": [
          "Chorda_RV_Septal_Septal_Stem"
        ]
      },
      {
        "id": "tv-chordae-Septal_Septal_01",
        "name": "右室腱索段 · Septal_Septal_01",
        "meshes": [
          "Chorda_RV_Septal_Septal_01"
        ]
      },
      {
        "id": "tv-chordae-Septal_Septal_02",
        "name": "右室腱索段 · Septal_Septal_02",
        "meshes": [
          "Chorda_RV_Septal_Septal_02"
        ]
      },
      {
        "id": "tv-chordae-Septal_Anterior_Stem",
        "name": "右室腱索段 · Septal_Anterior_Stem",
        "meshes": [
          "Chorda_RV_Septal_Anterior_Stem"
        ]
      },
      {
        "id": "tv-chordae-Septal_Anterior_01",
        "name": "右室腱索段 · Septal_Anterior_01",
        "meshes": [
          "Chorda_RV_Septal_Anterior_01"
        ]
      },
      {
        "id": "tv-chordae-Septal_Anterior_02",
        "name": "右室腱索段 · Septal_Anterior_02",
        "meshes": [
          "Chorda_RV_Septal_Anterior_02"
        ]
      }
    ],
    "isolatedViews": [
      {
        "key": "opened",
        "label": "双室开窗",
        "asset": "opened"
      },
      {
        "key": "left-chain",
        "label": "左链条 · 二尖瓣至左室壁",
        "asset": "left-open",
        "only": [
          "lv-wall",
          "mv",
          "mv-papillary-Anterolateral",
          "mv-chordae-Anterolateral_Anterior_Stem",
          "mv-chordae-Anterolateral_Anterior_01",
          "mv-chordae-Anterolateral_Anterior_02",
          "mv-chordae-Anterolateral_Posterior_Stem",
          "mv-chordae-Anterolateral_Posterior_01",
          "mv-chordae-Anterolateral_Posterior_02",
          "mv-papillary-Posteromedial",
          "mv-chordae-Posteromedial_Anterior_Stem",
          "mv-chordae-Posteromedial_Anterior_01",
          "mv-chordae-Posteromedial_Anterior_02",
          "mv-chordae-Posteromedial_Posterior_Stem",
          "mv-chordae-Posteromedial_Posterior_01",
          "mv-chordae-Posteromedial_Posterior_02"
        ]
      },
      {
        "key": "right-chain",
        "label": "右链条 · 三尖瓣至右室壁",
        "asset": "right-open",
        "only": [
          "rv-wall",
          "tv",
          "tv-papillary-Anterior",
          "tv-chordae-Anterior_Anterior_Stem",
          "tv-chordae-Anterior_Anterior_01",
          "tv-chordae-Anterior_Anterior_02",
          "tv-chordae-Anterior_Posterior_Stem",
          "tv-chordae-Anterior_Posterior_01",
          "tv-chordae-Anterior_Posterior_02",
          "tv-papillary-Posterior",
          "tv-chordae-Posterior_Posterior_Stem",
          "tv-chordae-Posterior_Posterior_01",
          "tv-chordae-Posterior_Posterior_02",
          "tv-chordae-Posterior_Septal_Stem",
          "tv-chordae-Posterior_Septal_01",
          "tv-chordae-Posterior_Septal_02",
          "tv-papillary-Septal",
          "tv-chordae-Septal_Septal_Stem",
          "tv-chordae-Septal_Septal_01",
          "tv-chordae-Septal_Septal_02",
          "tv-chordae-Septal_Anterior_Stem",
          "tv-chordae-Septal_Anterior_01",
          "tv-chordae-Septal_Anterior_02"
        ]
      }
    ],
    "assets": {
      "opened": {
        "url": "./models/heart-av-support-r1/open-wall.glb",
        "parts": [
          {
            "id": "lv-wall",
            "name": "左心室开窗壁（支撑终点）",
            "meshes": [
              "LV_wall_open"
            ]
          },
          {
            "id": "rv-wall",
            "name": "右心室开窗壁（支撑终点）",
            "meshes": [
              "RV_wall_open"
            ]
          },
          {
            "id": "atria",
            "name": "心房壁",
            "materials": [
              "Atlas tissue • atrium",
              "Atlas tissue • inner",
              "Heart tissue / atrium",
              "Heart tissue / inner"
            ],
            "meshes": [
              "Atrial_Myocardium"
            ]
          },
          {
            "id": "auricles",
            "name": "双侧心耳",
            "materials": [
              "Atlas tissue • auricle",
              "Heart tissue / auricle"
            ],
            "meshes": [
              "Atrial_Myocardium"
            ]
          },
          {
            "id": "mv",
            "name": "二尖瓣（MV）",
            "meshes": [
              "Valve_MV"
            ]
          },
          {
            "id": "tv",
            "name": "三尖瓣（TV）",
            "meshes": [
              "Valve_TV"
            ]
          },
          {
            "id": "av",
            "name": "主动脉瓣（AV）",
            "meshes": [
              "Valve_AV"
            ]
          },
          {
            "id": "pv",
            "name": "肺动脉瓣（PV）",
            "meshes": [
              "Valve_PV"
            ]
          },
          {
            "id": "aorta",
            "name": "主动脉",
            "meshes": [
              "Aorta"
            ]
          },
          {
            "id": "pulmonary",
            "name": "肺动脉",
            "meshes": [
              "Pulmonary_tree"
            ]
          },
          {
            "id": "caval",
            "name": "上、下腔静脉",
            "meshes": [
              "SVC",
              "IVC"
            ]
          },
          {
            "id": "pulmonaryVeins",
            "name": "肺静脉",
            "meshes": [
              "LSPV",
              "LIPV",
              "RSPV",
              "RIPV"
            ]
          },
          {
            "id": "junctions",
            "name": "瓣口与静脉接合区",
            "meshes": [
              "Interface_IVC",
              "Interface_TV",
              "Interface_MV"
            ]
          },
          {
            "id": "arteries",
            "name": "冠状动脉",
            "meshes": [
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
              "A12_Posterior_wall_branch",
              "A00_Left_coronary_stem"
            ]
          },
          {
            "id": "veins",
            "name": "心静脉与冠状窦",
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
            "meshes": [
              "F01_Anterior_groove",
              "F02_Left_coronary_groove",
              "F03_Right_coronary_groove",
              "F04_Posterior_groove"
            ]
          },
          {
            "id": "mv-papillary-Anterolateral",
            "name": "左室乳头肌 · Anterolateral",
            "meshes": [
              "Papillary_LV_Anterolateral"
            ]
          },
          {
            "id": "mv-chordae-Anterolateral_Anterior_Stem",
            "name": "左室腱索段 · Anterolateral_Anterior_Stem",
            "meshes": [
              "Chorda_LV_Anterolateral_Anterior_Stem"
            ]
          },
          {
            "id": "mv-chordae-Anterolateral_Anterior_01",
            "name": "左室腱索段 · Anterolateral_Anterior_01",
            "meshes": [
              "Chorda_LV_Anterolateral_Anterior_01"
            ]
          },
          {
            "id": "mv-chordae-Anterolateral_Anterior_02",
            "name": "左室腱索段 · Anterolateral_Anterior_02",
            "meshes": [
              "Chorda_LV_Anterolateral_Anterior_02"
            ]
          },
          {
            "id": "mv-chordae-Anterolateral_Posterior_Stem",
            "name": "左室腱索段 · Anterolateral_Posterior_Stem",
            "meshes": [
              "Chorda_LV_Anterolateral_Posterior_Stem"
            ]
          },
          {
            "id": "mv-chordae-Anterolateral_Posterior_01",
            "name": "左室腱索段 · Anterolateral_Posterior_01",
            "meshes": [
              "Chorda_LV_Anterolateral_Posterior_01"
            ]
          },
          {
            "id": "mv-chordae-Anterolateral_Posterior_02",
            "name": "左室腱索段 · Anterolateral_Posterior_02",
            "meshes": [
              "Chorda_LV_Anterolateral_Posterior_02"
            ]
          },
          {
            "id": "mv-papillary-Posteromedial",
            "name": "左室乳头肌 · Posteromedial",
            "meshes": [
              "Papillary_LV_Posteromedial"
            ]
          },
          {
            "id": "mv-chordae-Posteromedial_Anterior_Stem",
            "name": "左室腱索段 · Posteromedial_Anterior_Stem",
            "meshes": [
              "Chorda_LV_Posteromedial_Anterior_Stem"
            ]
          },
          {
            "id": "mv-chordae-Posteromedial_Anterior_01",
            "name": "左室腱索段 · Posteromedial_Anterior_01",
            "meshes": [
              "Chorda_LV_Posteromedial_Anterior_01"
            ]
          },
          {
            "id": "mv-chordae-Posteromedial_Anterior_02",
            "name": "左室腱索段 · Posteromedial_Anterior_02",
            "meshes": [
              "Chorda_LV_Posteromedial_Anterior_02"
            ]
          },
          {
            "id": "mv-chordae-Posteromedial_Posterior_Stem",
            "name": "左室腱索段 · Posteromedial_Posterior_Stem",
            "meshes": [
              "Chorda_LV_Posteromedial_Posterior_Stem"
            ]
          },
          {
            "id": "mv-chordae-Posteromedial_Posterior_01",
            "name": "左室腱索段 · Posteromedial_Posterior_01",
            "meshes": [
              "Chorda_LV_Posteromedial_Posterior_01"
            ]
          },
          {
            "id": "mv-chordae-Posteromedial_Posterior_02",
            "name": "左室腱索段 · Posteromedial_Posterior_02",
            "meshes": [
              "Chorda_LV_Posteromedial_Posterior_02"
            ]
          },
          {
            "id": "tv-papillary-Anterior",
            "name": "右室乳头肌 · Anterior",
            "meshes": [
              "Papillary_RV_Anterior"
            ]
          },
          {
            "id": "tv-chordae-Anterior_Anterior_Stem",
            "name": "右室腱索段 · Anterior_Anterior_Stem",
            "meshes": [
              "Chorda_RV_Anterior_Anterior_Stem"
            ]
          },
          {
            "id": "tv-chordae-Anterior_Anterior_01",
            "name": "右室腱索段 · Anterior_Anterior_01",
            "meshes": [
              "Chorda_RV_Anterior_Anterior_01"
            ]
          },
          {
            "id": "tv-chordae-Anterior_Anterior_02",
            "name": "右室腱索段 · Anterior_Anterior_02",
            "meshes": [
              "Chorda_RV_Anterior_Anterior_02"
            ]
          },
          {
            "id": "tv-chordae-Anterior_Posterior_Stem",
            "name": "右室腱索段 · Anterior_Posterior_Stem",
            "meshes": [
              "Chorda_RV_Anterior_Posterior_Stem"
            ]
          },
          {
            "id": "tv-chordae-Anterior_Posterior_01",
            "name": "右室腱索段 · Anterior_Posterior_01",
            "meshes": [
              "Chorda_RV_Anterior_Posterior_01"
            ]
          },
          {
            "id": "tv-chordae-Anterior_Posterior_02",
            "name": "右室腱索段 · Anterior_Posterior_02",
            "meshes": [
              "Chorda_RV_Anterior_Posterior_02"
            ]
          },
          {
            "id": "tv-papillary-Posterior",
            "name": "右室乳头肌 · Posterior",
            "meshes": [
              "Papillary_RV_Posterior"
            ]
          },
          {
            "id": "tv-chordae-Posterior_Posterior_Stem",
            "name": "右室腱索段 · Posterior_Posterior_Stem",
            "meshes": [
              "Chorda_RV_Posterior_Posterior_Stem"
            ]
          },
          {
            "id": "tv-chordae-Posterior_Posterior_01",
            "name": "右室腱索段 · Posterior_Posterior_01",
            "meshes": [
              "Chorda_RV_Posterior_Posterior_01"
            ]
          },
          {
            "id": "tv-chordae-Posterior_Posterior_02",
            "name": "右室腱索段 · Posterior_Posterior_02",
            "meshes": [
              "Chorda_RV_Posterior_Posterior_02"
            ]
          },
          {
            "id": "tv-chordae-Posterior_Septal_Stem",
            "name": "右室腱索段 · Posterior_Septal_Stem",
            "meshes": [
              "Chorda_RV_Posterior_Septal_Stem"
            ]
          },
          {
            "id": "tv-chordae-Posterior_Septal_01",
            "name": "右室腱索段 · Posterior_Septal_01",
            "meshes": [
              "Chorda_RV_Posterior_Septal_01"
            ]
          },
          {
            "id": "tv-chordae-Posterior_Septal_02",
            "name": "右室腱索段 · Posterior_Septal_02",
            "meshes": [
              "Chorda_RV_Posterior_Septal_02"
            ]
          },
          {
            "id": "tv-papillary-Septal",
            "name": "右室乳头肌 · Septal",
            "meshes": [
              "Papillary_RV_Septal"
            ]
          },
          {
            "id": "tv-chordae-Septal_Septal_Stem",
            "name": "右室腱索段 · Septal_Septal_Stem",
            "meshes": [
              "Chorda_RV_Septal_Septal_Stem"
            ]
          },
          {
            "id": "tv-chordae-Septal_Septal_01",
            "name": "右室腱索段 · Septal_Septal_01",
            "meshes": [
              "Chorda_RV_Septal_Septal_01"
            ]
          },
          {
            "id": "tv-chordae-Septal_Septal_02",
            "name": "右室腱索段 · Septal_Septal_02",
            "meshes": [
              "Chorda_RV_Septal_Septal_02"
            ]
          },
          {
            "id": "tv-chordae-Septal_Anterior_Stem",
            "name": "右室腱索段 · Septal_Anterior_Stem",
            "meshes": [
              "Chorda_RV_Septal_Anterior_Stem"
            ]
          },
          {
            "id": "tv-chordae-Septal_Anterior_01",
            "name": "右室腱索段 · Septal_Anterior_01",
            "meshes": [
              "Chorda_RV_Septal_Anterior_01"
            ]
          },
          {
            "id": "tv-chordae-Septal_Anterior_02",
            "name": "右室腱索段 · Septal_Anterior_02",
            "meshes": [
              "Chorda_RV_Septal_Anterior_02"
            ]
          }
        ],
        "view": [
          1,
          0.05,
          0.4
        ],
        "cameraFrame": {
          "target": [
            0.02130616415,
            -0.008163528199999999,
            -0.0017123220500000012
          ],
          "width": 0.038313502765054325,
          "height": 0.057043261867817385
        }
      },
      "left-open": {
        "url": "./models/heart-av-support-r1/open-wall.glb",
        "parts": [
          {
            "id": "lv-wall",
            "name": "左心室开窗壁（支撑终点）",
            "meshes": [
              "LV_wall_open"
            ]
          },
          {
            "id": "rv-wall",
            "name": "右心室开窗壁（支撑终点）",
            "meshes": [
              "RV_wall_open"
            ]
          },
          {
            "id": "atria",
            "name": "心房壁",
            "materials": [
              "Atlas tissue • atrium",
              "Atlas tissue • inner",
              "Heart tissue / atrium",
              "Heart tissue / inner"
            ],
            "meshes": [
              "Atrial_Myocardium"
            ]
          },
          {
            "id": "auricles",
            "name": "双侧心耳",
            "materials": [
              "Atlas tissue • auricle",
              "Heart tissue / auricle"
            ],
            "meshes": [
              "Atrial_Myocardium"
            ]
          },
          {
            "id": "mv",
            "name": "二尖瓣（MV）",
            "meshes": [
              "Valve_MV"
            ]
          },
          {
            "id": "tv",
            "name": "三尖瓣（TV）",
            "meshes": [
              "Valve_TV"
            ]
          },
          {
            "id": "av",
            "name": "主动脉瓣（AV）",
            "meshes": [
              "Valve_AV"
            ]
          },
          {
            "id": "pv",
            "name": "肺动脉瓣（PV）",
            "meshes": [
              "Valve_PV"
            ]
          },
          {
            "id": "aorta",
            "name": "主动脉",
            "meshes": [
              "Aorta"
            ]
          },
          {
            "id": "pulmonary",
            "name": "肺动脉",
            "meshes": [
              "Pulmonary_tree"
            ]
          },
          {
            "id": "caval",
            "name": "上、下腔静脉",
            "meshes": [
              "SVC",
              "IVC"
            ]
          },
          {
            "id": "pulmonaryVeins",
            "name": "肺静脉",
            "meshes": [
              "LSPV",
              "LIPV",
              "RSPV",
              "RIPV"
            ]
          },
          {
            "id": "junctions",
            "name": "瓣口与静脉接合区",
            "meshes": [
              "Interface_IVC",
              "Interface_TV",
              "Interface_MV"
            ]
          },
          {
            "id": "arteries",
            "name": "冠状动脉",
            "meshes": [
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
              "A12_Posterior_wall_branch",
              "A00_Left_coronary_stem"
            ]
          },
          {
            "id": "veins",
            "name": "心静脉与冠状窦",
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
            "meshes": [
              "F01_Anterior_groove",
              "F02_Left_coronary_groove",
              "F03_Right_coronary_groove",
              "F04_Posterior_groove"
            ]
          },
          {
            "id": "mv-papillary-Anterolateral",
            "name": "左室乳头肌 · Anterolateral",
            "meshes": [
              "Papillary_LV_Anterolateral"
            ]
          },
          {
            "id": "mv-chordae-Anterolateral_Anterior_Stem",
            "name": "左室腱索段 · Anterolateral_Anterior_Stem",
            "meshes": [
              "Chorda_LV_Anterolateral_Anterior_Stem"
            ]
          },
          {
            "id": "mv-chordae-Anterolateral_Anterior_01",
            "name": "左室腱索段 · Anterolateral_Anterior_01",
            "meshes": [
              "Chorda_LV_Anterolateral_Anterior_01"
            ]
          },
          {
            "id": "mv-chordae-Anterolateral_Anterior_02",
            "name": "左室腱索段 · Anterolateral_Anterior_02",
            "meshes": [
              "Chorda_LV_Anterolateral_Anterior_02"
            ]
          },
          {
            "id": "mv-chordae-Anterolateral_Posterior_Stem",
            "name": "左室腱索段 · Anterolateral_Posterior_Stem",
            "meshes": [
              "Chorda_LV_Anterolateral_Posterior_Stem"
            ]
          },
          {
            "id": "mv-chordae-Anterolateral_Posterior_01",
            "name": "左室腱索段 · Anterolateral_Posterior_01",
            "meshes": [
              "Chorda_LV_Anterolateral_Posterior_01"
            ]
          },
          {
            "id": "mv-chordae-Anterolateral_Posterior_02",
            "name": "左室腱索段 · Anterolateral_Posterior_02",
            "meshes": [
              "Chorda_LV_Anterolateral_Posterior_02"
            ]
          },
          {
            "id": "mv-papillary-Posteromedial",
            "name": "左室乳头肌 · Posteromedial",
            "meshes": [
              "Papillary_LV_Posteromedial"
            ]
          },
          {
            "id": "mv-chordae-Posteromedial_Anterior_Stem",
            "name": "左室腱索段 · Posteromedial_Anterior_Stem",
            "meshes": [
              "Chorda_LV_Posteromedial_Anterior_Stem"
            ]
          },
          {
            "id": "mv-chordae-Posteromedial_Anterior_01",
            "name": "左室腱索段 · Posteromedial_Anterior_01",
            "meshes": [
              "Chorda_LV_Posteromedial_Anterior_01"
            ]
          },
          {
            "id": "mv-chordae-Posteromedial_Anterior_02",
            "name": "左室腱索段 · Posteromedial_Anterior_02",
            "meshes": [
              "Chorda_LV_Posteromedial_Anterior_02"
            ]
          },
          {
            "id": "mv-chordae-Posteromedial_Posterior_Stem",
            "name": "左室腱索段 · Posteromedial_Posterior_Stem",
            "meshes": [
              "Chorda_LV_Posteromedial_Posterior_Stem"
            ]
          },
          {
            "id": "mv-chordae-Posteromedial_Posterior_01",
            "name": "左室腱索段 · Posteromedial_Posterior_01",
            "meshes": [
              "Chorda_LV_Posteromedial_Posterior_01"
            ]
          },
          {
            "id": "mv-chordae-Posteromedial_Posterior_02",
            "name": "左室腱索段 · Posteromedial_Posterior_02",
            "meshes": [
              "Chorda_LV_Posteromedial_Posterior_02"
            ]
          },
          {
            "id": "tv-papillary-Anterior",
            "name": "右室乳头肌 · Anterior",
            "meshes": [
              "Papillary_RV_Anterior"
            ]
          },
          {
            "id": "tv-chordae-Anterior_Anterior_Stem",
            "name": "右室腱索段 · Anterior_Anterior_Stem",
            "meshes": [
              "Chorda_RV_Anterior_Anterior_Stem"
            ]
          },
          {
            "id": "tv-chordae-Anterior_Anterior_01",
            "name": "右室腱索段 · Anterior_Anterior_01",
            "meshes": [
              "Chorda_RV_Anterior_Anterior_01"
            ]
          },
          {
            "id": "tv-chordae-Anterior_Anterior_02",
            "name": "右室腱索段 · Anterior_Anterior_02",
            "meshes": [
              "Chorda_RV_Anterior_Anterior_02"
            ]
          },
          {
            "id": "tv-chordae-Anterior_Posterior_Stem",
            "name": "右室腱索段 · Anterior_Posterior_Stem",
            "meshes": [
              "Chorda_RV_Anterior_Posterior_Stem"
            ]
          },
          {
            "id": "tv-chordae-Anterior_Posterior_01",
            "name": "右室腱索段 · Anterior_Posterior_01",
            "meshes": [
              "Chorda_RV_Anterior_Posterior_01"
            ]
          },
          {
            "id": "tv-chordae-Anterior_Posterior_02",
            "name": "右室腱索段 · Anterior_Posterior_02",
            "meshes": [
              "Chorda_RV_Anterior_Posterior_02"
            ]
          },
          {
            "id": "tv-papillary-Posterior",
            "name": "右室乳头肌 · Posterior",
            "meshes": [
              "Papillary_RV_Posterior"
            ]
          },
          {
            "id": "tv-chordae-Posterior_Posterior_Stem",
            "name": "右室腱索段 · Posterior_Posterior_Stem",
            "meshes": [
              "Chorda_RV_Posterior_Posterior_Stem"
            ]
          },
          {
            "id": "tv-chordae-Posterior_Posterior_01",
            "name": "右室腱索段 · Posterior_Posterior_01",
            "meshes": [
              "Chorda_RV_Posterior_Posterior_01"
            ]
          },
          {
            "id": "tv-chordae-Posterior_Posterior_02",
            "name": "右室腱索段 · Posterior_Posterior_02",
            "meshes": [
              "Chorda_RV_Posterior_Posterior_02"
            ]
          },
          {
            "id": "tv-chordae-Posterior_Septal_Stem",
            "name": "右室腱索段 · Posterior_Septal_Stem",
            "meshes": [
              "Chorda_RV_Posterior_Septal_Stem"
            ]
          },
          {
            "id": "tv-chordae-Posterior_Septal_01",
            "name": "右室腱索段 · Posterior_Septal_01",
            "meshes": [
              "Chorda_RV_Posterior_Septal_01"
            ]
          },
          {
            "id": "tv-chordae-Posterior_Septal_02",
            "name": "右室腱索段 · Posterior_Septal_02",
            "meshes": [
              "Chorda_RV_Posterior_Septal_02"
            ]
          },
          {
            "id": "tv-papillary-Septal",
            "name": "右室乳头肌 · Septal",
            "meshes": [
              "Papillary_RV_Septal"
            ]
          },
          {
            "id": "tv-chordae-Septal_Septal_Stem",
            "name": "右室腱索段 · Septal_Septal_Stem",
            "meshes": [
              "Chorda_RV_Septal_Septal_Stem"
            ]
          },
          {
            "id": "tv-chordae-Septal_Septal_01",
            "name": "右室腱索段 · Septal_Septal_01",
            "meshes": [
              "Chorda_RV_Septal_Septal_01"
            ]
          },
          {
            "id": "tv-chordae-Septal_Septal_02",
            "name": "右室腱索段 · Septal_Septal_02",
            "meshes": [
              "Chorda_RV_Septal_Septal_02"
            ]
          },
          {
            "id": "tv-chordae-Septal_Anterior_Stem",
            "name": "右室腱索段 · Septal_Anterior_Stem",
            "meshes": [
              "Chorda_RV_Septal_Anterior_Stem"
            ]
          },
          {
            "id": "tv-chordae-Septal_Anterior_01",
            "name": "右室腱索段 · Septal_Anterior_01",
            "meshes": [
              "Chorda_RV_Septal_Anterior_01"
            ]
          },
          {
            "id": "tv-chordae-Septal_Anterior_02",
            "name": "右室腱索段 · Septal_Anterior_02",
            "meshes": [
              "Chorda_RV_Septal_Anterior_02"
            ]
          }
        ],
        "view": [
          1,
          0.05,
          0.4
        ],
        "cameraFrame": {
          "target": [
            0.02130616415,
            -0.008163528199999999,
            -0.0017123220500000012
          ],
          "width": 0.038313502765054325,
          "height": 0.057043261867817385
        }
      },
      "right-open": {
        "url": "./models/heart-av-support-r1/open-wall.glb",
        "parts": [
          {
            "id": "lv-wall",
            "name": "左心室开窗壁（支撑终点）",
            "meshes": [
              "LV_wall_open"
            ]
          },
          {
            "id": "rv-wall",
            "name": "右心室开窗壁（支撑终点）",
            "meshes": [
              "RV_wall_open"
            ]
          },
          {
            "id": "atria",
            "name": "心房壁",
            "materials": [
              "Atlas tissue • atrium",
              "Atlas tissue • inner",
              "Heart tissue / atrium",
              "Heart tissue / inner"
            ],
            "meshes": [
              "Atrial_Myocardium"
            ]
          },
          {
            "id": "auricles",
            "name": "双侧心耳",
            "materials": [
              "Atlas tissue • auricle",
              "Heart tissue / auricle"
            ],
            "meshes": [
              "Atrial_Myocardium"
            ]
          },
          {
            "id": "mv",
            "name": "二尖瓣（MV）",
            "meshes": [
              "Valve_MV"
            ]
          },
          {
            "id": "tv",
            "name": "三尖瓣（TV）",
            "meshes": [
              "Valve_TV"
            ]
          },
          {
            "id": "av",
            "name": "主动脉瓣（AV）",
            "meshes": [
              "Valve_AV"
            ]
          },
          {
            "id": "pv",
            "name": "肺动脉瓣（PV）",
            "meshes": [
              "Valve_PV"
            ]
          },
          {
            "id": "aorta",
            "name": "主动脉",
            "meshes": [
              "Aorta"
            ]
          },
          {
            "id": "pulmonary",
            "name": "肺动脉",
            "meshes": [
              "Pulmonary_tree"
            ]
          },
          {
            "id": "caval",
            "name": "上、下腔静脉",
            "meshes": [
              "SVC",
              "IVC"
            ]
          },
          {
            "id": "pulmonaryVeins",
            "name": "肺静脉",
            "meshes": [
              "LSPV",
              "LIPV",
              "RSPV",
              "RIPV"
            ]
          },
          {
            "id": "junctions",
            "name": "瓣口与静脉接合区",
            "meshes": [
              "Interface_IVC",
              "Interface_TV",
              "Interface_MV"
            ]
          },
          {
            "id": "arteries",
            "name": "冠状动脉",
            "meshes": [
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
              "A12_Posterior_wall_branch",
              "A00_Left_coronary_stem"
            ]
          },
          {
            "id": "veins",
            "name": "心静脉与冠状窦",
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
            "meshes": [
              "F01_Anterior_groove",
              "F02_Left_coronary_groove",
              "F03_Right_coronary_groove",
              "F04_Posterior_groove"
            ]
          },
          {
            "id": "mv-papillary-Anterolateral",
            "name": "左室乳头肌 · Anterolateral",
            "meshes": [
              "Papillary_LV_Anterolateral"
            ]
          },
          {
            "id": "mv-chordae-Anterolateral_Anterior_Stem",
            "name": "左室腱索段 · Anterolateral_Anterior_Stem",
            "meshes": [
              "Chorda_LV_Anterolateral_Anterior_Stem"
            ]
          },
          {
            "id": "mv-chordae-Anterolateral_Anterior_01",
            "name": "左室腱索段 · Anterolateral_Anterior_01",
            "meshes": [
              "Chorda_LV_Anterolateral_Anterior_01"
            ]
          },
          {
            "id": "mv-chordae-Anterolateral_Anterior_02",
            "name": "左室腱索段 · Anterolateral_Anterior_02",
            "meshes": [
              "Chorda_LV_Anterolateral_Anterior_02"
            ]
          },
          {
            "id": "mv-chordae-Anterolateral_Posterior_Stem",
            "name": "左室腱索段 · Anterolateral_Posterior_Stem",
            "meshes": [
              "Chorda_LV_Anterolateral_Posterior_Stem"
            ]
          },
          {
            "id": "mv-chordae-Anterolateral_Posterior_01",
            "name": "左室腱索段 · Anterolateral_Posterior_01",
            "meshes": [
              "Chorda_LV_Anterolateral_Posterior_01"
            ]
          },
          {
            "id": "mv-chordae-Anterolateral_Posterior_02",
            "name": "左室腱索段 · Anterolateral_Posterior_02",
            "meshes": [
              "Chorda_LV_Anterolateral_Posterior_02"
            ]
          },
          {
            "id": "mv-papillary-Posteromedial",
            "name": "左室乳头肌 · Posteromedial",
            "meshes": [
              "Papillary_LV_Posteromedial"
            ]
          },
          {
            "id": "mv-chordae-Posteromedial_Anterior_Stem",
            "name": "左室腱索段 · Posteromedial_Anterior_Stem",
            "meshes": [
              "Chorda_LV_Posteromedial_Anterior_Stem"
            ]
          },
          {
            "id": "mv-chordae-Posteromedial_Anterior_01",
            "name": "左室腱索段 · Posteromedial_Anterior_01",
            "meshes": [
              "Chorda_LV_Posteromedial_Anterior_01"
            ]
          },
          {
            "id": "mv-chordae-Posteromedial_Anterior_02",
            "name": "左室腱索段 · Posteromedial_Anterior_02",
            "meshes": [
              "Chorda_LV_Posteromedial_Anterior_02"
            ]
          },
          {
            "id": "mv-chordae-Posteromedial_Posterior_Stem",
            "name": "左室腱索段 · Posteromedial_Posterior_Stem",
            "meshes": [
              "Chorda_LV_Posteromedial_Posterior_Stem"
            ]
          },
          {
            "id": "mv-chordae-Posteromedial_Posterior_01",
            "name": "左室腱索段 · Posteromedial_Posterior_01",
            "meshes": [
              "Chorda_LV_Posteromedial_Posterior_01"
            ]
          },
          {
            "id": "mv-chordae-Posteromedial_Posterior_02",
            "name": "左室腱索段 · Posteromedial_Posterior_02",
            "meshes": [
              "Chorda_LV_Posteromedial_Posterior_02"
            ]
          },
          {
            "id": "tv-papillary-Anterior",
            "name": "右室乳头肌 · Anterior",
            "meshes": [
              "Papillary_RV_Anterior"
            ]
          },
          {
            "id": "tv-chordae-Anterior_Anterior_Stem",
            "name": "右室腱索段 · Anterior_Anterior_Stem",
            "meshes": [
              "Chorda_RV_Anterior_Anterior_Stem"
            ]
          },
          {
            "id": "tv-chordae-Anterior_Anterior_01",
            "name": "右室腱索段 · Anterior_Anterior_01",
            "meshes": [
              "Chorda_RV_Anterior_Anterior_01"
            ]
          },
          {
            "id": "tv-chordae-Anterior_Anterior_02",
            "name": "右室腱索段 · Anterior_Anterior_02",
            "meshes": [
              "Chorda_RV_Anterior_Anterior_02"
            ]
          },
          {
            "id": "tv-chordae-Anterior_Posterior_Stem",
            "name": "右室腱索段 · Anterior_Posterior_Stem",
            "meshes": [
              "Chorda_RV_Anterior_Posterior_Stem"
            ]
          },
          {
            "id": "tv-chordae-Anterior_Posterior_01",
            "name": "右室腱索段 · Anterior_Posterior_01",
            "meshes": [
              "Chorda_RV_Anterior_Posterior_01"
            ]
          },
          {
            "id": "tv-chordae-Anterior_Posterior_02",
            "name": "右室腱索段 · Anterior_Posterior_02",
            "meshes": [
              "Chorda_RV_Anterior_Posterior_02"
            ]
          },
          {
            "id": "tv-papillary-Posterior",
            "name": "右室乳头肌 · Posterior",
            "meshes": [
              "Papillary_RV_Posterior"
            ]
          },
          {
            "id": "tv-chordae-Posterior_Posterior_Stem",
            "name": "右室腱索段 · Posterior_Posterior_Stem",
            "meshes": [
              "Chorda_RV_Posterior_Posterior_Stem"
            ]
          },
          {
            "id": "tv-chordae-Posterior_Posterior_01",
            "name": "右室腱索段 · Posterior_Posterior_01",
            "meshes": [
              "Chorda_RV_Posterior_Posterior_01"
            ]
          },
          {
            "id": "tv-chordae-Posterior_Posterior_02",
            "name": "右室腱索段 · Posterior_Posterior_02",
            "meshes": [
              "Chorda_RV_Posterior_Posterior_02"
            ]
          },
          {
            "id": "tv-chordae-Posterior_Septal_Stem",
            "name": "右室腱索段 · Posterior_Septal_Stem",
            "meshes": [
              "Chorda_RV_Posterior_Septal_Stem"
            ]
          },
          {
            "id": "tv-chordae-Posterior_Septal_01",
            "name": "右室腱索段 · Posterior_Septal_01",
            "meshes": [
              "Chorda_RV_Posterior_Septal_01"
            ]
          },
          {
            "id": "tv-chordae-Posterior_Septal_02",
            "name": "右室腱索段 · Posterior_Septal_02",
            "meshes": [
              "Chorda_RV_Posterior_Septal_02"
            ]
          },
          {
            "id": "tv-papillary-Septal",
            "name": "右室乳头肌 · Septal",
            "meshes": [
              "Papillary_RV_Septal"
            ]
          },
          {
            "id": "tv-chordae-Septal_Septal_Stem",
            "name": "右室腱索段 · Septal_Septal_Stem",
            "meshes": [
              "Chorda_RV_Septal_Septal_Stem"
            ]
          },
          {
            "id": "tv-chordae-Septal_Septal_01",
            "name": "右室腱索段 · Septal_Septal_01",
            "meshes": [
              "Chorda_RV_Septal_Septal_01"
            ]
          },
          {
            "id": "tv-chordae-Septal_Septal_02",
            "name": "右室腱索段 · Septal_Septal_02",
            "meshes": [
              "Chorda_RV_Septal_Septal_02"
            ]
          },
          {
            "id": "tv-chordae-Septal_Anterior_Stem",
            "name": "右室腱索段 · Septal_Anterior_Stem",
            "meshes": [
              "Chorda_RV_Septal_Anterior_Stem"
            ]
          },
          {
            "id": "tv-chordae-Septal_Anterior_01",
            "name": "右室腱索段 · Septal_Anterior_01",
            "meshes": [
              "Chorda_RV_Septal_Anterior_01"
            ]
          },
          {
            "id": "tv-chordae-Septal_Anterior_02",
            "name": "右室腱索段 · Septal_Anterior_02",
            "meshes": [
              "Chorda_RV_Septal_Anterior_02"
            ]
          }
        ],
        "view": [
          -0.4,
          0.1,
          1
        ],
        "cameraFrame": {
          "target": [
            -0.0226713462,
            -0.0087286077,
            0.007481346349999999
          ],
          "width": 0.03190393983872179,
          "height": 0.0508362687005168
        }
      }
    }
  },
  {
    "id": "lungs",
    "name": "双肺",
    "latin": "Pulmones",
    "system": "呼吸系统",
    "version": "肺叶、肺底与肺门",
    "url": "./models/lungs/whole.glb",
    "thumbnail": "./media/lungs.png",
    "status": "教学展示",
    "note": "肺叶、气道、动静脉、剖面与材质均来自本次程序生成。旋转或切换局部剥开视图观察前后层次。",
    "view": [
      0,
      0,
      1
    ],
    "interior": {
      "label": "显露气道与血管",
      "asset": "interior"
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
        "version": "从空场景构建的双肺",
        "note": "可逐叶隐藏，观察本件的左右肺底和叶裂。"
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
        "version": "从空场景构建的双肺",
        "note": "可逐叶隐藏，观察本件的左右肺底和叶裂。"
      },
      "medial-base": {
        "url": "./models/lungs/whole.glb",
        "view": [
          0.3303,
          -0.0923,
          0.9394
        ],
        "version": "从空场景构建的双肺",
        "note": "可逐叶隐藏，观察本件的左右肺底和叶裂。"
      },
      "dissection": {
        "url": "./models/lungs/dissection.glb",
        "version": "本件右肺局部剥开",
        "view": [
          -0.099228,
          0.074421,
          0.992278
        ],
        "note": "从窗缘看右上叶前段和右下叶上段的气道，以及它们后方深浅不同的肺组织。",
        "parts": [
          {
            "id": "rightUpper",
            "name": "右肺上叶",
            "color": "#bf8784",
            "meshes": [
              "RUL",
              "dissection RUL",
              "dissection_RUL"
            ]
          },
          {
            "id": "rightMiddle",
            "name": "右肺中叶",
            "color": "#bf8784",
            "meshes": [
              "RML",
              "dissection RML",
              "dissection_RML"
            ]
          },
          {
            "id": "rightLower",
            "name": "右肺下叶",
            "color": "#bf8784",
            "meshes": [
              "RLL",
              "dissection RLL",
              "dissection_RLL"
            ]
          },
          {
            "id": "leftUpper",
            "name": "左肺上叶",
            "color": "#bf8784",
            "meshes": [
              "LUL",
              "dissection LUL",
              "dissection_LUL"
            ]
          },
          {
            "id": "leftLower",
            "name": "左肺下叶",
            "color": "#bf8784",
            "meshes": [
              "LLL",
              "dissection LLL",
              "dissection_LLL"
            ]
          },
          {
            "id": "airway",
            "name": "气管与支气管树",
            "color": "#d8b49b",
            "meshes": [
              "Airway_Tree",
              "dissection Airway_Tree",
              "dissection_Airway_Tree"
            ]
          },
          {
            "id": "cartilage",
            "name": "气管软骨",
            "color": "#dfcdc0",
            "meshes": [
              "Tracheal_Cartilage",
              "dissection Tracheal_Cartilage",
              "dissection_Tracheal_Cartilage"
            ]
          },
          {
            "id": "arteries",
            "name": "肺动脉",
            "color": "#627e9d",
            "meshes": [
              "Pulmonary_Arteries",
              "dissection Pulmonary_Arteries",
              "dissection_Pulmonary_Arteries"
            ]
          },
          {
            "id": "rightSuperiorVein",
            "name": "右上肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_R_Superior",
              "dissection Pulmonary_Vein_R_Superior",
              "dissection_Pulmonary_Vein_R_Superior"
            ]
          },
          {
            "id": "rightInferiorVein",
            "name": "右下肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_R_Inferior",
              "dissection Pulmonary_Vein_R_Inferior",
              "dissection_Pulmonary_Vein_R_Inferior"
            ]
          },
          {
            "id": "leftSuperiorVein",
            "name": "左上肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_L_Superior",
              "dissection Pulmonary_Vein_L_Superior",
              "dissection_Pulmonary_Vein_L_Superior"
            ]
          },
          {
            "id": "leftInferiorVein",
            "name": "左下肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_L_Inferior",
              "dissection Pulmonary_Vein_L_Inferior",
              "dissection_Pulmonary_Vein_L_Inferior"
            ]
          }
        ]
      },
      "dissection-oblique": {
        "url": "./models/lungs/dissection.glb",
        "version": "本件右肺局部剥开",
        "view": [
          -0.255567,
          0.374607,
          0.891266
        ],
        "note": "从窗缘看右上叶前段和右下叶上段的气道，以及它们后方深浅不同的肺组织。",
        "parts": [
          {
            "id": "rightUpper",
            "name": "右肺上叶",
            "color": "#bf8784",
            "meshes": [
              "RUL",
              "dissection RUL",
              "dissection_RUL"
            ]
          },
          {
            "id": "rightMiddle",
            "name": "右肺中叶",
            "color": "#bf8784",
            "meshes": [
              "RML",
              "dissection RML",
              "dissection_RML"
            ]
          },
          {
            "id": "rightLower",
            "name": "右肺下叶",
            "color": "#bf8784",
            "meshes": [
              "RLL",
              "dissection RLL",
              "dissection_RLL"
            ]
          },
          {
            "id": "leftUpper",
            "name": "左肺上叶",
            "color": "#bf8784",
            "meshes": [
              "LUL",
              "dissection LUL",
              "dissection_LUL"
            ]
          },
          {
            "id": "leftLower",
            "name": "左肺下叶",
            "color": "#bf8784",
            "meshes": [
              "LLL",
              "dissection LLL",
              "dissection_LLL"
            ]
          },
          {
            "id": "airway",
            "name": "气管与支气管树",
            "color": "#d8b49b",
            "meshes": [
              "Airway_Tree",
              "dissection Airway_Tree",
              "dissection_Airway_Tree"
            ]
          },
          {
            "id": "cartilage",
            "name": "气管软骨",
            "color": "#dfcdc0",
            "meshes": [
              "Tracheal_Cartilage",
              "dissection Tracheal_Cartilage",
              "dissection_Tracheal_Cartilage"
            ]
          },
          {
            "id": "arteries",
            "name": "肺动脉",
            "color": "#627e9d",
            "meshes": [
              "Pulmonary_Arteries",
              "dissection Pulmonary_Arteries",
              "dissection_Pulmonary_Arteries"
            ]
          },
          {
            "id": "rightSuperiorVein",
            "name": "右上肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_R_Superior",
              "dissection Pulmonary_Vein_R_Superior",
              "dissection_Pulmonary_Vein_R_Superior"
            ]
          },
          {
            "id": "rightInferiorVein",
            "name": "右下肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_R_Inferior",
              "dissection Pulmonary_Vein_R_Inferior",
              "dissection_Pulmonary_Vein_R_Inferior"
            ]
          },
          {
            "id": "leftSuperiorVein",
            "name": "左上肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_L_Superior",
              "dissection Pulmonary_Vein_L_Superior",
              "dissection_Pulmonary_Vein_L_Superior"
            ]
          },
          {
            "id": "leftInferiorVein",
            "name": "左下肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_L_Inferior",
              "dissection Pulmonary_Vein_L_Inferior",
              "dissection_Pulmonary_Vein_L_Inferior"
            ]
          }
        ]
      },
      "hilum": {
        "url": "./models/lungs/hilum.glb",
        "version": "本件肺门",
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
        "note": "自两侧斜看肺门中的气道、肺动脉及肺静脉。",
        "parts": [
          {
            "id": "rightUpper",
            "name": "右肺上叶",
            "color": "#bf8784",
            "meshes": [
              "RUL",
              "hilum RUL",
              "hilum_RUL"
            ]
          },
          {
            "id": "rightMiddle",
            "name": "右肺中叶",
            "color": "#bf8784",
            "meshes": [
              "RML",
              "hilum RML",
              "hilum_RML"
            ]
          },
          {
            "id": "rightLower",
            "name": "右肺下叶",
            "color": "#bf8784",
            "meshes": [
              "RLL",
              "hilum RLL",
              "hilum_RLL"
            ]
          },
          {
            "id": "leftUpper",
            "name": "左肺上叶",
            "color": "#bf8784",
            "meshes": [
              "LUL",
              "hilum LUL",
              "hilum_LUL"
            ]
          },
          {
            "id": "leftLower",
            "name": "左肺下叶",
            "color": "#bf8784",
            "meshes": [
              "LLL",
              "hilum LLL",
              "hilum_LLL"
            ]
          },
          {
            "id": "airway",
            "name": "气管与支气管树",
            "color": "#d8b49b",
            "meshes": [
              "Airway_Tree",
              "hilum Airway_Tree",
              "hilum_Airway_Tree"
            ]
          },
          {
            "id": "cartilage",
            "name": "气管软骨",
            "color": "#dfcdc0",
            "meshes": [
              "Tracheal_Cartilage",
              "hilum Tracheal_Cartilage",
              "hilum_Tracheal_Cartilage"
            ]
          },
          {
            "id": "arteries",
            "name": "肺动脉",
            "color": "#627e9d",
            "meshes": [
              "Pulmonary_Arteries",
              "hilum Pulmonary_Arteries",
              "hilum_Pulmonary_Arteries"
            ]
          },
          {
            "id": "rightSuperiorVein",
            "name": "右上肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_R_Superior",
              "hilum Pulmonary_Vein_R_Superior",
              "hilum_Pulmonary_Vein_R_Superior"
            ]
          },
          {
            "id": "rightInferiorVein",
            "name": "右下肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_R_Inferior",
              "hilum Pulmonary_Vein_R_Inferior",
              "hilum_Pulmonary_Vein_R_Inferior"
            ]
          },
          {
            "id": "leftSuperiorVein",
            "name": "左上肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_L_Superior",
              "hilum Pulmonary_Vein_L_Superior",
              "hilum_Pulmonary_Vein_L_Superior"
            ]
          },
          {
            "id": "leftInferiorVein",
            "name": "左下肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_L_Inferior",
              "hilum Pulmonary_Vein_L_Inferior",
              "hilum_Pulmonary_Vein_L_Inferior"
            ]
          }
        ]
      },
      "hilum-opposite": {
        "url": "./models/lungs/hilum.glb",
        "version": "本件肺门",
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
        "note": "自两侧斜看肺门中的气道、肺动脉及肺静脉。",
        "parts": [
          {
            "id": "rightUpper",
            "name": "右肺上叶",
            "color": "#bf8784",
            "meshes": [
              "RUL",
              "hilum RUL",
              "hilum_RUL"
            ]
          },
          {
            "id": "rightMiddle",
            "name": "右肺中叶",
            "color": "#bf8784",
            "meshes": [
              "RML",
              "hilum RML",
              "hilum_RML"
            ]
          },
          {
            "id": "rightLower",
            "name": "右肺下叶",
            "color": "#bf8784",
            "meshes": [
              "RLL",
              "hilum RLL",
              "hilum_RLL"
            ]
          },
          {
            "id": "leftUpper",
            "name": "左肺上叶",
            "color": "#bf8784",
            "meshes": [
              "LUL",
              "hilum LUL",
              "hilum_LUL"
            ]
          },
          {
            "id": "leftLower",
            "name": "左肺下叶",
            "color": "#bf8784",
            "meshes": [
              "LLL",
              "hilum LLL",
              "hilum_LLL"
            ]
          },
          {
            "id": "airway",
            "name": "气管与支气管树",
            "color": "#d8b49b",
            "meshes": [
              "Airway_Tree",
              "hilum Airway_Tree",
              "hilum_Airway_Tree"
            ]
          },
          {
            "id": "cartilage",
            "name": "气管软骨",
            "color": "#dfcdc0",
            "meshes": [
              "Tracheal_Cartilage",
              "hilum Tracheal_Cartilage",
              "hilum_Tracheal_Cartilage"
            ]
          },
          {
            "id": "arteries",
            "name": "肺动脉",
            "color": "#627e9d",
            "meshes": [
              "Pulmonary_Arteries",
              "hilum Pulmonary_Arteries",
              "hilum_Pulmonary_Arteries"
            ]
          },
          {
            "id": "rightSuperiorVein",
            "name": "右上肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_R_Superior",
              "hilum Pulmonary_Vein_R_Superior",
              "hilum_Pulmonary_Vein_R_Superior"
            ]
          },
          {
            "id": "rightInferiorVein",
            "name": "右下肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_R_Inferior",
              "hilum Pulmonary_Vein_R_Inferior",
              "hilum_Pulmonary_Vein_R_Inferior"
            ]
          },
          {
            "id": "leftSuperiorVein",
            "name": "左上肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_L_Superior",
              "hilum Pulmonary_Vein_L_Superior",
              "hilum_Pulmonary_Vein_L_Superior"
            ]
          },
          {
            "id": "leftInferiorVein",
            "name": "左下肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_L_Inferior",
              "hilum Pulmonary_Vein_L_Inferior",
              "hilum_Pulmonary_Vein_L_Inferior"
            ]
          }
        ]
      },
      "right-fissure": {
        "version": "从空场景构建的双肺",
        "url": "./models/lungs/whole.glb",
        "view": [
          -0.9063078,
          0,
          0.4226183
        ],
        "note": "可逐叶隐藏，观察本件的左右肺底和叶裂。"
      },
      "section": {
        "version": "本件实体冠状剖面",
        "status": "教学展示",
        "url": "./models/lungs/section.glb",
        "note": "切去双肺前部后，粉色区域是暴露的肺实质。浅色、蓝色和红色的管壁分别属于气道、肺动脉和肺静脉。旋转可看剩余肺叶，每个图层同时控制该部位的表面和切面。",
        "parts": [
          {
            "id": "rightUpper",
            "name": "右肺上叶",
            "color": "#bf8784",
            "meshes": [
              "RUL",
              "section RUL",
              "section_RUL"
            ]
          },
          {
            "id": "rightMiddle",
            "name": "右肺中叶",
            "color": "#bf8784",
            "meshes": [
              "RML",
              "section RML",
              "section_RML"
            ]
          },
          {
            "id": "rightLower",
            "name": "右肺下叶",
            "color": "#bf8784",
            "meshes": [
              "RLL",
              "section RLL",
              "section_RLL"
            ]
          },
          {
            "id": "leftUpper",
            "name": "左肺上叶",
            "color": "#bf8784",
            "meshes": [
              "LUL",
              "section LUL",
              "section_LUL"
            ]
          },
          {
            "id": "leftLower",
            "name": "左肺下叶",
            "color": "#bf8784",
            "meshes": [
              "LLL",
              "section LLL",
              "section_LLL"
            ]
          },
          {
            "id": "airway",
            "name": "气管与支气管树",
            "color": "#d8b49b",
            "meshes": [
              "Airway_Tree",
              "section Airway_Tree",
              "section_Airway_Tree"
            ]
          },
          {
            "id": "cartilage",
            "name": "气管软骨",
            "color": "#dfcdc0",
            "meshes": [
              "Tracheal_Cartilage",
              "section Tracheal_Cartilage",
              "section_Tracheal_Cartilage"
            ]
          },
          {
            "id": "arteries",
            "name": "肺动脉",
            "color": "#627e9d",
            "meshes": [
              "Pulmonary_Arteries",
              "section Pulmonary_Arteries",
              "section_Pulmonary_Arteries"
            ]
          },
          {
            "id": "rightSuperiorVein",
            "name": "右上肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_R_Superior",
              "section Pulmonary_Vein_R_Superior",
              "section_Pulmonary_Vein_R_Superior"
            ]
          },
          {
            "id": "rightInferiorVein",
            "name": "右下肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_R_Inferior",
              "section Pulmonary_Vein_R_Inferior",
              "section_Pulmonary_Vein_R_Inferior"
            ]
          },
          {
            "id": "leftSuperiorVein",
            "name": "左上肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_L_Superior",
              "section Pulmonary_Vein_L_Superior",
              "section_Pulmonary_Vein_L_Superior"
            ]
          },
          {
            "id": "leftInferiorVein",
            "name": "左下肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_L_Inferior",
              "section Pulmonary_Vein_L_Inferior",
              "section_Pulmonary_Vein_L_Inferior"
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
        "note": "从内侧看左肺两叶，再显示气道与右肺，可追踪五条叶支气管及其入口。肺血管通路另需核实。",
        "parts": [
          {
            "id": "rightUpper",
            "name": "右肺上叶",
            "color": "#bf8784",
            "meshes": [
              "RUL",
              "airway-recess RUL",
              "airway-recess_RUL"
            ]
          },
          {
            "id": "rightMiddle",
            "name": "右肺中叶",
            "color": "#bf8784",
            "meshes": [
              "RML",
              "airway-recess RML",
              "airway-recess_RML"
            ]
          },
          {
            "id": "rightLower",
            "name": "右肺下叶",
            "color": "#bf8784",
            "meshes": [
              "RLL",
              "airway-recess RLL",
              "airway-recess_RLL"
            ]
          },
          {
            "id": "leftUpper",
            "name": "左肺上叶",
            "color": "#bf8784",
            "meshes": [
              "LUL",
              "airway-recess LUL",
              "airway-recess_LUL"
            ]
          },
          {
            "id": "leftLower",
            "name": "左肺下叶",
            "color": "#bf8784",
            "meshes": [
              "LLL",
              "airway-recess LLL",
              "airway-recess_LLL"
            ]
          },
          {
            "id": "airway",
            "name": "气管与支气管树",
            "color": "#d8b49b",
            "meshes": [
              "Airway_Tree",
              "airway-recess Airway_Tree",
              "airway-recess_Airway_Tree"
            ]
          },
          {
            "id": "cartilage",
            "name": "气管软骨",
            "color": "#dfcdc0",
            "meshes": [
              "Tracheal_Cartilage",
              "airway-recess Tracheal_Cartilage",
              "airway-recess_Tracheal_Cartilage"
            ]
          },
          {
            "id": "arteries",
            "name": "肺动脉",
            "color": "#627e9d",
            "meshes": [
              "Pulmonary_Arteries",
              "airway-recess Pulmonary_Arteries",
              "airway-recess_Pulmonary_Arteries"
            ]
          },
          {
            "id": "rightSuperiorVein",
            "name": "右上肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_R_Superior",
              "airway-recess Pulmonary_Vein_R_Superior",
              "airway-recess_Pulmonary_Vein_R_Superior"
            ]
          },
          {
            "id": "rightInferiorVein",
            "name": "右下肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_R_Inferior",
              "airway-recess Pulmonary_Vein_R_Inferior",
              "airway-recess_Pulmonary_Vein_R_Inferior"
            ]
          },
          {
            "id": "leftSuperiorVein",
            "name": "左上肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_L_Superior",
              "airway-recess Pulmonary_Vein_L_Superior",
              "airway-recess_Pulmonary_Vein_L_Superior"
            ]
          },
          {
            "id": "leftInferiorVein",
            "name": "左下肺静脉",
            "color": "#af625d",
            "meshes": [
              "Pulmonary_Vein_L_Inferior",
              "airway-recess Pulmonary_Vein_L_Inferior",
              "airway-recess_Pulmonary_Vein_L_Inferior"
            ]
          }
        ]
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
      },
      "interior": {
        "url": "./models/lungs/interior.glb",
        "parts": [
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
        ],
        "note": "完整移去五叶肺实质，观察支气管、肺动脉与四支肺静脉的相对走向。"
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
    "thumbnail": "./media/liver.png",
    "status": "教学展示",
    "note": "隐藏肝实质可追踪四系管网，选择「只看肝实质孔口」可观察肝门孔口及下腔静脉沟。管段为封端实体。",
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
    "thumbnail": "./media/stomach.jpg",
    "status": "教学展示",
    "note": "打开胃前壁可观察后壁的黏膜皱襞。幽门前的胃窦逐渐收窄，出口朝向仍待核实。",
    "view": [
      0,
      0,
      1
    ],
    "interior": {
      "label": "打开胃前壁",
      "asset": "opened"
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
    ],
    "isolatedViews": [
      {
        "key": "white",
        "label": "仅看白模外形",
        "asset": "white"
      }
    ],
    "assets": {
      "opened": {
        "url": "./models/stomach/opened.glb",
        "parts": [
          {
            "id": "backOuter",
            "name": "后壁浆膜面",
            "color": "#c38579",
            "materials": [
              "Gastric serosa posterior"
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
          },
          {
            "id": "cut",
            "name": "胃壁纵向切缘",
            "color": "#d09485",
            "materials": [
              "Gastric wall section"
            ]
          }
        ]
      },
      "white": {
        "url": "./models/stomach/white.glb",
        "parts": [
          {
            "id": "frontOuter",
            "name": "前壁浆膜面",
            "color": "#c38579",
            "materials": [
              "Stomach white outer front"
            ]
          },
          {
            "id": "backOuter",
            "name": "后壁浆膜面",
            "color": "#c38579",
            "materials": [
              "Stomach white outer back"
            ]
          },
          {
            "id": "frontInner",
            "name": "前壁黏膜面",
            "color": "#ab5751",
            "materials": [
              "Stomach white inner front"
            ]
          },
          {
            "id": "backInner",
            "name": "后壁黏膜面",
            "color": "#ab5751",
            "materials": [
              "Stomach white inner back"
            ]
          },
          {
            "id": "inlet",
            "name": "食管端口缘",
            "color": "#d39c8d",
            "materials": [
              "Stomach white inlet"
            ]
          },
          {
            "id": "outlet",
            "name": "十二指肠端口缘",
            "color": "#daa289",
            "materials": [
              "Stomach white outlet"
            ]
          }
        ]
      }
    }
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
        "color": "#bc8279",
        "materials": [
          "Cervical outer",
          "Cervical mucosa"
        ]
      },
      {
        "id": "thorax",
        "name": "胸段食管",
        "color": "#bb8178",
        "materials": [
          "Thoracic outer",
          "Thoracic mucosa"
        ]
      },
      {
        "id": "abdomen",
        "name": "腹段食管",
        "color": "#c88a7a",
        "materials": [
          "Abdominal outer",
          "Abdominal mucosa"
        ]
      },
      {
        "id": "rim",
        "name": "管壁断缘",
        "color": "#ce9f84",
        "materials": [
          "Exposed cut edge"
        ]
      }
    ],
    "note": "上端为咽食管交界，下端止于贲门。旋转可见胸段向后弯、末段向前转。",
    "interior": {
      "label": "打开前壁",
      "asset": "opened"
    },
    "isolatedViews": [
      {
        "key": "isolated",
        "label": "右侧面",
        "asset": "isolated"
      },
      {
        "key": "chest",
        "label": "胸中压迹",
        "asset": "chest"
      },
      {
        "key": "previousAssembly",
        "label": "旧版胃食管总装",
        "asset": "previousAssembly"
      },
      {
        "key": "previousSection",
        "label": "旧版贲门纵剖",
        "asset": "previousSection"
      },
      {
        "key": "previousIsolated",
        "label": "旧版食管对照",
        "asset": "previousIsolated"
      }
    ],
    "assets": {
      "isolated": {
        "url": "./models/esophagus/whole.glb",
        "view": [
          -1,
          0,
          0
        ],
        "parts": [
          {
            "id": "neck",
            "name": "颈段食管",
            "color": "#bc8279",
            "materials": [
              "Cervical outer",
              "Cervical mucosa"
            ]
          },
          {
            "id": "thorax",
            "name": "胸段食管",
            "color": "#bb8178",
            "materials": [
              "Thoracic outer",
              "Thoracic mucosa"
            ]
          },
          {
            "id": "abdomen",
            "name": "腹段食管",
            "color": "#c88a7a",
            "materials": [
              "Abdominal outer",
              "Abdominal mucosa"
            ]
          },
          {
            "id": "rim",
            "name": "管壁断缘",
            "color": "#ce9f84",
            "materials": [
              "Exposed cut edge"
            ]
          }
        ],
        "note": "人体右侧观，图右为前方。"
      },
      "chest": {
        "url": "./models/esophagus/whole.glb",
        "view": [
          -1,
          0,
          0
        ],
        "parts": [
          {
            "id": "neck",
            "name": "颈段食管",
            "color": "#bc8279",
            "materials": [
              "Cervical outer",
              "Cervical mucosa"
            ]
          },
          {
            "id": "thorax",
            "name": "胸段食管",
            "color": "#bb8178",
            "materials": [
              "Thoracic outer",
              "Thoracic mucosa"
            ]
          },
          {
            "id": "abdomen",
            "name": "腹段食管",
            "color": "#c88a7a",
            "materials": [
              "Abdominal outer",
              "Abdominal mucosa"
            ]
          },
          {
            "id": "rim",
            "name": "管壁断缘",
            "color": "#ce9f84",
            "materials": [
              "Exposed cut edge"
            ]
          }
        ],
        "cameraFrame": {
          "target": [
            -0.022737208,
            0.134767909,
            -0.021070048
          ],
          "width": 0.05,
          "height": 0.07
        },
        "note": "人体右侧局部，图右为前方。由前缘浅凹向上下追踪轮廓。"
      },
      "opened": {
        "url": "./models/esophagus/opened.glb",
        "view": [
          0,
          0,
          1
        ],
        "parts": [
          {
            "id": "neck",
            "name": "颈段食管",
            "color": "#bc8279",
            "materials": [
              "Cervical outer",
              "Cervical mucosa"
            ]
          },
          {
            "id": "thorax",
            "name": "胸段食管",
            "color": "#bb8178",
            "materials": [
              "Thoracic outer",
              "Thoracic mucosa"
            ]
          },
          {
            "id": "abdomen",
            "name": "腹段食管",
            "color": "#c88a7a",
            "materials": [
              "Abdominal outer",
              "Abdominal mucosa"
            ]
          },
          {
            "id": "rim",
            "name": "管壁断缘",
            "color": "#ce9f84",
            "materials": [
              "Exposed cut edge"
            ]
          }
        ],
        "note": "后半壁及两侧断缘可见，管腔从上口延续至贲门端。"
      },
      "previousAssembly": {
        "url": "./models/esophagus/previous-assembly.glb",
        "parts": [
          {
            "id": "neck",
            "name": "颈段食管",
            "color": "#bc8279",
            "materials": [
              "Cervical outer",
              "Cervical mucosa"
            ]
          },
          {
            "id": "thorax",
            "name": "胸段食管",
            "color": "#bb8178",
            "materials": [
              "Thoracic outer",
              "Thoracic mucosa"
            ]
          },
          {
            "id": "abdomen",
            "name": "腹段食管",
            "color": "#c88a7a",
            "materials": [
              "Abdominal outer",
              "Abdominal mucosa"
            ]
          },
          {
            "id": "rim",
            "name": "管壁断缘",
            "color": "#ce9f84",
            "materials": [
              "Exposed cut edge"
            ]
          },
          {
            "id": "stomach",
            "name": "胃和十二指肠短段",
            "color": "#c68b79",
            "materials": [
              "Gastric serosa",
              "Gastric mucosa",
              "Duodenal outer",
              "Duodenal mucosa"
            ]
          }
        ],
        "note": "此历史总装可同时查看食管、胃和十二指肠短段。"
      },
      "previousSection": {
        "url": "./models/esophagus/previous-section.glb",
        "parts": [
          {
            "id": "neck",
            "name": "颈段食管",
            "color": "#bc8279",
            "materials": [
              "Cervical outer",
              "Cervical mucosa"
            ]
          },
          {
            "id": "thorax",
            "name": "胸段食管",
            "color": "#bb8178",
            "materials": [
              "Thoracic outer",
              "Thoracic mucosa"
            ]
          },
          {
            "id": "abdomen",
            "name": "腹段食管",
            "color": "#c88a7a",
            "materials": [
              "Abdominal outer",
              "Abdominal mucosa"
            ]
          },
          {
            "id": "rim",
            "name": "管壁断缘",
            "color": "#ce9f84",
            "materials": [
              "Exposed cut edge"
            ]
          },
          {
            "id": "stomach",
            "name": "胃和十二指肠短段",
            "color": "#c68b79",
            "materials": [
              "Gastric serosa",
              "Gastric mucosa",
              "Duodenal outer",
              "Duodenal mucosa"
            ]
          }
        ],
        "note": "此历史总装沿前壁切开，可查看胃壁皱襞及贲门连接。"
      },
      "previousIsolated": {
        "url": "./models/esophagus/previous-isolated.glb",
        "parts": [
          {
            "id": "neck",
            "name": "颈段食管",
            "color": "#bc8279",
            "materials": [
              "Cervical outer",
              "Cervical mucosa"
            ]
          },
          {
            "id": "thorax",
            "name": "胸段食管",
            "color": "#bb8178",
            "materials": [
              "Thoracic outer",
              "Thoracic mucosa"
            ]
          },
          {
            "id": "abdomen",
            "name": "腹段食管",
            "color": "#c88a7a",
            "materials": [
              "Abdominal outer",
              "Abdominal mucosa"
            ]
          },
          {
            "id": "rim",
            "name": "管壁断缘",
            "color": "#ce9f84",
            "materials": [
              "Exposed cut edge"
            ]
          }
        ],
        "note": "从历史胃食管总装中隔离的食管，可与本次独立生成的食管对照。"
      }
    }
  },
  {
    "id": "intestines",
    "name": "大小肠",
    "latin": "Intestinum tenue et crassum",
    "system": "消化系统",
    "version": "胃、小肠和大肠",
    "status": "教学展示",
    "url": "./models/intestines/whole.glb",
    "thumbnail": "./media/intestines.png",
    "coordinateSpace": "blender-gltf",
    "view": [
      0,
      0,
      1
    ],
    "note": "从正面沿外围看结肠，转到斜侧观察前后层的肠袢。下腹前排的几段横弯仍较长、较平。",
    "parts": [
      {
        "id": "proximal",
        "name": "十二指肠近端短段",
        "color": "#c68679",
        "meshes": [
          "Proximal duodenum"
        ]
      },
      {
        "id": "duodenum",
        "name": "其余十二指肠",
        "color": "#c68679",
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
        ],
        "note": "正面观察时，从图左的盲肠沿升结肠上行，经过横结肠，再沿图右的降结肠下行。"
      },
      {
        "key": "mobile",
        "label": "空肠与回肠",
        "only": [
          "jejunum",
          "ileum"
        ],
        "note": "空、回肠是一根连续肠管。当前走行展示一种可能的成人排布。"
      },
      {
        "key": "inlet",
        "label": "十二指肠",
        "only": [
          "proximal",
          "duodenum"
        ],
        "note": "近端从幽门后起始，远端在十二指肠空肠曲与空肠相续。"
      },
      {
        "key": "assembly",
        "label": "胃件组装接口",
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
        ],
        "note": "此视图从 24 毫米球部短段的下游开始。另行生成的胃件如已含同规格球部，可接在此处。胃件若止于幽门，使用整件的近端开口。"
      },
      {
        "key": "ileocaecal",
        "label": "盲肠内壁",
        "asset": "ileocaecal"
      },
      {
        "key": "gastroduodenal",
        "label": "旧版胃肠组装对照",
        "asset": "previousAssembly",
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
        "cameraFrame": {
          "target": [
            -0.148,
            -0.294,
            -0.003
          ],
          "width": 0.137,
          "height": 0.137
        },
        "note": "切开前外侧壁后，可见内侧壁有两个开口。较大的接末端回肠，下方小口通阑尾。",
        "parts": [
          {
            "id": "outside",
            "name": "外壁与末端回肠",
            "materials": [
              "Colonic serosa",
              "Ileum serosa",
              "Appendix serosa"
            ]
          },
          {
            "id": "inside",
            "name": "腔面",
            "materials": [
              "Intestinal mucosa"
            ]
          }
        ]
      },
      "previousAssembly": {
        "url": "./models/intestines/previous-assembly.glb",
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
        "note": "此视图使用历史总装，可对照旧胃与十二指肠的位置。完整外观显示新源码生成的肠道。"
      }
    },
    "interior": {
      "label": "打开盲肠看两个开口",
      "asset": "ileocaecal"
    }
  },
  {
    "id": "kidney",
    "name": "左肾",
    "latin": "Ren sinister",
    "system": "泌尿系统",
    "version": "左肾、肾门与集合系统",
    "status": "肾盂与静脉的显露范围仍待核实",
    "thumbnail": "./media/kidney.png",
    "url": "./models/kidney/whole.glb",
    "parts": [
      {
        "id": "front_parenchyma",
        "name": "前半肾实质",
        "meshes": [
          "CORTEX_L.anterior"
        ],
        "defaultMode": "solid"
      },
      {
        "id": "back_parenchyma",
        "name": "后半肾实质",
        "meshes": [
          "CORTEX_L.posterior"
        ],
        "defaultMode": "solid"
      },
      {
        "id": "front_medulla",
        "name": "髓锥和乳头前部",
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
        ],
        "defaultMode": "solid"
      },
      {
        "id": "back_medulla",
        "name": "髓锥和乳头后部",
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
        ],
        "defaultMode": "solid"
      },
      {
        "id": "major",
        "name": "大肾盏",
        "meshes": [
          "MAJOR_CALYX_L.01",
          "MAJOR_CALYX_L.02",
          "MAJOR_CALYX_L.03"
        ],
        "defaultMode": "solid"
      },
      {
        "id": "minor",
        "name": "小肾盏",
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
        ],
        "defaultMode": "solid"
      },
      {
        "id": "pelvis",
        "name": "肾盂",
        "meshes": [
          "PELVIS_L"
        ],
        "defaultMode": "solid"
      },
      {
        "id": "ureter",
        "name": "输尿管近段",
        "meshes": [
          "URETER_L"
        ],
        "defaultMode": "solid"
      },
      {
        "id": "arteries",
        "name": "肾动脉及分支",
        "meshes": [
          "ARTERY_L",
          "ARTERY_L.arcuate.01.1",
          "ARTERY_L.arcuate.01.2",
          "ARTERY_L.arcuate.02.1",
          "ARTERY_L.arcuate.02.2",
          "ARTERY_L.arcuate.03.1",
          "ARTERY_L.arcuate.03.2",
          "ARTERY_L.arcuate.04.1",
          "ARTERY_L.arcuate.04.2",
          "ARTERY_L.arcuate.05.1",
          "ARTERY_L.arcuate.05.2",
          "ARTERY_L.arcuate.06.1",
          "ARTERY_L.arcuate.06.2",
          "ARTERY_L.arcuate.07.1",
          "ARTERY_L.arcuate.07.2",
          "ARTERY_L.cortical.01.1.12",
          "ARTERY_L.cortical.01.1.6",
          "ARTERY_L.cortical.01.2.12",
          "ARTERY_L.cortical.01.2.6",
          "ARTERY_L.cortical.02.1.12",
          "ARTERY_L.cortical.02.1.6",
          "ARTERY_L.cortical.02.2.12",
          "ARTERY_L.cortical.02.2.6",
          "ARTERY_L.cortical.03.1.12",
          "ARTERY_L.cortical.03.1.6",
          "ARTERY_L.cortical.03.2.12",
          "ARTERY_L.cortical.03.2.6",
          "ARTERY_L.cortical.04.1.12",
          "ARTERY_L.cortical.04.1.6",
          "ARTERY_L.cortical.04.2.12",
          "ARTERY_L.cortical.04.2.6",
          "ARTERY_L.cortical.05.1.12",
          "ARTERY_L.cortical.05.1.6",
          "ARTERY_L.cortical.05.2.12",
          "ARTERY_L.cortical.05.2.6",
          "ARTERY_L.cortical.06.1.12",
          "ARTERY_L.cortical.06.1.6",
          "ARTERY_L.cortical.06.2.12",
          "ARTERY_L.cortical.06.2.6",
          "ARTERY_L.cortical.07.1.12",
          "ARTERY_L.cortical.07.1.6",
          "ARTERY_L.cortical.07.2.12",
          "ARTERY_L.cortical.07.2.6",
          "ARTERY_L.interlobar.01",
          "ARTERY_L.interlobar.02",
          "ARTERY_L.interlobar.03",
          "ARTERY_L.interlobar.04",
          "ARTERY_L.interlobar.05",
          "ARTERY_L.interlobar.06",
          "ARTERY_L.interlobar.07",
          "ARTERY_L.segmental.inferior",
          "ARTERY_L.segmental.superior"
        ],
        "defaultMode": "solid"
      },
      {
        "id": "veins",
        "name": "肾静脉及属支",
        "meshes": [
          "VEIN_L",
          "VEIN_L.arcuate.01.1",
          "VEIN_L.arcuate.01.2",
          "VEIN_L.arcuate.03.1",
          "VEIN_L.arcuate.03.2",
          "VEIN_L.arcuate.04.1",
          "VEIN_L.arcuate.04.2",
          "VEIN_L.arcuate.06.1",
          "VEIN_L.arcuate.06.2",
          "VEIN_L.arcuate.07.1",
          "VEIN_L.arcuate.07.2",
          "VEIN_L.cortical.01.1.8",
          "VEIN_L.cortical.01.2.8",
          "VEIN_L.cortical.03.1.8",
          "VEIN_L.cortical.03.2.8",
          "VEIN_L.cortical.04.1.8",
          "VEIN_L.cortical.04.2.8",
          "VEIN_L.cortical.06.1.8",
          "VEIN_L.cortical.06.2.8",
          "VEIN_L.cortical.07.1.8",
          "VEIN_L.cortical.07.2.8",
          "VEIN_L.interlobar.01",
          "VEIN_L.interlobar.03",
          "VEIN_L.interlobar.04",
          "VEIN_L.interlobar.06",
          "VEIN_L.interlobar.07",
          "VEIN_L.segmental.inferior",
          "VEIN_L.segmental.superior"
        ],
        "defaultMode": "solid"
      },
      {
        "id": "fat",
        "name": "肾窦脂肪",
        "meshes": [
          "SINUS_FAT_L.posterior"
        ],
        "defaultMode": "solid"
      },
      {
        "id": "hilar_support",
        "name": "肾门唇",
        "meshes": [
          "HILAR_SUPPORT_L"
        ],
        "defaultMode": "solid"
      }
    ],
    "coordinateSpace": "blender-gltf",
    "view": [
      -0.21796073019504547,
      0.09907293319702148,
      0.9709159135818481
    ],
    "note": "可旋转观察上极、下极、外侧凸缘及肾门。",
    "interior": {
      "label": "冠状剖面",
      "only": [
        "back_parenchyma",
        "back_medulla",
        "major",
        "minor",
        "pelvis",
        "ureter",
        "fat"
      ]
    },
    "isolatedViews": [
      {
        "key": "medial",
        "label": "内侧肾门",
        "asset": "medial"
      },
      {
        "key": "medial-before",
        "label": "修订前肾门",
        "asset": "medial-before"
      },
      {
        "key": "window",
        "label": "打开肾盏与肾盂",
        "asset": "window"
      },
      {
        "key": "papilla",
        "label": "乳头与小肾盏",
        "asset": "papilla"
      },
      {
        "key": "papilla-oblique",
        "label": "斜看同一乳头",
        "asset": "papilla-oblique"
      },
      {
        "key": "networks",
        "label": "肾内管网",
        "asset": "networks"
      },
      {
        "key": "collecting",
        "label": "仅看集合系统",
        "asset": "collecting"
      },
      {
        "key": "white",
        "label": "M42 白模",
        "asset": "white"
      },
      {
        "key": "previous",
        "label": "旧版白模对照",
        "asset": "previous"
      }
    ],
    "assets": {
      "medial": {
        "url": "./models/kidney/whole.glb",
        "parts": [
          {
            "id": "front_parenchyma",
            "name": "前半肾实质",
            "meshes": [
              "CORTEX_L.anterior"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "back_parenchyma",
            "name": "后半肾实质",
            "meshes": [
              "CORTEX_L.posterior"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "front_medulla",
            "name": "髓锥和乳头前部",
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
            ],
            "defaultMode": "solid"
          },
          {
            "id": "back_medulla",
            "name": "髓锥和乳头后部",
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
            ],
            "defaultMode": "solid"
          },
          {
            "id": "major",
            "name": "大肾盏",
            "meshes": [
              "MAJOR_CALYX_L.01",
              "MAJOR_CALYX_L.02",
              "MAJOR_CALYX_L.03"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "minor",
            "name": "小肾盏",
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
            ],
            "defaultMode": "solid"
          },
          {
            "id": "pelvis",
            "name": "肾盂",
            "meshes": [
              "PELVIS_L"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "ureter",
            "name": "输尿管近段",
            "meshes": [
              "URETER_L"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "arteries",
            "name": "肾动脉及分支",
            "meshes": [
              "ARTERY_L",
              "ARTERY_L.arcuate.01.1",
              "ARTERY_L.arcuate.01.2",
              "ARTERY_L.arcuate.02.1",
              "ARTERY_L.arcuate.02.2",
              "ARTERY_L.arcuate.03.1",
              "ARTERY_L.arcuate.03.2",
              "ARTERY_L.arcuate.04.1",
              "ARTERY_L.arcuate.04.2",
              "ARTERY_L.arcuate.05.1",
              "ARTERY_L.arcuate.05.2",
              "ARTERY_L.arcuate.06.1",
              "ARTERY_L.arcuate.06.2",
              "ARTERY_L.arcuate.07.1",
              "ARTERY_L.arcuate.07.2",
              "ARTERY_L.cortical.01.1.12",
              "ARTERY_L.cortical.01.1.6",
              "ARTERY_L.cortical.01.2.12",
              "ARTERY_L.cortical.01.2.6",
              "ARTERY_L.cortical.02.1.12",
              "ARTERY_L.cortical.02.1.6",
              "ARTERY_L.cortical.02.2.12",
              "ARTERY_L.cortical.02.2.6",
              "ARTERY_L.cortical.03.1.12",
              "ARTERY_L.cortical.03.1.6",
              "ARTERY_L.cortical.03.2.12",
              "ARTERY_L.cortical.03.2.6",
              "ARTERY_L.cortical.04.1.12",
              "ARTERY_L.cortical.04.1.6",
              "ARTERY_L.cortical.04.2.12",
              "ARTERY_L.cortical.04.2.6",
              "ARTERY_L.cortical.05.1.12",
              "ARTERY_L.cortical.05.1.6",
              "ARTERY_L.cortical.05.2.12",
              "ARTERY_L.cortical.05.2.6",
              "ARTERY_L.cortical.06.1.12",
              "ARTERY_L.cortical.06.1.6",
              "ARTERY_L.cortical.06.2.12",
              "ARTERY_L.cortical.06.2.6",
              "ARTERY_L.cortical.07.1.12",
              "ARTERY_L.cortical.07.1.6",
              "ARTERY_L.cortical.07.2.12",
              "ARTERY_L.cortical.07.2.6",
              "ARTERY_L.interlobar.01",
              "ARTERY_L.interlobar.02",
              "ARTERY_L.interlobar.03",
              "ARTERY_L.interlobar.04",
              "ARTERY_L.interlobar.05",
              "ARTERY_L.interlobar.06",
              "ARTERY_L.interlobar.07",
              "ARTERY_L.segmental.inferior",
              "ARTERY_L.segmental.superior"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "veins",
            "name": "肾静脉及属支",
            "meshes": [
              "VEIN_L",
              "VEIN_L.arcuate.01.1",
              "VEIN_L.arcuate.01.2",
              "VEIN_L.arcuate.03.1",
              "VEIN_L.arcuate.03.2",
              "VEIN_L.arcuate.04.1",
              "VEIN_L.arcuate.04.2",
              "VEIN_L.arcuate.06.1",
              "VEIN_L.arcuate.06.2",
              "VEIN_L.arcuate.07.1",
              "VEIN_L.arcuate.07.2",
              "VEIN_L.cortical.01.1.8",
              "VEIN_L.cortical.01.2.8",
              "VEIN_L.cortical.03.1.8",
              "VEIN_L.cortical.03.2.8",
              "VEIN_L.cortical.04.1.8",
              "VEIN_L.cortical.04.2.8",
              "VEIN_L.cortical.06.1.8",
              "VEIN_L.cortical.06.2.8",
              "VEIN_L.cortical.07.1.8",
              "VEIN_L.cortical.07.2.8",
              "VEIN_L.interlobar.01",
              "VEIN_L.interlobar.03",
              "VEIN_L.interlobar.04",
              "VEIN_L.interlobar.06",
              "VEIN_L.interlobar.07",
              "VEIN_L.segmental.inferior",
              "VEIN_L.segmental.superior"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "fat",
            "name": "肾窦脂肪",
            "meshes": [
              "SINUS_FAT_L.posterior"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "hilar_support",
            "name": "肾门唇",
            "meshes": [
              "HILAR_SUPPORT_L"
            ],
            "defaultMode": "solid"
          }
        ],
        "coordinateSpace": "blender-gltf",
        "view": [
          0,
          1,
          0
        ],
        "note": "沿管道朝肾门看。隐藏「肾门唇与管根入口」可以观察其后的共同肾窦。「肾门外形对照」展示相同方向的另一件模型。"
      },
      "medial-before": {
        "url": "./models/kidney/medial-before.glb",
        "parts": [
          {
            "id": "front_parenchyma",
            "name": "前半肾实质",
            "meshes": [
              "PREVIEW_BEFORE.CORTEX_L.anterior"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "back_parenchyma",
            "name": "后半肾实质",
            "meshes": [
              "PREVIEW_BEFORE.CORTEX_L.posterior"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "front_medulla",
            "name": "髓锥和乳头前部",
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
            ],
            "defaultMode": "solid"
          },
          {
            "id": "back_medulla",
            "name": "髓锥和乳头后部",
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
            ],
            "defaultMode": "solid"
          },
          {
            "id": "major",
            "name": "大肾盏",
            "meshes": [
              "MAJOR_CALYX_L.01",
              "MAJOR_CALYX_L.02",
              "MAJOR_CALYX_L.03"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "minor",
            "name": "小肾盏",
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
            ],
            "defaultMode": "solid"
          },
          {
            "id": "pelvis",
            "name": "肾盂",
            "meshes": [
              "PELVIS_L"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "ureter",
            "name": "输尿管近段",
            "meshes": [
              "URETER_L"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "arteries",
            "name": "肾动脉及分支",
            "meshes": [
              "ARTERY_L",
              "ARTERY_L.arcuate.01.1",
              "ARTERY_L.arcuate.01.2",
              "ARTERY_L.arcuate.02.1",
              "ARTERY_L.arcuate.02.2",
              "ARTERY_L.arcuate.03.1",
              "ARTERY_L.arcuate.03.2",
              "ARTERY_L.arcuate.04.1",
              "ARTERY_L.arcuate.04.2",
              "ARTERY_L.arcuate.05.1",
              "ARTERY_L.arcuate.05.2",
              "ARTERY_L.arcuate.06.1",
              "ARTERY_L.arcuate.06.2",
              "ARTERY_L.arcuate.07.1",
              "ARTERY_L.arcuate.07.2",
              "ARTERY_L.cortical.01.1.12",
              "ARTERY_L.cortical.01.1.6",
              "ARTERY_L.cortical.01.2.12",
              "ARTERY_L.cortical.01.2.6",
              "ARTERY_L.cortical.02.1.12",
              "ARTERY_L.cortical.02.1.6",
              "ARTERY_L.cortical.02.2.12",
              "ARTERY_L.cortical.02.2.6",
              "ARTERY_L.cortical.03.1.12",
              "ARTERY_L.cortical.03.1.6",
              "ARTERY_L.cortical.03.2.12",
              "ARTERY_L.cortical.03.2.6",
              "ARTERY_L.cortical.04.1.12",
              "ARTERY_L.cortical.04.1.6",
              "ARTERY_L.cortical.04.2.12",
              "ARTERY_L.cortical.04.2.6",
              "ARTERY_L.cortical.05.1.12",
              "ARTERY_L.cortical.05.1.6",
              "ARTERY_L.cortical.05.2.12",
              "ARTERY_L.cortical.05.2.6",
              "ARTERY_L.cortical.06.1.12",
              "ARTERY_L.cortical.06.1.6",
              "ARTERY_L.cortical.06.2.12",
              "ARTERY_L.cortical.06.2.6",
              "ARTERY_L.cortical.07.1.12",
              "ARTERY_L.cortical.07.1.6",
              "ARTERY_L.cortical.07.2.12",
              "ARTERY_L.cortical.07.2.6",
              "ARTERY_L.interlobar.01",
              "ARTERY_L.interlobar.02",
              "ARTERY_L.interlobar.03",
              "ARTERY_L.interlobar.04",
              "ARTERY_L.interlobar.05",
              "ARTERY_L.interlobar.06",
              "ARTERY_L.interlobar.07",
              "ARTERY_L.segmental.inferior",
              "ARTERY_L.segmental.superior"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "veins",
            "name": "肾静脉及属支",
            "meshes": [
              "VEIN_L",
              "VEIN_L.arcuate.01.1",
              "VEIN_L.arcuate.01.2",
              "VEIN_L.arcuate.03.1",
              "VEIN_L.arcuate.03.2",
              "VEIN_L.arcuate.04.1",
              "VEIN_L.arcuate.04.2",
              "VEIN_L.arcuate.06.1",
              "VEIN_L.arcuate.06.2",
              "VEIN_L.arcuate.07.1",
              "VEIN_L.arcuate.07.2",
              "VEIN_L.cortical.01.1.8",
              "VEIN_L.cortical.01.2.8",
              "VEIN_L.cortical.03.1.8",
              "VEIN_L.cortical.03.2.8",
              "VEIN_L.cortical.04.1.8",
              "VEIN_L.cortical.04.2.8",
              "VEIN_L.cortical.06.1.8",
              "VEIN_L.cortical.06.2.8",
              "VEIN_L.cortical.07.1.8",
              "VEIN_L.cortical.07.2.8",
              "VEIN_L.interlobar.01",
              "VEIN_L.interlobar.03",
              "VEIN_L.interlobar.04",
              "VEIN_L.interlobar.06",
              "VEIN_L.interlobar.07",
              "VEIN_L.segmental.inferior",
              "VEIN_L.segmental.superior"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "fat",
            "name": "肾窦脂肪",
            "meshes": [
              "SINUS_FAT_L.posterior"
            ],
            "defaultMode": "solid"
          }
        ],
        "coordinateSpace": "blender-gltf",
        "view": [
          0,
          1,
          0
        ],
        "note": "与内侧肾门使用相同方向，可对照本次运行中收拢开口与加厚肾体前的外形。"
      },
      "window": {
        "url": "./models/kidney/window.glb",
        "parts": [
          {
            "id": "back_parenchyma",
            "name": "后半肾实质",
            "meshes": [
              "CORTEX_L.posterior"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "back_medulla",
            "name": "髓锥和乳头后部",
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
            ],
            "defaultMode": "solid"
          },
          {
            "id": "open_wall",
            "name": "切开的集合系统",
            "meshes": [
              "Collecting system | opened wall"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "fat",
            "name": "肾窦脂肪",
            "meshes": [
              "SINUS_FAT_L.posterior"
            ],
            "defaultMode": "solid"
          }
        ],
        "coordinateSpace": "blender-gltf",
        "view": [
          0,
          1,
          0
        ],
        "note": "打开集合系统前壁后，可以转动观察盏腔和真实切缘。"
      },
      "papilla": {
        "url": "./models/kidney/papilla.glb",
        "parts": [
          {
            "id": "calyx-window",
            "name": "小肾盏壁",
            "meshes": [
              "Minor_calyx_02_window"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "papilla",
            "name": "乳头及部分髓质",
            "meshes": [
              "Papilla_02"
            ],
            "defaultMode": "solid"
          }
        ],
        "coordinateSpace": "blender-gltf",
        "view": [
          0,
          1,
          0
        ],
        "note": "沿乳头长轴观察小盏内壁、盏口和伸进杯口的乳头尖。"
      },
      "papilla-oblique": {
        "url": "./models/kidney/papilla.glb",
        "parts": [
          {
            "id": "calyx-window",
            "name": "小肾盏壁",
            "meshes": [
              "Minor_calyx_02_window"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "papilla",
            "name": "乳头及部分髓质",
            "meshes": [
              "Papilla_02"
            ],
            "defaultMode": "solid"
          }
        ],
        "coordinateSpace": "blender-gltf",
        "view": [
          0,
          1,
          0
        ],
        "note": "换到斜位，观察同一乳头和小肾盏的深度关系。"
      },
      "networks": {
        "url": "./models/kidney/whole.glb",
        "parts": [
          {
            "id": "front_parenchyma",
            "name": "前半肾实质",
            "meshes": [
              "CORTEX_L.anterior"
            ],
            "defaultMode": "hidden"
          },
          {
            "id": "back_parenchyma",
            "name": "后半肾实质",
            "meshes": [
              "CORTEX_L.posterior"
            ],
            "defaultMode": "hidden"
          },
          {
            "id": "front_medulla",
            "name": "髓锥和乳头前部",
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
            ],
            "defaultMode": "hidden"
          },
          {
            "id": "back_medulla",
            "name": "髓锥和乳头后部",
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
            ],
            "defaultMode": "hidden"
          },
          {
            "id": "major",
            "name": "大肾盏",
            "meshes": [
              "MAJOR_CALYX_L.01",
              "MAJOR_CALYX_L.02",
              "MAJOR_CALYX_L.03"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "minor",
            "name": "小肾盏",
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
            ],
            "defaultMode": "solid"
          },
          {
            "id": "pelvis",
            "name": "肾盂",
            "meshes": [
              "PELVIS_L"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "ureter",
            "name": "输尿管近段",
            "meshes": [
              "URETER_L"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "arteries",
            "name": "肾动脉及分支",
            "meshes": [
              "ARTERY_L",
              "ARTERY_L.arcuate.01.1",
              "ARTERY_L.arcuate.01.2",
              "ARTERY_L.arcuate.02.1",
              "ARTERY_L.arcuate.02.2",
              "ARTERY_L.arcuate.03.1",
              "ARTERY_L.arcuate.03.2",
              "ARTERY_L.arcuate.04.1",
              "ARTERY_L.arcuate.04.2",
              "ARTERY_L.arcuate.05.1",
              "ARTERY_L.arcuate.05.2",
              "ARTERY_L.arcuate.06.1",
              "ARTERY_L.arcuate.06.2",
              "ARTERY_L.arcuate.07.1",
              "ARTERY_L.arcuate.07.2",
              "ARTERY_L.cortical.01.1.12",
              "ARTERY_L.cortical.01.1.6",
              "ARTERY_L.cortical.01.2.12",
              "ARTERY_L.cortical.01.2.6",
              "ARTERY_L.cortical.02.1.12",
              "ARTERY_L.cortical.02.1.6",
              "ARTERY_L.cortical.02.2.12",
              "ARTERY_L.cortical.02.2.6",
              "ARTERY_L.cortical.03.1.12",
              "ARTERY_L.cortical.03.1.6",
              "ARTERY_L.cortical.03.2.12",
              "ARTERY_L.cortical.03.2.6",
              "ARTERY_L.cortical.04.1.12",
              "ARTERY_L.cortical.04.1.6",
              "ARTERY_L.cortical.04.2.12",
              "ARTERY_L.cortical.04.2.6",
              "ARTERY_L.cortical.05.1.12",
              "ARTERY_L.cortical.05.1.6",
              "ARTERY_L.cortical.05.2.12",
              "ARTERY_L.cortical.05.2.6",
              "ARTERY_L.cortical.06.1.12",
              "ARTERY_L.cortical.06.1.6",
              "ARTERY_L.cortical.06.2.12",
              "ARTERY_L.cortical.06.2.6",
              "ARTERY_L.cortical.07.1.12",
              "ARTERY_L.cortical.07.1.6",
              "ARTERY_L.cortical.07.2.12",
              "ARTERY_L.cortical.07.2.6",
              "ARTERY_L.interlobar.01",
              "ARTERY_L.interlobar.02",
              "ARTERY_L.interlobar.03",
              "ARTERY_L.interlobar.04",
              "ARTERY_L.interlobar.05",
              "ARTERY_L.interlobar.06",
              "ARTERY_L.interlobar.07",
              "ARTERY_L.segmental.inferior",
              "ARTERY_L.segmental.superior"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "veins",
            "name": "肾静脉及属支",
            "meshes": [
              "VEIN_L",
              "VEIN_L.arcuate.01.1",
              "VEIN_L.arcuate.01.2",
              "VEIN_L.arcuate.03.1",
              "VEIN_L.arcuate.03.2",
              "VEIN_L.arcuate.04.1",
              "VEIN_L.arcuate.04.2",
              "VEIN_L.arcuate.06.1",
              "VEIN_L.arcuate.06.2",
              "VEIN_L.arcuate.07.1",
              "VEIN_L.arcuate.07.2",
              "VEIN_L.cortical.01.1.8",
              "VEIN_L.cortical.01.2.8",
              "VEIN_L.cortical.03.1.8",
              "VEIN_L.cortical.03.2.8",
              "VEIN_L.cortical.04.1.8",
              "VEIN_L.cortical.04.2.8",
              "VEIN_L.cortical.06.1.8",
              "VEIN_L.cortical.06.2.8",
              "VEIN_L.cortical.07.1.8",
              "VEIN_L.cortical.07.2.8",
              "VEIN_L.interlobar.01",
              "VEIN_L.interlobar.03",
              "VEIN_L.interlobar.04",
              "VEIN_L.interlobar.06",
              "VEIN_L.interlobar.07",
              "VEIN_L.segmental.inferior",
              "VEIN_L.segmental.superior"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "fat",
            "name": "肾窦脂肪",
            "meshes": [
              "SINUS_FAT_L.posterior"
            ],
            "defaultMode": "hidden"
          },
          {
            "id": "hilar_support",
            "name": "肾门唇",
            "meshes": [
              "HILAR_SUPPORT_L"
            ],
            "defaultMode": "hidden"
          }
        ],
        "coordinateSpace": "blender-gltf",
        "view": [
          0,
          1,
          0
        ],
        "note": "可分别隐藏动脉、静脉或集合系统，查看它们在肾内的走向。"
      },
      "collecting": {
        "url": "./models/kidney/whole.glb",
        "parts": [
          {
            "id": "front_parenchyma",
            "name": "前半肾实质",
            "meshes": [
              "CORTEX_L.anterior"
            ],
            "defaultMode": "hidden"
          },
          {
            "id": "back_parenchyma",
            "name": "后半肾实质",
            "meshes": [
              "CORTEX_L.posterior"
            ],
            "defaultMode": "hidden"
          },
          {
            "id": "front_medulla",
            "name": "髓锥和乳头前部",
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
            ],
            "defaultMode": "hidden"
          },
          {
            "id": "back_medulla",
            "name": "髓锥和乳头后部",
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
            ],
            "defaultMode": "hidden"
          },
          {
            "id": "major",
            "name": "大肾盏",
            "meshes": [
              "MAJOR_CALYX_L.01",
              "MAJOR_CALYX_L.02",
              "MAJOR_CALYX_L.03"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "minor",
            "name": "小肾盏",
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
            ],
            "defaultMode": "solid"
          },
          {
            "id": "pelvis",
            "name": "肾盂",
            "meshes": [
              "PELVIS_L"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "ureter",
            "name": "输尿管近段",
            "meshes": [
              "URETER_L"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "arteries",
            "name": "肾动脉及分支",
            "meshes": [
              "ARTERY_L",
              "ARTERY_L.arcuate.01.1",
              "ARTERY_L.arcuate.01.2",
              "ARTERY_L.arcuate.02.1",
              "ARTERY_L.arcuate.02.2",
              "ARTERY_L.arcuate.03.1",
              "ARTERY_L.arcuate.03.2",
              "ARTERY_L.arcuate.04.1",
              "ARTERY_L.arcuate.04.2",
              "ARTERY_L.arcuate.05.1",
              "ARTERY_L.arcuate.05.2",
              "ARTERY_L.arcuate.06.1",
              "ARTERY_L.arcuate.06.2",
              "ARTERY_L.arcuate.07.1",
              "ARTERY_L.arcuate.07.2",
              "ARTERY_L.cortical.01.1.12",
              "ARTERY_L.cortical.01.1.6",
              "ARTERY_L.cortical.01.2.12",
              "ARTERY_L.cortical.01.2.6",
              "ARTERY_L.cortical.02.1.12",
              "ARTERY_L.cortical.02.1.6",
              "ARTERY_L.cortical.02.2.12",
              "ARTERY_L.cortical.02.2.6",
              "ARTERY_L.cortical.03.1.12",
              "ARTERY_L.cortical.03.1.6",
              "ARTERY_L.cortical.03.2.12",
              "ARTERY_L.cortical.03.2.6",
              "ARTERY_L.cortical.04.1.12",
              "ARTERY_L.cortical.04.1.6",
              "ARTERY_L.cortical.04.2.12",
              "ARTERY_L.cortical.04.2.6",
              "ARTERY_L.cortical.05.1.12",
              "ARTERY_L.cortical.05.1.6",
              "ARTERY_L.cortical.05.2.12",
              "ARTERY_L.cortical.05.2.6",
              "ARTERY_L.cortical.06.1.12",
              "ARTERY_L.cortical.06.1.6",
              "ARTERY_L.cortical.06.2.12",
              "ARTERY_L.cortical.06.2.6",
              "ARTERY_L.cortical.07.1.12",
              "ARTERY_L.cortical.07.1.6",
              "ARTERY_L.cortical.07.2.12",
              "ARTERY_L.cortical.07.2.6",
              "ARTERY_L.interlobar.01",
              "ARTERY_L.interlobar.02",
              "ARTERY_L.interlobar.03",
              "ARTERY_L.interlobar.04",
              "ARTERY_L.interlobar.05",
              "ARTERY_L.interlobar.06",
              "ARTERY_L.interlobar.07",
              "ARTERY_L.segmental.inferior",
              "ARTERY_L.segmental.superior"
            ],
            "defaultMode": "hidden"
          },
          {
            "id": "veins",
            "name": "肾静脉及属支",
            "meshes": [
              "VEIN_L",
              "VEIN_L.arcuate.01.1",
              "VEIN_L.arcuate.01.2",
              "VEIN_L.arcuate.03.1",
              "VEIN_L.arcuate.03.2",
              "VEIN_L.arcuate.04.1",
              "VEIN_L.arcuate.04.2",
              "VEIN_L.arcuate.06.1",
              "VEIN_L.arcuate.06.2",
              "VEIN_L.arcuate.07.1",
              "VEIN_L.arcuate.07.2",
              "VEIN_L.cortical.01.1.8",
              "VEIN_L.cortical.01.2.8",
              "VEIN_L.cortical.03.1.8",
              "VEIN_L.cortical.03.2.8",
              "VEIN_L.cortical.04.1.8",
              "VEIN_L.cortical.04.2.8",
              "VEIN_L.cortical.06.1.8",
              "VEIN_L.cortical.06.2.8",
              "VEIN_L.cortical.07.1.8",
              "VEIN_L.cortical.07.2.8",
              "VEIN_L.interlobar.01",
              "VEIN_L.interlobar.03",
              "VEIN_L.interlobar.04",
              "VEIN_L.interlobar.06",
              "VEIN_L.interlobar.07",
              "VEIN_L.segmental.inferior",
              "VEIN_L.segmental.superior"
            ],
            "defaultMode": "hidden"
          },
          {
            "id": "fat",
            "name": "肾窦脂肪",
            "meshes": [
              "SINUS_FAT_L.posterior"
            ],
            "defaultMode": "hidden"
          },
          {
            "id": "hilar_support",
            "name": "肾门唇",
            "meshes": [
              "HILAR_SUPPORT_L"
            ],
            "defaultMode": "hidden"
          }
        ],
        "coordinateSpace": "blender-gltf",
        "view": [
          0,
          1,
          0
        ],
        "note": "从十个小肾盏追到三个大肾盏，再向下找到肾盂和输尿管近段。"
      },
      "white": {
        "url": "./models/kidney/white.glb",
        "parts": [
          {
            "id": "body",
            "name": "肾体",
            "meshes": [
              "KIDNEY_L.surface"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "vein",
            "name": "肾静脉",
            "meshes": [
              "VEIN_L"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "artery",
            "name": "肾动脉",
            "meshes": [
              "ARTERY_L"
            ],
            "defaultMode": "solid"
          },
          {
            "id": "ureter",
            "name": "输尿管近段",
            "meshes": [
              "URETER_L"
            ],
            "defaultMode": "solid"
          }
        ],
        "coordinateSpace": "blender-gltf",
        "view": [
          -0.65,
          0.12,
          0.76
        ],
        "note": "只显示本轮生成的肾体和肾门三种管道，可与带材质整件对照。"
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
    },
    "legacyLayers": "previous"
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
    "thumbnail": "./media/pancreas.png",
    "note": "查看胰头至胰尾、后方钩突和两个胰管截端。显微区域按自身尺寸放大。",
    "parts": [
      {
        "id": "gland",
        "name": "胰实质",
        "meshes": [
          "PA_Parenchyma"
        ],
        "color": "#c28f78"
      },
      {
        "id": "mainDuct",
        "name": "主胰管外壁",
        "materials": [
          "Main pancreatic duct | wall"
        ],
        "color": "#d8bd99"
      },
      {
        "id": "accessoryDuct",
        "name": "副胰管外壁",
        "materials": [
          "Accessory pancreatic duct | wall"
        ],
        "color": "#d8bd99"
      },
      {
        "id": "tributaries",
        "name": "胰管侧支",
        "materials": [
          "Pancreatic tributary | wall"
        ],
        "color": "#d8bd99"
      },
      {
        "id": "innerWall",
        "name": "管腔内衬",
        "materials": [
          "Duct lumen | lining"
        ],
        "color": "#d8bd99"
      },
      {
        "id": "rim",
        "name": "出口切缘",
        "materials": [
          "Duct cut margin"
        ],
        "color": "#d8bd99"
      }
    ],
    "legacyLayers": "originalRegions",
    "interior": {
      "label": "前方开窗",
      "asset": "section"
    },
    "isolatedViews": [
      {
        "key": "posterior",
        "label": "后方开窗",
        "asset": "posterior"
      },
      {
        "key": "ducts",
        "label": "单看胰管",
        "asset": "ducts"
      },
      {
        "key": "micro",
        "label": "显微组织",
        "asset": "micro"
      },
      {
        "key": "white",
        "label": "本版外形白模",
        "asset": "white"
      },
      {
        "key": "previous",
        "label": "上一版本",
        "asset": "previous"
      },
      {
        "key": "originalRegions",
        "label": "原版形态分区",
        "asset": "originalRegions"
      }
    ],
    "assets": {
      "white": {
        "url": "./models/pancreas/white.glb",
        "parts": [
          {
            "id": "gland",
            "name": "胰腺白模",
            "meshes": [
              "PA_White"
            ],
            "color": "#c28f78"
          }
        ]
      },
      "section": {
        "url": "./models/pancreas/section.glb",
        "parts": [
          {
            "id": "gland",
            "name": "剖面实质",
            "meshes": [
              "PA_Section"
            ],
            "color": "#c28f78"
          },
          {
            "id": "lobules",
            "name": "胰体局部小叶",
            "meshes": [
              "PA_Lobules"
            ],
            "color": "#c28f78"
          },
          {
            "id": "septa",
            "name": "小叶间隔",
            "meshes": [
              "PA_Septa"
            ],
            "color": "#c28f78"
          },
          {
            "id": "mainDuct",
            "name": "主胰管外壁",
            "materials": [
              "Main pancreatic duct | wall"
            ],
            "color": "#d8bd99"
          },
          {
            "id": "accessoryDuct",
            "name": "副胰管外壁",
            "materials": [
              "Accessory pancreatic duct | wall"
            ],
            "color": "#d8bd99"
          },
          {
            "id": "tributaries",
            "name": "胰管侧支",
            "materials": [
              "Pancreatic tributary | wall"
            ],
            "color": "#d8bd99"
          },
          {
            "id": "innerWall",
            "name": "管腔内衬",
            "materials": [
              "Duct lumen | lining"
            ],
            "color": "#d8bd99"
          },
          {
            "id": "rim",
            "name": "出口切缘",
            "materials": [
              "Duct cut margin"
            ],
            "color": "#d8bd99"
          }
        ],
        "note": "可沿纵向切面追踪胰管。胰体的一组小叶和组织隔可分别隐藏或切到线框。"
      },
      "posterior": {
        "url": "./models/pancreas/posterior.glb",
        "view": [
          0,
          0.02,
          -1
        ],
        "parts": [
          {
            "id": "gland",
            "name": "背侧开窗实质",
            "meshes": [
              "PA_PosteriorWindow"
            ],
            "color": "#c28f78"
          },
          {
            "id": "mainDuct",
            "name": "主胰管外壁",
            "materials": [
              "Main pancreatic duct | wall"
            ],
            "color": "#d8bd99"
          },
          {
            "id": "accessoryDuct",
            "name": "副胰管外壁",
            "materials": [
              "Accessory pancreatic duct | wall"
            ],
            "color": "#d8bd99"
          },
          {
            "id": "tributaries",
            "name": "胰管侧支",
            "materials": [
              "Pancreatic tributary | wall"
            ],
            "color": "#d8bd99"
          },
          {
            "id": "innerWall",
            "name": "管腔内衬",
            "materials": [
              "Duct lumen | lining"
            ],
            "color": "#d8bd99"
          },
          {
            "id": "rim",
            "name": "出口切缘",
            "materials": [
              "Duct cut margin"
            ],
            "color": "#d8bd99"
          }
        ]
      },
      "ducts": {
        "url": "./models/pancreas/ducts.glb",
        "parts": [
          {
            "id": "mainDuct",
            "name": "主胰管外壁",
            "materials": [
              "Main pancreatic duct | wall"
            ],
            "color": "#d8bd99"
          },
          {
            "id": "accessoryDuct",
            "name": "副胰管外壁",
            "materials": [
              "Accessory pancreatic duct | wall"
            ],
            "color": "#d8bd99"
          },
          {
            "id": "tributaries",
            "name": "胰管侧支",
            "materials": [
              "Pancreatic tributary | wall"
            ],
            "color": "#d8bd99"
          },
          {
            "id": "innerWall",
            "name": "管腔内衬",
            "materials": [
              "Duct lumen | lining"
            ],
            "color": "#d8bd99"
          },
          {
            "id": "rim",
            "name": "出口切缘",
            "materials": [
              "Duct cut margin"
            ],
            "color": "#d8bd99"
          }
        ]
      },
      "micro": {
        "url": "./models/pancreas/micro.glb",
        "view": [
          0,
          0,
          1
        ],
        "parts": [
          {
            "id": "acini",
            "name": "外分泌腺泡",
            "meshes": [
              "PA_Acini"
            ],
            "color": "#c28f78"
          },
          {
            "id": "islet",
            "name": "胰岛",
            "meshes": [
              "PA_Islet"
            ],
            "color": "#c28f78"
          },
          {
            "id": "smallDuct",
            "name": "闰管",
            "meshes": [
              "PA_IntercalatedDuct"
            ],
            "color": "#c28f78"
          },
          {
            "id": "stroma",
            "name": "周围间质",
            "meshes": [
              "PA_MicroStroma"
            ],
            "color": "#c28f78"
          }
        ]
      },
      "previous": {
        "url": "./models/pancreas/previous.glb",
        "thumbnail": "./media/pancreas-previous.webp",
        "view": [
          -0.035,
          0.09,
          1
        ],
        "note": "六个选区展示胰头、胰颈、胰体、胰尾、钩突和切迹周围的表面。此视图仅展示外形。",
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
        "version": "胰腺外形分区",
        "status": "教学展示"
      },
      "originalRegions": {
        "url": "./models/pancreas/original-regions.glb",
        "thumbnail": "./media/pancreas-original-regions.webp",
        "view": [
          0,
          0,
          1
        ],
        "note": "六个选区来自同一连续外壳。切迹周围单列，边界沿用建模分区。这一版未建胰管。",
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
        ],
        "regions": {
          "mesh": "Pancreas",
          "url": "./media/pancreas-original-regions-regions.bin",
          "triangles": 47760,
          "modelSha256": "82df18d891be8625e820fbbd662c3cb57c4cec7c495228b09c2c0e9f0c6389e3",
          "sha256": "f8491aa8b5d865bf0d30c4b3e56767d634664671f4e6ae44f4dcb965f361f6c9"
        },
        "version": "连续外形父版",
        "status": "教学展示"
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
      0.12,
      0.08
    ],
    "note": "旋转可看膈面的隆起和脏面的脾门。切面显示红髓中的血管腔、小梁和沿动脉分布的白髓。白髓采用放大的教学尺度。",
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
          "Red pulp | exposed tissue",
          "Red pulp | section face"
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
          0.16,
          -0.04
        ],
        "note": "沿膈面一侧切开后可旋转看实质和保留的脾门。白髓团块和小梁按教学尺度显示。"
      },
      "dissection": {
        "url": "./models/spleen/dissection.glb",
        "view": [
          -1,
          0.25,
          -0.3
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
    "thumbnail": "./media/dentition.png",
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
        "soloLabel": "选择一颗上颌牙",
        "view": [
          0,
          -1,
          0.001
        ],
        "note": "从下向上看上牙弓，前牙朝画面上方。画面左侧是患者右上 11–17，右侧是患者左上 21–27。"
      },
      "lower": {
        "soloLabel": "选择一颗下颌牙",
        "view": [
          0,
          1,
          -0.001
        ],
        "note": "从上向下看下牙弓，前牙朝画面上方。画面左侧是患者左下 31–37，右侧是患者右下 41–47。"
      }
    }
  },
  {
    "id": "brain",
    "name": "正常成人脑",
    "latin": "Encephalon",
    "system": "中枢神经系统",
    "version": "成人脑大体外观",
    "status": "严格底面延髓显露待修订 · USCBrain · CC BY-NC-SA 4.0",
    "url": "./models/brain/whole.glb",
    "thumbnail": "./media/brain.webp",
    "view": [
      -1,
      0,
      0
    ],
    "wholeLabel": "完整外观 · 左侧面",
    "note": "从左侧看，画面左方是额极。沿颞叶上缘可追踪外侧沟，再往后下方看，可见枕叶下方的小脑和小脑前方的脑干。小脑部分细褶按教学标本的走向补形。",
    "parts": [
      {
        "id": "left-hemisphere",
        "name": "左大脑半球",
        "color": "#bd9189",
        "meshes": [
          "HEMI_L"
        ]
      },
      {
        "id": "right-hemisphere",
        "name": "右大脑半球",
        "color": "#bd9189",
        "meshes": [
          "HEMI_R"
        ]
      },
      {
        "id": "cerebellum",
        "name": "小脑",
        "color": "#ac7872",
        "meshes": [
          "CEREBELLUM"
        ]
      },
      {
        "id": "brainstem",
        "name": "脑干",
        "color": "#c8ac93",
        "meshes": [
          "BRAINSTEM"
        ]
      }
    ],
    "isolatedViews": [
      {
        "key": "right-lateral",
        "label": "右侧面",
        "asset": "right-lateral"
      },
      {
        "key": "superior",
        "label": "顶面",
        "asset": "superior"
      },
      {
        "key": "posterior",
        "label": "后面",
        "asset": "posterior"
      },
      {
        "key": "inferior",
        "label": "严格底面",
        "asset": "inferior"
      },
      {
        "key": "ventral-oblique",
        "label": "前下斜面",
        "asset": "ventral-oblique"
      }
    ],
    "assets": {
      "right-lateral": {
        "view": [
          1,
          0,
          0
        ],
        "note": "从右侧看，画面右方是额极。可沿颞叶上缘寻找外侧沟，再沿上方的沟回比较两侧半球。"
      },
      "superior": {
        "view": [
          0,
          1,
          0.0001
        ],
        "note": "额极朝画面上方。两半球之间的纵裂沿中线延伸。中央沟在左右半球分别从靠近纵裂处向外、向前斜行。"
      },
      "posterior": {
        "view": [
          0,
          0,
          1
        ],
        "note": "从后方可比较左右枕叶及其下方小脑的轮廓。隐藏两侧大脑半球，可以继续观察小脑上面。"
      },
      "inferior": {
        "view": [
          0,
          -1,
          -0.0001
        ],
        "note": "额极朝画面上方。在小脑两侧之间可见脑桥隆起。这个方向的延髓显得较短，换到「前下斜面」可追踪脑桥向延髓变细的轮廓。"
      },
      "ventral-oblique": {
        "view": [
          0,
          -0.8,
          -0.6
        ],
        "note": "从前下方看，脑桥下方渐细的延髓位于两侧小脑的前方。也可单独隐藏小脑，再与完整外观对照。"
      }
    }
  }
];
