
(() => {
  const lang = (document.body.dataset.lang || 'zh').startsWith('zh') ? 'zh' : 'en';
  const isZh = lang === 'zh';

  const TEXT = {
    zh: {
      brand: 'Rocket Market Map · Executive Edition',
      heroEyebrow: 'v3.1 · Excel integrated',
      heroTitle: '全球火箭市场：先看目标，再看技术',
      heroSubtitle: '这版把你提的 5 个点全部接进去了：地图可隐藏当年运力为 0 的项目、按公司/国家筛选、补了发射场与场地保障逻辑、新增灵活 benchmark 柱状图，并把 Excel 模型里的年发射次数、供给、价格、收入、$/kg 和累计发射基数并到了车辆与公司层。',
      heroTakeaways: [
        ['一键隐藏 0 运力', '当前选择 2026E / 2030E 时，所选年份供给为 0 的节点可直接从主图移除。'],
        ['按国家 / 公司筛选', '现在可以只看某个国家或某家公司，主图、发射场图、benchmark 和公司卡会同步变化。'],
        ['发射场看得见', '每家公司新增主要场地、发射方式、场地保障方式，并单独做了一张发射场地图。'],
        ['Excel 模型直连', '把 workbook 里的 launches / payload / supply / price / revenue / $/kg / cumulative launches 全部挂进前端。']
      ],
      navMap: '主图',
      navSites: '发射场',
      navBenchmark: 'Benchmark',
      overviewTitle: 'Excel 市场快照',
      mapTitle: '主图：运力 × 成本路线 × 供给规模',
      mapSubtitle: '横轴是单发能力，纵轴是成本/难度坐标，气泡大小是所选年份的战略口径年供给。点开任意火箭可看公司、场地、资本、Excel 模型和历史。',
      routeTitle: '路线与过滤',
      routeSubtitle: '路线卡是解释层；筛选器是执行层。选择国家/公司后，主图、发射场图、benchmark、公司卡同步变化。',
      year2026: '2026E',
      year2030: '2030E',
      hideZero: '隐藏所选年份运力=0',
      showZero: '显示运力=0项目',
      region: '区域',
      country: '国家/集群',
      company: '公司',
      route: '路线',
      all: '全部',
      search: '搜索公司 / 火箭',
      clear: '清空筛选',
      visibleNodes: '当前显示',
      mapLegend: '颜色代表路线；气泡大小代表所选年份战略口径供给；点击气泡看详情。',
      mapAxisX: '单发能力（对数）',
      mapAxisY: '成本 / 兑现难度坐标',
      sitesTitle: '发射场地图：主要场地、发射方式、场地保障',
      sitesSubtitle: '这里把“这家公司靠什么场地发射、靠什么方式锁定场地窗口”拆开来看。点位颜色是场地保障类型，大小由所选指标决定。',
      siteMetric: '场地指标',
      siteMetricOptions: {
        strategic_supply_selected_kg: '所选年份战略口径供给',
        model_supply_selected_kg: '所选年份 Excel 供给',
        model_launches_selected: '所选年份 Excel 发射次数',
        vehicle_count: '覆盖火箭数'
      },
      benchmarkTitle: '灵活 benchmarking：火箭 / 公司 / 国家',
      benchmarkSubtitle: '可切换比较维度和指标。公司 / 国家模式下，单发能力取组内最大火箭；价格类指标取加权平均；估值 / 融资是公开口径的近似解析值，适合管理层快速比较，不适合精确财务建模。',
      benchmarkMode: '比较对象',
      benchmarkMetric: '比较指标',
      benchmarkModes: { vehicle: '火箭', company: '公司', country: '国家' },
      benchmarkTop: 'Top',
      listTitle: '公司卡片：按当前筛选结果更新',
      listSubtitle: '公司卡点击后可以看公司层面的场地、车辆组合和 Excel 汇总；气泡图里的点则是单个火箭。',
      dataTitle: '数据端口与本次更新',
      dataSubtitle: '这次不是只改 UI，而是把数据层一起改了：新增国家/公司/车辆，补 launch site 元数据，挂 Excel 模型字段，并把这些字段前端可视化。',
      drawerClose: '关闭',
      empty: '当前筛选下没有结果',
      unknown: '—',
      sources: '来源',
      companyCardSites: '主要场地',
      companyCardVehicles: '车辆',
      benchmarkMetrics: {
        single_launch_kg: '单发能力',
        strategic_supply_selected_kg: '所选年份战略口径供给',
        strategic_launches_selected: '所选年份战略口径发射次数',
        model_payload_selected_kg: '所选年份 Excel 单发有效载荷',
        model_supply_selected_kg: '所选年份 Excel 年供给',
        model_launches_selected: '所选年份 Excel 发射次数',
        model_cum_launches_selected: '截至所选年份累计发射次数',
        model_price_selected_usd_m: '所选年份 Excel 单次价格',
        model_revenue_selected_usd_m: '所选年份 Excel 年收入',
        model_usd_per_kg_selected: '所选年份 Excel $/kg',
        valuation_est_usd_m: '估值（估算）',
        funding_est_usd_m: '融资额（估算）'
      },
      drawerSections: {
        route: '路线与定位',
        sites: '发射场与场地保障',
        excel: 'Excel 模型',
        tech: '技术与成熟度',
        capital: '资本与来源',
        history: '历史与计划',
        summary: '概览'
      },
      labels: {
        country: '国家',
        company: '公司',
        vehicle: '火箭',
        route: '路线',
        payload: '单发能力',
        strategicSupply: '战略口径年供给',
        strategicLaunches: '战略口径发射次数',
        modelSupply: 'Excel 年供给',
        modelLaunches: 'Excel 发射次数',
        modelPayload: 'Excel 单发有效载荷',
        valuation: '估值',
        funding: '融资额',
        launchMethod: '发射方式',
        siteAccess: '场地保障方式',
        mainSites: '主要场地',
        operator: '运营方',
        accessCategory: '场地类型',
        vehicleCount: '覆盖火箭数',
        companyCount: '覆盖公司数',
        firstFlight: '首飞',
        totalFlights: '历史飞行',
        confidence: '模型置信度',
        status: '状态',
        price: '单次价格',
        revenue: '年收入',
        usdkg: '$/kg',
        cumulative: '累计发射次数',
        notes: '备注',
        investors: '投资方',
        search: '搜索'
      },
      accessCategories: {
        national_system: '国家体系保障',
        commercial_spaceport: '商业航天港合作',
        leased_dedicated: '长期独占工位',
        owned_dedicated: '自建自营',
        sea_launch: '海上发射体系',
        unknown: '其他'
      },
      portNotes: [
        '新增按钮：可隐藏所选年份供给 = 0 的火箭节点。',
        '新增筛选：公司 / 国家 / 路线 / 搜索联动主图、发射场图和 benchmark 图。',
        '新增发射场维度：主要场地、发射方式、场地保障方式、站点地图。',
        '新增 benchmark 指标：单发能力、年供给、发射次数、累计发射次数、价格、收入、估值、融资额。',
        '新增国家 / 车辆：Japan H3、India PSLV / LVM3 / Vikram-I、Korea Nuri、Australia Eris。',
        'Excel 已挂入车辆和公司层：launches、payload、supply、price、revenue、$/kg、base cumulative launches。'
      ]
    },
    en: {
      brand: 'Rocket Market Map · Executive Edition',
      heroEyebrow: 'v3.1 · Excel integrated',
      heroTitle: 'Global launch market: start with goals, then technology',
      heroSubtitle: 'This build implements all five requested upgrades: hide zero-supply vehicles on the main map, filter by company/country, add launch-site and access-mode intelligence, add a flexible benchmarking bar chart, and integrate the Excel model into vehicles and companies.',
      heroTakeaways: [
        ['Hide zero supply', 'For the selected year (2026E / 2030E), vehicles with zero annual supply can be removed from the map.'],
        ['Filter by company / country', 'The main map, launch-site view, benchmarking chart, and company cards now react to company and country filters.'],
        ['Launch-site layer', 'Each company now includes key sites, launch method, and site-access model, plus a separate site map.'],
        ['Excel model connected', 'Launches, payload, supply, price, revenue, $/kg, and cumulative-launch assumptions now flow into the UI.']
      ],
      navMap: 'Map',
      navSites: 'Launch sites',
      navBenchmark: 'Benchmark',
      overviewTitle: 'Excel market snapshot',
      mapTitle: 'Main map: payload × cost route × supply scale',
      mapSubtitle: 'X-axis is single-launch capability, Y-axis is a cost / execution difficulty score, and bubble size is strategic annual supply for the selected year.',
      routeTitle: 'Routes and filters',
      routeSubtitle: 'Route cards explain the logic; filters execute the view. Country/company filters update the map, launch-site layer, benchmark chart, and company cards together.',
      year2026: '2026E',
      year2030: '2030E',
      hideZero: 'Hide zero-supply vehicles',
      showZero: 'Show zero-supply vehicles',
      region: 'Region',
      country: 'Country / cluster',
      company: 'Company',
      route: 'Route',
      all: 'All',
      search: 'Search company / vehicle',
      clear: 'Clear filters',
      visibleNodes: 'Visible',
      mapLegend: 'Color = route class. Bubble size = selected-year strategic supply. Click a bubble for details.',
      mapAxisX: 'Single-launch capability (log scale)',
      mapAxisY: 'Cost / execution difficulty score',
      sitesTitle: 'Launch-site map: main sites, launch method, site access',
      sitesSubtitle: 'This layer shows where companies launch from and how they secure launch-site access. Marker color = access model; marker size = selected site metric.',
      siteMetric: 'Site metric',
      siteMetricOptions: {
        strategic_supply_selected_kg: 'Selected-year strategic supply',
        model_supply_selected_kg: 'Selected-year Excel supply',
        model_launches_selected: 'Selected-year Excel launches',
        vehicle_count: 'Vehicle count'
      },
      benchmarkTitle: 'Flexible benchmarking: vehicles / companies / countries',
      benchmarkSubtitle: 'Switch the comparison level and metric. In company/country mode, single-launch capability uses the maximum vehicle in the group; price metrics use weighted averages; valuation/funding are rough public-market parses for quick executive comparison rather than precise finance work.',
      benchmarkMode: 'Compare',
      benchmarkMetric: 'Metric',
      benchmarkModes: { vehicle: 'Vehicle', company: 'Company', country: 'Country' },
      benchmarkTop: 'Top',
      listTitle: 'Company cards',
      listSubtitle: 'Cards update with the current filter set. Company cards open company-level views; bubbles on the main map open vehicle-level detail.',
      dataTitle: 'Data port and update notes',
      dataSubtitle: 'This refresh changed both the UI and the data layer: new countries/vehicles, launch-site metadata, Excel model fields, and new front-end visualizations.',
      drawerClose: 'Close',
      empty: 'No results under the current filter',
      unknown: '—',
      sources: 'Sources',
      companyCardSites: 'Main sites',
      companyCardVehicles: 'Vehicles',
      benchmarkMetrics: {
        single_launch_kg: 'Single-launch capability',
        strategic_supply_selected_kg: 'Selected-year strategic supply',
        strategic_launches_selected: 'Selected-year strategic launches',
        model_payload_selected_kg: 'Selected-year Excel payload / launch',
        model_supply_selected_kg: 'Selected-year Excel annual supply',
        model_launches_selected: 'Selected-year Excel launches',
        model_cum_launches_selected: 'Cumulative launches by selected year',
        model_price_selected_usd_m: 'Selected-year Excel price / launch',
        model_revenue_selected_usd_m: 'Selected-year Excel annual revenue',
        model_usd_per_kg_selected: 'Selected-year Excel $/kg',
        valuation_est_usd_m: 'Valuation (estimated)',
        funding_est_usd_m: 'Funding (estimated)'
      },
      drawerSections: {
        route: 'Route and role',
        sites: 'Launch sites and access',
        excel: 'Excel model',
        tech: 'Technology and maturity',
        capital: 'Capital and sources',
        history: 'History and missions',
        summary: 'Summary'
      },
      labels: {
        country: 'Country',
        company: 'Company',
        vehicle: 'Vehicle',
        route: 'Route',
        payload: 'Single-launch capability',
        strategicSupply: 'Strategic annual supply',
        strategicLaunches: 'Strategic launches',
        modelSupply: 'Excel annual supply',
        modelLaunches: 'Excel launches',
        modelPayload: 'Excel payload / launch',
        valuation: 'Valuation',
        funding: 'Funding',
        launchMethod: 'Launch method',
        siteAccess: 'Site access model',
        mainSites: 'Main sites',
        operator: 'Operator',
        accessCategory: 'Access category',
        vehicleCount: 'Vehicle count',
        companyCount: 'Company count',
        firstFlight: 'First flight',
        totalFlights: 'Historical flights',
        confidence: 'Model confidence',
        status: 'Status',
        price: 'Price / launch',
        revenue: 'Annual revenue',
        usdkg: '$/kg',
        cumulative: 'Cumulative launches',
        notes: 'Notes',
        investors: 'Investors',
        search: 'Search'
      },
      accessCategories: {
        national_system: 'National / institutional system',
        commercial_spaceport: 'Commercial spaceport partnership',
        leased_dedicated: 'Long-term dedicated pad',
        owned_dedicated: 'Owned / integrated site',
        sea_launch: 'Sea-launch system',
        unknown: 'Other'
      },
      portNotes: [
        'Added a toggle to hide selected-year zero-supply vehicles.',
        'Added country / company / route / search filters shared across map, sites, and benchmark views.',
        'Added launch-site metadata: main sites, launch method, site-access mode, and site map.',
        'Added benchmark metrics for payload, supply, launches, cumulative launches, price, revenue, valuation, and funding.',
        'Added Asia-Pacific vehicles: H3, PSLV, LVM3, Vikram-I, Nuri, Eris.',
        'Excel model is linked into vehicle and company views: launches, payload, supply, price, revenue, $/kg, and cumulative-launch bases.'
      ]
    }
  };

  const ACCESS_COLORS = {
    national_system: '#F59E0B',
    commercial_spaceport: '#0EA5A4',
    leased_dedicated: '#2563EB',
    owned_dedicated: '#7C3AED',
    sea_launch: '#10B981',
    unknown: '#64748B'
  };

  const state = {
    data: null,
    year: 2030,
    hideZero: false,
    region: 'ALL',
    country: 'ALL',
    company: 'ALL',
    route: 'ALL',
    search: '',
    benchmarkMode: 'vehicle',
    benchmarkMetric: 'model_supply_selected_kg',
    siteMetric: 'model_supply_selected_kg',
    topN: 12,
    drawer: null
  };

  const els = {};

  const t = (key) => TEXT[lang][key];
  const routeDefs = () => state.data?.meta_v3?.routeDefinitions || {};

  function num(v) {
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
  }

  function yearLabel(y = state.year) {
    return `${y}E`;
  }

  function currentKeys() {
    return {
      strategicSupply: `supply_${state.year}_kg`,
      strategicLaunches: state.year === 2026 ? 'flights_2026_base' : 'flights_2030_base',
      modelPayload: `model_payload_${state.year}_kg`,
      modelSupply: `model_supply_${state.year}_kg`,
      modelLaunches: `model_launches_${state.year}`,
      modelCumLaunches: `model_cum_launches_${state.year}`,
      modelPrice: `model_price_${state.year}_usd_m`,
      modelRevenue: `model_revenue_${state.year}_usd_m`,
      modelUsdPerKg: `model_usd_per_kg_${state.year}`
    };
  }

  function fmtInt(v) {
    if (v == null || Number.isNaN(Number(v))) return t('unknown');
    return new Intl.NumberFormat(isZh ? 'zh-CN' : 'en-US', { maximumFractionDigits: 0 }).format(Number(v));
  }

  function fmtFloat(v, digits = 1) {
    if (v == null || Number.isNaN(Number(v))) return t('unknown');
    return new Intl.NumberFormat(isZh ? 'zh-CN' : 'en-US', { maximumFractionDigits: digits, minimumFractionDigits: 0 }).format(Number(v));
  }

  function fmtMass(v) {
    if (v == null || Number.isNaN(Number(v))) return t('unknown');
    const n = Number(v);
    if (Math.abs(n) >= 1_000_000) return `${fmtFloat(n / 1_000_000, 2)}m kg`;
    if (Math.abs(n) >= 1_000) return `${fmtFloat(n / 1_000, n >= 100000 ? 0 : 1)}t`;
    return `${fmtFloat(n, 0)} kg`;
  }

  function fmtMoneyM(v) {
    if (v == null || Number.isNaN(Number(v)) || Number(v) === 0) return t('unknown');
    const n = Number(v);
    if (Math.abs(n) >= 1000) return `$${fmtFloat(n / 1000, 2)}bn`;
    return `$${fmtFloat(n, 1)}m`;
  }

  function fmtUsdPerKg(v) {
    if (v == null || Number.isNaN(Number(v)) || Number(v) === 0) return t('unknown');
    return `$${fmtFloat(v, 0)}/kg`;
  }

  function ellipsis(s, max = 120) {
    if (!s) return t('unknown');
    return s.length > max ? `${s.slice(0, max - 1)}…` : s;
  }

  function regionLabel(region) {
    const mapZh = { ALL: '全部', US: '美国', Europe: '欧洲', China: '中国', APAC: '亚太', Other: '其他' };
    const mapEn = { ALL: 'All', US: 'US', Europe: 'Europe', China: 'China', APAC: 'APAC', Other: 'Other' };
    return (isZh ? mapZh : mapEn)[region] || region;
  }

  function accessLabel(key) {
    return t('accessCategories')[key] || t('accessCategories').unknown;
  }

  function loadInlineData() {
    const inline = document.getElementById('inline-data');
    if (inline && inline.textContent.trim()) {
      return JSON.parse(inline.textContent);
    }
    return null;
  }

  async function loadData() {
    const inline = loadInlineData();
    if (inline) return inline;
    const path = window.__DATA_PATH__ || 'data/rocket_market_map_2026_2030_v3.json';
    const res = await fetch(path);
    return res.json();
  }

  function byMetricDesc(key) {
    return (a, b) => num(b[key]) - num(a[key]);
  }

  function matchesSearch(node, q) {
    if (!q) return true;
    const hay = [
      node.company, node.companyZh, node.vehicle, node.vehicleZh, node.country,
      node.route_class_zh, node.route_class_en, node.route_summary, node.currentRealityZh, node.current_reality
    ].filter(Boolean).join(' ').toLowerCase();
    return hay.includes(q.toLowerCase());
  }

  function filteredNodes() {
    const keys = currentKeys();
    return state.data.nodes.filter((node) => {
      if (state.route !== 'ALL' && node.route_class !== state.route) return false;
      if (state.region !== 'ALL' && node.region !== state.region) return false;
      if (state.country !== 'ALL' && node.country !== state.country) return false;
      if (state.company !== 'ALL' && node.company !== state.company) return false;
      if (state.hideZero && num(node[keys.strategicSupply]) <= 0) return false;
      if (!matchesSearch(node, state.search)) return false;
      return true;
    });
  }

  function companyMaster(name) {
    return state.data.companies.find((c) => c.company === name);
  }

  function routeInfo(id) {
    const info = routeDefs()[id] || {};
    return {
      id,
      color: info.color || '#3b82f6',
      order: info.order || 99,
      name: isZh ? (info.zh || id) : (info.en || id),
      why: isZh ? info.why_zh : info.why_en,
      tradeoff: isZh ? info.tradeoff_zh : info.tradeoff_en,
      fit: isZh ? info.fit_zh : info.fit_en,
      examples: isZh ? info.examples_zh : info.examples_en
    };
  }

  function routeTag(node) {
    return isZh ? (node.route_class_zh || routeInfo(node.route_class).name) : (node.route_class_en || routeInfo(node.route_class).name);
  }

  function groupBy(arr, keyFn) {
    const map = new Map();
    arr.forEach((item) => {
      const key = keyFn(item);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(item);
    });
    return map;
  }

  function buildCompanyRows(nodes) {
    const groups = groupBy(nodes, (n) => n.company);
    const keys = currentKeys();
    const rows = [];
    groups.forEach((members, company) => {
      const master = companyMaster(company) || {};
      const dominant = [...members].sort((a, b) => num(b[keys.modelSupply] || b[keys.strategicSupply]) - num(a[keys.modelSupply] || a[keys.strategicSupply]))[0];
      const modelLaunches = members.reduce((sum, n) => sum + num(n[keys.modelLaunches]), 0);
      const modelSupply = members.reduce((sum, n) => sum + num(n[keys.modelSupply]), 0);
      const modelRevenue = members.reduce((sum, n) => sum + num(n[keys.modelRevenue]), 0);
      rows.push({
        type: 'company',
        id: company,
        name: company,
        label: isZh ? (master.companyZh || dominant.companyZh || company) : company,
        company,
        companyZh: master.companyZh || dominant.companyZh || company,
        country: dominant.country,
        region: dominant.region,
        route_class: dominant.route_class,
        route_class_zh: dominant.route_class_zh,
        route_class_en: dominant.route_class_en,
        vehicles: members.map((m) => isZh ? (m.vehicleZh || m.vehicle) : m.vehicle),
        members,
        max_single_launch_kg: Math.max(...members.map((m) => num(m.single_launch_kg)), 0),
        strategic_supply_selected_kg: members.reduce((sum, n) => sum + num(n[keys.strategicSupply]), 0),
        strategic_launches_selected: members.reduce((sum, n) => sum + num(n[keys.strategicLaunches]), 0),
        model_payload_selected_kg: Math.max(...members.map((m) => num(m[keys.modelPayload])), 0),
        model_supply_selected_kg: modelSupply,
        model_launches_selected: modelLaunches,
        model_cum_launches_selected: members.reduce((sum, n) => sum + num(n[keys.modelCumLaunches]), 0),
        model_price_selected_usd_m: modelLaunches ? modelRevenue / modelLaunches : 0,
        model_revenue_selected_usd_m: modelRevenue,
        model_usd_per_kg_selected: modelSupply ? (modelRevenue * 1_000_000 / modelSupply) : 0,
        valuation_est_usd_m: master.valuation_est_usd_m ?? null,
        funding_est_usd_m: master.funding_est_usd_m ?? null,
        launchMethodsZh: master.launchMethodsZh || [],
        launchMethodsEn: master.launchMethodsEn || [],
        mainLaunchSites: master.mainLaunchSites || [],
        siteAccessZh: master.siteAccessZh || members.map((m) => m.siteAccessZh).filter(Boolean).join('；'),
        siteAccessEn: master.siteAccessEn || members.map((m) => m.siteAccessEn).filter(Boolean).join('; '),
        summary_zh: master.summary_zh || dominant.route_why_zh || dominant.route_summary,
        summary_en: master.summary_en || dominant.route_why_en || dominant.route_summary,
        valuationZh: master.valuationZh || dominant.valuation,
        fundingZh: master.fundingZh || dominant.funding,
        investorsZh: master.investorsZh || dominant.investors,
        sources: master.sources || dominant.sources || []
      });
    });
    return rows.sort((a, b) => num(b.model_supply_selected_kg || b.strategic_supply_selected_kg) - num(a.model_supply_selected_kg || a.strategic_supply_selected_kg));
  }

  function buildCountryRows(nodes) {
    const companyRows = buildCompanyRows(nodes);
    const groups = groupBy(companyRows, (r) => r.country);
    const rows = [];
    groups.forEach((members, country) => {
      const dominant = [...members].sort((a, b) => num(b.model_supply_selected_kg || b.strategic_supply_selected_kg) - num(a.model_supply_selected_kg || a.strategic_supply_selected_kg))[0];
      const modelLaunches = members.reduce((sum, n) => sum + num(n.model_launches_selected), 0);
      const modelSupply = members.reduce((sum, n) => sum + num(n.model_supply_selected_kg), 0);
      const modelRevenue = members.reduce((sum, n) => sum + num(n.model_revenue_selected_usd_m), 0);
      rows.push({
        type: 'country',
        id: country,
        name: country,
        label: country,
        country,
        region: dominant.region,
        route_class: dominant.route_class,
        route_class_zh: dominant.route_class_zh,
        route_class_en: dominant.route_class_en,
        members,
        vehicles: members.flatMap((m) => m.vehicles),
        max_single_launch_kg: Math.max(...members.map((m) => num(m.max_single_launch_kg)), 0),
        strategic_supply_selected_kg: members.reduce((sum, n) => sum + num(n.strategic_supply_selected_kg), 0),
        strategic_launches_selected: members.reduce((sum, n) => sum + num(n.strategic_launches_selected), 0),
        model_payload_selected_kg: Math.max(...members.map((m) => num(m.model_payload_selected_kg)), 0),
        model_supply_selected_kg: modelSupply,
        model_launches_selected: modelLaunches,
        model_cum_launches_selected: members.reduce((sum, n) => sum + num(n.model_cum_launches_selected), 0),
        model_price_selected_usd_m: modelLaunches ? modelRevenue / modelLaunches : 0,
        model_revenue_selected_usd_m: modelRevenue,
        model_usd_per_kg_selected: modelSupply ? (modelRevenue * 1_000_000 / modelSupply) : 0,
        valuation_est_usd_m: members.reduce((sum, n) => sum + (n.valuation_est_usd_m ? num(n.valuation_est_usd_m) : 0), 0),
        funding_est_usd_m: members.reduce((sum, n) => sum + (n.funding_est_usd_m ? num(n.funding_est_usd_m) : 0), 0),
        companyCount: members.length
      });
    });
    return rows.sort((a, b) => num(b.model_supply_selected_kg || b.strategic_supply_selected_kg) - num(a.model_supply_selected_kg || a.strategic_supply_selected_kg));
  }

  const BENCHMARK_METRICS = {
    single_launch_kg: {
      type: 'mass',
      get: (row) => num(row.type === 'vehicle' ? row.single_launch_kg : row.max_single_launch_kg)
    },
    strategic_supply_selected_kg: { type: 'mass', get: (row) => num(row.strategic_supply_selected_kg ?? row[currentKeys().strategicSupply]) },
    strategic_launches_selected: { type: 'count', get: (row) => num(row.strategic_launches_selected ?? row[currentKeys().strategicLaunches]) },
    model_payload_selected_kg: { type: 'mass', get: (row) => num(row.model_payload_selected_kg ?? row[currentKeys().modelPayload]) },
    model_supply_selected_kg: { type: 'mass', get: (row) => num(row.model_supply_selected_kg ?? row[currentKeys().modelSupply]) },
    model_launches_selected: { type: 'count', get: (row) => num(row.model_launches_selected ?? row[currentKeys().modelLaunches]) },
    model_cum_launches_selected: { type: 'count', get: (row) => num(row.model_cum_launches_selected ?? row[currentKeys().modelCumLaunches]) },
    model_price_selected_usd_m: { type: 'money', get: (row) => num(row.model_price_selected_usd_m ?? row[currentKeys().modelPrice]) },
    model_revenue_selected_usd_m: { type: 'money', get: (row) => num(row.model_revenue_selected_usd_m ?? row[currentKeys().modelRevenue]) },
    model_usd_per_kg_selected: { type: 'usdkg', get: (row) => num(row.model_usd_per_kg_selected ?? row[currentKeys().modelUsdPerKg]) },
    valuation_est_usd_m: { type: 'money', get: (row) => num(row.valuation_est_usd_m) },
    funding_est_usd_m: { type: 'money', get: (row) => num(row.funding_est_usd_m) }
  };

  const SITE_METRICS = {
    strategic_supply_selected_kg: {
      type: 'mass',
      get: (row) => num(row.strategic_supply_selected_kg)
    },
    model_supply_selected_kg: {
      type: 'mass',
      get: (row) => num(row.model_supply_selected_kg)
    },
    model_launches_selected: {
      type: 'count',
      get: (row) => num(row.model_launches_selected)
    },
    vehicle_count: {
      type: 'count',
      get: (row) => num(row.vehicle_count)
    }
  };

  function formatMetricValue(metricKey, value) {
    const type = (BENCHMARK_METRICS[metricKey] || SITE_METRICS[metricKey] || {}).type;
    if (type === 'mass') return fmtMass(value);
    if (type === 'money') return fmtMoneyM(value);
    if (type === 'usdkg') return fmtUsdPerKg(value);
    return fmtInt(value);
  }

  function buildBenchmarkRows(nodes) {
    if (state.benchmarkMode === 'vehicle') {
      return nodes.map((n) => ({
        ...n,
        type: 'vehicle',
        name: isZh ? (n.vehicleZh || n.vehicle) : n.vehicle,
        label: isZh ? `${n.companyZh || n.company} · ${n.vehicleZh || n.vehicle}` : `${n.company} · ${n.vehicle}`
      }));
    }
    if (state.benchmarkMode === 'company') return buildCompanyRows(nodes);
    return buildCountryRows(nodes);
  }

  function buildSiteRows(nodes) {
    const groups = new Map();
    const keys = currentKeys();
    nodes.forEach((node) => {
      (node.launchSites || []).forEach((siteName) => {
        if (!groups.has(siteName)) {
          const meta = state.data.launchSites[siteName] || {};
          groups.set(siteName, {
            type: 'site',
            id: siteName,
            name: siteName,
            label: isZh ? (meta.nameZh || siteName) : siteName,
            site: siteName,
            country: meta.country || t('unknown'),
            operator: isZh ? (meta.operatorZh || meta.operator || t('unknown')) : (meta.operator || meta.operatorZh || t('unknown')),
            access_category: meta.access_category || 'unknown',
            access_category_zh: meta.access_category_zh || t('accessCategories').unknown,
            site_type: isZh ? (meta.site_type_zh || meta.site_type || t('unknown')) : (meta.site_type || meta.site_type_zh || t('unknown')),
            lat: num(meta.lat),
            lon: num(meta.lon),
            vehicles: new Set(),
            companies: new Set(),
            members: [],
            strategic_supply_selected_kg: 0,
            model_supply_selected_kg: 0,
            model_launches_selected: 0
          });
        }
        const row = groups.get(siteName);
        row.vehicles.add(isZh ? (node.vehicleZh || node.vehicle) : node.vehicle);
        row.companies.add(isZh ? (node.companyZh || node.company) : node.company);
        row.members.push(node);
        row.strategic_supply_selected_kg += num(node[keys.strategicSupply]);
        row.model_supply_selected_kg += num(node[keys.modelSupply]);
        row.model_launches_selected += num(node[keys.modelLaunches]);
      });
    });

    return [...groups.values()].map((row) => ({
      ...row,
      vehicles: [...row.vehicles],
      companies: [...row.companies],
      vehicle_count: row.vehicles.size,
      company_count: row.companies.size
    })).sort((a, b) => SITE_METRICS[state.siteMetric].get(b) - SITE_METRICS[state.siteMetric].get(a));
  }

  function updateShellText() {
    document.getElementById('brandTitle').textContent = t('brand');
    document.getElementById('heroEyebrow').textContent = t('heroEyebrow');
    document.getElementById('heroTitle').textContent = t('heroTitle');
    document.getElementById('heroSubtitle').textContent = t('heroSubtitle');
    document.getElementById('navMap').textContent = t('navMap');
    document.getElementById('navSites').textContent = t('navSites');
    document.getElementById('navBenchmark').textContent = t('navBenchmark');
    document.getElementById('overviewTitle').textContent = t('overviewTitle');
    document.getElementById('routeTitle').textContent = t('routeTitle');
    document.getElementById('routeSubtitle').textContent = t('routeSubtitle');
    document.getElementById('mapTitle').textContent = t('mapTitle');
    document.getElementById('mapSubtitle').textContent = t('mapSubtitle');
    document.getElementById('sitesTitle').textContent = t('sitesTitle');
    document.getElementById('sitesSubtitle').textContent = t('sitesSubtitle');
    document.getElementById('benchmarkTitle').textContent = t('benchmarkTitle');
    document.getElementById('benchmarkSubtitle').textContent = t('benchmarkSubtitle');
    document.getElementById('listTitle').textContent = t('listTitle');
    document.getElementById('listSubtitle').textContent = t('listSubtitle');
    document.getElementById('dataTitle').textContent = t('dataTitle');
    document.getElementById('dataSubtitle').textContent = t('dataSubtitle');
    document.getElementById('closeDrawer').setAttribute('aria-label', t('drawerClose'));

    const takeaways = t('heroTakeaways');
    els.heroTakeaways.innerHTML = takeaways.map(([title, body]) => `<div class="takeaway"><h3>${title}</h3><p>${body}</p></div>`).join('');
  }

  function renderOverview() {
    const summary = state.data.meta_v3.excel_summary.market_totals;
    const y2026 = summary[2026];
    const y2030 = summary[2030];
    const cards = [
      { title: `2026E ${isZh ? '供给' : 'Supply'}`, value: fmtMass(y2026.total_supply_kg), meta: `${isZh ? '需求' : 'Demand'} ${fmtMass(y2026.total_demand_kg)}` },
      { title: `2030E ${isZh ? '供给' : 'Supply'}`, value: fmtMass(y2030.total_supply_kg), meta: `${isZh ? '需求' : 'Demand'} ${fmtMass(y2030.total_demand_kg)}` },
      { title: isZh ? '2030E 发射次数' : '2030E launches', value: fmtInt(y2030.total_launches), meta: `${isZh ? '平均价格' : 'Avg price'} ${fmtMoneyM(y2030.avg_price_per_launch_usd_m)}` },
      { title: isZh ? '2030E 供需比' : '2030E demand / supply', value: fmtFloat(y2030.demand_supply_ratio, 3), meta: `${isZh ? '平均 $/kg' : 'Avg $/kg'} ${fmtUsdPerKg(y2030.avg_usd_per_kg)}` }
    ];
    els.overviewGrid.innerHTML = cards.map((card) => `
      <article class="metric-card">
        <div class="metric-title">${card.title}</div>
        <div class="metric-value">${card.value}</div>
        <div class="metric-meta">${card.meta}</div>
      </article>
    `).join('');
  }

  function routeFilterCounts() {
    const counts = {};
    state.data.nodes.forEach((node) => {
      counts[node.route_class] = (counts[node.route_class] || 0) + 1;
    });
    return counts;
  }

  function renderRouteCards() {
    const counts = routeFilterCounts();
    const entries = Object.keys(routeDefs()).map((id) => routeInfo(id)).sort((a, b) => a.order - b.order);
    els.routeGrid.innerHTML = `
      <button class="route-card ${state.route === 'ALL' ? 'active' : ''}" data-route="ALL">
        <div class="route-card-top"><span class="route-dot" style="background:#64748b"></span><strong>${t('all')}</strong></div>
        <p>${isZh ? '显示全部路线' : 'Show all route classes'}</p>
      </button>
      ${entries.map((route) => `
        <button class="route-card ${state.route === route.id ? 'active' : ''}" data-route="${route.id}">
          <div class="route-card-top">
            <span class="route-dot" style="background:${route.color}"></span>
            <strong>${route.name}</strong>
            <span class="route-count">${fmtInt(counts[route.id] || 0)}</span>
          </div>
          <p>${ellipsis(route.why || '', 110)}</p>
        </button>
      `).join('')}
    `;
    [...els.routeGrid.querySelectorAll('[data-route]')].forEach((btn) => {
      btn.addEventListener('click', () => {
        state.route = btn.dataset.route;
        syncSelectOptions();
        renderAll();
      });
    });
  }

  function makeOption(value, label, selected) {
    return `<option value="${String(value)}" ${selected ? 'selected' : ''}>${label}</option>`;
  }

  function availableCountries() {
    const nodes = state.data.nodes.filter((node) => {
      if (state.route !== 'ALL' && node.route_class !== state.route) return false;
      if (state.region !== 'ALL' && node.region !== state.region) return false;
      return true;
    });
    return [...new Set(nodes.map((n) => n.country))].sort((a, b) => a.localeCompare(b));
  }

  function availableCompanies() {
    const nodes = state.data.nodes.filter((node) => {
      if (state.route !== 'ALL' && node.route_class !== state.route) return false;
      if (state.region !== 'ALL' && node.region !== state.region) return false;
      if (state.country !== 'ALL' && node.country !== state.country) return false;
      return true;
    });
    return [...new Set(nodes.map((n) => n.company))].sort((a, b) => a.localeCompare(b));
  }

  function syncSelectOptions() {
    const regions = ['ALL', ...new Set(state.data.nodes.map((n) => n.region))];
    els.year2026.textContent = t('year2026');
    els.year2030.textContent = t('year2030');
    els.year2026.classList.toggle('active', state.year === 2026);
    els.year2030.classList.toggle('active', state.year === 2030);

    els.hideZeroBtn.textContent = state.hideZero ? t('showZero') : t('hideZero');
    els.hideZeroBtn.classList.toggle('active', state.hideZero);

    els.regionSelect.innerHTML = [
      makeOption('ALL', `${t('region')}: ${t('all')}`, state.region === 'ALL'),
      ...regions.filter((r) => r !== 'ALL').sort().map((r) => makeOption(r, regionLabel(r), state.region === r))
    ].join('');

    const countries = availableCountries();
    if (state.country !== 'ALL' && !countries.includes(state.country)) state.country = 'ALL';
    els.countrySelect.innerHTML = [
      makeOption('ALL', `${t('country')}: ${t('all')}`, state.country === 'ALL'),
      ...countries.map((c) => makeOption(c, c, state.country === c))
    ].join('');

    const companies = availableCompanies();
    if (state.company !== 'ALL' && !companies.includes(state.company)) state.company = 'ALL';
    els.companySelect.innerHTML = [
      makeOption('ALL', `${t('company')}: ${t('all')}`, state.company === 'ALL'),
      ...companies.map((c) => {
        const master = companyMaster(c);
        const label = isZh ? (master?.companyZh || c) : c;
        return makeOption(c, label, state.company === c);
      })
    ].join('');

    els.searchInput.placeholder = t('search');
    els.clearBtn.textContent = t('clear');

    els.benchmarkMode.innerHTML = Object.entries(t('benchmarkModes')).map(([value, label]) => makeOption(value, label, state.benchmarkMode === value)).join('');
    els.siteMetricSelect.innerHTML = Object.entries(t('siteMetricOptions')).map(([value, label]) => makeOption(value, label, state.siteMetric === value)).join('');
    els.benchmarkMetric.innerHTML = Object.entries(t('benchmarkMetrics')).map(([value, label]) => makeOption(value, label, state.benchmarkMetric === value)).join('');
  }

  function renderMapSummary(nodes) {
    const keys = currentKeys();
    const supply = nodes.reduce((sum, n) => sum + num(n[keys.strategicSupply]), 0);
    const modelSupply = nodes.reduce((sum, n) => sum + num(n[keys.modelSupply]), 0);
    const launches = nodes.reduce((sum, n) => sum + num(n[keys.modelLaunches]), 0);
    els.mapSummary.innerHTML = `
      <div class="summary-pill"><strong>${t('visibleNodes')}</strong><span>${fmtInt(nodes.length)}</span></div>
      <div class="summary-pill"><strong>${yearLabel()} ${isZh ? '战略供给' : 'strategic supply'}</strong><span>${fmtMass(supply)}</span></div>
      <div class="summary-pill"><strong>${yearLabel()} Excel ${isZh ? '供给' : 'supply'}</strong><span>${fmtMass(modelSupply)}</span></div>
      <div class="summary-pill"><strong>${yearLabel()} Excel ${isZh ? '发射次数' : 'launches'}</strong><span>${fmtInt(launches)}</span></div>
    `;
    els.mapLegend.textContent = t('mapLegend');
  }

  function renderMap(nodes) {
    renderMapSummary(nodes);
    const svg = els.bubbleChart;
    const width = 980;
    const height = 560;
    const margin = { top: 28, right: 32, bottom: 76, left: 90 };
    const innerW = width - margin.left - margin.right;
    const innerH = height - margin.top - margin.bottom;
    const xMin = Math.log10(100);
    const xMax = Math.log10(200000);
    const metricKey = currentKeys().strategicSupply;
    const maxMetric = Math.max(...nodes.map((n) => num(n[metricKey])), 1);
    const ticks = [0.1, 0.3, 1, 3, 10, 30, 100, 200];
    const xScale = (kg) => {
      const x = Math.log10(Math.max(num(kg), 100));
      const ratio = (x - xMin) / (xMax - xMin);
      return margin.left + ratio * innerW;
    };
    const yScale = (score) => margin.top + innerH - (num(score) / 10) * innerH;
    const rScale = (v) => 7 + Math.sqrt(Math.max(num(v), 0) / maxMetric) * 40;

    const labels = [...nodes].sort((a, b) => num(b[metricKey]) - num(a[metricKey])).slice(0, 10).map((n) => n.id);
    const parts = [];
    parts.push(`<rect x="0" y="0" width="${width}" height="${height}" fill="transparent"></rect>`);
    for (let y = 0; y <= 10; y += 2) {
      const py = yScale(y);
      parts.push(`<line class="svg-grid" x1="${margin.left}" y1="${py}" x2="${width - margin.right}" y2="${py}"></line>`);
      parts.push(`<text class="svg-axis" x="${margin.left - 14}" y="${py + 4}" text-anchor="end">${y}</text>`);
    }
    ticks.forEach((tick) => {
      const px = xScale(tick * 1000);
      parts.push(`<line class="svg-grid" x1="${px}" y1="${margin.top}" x2="${px}" y2="${height - margin.bottom}"></line>`);
      parts.push(`<text class="svg-axis" x="${px}" y="${height - margin.bottom + 28}" text-anchor="middle">${tick < 1 ? `${tick * 1000}kg` : `${tick}t`}</text>`);
    });
    parts.push(`<line class="svg-axis-line" x1="${margin.left}" y1="${height - margin.bottom}" x2="${width - margin.right}" y2="${height - margin.bottom}"></line>`);
    parts.push(`<line class="svg-axis-line" x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${height - margin.bottom}"></line>`);
    parts.push(`<text class="svg-title" x="${margin.left + innerW / 2}" y="${height - 18}" text-anchor="middle">${t('mapAxisX')}</text>`);
    parts.push(`<text class="svg-title" x="24" y="${margin.top + innerH / 2}" transform="rotate(-90 24 ${margin.top + innerH / 2})" text-anchor="middle">${t('mapAxisY')}</text>`);

    nodes.forEach((node) => {
      const info = routeInfo(node.route_class);
      const cx = xScale(node.single_launch_kg);
      const cy = yScale(node.cost_score);
      const r = rScale(node[metricKey]);
      parts.push(`
        <g class="bubble" data-id="${node.id}" tabindex="0" role="button" aria-label="${isZh ? (node.vehicleZh || node.vehicle) : node.vehicle}">
          <circle cx="${cx}" cy="${cy}" r="${r}" fill="${info.color}" fill-opacity="0.16" stroke="${info.color}" stroke-width="2.4"></circle>
          <circle cx="${cx}" cy="${cy}" r="${Math.max(2.5, r * 0.16)}" fill="${info.color}" fill-opacity="0.88"></circle>
        </g>
      `);
    });

    const taken = [];
    nodes.filter((n) => labels.includes(n.id)).forEach((node) => {
      const label = isZh ? (node.vehicleZh || node.vehicle) : node.vehicle;
      const cx = xScale(node.single_launch_kg);
      const cy = yScale(node.cost_score);
      const r = rScale(node[metricKey]);
      let lx = cx + r + 8;
      let ly = cy - r - 8;
      const w = Math.max(50, label.length * 8.4);
      const h = 18;
      if (lx + w > width - margin.right) lx = cx - r - w - 8;
      if (ly < margin.top + 14) ly = cy + r + 14;
      let tries = 0;
      while (tries < 10 && taken.some((b) => !(lx + w < b.x || b.x + b.w < lx || ly + h < b.y || b.y + b.h < ly))) {
        ly += 18;
        tries += 1;
      }
      taken.push({ x: lx, y: ly - 12, w, h });
      parts.push(`<text class="svg-bubble-label" x="${lx}" y="${ly}">${label}</text>`);
    });

    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.innerHTML = parts.join('');
    [...svg.querySelectorAll('.bubble')].forEach((el) => {
      const node = nodes.find((n) => n.id === el.dataset.id);
      if (!node) return;
      el.addEventListener('mouseenter', (e) => showNodeTooltip(e, node));
      el.addEventListener('mousemove', moveTooltip);
      el.addEventListener('mouseleave', hideTooltip);
      el.addEventListener('click', () => openDrawer({ type: 'vehicle', id: node.id }));
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openDrawer({ type: 'vehicle', id: node.id });
        }
      });
    });
  }

  function showNodeTooltip(event, node) {
    const keys = currentKeys();
    const html = `
      <strong>${isZh ? (node.companyZh || node.company) : node.company} · ${isZh ? (node.vehicleZh || node.vehicle) : node.vehicle}</strong>
      <div class="tooltip-meta">${routeTag(node)} · ${node.country}</div>
      <div>${t('labels').payload}: ${fmtMass(node.single_launch_kg)}</div>
      <div>${yearLabel()} ${isZh ? '战略供给' : 'strategic supply'}: ${fmtMass(node[keys.strategicSupply])}</div>
      <div>${yearLabel()} Excel ${isZh ? '供给' : 'supply'}: ${fmtMass(node[keys.modelSupply])}</div>
      <div>${yearLabel()} Excel ${isZh ? '发射次数' : 'launches'}: ${fmtInt(node[keys.modelLaunches])}</div>
    `;
    showTooltip(event, html);
  }

  function showSiteTooltip(event, row) {
    const metricVal = SITE_METRICS[state.siteMetric].get(row);
    const html = `
      <strong>${row.label}</strong>
      <div class="tooltip-meta">${row.country} · ${accessLabel(row.access_category)}</div>
      <div>${t('labels').operator}: ${row.operator}</div>
      <div>${t('labels').vehicleCount}: ${fmtInt(row.vehicle_count)}</div>
      <div>${t('siteMetric')}: ${formatMetricValue(state.siteMetric, metricVal)}</div>
    `;
    showTooltip(event, html);
  }

  function showTooltip(event, html) {
    els.tooltip.innerHTML = html;
    els.tooltip.hidden = false;
    moveTooltip(event);
  }

  function moveTooltip(event) {
    const box = els.tooltipHost.getBoundingClientRect();
    const x = Math.min(box.width - 320, Math.max(12, event.clientX - box.left + 12));
    const y = Math.max(12, event.clientY - box.top + 12);
    els.tooltip.style.left = `${x}px`;
    els.tooltip.style.top = `${y}px`;
  }

  function hideTooltip() {
    els.tooltip.hidden = true;
  }

  function renderSiteMap(rows) {
    const svg = els.siteMap;
    const width = 980;
    const height = 460;
    const margin = { top: 22, right: 24, bottom: 24, left: 24 };
    const innerW = width - margin.left - margin.right;
    const innerH = height - margin.top - margin.bottom;
    const xScale = (lon) => margin.left + ((num(lon) + 180) / 360) * innerW;
    const yScale = (lat) => margin.top + ((90 - num(lat)) / 180) * innerH;
    const maxVal = Math.max(...rows.map((r) => SITE_METRICS[state.siteMetric].get(r)), 1);
    const rScale = (v) => 5 + Math.sqrt(Math.max(num(v), 0) / maxVal) * 18;
    const parts = [];
    parts.push(`<rect x="0" y="0" width="${width}" height="${height}" rx="18" fill="#f8fbff" stroke="#d6dfeb"></rect>`);
    for (let lon = -120; lon <= 120; lon += 60) {
      const x = xScale(lon);
      parts.push(`<line class="svg-grid" x1="${x}" y1="${margin.top}" x2="${x}" y2="${height - margin.bottom}"></line>`);
    }
    for (let lat = -60; lat <= 60; lat += 30) {
      const y = yScale(lat);
      parts.push(`<line class="svg-grid" x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}"></line>`);
    }
    parts.push(`<text class="svg-note" x="${width - margin.right}" y="18" text-anchor="end">${t('siteMetric')}: ${t('siteMetricOptions')[state.siteMetric]}</text>`);

    const labels = rows.slice(0, 10).map((r) => r.site);
    rows.forEach((row) => {
      const color = ACCESS_COLORS[row.access_category] || ACCESS_COLORS.unknown;
      const cx = xScale(row.lon);
      const cy = yScale(row.lat);
      const r = rScale(SITE_METRICS[state.siteMetric].get(row));
      parts.push(`
        <g class="site-marker" data-site="${row.site}" tabindex="0" role="button" aria-label="${row.label}">
          <circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" fill-opacity="0.16" stroke="${color}" stroke-width="2.2"></circle>
          <circle cx="${cx}" cy="${cy}" r="${Math.max(2.2, r * 0.18)}" fill="${color}"></circle>
        </g>
      `);
    });

    rows.filter((r) => labels.includes(r.site)).forEach((row) => {
      const cx = xScale(row.lon);
      const cy = yScale(row.lat);
      const label = row.label;
      parts.push(`<text class="svg-bubble-label" x="${cx + 10}" y="${cy - 10}">${label}</text>`);
    });

    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.innerHTML = parts.join('');
    [...svg.querySelectorAll('.site-marker')].forEach((el) => {
      const row = rows.find((r) => r.site === el.dataset.site);
      if (!row) return;
      el.addEventListener('mouseenter', (e) => showSiteTooltip(e, row));
      el.addEventListener('mousemove', moveTooltip);
      el.addEventListener('mouseleave', hideTooltip);
      el.addEventListener('click', () => openDrawer({ type: 'site', id: row.site }));
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openDrawer({ type: 'site', id: row.site });
        }
      });
    });
  }

  function renderSiteList(rows) {
    els.siteList.innerHTML = rows.length ? rows.slice(0, 12).map((row) => `
      <article class="site-card" data-site="${row.site}">
        <div class="card-head">
          <div>
            <h4>${row.label}</h4>
            <div class="muted">${row.country} · ${accessLabel(row.access_category)}</div>
          </div>
          <div class="site-metric">${formatMetricValue(state.siteMetric, SITE_METRICS[state.siteMetric].get(row))}</div>
        </div>
        <p>${t('labels').operator}: ${row.operator}</p>
        <div class="chip-row">
          <span class="chip">${t('labels').vehicleCount}: ${fmtInt(row.vehicle_count)}</span>
          <span class="chip">${t('labels').companyCount}: ${fmtInt(row.company_count)}</span>
        </div>
        <div class="small-list">${row.companies.slice(0, 4).join(' · ') || t('unknown')}</div>
      </article>
    `).join('') : `<div class="empty-state">${t('empty')}</div>`;

    [...els.siteList.querySelectorAll('.site-card')].forEach((card) => {
      card.addEventListener('click', () => openDrawer({ type: 'site', id: card.dataset.site }));
    });
  }

  function renderSites(nodes) {
    const rows = buildSiteRows(nodes);
    renderSiteMap(rows);
    renderSiteList(rows);
  }

  function benchmarkRowsAndMetric(nodes) {
    const rows = buildBenchmarkRows(nodes);
    const metricDef = BENCHMARK_METRICS[state.benchmarkMetric];
    return rows
      .map((row) => ({ ...row, metricValue: metricDef.get(row) }))
      .filter((row) => num(row.metricValue) > 0)
      .sort((a, b) => num(b.metricValue) - num(a.metricValue))
      .slice(0, state.topN);
  }

  function renderBenchmark(nodes) {
    const rows = benchmarkRowsAndMetric(nodes);
    const svg = els.benchmarkChart;
    const width = 980;
    const barH = 36;
    const gap = 14;
    const margin = { top: 24, right: 80, bottom: 26, left: 260 };
    const height = Math.max(260, margin.top + margin.bottom + rows.length * (barH + gap));
    const innerW = width - margin.left - margin.right;
    const maxVal = Math.max(...rows.map((r) => num(r.metricValue)), 1);
    const xScale = (v) => margin.left + (num(v) / maxVal) * innerW;
    const parts = [];
    parts.push(`<rect x="0" y="0" width="${width}" height="${height}" fill="transparent"></rect>`);
    rows.forEach((row, i) => {
      const y = margin.top + i * (barH + gap);
      const infoColor = row.route_class ? routeInfo(row.route_class).color : '#64748b';
      const x = xScale(row.metricValue);
      parts.push(`<text class="svg-axis" x="${margin.left - 12}" y="${y + 24}" text-anchor="end">${row.label}</text>`);
      parts.push(`<g class="bar-row" data-id="${row.id}" data-type="${row.type}">
        <rect x="${margin.left}" y="${y}" width="${innerW}" height="${barH}" rx="10" fill="#eef3fa"></rect>
        <rect x="${margin.left}" y="${y}" width="${Math.max(4, x - margin.left)}" height="${barH}" rx="10" fill="${infoColor}" fill-opacity="0.82"></rect>
        <text class="svg-bar-value" x="${Math.min(width - margin.right + 12, x + 10)}" y="${y + 24}">${formatMetricValue(state.benchmarkMetric, row.metricValue)}</text>
      </g>`);
    });
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.innerHTML = parts.join('');

    [...svg.querySelectorAll('.bar-row')].forEach((el) => {
      const type = el.dataset.type;
      const id = el.dataset.id;
      el.addEventListener('click', () => {
        if (type === 'vehicle') openDrawer({ type: 'vehicle', id });
        if (type === 'company') {
          state.company = id;
          syncSelectOptions();
          renderAll();
        }
        if (type === 'country') {
          state.country = id;
          syncSelectOptions();
          renderAll();
        }
      });
    });

    const visible = filteredNodes();
    const keys = currentKeys();
    const supply = visible.reduce((sum, n) => sum + num(n[keys.modelSupply]), 0);
    const launches = visible.reduce((sum, n) => sum + num(n[keys.modelLaunches]), 0);
    const revenue = visible.reduce((sum, n) => sum + num(n[keys.modelRevenue]), 0);
    els.benchmarkSummary.innerHTML = `
      <div class="metric-card compact">
        <div class="metric-title">${yearLabel()} Excel ${isZh ? '供给' : 'supply'}</div>
        <div class="metric-value">${fmtMass(supply)}</div>
      </div>
      <div class="metric-card compact">
        <div class="metric-title">${yearLabel()} Excel ${isZh ? '发射次数' : 'launches'}</div>
        <div class="metric-value">${fmtInt(launches)}</div>
      </div>
      <div class="metric-card compact">
        <div class="metric-title">${yearLabel()} Excel ${isZh ? '收入' : 'revenue'}</div>
        <div class="metric-value">${fmtMoneyM(revenue)}</div>
      </div>
      <div class="metric-card compact">
        <div class="metric-title">${t('benchmarkMetric')}</div>
        <div class="metric-value small">${t('benchmarkMetrics')[state.benchmarkMetric]}</div>
      </div>
    `;
  }

  function renderCompanyCards(nodes) {
    const rows = buildCompanyRows(nodes);
    els.companyGrid.innerHTML = rows.length ? rows.map((row) => `
      <article class="company-card" data-company="${row.company}">
        <div class="card-head">
          <div>
            <h3>${row.label}</h3>
            <div class="muted">${row.country} · ${routeTag(row)}</div>
          </div>
          <div class="card-kpi">${fmtMass(row.model_supply_selected_kg || row.strategic_supply_selected_kg)}</div>
        </div>
        <p>${isZh ? row.summary_zh : row.summary_en}</p>
        <div class="chip-row">
          <span class="chip">${t('companyCardVehicles')}: ${row.vehicles.slice(0, 3).join(' / ')}${row.vehicles.length > 3 ? '…' : ''}</span>
          <span class="chip">${t('companyCardSites')}: ${(row.mainLaunchSites || []).slice(0, 2).join(' / ') || t('unknown')}</span>
        </div>
        <div class="stats-grid">
          <div class="stat-box"><span>${yearLabel()} Excel ${isZh ? '发射次数' : 'launches'}</span><strong>${fmtInt(row.model_launches_selected)}</strong></div>
          <div class="stat-box"><span>${isZh ? '最大单发能力' : 'Max single-launch'}</span><strong>${fmtMass(row.max_single_launch_kg)}</strong></div>
          <div class="stat-box"><span>${isZh ? '估值' : 'Valuation'}</span><strong>${fmtMoneyM(row.valuation_est_usd_m)}</strong></div>
          <div class="stat-box"><span>${isZh ? '融资额' : 'Funding'}</span><strong>${fmtMoneyM(row.funding_est_usd_m)}</strong></div>
        </div>
      </article>
    `).join('') : `<div class="empty-state">${t('empty')}</div>`;

    [...els.companyGrid.querySelectorAll('.company-card')].forEach((card) => {
      card.addEventListener('click', () => openDrawer({ type: 'company', id: card.dataset.company }));
    });
  }

  function renderDataPort() {
    const summary = state.data.meta_v3.excel_summary;
    const gridItems = [
      { k: isZh ? '映射车辆数' : 'Linked vehicles', v: `${summary.linked_vehicle_count} / ${summary.total_vehicle_count}` },
      { k: isZh ? '新增车辆' : 'Added vehicles', v: fmtInt(summary.new_vehicle_count_added) },
      { k: isZh ? '新增国家' : 'Added countries', v: (summary.new_countries_added || []).join(' / ') },
      { k: isZh ? '发射场站点' : 'Launch sites', v: fmtInt(Object.keys(state.data.launchSites).length) },
      { k: isZh ? '公司数' : 'Companies', v: fmtInt(state.data.companies.length) },
      { k: isZh ? 'JSON 文件' : 'JSON file', v: 'data/rocket_market_map_2026_2030_v3.json' }
    ];
    els.dataPortGrid.innerHTML = `
      <div class="port-grid">
        ${gridItems.map((item) => `<div class="metric-card compact"><div class="metric-title">${item.k}</div><div class="metric-value small">${item.v}</div></div>`).join('')}
      </div>
      <ul class="port-list">
        ${t('portNotes').map((item) => `<li>${item}</li>`).join('')}
      </ul>
    `;
  }

  function findVehicle(id) {
    return state.data.nodes.find((n) => n.id === id);
  }

  function findCompany(name) {
    return state.data.companies.find((c) => c.company === name);
  }

  function findSite(name) {
    const meta = state.data.launchSites[name];
    if (!meta) return null;
    return buildSiteRows(filteredNodes()).find((s) => s.site === name) || {
      site: name,
      label: isZh ? (meta.nameZh || name) : name,
      country: meta.country,
      operator: isZh ? (meta.operatorZh || meta.operator || t('unknown')) : (meta.operator || meta.operatorZh || t('unknown')),
      access_category: meta.access_category || 'unknown',
      access_category_zh: meta.access_category_zh || t('accessCategories').unknown,
      site_type: isZh ? (meta.site_type_zh || meta.site_type || t('unknown')) : (meta.site_type || meta.site_type_zh || t('unknown')),
      lat: num(meta.lat),
      lon: num(meta.lon),
      vehicles: meta.vehicles || [],
      companies: meta.companies || [],
      vehicle_count: num(meta.vehicleCount),
      company_count: num(meta.companyCount),
      strategic_supply_selected_kg: num(meta[currentKeys().strategicSupply]),
      model_supply_selected_kg: num(meta[currentKeys().modelSupply]),
      model_launches_selected: num(meta[currentKeys().modelLaunches])
    };
  }

  function renderExcelTable(item, isAggregate = false) {
    const rows = [2026, 2027, 2028, 2029, 2030].map((y) => `
      <tr>
        <td>${y}E</td>
        <td>${fmtInt(item[`model_launches_${y}`])}</td>
        <td>${fmtMass(item[`model_payload_${y}_kg`])}</td>
        <td>${fmtMass(item[`model_supply_${y}_kg`])}</td>
        <td>${fmtMoneyM(item[`model_price_${y}_usd_m`])}</td>
        <td>${fmtMoneyM(item[`model_revenue_${y}_usd_m`])}</td>
        <td>${fmtUsdPerKg(item[`model_usd_per_kg_${y}`])}</td>
        <td>${fmtInt(item[`model_cum_launches_${y}`])}</td>
      </tr>
    `).join('');
    const note = item.excel_model_notes || item.excel_model_key_models || item.excel_model_company || t('unknown');
    return `
      <div class="info-card soft">
        <div class="metric-title">${isAggregate ? (isZh ? '公司汇总模型' : 'Company aggregate model') : (isZh ? '车辆模型' : 'Vehicle model')}</div>
        <div class="metric-meta">${note}</div>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>${isZh ? '发射次数' : 'Launches'}</th>
              <th>${isZh ? '单发有效载荷' : 'Payload / launch'}</th>
              <th>${isZh ? '年供给' : 'Annual supply'}</th>
              <th>${isZh ? '单次价格' : 'Price / launch'}</th>
              <th>${isZh ? '年收入' : 'Annual revenue'}</th>
              <th>$ / kg</th>
              <th>${isZh ? '累计发射次数' : 'Cumulative launches'}</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
  }

  function renderSources(sources) {
    if (!sources || !sources.length) return `<div class="muted">${t('unknown')}</div>`;
    return `<div class="source-list">${sources.map((s) => `<a href="${s.url}" target="_blank" rel="noreferrer noopener">${s.label}</a>`).join('')}</div>`;
  }

  function openDrawer(drawer) {
    state.drawer = drawer;
    renderDrawer();
    els.drawerBackdrop.hidden = false;
    els.detailDrawer.classList.add('open');
  }

  function closeDrawer() {
    state.drawer = null;
    els.drawerBackdrop.hidden = true;
    els.detailDrawer.classList.remove('open');
  }

  function renderVehicleDrawer(node) {
    const keys = currentKeys();
    return `
      <div class="drawer-hero">
        <p class="eyebrow">${routeTag(node)} · ${node.country}</p>
        <h2>${isZh ? (node.companyZh || node.company) : node.company} · ${isZh ? (node.vehicleZh || node.vehicle) : node.vehicle}</h2>
        <p class="drawer-subtitle">${isZh ? (node.currentRealityZh || node.current_reality) : (node.current_reality || node.currentRealityZh || t('unknown'))}</p>
      </div>
      <section class="drawer-section">
        <h3>${t('drawerSections').summary}</h3>
        <div class="stats-grid wide">
          <div class="stat-box"><span>${t('labels').payload}</span><strong>${fmtMass(node.single_launch_kg)}</strong></div>
          <div class="stat-box"><span>${yearLabel()} ${t('labels').strategicSupply}</span><strong>${fmtMass(node[keys.strategicSupply])}</strong></div>
          <div class="stat-box"><span>${yearLabel()} ${t('labels').modelSupply}</span><strong>${fmtMass(node[keys.modelSupply])}</strong></div>
          <div class="stat-box"><span>${yearLabel()} ${t('labels').modelLaunches}</span><strong>${fmtInt(node[keys.modelLaunches])}</strong></div>
          <div class="stat-box"><span>${t('labels').valuation}</span><strong>${fmtMoneyM(node.valuation_est_usd_m)}</strong></div>
          <div class="stat-box"><span>${t('labels').funding}</span><strong>${fmtMoneyM(node.funding_est_usd_m)}</strong></div>
        </div>
      </section>
      <section class="drawer-section">
        <h3>${t('drawerSections').route}</h3>
        <div class="info-card"><span class="info-label">${t('labels').route}</span><span class="info-value">${routeTag(node)}</span></div>
        <div class="info-card"><span class="info-label">${isZh ? '路线逻辑' : 'Route logic'}</span><span class="info-value">${isZh ? (node.route_why_zh || node.route_summary) : (node.route_why_en || node.route_summary)}</span></div>
        <div class="info-card"><span class="info-label">${isZh ? '关键制约' : 'Constraint'}</span><span class="info-value">${isZh ? (node.constraint_zh || t('unknown')) : (node.constraint_en || t('unknown'))}</span></div>
      </section>
      <section class="drawer-section">
        <h3>${t('drawerSections').sites}</h3>
        <div class="info-card"><span class="info-label">${t('labels').launchMethod}</span><span class="info-value">${isZh ? (node.launchMethodZh || t('unknown')) : (node.launchMethodEn || t('unknown'))}</span></div>
        <div class="info-card"><span class="info-label">${t('labels').siteAccess}</span><span class="info-value">${isZh ? (node.siteAccessZh || t('unknown')) : (node.siteAccessEn || t('unknown'))}</span></div>
        <div class="info-card"><span class="info-label">${t('labels').mainSites}</span><span class="info-value">${(node.launchSites || []).join(' / ') || t('unknown')}</span></div>
        <div class="chip-row">
          ${(node.launchSiteDetails || []).map((site) => `<span class="chip">${isZh ? (site.nameZh || site.site) : site.site} · ${accessLabel(site.access_category)}</span>`).join('')}
        </div>
      </section>
      <section class="drawer-section">
        <h3>${t('drawerSections').excel}</h3>
        ${node.excel_model_available ? renderExcelTable(node, false) : `<div class="empty-state">${isZh ? '该节点没有精确匹配的 Excel 行；保留了战略口径与场地信息。' : 'No exact Excel row was linked for this node; strategic and launch-site views remain available.'}</div>`}
      </section>
      <section class="drawer-section">
        <h3>${t('drawerSections').tech}</h3>
        <div class="stats-grid wide">
          <div class="stat-box"><span>${t('labels').status}</span><strong>${node.excel_model_status || node.maturity_class || t('unknown')}</strong></div>
          <div class="stat-box"><span>${t('labels').confidence}</span><strong>${node.excel_model_confidence || node.confidence || t('unknown')}</strong></div>
          <div class="stat-box"><span>${t('labels').firstFlight}</span><strong>${node.firstFlightYear || t('unknown')}</strong></div>
          <div class="stat-box"><span>${t('labels').totalFlights}</span><strong>${node.totalFlightsDisplay || node.totalFlights || t('unknown')}</strong></div>
        </div>
        <div class="info-card"><span class="info-label">${isZh ? '技术路线' : 'Technical route'}</span><span class="info-value">${isZh ? (node.techRoute || node.route_summary) : (node.techRouteEn || node.route_summary || t('unknown'))}</span></div>
      </section>
      <section class="drawer-section">
        <h3>${t('drawerSections').capital}</h3>
        <div class="info-card"><span class="info-label">${t('labels').valuation}</span><span class="info-value">${node.valuation || node.valuationZh || t('unknown')}</span></div>
        <div class="info-card"><span class="info-label">${t('labels').funding}</span><span class="info-value">${node.funding || node.fundingZh || t('unknown')}</span></div>
        <div class="info-card"><span class="info-label">${t('labels').investors}</span><span class="info-value">${node.investors || node.investorsZh || t('unknown')}</span></div>
        ${renderSources(node.sources)}
      </section>
    `;
  }

  function renderCompanyDrawer(company) {
    const nodes = state.data.nodes.filter((n) => n.company === company.company);
    return `
      <div class="drawer-hero">
        <p class="eyebrow">${company.country || t('unknown')} · ${routeTag(company)}</p>
        <h2>${isZh ? (company.companyZh || company.company) : company.company}</h2>
        <p class="drawer-subtitle">${isZh ? company.summary_zh : company.summary_en}</p>
      </div>
      <section class="drawer-section">
        <h3>${t('drawerSections').summary}</h3>
        <div class="stats-grid wide">
          <div class="stat-box"><span>${isZh ? '车辆数' : 'Vehicles'}</span><strong>${fmtInt(nodes.length)}</strong></div>
          <div class="stat-box"><span>${yearLabel()} ${t('labels').modelSupply}</span><strong>${fmtMass(company[`model_supply_${state.year}_kg`])}</strong></div>
          <div class="stat-box"><span>${yearLabel()} ${t('labels').modelLaunches}</span><strong>${fmtInt(company[`model_launches_${state.year}`])}</strong></div>
          <div class="stat-box"><span>${t('labels').valuation}</span><strong>${fmtMoneyM(company.valuation_est_usd_m)}</strong></div>
          <div class="stat-box"><span>${t('labels').funding}</span><strong>${fmtMoneyM(company.funding_est_usd_m)}</strong></div>
          <div class="stat-box"><span>${isZh ? '最大单发能力' : 'Max single-launch'}</span><strong>${fmtMass(Math.max(...nodes.map((n) => num(n.single_launch_kg)), 0))}</strong></div>
        </div>
      </section>
      <section class="drawer-section">
        <h3>${t('drawerSections').sites}</h3>
        <div class="info-card"><span class="info-label">${t('labels').launchMethod}</span><span class="info-value">${(isZh ? company.launchMethodsZh : company.launchMethodsEn || []).join(' / ') || t('unknown')}</span></div>
        <div class="info-card"><span class="info-label">${t('labels').siteAccess}</span><span class="info-value">${isZh ? (company.siteAccessZh || t('unknown')) : (company.siteAccessEn || t('unknown'))}</span></div>
        <div class="info-card"><span class="info-label">${t('labels').mainSites}</span><span class="info-value">${(company.mainLaunchSites || []).join(' / ') || t('unknown')}</span></div>
        <div class="chip-row">${nodes.map((n) => `<span class="chip" data-vehicle-link="${n.id}">${isZh ? (n.vehicleZh || n.vehicle) : n.vehicle}</span>`).join('')}</div>
      </section>
      <section class="drawer-section">
        <h3>${t('drawerSections').excel}</h3>
        ${company.excel_model_available ? renderExcelTable(company, true) : `<div class="empty-state">${isZh ? '该公司没有完整 Excel 聚合口径。' : 'No full Excel aggregate was linked for this company.'}</div>`}
      </section>
      <section class="drawer-section">
        <h3>${t('drawerSections').capital}</h3>
        <div class="info-card"><span class="info-label">${t('labels').valuation}</span><span class="info-value">${company.valuationZh || t('unknown')}</span></div>
        <div class="info-card"><span class="info-label">${t('labels').funding}</span><span class="info-value">${company.fundingZh || t('unknown')}</span></div>
        <div class="info-card"><span class="info-label">${t('labels').investors}</span><span class="info-value">${company.investorsZh || t('unknown')}</span></div>
        ${renderSources(company.sources)}
      </section>
    `;
  }

  function renderSiteDrawer(site) {
    return `
      <div class="drawer-hero">
        <p class="eyebrow">${site.country} · ${accessLabel(site.access_category)}</p>
        <h2>${site.label}</h2>
        <p class="drawer-subtitle">${t('labels').operator}: ${site.operator}</p>
      </div>
      <section class="drawer-section">
        <h3>${t('drawerSections').summary}</h3>
        <div class="stats-grid wide">
          <div class="stat-box"><span>${t('labels').vehicleCount}</span><strong>${fmtInt(site.vehicle_count)}</strong></div>
          <div class="stat-box"><span>${t('labels').companyCount}</span><strong>${fmtInt(site.company_count)}</strong></div>
          <div class="stat-box"><span>${yearLabel()} ${isZh ? '战略供给' : 'strategic supply'}</span><strong>${fmtMass(site.strategic_supply_selected_kg)}</strong></div>
          <div class="stat-box"><span>${yearLabel()} Excel ${isZh ? '供给' : 'supply'}</span><strong>${fmtMass(site.model_supply_selected_kg)}</strong></div>
          <div class="stat-box"><span>${yearLabel()} Excel ${isZh ? '发射次数' : 'launches'}</span><strong>${fmtInt(site.model_launches_selected)}</strong></div>
          <div class="stat-box"><span>${isZh ? '经纬度' : 'Coordinates'}</span><strong>${fmtFloat(site.lat, 2)}, ${fmtFloat(site.lon, 2)}</strong></div>
        </div>
        <div class="info-card"><span class="info-label">${t('labels').accessCategory}</span><span class="info-value">${accessLabel(site.access_category)}</span></div>
        <div class="info-card"><span class="info-label">${isZh ? '场地类型' : 'Site type'}</span><span class="info-value">${site.site_type}</span></div>
        <div class="info-card"><span class="info-label">${isZh ? '覆盖公司' : 'Companies'}</span><span class="info-value">${(site.companies || []).join(' / ') || t('unknown')}</span></div>
        <div class="info-card"><span class="info-label">${isZh ? '覆盖火箭' : 'Vehicles'}</span><span class="info-value">${(site.vehicles || []).join(' / ') || t('unknown')}</span></div>
      </section>
    `;
  }

  function renderDrawer() {
    if (!state.drawer) return;
    let html = '';
    if (state.drawer.type === 'vehicle') {
      const node = findVehicle(state.drawer.id);
      if (node) html = renderVehicleDrawer(node);
    } else if (state.drawer.type === 'company') {
      const company = findCompany(state.drawer.id);
      if (company) html = renderCompanyDrawer(company);
    } else if (state.drawer.type === 'site') {
      const site = findSite(state.drawer.id);
      if (site) html = renderSiteDrawer(site);
    }
    els.drawerBody.innerHTML = html || `<div class="empty-state">${t('empty')}</div>`;
    [...els.drawerBody.querySelectorAll('[data-vehicle-link]')].forEach((chip) => {
      chip.addEventListener('click', () => openDrawer({ type: 'vehicle', id: chip.dataset.vehicleLink }));
    });
  }

  function renderAll() {
    const nodes = filteredNodes();
    updateShellText();
    renderOverview();
    renderRouteCards();
    syncSelectOptions();
    renderMap(nodes);
    renderSites(nodes);
    renderBenchmark(nodes);
    renderCompanyCards(nodes);
    renderDataPort();
  }

  function bindEvents() {
    els.year2026.addEventListener('click', () => {
      state.year = 2026;
      renderAll();
    });
    els.year2030.addEventListener('click', () => {
      state.year = 2030;
      renderAll();
    });
    els.hideZeroBtn.addEventListener('click', () => {
      state.hideZero = !state.hideZero;
      renderAll();
    });
    els.regionSelect.addEventListener('change', (e) => {
      state.region = e.target.value;
      state.country = 'ALL';
      state.company = 'ALL';
      renderAll();
    });
    els.countrySelect.addEventListener('change', (e) => {
      state.country = e.target.value;
      state.company = 'ALL';
      renderAll();
    });
    els.companySelect.addEventListener('change', (e) => {
      state.company = e.target.value;
      renderAll();
    });
    els.searchInput.addEventListener('input', (e) => {
      state.search = e.target.value.trim();
      renderAll();
    });
    els.clearBtn.addEventListener('click', () => {
      state.region = 'ALL';
      state.country = 'ALL';
      state.company = 'ALL';
      state.route = 'ALL';
      state.search = '';
      state.hideZero = false;
      els.searchInput.value = '';
      renderAll();
    });
    els.benchmarkMode.addEventListener('change', (e) => {
      state.benchmarkMode = e.target.value;
      renderAll();
    });
    els.benchmarkMetric.addEventListener('change', (e) => {
      state.benchmarkMetric = e.target.value;
      renderAll();
    });
    els.siteMetricSelect.addEventListener('change', (e) => {
      state.siteMetric = e.target.value;
      renderAll();
    });
    els.closeDrawer.addEventListener('click', closeDrawer);
    els.drawerBackdrop.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  async function init() {
    [
      'brandTitle','heroEyebrow','heroTitle','heroSubtitle','heroTakeaways',
      'navMap','navSites','navBenchmark','overviewTitle','overviewGrid','routeTitle','routeSubtitle','routeGrid',
      'year2026','year2030','hideZeroBtn','regionSelect','countrySelect','companySelect','searchInput','clearBtn',
      'mapTitle','mapSubtitle','mapSummary','bubbleChart','mapLegend','sitesTitle','sitesSubtitle','siteMetricSelect','siteMap','siteList',
      'benchmarkTitle','benchmarkSubtitle','benchmarkMode','benchmarkMetric','benchmarkSummary','benchmarkChart',
      'listTitle','listSubtitle','companyGrid','dataTitle','dataSubtitle','dataPortGrid',
      'drawerBackdrop','detailDrawer','closeDrawer','drawerBody','tooltip','tooltipHost'
    ].forEach((id) => {
      els[id] = document.getElementById(id);
    });
    state.data = await loadData();
    bindEvents();
    renderAll();
  }

  window.addEventListener('DOMContentLoaded', init);
})();
