
const LANG = window.APP_LANG || 'zh';
const TEXT = {
  "zh": {
    "eyebrow": "战略投资者视角 · 更新至 2026 年 3 月 · 33 个发射节点",
    "downloadJson": "下载数据 JSON",
    "downloadCsv": "下载筛选结果 CSV",
    "metricLabel": "指标口径",
    "searchLabel": "搜索",
    "searchPlaceholder": "搜索公司、火箭、发动机、发射场",
    "regionLabel": "地区",
    "bucketLabel": "时间状态",
    "ownershipLabel": "所有制",
    "reusabilityLabel": "复用方式",
    "propellantLabel": "推进剂",
    "siteLabel": "发射场",
    "resetFilters": "重置筛选",
    "navOverview": "总览",
    "navLifecycle": "成熟度与节奏",
    "navEngineering": "发动机与发射场",
    "navExplorer": "项目与公司",
    "navMethodology": "方法与覆盖",
    "navSources": "来源",
    "overviewTitle": "大局总览",
    "overviewDesc": "先看谁在 2026 年真有现实供给，再看谁在 2030 年具备期权价值。点击图表即可联动筛选或下钻详情。",
    "regionChartTitle": "地区供给分布",
    "regionChartDesc": "点击地区柱条可联动其余视图。",
    "statusChartTitle": "时间状态分布",
    "statusChartDesc": "每个节点只属于一个时间状态桶，避免把现实供给与远期期权重复计算。",
    "companyChartTitle": "头部公司 / 平台",
    "companyChartDesc": "按公司口径聚合，便于观察资本、发射频率与车型组合。",
    "heatmapTitle": "技术路线热力图",
    "heatmapDesc": "行是复用方式，列是推进剂家族，颜色随当前指标变化。点击单元格即可筛选。",
    "bubbleTitle": "火箭位置图：单发运力 vs. 长期成本",
    "bubbleDesc": "X 轴是单发 LEO 运力，Y 轴是长期成本竞争力评分，气泡大小随当前指标变化。点击气泡可查看详细卡片。",
    "lifecycleTitle": "成熟度与发射节奏",
    "lifecycleDesc": "加入首飞时间、累计飞行次数与近期发射频率，帮助判断“能飞一次”和“能持续飞”之间的差别。",
    "timelineTitle": "首飞时间轴",
    "timelineDesc": "实心点代表已首飞，空心菱形代表公开口径下的计划首飞年份。点击节点查看详情。",
    "trendTitle": "发射频次趋势",
    "trendDesc": "默认展示当前筛选集合的年度发射次数走势；可用于判断某一篮子项目的现实节奏与未来爬坡斜率。",
    "engineeringTitle": "发动机与发射场",
    "engineeringDesc": "补上发动机、推力、比冲、发射场这些工程与执行层面的关键信息。",
    "engineTableTitle": "发动机对比表",
    "engineTableDesc": "按当前筛选项目展开。推力和比冲为公开口径或近似值，主要用于横向比较而不是精密仿真。",
    "siteMapTitle": "发射场分布视图",
    "siteMapDesc": "用经纬度散点展示当前可见项目的主要发射场。点击站点可进一步筛选。",
    "explorerTitle": "项目与公司浏览",
    "explorerDesc": "同一页里既能看节点级技术细节，也能看公司级资本与车型组合。",
    "programTableTitle": "项目浏览",
    "programTableDesc": "点击任一行打开详细卡片：技术路线、发动机、近期任务、资本信息与来源链接。",
    "companyTableTitle": "公司与资本浏览",
    "companyTableDesc": "按公司层面展示估值、融资、投资人和可支撑的火箭组合。",
    "methodologyTitle": "方法与覆盖说明",
    "methodologyDesc": "保留独占式分类逻辑，但界面里不再反复强调术语；重点是帮助快速形成大局判断。",
    "requirementsTitle": "本次版本覆盖的新增需求",
    "sourcesTitle": "来源索引",
    "sourcesDesc": "来源以型号官方页、机构/政府发布与主流财经报道为主。点链接可跳转查看。",
    "all": "全部",
    "selectedMetricTotal": "当前筛选总量",
    "topRegion": "最大地区",
    "topNode": "最大节点",
    "visibleNodes": "可见节点",
    "visibleNodesMeta": "现实供给 {live} · 远期项目 {option} · 暂停 {paused}",
    "topRegionMeta": "{value}",
    "topNodeMeta": "{company} · {value}",
    "metricSupply2026": "2026 可交付运力",
    "metricSupply2030": "2030 潜在运力",
    "metricSingle": "单发有效载荷",
    "metricSupply2026Desc": "保守口径的 2026 年现实供给",
    "metricSupply2030Desc": "2030 年基线情景的潜在供给",
    "metricSingleDesc": "单次发射的 LEO / LEO 等效运力",
    "statusCount": "节点数",
    "statusMetric": "指标总量",
    "count": "数量",
    "nodes": "个节点",
    "filterScope": "当前覆盖范围：{count} 个节点，{companies} 家公司 / 平台。",
    "tableVehicle": "火箭 / 节点",
    "tableCompany": "公司",
    "tableRegion": "地区",
    "table2026": "2026 运力",
    "table2030": "2030 运力",
    "tablePayload": "单发 LEO",
    "tableGto": "GTO",
    "tableFirstFlight": "首飞",
    "tableFlights": "累计发射",
    "tableStatus": "状态",
    "tableCost": "成本评分",
    "tableVehicles": "火箭组合",
    "tableValuation": "估值",
    "tableFunding": "融资",
    "tableEngine": "发动机",
    "tableStage": "级段",
    "tableCount": "数量",
    "tableThrust": "推力 (kN)",
    "tableIsp": "比冲 (s)",
    "tableLaunchSite": "发射场",
    "tableMission": "近期任务",
    "tableOrbit": "轨道",
    "tableDate": "日期",
    "tableSource": "来源",
    "tableLink": "链接",
    "tableCertification": "认证 / 市场准入",
    "tableRecovery": "回收方式",
    "tableTechRoute": "技术路线",
    "openDetails": "查看详情",
    "drawerProgram": "项目详情",
    "drawerCompany": "公司详情",
    "drawerOverview": "概要",
    "drawerNarrative": "战略解读",
    "drawerMissions": "近期计划任务",
    "drawerEngines": "发动机明细",
    "drawerSources": "来源链接",
    "drawerCapital": "公司资本画像",
    "drawerSites": "发射场",
    "drawerNote": "注：新增的首飞时间、累计发射、发动机、任务和发射场字段为公开信息快照；对未公开披露的项目，部分参数采用近似值。",
    "yes": "是",
    "no": "否",
    "actual": "已首飞",
    "planned": "计划",
    "none": "未披露 / 不适用",
    "sourceCount": "来源数",
    "trendActual": "历史 / 已发生",
    "trendPlanned": "基线 / 计划",
    "siteFilterActive": "当前已按发射场筛选：{site}",
    "clearSite": "清除发射场筛选",
    "companyCapitalHint": "点击公司行可查看更完整的估值、融资与投资人信息。",
    "fieldCompany": "公司",
    "fieldRegion": "地区",
    "fieldCountry": "国家 / 区域",
    "fieldOwnership": "所有制",
    "fieldHorizon": "时间状态",
    "fieldFirstFlight": "首飞时间",
    "fieldTotalFlights": "累计发射",
    "fieldLaunch2026": "2026 基线发射次数",
    "fieldLaunch2030": "2030 基线发射次数",
    "fieldSingle": "单发 LEO 运力",
    "fieldGto": "GTO 运力",
    "fieldReusability": "复用方式",
    "fieldRecovery": "回收方式",
    "fieldPropellant": "推进剂",
    "fieldArchitecture": "架构",
    "fieldCertification": "认证状态",
    "fieldConstellation": "组网能力",
    "fieldConfidence": "信息把握度",
    "fieldValuation": "估值",
    "fieldFunding": "融资",
    "fieldInvestors": "主要投资人",
    "fieldVehicles": "火箭组合",
    "fieldSources": "来源",
    "siteLegend": "站点标签：点击胶囊可筛选",
    "siteAxisX": "经度",
    "siteAxisY": "纬度",
    "timelineAxis": "年份",
    "trendAxis": "年度发射次数",
    "bubbleAxisX": "单发运力（对数尺度）",
    "bubbleAxisY": "长期成本评分",
    "programs": "项目",
    "companies": "公司",
    "sourceNode": "对应节点",
    "siteProjects": "关联项目",
    "siteMetric": "站点承载指标总量"
  },
  "en": {
    "eyebrow": "Strategic investor view · updated March 2026 · 33 launch nodes",
    "downloadJson": "Download JSON",
    "downloadCsv": "Download filtered CSV",
    "metricLabel": "Metric",
    "searchLabel": "Search",
    "searchPlaceholder": "Search company, vehicle, engine or launch site",
    "regionLabel": "Region",
    "bucketLabel": "Time status",
    "ownershipLabel": "Ownership",
    "reusabilityLabel": "Reusability",
    "propellantLabel": "Propellant",
    "siteLabel": "Launch site",
    "resetFilters": "Reset filters",
    "navOverview": "Overview",
    "navLifecycle": "Maturity & cadence",
    "navEngineering": "Engines & sites",
    "navExplorer": "Programs & companies",
    "navMethodology": "Method",
    "navSources": "Sources",
    "overviewTitle": "Big picture",
    "overviewDesc": "Start with who can really deliver launch in 2026, then compare who carries meaningful 2030 option value. Click any chart to filter or drill down.",
    "regionChartTitle": "Regional supply split",
    "regionChartDesc": "Click a region bar to focus the rest of the dashboard.",
    "statusChartTitle": "Time-status split",
    "statusChartDesc": "Each node belongs to one and only one time-status bucket, preventing double counting between live supply and future option value.",
    "companyChartTitle": "Leading companies / platforms",
    "companyChartDesc": "Aggregated at company level to combine launch capacity with capital context.",
    "heatmapTitle": "Technology route heatmap",
    "heatmapDesc": "Rows are reusability classes, columns are propellant families. Click a cell to filter.",
    "bubbleTitle": "Vehicle map: payload vs. long-run cost position",
    "bubbleDesc": "X-axis is single-launch LEO payload, Y-axis is strategic long-run cost score, and bubble size follows the selected metric.",
    "lifecycleTitle": "Maturity and launch cadence",
    "lifecycleDesc": "Adds first-flight timing, total flights and recent cadence to separate one-off demonstrations from bankable launch supply.",
    "timelineTitle": "First-flight timeline",
    "timelineDesc": "Solid circles are flown vehicles. Hollow diamonds are publicly targeted first-flight years. Click any node for details.",
    "trendTitle": "Launch cadence trend",
    "trendDesc": "By default this chart aggregates the currently visible nodes to show throughput history and near-term ramp expectations.",
    "engineeringTitle": "Engines and launch sites",
    "engineeringDesc": "Adds engines, thrust, ISP and launch-site footprint to the strategic view.",
    "engineTableTitle": "Engine comparison table",
    "engineTableDesc": "Expanded from currently visible programs. Thrust and ISP are public-data snapshots or close approximations for comparison, not simulation inputs.",
    "siteMapTitle": "Launch-site geographic view",
    "siteMapDesc": "Longitude/latitude scatter of the main launch sites tied to currently visible nodes. Click a site to filter.",
    "explorerTitle": "Program and company explorer",
    "explorerDesc": "Browse node-level technical detail and company-level capital structure in one place.",
    "programTableTitle": "Program explorer",
    "programTableDesc": "Click any row for a detailed brief: route, engines, planned missions, capital context and sources.",
    "companyTableTitle": "Company and capital explorer",
    "companyTableDesc": "Shows valuation, funding, investors and the vehicle mix each company can support.",
    "methodologyTitle": "Method and coverage",
    "methodologyDesc": "The exclusive classification logic is preserved, but the interface now foregrounds practical reading over jargon.",
    "requirementsTitle": "What this version adds",
    "sourcesTitle": "Source index",
    "sourcesDesc": "Sources lean on official vehicle pages, agency releases and major financial reporting. Click through for the exact link.",
    "all": "All",
    "selectedMetricTotal": "Selected metric total",
    "topRegion": "Top region",
    "topNode": "Top node",
    "visibleNodes": "Visible nodes",
    "visibleNodesMeta": "Live {live} · Option {option} · Paused {paused}",
    "topRegionMeta": "{value}",
    "topNodeMeta": "{company} · {value}",
    "metricSupply2026": "2026 deliverable kg",
    "metricSupply2030": "2030 potential kg",
    "metricSingle": "Single-launch kg",
    "metricSupply2026Desc": "Conservative live supply likely deliverable in 2026",
    "metricSupply2030Desc": "Base-case 2030 option value",
    "metricSingleDesc": "Single-launch LEO / LEO-equivalent payload",
    "statusCount": "Nodes",
    "statusMetric": "Metric total",
    "count": "Count",
    "nodes": "nodes",
    "filterScope": "Coverage currently visible: {count} nodes across {companies} companies / platforms.",
    "tableVehicle": "Vehicle / node",
    "tableCompany": "Company",
    "tableRegion": "Region",
    "table2026": "2026 kg",
    "table2030": "2030 kg",
    "tablePayload": "Single LEO",
    "tableGto": "GTO",
    "tableFirstFlight": "First flight",
    "tableFlights": "Total flights",
    "tableStatus": "Status",
    "tableCost": "Cost score",
    "tableVehicles": "Vehicle mix",
    "tableValuation": "Valuation",
    "tableFunding": "Funding",
    "tableEngine": "Engine",
    "tableStage": "Stage",
    "tableCount": "Count",
    "tableThrust": "Thrust (kN)",
    "tableIsp": "ISP (s)",
    "tableLaunchSite": "Launch site",
    "tableMission": "Planned mission",
    "tableOrbit": "Orbit",
    "tableDate": "Date",
    "tableSource": "Source",
    "tableLink": "Link",
    "tableCertification": "Certification / access",
    "tableRecovery": "Recovery method",
    "tableTechRoute": "Technical route",
    "openDetails": "Open details",
    "drawerProgram": "Program detail",
    "drawerCompany": "Company detail",
    "drawerOverview": "Overview",
    "drawerNarrative": "Strategic reading",
    "drawerMissions": "Planned missions",
    "drawerEngines": "Engine detail",
    "drawerSources": "Sources",
    "drawerCapital": "Capital profile",
    "drawerSites": "Launch sites",
    "drawerNote": "Note: first-flight timing, flight counts, engines, planned missions and launch-site fields are public-data snapshots as of March 2026; some emerging programs use approximations where disclosure is limited.",
    "yes": "Yes",
    "no": "No",
    "actual": "Flown",
    "planned": "Planned",
    "none": "Not disclosed / n.a.",
    "sourceCount": "Source count",
    "trendActual": "Historical / flown",
    "trendPlanned": "Base case / planned",
    "siteFilterActive": "Currently filtered by launch site: {site}",
    "clearSite": "Clear launch-site filter",
    "companyCapitalHint": "Click a company row for fuller valuation, funding and investor detail.",
    "fieldCompany": "Company",
    "fieldRegion": "Region",
    "fieldCountry": "Country / area",
    "fieldOwnership": "Ownership",
    "fieldHorizon": "Time status",
    "fieldFirstFlight": "First flight",
    "fieldTotalFlights": "Total flights",
    "fieldLaunch2026": "2026 base flights",
    "fieldLaunch2030": "2030 base flights",
    "fieldSingle": "Single-launch LEO",
    "fieldGto": "GTO payload",
    "fieldReusability": "Reusability",
    "fieldRecovery": "Recovery",
    "fieldPropellant": "Propellant",
    "fieldArchitecture": "Architecture",
    "fieldCertification": "Certification",
    "fieldConstellation": "Constellation capable",
    "fieldConfidence": "Confidence",
    "fieldValuation": "Valuation",
    "fieldFunding": "Funding",
    "fieldInvestors": "Investors",
    "fieldVehicles": "Vehicles",
    "fieldSources": "Sources",
    "siteLegend": "Site tags: click to filter",
    "siteAxisX": "Longitude",
    "siteAxisY": "Latitude",
    "timelineAxis": "Year",
    "trendAxis": "Launches per year",
    "bubbleAxisX": "Single-launch payload (log scale)",
    "bubbleAxisY": "Long-run cost score",
    "programs": "Programs",
    "companies": "Companies",
    "sourceNode": "Node",
    "siteProjects": "Linked programs",
    "siteMetric": "Metric total at site"
  }
};
const ENUMS = {
  "region": {
    "US": {
      "zh": "美国",
      "en": "U.S."
    },
    "Europe": {
      "zh": "欧洲",
      "en": "Europe"
    },
    "China": {
      "zh": "中国",
      "en": "China"
    }
  },
  "horizon_bucket": {
    "Live 2026 supply": {
      "zh": "现实供给（2026）",
      "en": "Live 2026 supply"
    },
    "2027-2030 option": {
      "zh": "远期期权（2027-2030）",
      "en": "2027-2030 option"
    },
    "Distressed / paused": {
      "zh": "暂停 / 受挫",
      "en": "Distressed / paused"
    }
  },
  "ownership_class": {
    "Private company": {
      "zh": "民营公司",
      "en": "Private company"
    },
    "Public company": {
      "zh": "上市公司",
      "en": "Public company"
    },
    "Industrial JV / incumbent": {
      "zh": "工业合资 / 传统主承包",
      "en": "Industrial JV / incumbent"
    },
    "State system": {
      "zh": "国家体系",
      "en": "State system"
    },
    "State-backed commercial": {
      "zh": "国资 / 体系支持商业平台",
      "en": "State-backed commercial"
    }
  },
  "reusability_class": {
    "Full reusable": {
      "zh": "全复用",
      "en": "Full reusable"
    },
    "Partial reusable": {
      "zh": "一级 / 部分复用",
      "en": "Partial reusable"
    },
    "Expendable": {
      "zh": "一次性",
      "en": "Expendable"
    }
  },
  "propellant_class": {
    "Methane/LOX": {
      "zh": "甲烷 / 液氧",
      "en": "Methane / LOX"
    },
    "Kerosene/LOX": {
      "zh": "煤油 / 液氧",
      "en": "Kerosene / LOX"
    },
    "Mixed cryogenic": {
      "zh": "混合低温",
      "en": "Mixed cryogenic"
    },
    "Solid": {
      "zh": "固体",
      "en": "Solid"
    }
  },
  "maturity_class": {
    "Mature service": {
      "zh": "成熟运营",
      "en": "Mature service"
    },
    "Early operations": {
      "zh": "早期运营",
      "en": "Early operations"
    },
    "Operational / scaling": {
      "zh": "已运营 / 扩张中",
      "en": "Operational / scaling"
    },
    "Operational / ramping": {
      "zh": "已运营 / 爬坡中",
      "en": "Operational / ramping"
    },
    "Operational": {
      "zh": "已运营",
      "en": "Operational"
    },
    "Development / pre-scale": {
      "zh": "研发 / 首飞前",
      "en": "Development / pre-scale"
    },
    "Distressed / paused": {
      "zh": "暂停 / 受挫",
      "en": "Distressed / paused"
    },
    "Pilot / demonstration": {
      "zh": "试验 / 验证",
      "en": "Pilot / demonstration"
    }
  },
  "confidence": {
    "High": {
      "zh": "高",
      "en": "High"
    },
    "Medium": {
      "zh": "中",
      "en": "Medium"
    },
    "Low": {
      "zh": "低",
      "en": "Low"
    }
  }
};
const REGION_COLORS = {
  US: '#7cc7ff',
  Europe: '#60e1c2',
  China: '#f5c66d'
};
const METRICS = {
  supply_2026_kg: {
    label: { zh: TEXT.zh.metricSupply2026, en: TEXT.en.metricSupply2026 },
    desc: { zh: TEXT.zh.metricSupply2026Desc, en: TEXT.en.metricSupply2026Desc }
  },
  supply_2030_kg: {
    label: { zh: TEXT.zh.metricSupply2030, en: TEXT.en.metricSupply2030 },
    desc: { zh: TEXT.zh.metricSupply2030Desc, en: TEXT.en.metricSupply2030Desc }
  },
  single_launch_kg: {
    label: { zh: TEXT.zh.metricSingle, en: TEXT.en.metricSingle },
    desc: { zh: TEXT.zh.metricSingleDesc, en: TEXT.en.metricSingleDesc }
  }
};

