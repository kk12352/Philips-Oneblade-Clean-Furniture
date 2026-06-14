const products = [
  {
    id: 1,
    image: "assets/product1-purerest-sofa.png",
    page: "product1.html",
    category: { zh: "客厅", en: "Living Room" },
    name: { zh: "Philips Oneblade PureRest Sofa", en: "Philips Oneblade PureRest Sofa" },
    price: "$899.00",
    short: {
      zh: "可拆洗模块沙发，适合有孩子、宠物和高频会客的家庭。",
      en: "A washable modular sofa for families with kids, pets, and frequent guests."
    },
    desc: {
      zh: "PureRest Sofa 使用可拆洗外套、隐藏式防污衬层和可替换坐垫模块，让客厅家具更容易保持干净清爽。",
      en: "PureRest Sofa uses removable covers, a hidden stain barrier, and replaceable cushion modules to keep living rooms fresher with less effort."
    },
    specs: [
      { zh: "可拆洗防污面料", en: "Removable stain-resistant covers" },
      { zh: "模块化坐垫与扶手", en: "Modular cushions and arms" },
      { zh: "防潮抬高底座", en: "Raised moisture-resistant base" },
      { zh: "P1 原创织唛标识", en: "Original P1 woven identity mark" }
    ]
  },
  {
    id: 2,
    image: "assets/product2-halocabinet.png",
    page: "product2.html",
    category: { zh: "收纳", en: "Storage" },
    name: { zh: "Philips Oneblade HaloCabinet", en: "Philips Oneblade HaloCabinet" },
    price: "$499.00",
    short: {
      zh: "带柔和除菌光与通风层架的高柜，用于毛巾、玩具和日常小物。",
      en: "A soft-light ventilated cabinet for towels, toys, and everyday essentials."
    },
    desc: {
      zh: "HaloCabinet 把玻璃门展示、分区层架、柔和卫生光和低噪通风整合在一起，适合玄关、浴室外侧或家政区。",
      en: "HaloCabinet combines glass display doors, divided shelves, soft hygiene lighting, and quiet airflow for entryways, utility zones, or near-bath storage."
    },
    specs: [
      { zh: "柔和卫生光层架", en: "Soft hygiene-light shelves" },
      { zh: "低噪通风循环", en: "Quiet airflow circulation" },
      { zh: "防潮玻璃门", en: "Moisture-resistant glass doors" },
      { zh: "分区收纳托盘", en: "Divided storage trays" }
    ]
  },
  {
    id: 3,
    image: "assets/product3-airnest-table.png",
    page: "product3.html",
    category: { zh: "净化", en: "Purifying" },
    name: { zh: "Philips Oneblade AirNest Table", en: "Philips Oneblade AirNest Table" },
    price: "$299.00",
    short: {
      zh: "兼具边桌和空气净味功能，适合沙发旁与卧室角落。",
      en: "A side table with air-freshening filtration for sofa corners and bedrooms."
    },
    desc: {
      zh: "AirNest Table 将圆形边桌、织物滤芯外壳和底部进风结构结合，为小空间提供安静的净味辅助。",
      en: "AirNest Table pairs a round side table, fabric filter body, and lower intake structure to quietly support fresher small spaces."
    },
    specs: [
      { zh: "可替换净味滤芯", en: "Replaceable odor-control filter" },
      { zh: "实木质感桌面", en: "Wood-finish tabletop" },
      { zh: "低亮度状态灯", en: "Low-brightness status light" },
      { zh: "织物可拆清洁外罩", en: "Removable cleanable fabric sleeve" }
    ]
  },
  {
    id: 4,
    image: "assets/product4-freshwardrobe.png",
    page: "product4.html",
    category: { zh: "卧室", en: "Bedroom" },
    name: { zh: "Philips Oneblade FreshWardrobe", en: "Philips Oneblade FreshWardrobe" },
    price: "$749.00",
    short: {
      zh: "带通风、防潮和净味模块的衣柜，让衣物长期保持清爽。",
      en: "A ventilated wardrobe with moisture and odor control for fresher clothing."
    },
    desc: {
      zh: "FreshWardrobe 为挂衣区、抽屉和底部通风口设计独立气流路径，减少潮气滞留，让衣柜内部更稳定。",
      en: "FreshWardrobe creates separate airflow paths for hanging zones, drawers, and lower vents to reduce trapped moisture inside the wardrobe."
    },
    specs: [
      { zh: "衣物区独立通风", en: "Independent clothing-zone airflow" },
      { zh: "柔光内照明", en: "Soft interior lighting" },
      { zh: "底部防潮抽屉", en: "Moisture-conscious lower drawer" },
      { zh: "可拆洗防尘挂帘", en: "Removable dust-control curtain" }
    ]
  },
  {
    id: 5,
    image: "assets/product5-drainbench.png",
    page: "product5.html",
    category: { zh: "玄关", en: "Entryway" },
    name: { zh: "Philips Oneblade DrainBench", en: "Philips Oneblade DrainBench" },
    price: "$249.00",
    short: {
      zh: "自排水玄关换鞋凳，管理雨天鞋底、水滴和泥沙。",
      en: "A self-draining entry bench for wet shoes, drips, and outdoor residue."
    },
    desc: {
      zh: "DrainBench 将可洗坐垫、倾斜鞋托和隐藏接水抽屉做成一体，减少玄关地面的清洁压力。",
      en: "DrainBench combines a washable cushion, angled shoe tray, and hidden drip drawer to reduce entryway cleaning effort."
    },
    specs: [
      { zh: "可抽出接水托盘", en: "Pull-out drip tray" },
      { zh: "可洗坐垫面料", en: "Washable seat cushion" },
      { zh: "开放式通风鞋层", en: "Open ventilated shoe shelf" },
      { zh: "防潮木纹侧板", en: "Moisture-resistant wood side panels" }
    ]
  },
  {
    id: 6,
    image: "assets/product6-shield-chair.png",
    page: "product6.html",
    category: { zh: "餐厅", en: "Dining" },
    name: { zh: "Philips Oneblade Shield Chair", en: "Philips Oneblade Shield Chair" },
    price: "$159.00",
    short: {
      zh: "易擦抗污餐椅，适合餐桌、儿童学习区和家庭聚餐。",
      en: "An easy-wipe dining chair for tables, study corners, and family meals."
    },
    desc: {
      zh: "Shield Chair 用一体成型椅背、可拆洗坐垫和圆润边角，降低食物污渍和日常灰尘的清理难度。",
      en: "Shield Chair uses a molded back, washable seat pad, and rounded edges to make food marks and daily dust easier to manage."
    },
    specs: [
      { zh: "一体成型易擦椅背", en: "One-piece easy-wipe backrest" },
      { zh: "可拆洗坐垫", en: "Removable washable seat pad" },
      { zh: "防滑木质椅脚", en: "Non-slip wood legs" },
      { zh: "圆角家庭友好设计", en: "Family-friendly rounded corners" }
    ]
  },
  {
    id: 7,
    image: "assets/product7-linentower.png",
    page: "product7.html",
    category: { zh: "洗衣房", en: "Laundry" },
    name: { zh: "Philips Oneblade LinenTower", en: "Philips Oneblade LinenTower" },
    price: "$399.00",
    short: {
      zh: "分拣脏衣、收纳毛巾与保持织物通风的一体式洗衣塔。",
      en: "An integrated laundry tower for sorting clothes, storing towels, and ventilating linens."
    },
    desc: {
      zh: "LinenTower 用三层抽拉布篮、顶部通风柜和窄体框架，把洗衣房里的散乱织物集中管理。",
      en: "LinenTower uses three pull-out fabric bins, an upper ventilated cabinet, and a narrow frame to organize laundry-room textiles."
    },
    specs: [
      { zh: "三只可拆洗布篮", en: "Three removable washable fabric bins" },
      { zh: "顶部通风储物柜", en: "Upper ventilated storage cabinet" },
      { zh: "窄体靠墙结构", en: "Slim wall-friendly structure" },
      { zh: "分类图标提示", en: "Category icon guidance" }
    ]
  },
  {
    id: 8,
    image: "assets/product8-tidybox.png",
    page: "product8.html",
    category: { zh: "儿童空间", en: "Kids Room" },
    name: { zh: "Philips Oneblade TidyBox", en: "Philips Oneblade TidyBox" },
    price: "$229.00",
    short: {
      zh: "封闭式玩具收纳柜，内衬可擦洗，适合家庭公共空间。",
      en: "A sealed toy storage cabinet with wipe-clean liners for shared family spaces."
    },
    desc: {
      zh: "TidyBox 以圆角柜体、滑门和可抽出收纳篮，帮助玩具、积木和毛绒物品保持整齐，也更方便清洁。",
      en: "TidyBox uses rounded corners, sliding doors, and pull-out bins to keep toys, blocks, and soft items tidy and easier to clean."
    },
    specs: [
      { zh: "圆角低重心柜体", en: "Low rounded cabinet body" },
      { zh: "可擦洗内衬", en: "Wipe-clean interior liner" },
      { zh: "滑门防尘收纳", en: "Dust-reducing sliding doors" },
      { zh: "平顺移动脚轮", en: "Smooth rolling casters" }
    ]
  }
];