let DATA = null;
let state = {
  metric: 'supply_2026_kg',
  search: '',
  region: 'All',
  bucket: 'All',
  ownership: 'All',
  reusability: 'All',
  propellant: 'All',
  site: 'All',
  drawer: null
};

document.addEventListener('DOMContentLoaded', init);

async function init() {
  const bootstrapNode = document.getElementById('bootstrap-data');
  if (bootstrapNode && bootstrapNode.textContent && window.location.protocol === 'file:') {
    DATA = JSON.parse(bootstrapNode.textContent);
  } else {
    try {
      DATA = await fetch('data/rocket_market_map_2026_2030_v2.json').then(r => {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      });
    } catch (err) {
      if (bootstrapNode && bootstrapNode.textContent) {
        DATA = JSON.parse(bootstrapNode.textContent);
      } else {
        throw err;
      }
    }
  }
  bindStaticActions();
  renderText();
  initFilters();
  rerender();
}

function t(key) {
  return (TEXT[LANG] && TEXT[LANG][key]) || key;
}

function format(template, vars) {
  return String(template).replace(/\{(.*?)\}/g, (_, k) => vars[k] ?? '');
}

function enumLabel(kind, value) {
  if (value == null) return t('none');
  if (value === 'All') return t('all');
  return (ENUMS[kind] && ENUMS[kind][value] && ENUMS[kind][value][LANG]) || value;
}

function titleMeta() {
  return LANG === 'zh' ? DATA.meta.titleZh : DATA.meta.title;
}
function subtitleMeta() {
  return LANG === 'zh' ? DATA.meta.subtitleZh : DATA.meta.subtitle;
}
function scopeMeta() {
  return LANG === 'zh' ? DATA.meta.scopeNoteZh : DATA.meta.scopeNote;
}
function insightsMeta() {
  return LANG === 'zh' ? DATA.meta.insightsZh : DATA.meta.insights;
}
function methodMeta() {
  return LANG === 'zh' ? DATA.meta.methodologyZh : DATA.meta.methodology;
}
function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;', "'":'&#39;'}[s]));
}
function colorForRegion(region) {
  return REGION_COLORS[region] || '#a5b4fc';
}
function formatMass(v) {
  if (v == null || v === '') return t('none');
  const num = Number(v);
  if (!Number.isFinite(num)) return String(v);
  if (Math.abs(num) >= 1_000_000) return (num / 1_000_000).toFixed(2).replace(/\.00$/, '').replace(/0$/, '') + 'M kg';
  if (Math.abs(num) >= 1000) return (num / 1000).toFixed(num >= 10000 ? 0 : 1).replace(/\.0$/, '') + 't';
  return num.toLocaleString() + ' kg';
}
function formatInt(v) {
  if (v == null || v === '') return t('none');
  const num = Number(v);
  if (!Number.isFinite(num)) return String(v);
  return num.toLocaleString();
}
function formatYear(node) {
  if (!node.firstFlightYear) return t('none');
  const suffix = node.firstFlightStatus === 'planned' ? (LANG === 'zh' ? '（计划）' : ' (planned)') : '';
  return node.firstFlightYear + suffix;
}
function metricValue(obj) {
  return Number(obj[state.metric]) || 0;
}
function displayVehicleMain(node) {
  if (LANG === 'zh') return node.vehicleZh || node.vehicle;
  return node.vehicle;
}
function displayVehicleSub(node) {
  if (LANG === 'zh') return node.vehicleZh && node.vehicleZh !== node.vehicle ? node.vehicle : '';
  return '';
}
function displayCompanyMain(obj) {
  if (LANG === 'zh') return obj.companyZh || obj.company;
  return obj.company;
}
function displayCompanySub(obj) {
  if (LANG === 'zh') return obj.companyZh && obj.companyZh !== obj.company ? obj.company : '';
  return '';
}
function displayRegion(region) {
  return enumLabel('region', region);
}
function displayBoolean(v) {
  return v ? t('yes') : t('no');
}
function uniqueSorted(values) {
  const arr = Array.from(new Set(values.filter(v => v != null && v !== '')));
  arr.sort((a,b) => String(a).localeCompare(String(b)));
  return ['All', ...arr];
}
function searchMatch(node) {
  if (!state.search) return true;
  const q = state.search.toLowerCase();
  const hay = [
    node.company, node.companyZh, node.vehicle, node.vehicleZh, node.region, node.country,
    node.propellant_class, node.reusability_class, node.horizon_bucket, node.techRoute, node.techRouteEn,
    ...(node.launchSites || []),
    ...(node.engines || []).map(e => e.name),
    ...(node.plannedMissions || []).map(m => (m.mission || '') + ' ' + (m.missionEn || ''))
  ].join(' ').toLowerCase();
  return hay.includes(q);
}
function filteredNodes() {
  return DATA.nodes.filter(node =>
    searchMatch(node) &&
    (state.region === 'All' || node.region === state.region) &&
    (state.bucket === 'All' || node.horizon_bucket === state.bucket) &&
    (state.ownership === 'All' || node.ownership_class === state.ownership) &&
    (state.reusability === 'All' || node.reusability_class === state.reusability) &&
    (state.propellant === 'All' || node.propellant_class === state.propellant) &&
    (state.site === 'All' || (node.launchSites || []).includes(state.site))
  );
}
function companyAggMap(nodes) {
  const map = new Map();
  nodes.forEach(node => {
    const key = node.region + '::' + node.company;
    if (!map.has(key)) {
      map.set(key, {
        region: node.region,
        company: node.company,
        companyZh: node.companyZh,
        vehicles: [],
        supply_2026_kg: 0,
        supply_2030_kg: 0,
        maxCost: 0,
        nodes: []
      });
    }
    const row = map.get(key);
    row.vehicles.push(node.vehicle);
    row.supply_2026_kg += Number(node.supply_2026_kg) || 0;
    row.supply_2030_kg += Number(node.supply_2030_kg) || 0;
    row.maxCost = Math.max(row.maxCost, Number(node.cost_score) || 0);
    row.nodes.push(node);
  });
  return map;
}
function visibleCompanies() {
  const map = companyAggMap(filteredNodes());
  return DATA.companies
    .filter(c => map.has(c.region + '::' + c.company))
    .map(c => Object.assign({}, c, map.get(c.region + '::' + c.company)))
    .sort((a,b) => (Number(b[state.metric]) || 0) - (Number(a[state.metric]) || 0));
}
function companyRecordFromNode(node) {
  return DATA.companies.find(c => c.region === node.region && c.company === node.company);
}
function nodeById(id) {
  return DATA.nodes.find(n => n.id === id);
}
function bindStaticActions() {
  document.getElementById('searchInput').addEventListener('input', e => {
    state.search = e.target.value.trim();
    rerender();
  });
  document.getElementById('resetFiltersBtn').addEventListener('click', () => {
    state = Object.assign(state, {
      metric: 'supply_2026_kg',
      search: '',
      region: 'All',
      bucket: 'All',
      ownership: 'All',
      reusability: 'All',
      propellant: 'All',
      site: 'All'
    });
    syncControls();
    rerender();
  });
  document.getElementById('downloadJsonBtn').addEventListener('click', downloadJson);
  document.getElementById('downloadCsvBtn').addEventListener('click', downloadCsv);
  document.getElementById('drawerBackdrop').addEventListener('click', closeDrawer);
  document.getElementById('drawerClose').addEventListener('click', closeDrawer);
}
function renderText() {
  const pairs = [
    ['eyebrow', 'eyebrow'], ['pageTitle', null], ['pageSubtitle', null], ['downloadJsonBtn','downloadJson'], ['downloadCsvBtn','downloadCsv'],
    ['metricLabel','metricLabel'], ['searchLabel','searchLabel'], ['regionLabel','regionLabel'], ['bucketLabel','bucketLabel'],
    ['ownershipLabel','ownershipLabel'], ['reusabilityLabel','reusabilityLabel'], ['propellantLabel','propellantLabel'], ['siteLabel','siteLabel'],
    ['resetFiltersBtn','resetFilters'], ['navOverview','navOverview'], ['navLifecycle','navLifecycle'], ['navEngineering','navEngineering'],
    ['navExplorer','navExplorer'], ['navMethodology','navMethodology'], ['navSources','navSources'],
    ['overviewTitle','overviewTitle'], ['overviewDesc','overviewDesc'], ['regionChartTitle','regionChartTitle'], ['regionChartDesc','regionChartDesc'],
    ['statusChartTitle','statusChartTitle'], ['statusChartDesc','statusChartDesc'], ['companyChartTitle','companyChartTitle'],
    ['companyChartDesc','companyChartDesc'], ['heatmapTitle','heatmapTitle'], ['heatmapDesc','heatmapDesc'],
    ['bubbleTitle','bubbleTitle'], ['bubbleDesc','bubbleDesc'], ['lifecycleTitle','lifecycleTitle'], ['lifecycleDesc','lifecycleDesc'],
    ['timelineTitle','timelineTitle'], ['timelineDesc','timelineDesc'], ['trendTitle','trendTitle'], ['trendDesc','trendDesc'],
    ['engineeringTitle','engineeringTitle'], ['engineeringDesc','engineeringDesc'], ['engineTableTitle','engineTableTitle'],
    ['engineTableDesc','engineTableDesc'], ['siteMapTitle','siteMapTitle'], ['siteMapDesc','siteMapDesc'],
    ['explorerTitle','explorerTitle'], ['explorerDesc','explorerDesc'], ['programTableTitle','programTableTitle'],
    ['programTableDesc','programTableDesc'], ['companyTableTitle','companyTableTitle'], ['companyTableDesc','companyTableDesc'],
    ['methodologyTitle','methodologyTitle'], ['methodologyDesc','methodologyDesc'], ['requirementsTitle','requirementsTitle'],
    ['sourcesTitle','sourcesTitle'], ['sourcesDesc','sourcesDesc']
  ];
  document.getElementById('eyebrow').textContent = t('eyebrow');
  document.getElementById('pageTitle').textContent = titleMeta();
  document.getElementById('pageSubtitle').textContent = subtitleMeta();
  document.getElementById('downloadJsonBtn').textContent = t('downloadJson');
  document.getElementById('downloadCsvBtn').textContent = t('downloadCsv');
  document.getElementById('searchInput').placeholder = t('searchPlaceholder');
  pairs.forEach(([id, key]) => {
    if (!key) return;
    const el = document.getElementById(id);
    if (el) el.textContent = t(key);
  });
}
function initFilters() {
  populateSelect('regionFilter', uniqueSorted(DATA.nodes.map(n => n.region)), state.region, 'region');
  populateSelect('bucketFilter', uniqueSorted(DATA.nodes.map(n => n.horizon_bucket)), state.bucket, 'horizon_bucket');
  populateSelect('ownershipFilter', uniqueSorted(DATA.nodes.map(n => n.ownership_class)), state.ownership, 'ownership_class');
  populateSelect('reusabilityFilter', uniqueSorted(DATA.nodes.map(n => n.reusability_class)), state.reusability, 'reusability_class');
  populateSelect('propellantFilter', uniqueSorted(DATA.nodes.map(n => n.propellant_class)), state.propellant, 'propellant_class');
  populateSelect('siteFilter', uniqueSorted(DATA.nodes.flatMap(n => n.launchSites || [])), state.site, null);
  document.getElementById('regionFilter').addEventListener('change', e => { state.region = e.target.value; rerender(); });
  document.getElementById('bucketFilter').addEventListener('change', e => { state.bucket = e.target.value; rerender(); });
  document.getElementById('ownershipFilter').addEventListener('change', e => { state.ownership = e.target.value; rerender(); });
  document.getElementById('reusabilityFilter').addEventListener('change', e => { state.reusability = e.target.value; rerender(); });
  document.getElementById('propellantFilter').addEventListener('change', e => { state.propellant = e.target.value; rerender(); });
  document.getElementById('siteFilter').addEventListener('change', e => { state.site = e.target.value; rerender(); });
  renderMetricSwitch();
}
function populateSelect(id, options, current, enumKind) {
  const el = document.getElementById(id);
  el.innerHTML = options.map(v => {
    const label = enumKind ? enumLabel(enumKind, v) : (v === 'All' ? t('all') : v);
    return `<option value="${escapeHtml(v)}" ${v === current ? 'selected' : ''}>${escapeHtml(label)}</option>`;
  }).join('');
}
function syncControls() {
  document.getElementById('searchInput').value = state.search;
  document.getElementById('regionFilter').value = state.region;
  document.getElementById('bucketFilter').value = state.bucket;
  document.getElementById('ownershipFilter').value = state.ownership;
  document.getElementById('reusabilityFilter').value = state.reusability;
  document.getElementById('propellantFilter').value = state.propellant;
  document.getElementById('siteFilter').value = state.site;
  renderMetricSwitch();
}
function renderMetricSwitch() {
  const wrap = document.getElementById('metricSwitch');
  wrap.innerHTML = Object.entries(METRICS).map(([key, meta]) =>
    `<button class="metric-btn ${state.metric === key ? 'active' : ''}" data-metric="${key}">${escapeHtml(meta.label[LANG])}</button>`
  ).join('');
  wrap.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
    state.metric = btn.dataset.metric;
    rerender();
  }));
}
function rerender() {
  document.getElementById('scopeNote').textContent = scopeMeta();
  syncControls();
  renderHeroChips();
  renderHeroKpis();
  renderInsights();
  renderRegionBars();
  renderStatusGrid();
  renderCompanyBars();
  renderHeatmap();
  renderBubbleChart();
  renderTimeline();
  renderTrendChart();
  renderEngineTable();
  renderSiteMap();
  renderProgramTable();
  renderCompanyTable();
  renderMethodology();
  renderSourceTable();
  renderDrawer();
}
function renderHeroChips() {
  const visibleNodes = filteredNodes();
  const companies = visibleCompanies();
  const chips = [
    format(t('filterScope'), { count: visibleNodes.length, companies: companies.length }),
    METRICS[state.metric].desc[LANG],
    state.site !== 'All' ? format(t('siteFilterActive'), { site: state.site }) : null
  ].filter(Boolean);
  document.getElementById('heroChips').innerHTML = chips.map(c => `<span class="hero-chip">${escapeHtml(c)}</span>`).join('');
}
function renderHeroKpis() {
  const arr = filteredNodes();
  const total = arr.reduce((a,b) => a + metricValue(b), 0);
  const live = arr.filter(n => n.horizon_bucket === 'Live 2026 supply').length;
  const option = arr.filter(n => n.horizon_bucket === '2027-2030 option').length;
  const paused = arr.filter(n => n.horizon_bucket === 'Distressed / paused').length;
  const topNode = [...arr].sort((a,b) => metricValue(b) - metricValue(a))[0];
  const regions = ['US','Europe','China'].map(region => ({ region, total: arr.filter(n => n.region === region).reduce((a,b) => a + metricValue(b), 0) })).sort((a,b)=>b.total-a.total);
  const topRegion = regions[0];
  const cards = [
    { label: t('selectedMetricTotal'), value: formatMass(total), meta: METRICS[state.metric].desc[LANG] },
    { label: t('topRegion'), value: topRegion ? displayRegion(topRegion.region) : '—', meta: topRegion ? format(t('topRegionMeta'), { value: formatMass(topRegion.total) }) : '—' },
    { label: t('topNode'), value: topNode ? displayVehicleMain(topNode) : '—', meta: topNode ? format(t('topNodeMeta'), { company: displayCompanyMain(topNode), value: formatMass(metricValue(topNode)) }) : '—' },
    { label: t('visibleNodes'), value: String(arr.length), meta: format(t('visibleNodesMeta'), { live, option, paused }) }
  ];
  document.getElementById('heroKpis').innerHTML = cards.map(card => `
    <div class="kpi">
      <div class="label">${escapeHtml(card.label)}</div>
      <div class="value">${escapeHtml(card.value)}</div>
      <div class="delta">${escapeHtml(card.meta)}</div>
    </div>`).join('');
}
function renderInsights() {
  document.getElementById('insightGrid').innerHTML = insightsMeta().map(item => `
    <div class="insight">
      <h4>${escapeHtml(item.title)}</h4>
      <p>${escapeHtml(item.body)}</p>
    </div>`).join('');
}
function renderRegionBars() {
  const arr = filteredNodes();
  const rows = ['US','Europe','China'].map(region => {
    const subset = arr.filter(n => n.region === region);
    return { region, total: subset.reduce((a,b) => a + metricValue(b), 0) };
  }).sort((a,b)=>b.total-a.total);
  const max = Math.max(...rows.map(r => r.total), 1);
  const wrap = document.getElementById('regionBars');
  wrap.innerHTML = rows.map(r => `
    <div class="bar-row ${state.region === r.region ? 'active' : ''}" data-region="${r.region}">
      <div class="bar-label">${escapeHtml(displayRegion(r.region))}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${(r.total / max) * 100}%; background:${colorForRegion(r.region)}"></div></div>
      <div class="bar-value">${escapeHtml(formatMass(r.total))}</div>
    </div>`).join('');
  wrap.querySelectorAll('.bar-row').forEach(el => el.addEventListener('click', () => {
    state.region = state.region === el.dataset.region ? 'All' : el.dataset.region;
    rerender();
  }));
}
function renderStatusGrid() {
  const arr = filteredNodes();
  const buckets = ['Live 2026 supply', '2027-2030 option', 'Distressed / paused'];
  const wrap = document.getElementById('statusGrid');
  wrap.innerHTML = buckets.map(bucket => {
    const subset = arr.filter(n => n.horizon_bucket === bucket);
    const total = subset.reduce((a,b) => a + metricValue(b), 0);
    return `
      <div class="status-card ${state.bucket === bucket ? 'active' : ''}" data-bucket="${bucket}">
        <div class="status-title">${escapeHtml(enumLabel('horizon_bucket', bucket))}</div>
        <div class="status-value">${escapeHtml(formatMass(total))}</div>
        <div class="status-meta">${escapeHtml(t('statusCount'))}: ${subset.length} · ${escapeHtml(t('statusMetric'))}</div>
      </div>`;
  }).join('');
  wrap.querySelectorAll('.status-card').forEach(el => el.addEventListener('click', () => {
    state.bucket = state.bucket === el.dataset.bucket ? 'All' : el.dataset.bucket;
    rerender();
  }));
}
function renderCompanyBars() {
  const companies = visibleCompanies().slice(0, 8);
  const max = Math.max(...companies.map(c => Number(c[state.metric]) || 0), 1);
  const wrap = document.getElementById('companyBars');
  wrap.innerHTML = companies.map(c => {
    const total = Number(c[state.metric]) || 0;
    return `
      <div class="bar-row row-clickable" data-company="${escapeHtml(c.company)}" data-region="${c.region}">
        <div class="bar-label">
          <span class="cell-main">${escapeHtml(displayCompanyMain(c))}</span>
          ${displayCompanySub(c) ? `<span class="cell-sub">${escapeHtml(displayCompanySub(c))}</span>` : ''}
        </div>
        <div class="bar-track"><div class="bar-fill" style="width:${(total / max) * 100}%; background:${colorForRegion(c.region)}"></div></div>
        <div class="bar-value">${escapeHtml(formatMass(total))}</div>
      </div>`;
  }).join('');
  wrap.querySelectorAll('.bar-row').forEach(el => el.addEventListener('click', () => {
    state.drawer = { type: 'company', key: el.dataset.region + '::' + el.dataset.company };
    renderDrawer();
  }));
}
function renderHeatmap() {
  const arr = filteredNodes();
  const rows = uniqueSorted(DATA.nodes.map(n => n.reusability_class)).filter(v => v !== 'All');
  const cols = uniqueSorted(DATA.nodes.map(n => n.propellant_class)).filter(v => v !== 'All');
  const values = [];
  rows.forEach(r => cols.forEach(c => {
    const total = arr.filter(n => n.reusability_class === r && n.propellant_class === c).reduce((a,b) => a + metricValue(b), 0);
    values.push(total);
  }));
  const max = Math.max(...values, 1);
  const wrap = document.getElementById('heatmap');
  const header = `<div class="heatmap-row">${['', ...cols.map(c => `<div class="heatmap-label">${escapeHtml(enumLabel('propellant_class', c))}</div>`)].join('')}</div>`;
  const body = rows.map(r => `<div class="heatmap-row">
      <div class="heatmap-label">${escapeHtml(enumLabel('reusability_class', r))}</div>
      ${cols.map(c => {
        const subset = arr.filter(n => n.reusability_class === r && n.propellant_class === c);
        const total = subset.reduce((a,b) => a + metricValue(b), 0);
        const alpha = 0.10 + (total / max) * 0.55;
        return `<div class="heatmap-cell" data-r="${escapeHtml(r)}" data-c="${escapeHtml(c)}" style="background:rgba(124,199,255,${alpha.toFixed(3)})">
            <strong>${escapeHtml(formatMass(total))}</strong>
            <span>${subset.length} ${escapeHtml(t('nodes'))}</span>
          </div>`;
      }).join('')}
    </div>`).join('');
  wrap.innerHTML = header + body;
  wrap.querySelectorAll('.heatmap-cell').forEach(el => el.addEventListener('click', () => {
    state.reusability = state.reusability === el.dataset.r ? 'All' : el.dataset.r;
    state.propellant = state.propellant === el.dataset.c ? 'All' : el.dataset.c;
    rerender();
  }));
}
function renderBubbleChart() {
  const arr = filteredNodes().filter(n => Number(n.single_launch_kg) > 0);
  const wrap = document.getElementById('bubbleChart');
  if (!arr.length) {
    wrap.innerHTML = '';
    return;
  }
  const width = 980, height = 420;
  const m = { left: 70, right: 30, top: 20, bottom: 56 };
  const plotW = width - m.left - m.right;
  const plotH = height - m.top - m.bottom;
  const xVals = arr.map(n => Math.log10(Math.max(1, Number(n.single_launch_kg))));
  const minX = Math.min(...xVals, 1.7);
  const maxX = Math.max(...xVals, 5.2);
  const maxMetric = Math.max(...arr.map(n => metricValue(n)), 1);
  const x = v => m.left + ((Math.log10(Math.max(1, v)) - minX) / (maxX - minX || 1)) * plotW;
  const y = v => m.top + (1 - (v / 10)) * plotH;
  const r = v => 6 + Math.sqrt(v / maxMetric) * 28;
  const gridX = [100, 300, 1000, 3000, 10000, 30000, 100000].filter(v => v >= Math.pow(10, minX) && v <= Math.pow(10, maxX));
  const gridY = [2,4,6,8,10];
  const svg = [];
  svg.push(`<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="bubble chart">`);
  gridY.forEach(val => svg.push(`<line class="grid-line" x1="${m.left}" x2="${width-m.right}" y1="${y(val)}" y2="${y(val)}" />`));
  gridX.forEach(val => svg.push(`<line class="grid-line" y1="${m.top}" y2="${height-m.bottom}" x1="${x(val)}" x2="${x(val)}" />`));
  svg.push(`<line class="grid-line" x1="${m.left}" x2="${width-m.right}" y1="${height-m.bottom}" y2="${height-m.bottom}" />`);
  svg.push(`<line class="grid-line" y1="${m.top}" y2="${height-m.bottom}" x1="${m.left}" x2="${m.left}" />`);
  gridX.forEach(val => svg.push(`<text class="axis" x="${x(val)}" y="${height-24}" text-anchor="middle">${escapeHtml(formatMass(val))}</text>`));
  gridY.forEach(val => svg.push(`<text class="axis" x="${m.left-12}" y="${y(val)+4}" text-anchor="end">${val}</text>`));
  svg.push(`<text class="axis-label" x="${width/2}" y="${height-6}" text-anchor="middle">${escapeHtml(t('bubbleAxisX'))}</text>`);
  svg.push(`<text class="axis-label" transform="translate(18 ${height/2}) rotate(-90)" text-anchor="middle">${escapeHtml(t('bubbleAxisY'))}</text>`);
  arr.forEach(n => {
    const cx = x(Number(n.single_launch_kg));
    const cy = y(Number(n.cost_score));
    const radius = r(metricValue(n));
    svg.push(`<g class="plot-point" data-id="${escapeHtml(n.id)}" tabindex="0">
      <circle cx="${cx}" cy="${cy}" r="${radius}" fill="${colorForRegion(n.region)}" fill-opacity="0.35" stroke="${colorForRegion(n.region)}" stroke-width="2"></circle>
      <title>${escapeHtml(displayVehicleMain(n))} | ${escapeHtml(displayCompanyMain(n))}</title>
    </g>`);
  });
  [...arr].sort((a,b) => metricValue(b) - metricValue(a)).slice(0, 10).forEach(n => {
    svg.push(`<text x="${x(Number(n.single_launch_kg))+10}" y="${y(Number(n.cost_score))-10}" fill="#dbe7ff" font-size="12">${escapeHtml(displayVehicleMain(n))}</text>`);
  });
  svg.push(`</svg>`);
  wrap.innerHTML = svg.join('') + `<div class="legend-row">
      <span class="legend-dot"><i style="background:${colorForRegion('US')}"></i>${escapeHtml(displayRegion('US'))}</span>
      <span class="legend-dot"><i style="background:${colorForRegion('Europe')}"></i>${escapeHtml(displayRegion('Europe'))}</span>
      <span class="legend-dot"><i style="background:${colorForRegion('China')}"></i>${escapeHtml(displayRegion('China'))}</span>
    </div>`;
  wrap.querySelectorAll('.plot-point').forEach(el => {
    el.addEventListener('click', () => openNodeById(el.dataset.id));
    el.addEventListener('keypress', e => { if (e.key === 'Enter') openNodeById(el.dataset.id); });
  });
}
function renderTimeline() {
  const arr = filteredNodes().slice().sort((a,b) => (a.firstFlightYear || 9999) - (b.firstFlightYear || 9999));
  const wrap = document.getElementById('timelineChart');
  const width = 980, height = 360;
  const m = { left: 70, right: 20, top: 24, bottom: 54 };
  const plotW = width - m.left - m.right;
  const plotH = height - m.top - m.bottom;
  const years = arr.map(n => n.firstFlightYear).filter(Boolean);
  if (!years.length) { wrap.innerHTML = ''; return; }
  const minYear = Math.min(...years, 2010);
  const maxYear = Math.max(...years, 2027);
  const x = v => m.left + ((v - minYear) / (maxYear - minYear || 1)) * plotW;
  const lanes = ['US','Europe','China'];
  const laneGap = plotH / Math.max(lanes.length - 1, 1);
  const y = region => m.top + lanes.indexOf(region) * laneGap;
  const svg = [];
  svg.push(`<svg viewBox="0 0 ${width} ${height}">`);
  lanes.forEach(region => {
    svg.push(`<line class="grid-line" x1="${m.left}" x2="${width-m.right}" y1="${y(region)}" y2="${y(region)}" />`);
    svg.push(`<text class="axis" x="${m.left-12}" y="${y(region)+4}" text-anchor="end">${escapeHtml(displayRegion(region))}</text>`);
  });
  for (let yr = minYear; yr <= maxYear; yr++) {
    const xx = x(yr);
    svg.push(`<line class="grid-line" x1="${xx}" x2="${xx}" y1="${m.top-8}" y2="${height-m.bottom+8}" />`);
    svg.push(`<text class="axis" x="${xx}" y="${height-22}" text-anchor="middle">${yr}</text>`);
  }
  svg.push(`<text class="axis-label" x="${width/2}" y="${height-4}" text-anchor="middle">${escapeHtml(t('timelineAxis'))}</text>`);
  arr.forEach(n => {
    const xx = x(n.firstFlightYear || maxYear);
    const yy = y(n.region);
    const color = colorForRegion(n.region);
    if (n.firstFlightStatus === 'planned') {
      const size = 9;
      svg.push(`<g class="plot-point" data-id="${escapeHtml(n.id)}" tabindex="0">
        <polygon points="${xx},${yy-size} ${xx+size},${yy} ${xx},${yy+size} ${xx-size},${yy}" fill="none" stroke="${color}" stroke-width="2"></polygon>
        <title>${escapeHtml(displayVehicleMain(n))} | ${escapeHtml(formatYear(n))}</title>
      </g>`);
    } else {
      svg.push(`<g class="plot-point" data-id="${escapeHtml(n.id)}" tabindex="0">
        <circle cx="${xx}" cy="${yy}" r="7.5" fill="${color}" stroke="#fff" stroke-width="1.4"></circle>
        <title>${escapeHtml(displayVehicleMain(n))} | ${escapeHtml(formatYear(n))}</title>
      </g>`);
    }
  });
  [...arr].filter(n => metricValue(n) > 0).sort((a,b) => metricValue(b) - metricValue(a)).slice(0, 9).forEach(n => {
    svg.push(`<text x="${x(n.firstFlightYear || maxYear)+10}" y="${y(n.region)-12}" fill="#dbe7ff" font-size="12">${escapeHtml(displayVehicleMain(n))}</text>`);
  });
  svg.push(`</svg>`);
  wrap.innerHTML = svg.join('');
  wrap.querySelectorAll('.plot-point').forEach(el => {
    el.addEventListener('click', () => openNodeById(el.dataset.id));
    el.addEventListener('keypress', e => { if (e.key === 'Enter') openNodeById(el.dataset.id); });
  });
}
function aggregateTrend(nodes) {
  const map = new Map();
  nodes.forEach(n => {
    const hist = n.launchHistory || {};
    Object.entries(hist).forEach(([year, value]) => {
      map.set(year, (map.get(year) || 0) + (Number(value) || 0));
    });
  });
  return Array.from(map.entries()).map(([year, value]) => ({
    year,
    value,
    future: String(year).includes('e'),
    sortKey: Number(String(year).replace('e', ''))
  })).sort((a,b) => a.sortKey - b.sortKey);
}
function renderTrendChart() {
  const series = aggregateTrend(filteredNodes());
  const wrap = document.getElementById('trendChart');
  if (!series.length) { wrap.innerHTML = ''; return; }
  const width = 980, height = 360;
  const m = { left: 68, right: 24, top: 24, bottom: 54 };
  const plotW = width - m.left - m.right;
  const plotH = height - m.top - m.bottom;
  const maxY = Math.max(...series.map(d => d.value), 1);
  const x = idx => m.left + (idx / Math.max(series.length - 1, 1)) * plotW;
  const y = val => m.top + (1 - val / maxY) * plotH;
  const actual = series.filter(d => !d.future);
  const planned = series.filter(d => d.future);
  const actualPath = actual.map((d,i) => `${i===0?'M':'L'}${x(series.indexOf(d))},${y(d.value)}`).join(' ');
  const plannedPath = planned.map((d,i) => `${i===0?'M':'L'}${x(series.indexOf(d))},${y(d.value)}`).join(' ');
  const svg = [];
  svg.push(`<svg viewBox="0 0 ${width} ${height}">`);
  [0.25, 0.5, 0.75, 1].forEach(frac => {
    const val = maxY * frac;
    svg.push(`<line class="grid-line" x1="${m.left}" x2="${width-m.right}" y1="${y(val)}" y2="${y(val)}" />`);
    svg.push(`<text class="axis" x="${m.left-12}" y="${y(val)+4}" text-anchor="end">${Math.round(val)}</text>`);
  });
  series.forEach((d, idx) => {
    const xx = x(idx);
    svg.push(`<line class="grid-line" x1="${xx}" x2="${xx}" y1="${m.top}" y2="${height-m.bottom}" />`);
    svg.push(`<text class="axis" x="${xx}" y="${height-22}" text-anchor="middle">${escapeHtml(String(d.year))}</text>`);
  });
  if (actualPath) svg.push(`<path d="${actualPath}" fill="none" stroke="#7cc7ff" stroke-width="3"></path>`);
  if (plannedPath) svg.push(`<path d="${plannedPath}" fill="none" stroke="#f5c66d" stroke-width="3" stroke-dasharray="8 6"></path>`);
  actual.forEach(d => svg.push(`<circle cx="${x(series.indexOf(d))}" cy="${y(d.value)}" r="4.5" fill="#7cc7ff"></circle>`));
  planned.forEach(d => svg.push(`<circle cx="${x(series.indexOf(d))}" cy="${y(d.value)}" r="4.5" fill="#f5c66d"></circle>`));
  svg.push(`<text class="axis-label" x="${width/2}" y="${height-4}" text-anchor="middle">${escapeHtml(t('trendAxis'))}</text>`);
  svg.push(`</svg>`);
  wrap.innerHTML = svg.join('') + `<div class="legend-row">
      <span class="legend-dot"><i style="background:#7cc7ff"></i>${escapeHtml(t('trendActual'))}</span>
      <span class="legend-dot"><i style="background:#f5c66d"></i>${escapeHtml(t('trendPlanned'))}</span>
    </div>`;
}
function renderEngineTable() {
  const rows = filteredNodes().flatMap(node => (node.engines || []).map(engine => Object.assign({ node }, engine)));
  rows.sort((a,b) => (Number(b.thrust_kN) || -1) - (Number(a.thrust_kN) || -1));
  const table = document.getElementById('engineTable');
  table.innerHTML = `
    <thead>
      <tr>
        <th>${escapeHtml(t('tableVehicle'))}</th>
        <th>${escapeHtml(t('tableStage'))}</th>
        <th>${escapeHtml(t('tableEngine'))}</th>
        <th>${escapeHtml(t('tableCount'))}</th>
        <th>${escapeHtml(t('tableThrust'))}</th>
        <th>${escapeHtml(t('tableIsp'))}</th>
      </tr>
    </thead>
    <tbody>
      ${rows.map(row => `
        <tr class="row-clickable" data-id="${escapeHtml(row.node.id)}">
          <td>
            <span class="cell-main">${escapeHtml(displayVehicleMain(row.node))}</span>
            ${displayVehicleSub(row.node) ? `<span class="cell-sub">${escapeHtml(displayVehicleSub(row.node))}</span>` : ''}
          </td>
          <td>${escapeHtml(row.stage || t('none'))}</td>
          <td>${escapeHtml(row.name || t('none'))}</td>
          <td>${escapeHtml(row.count == null ? t('none') : String(row.count))}</td>
          <td>${row.thrust_kN == null ? escapeHtml(t('none')) : escapeHtml(String(row.thrust_kN))}</td>
          <td>${row.isp_s == null ? escapeHtml(t('none')) : escapeHtml(String(row.isp_s))}</td>
        </tr>`).join('')}
    </tbody>`;
  table.querySelectorAll('tr.row-clickable').forEach(row => row.addEventListener('click', () => openNodeById(row.dataset.id)));
}
function sitePoints() {
  const visible = filteredNodes();
  const map = new Map();
  visible.forEach(node => {
    (node.launchSites || []).forEach(site => {
      const meta = DATA.launchSites[site];
      if (!meta) return;
      if (!map.has(site)) {
        map.set(site, {
          site,
          meta,
          count: 0,
          total: 0,
          nodes: []
        });
      }
      const row = map.get(site);
      row.count += 1;
      row.total += metricValue(node);
      row.nodes.push(node);
    });
  });
  return Array.from(map.values()).sort((a,b) => b.count - a.count || b.total - a.total);
}
function renderSiteMap() {
  const points = sitePoints();
  const wrap = document.getElementById('siteMap');
  const legend = document.getElementById('siteLegend');
  if (!points.length) {
    wrap.innerHTML = '';
    legend.innerHTML = '';
    return;
  }
  const width = 620, height = 360;
  const m = { left: 44, right: 18, top: 20, bottom: 40 };
  const plotW = width - m.left - m.right;
  const plotH = height - m.top - m.bottom;
  const x = lon => m.left + ((lon + 180) / 360) * plotW;
  const y = lat => m.top + ((90 - lat) / 180) * plotH;
  const maxCount = Math.max(...points.map(p => p.count), 1);
  const svg = [];
  svg.push(`<svg viewBox="0 0 ${width} ${height}">`);
  [-120,-60,0,60,120].forEach(lon => svg.push(`<line class="grid-line" x1="${x(lon)}" x2="${x(lon)}" y1="${m.top}" y2="${height-m.bottom}" />`));
  [-60,-30,0,30,60].forEach(lat => svg.push(`<line class="grid-line" x1="${m.left}" x2="${width-m.right}" y1="${y(lat)}" y2="${y(lat)}" />`));
  [-120,-60,0,60,120].forEach(lon => svg.push(`<text class="axis" x="${x(lon)}" y="${height-18}" text-anchor="middle">${lon}</text>`));
  [-60,-30,0,30,60].forEach(lat => svg.push(`<text class="axis" x="${m.left-8}" y="${y(lat)+4}" text-anchor="end">${lat}</text>`));
  svg.push(`<text class="axis-label" x="${width/2}" y="${height-4}" text-anchor="middle">${escapeHtml(t('siteAxisX'))}</text>`);
  svg.push(`<text class="axis-label" transform="translate(16 ${height/2}) rotate(-90)" text-anchor="middle">${escapeHtml(t('siteAxisY'))}</text>`);
  points.forEach(point => {
    const radius = 5 + Math.sqrt(point.count / maxCount) * 16;
    svg.push(`<g class="plot-point" data-site="${escapeHtml(point.site)}" tabindex="0">
      <circle cx="${x(point.meta.lon)}" cy="${y(point.meta.lat)}" r="${radius}" fill="${state.site === point.site ? '#ff8b99' : '#60e1c2'}" fill-opacity="0.35" stroke="${state.site === point.site ? '#ff8b99' : '#60e1c2'}" stroke-width="2"></circle>
      <title>${escapeHtml(point.site)} | ${point.count} ${escapeHtml(t('programs'))}</title>
    </g>`);
  });
  points.slice(0, 8).forEach(point => {
    svg.push(`<text x="${x(point.meta.lon)+10}" y="${y(point.meta.lat)-8}" fill="#dbe7ff" font-size="11">${escapeHtml(point.site)}</text>`);
  });
  svg.push(`</svg>`);
  wrap.innerHTML = svg.join('');
  wrap.querySelectorAll('.plot-point').forEach(el => {
    el.addEventListener('click', () => {
      state.site = state.site === el.dataset.site ? 'All' : el.dataset.site;
      rerender();
    });
    el.addEventListener('keypress', e => { if (e.key === 'Enter') { state.site = state.site === el.dataset.site ? 'All' : el.dataset.site; rerender(); } });
  });
  legend.innerHTML = `<div class="small-note">${escapeHtml(t('siteLegend'))}</div>` + points.slice(0, 14).map(point => `
    <span class="site-pill ${state.site === point.site ? 'active' : ''}" data-site="${escapeHtml(point.site)}">${escapeHtml(point.site)} · ${point.count}</span>
  `).join('');
  legend.querySelectorAll('.site-pill').forEach(el => el.addEventListener('click', () => {
    state.site = state.site === el.dataset.site ? 'All' : el.dataset.site;
    rerender();
  }));
}
function renderProgramTable() {
  const rows = filteredNodes().slice().sort((a,b) => metricValue(b) - metricValue(a));
  const table = document.getElementById('programTable');
  table.innerHTML = `
    <thead>
      <tr>
        <th>${escapeHtml(t('tableVehicle'))}</th>
        <th>${escapeHtml(t('tableCompany'))}</th>
        <th>${escapeHtml(t('tableRegion'))}</th>
        <th>${escapeHtml(t('table2026'))}</th>
        <th>${escapeHtml(t('table2030'))}</th>
        <th>${escapeHtml(t('tablePayload'))}</th>
        <th>${escapeHtml(t('tableGto'))}</th>
        <th>${escapeHtml(t('tableFirstFlight'))}</th>
        <th>${escapeHtml(t('tableFlights'))}</th>
        <th>${escapeHtml(t('tableStatus'))}</th>
      </tr>
    </thead>
    <tbody>
      ${rows.map(node => `
        <tr class="row-clickable" data-id="${escapeHtml(node.id)}">
          <td>
            <span class="cell-main">${escapeHtml(displayVehicleMain(node))}</span>
            ${displayVehicleSub(node) ? `<span class="cell-sub">${escapeHtml(displayVehicleSub(node))}</span>` : ''}
          </td>
          <td>
            <span class="cell-main">${escapeHtml(displayCompanyMain(node))}</span>
            ${displayCompanySub(node) ? `<span class="cell-sub">${escapeHtml(displayCompanySub(node))}</span>` : ''}
          </td>
          <td>${escapeHtml(displayRegion(node.region))}</td>
          <td>${escapeHtml(formatMass(node.supply_2026_kg))}</td>
          <td>${escapeHtml(formatMass(node.supply_2030_kg))}</td>
          <td>${escapeHtml(formatMass(node.single_launch_kg))}</td>
          <td>${escapeHtml(formatMass(node.gtoPayloadKg))}</td>
          <td>${escapeHtml(formatYear(node))}</td>
          <td>${escapeHtml(node.totalFlightsDisplay || formatInt(node.totalFlights))}</td>
          <td><span class="badge">${escapeHtml(enumLabel('horizon_bucket', node.horizon_bucket))}</span></td>
        </tr>`).join('')}
    </tbody>`;
  table.querySelectorAll('tr.row-clickable').forEach(row => row.addEventListener('click', () => openNodeById(row.dataset.id)));
}
function renderCompanyTable() {
  const rows = visibleCompanies();
  const table = document.getElementById('companyTable');
  table.innerHTML = `
    <thead>
      <tr>
        <th>${escapeHtml(t('tableCompany'))}</th>
        <th>${escapeHtml(t('tableRegion'))}</th>
        <th>${escapeHtml(t('tableVehicles'))}</th>
        <th>${escapeHtml(t('table2026'))}</th>
        <th>${escapeHtml(t('table2030'))}</th>
        <th>${escapeHtml(t('tableValuation'))}</th>
        <th>${escapeHtml(t('tableFunding'))}</th>
      </tr>
    </thead>
    <tbody>
      ${rows.map(company => `
        <tr class="row-clickable" data-company="${escapeHtml(company.company)}" data-region="${company.region}">
          <td>
            <span class="cell-main">${escapeHtml(displayCompanyMain(company))}</span>
            ${displayCompanySub(company) ? `<span class="cell-sub">${escapeHtml(displayCompanySub(company))}</span>` : ''}
          </td>
          <td>${escapeHtml(displayRegion(company.region))}</td>
          <td>${escapeHtml(company.vehicles.length.toString())}<span class="cell-sub">${escapeHtml(company.vehicles.join(', '))}</span></td>
          <td>${escapeHtml(formatMass(company.supply_2026_kg))}</td>
          <td>${escapeHtml(formatMass(company.supply_2030_kg))}</td>
          <td>${escapeHtml(LANG === 'zh' ? (company.valuationZh || company.valuation) : company.valuation)}</td>
          <td>${escapeHtml(LANG === 'zh' ? (company.fundingZh || company.funding) : company.funding)}</td>
        </tr>`).join('')}
    </tbody>`;
  table.querySelectorAll('tr.row-clickable').forEach(row => row.addEventListener('click', () => {
    state.drawer = { type: 'company', key: row.dataset.region + '::' + row.dataset.company };
    renderDrawer();
  }));
}
function renderMethodology() {
  document.getElementById('methodList').innerHTML = methodMeta().map(item => `<li>${escapeHtml(item)}</li>`).join('');
  document.getElementById('requirementsList').innerHTML = DATA.meta.requirementsCovered.map(item => `<li>${escapeHtml(item)}</li>`).join('');
}
function renderSourceTable() {
  const rows = filteredNodes().flatMap(node => (node.sources || []).map(src => ({
    node,
    label: src.label,
    url: src.url
  })));
  const table = document.getElementById('sourceTable');
  table.innerHTML = `
    <thead>
      <tr>
        <th>${escapeHtml(t('sourceNode'))}</th>
        <th>${escapeHtml(t('tableSource'))}</th>
        <th>${escapeHtml(t('tableLink'))}</th>
      </tr>
    </thead>
    <tbody>
      ${rows.map(row => `
        <tr>
          <td>
            <span class="cell-main">${escapeHtml(displayVehicleMain(row.node))}</span>
            <span class="cell-sub">${escapeHtml(displayCompanyMain(row.node))}</span>
          </td>
          <td>${escapeHtml(row.label)}</td>
          <td><a href="${escapeHtml(row.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(row.url)}</a></td>
        </tr>`).join('')}
    </tbody>`;
}
function openNodeById(id) {
  state.drawer = { type: 'node', id };
  renderDrawer();
}
function closeDrawer() {
  state.drawer = null;
  renderDrawer();
}
function detailCard(label, value) {
  return `<div class="detail-card"><div class="k">${escapeHtml(label)}</div><div class="v">${value}</div></div>`;
}
function renderDrawer() {
  const drawer = document.getElementById('drawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const body = document.getElementById('drawerBody');
  if (!state.drawer) {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    body.innerHTML = '';
    return;
  }
  drawer.classList.add('open');
  backdrop.classList.add('open');
  if (state.drawer.type === 'node') {
    const node = nodeById(state.drawer.id);
    if (!node) return;
    const company = companyRecordFromNode(node);
    const routeText = LANG === 'zh' ? (node.techRoute || node.route_summary) : (node.techRouteEn || node.route_summary);
    const realityText = LANG === 'zh' ? (node.currentRealityZh || node.current_reality) : node.current_reality;
    const costText = LANG === 'zh' ? (node.costThesisZh || node.cost_thesis) : node.cost_thesis;
    body.innerHTML = `
      <div>
        <div class="eyebrow">${escapeHtml(t('drawerProgram'))}</div>
        <h2>${escapeHtml(displayVehicleMain(node))}</h2>
        ${displayVehicleSub(node) ? `<div class="muted">${escapeHtml(displayVehicleSub(node))}</div>` : ''}
        <div class="muted" style="margin-top:8px;">${escapeHtml(displayCompanyMain(node))}${displayCompanySub(node) ? ' / ' + escapeHtml(displayCompanySub(node)) : ''} · ${escapeHtml(displayRegion(node.region))}</div>
      </div>
      <div class="drawer-section">
        <h3>${escapeHtml(t('drawerOverview'))}</h3>
        <div class="drawer-grid">
          ${detailCard(t('fieldCompany'), escapeHtml(displayCompanyMain(node)))}
          ${detailCard(t('fieldRegion'), escapeHtml(displayRegion(node.region)))}
          ${detailCard(t('fieldCountry'), escapeHtml(node.country))}
          ${detailCard(t('fieldOwnership'), escapeHtml(enumLabel('ownership_class', node.ownership_class)))}
          ${detailCard(t('fieldHorizon'), escapeHtml(enumLabel('horizon_bucket', node.horizon_bucket)))}
          ${detailCard(t('fieldFirstFlight'), escapeHtml(formatYear(node)))}
          ${detailCard(t('fieldTotalFlights'), escapeHtml(node.totalFlightsDisplay || formatInt(node.totalFlights)))}
          ${detailCard(t('fieldLaunch2026'), escapeHtml(formatInt(node.flights_2026_base)))}
          ${detailCard(t('fieldLaunch2030'), escapeHtml(formatInt(node.flights_2030_base)))}
          ${detailCard(t('fieldSingle'), escapeHtml(formatMass(node.single_launch_kg)))}
          ${detailCard(t('fieldGto'), escapeHtml(formatMass(node.gtoPayloadKg)))}
          ${detailCard(t('fieldReusability'), escapeHtml(enumLabel('reusability_class', node.reusability_class)))}
          ${detailCard(t('fieldRecovery'), escapeHtml(node.recoveryMethod || t('none')))}
          ${detailCard(t('fieldPropellant'), escapeHtml(enumLabel('propellant_class', node.propellant_class)))}
          ${detailCard(t('fieldArchitecture'), escapeHtml(node.architecture_class))}
          ${detailCard(t('fieldCertification'), escapeHtml(node.certified || t('none')))}
          ${detailCard(t('fieldConstellation'), escapeHtml(displayBoolean(node.constellationCapable)))}
          ${detailCard(t('fieldConfidence'), escapeHtml(enumLabel('confidence', node.confidence)))}
        </div>
      </div>
      <div class="drawer-section">
        <h3>${escapeHtml(t('drawerNarrative'))}</h3>
        <div class="narrative"><strong>${escapeHtml(t('tableTechRoute'))}</strong><br>${escapeHtml(routeText)}</div>
        <div class="narrative"><strong>${escapeHtml(LANG === 'zh' ? '当前现实' : 'Current reality')}</strong><br>${escapeHtml(realityText)}</div>
        <div class="narrative"><strong>${escapeHtml(LANG === 'zh' ? '长期成本逻辑' : 'Long-run cost logic')}</strong><br>${escapeHtml(costText)}</div>
      </div>
      <div class="drawer-section">
        <h3>${escapeHtml(t('drawerSites'))}</h3>
        <ul class="list-clean">${(node.launchSites || []).map(site => `<li>${escapeHtml(site)}</li>`).join('')}</ul>
      </div>
      <div class="drawer-section">
        <h3>${escapeHtml(t('drawerMissions'))}</h3>
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr><th>${escapeHtml(t('tableDate'))}</th><th>${escapeHtml(t('tableMission'))}</th><th>${escapeHtml(t('tableOrbit'))}</th></tr></thead>
            <tbody>
              ${(node.plannedMissions || []).map(m => `<tr><td>${escapeHtml(m.date)}</td><td>${escapeHtml(LANG === 'zh' ? m.mission : (m.missionEn || m.mission))}</td><td>${escapeHtml(m.orbit || t('none'))}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
      <div class="drawer-section">
        <h3>${escapeHtml(t('drawerEngines'))}</h3>
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr><th>${escapeHtml(t('tableStage'))}</th><th>${escapeHtml(t('tableEngine'))}</th><th>${escapeHtml(t('tableCount'))}</th><th>${escapeHtml(t('tableThrust'))}</th><th>${escapeHtml(t('tableIsp'))}</th></tr></thead>
            <tbody>
              ${(node.engines || []).map(e => `<tr><td>${escapeHtml(e.stage || t('none'))}</td><td>${escapeHtml(e.name || t('none'))}</td><td>${escapeHtml(e.count == null ? t('none') : String(e.count))}</td><td>${escapeHtml(e.thrust_kN == null ? t('none') : String(e.thrust_kN))}</td><td>${escapeHtml(e.isp_s == null ? t('none') : String(e.isp_s))}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
      ${company ? `
      <div class="drawer-section">
        <h3>${escapeHtml(t('drawerCapital'))}</h3>
        <div class="drawer-grid">
          ${detailCard(t('fieldValuation'), escapeHtml(LANG === 'zh' ? (company.valuationZh || company.valuation) : company.valuation))}
          ${detailCard(t('fieldFunding'), escapeHtml(LANG === 'zh' ? (company.fundingZh || company.funding) : company.funding))}
        </div>
        <div class="narrative"><strong>${escapeHtml(t('fieldInvestors'))}</strong><br>${escapeHtml(LANG === 'zh' ? (company.investorsZh || company.investors) : company.investors)}</div>
      </div>` : ''}
      <div class="drawer-section">
        <h3>${escapeHtml(t('drawerSources'))}</h3>
        <div class="link-list">
          ${(node.sources || []).map(src => `<a href="${escapeHtml(src.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(src.label)}</a>`).join('')}
        </div>
      </div>
      <div class="footer-note">${escapeHtml(t('drawerNote'))}</div>
    `;
  } else if (state.drawer.type === 'company') {
    const [region, companyName] = state.drawer.key.split('::');
    const company = visibleCompanies().find(c => c.region === region && c.company === companyName) || DATA.companies.find(c => c.region === region && c.company === companyName);
    if (!company) return;
    const nodes = DATA.nodes.filter(n => n.region === region && n.company === companyName);
    body.innerHTML = `
      <div>
        <div class="eyebrow">${escapeHtml(t('drawerCompany'))}</div>
        <h2>${escapeHtml(displayCompanyMain(company))}</h2>
        ${displayCompanySub(company) ? `<div class="muted">${escapeHtml(displayCompanySub(company))}</div>` : ''}
        <div class="muted" style="margin-top:8px;">${escapeHtml(displayRegion(company.region))}</div>
      </div>
      <div class="drawer-section">
        <h3>${escapeHtml(t('drawerOverview'))}</h3>
        <div class="drawer-grid">
          ${detailCard(t('table2026'), escapeHtml(formatMass(company.supply_2026_kg || 0)))}
          ${detailCard(t('table2030'), escapeHtml(formatMass(company.supply_2030_kg || 0)))}
          ${detailCard(t('tableVehicles'), escapeHtml(String((company.vehicles || []).length)))}
          ${detailCard(t('tableCost'), escapeHtml(String(company.maxCost || 0)))}
          ${detailCard(t('fieldValuation'), escapeHtml(LANG === 'zh' ? (company.valuationZh || company.valuation) : company.valuation))}
          ${detailCard(t('fieldFunding'), escapeHtml(LANG === 'zh' ? (company.fundingZh || company.funding) : company.funding))}
        </div>
      </div>
      <div class="drawer-section">
        <h3>${escapeHtml(t('fieldInvestors'))}</h3>
        <div class="narrative">${escapeHtml(LANG === 'zh' ? (company.investorsZh || company.investors) : company.investors)}</div>
      </div>
      <div class="drawer-section">
        <h3>${escapeHtml(t('fieldVehicles'))}</h3>
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr><th>${escapeHtml(t('tableVehicle'))}</th><th>${escapeHtml(t('tableStatus'))}</th><th>${escapeHtml(t('table2026'))}</th><th>${escapeHtml(t('table2030'))}</th></tr></thead>
            <tbody>
              ${nodes.map(node => `<tr class="row-clickable" data-id="${escapeHtml(node.id)}"><td><span class="cell-main">${escapeHtml(displayVehicleMain(node))}</span>${displayVehicleSub(node) ? `<span class="cell-sub">${escapeHtml(displayVehicleSub(node))}</span>` : ''}</td><td>${escapeHtml(enumLabel('horizon_bucket', node.horizon_bucket))}</td><td>${escapeHtml(formatMass(node.supply_2026_kg))}</td><td>${escapeHtml(formatMass(node.supply_2030_kg))}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
      <div class="drawer-section">
        <h3>${escapeHtml(t('drawerSources'))}</h3>
        <div class="link-list">
          ${nodes.flatMap(node => (node.sources || []).map(src => `<a href="${escapeHtml(src.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(node.vehicle)} · ${escapeHtml(src.label)}</a>`)).join('')}
        </div>
      </div>
      <div class="footer-note">${escapeHtml(t('companyCapitalHint'))}</div>
    `;
    body.querySelectorAll('tr.row-clickable').forEach(row => row.addEventListener('click', () => openNodeById(row.dataset.id)));
  }
}
function downloadJson() {
  const payload = {
    exportedAt: new Date().toISOString(),
    lang: LANG,
    state,
    nodes: filteredNodes()
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  triggerDownload(blob, 'rocket-market-map-filtered.json');
}
function downloadCsv() {
  const rows = filteredNodes().map(node => ({
    region: displayRegion(node.region),
    company: LANG === 'zh' ? (node.companyZh || node.company) : node.company,
    vehicle: LANG === 'zh' ? (node.vehicleZh || node.vehicle) : node.vehicle,
    supply_2026_kg: node.supply_2026_kg,
    supply_2030_kg: node.supply_2030_kg,
    single_launch_kg: node.single_launch_kg,
    gto_payload_kg: node.gtoPayloadKg,
    first_flight: formatYear(node),
    total_flights: node.totalFlightsDisplay || node.totalFlights,
    status: enumLabel('horizon_bucket', node.horizon_bucket),
    reusability: enumLabel('reusability_class', node.reusability_class),
    propellant: enumLabel('propellant_class', node.propellant_class),
    launch_sites: (node.launchSites || []).join('; ')
  }));
  const columns = Object.keys(rows[0] || { placeholder: '' });
  const csv = [columns.join(',')].concat(rows.map(row => columns.map(col => csvEscape(row[col])).join(','))).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  triggerDownload(blob, 'rocket-market-map-filtered.csv');
}
function csvEscape(v) {
  const str = String(v ?? '');
  return /[",\n]/.test(str) ? '"' + str.replace(/"/g, '""') + '"' : str;
}
function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