const translations = {
  zh: {
    "nav.home": "首页",
    "nav.products": "产品",
    "nav.about": "关于",
    "nav.contact": "联系",
    "hero.eyebrow": "独立清洁家具品牌",
    "hero.title": "把洁净感做进家具里",
    "hero.body": "Philips Oneblade 面向现代家庭，打造可清洗、易擦拭、通风净味和整洁收纳一体化的清洁家具系列。",
    "hero.ctaProducts": "探索产品",
    "hero.ctaAbout": "品牌说明",
    "hero.note": "说明：Philips Oneblade 在本站中为独立清洁家具概念品牌，不隶属于 Philips、飞利浦或 OneBlade 个护产品线，也不销售剃须刀、刀片或个人护理产品。",
    "intro.kicker": "Clean Furniture System",
    "intro.title": "让家具主动降低清洁负担",
    "intro.body": "从客厅、卧室、餐厅到玄关与洗衣房，Philips Oneblade 用可拆洗面料、隐藏式通风结构、抗污表面和净味模块，让日常维护更轻松。",
    "products.kicker": "Featured Products",
    "products.title": "精选产品",
    "products.body": "8 款清洁家具覆盖客厅、收纳、卧室、餐厅、玄关、洗衣房与儿童空间，每款产品图均带有 Philips Oneblade 品牌标识。",
    "products.view": "查看详情",
    "about.kicker": "About Philips Oneblade",
    "about.title": "一个独立的洁净家具品牌",
    "about.body": "Philips Oneblade 的核心不是制造更多清洁工具，而是让家具本身更容易保持清爽。每件产品围绕可拆洗、易擦拭、通风防潮、净味和整洁收纳展开。",
    "about.statProducts": "款首发产品",
    "about.statIdentity": "原创家具标识",
    "about.statGrooming": "个护剃须产品",
    "contact.kicker": "Contact",
    "contact.title": "为更干净的居住体验而设计",
    "contact.body": "如需品牌合作、渠道洽谈或产品资料，请联系 Philips Oneblade 清洁家具团队。",
    "contact.cta": "联系品牌团队",
    "footer.copy": "© 2026 Philips Oneblade. Independent clean-furniture brand.",
    "footer.note": "Not affiliated with Philips, 飞利浦, or OneBlade grooming products. No razors, blades, shavers, or personal-care products are represented on this site.",
    "detail.back": "返回首页",
    "detail.overview": "产品概览",
    "detail.specs": "核心规格",
    "detail.next": "下一款产品",
    "detail.contact": "咨询产品",
    "detail.note": "独立清洁家具概念品牌，不代表 Philips、飞利浦或 OneBlade 个护产品线。"
  },
  en: {
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.eyebrow": "Independent Clean-Furniture Brand",
    "hero.title": "Clean Living, Built Into Furniture",
    "hero.body": "Philips Oneblade creates washable, easy-wipe, ventilated, odor-control, and storage-friendly furniture for modern homes.",
    "hero.ctaProducts": "Explore Products",
    "hero.ctaAbout": "About Brand",
    "hero.note": "Note: Philips Oneblade is presented here as an independent clean-furniture concept brand. It is not affiliated with Philips, 飞利浦, or OneBlade grooming products and does not sell razors, blades, shavers, or personal-care products.",
    "intro.kicker": "Clean Furniture System",
    "intro.title": "Furniture That Lowers Everyday Cleaning Effort",
    "intro.body": "From living rooms and bedrooms to dining, entryways, and laundry rooms, Philips Oneblade uses washable fabrics, hidden airflow, stain-resistant surfaces, and odor-control modules to make upkeep feel lighter.",
    "products.kicker": "Featured Products",
    "products.title": "Featured Products",
    "products.body": "Eight clean-furniture products across living rooms, storage, bedrooms, dining rooms, entryways, laundry rooms, and kids spaces. Each product image carries the Philips Oneblade brand mark.",
    "products.view": "View Details",
    "about.kicker": "About Philips Oneblade",
    "about.title": "An Independent Clean-Furniture Brand",
    "about.body": "Philips Oneblade is not about making more cleaning tools. It makes furniture itself easier to keep fresh through washable parts, wipe-clean surfaces, airflow, moisture control, odor reduction, and tidy storage.",
    "about.statProducts": "Launch products",
    "about.statIdentity": "Original furniture identity",
    "about.statGrooming": "Grooming products",
    "contact.kicker": "Contact",
    "contact.title": "Designed for Cleaner Living",
    "contact.body": "For brand partnerships, channel discussions, or product materials, contact the Philips Oneblade clean-furniture team.",
    "contact.cta": "Contact Brand Team",
    "footer.copy": "© 2026 Philips Oneblade. Independent clean-furniture brand.",
    "footer.note": "Not affiliated with Philips, 飞利浦, or OneBlade grooming products. No razors, blades, shavers, or personal-care products are represented on this site.",
    "detail.back": "Back Home",
    "detail.overview": "Overview",
    "detail.specs": "Key Specs",
    "detail.next": "Next Product",
    "detail.contact": "Ask About Product",
    "detail.note": "Independent clean-furniture concept brand. Not affiliated with Philips, 飞利浦, or OneBlade grooming products."
  }
};
