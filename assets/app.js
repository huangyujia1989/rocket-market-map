
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
        vehicle_count: '覆盖载具数'
      },
      benchmarkTitle: '灵活 benchmarking：火箭 / 公司 / 国家',
      benchmarkSubtitle: '可切换比较维度和指标。公司 / 国家模式下，单发能力取组内最大火箭；价格类指标取加权平均；估值 / 融资是公开口径的近似解析值，适合管理层快速比较，不适合精确财务建模。',
      benchmarkMode: '比较对象',
      benchmarkMetric: '比较指标',
    benchmarkYear: '比较年份',
    benchmarkTopN: '显示范围',
    benchmarkSort: '排序方式',
    benchmarkSortOptions: { desc: '从高到低', asc: '从低到高' },
    benchmarkTopOptions: { '5': 'Top 5', '10': 'Top 10', '20': 'Top 20', all: '全部' },
    overviewSupplyLabel: '供给概览',
    overviewSupplyGroup: '分组方式',
    overviewSupplyYear: '查看年份',
    overviewSupplyGroups: { company: '按公司', country: '按国家', route: '按路线' },
    siteZoomHint: '滚轮缩放，拖动画布，点击点位查看详情。',
      benchmarkModes: { vehicle: '载具', company: '公司', country: '国家' },
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
      companyCardVehicles: '载具',
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
        valuation_est_usd_m: '估值（USD bn）',
        funding_est_usd_m: '融资额（USD bn）'
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
        vehicle: '载具',
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
        vehicleCount: '覆盖载具数',
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
    benchmarkYear: 'Year',
    benchmarkTopN: 'Rows',
    benchmarkSort: 'Order',
    benchmarkSortOptions: { desc: 'High to low', asc: 'Low to high' },
    benchmarkTopOptions: { '5': 'Top 5', '10': 'Top 10', '20': 'Top 20', all: 'All' },
    overviewSupplyLabel: 'Supply overview',
    overviewSupplyGroup: 'Group by',
    overviewSupplyYear: 'Year',
    overviewSupplyGroups: { company: 'By company', country: 'By country', route: 'By route' },
    siteZoomHint: 'Use the mouse wheel to zoom, drag to pan, and click a marker for detail.',
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
        valuation_est_usd_m: 'Valuation (USD bn)',
        funding_est_usd_m: 'Funding (USD bn)'
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


  Object.assign(TEXT.zh, {
    brand: 'Rocket Market Map',
    heroEyebrow: 'Interactive market explorer',
    heroTitle: '一张图看懂全球火箭市场',
    heroSubtitle: '比较主要公司和火箭的运力、价格、供给能力与发射布局；支持筛选、悬浮预览、点击详情和手动更新数据。',
    heroTakeaways: [
      ['先看规模', '快速看 2026E / 2030E 的供给、发射次数和主要玩家。'],
      ['再找重点', '按国家、公司和路线筛选，聚焦最相关的部分。'],
      ['顺手看布局', '用发射场地图理解各家公司从哪里发射、如何拿到场地资源。'],
      ['数据可更新', '支持手动编辑、导入更新文件、导出当前数据，并预留给 AI / API 的接口。']
    ],
    navMap: '市场全景',
    navSites: '发射场',
    navBenchmark: '快速比较',
    navData: '数据更新',
    heroPrimaryAction: '看市场全景',
    heroSecondaryAction: '更新数据',
    overviewTitle: '先看整体',
    mapTitle: '市场全景',
    mapSubtitle: '横轴是单发能力，纵轴是成本与兑现难度，气泡大小是所选年份的年供给最佳估算。悬浮查看摘要，点击查看完整资料。',
    routeTitle: '主要竞争路线',
    routeSubtitle: '不同玩家的差异，不只在火箭大小，也在复用深度、成本结构和运营方式。',
    hideZero: '隐藏供给为 0 的项目',
    showZero: '显示全部项目',
    mapLegend: '颜色表示路线，气泡大小表示所选年份的年供给最佳估算。悬浮预览，点击看详情。',
    sitesTitle: '发射场分布',
    sitesSubtitle: '查看主要发射场的位置，以及公司如何获得发射场资源。悬浮预览，点击看详情。',
    siteMetric: '地图大小',
    siteMetricOptions: {
      best_estimate_supply_selected_kg: '年供给（最佳估算）',
      best_estimate_launches_selected: '年发射次数（最佳估算）',
      vehicle_count: '覆盖载具数'
    },
    benchmarkTitle: '快速比较',
    benchmarkSubtitle: '在载具、公司和国家三个层级之间切换，并按年份、排序方式和显示范围快速比较规模、价格、发射次数和资本能力。',
    benchmarkMode: '比较对象',
    benchmarkMetric: '比较指标',
    benchmarkYear: '比较年份',
    benchmarkTopN: '显示范围',
    benchmarkSort: '排序方式',
    benchmarkSortOptions: { desc: '从高到低', asc: '从低到高' },
    benchmarkTopOptions: { '5': 'Top 5', '10': 'Top 10', '20': 'Top 20', all: '全部' },
    overviewSupplyLabel: '供给概览',
    overviewSupplyGroup: '分组方式',
    overviewSupplyYear: '查看年份',
    overviewSupplyGroups: { company: '按公司', country: '按国家', route: '按路线' },
    siteZoomHint: '滚轮缩放，拖动画布，点击点位查看详情。',
    benchmarkModes: { vehicle: '载具', company: '公司', country: '国家' },
    listTitle: '公司与载具',
    listSubtitle: '按当前筛选结果显示。点击任意公司查看载具组合、发射场布局和关键数据。',
    dataTitle: '数据更新',
    dataSubtitle: '支持手动编辑、导入更新文件、导出当前数据，并预留给 AI / API 的更新接口。',
    benchmarkMetrics: {
      single_launch_kg: '单发能力',
      best_estimate_supply_selected_kg: '年供给（最佳估算）',
      best_estimate_launches_selected: '年发射次数（最佳估算）',
      model_cum_launches_selected: '累计发射次数',
      model_price_selected_usd_m: '单次价格',
      model_revenue_selected_usd_m: '年收入（USD bn）',
      model_usd_per_kg_selected: '$/kg',
      valuation_est_usd_m: '估值（USD bn）',
      funding_est_usd_m: '融资额（USD bn）'
    },
    drawerSections: {
      route: '定位与约束',
      sites: '发射场',
      excel: '5 年预测',
      tech: '技术与成熟度',
      capital: '资本与来源',
      history: '历史与计划',
      summary: '核心信息'
    },
    labels: {
      country: '国家',
      company: '公司',
      vehicle: '载具',
      route: '路线',
      payload: '单发能力',
      strategicSupply: '年供给',
      strategicLaunches: '年发射次数',
      modelSupply: '年供给',
      modelLaunches: '年发射次数',
      modelPayload: '单次有效载荷',
      valuation: '估值',
      funding: '融资额',
      launchMethod: '发射方式',
      siteAccess: '场地获取方式',
      mainSites: '主要发射场',
      operator: '运营方',
      accessCategory: '场地类型',
      vehicleCount: '覆盖载具数',
      companyCount: '覆盖公司数',
      firstFlight: '首飞',
      totalFlights: '历史飞行',
      confidence: '数据置信度',
      status: '状态',
      price: '单次价格',
      revenue: '年收入',
      usdkg: '$/kg',
      cumulative: '累计发射次数',
      notes: '备注',
      investors: '投资方',
      search: '搜索'
    },
    portNotes: [
      '点击公司、火箭或发射场后，可以直接进入编辑模式更新关键字段。',
      '保存后会先写入浏览器本地，刷新页面也会保留。',
      '可导入 JSON patch 或完整数据文件，也可导出当前版本。',
      '已暴露前端更新接口，便于 AI 或外部脚本自动改数。',
      '所有数字都按“最佳估算”展示，用于快速比较，不追求伪精确。'
    ],
    dataButtons: {
      download: '导出当前数据',
      import: '导入更新文件',
      upload: '上传保存',
      reset: '恢复默认数据',
      edit: '编辑数据',
      save: '保存到本地',
      exportPatch: '导出更新包',
      cancel: '返回查看'
    },
    statusText: {
      localSaved: '已保存到当前浏览器。',
      importSuccess: '更新文件已导入并生效。',
      importError: '导入失败：请检查 JSON 格式。',
      resetSuccess: '已恢复到默认数据。',
      uploadNoApi: '当前未连接服务器：已保存到浏览器本地，可继续导出 JSON。',
      uploadSuccess: '已通过 API 保存成功。',
      uploadError: '上传失败。'
    },
    editorTitle: '编辑数据',
    editorNote: '下面是常用字段。保存后会立即更新页面；如需自动化，也可以走下方的 JSON / API 接口。',
    apiPortTitle: 'AI / API 更新接口',
    apiPortBody: '可调用 window.RocketMarketMap.applyPatch(...)、setData(...)、saveToServer() 或 serverApplyPatch(...)，也可上传 JSON patch / 全量数据文件。',
    apiExampleTitle: '示例 patch',
    bestEstimateNote: '最佳估算 = 能拿到的最佳公开数据；优先使用更完整的模型值，缺失时回退到基础估算。',
    hoverHint: '悬浮预览，点击看详情',
    lockedId: '主键 ID 当前保持不变；如需重命名实体，建议通过导出 JSON 后统一处理。'
  });

  Object.assign(TEXT.en, {
    brand: 'Rocket Market Map',
    heroEyebrow: 'Interactive market explorer',
    heroTitle: 'Rocket Market Map',
    heroSubtitle: 'Compare launch companies and vehicles by capability, price, supply and launch footprint, with filters, hover previews, detail views and direct data updates.',
    heroTakeaways: [
      ['See the market first', 'Read 2026E / 2030E supply, launches and the major players at a glance.'],
      ['Focus quickly', 'Filter by country, company and route to isolate what matters.'],
      ['Understand footprint', 'Use the site map to see where companies launch and how they secure site access.'],
      ['Update the data', 'Edit records directly, import update files, export the current dataset, or connect an AI / API flow.']
    ],
    navMap: 'Market map',
    navSites: 'Launch sites',
    navBenchmark: 'Compare',
    navData: 'Data updates',
    heroPrimaryAction: 'Open market map',
    heroSecondaryAction: 'Update data',
    overviewTitle: 'At a glance',
    mapTitle: 'Market map',
    mapSubtitle: 'The x-axis shows single-launch capability, the y-axis shows cost / execution difficulty, and bubble size shows the best estimate of annual supply in the selected year. Hover for a preview, click for full detail.',
    routeTitle: 'How players compete',
    routeSubtitle: 'Differences across players are not only about rocket size, but also reuse depth, cost structure and operating model.',
    hideZero: 'Hide zero-supply programs',
    showZero: 'Show all programs',
    mapLegend: 'Color = route. Bubble size = best estimate of annual supply in the selected year. Hover to preview, click for detail.',
    sitesTitle: 'Launch-site footprint',
    sitesSubtitle: 'See where companies launch from and how they secure site access. Hover to preview, click for detail.',
    siteMetric: 'Marker size',
    siteMetricOptions: {
      best_estimate_supply_selected_kg: 'Annual supply (best estimate)',
      best_estimate_launches_selected: 'Launches (best estimate)',
      vehicle_count: 'Vehicle count'
    },
    benchmarkTitle: 'Compare quickly',
    benchmarkSubtitle: 'Switch between vehicle, company and country views, then choose the year, ordering and number of rows to compare scale, price, launches and capital strength.',
    benchmarkMode: 'Compare',
    benchmarkMetric: 'Metric',
    benchmarkYear: 'Year',
    benchmarkTopN: 'Rows',
    benchmarkSort: 'Order',
    benchmarkSortOptions: { desc: 'High to low', asc: 'Low to high' },
    benchmarkTopOptions: { '5': 'Top 5', '10': 'Top 10', '20': 'Top 20', all: 'All' },
    overviewSupplyLabel: 'Supply overview',
    overviewSupplyGroup: 'Group by',
    overviewSupplyYear: 'Year',
    overviewSupplyGroups: { company: 'By company', country: 'By country', route: 'By route' },
    siteZoomHint: 'Use the mouse wheel to zoom, drag to pan, and click a marker for detail.',
    benchmarkModes: { vehicle: 'Vehicle', company: 'Company', country: 'Country' },
    listTitle: 'Companies and vehicles',
    listSubtitle: 'Cards react to the current filter set. Open any company to see fleet mix, launch footprint and key numbers.',
    dataTitle: 'Data updates',
    dataSubtitle: 'Edit records directly, import update files, export the current dataset, and connect an AI / API update flow.',
    benchmarkMetrics: {
      single_launch_kg: 'Single-launch capability',
      best_estimate_supply_selected_kg: 'Annual supply (best estimate)',
      best_estimate_launches_selected: 'Launches (best estimate)',
      model_cum_launches_selected: 'Cumulative launches',
      model_price_selected_usd_m: 'Price / launch',
      model_revenue_selected_usd_m: 'Annual revenue (USD bn)',
      model_usd_per_kg_selected: '$ / kg',
      valuation_est_usd_m: 'Valuation (USD bn)',
      funding_est_usd_m: 'Funding (USD bn)'
    },
    drawerSections: {
      route: 'Role and constraints',
      sites: 'Launch footprint',
      excel: '5-year outlook',
      tech: 'Technology and maturity',
      capital: 'Capital and sources',
      history: 'History and missions',
      summary: 'Key facts'
    },
    labels: {
      country: 'Country',
      company: 'Company',
      vehicle: 'Vehicle',
      route: 'Route',
      payload: 'Single-launch capability',
      strategicSupply: 'Annual supply',
      strategicLaunches: 'Launches',
      modelSupply: 'Annual supply',
      modelLaunches: 'Launches',
      modelPayload: 'Payload / launch',
      valuation: 'Valuation',
      funding: 'Funding',
      launchMethod: 'Launch method',
      siteAccess: 'Site access',
      mainSites: 'Main launch sites',
      operator: 'Operator',
      accessCategory: 'Access category',
      vehicleCount: 'Vehicle count',
      companyCount: 'Company count',
      firstFlight: 'First flight',
      totalFlights: 'Historical flights',
      confidence: 'Data confidence',
      status: 'Status',
      price: 'Price / launch',
      revenue: 'Annual revenue',
      usdkg: '$ / kg',
      cumulative: 'Cumulative launches',
      notes: 'Notes',
      investors: 'Investors',
      search: 'Search'
    },
    portNotes: [
      'Open any company, vehicle or launch site and switch to edit mode to update the key fields.',
      'Saved changes persist in the browser, so refresh will keep your edits.',
      'You can import a JSON patch or a full dataset, and you can export the current version any time.',
      'A public front-end update interface is exposed for AI agents or external scripts.',
      'All displayed numbers use a best-estimate view for comparison rather than false precision.'
    ],
    dataButtons: {
      download: 'Export current data',
      import: 'Import update file',
      upload: 'Upload save',
      reset: 'Reset to default',
      edit: 'Edit data',
      save: 'Save locally',
      exportPatch: 'Export patch',
      cancel: 'Back to view'
    },
    statusText: {
      localSaved: 'Saved in this browser.',
      importSuccess: 'Update file imported and applied.',
      importError: 'Import failed: please check the JSON format.',
      resetSuccess: 'Reset to the default dataset.',
      uploadNoApi: 'No server is connected yet: the dataset was saved in the browser and can still be exported as JSON.',
      uploadSuccess: 'Saved successfully through the API.',
      uploadError: 'Upload failed.'
    },
    editorTitle: 'Edit data',
    editorNote: 'These are the most common fields. Saving updates the page immediately; for automation, you can also use the JSON / API hooks below.',
    apiPortTitle: 'AI / API update interface',
    apiPortBody: 'Call window.RocketMarketMap.applyPatch(...), setData(...), saveToServer(), or serverApplyPatch(...), or upload a JSON patch / full dataset file.',
    apiExampleTitle: 'Example patch',
    bestEstimateNote: 'Best estimate = the best public information available; it prefers the richer model values and falls back to baseline estimates when needed.',
    hoverHint: 'Hover to preview, click for detail',
    lockedId: 'Canonical IDs stay fixed for now; if you need to rename an entity, it is safer to export JSON and update it in one place.'
  });


  const WORLD_MAP_BG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA9QAAAHLCAYAAAApy9DjAAAAOnRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjEwLjgsIGh0dHBzOi8vbWF0cGxvdGxpYi5vcmcvwVt1zgAAAAlwSFlzAAAPYQAAD2EBqD+naQABAABJREFUeJzsvXecZFlZ//95zjk3VOg03RO6N+dJDewCG2amBSWDIipBBES+IvoTUBFRQZKgGBAVM4KioqCIESVIpmdmZ5ZddpeatDlXd0/oVOnee855nt8fVT3bO9uTe6Yn3Pdraqq66oZzb9W95zzneZ7PQyKCnJycnJycnJycnJycnJyc40MtdQNycnJycnJycnJycnJycs5GcoM6JycnJycnJycnJycnJ+cEyA3qnJycnJycnJycnJycnJwTIDeoc3JycnJycnJycnJycnJOgNygzsnJycnJycnJycnJyck5AXKDOicnJycnJycnJycnJyfnBMgN6pycnJycnJycnJycnJycEyA3qHNycnJycnJycnJycnJyToDcoM7JycnJycnJycnJycnJOQFygzonJycnJycnJycnJycn5wTIDeqcnJycnJycnJycnJycnBMgN6hzcnJycnJycnJycnJyck6A3KDOycnJycnJycnJycnJyTkBcoM6JycnJycnJycnJycnJ+cEMEvdgJycnJycU8NopUoAMDI8JMexjo5D/YdaqQsBsAAMAQPCAngAjPZ7XuZeQ7zI3OvO+wIPIANgAcmk/br9EKTSfj8VQSZAKiKpCFIAEyPDQw8u7pnIycnJycnJyTk1kMgxj7NycnJyTprRStUA6AewQiu6WCu6AkQXKaIuRegCUQTAtw2yg0ach+Dx1xCWtsE2Z7xZtI21FJBUgBRACkEiQCIiKYCERVodo812HhMjw0P7luREnAJGK9VlgVE/ooi+32g1qBVdACISkUkWmRKWSc8yJSIPe5Y7PcvdAB4bGR6ynfXjODSf7euKX2K0WjCCSURgHfskc494lodE5IB0vh9AnABeBIZFAhGJ2w8UAAQAQuk8AyACGAQmEBMgIDAROe95zLP86MjwUHbaTl5OTk5OTk5OzgmQG9Q5OTmnhK07x35EK/WGwChPRGUidBFQJqKy1lTSSnVrRaFSBEUEIjrhfc3dx6Tzn7T/O/i39R6NxGbOs/delECY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";
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
    defaultData: null,
    year: 2030,
    hideZero: false,
    region: 'ALL',
    country: 'ALL',
    company: 'ALL',
    route: 'ALL',
    search: '',
    benchmarkMode: 'vehicle',
    benchmarkMetric: 'best_estimate_supply_selected_kg',
    benchmarkYear: 2030,
    benchmarkTopN: '10',
    benchmarkSort: 'desc',
    overviewSupplyGroup: 'company',
    overviewSupplyYear: 2030,
    siteMetric: 'best_estimate_supply_selected_kg',
    siteZoom: 1,
    sitePanX: 0,
    sitePanY: 0,
    topN: 12,
    drawer: null,
    editing: false
  };

  const LOCAL_STORAGE_KEY = 'rocket-market-map-user-data-v5';
  const CHART_YEARS = [2026, 2027, 2028, 2029, 2030];
  const SITE_MAP_DIM = { width: 1100, height: 560, minZoom: 1, maxZoom: 6 };
  let DATA_FROM_API = false;

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

  function yearKeys(year = state.year) {
    return {
      strategicSupply: `supply_${year}_kg`,
      strategicLaunches: year === 2026 ? 'flights_2026_base' : year === 2030 ? 'flights_2030_base' : `model_launches_${year}`,
      modelPayload: `model_payload_${year}_kg`,
      modelSupply: `model_supply_${year}_kg`,
      modelLaunches: `model_launches_${year}`,
      modelCumLaunches: `model_cum_launches_${year}`,
      modelPrice: `model_price_${year}_usd_m`,
      modelRevenue: `model_revenue_${year}_usd_m`,
      modelUsdPerKg: `model_usd_per_kg_${year}`
    };
  }

  function currentKeys() {
    return yearKeys(state.year);
  }

  function interpolatePositive(a, b, ratio) {
    const aNum = num(a);
    const bNum = num(b);
    if (aNum > 0 && bNum > 0) return aNum + (bNum - aNum) * ratio;
    if (aNum > 0) return aNum;
    if (bNum > 0) return bNum;
    return 0;
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

  function fmtMoneyCapital(v) {
    if (v == null || Number.isNaN(Number(v)) || Number(v) === 0) return t('unknown');
    const bn = Number(v) / 1000;
    const digits = Math.abs(bn) >= 100 ? 0 : Math.abs(bn) >= 10 ? 1 : 2;
    return `$${fmtFloat(bn, digits)}bn`;
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

  function apiBaseUrl() {
    return (window.__API_BASE__ || '/api').replace(/\/$/, '');
  }

  async function fetchApiJson(path, options = {}) {
    const res = await fetch(`${apiBaseUrl()}${path}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      },
      ...options
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    return res.json();
  }

  async function saveCurrentDataToServer(data) {
    return fetchApiJson('/data', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  async function applyPatchToServer(patch) {
    return fetchApiJson('/patch', {
      method: 'POST',
      body: JSON.stringify(patch)
    });
  }

  async function resetDataOnServer() {
    return fetchApiJson('/reset', { method: 'POST' });
  }

  async function loadData() {
    try {
      const serverData = await fetchApiJson('/data');
      DATA_FROM_API = true;
      return serverData;
    } catch (error) {
      DATA_FROM_API = false;
      console.info('RocketMarketMap backend not available, falling back to bundled data.', error?.message || error);
    }
    const inline = loadInlineData();
    if (inline) return inline;
    const path = window.__DATA_PATH__ || 'data/rocket_market_map_2026_2030_v3.json';
    const res = await fetch(path);
    return res.json();
  }



  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function bestEstimateSupply(item, year = state.year) {
    if (!item) return 0;
    const model = num(item[`model_supply_${year}_kg`]);
    const baseline = num(item[`supply_${year}_kg`]);
    if (model > 0) return model;
    if (baseline > 0) return baseline;
    if (year > 2026 && year < 2030) {
      const interpolated = interpolatePositive(item.supply_2026_kg, item.supply_2030_kg, (year - 2026) / 4);
      if (interpolated > 0) return interpolated;
    }
    return 0;
  }

  function bestEstimateLaunches(item, year = state.year) {
    if (!item) return 0;
    const model = num(item[`model_launches_${year}`]);
    const baseline = num(item[year === 2026 ? 'flights_2026_base' : year === 2030 ? 'flights_2030_base' : `model_launches_${year}`]);
    if (model > 0) return model;
    if (baseline > 0) return baseline;
    if (year > 2026 && year < 2030) {
      const interpolated = interpolatePositive(item.flights_2026_base, item.flights_2030_base, (year - 2026) / 4);
      if (interpolated > 0) return interpolated;
    }
    return 0;
  }

  function bestEstimateSupplyLabel(item, year = state.year) {
    return fmtMass(bestEstimateSupply(item, year));
  }

  function bestEstimateLaunchesLabel(item, year = state.year) {
    return fmtInt(bestEstimateLaunches(item, year));
  }

  function activeNodeCountForYear(year) {
    return state.data.nodes.filter((node) => bestEstimateSupply(node, year) > 0).length;
  }

  function setDataStatus(message = '') {
    if (!els.dataStatus) return;
    els.dataStatus.innerHTML = message ? `<div class="summary-pill status-pill"><span>${message}</span></div>` : '';
  }

  function savedDataFromLocal() {
    try {
      const raw = window.localStorage.getItem(LOCAL_STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      console.warn('Failed to read local data', error);
      return null;
    }
  }

  function saveDataToLocal(statusMessage = t('statusText').localSaved) {
    try {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.data));
      setDataStatus(statusMessage);
    } catch (error) {
      console.warn('Failed to save local data', error);
      setDataStatus(t('statusText').uploadError);
    }
  }

  function resetLocalData() {
    window.localStorage.removeItem(LOCAL_STORAGE_KEY);
    state.data = deepClone(state.defaultData);
    state.editing = false;
    renderAll();
    if (state.drawer) renderDrawer();
    setDataStatus(t('statusText').resetSuccess);
  }

  function downloadJson(filename, payload) {
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  }

  function mergeRecord(target, changes) {
    Object.entries(changes || {}).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        target[key] = value;
        return;
      }
      if (value && typeof value === 'object' && !Array.isArray(value) && target[key] && typeof target[key] === 'object' && !Array.isArray(target[key])) {
        target[key] = { ...target[key], ...value };
        return;
      }
      target[key] = value;
    });
  }

  function applyPatch(patch, { save = true, statusMessage = t('statusText').importSuccess } = {}) {
    if (!patch || typeof patch !== 'object') return;

    if (Array.isArray(patch.nodes) && Array.isArray(patch.companies) && patch.launchSites && typeof patch.launchSites === 'object' && patch.meta_v3) {
      state.data = deepClone(patch);
    } else {
      if (Array.isArray(patch.nodes)) {
        patch.nodes.forEach((row) => {
          const existing = state.data.nodes.find((node) => node.id === row.id);
          if (existing) mergeRecord(existing, row);
          else state.data.nodes.push(row);
        });
      }
      if (Array.isArray(patch.companies)) {
        patch.companies.forEach((row) => {
          const existing = state.data.companies.find((company) => company.company === row.company);
          if (existing) mergeRecord(existing, row);
          else state.data.companies.push(row);
        });
      }
      if (Array.isArray(patch.launchSites)) {
        patch.launchSites.forEach((row) => {
          const key = row.site || row.name || row.id;
          if (!key) return;
          state.data.launchSites[key] = { ...(state.data.launchSites[key] || {}), ...row };
        });
      } else if (patch.launchSites && typeof patch.launchSites === 'object') {
        Object.entries(patch.launchSites).forEach(([siteName, row]) => {
          state.data.launchSites[siteName] = { ...(state.data.launchSites[siteName] || {}), ...row };
        });
      }
      if (patch.type && patch.id && patch.changes) {
        if (patch.type === 'vehicle') {
          const existing = state.data.nodes.find((node) => node.id === patch.id);
          if (existing) mergeRecord(existing, patch.changes);
        }
        if (patch.type === 'company') {
          const existing = state.data.companies.find((company) => company.company === patch.id);
          if (existing) mergeRecord(existing, patch.changes);
        }
        if (patch.type === 'site') {
          state.data.launchSites[patch.id] = { ...(state.data.launchSites[patch.id] || {}), ...patch.changes };
        }
      }
    }

    if (save) saveDataToLocal(statusMessage);
    renderAll();
    if (state.drawer) renderDrawer();
  }

  async function uploadCurrentData() {
    const api = window.RocketMarketMapAPI;
    if (api && typeof api.saveCurrentData === 'function') {
      try {
        await api.saveCurrentData(deepClone(state.data));
        saveDataToLocal(t('statusText').uploadSuccess);
        return;
      } catch (error) {
        console.error(error);
      }
    }
    try {
      await saveCurrentDataToServer(deepClone(state.data));
      saveDataToLocal(t('statusText').uploadSuccess);
    } catch (error) {
      console.error(error);
      saveDataToLocal(t('statusText').uploadNoApi);
    }
  }

  function exposePublicApi() {
    window.RocketMarketMap = {
      getData: () => deepClone(state.data),
      setData: (next) => {
        state.data = deepClone(next);
        saveDataToLocal();
        renderAll();
        if (state.drawer) renderDrawer();
        return deepClone(state.data);
      },
      applyPatch: (patch) => {
        applyPatch(patch, { save: true, statusMessage: t('statusText').localSaved });
        return deepClone(state.data);
      },
      saveLocally: () => saveDataToLocal(),
      resetLocalData: () => resetLocalData(),
      saveToServer: async () => {
        await saveCurrentDataToServer(deepClone(state.data));
        saveDataToLocal(t('statusText').uploadSuccess);
        return deepClone(state.data);
      },
      resetServerData: async () => {
        const next = await resetDataOnServer();
        state.data = deepClone(next);
        state.defaultData = deepClone(next);
        state.editing = false;
        saveDataToLocal(t('statusText').resetSuccess);
        renderAll();
        if (state.drawer) renderDrawer();
        return deepClone(state.data);
      },
      serverApplyPatch: async (patch) => {
        const next = await applyPatchToServer(patch);
        state.data = deepClone(next);
        saveDataToLocal(t('statusText').uploadSuccess);
        renderAll();
        if (state.drawer) renderDrawer();
        return deepClone(state.data);
      }
    };
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
    return state.data.nodes.filter((node) => {
      if (state.route !== 'ALL' && node.route_class !== state.route) return false;
      if (state.region !== 'ALL' && node.region !== state.region) return false;
      if (state.country !== 'ALL' && node.country !== state.country) return false;
      if (state.company !== 'ALL' && node.company !== state.company) return false;
      if (state.hideZero && bestEstimateSupply(node) <= 0) return false;
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

  function buildCompanyRows(nodes, year = state.year) {
    const groups = groupBy(nodes, (n) => n.company);
    const keys = yearKeys(year);
    const rows = [];
    groups.forEach((members, company) => {
      const master = companyMaster(company) || {};
      const dominant = [...members].sort((a, b) => bestEstimateSupply(b, year) - bestEstimateSupply(a, year))[0];
      const memberBestSupply = members.reduce((sum, n) => sum + bestEstimateSupply(n, year), 0);
      const memberBestLaunches = members.reduce((sum, n) => sum + bestEstimateLaunches(n, year), 0);
      const memberModelLaunches = members.reduce((sum, n) => sum + num(n[keys.modelLaunches]), 0);
      const memberModelSupply = members.reduce((sum, n) => sum + num(n[keys.modelSupply]), 0);
      const memberModelRevenue = members.reduce((sum, n) => sum + num(n[keys.modelRevenue]), 0);
      const bestSupply = bestEstimateSupply(master, year) > 0 ? bestEstimateSupply(master, year) : memberBestSupply;
      const bestLaunches = bestEstimateLaunches(master, year) > 0 ? bestEstimateLaunches(master, year) : memberBestLaunches;
      const modelLaunches = num(master[keys.modelLaunches]) > 0 ? num(master[keys.modelLaunches]) : memberModelLaunches;
      const modelSupply = num(master[keys.modelSupply]) > 0 ? num(master[keys.modelSupply]) : memberModelSupply;
      const modelRevenue = num(master[keys.modelRevenue]) > 0 ? num(master[keys.modelRevenue]) : memberModelRevenue;
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
        best_estimate_supply_selected_kg: bestSupply,
        best_estimate_launches_selected: bestLaunches,
        strategic_supply_selected_kg: members.reduce((sum, n) => sum + num(n[keys.strategicSupply]), 0),
        strategic_launches_selected: members.reduce((sum, n) => sum + num(n[keys.strategicLaunches]), 0),
        model_payload_selected_kg: Math.max(...members.map((m) => num(m[keys.modelPayload])), 0),
        model_supply_selected_kg: modelSupply,
        model_launches_selected: modelLaunches,
        model_cum_launches_selected: members.reduce((sum, n) => sum + num(n[keys.modelCumLaunches]), 0),
        model_price_selected_usd_m: modelLaunches ? modelRevenue / modelLaunches : num(master[keys.modelPrice]),
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
    return rows.sort((a, b) => num(b.best_estimate_supply_selected_kg || b.model_supply_selected_kg) - num(a.best_estimate_supply_selected_kg || a.model_supply_selected_kg));
  }


  function buildCountryRows(nodes, year = state.year) {
    const companyRows = buildCompanyRows(nodes, year);
    const groups = groupBy(companyRows, (r) => r.country);
    const rows = [];
    groups.forEach((members, country) => {
      const dominant = [...members].sort((a, b) => num(b.best_estimate_supply_selected_kg) - num(a.best_estimate_supply_selected_kg))[0];
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
        best_estimate_supply_selected_kg: members.reduce((sum, n) => sum + num(n.best_estimate_supply_selected_kg), 0),
        best_estimate_launches_selected: members.reduce((sum, n) => sum + num(n.best_estimate_launches_selected), 0),
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
    return rows.sort((a, b) => num(b.best_estimate_supply_selected_kg || b.model_supply_selected_kg) - num(a.best_estimate_supply_selected_kg || a.model_supply_selected_kg));
  }


  const BENCHMARK_METRICS = {
    single_launch_kg: {
      type: 'mass',
      get: (row) => num(row.type === 'vehicle' ? row.single_launch_kg : row.max_single_launch_kg)
    },
    best_estimate_supply_selected_kg: {
      type: 'mass',
      get: (row) => num(row.best_estimate_supply_selected_kg)
    },
    best_estimate_launches_selected: {
      type: 'count',
      get: (row) => num(row.best_estimate_launches_selected)
    },
    model_cum_launches_selected: { type: 'count', get: (row) => num(row.model_cum_launches_selected) },
    model_price_selected_usd_m: { type: 'price', get: (row) => num(row.model_price_selected_usd_m) },
    model_revenue_selected_usd_m: { type: 'capital', get: (row) => num(row.model_revenue_selected_usd_m) },
    model_usd_per_kg_selected: { type: 'usdkg', get: (row) => num(row.model_usd_per_kg_selected) },
    valuation_est_usd_m: { type: 'capital', get: (row) => num(row.valuation_est_usd_m) },
    funding_est_usd_m: { type: 'capital', get: (row) => num(row.funding_est_usd_m) }
  };

  const SITE_METRICS = {
    best_estimate_supply_selected_kg: {
      type: 'mass',
      get: (row) => num(row.best_estimate_supply_selected_kg)
    },
    best_estimate_launches_selected: {
      type: 'count',
      get: (row) => num(row.best_estimate_launches_selected)
    },
    vehicle_count: {
      type: 'count',
      get: (row) => num(row.vehicle_count)
    }
  };


  function formatMetricValue(metricKey, value) {
    const type = (BENCHMARK_METRICS[metricKey] || SITE_METRICS[metricKey] || {}).type;
    if (type === 'mass') return fmtMass(value);
    if (type === 'capital') return fmtMoneyCapital(value);
    if (type === 'price') return fmtMoneyM(value);
    if (type === 'usdkg') return fmtUsdPerKg(value);
    return fmtInt(value);
  }

  function buildBenchmarkRows(nodes, year = state.benchmarkYear) {
    const keys = yearKeys(year);
    if (state.benchmarkMode === 'vehicle') {
      return nodes.map((n) => ({
        ...n,
        type: 'vehicle',
        name: isZh ? (n.vehicleZh || n.vehicle) : n.vehicle,
        label: isZh ? `${n.companyZh || n.company} · ${n.vehicleZh || n.vehicle}` : `${n.company} · ${n.vehicle}`,
        best_estimate_supply_selected_kg: bestEstimateSupply(n, year),
        best_estimate_launches_selected: bestEstimateLaunches(n, year),
        model_cum_launches_selected: num(n[keys.modelCumLaunches]),
        model_price_selected_usd_m: num(n[keys.modelPrice]),
        model_revenue_selected_usd_m: num(n[keys.modelRevenue]),
        model_usd_per_kg_selected: num(n[keys.modelUsdPerKg]),
        valuation_est_usd_m: num(n.valuation_est_usd_m),
        funding_est_usd_m: num(n.funding_est_usd_m)
      }));
    }
    if (state.benchmarkMode === 'company') return buildCompanyRows(nodes, year);
    return buildCountryRows(nodes, year);
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
            best_estimate_supply_selected_kg: 0,
            best_estimate_launches_selected: 0,
            strategic_supply_selected_kg: 0,
            model_supply_selected_kg: 0,
            model_launches_selected: 0
          });
        }
        const row = groups.get(siteName);
        row.vehicles.add(isZh ? (node.vehicleZh || node.vehicle) : node.vehicle);
        row.companies.add(isZh ? (node.companyZh || node.company) : node.company);
        row.members.push(node);
        row.best_estimate_supply_selected_kg += bestEstimateSupply(node);
        row.best_estimate_launches_selected += bestEstimateLaunches(node);
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
    if (document.getElementById('navData')) document.getElementById('navData').textContent = t('navData');
    if (document.getElementById('heroPrimaryAction')) document.getElementById('heroPrimaryAction').textContent = t('heroPrimaryAction');
    if (document.getElementById('heroSecondaryAction')) document.getElementById('heroSecondaryAction').textContent = t('heroSecondaryAction');
    document.getElementById('overviewTitle').textContent = t('overviewTitle');
    if (els.overviewSupplyLabel) els.overviewSupplyLabel.textContent = t('overviewSupplyLabel');
    document.getElementById('routeTitle').textContent = t('routeTitle');
    document.getElementById('routeSubtitle').textContent = t('routeSubtitle');
    document.getElementById('mapTitle').textContent = t('mapTitle');
    document.getElementById('mapSubtitle').textContent = t('mapSubtitle');
    document.getElementById('sitesTitle').textContent = t('sitesTitle');
    document.getElementById('sitesSubtitle').textContent = t('sitesSubtitle');
    document.getElementById('benchmarkTitle').textContent = t('benchmarkTitle');
    document.getElementById('benchmarkSubtitle').textContent = t('benchmarkSubtitle');
    if (document.getElementById('benchmarkModeLabel')) document.getElementById('benchmarkModeLabel').textContent = t('benchmarkMode');
    if (document.getElementById('benchmarkMetricLabel')) document.getElementById('benchmarkMetricLabel').textContent = t('benchmarkMetric');
    if (document.getElementById('benchmarkYearLabel')) document.getElementById('benchmarkYearLabel').textContent = t('benchmarkYear');
    if (document.getElementById('benchmarkTopNLabel')) document.getElementById('benchmarkTopNLabel').textContent = t('benchmarkTopN');
    if (document.getElementById('benchmarkSortLabel')) document.getElementById('benchmarkSortLabel').textContent = t('benchmarkSort');
    document.getElementById('listTitle').textContent = t('listTitle');
    document.getElementById('listSubtitle').textContent = t('listSubtitle');
    document.getElementById('dataTitle').textContent = t('dataTitle');
    document.getElementById('dataSubtitle').textContent = t('dataSubtitle');
    document.getElementById('closeDrawer').setAttribute('aria-label', t('drawerClose'));
    if (els.editRecordBtn) els.editRecordBtn.textContent = state.editing ? t('dataButtons').cancel : t('dataButtons').edit;
    if (els.downloadDataBtn) els.downloadDataBtn.textContent = t('dataButtons').download;
    if (els.importDataBtn) els.importDataBtn.textContent = t('dataButtons').import;
    if (els.uploadDataBtn) els.uploadDataBtn.textContent = t('dataButtons').upload;
    if (els.resetDataBtn) els.resetDataBtn.textContent = t('dataButtons').reset;
    if (els.siteMetricLabel) els.siteMetricLabel.textContent = t('siteMetric');
    if (els.siteZoomReset) els.siteZoomReset.title = isZh ? '重置地图缩放' : 'Reset map zoom';

    const takeaways = t('heroTakeaways');
    els.heroTakeaways.innerHTML = takeaways.map(([title, body]) => `<div class="takeaway"><h3>${title}</h3><p>${body}</p></div>`).join('');
  }


  function buildRouteOverviewRows(year = state.overviewSupplyYear) {
    const rows = [];
    const groups = groupBy(state.data.nodes, (node) => node.route_class);
    groups.forEach((members, route) => {
      rows.push({
        type: 'route',
        id: route,
        label: routeInfo(route).name,
        route_class: route,
        metricValue: members.reduce((sum, node) => sum + bestEstimateSupply(node, year), 0),
        launches: members.reduce((sum, node) => sum + bestEstimateLaunches(node, year), 0),
        companyCount: new Set(members.map((node) => node.company)).size
      });
    });
    return rows;
  }

  function buildOverviewSupplyRows() {
    if (state.overviewSupplyGroup === 'company') return buildCompanyRows(state.data.nodes, state.overviewSupplyYear).map((row) => ({ ...row, metricValue: row.best_estimate_supply_selected_kg }));
    if (state.overviewSupplyGroup === 'country') return buildCountryRows(state.data.nodes, state.overviewSupplyYear).map((row) => ({ ...row, metricValue: row.best_estimate_supply_selected_kg }));
    return buildRouteOverviewRows(state.overviewSupplyYear);
  }

  function renderOverviewSupplyChart() {
    if (!els.overviewSupplyChart) return;
    const rows = buildOverviewSupplyRows()
      .filter((row) => num(row.metricValue) > 0)
      .sort((a, b) => num(b.metricValue) - num(a.metricValue))
      .slice(0, 12);

    const svg = els.overviewSupplyChart;
    const width = 980;
    const barH = 34;
    const gap = 12;
    const margin = { top: 24, right: 80, bottom: 24, left: 260 };
    const height = Math.max(240, margin.top + margin.bottom + rows.length * (barH + gap));
    const innerW = width - margin.left - margin.right;
    const maxVal = Math.max(...rows.map((row) => num(row.metricValue)), 1);
    const xScale = (v) => margin.left + (num(v) / maxVal) * innerW;
    const parts = [`<rect x="0" y="0" width="${width}" height="${height}" fill="transparent"></rect>`];

    rows.forEach((row, index) => {
      const y = margin.top + index * (barH + gap);
      const color = row.route_class ? routeInfo(row.route_class).color : '#214ed3';
      const x = xScale(row.metricValue);
      parts.push(`<text class="svg-axis bar-label" data-id="${row.id}" data-type="${row.type}" x="${margin.left - 12}" y="${y + 23}" text-anchor="end">${row.label}</text>`);
      parts.push(`<g class="bar-row" data-id="${row.id}" data-type="${row.type}" tabindex="0" role="button" aria-label="${row.label}">
        <rect x="${margin.left}" y="${y}" width="${innerW}" height="${barH}" rx="10" fill="#eef3fa"></rect>
        <rect x="${margin.left}" y="${y}" width="${Math.max(4, x - margin.left)}" height="${barH}" rx="10" fill="${color}" fill-opacity="0.84"></rect>
        <text class="svg-bar-value" x="${Math.min(width - margin.right + 12, x + 10)}" y="${y + 23}">${fmtMass(row.metricValue)}</text>
      </g>`);
    });

    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.innerHTML = parts.join('');

    const rowMap = new Map(rows.map((row) => [row.id, row]));
    const resolveRow = (target) => {
      if (!target) return null;
      const rowEl = target.closest ? target.closest('.bar-row') : null;
      if (rowEl?.dataset?.id) return rowMap.get(rowEl.dataset.id);
      if (target.dataset?.id) return rowMap.get(target.dataset.id);
      return null;
    };
    const tooltipHtml = (row) => {
      const extra = row.type === 'route'
        ? `${isZh ? '覆盖公司' : 'Companies'}: ${fmtInt(row.companyCount)}`
        : `${yearLabel(state.overviewSupplyYear)} ${t('labels').modelLaunches}: ${fmtInt(row.best_estimate_launches_selected || row.launches || 0)}`;
      return `<strong>${row.label}</strong><div class="tooltip-meta">${yearLabel(state.overviewSupplyYear)} ${t('labels').modelSupply}</div><div>${fmtMass(row.metricValue)}</div><div>${extra}</div>`;
    };
    const activateRow = (row) => {
      if (!row) return;
      if (row.type === 'company') state.company = row.id;
      if (row.type === 'country') state.country = row.id;
      if (row.type === 'route') state.route = row.id;
      syncSelectOptions();
      renderAll();
      document.getElementById('map')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    svg.onpointermove = (event) => {
      const row = resolveRow(event.target);
      if (!row) {
        hideTooltip();
        return;
      }
      showTooltip(event, tooltipHtml(row));
    };
    svg.onpointerleave = hideTooltip;
    svg.onclick = (event) => {
      const row = resolveRow(event.target);
      if (row) activateRow(row);
    };
    [...svg.querySelectorAll('.bar-row')].forEach((rowEl) => {
      const row = rowMap.get(rowEl.dataset.id);
      rowEl.addEventListener('focus', () => row && showTooltipForElement(rowEl, tooltipHtml(row)));
      rowEl.addEventListener('blur', hideTooltip);
      rowEl.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          activateRow(row);
        }
      });
    });
    [...svg.querySelectorAll('.bar-label')].forEach((labelEl) => {
      labelEl.addEventListener('pointerenter', (event) => {
        const row = rowMap.get(labelEl.dataset.id);
        if (row) showTooltip(event, tooltipHtml(row));
      });
      labelEl.addEventListener('pointermove', (event) => {
        const row = rowMap.get(labelEl.dataset.id);
        if (row) showTooltip(event, tooltipHtml(row));
      });
    });
  }

  function renderOverview() {
    const supply2026 = state.data.nodes.reduce((sum, node) => sum + bestEstimateSupply(node, 2026), 0);
    const supply2030 = state.data.nodes.reduce((sum, node) => sum + bestEstimateSupply(node, 2030), 0);
    const launches2030 = state.data.nodes.reduce((sum, node) => sum + bestEstimateLaunches(node, 2030), 0);
    const growth = supply2026 > 0 ? (supply2030 / supply2026) : 0;
    const cards = [
      {
        title: `2026E ${isZh ? '年供给' : 'annual supply'}`,
        value: fmtMass(supply2026),
        meta: isZh ? `${fmtInt(activeNodeCountForYear(2026))} 个活跃项目` : `${fmtInt(activeNodeCountForYear(2026))} active programs`
      },
      {
        title: `2030E ${isZh ? '年供给' : 'annual supply'}`,
        value: fmtMass(supply2030),
        meta: isZh ? `${fmtInt(activeNodeCountForYear(2030))} 个活跃项目` : `${fmtInt(activeNodeCountForYear(2030))} active programs`
      },
      {
        title: `2030E ${isZh ? '年发射次数' : 'launches'}`,
        value: fmtInt(launches2030),
        meta: isZh ? `覆盖 ${fmtInt(state.data.companies.length)} 家公司` : `covering ${fmtInt(state.data.companies.length)} companies`
      },
      {
        title: isZh ? '2030 / 2026 供给放大' : '2030 / 2026 supply growth',
        value: growth ? `${fmtFloat(growth, 1)}x` : t('unknown'),
        meta: t('bestEstimateNote')
      }
    ];
    els.overviewGrid.innerHTML = cards.map((card) => `
      <article class="metric-card">
        <div class="metric-title">${card.title}</div>
        <div class="metric-value">${card.value}</div>
        <div class="metric-meta">${card.meta}</div>
      </article>
    `).join('');

    renderOverviewSupplyChart();
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
    els.searchInput.value = state.search;
    els.clearBtn.textContent = t('clear');

    els.benchmarkMode.innerHTML = Object.entries(t('benchmarkModes')).map(([value, label]) => makeOption(value, label, state.benchmarkMode === value)).join('');
    els.benchmarkMetric.innerHTML = Object.entries(t('benchmarkMetrics')).map(([value, label]) => makeOption(value, label, state.benchmarkMetric === value)).join('');
    if (els.benchmarkYear) els.benchmarkYear.innerHTML = CHART_YEARS.map((year) => makeOption(year, yearLabel(year), state.benchmarkYear === year)).join('');
    if (els.benchmarkTopN) els.benchmarkTopN.innerHTML = Object.entries(t('benchmarkTopOptions')).map(([value, label]) => makeOption(value, label, state.benchmarkTopN === value)).join('');
    if (els.benchmarkSort) els.benchmarkSort.innerHTML = Object.entries(t('benchmarkSortOptions')).map(([value, label]) => makeOption(value, label, state.benchmarkSort === value)).join('');
    if (els.overviewSupplyGroup) els.overviewSupplyGroup.innerHTML = Object.entries(t('overviewSupplyGroups')).map(([value, label]) => makeOption(value, label, state.overviewSupplyGroup === value)).join('');
    if (els.overviewSupplyYear) els.overviewSupplyYear.innerHTML = [2026, 2030].map((year) => makeOption(year, yearLabel(year), state.overviewSupplyYear === year)).join('');
    els.siteMetricSelect.innerHTML = Object.entries(t('siteMetricOptions')).map(([value, label]) => makeOption(value, label, state.siteMetric === value)).join('');
    if (els.siteZoomReset) els.siteZoomReset.textContent = `${fmtFloat(state.siteZoom, 1)}×`;
  }


  function renderMapSummary(nodes) {
    const supply = nodes.reduce((sum, n) => sum + bestEstimateSupply(n), 0);
    const launches = nodes.reduce((sum, n) => sum + bestEstimateLaunches(n), 0);
    const companies = new Set(nodes.map((n) => n.company)).size;
    els.mapSummary.innerHTML = `
      <div class="summary-pill"><strong>${t('visibleNodes')}</strong><span>${fmtInt(nodes.length)}</span></div>
      <div class="summary-pill"><strong>${yearLabel()} ${t('labels').modelSupply}</strong><span>${fmtMass(supply)}</span></div>
      <div class="summary-pill"><strong>${yearLabel()} ${t('labels').modelLaunches}</strong><span>${fmtInt(launches)}</span></div>
      <div class="summary-pill"><strong>${isZh ? '公司数' : 'Companies'}</strong><span>${fmtInt(companies)}</span></div>
      <div class="summary-pill muted-pill"><span>${t('hoverHint')}</span></div>
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
    const maxMetric = Math.max(...nodes.map((n) => bestEstimateSupply(n)), 1);
    const ticks = [0.1, 0.3, 1, 3, 10, 30, 100, 200];
    const xScale = (kg) => {
      const x = Math.log10(Math.max(num(kg), 100));
      const ratio = (x - xMin) / (xMax - xMin);
      return margin.left + ratio * innerW;
    };
    const yScale = (score) => margin.top + innerH - (num(score) / 10) * innerH;
    const rScale = (v) => 7 + Math.sqrt(Math.max(num(v), 0) / maxMetric) * 40;

    const labels = [...nodes].sort((a, b) => bestEstimateSupply(b) - bestEstimateSupply(a)).slice(0, 10).map((n) => n.id);
    const parts = [];
    parts.push(`<rect x="0" y="0" width="${width}" height="${height}" rx="18" fill="#fbfdff"></rect>`);
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
      const r = rScale(bestEstimateSupply(node));
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
      const r = rScale(bestEstimateSupply(node));
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
      parts.push(`<text class="svg-bubble-label bubble-label" data-id="${node.id}" x="${lx}" y="${ly}">${label}</text>`);
    });

    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.innerHTML = parts.join('');

    const nodeMap = new Map(nodes.map((node) => [node.id, node]));
    const resolveBubbleId = (target) => {
      if (!target) return null;
      const bubble = target.closest ? target.closest('.bubble') : null;
      if (bubble?.dataset?.id) return bubble.dataset.id;
      if (target.dataset?.id) return target.dataset.id;
      return null;
    };
    const showBubbleTooltip = (event, id) => {
      const node = nodeMap.get(id);
      if (!node) return;
      showNodeTooltip(event, node);
    };

    svg.onpointermove = (event) => {
      const id = resolveBubbleId(event.target);
      if (!id) {
        hideTooltip();
        return;
      }
      showBubbleTooltip(event, id);
    };
    svg.onpointerleave = hideTooltip;
    svg.onclick = (event) => {
      const id = resolveBubbleId(event.target);
      if (!id) return;
      openDrawer({ type: 'vehicle', id });
    };
    [...svg.querySelectorAll('.bubble, .bubble-label')].forEach((el) => {
      if (el.classList.contains('bubble')) {
        el.addEventListener('focus', () => {
          const node = nodeMap.get(el.dataset.id);
          if (node) showTooltipForElement(el, nodeTooltipHtml(node));
        });
        el.addEventListener('blur', hideTooltip);
        el.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openDrawer({ type: 'vehicle', id: el.dataset.id });
          }
        });
      }
      el.addEventListener('pointerenter', (event) => {
        const id = el.dataset.id;
        if (id) showBubbleTooltip(event, id);
      });
      el.addEventListener('pointermove', (event) => {
        const id = el.dataset.id;
        if (id) showBubbleTooltip(event, id);
      });
    });
  }
  function nodeTooltipHtml(node) {
    return `
      <strong>${isZh ? (node.companyZh || node.company) : node.company} · ${isZh ? (node.vehicleZh || node.vehicle) : node.vehicle}</strong>
      <div class="tooltip-meta">${routeTag(node)} · ${node.country}</div>
      <div>${t('labels').payload}: ${fmtMass(node.single_launch_kg)}</div>
      <div>${yearLabel()} ${t('labels').modelSupply}: ${bestEstimateSupplyLabel(node)}</div>
      <div>${yearLabel()} ${t('labels').modelLaunches}: ${bestEstimateLaunchesLabel(node)}</div>
      <div>${t('labels').price}: ${fmtMoneyM(node[currentKeys().modelPrice])}</div>
    `;
  }

  function showNodeTooltip(event, node) {
    showTooltip(event, nodeTooltipHtml(node));
  }


  function siteTooltipHtml(row) {
    const metricVal = SITE_METRICS[state.siteMetric].get(row);
    return `
      <strong>${row.label}</strong>
      <div class="tooltip-meta">${row.country} · ${accessLabel(row.access_category)}</div>
      <div>${t('labels').operator}: ${row.operator}</div>
      <div>${t('labels').companyCount}: ${fmtInt(row.company_count)}</div>
      <div>${t('siteMetric')}: ${formatMetricValue(state.siteMetric, metricVal)}</div>
    `;
  }

  function showSiteTooltip(event, row) {
    showTooltip(event, siteTooltipHtml(row));
  }


  function showTooltip(event, html) {
    if (!els.tooltip) return;
    els.tooltip.innerHTML = html;
    els.tooltip.hidden = false;
    moveTooltip(event);
  }

  function showTooltipForElement(element, html) {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    showTooltip({
      clientX: rect.left + rect.width / 2,
      clientY: rect.top + Math.min(rect.height / 2, 24)
    }, html);
  }

  function moveTooltip(event) {
    if (!els.tooltip || !els.tooltipHost || !event) return;
    const box = els.tooltipHost.getBoundingClientRect();
    const tooltipRect = els.tooltip.getBoundingClientRect();
    const tooltipW = tooltipRect.width || 300;
    const tooltipH = tooltipRect.height || 120;
    const x = clamp(event.clientX - box.left + 16, 12, Math.max(12, box.width - tooltipW - 12));
    const y = clamp(event.clientY - box.top + 16, 12, Math.max(12, box.height - tooltipH - 12));
    els.tooltip.style.left = `${x}px`;
    els.tooltip.style.top = `${y}px`;
  }

  function hideTooltip() {
    if (els.tooltip) els.tooltip.hidden = true;
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function clampSitePan() {
    const minX = SITE_MAP_DIM.width - SITE_MAP_DIM.width * state.siteZoom;
    const minY = SITE_MAP_DIM.height - SITE_MAP_DIM.height * state.siteZoom;
    state.sitePanX = clamp(state.sitePanX, minX, 0);
    state.sitePanY = clamp(state.sitePanY, minY, 0);
  }

  function applySiteMapTransform() {
    clampSitePan();
    if (els.siteZoomReset) els.siteZoomReset.textContent = `${fmtFloat(state.siteZoom, 1)}×`;
    if (els.siteZoomSlider) els.siteZoomSlider.value = state.siteZoom.toFixed(1);
    const layer = els.siteMap?.querySelector('[data-site-viewport]');
    if (!layer) return;
    layer.setAttribute('transform', `translate(${state.sitePanX} ${state.sitePanY}) scale(${state.siteZoom})`);
  }

  function setSiteZoom(nextZoom, anchor = { x: SITE_MAP_DIM.width / 2, y: SITE_MAP_DIM.height / 2 }) {
    const prevZoom = state.siteZoom;
    const clampedZoom = clamp(nextZoom, SITE_MAP_DIM.minZoom, SITE_MAP_DIM.maxZoom);
    if (Math.abs(clampedZoom - prevZoom) < 1e-6) return;
    const worldX = (anchor.x - state.sitePanX) / prevZoom;
    const worldY = (anchor.y - state.sitePanY) / prevZoom;
    state.siteZoom = clampedZoom;
    state.sitePanX = anchor.x - worldX * clampedZoom;
    state.sitePanY = anchor.y - worldY * clampedZoom;
    applySiteMapTransform();
  }

  function resetSiteMapView() {
    state.siteZoom = 1;
    state.sitePanX = 0;
    state.sitePanY = 0;
    applySiteMapTransform();
  }

  function renderSiteMap(rows) {
    const svg = els.siteMap;
    const width = SITE_MAP_DIM.width;
    const height = SITE_MAP_DIM.height;
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const innerW = width - margin.left - margin.right;
    const innerH = height - margin.top - margin.bottom;
    const xScale = (lon) => margin.left + ((num(lon) + 180) / 360) * innerW;
    const yScale = (lat) => margin.top + ((90 - num(lat)) / 180) * innerH;
    const maxVal = Math.max(...rows.map((r) => SITE_METRICS[state.siteMetric].get(r)), 1);
    const rScale = (v) => 5 + Math.sqrt(Math.max(num(v), 0) / maxVal) * 18;
    const parts = [];
    parts.push(`<defs><clipPath id="siteMapClip"><rect x="0" y="0" width="${width}" height="${height}" rx="18"></rect></clipPath></defs>`);
    parts.push(`<rect x="0" y="0" width="${width}" height="${height}" rx="18" fill="#eef5ff" stroke="#d6dfeb"></rect>`);
    parts.push(`<g data-site-viewport clip-path="url(#siteMapClip)">`);
    parts.push(`<image href="${WORLD_MAP_BG}" x="0" y="0" width="${width}" height="${height}" preserveAspectRatio="none" opacity="0.95"></image>`);
    for (let lon = -120; lon <= 120; lon += 60) {
      const x = xScale(lon);
      parts.push(`<line class="svg-grid" x1="${x}" y1="${margin.top}" x2="${x}" y2="${height - margin.bottom}"></line>`);
    }
    for (let lat = -60; lat <= 60; lat += 30) {
      const y = yScale(lat);
      parts.push(`<line class="svg-grid" x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}"></line>`);
    }
    parts.push(`<text class="svg-note" x="${width - margin.right}" y="18" text-anchor="end">${t('siteMetric')}: ${t('siteMetricOptions')[state.siteMetric]}</text>`);

    const labels = rows.slice(0, 12).map((r) => r.site);
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
      parts.push(`<text class="svg-bubble-label site-label" data-site="${row.site}" x="${cx + 10}" y="${cy - 10}">${row.label}</text>`);
    });
    parts.push(`</g>`);

    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.innerHTML = parts.join('');
    applySiteMapTransform();

    const rowMap = new Map(rows.map((row) => [row.site, row]));
    const resolveSite = (target) => {
      if (!target) return null;
      const marker = target.closest ? target.closest('.site-marker') : null;
      if (marker?.dataset?.site) return rowMap.get(marker.dataset.site);
      if (target.dataset?.site) return rowMap.get(target.dataset.site);
      return null;
    };
    const drag = { active: false, pointerId: null, startX: 0, startY: 0, panX: 0, panY: 0, moved: false };

    svg.onwheel = (event) => {
      event.preventDefault();
      const rect = svg.getBoundingClientRect();
      const anchor = {
        x: ((event.clientX - rect.left) / rect.width) * width,
        y: ((event.clientY - rect.top) / rect.height) * height
      };
      const factor = event.deltaY < 0 ? 1.18 : 1 / 1.18;
      setSiteZoom(state.siteZoom * factor, anchor);
    };

    svg.ondblclick = (event) => {
      const rect = svg.getBoundingClientRect();
      const anchor = {
        x: ((event.clientX - rect.left) / rect.width) * width,
        y: ((event.clientY - rect.top) / rect.height) * height
      };
      setSiteZoom(state.siteZoom * 1.35, anchor);
    };

    svg.onpointerdown = (event) => {
      if (event.button !== 0) return;
      drag.active = true;
      drag.pointerId = event.pointerId;
      drag.startX = event.clientX;
      drag.startY = event.clientY;
      drag.panX = state.sitePanX;
      drag.panY = state.sitePanY;
      drag.moved = false;
      svg.setPointerCapture(event.pointerId);
      svg.parentElement?.classList.add('dragging');
    };

    svg.onpointermove = (event) => {
      if (drag.active && drag.pointerId === event.pointerId) {
        const dx = event.clientX - drag.startX;
        const dy = event.clientY - drag.startY;
        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) drag.moved = true;
        state.sitePanX = drag.panX + dx;
        state.sitePanY = drag.panY + dy;
        applySiteMapTransform();
        hideTooltip();
        return;
      }
      const row = resolveSite(event.target);
      if (!row) {
        hideTooltip();
        return;
      }
      showSiteTooltip(event, row);
    };

    const endDrag = (event) => {
      if (drag.active && drag.pointerId === event.pointerId) {
        drag.active = false;
        svg.releasePointerCapture(event.pointerId);
        svg.parentElement?.classList.remove('dragging');
        setTimeout(() => { drag.moved = false; }, 0);
      }
    };
    svg.onpointerup = endDrag;
    svg.onpointercancel = endDrag;
    svg.onpointerleave = () => { if (!drag.active) hideTooltip(); };

    svg.onclick = (event) => {
      if (drag.moved) return;
      const row = resolveSite(event.target);
      if (!row) return;
      openDrawer({ type: 'site', id: row.site });
    };

    [...svg.querySelectorAll('.site-marker')].forEach((marker) => {
      const row = rowMap.get(marker.dataset.site);
      marker.addEventListener('focus', () => row && showTooltipForElement(marker, siteTooltipHtml(row)));
      marker.addEventListener('blur', hideTooltip);
      marker.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openDrawer({ type: 'site', id: marker.dataset.site });
        }
      });
    });
    [...svg.querySelectorAll('.site-label')].forEach((labelEl) => {
      labelEl.addEventListener('pointerenter', (event) => {
        const row = rowMap.get(labelEl.dataset.site);
        if (row) showTooltip(event, siteTooltipHtml(row));
      });
      labelEl.addEventListener('pointermove', (event) => {
        const row = rowMap.get(labelEl.dataset.site);
        if (row) showTooltip(event, siteTooltipHtml(row));
      });
    });
  }

  function renderSiteLegend(rows) {
    const activeCategories = [...new Set(rows.map((row) => row.access_category || 'unknown'))];
    if (!els.siteLegend) return;
    els.siteLegend.innerHTML = [
      ...activeCategories.map((key) => `
        <div class="summary-pill">
          <span class="legend-swatch" style="background:${ACCESS_COLORS[key] || ACCESS_COLORS.unknown}"></span>
          <span>${accessLabel(key)}</span>
        </div>
      `),
      `<div class="summary-pill muted-pill"><span>${t('siteZoomHint')}</span></div>`
    ].join('');
  }

  function renderSites(nodes) {
    const rows = buildSiteRows(nodes);
    renderSiteMap(rows);
    renderSiteLegend(rows);
  }


  function benchmarkRowsAndMetric(nodes) {
    const rows = buildBenchmarkRows(nodes, state.benchmarkYear);
    const metricDef = BENCHMARK_METRICS[state.benchmarkMetric];
    const sorted = rows
      .map((row) => ({ ...row, metricValue: metricDef.get(row) }))
      .filter((row) => num(row.metricValue) > 0)
      .sort((a, b) => state.benchmarkSort === 'asc' ? num(a.metricValue) - num(b.metricValue) : num(b.metricValue) - num(a.metricValue));
    return state.benchmarkTopN === 'all' ? sorted : sorted.slice(0, Number(state.benchmarkTopN || 10));
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
      parts.push(`<text class="svg-axis bar-label" data-id="${row.id}" data-type="${row.type}" x="${margin.left - 12}" y="${y + 24}" text-anchor="end">${row.label}</text>`);
      parts.push(`<g class="bar-row" data-id="${row.id}" data-type="${row.type}" tabindex="0" role="button" aria-label="${row.label}">
        <rect x="${margin.left}" y="${y}" width="${innerW}" height="${barH}" rx="10" fill="#eef3fa"></rect>
        <rect x="${margin.left}" y="${y}" width="${Math.max(4, x - margin.left)}" height="${barH}" rx="10" fill="${infoColor}" fill-opacity="0.82"></rect>
        <text class="svg-bar-value" x="${Math.min(width - margin.right + 12, x + 10)}" y="${y + 24}">${formatMetricValue(state.benchmarkMetric, row.metricValue)}</text>
      </g>`);
    });
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.innerHTML = parts.join('');

    const rowMap = new Map(rows.map((row) => [row.id, row]));
    const resolveRow = (target) => {
      if (!target) return null;
      const rowEl = target.closest ? target.closest('.bar-row') : null;
      if (rowEl?.dataset?.id) return rowMap.get(rowEl.dataset.id);
      if (target.dataset?.id) return rowMap.get(target.dataset.id);
      return null;
    };
    const tooltipHtml = (row) => `<strong>${row.label}</strong><div class="tooltip-meta">${yearLabel(state.benchmarkYear)} · ${t('benchmarkMetrics')[state.benchmarkMetric]}</div><div>${formatMetricValue(state.benchmarkMetric, row.metricValue)}</div>`;
    const activateRow = (row) => {
      if (!row) return;
      if (row.type === 'vehicle') openDrawer({ type: 'vehicle', id: row.id });
      if (row.type === 'company') {
        state.company = row.id;
        syncSelectOptions();
        renderAll();
      }
      if (row.type === 'country') {
        state.country = row.id;
        syncSelectOptions();
        renderAll();
      }
    };

    svg.onpointermove = (event) => {
      const row = resolveRow(event.target);
      if (!row) {
        hideTooltip();
        return;
      }
      showTooltip(event, tooltipHtml(row));
    };
    svg.onpointerleave = hideTooltip;
    svg.onclick = (event) => {
      const row = resolveRow(event.target);
      if (row) activateRow(row);
    };
    [...svg.querySelectorAll('.bar-row')].forEach((rowEl) => {
      const row = rowMap.get(rowEl.dataset.id);
      rowEl.addEventListener('focus', () => row && showTooltipForElement(rowEl, tooltipHtml(row)));
      rowEl.addEventListener('blur', hideTooltip);
      rowEl.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          activateRow(row);
        }
      });
    });
    [...svg.querySelectorAll('.bar-label')].forEach((labelEl) => {
      labelEl.addEventListener('pointerenter', (event) => {
        const row = rowMap.get(labelEl.dataset.id);
        if (row) showTooltip(event, tooltipHtml(row));
      });
      labelEl.addEventListener('pointermove', (event) => {
        const row = rowMap.get(labelEl.dataset.id);
        if (row) showTooltip(event, tooltipHtml(row));
      });
    });

    const visible = filteredNodes();
    const supply = visible.reduce((sum, n) => sum + bestEstimateSupply(n, state.benchmarkYear), 0);
    const launches = visible.reduce((sum, n) => sum + bestEstimateLaunches(n, state.benchmarkYear), 0);
    const companies = new Set(visible.map((n) => n.company)).size;
    els.benchmarkSummary.innerHTML = `
      <div class="metric-card compact">
        <div class="metric-title">${yearLabel(state.benchmarkYear)} ${t('labels').modelSupply}</div>
        <div class="metric-value">${fmtMass(supply)}</div>
      </div>
      <div class="metric-card compact">
        <div class="metric-title">${yearLabel(state.benchmarkYear)} ${t('labels').modelLaunches}</div>
        <div class="metric-value">${fmtInt(launches)}</div>
      </div>
      <div class="metric-card compact">
        <div class="metric-title">${isZh ? '公司数' : 'Companies'}</div>
        <div class="metric-value">${fmtInt(companies)}</div>
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
          <div class="card-kpi">${fmtMass(row.best_estimate_supply_selected_kg)}</div>
        </div>
        <p>${isZh ? row.summary_zh : row.summary_en}</p>
        <div class="chip-row">
          <span class="chip">${t('companyCardVehicles')}: ${row.vehicles.slice(0, 3).join(' / ')}${row.vehicles.length > 3 ? '…' : ''}</span>
          <span class="chip">${t('companyCardSites')}: ${(row.mainLaunchSites || []).slice(0, 2).join(' / ') || t('unknown')}</span>
        </div>
        <div class="stats-grid">
          <div class="stat-box"><span>${yearLabel()} ${t('labels').modelLaunches}</span><strong>${fmtInt(row.best_estimate_launches_selected)}</strong></div>
          <div class="stat-box"><span>${isZh ? '最大单发能力' : 'Max single-launch'}</span><strong>${fmtMass(row.max_single_launch_kg)}</strong></div>
          <div class="stat-box"><span>${isZh ? '估值（USD bn）' : 'Valuation (USD bn)'}</span><strong>${fmtMoneyCapital(row.valuation_est_usd_m)}</strong></div>
          <div class="stat-box"><span>${isZh ? '融资额（USD bn）' : 'Funding (USD bn)'}</span><strong>${fmtMoneyCapital(row.funding_est_usd_m)}</strong></div>
        </div>
      </article>
    `).join('') : `<div class="empty-state">${t('empty')}</div>`;

    [...els.companyGrid.querySelectorAll('.company-card')].forEach((card) => {
      card.addEventListener('click', () => openDrawer({ type: 'company', id: card.dataset.company }));
    });
  }


  function renderDataPort() {
    const countries = new Set(state.data.nodes.map((node) => node.country)).size;
    const gridItems = [
      { k: isZh ? '覆盖载具' : 'Vehicles covered', v: fmtInt(state.data.nodes.length) },
      { k: isZh ? '覆盖公司' : 'Companies covered', v: fmtInt(state.data.companies.length) },
      { k: isZh ? '发射场' : 'Launch sites', v: fmtInt(Object.keys(state.data.launchSites).length) },
      { k: isZh ? '覆盖国家' : 'Countries covered', v: fmtInt(countries) },
      { k: isZh ? '最近更新' : 'Last update', v: state.data.meta_v3.updated_at || t('unknown') },
      { k: isZh ? '保存方式' : 'Persistence', v: DATA_FROM_API ? (isZh ? '后端 API + 浏览器本地缓存' : 'Backend API + browser cache') : (isZh ? '浏览器本地 + JSON 导入导出' : 'Browser local + JSON import/export') }
    ];
    const examplePatch = {
      type: 'vehicle',
      id: state.data.nodes[0]?.id || 'vehicle-id',
      changes: {
        model_launches_2030: 48,
        model_supply_2030_kg: 960000
      }
    };
    els.dataPortGrid.innerHTML = `
      <div class="port-grid">
        ${gridItems.map((item) => `<div class="metric-card compact"><div class="metric-title">${item.k}</div><div class="metric-value small">${item.v}</div></div>`).join('')}
      </div>
      <div class="info-card soft best-estimate-note">${t('bestEstimateNote')}</div>
      <ul class="port-list">
        ${t('portNotes').map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <div class="api-grid">
        <div class="info-card soft">
          <div class="metric-title">${t('apiPortTitle')}</div>
          <div class="metric-meta">${t('apiPortBody')}</div>
        </div>
        <div class="code-card">
          <div class="metric-title">${t('apiExampleTitle')}</div>
          <pre>${JSON.stringify(examplePatch, null, 2)}</pre>
        </div>
      </div>
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
      best_estimate_supply_selected_kg: num(meta[currentKeys().modelSupply]) || num(meta[currentKeys().strategicSupply]),
      best_estimate_launches_selected: num(meta[currentKeys().modelLaunches]),
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
        <td>${fmtMoneyCapital(item[`model_revenue_${y}_usd_m`])}</td>
        <td>${fmtUsdPerKg(item[`model_usd_per_kg_${y}`])}</td>
        <td>${fmtInt(item[`model_cum_launches_${y}`])}</td>
      </tr>
    `).join('');
    const note = item.excel_model_notes || item.excel_model_key_models || item.excel_model_company || t('unknown');
    return `
      <div class="info-card soft">
        <div class="metric-title">${isAggregate ? (isZh ? '公司层 5 年预测' : 'Company 5-year outlook') : (isZh ? '载具 5 年预测' : 'Vehicle 5-year outlook')}</div>
        <div class="metric-meta">${note}</div>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>${isZh ? '发射次数' : 'Launches'}</th>
              <th>${isZh ? '单次有效载荷' : 'Payload / launch'}</th>
              <th>${isZh ? '年供给' : 'Annual supply'}</th>
              <th>${isZh ? '单次价格' : 'Price / launch'}</th>
              <th>${isZh ? '年收入（USD bn）' : 'Annual revenue (USD bn)'}</th>
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
    state.editing = false;
    renderDrawer();
    els.drawerBackdrop.hidden = false;
    els.detailDrawer.classList.add('open');
  }

  function closeDrawer() {
    state.drawer = null;
    state.editing = false;
    els.drawerBackdrop.hidden = true;
    els.detailDrawer.classList.remove('open');
    if (els.editRecordBtn) els.editRecordBtn.hidden = true;
  }

  function currentDrawerRecord() {
    if (!state.drawer) return null;
    if (state.drawer.type === 'vehicle') return findVehicle(state.drawer.id);
    if (state.drawer.type === 'company') return findCompany(state.drawer.id);
    if (state.drawer.type === 'site') return findSite(state.drawer.id);
    return null;
  }

  function formField({ label, name, value = '', type = 'text', textarea = false, options = [] }) {
    if (textarea) {
      return `
        <label class="form-field full">
          <span>${label}</span>
          <textarea name="${name}" rows="4">${String(value ?? '')}</textarea>
        </label>
      `;
    }
    if (type === 'select') {
      return `
        <label class="form-field">
          <span>${label}</span>
          <select name="${name}">${options.map((opt) => `<option value="${opt.value}" ${String(value) === String(opt.value) ? 'selected' : ''}>${opt.label}</option>`).join('')}</select>
        </label>
      `;
    }
    return `
      <label class="form-field">
        <span>${label}</span>
        <input type="${type}" name="${name}" value="${String(value ?? '').replace(/"/g, '&quot;')}" />
      </label>
    `;
  }

  function renderEditor(drawer, record) {
    const routeOptions = Object.keys(routeDefs()).map((id) => ({ value: id, label: routeInfo(id).name }));
    const accessOptions = Object.keys(ACCESS_COLORS).map((id) => ({ value: id, label: accessLabel(id) }));
    const fields = [];

    if (drawer.type === 'vehicle') {
      fields.push(
        formField({ label: isZh ? '中文名称' : 'Display name (ZH)', name: 'vehicleZh', value: record.vehicleZh || '' }),
        formField({ label: isZh ? '标准名称' : 'Canonical name', name: 'vehicle', value: record.vehicle || '' }),
        formField({ label: isZh ? '公司中文名' : 'Company name (ZH)', name: 'companyZh', value: record.companyZh || '' }),
        formField({ label: isZh ? '公司标准名' : 'Company canonical name', name: 'company', value: record.company || '' }),
        formField({ label: t('labels').country, name: 'country', value: record.country || '' }),
        formField({ label: t('labels').route, name: 'route_class', value: record.route_class || '', type: 'select', options: routeOptions }),
        formField({ label: t('labels').payload + ' (kg)', name: 'single_launch_kg', value: record.single_launch_kg || '', type: 'number' }),
        formField({ label: (isZh ? '兑现难度' : 'Execution difficulty') + ' (0-10)', name: 'cost_score', value: record.cost_score || '', type: 'number' }),
        formField({ label: (isZh ? '2026E 年供给' : '2026E annual supply') + ' (kg)', name: 'best_supply_2026', value: bestEstimateSupply(record, 2026), type: 'number' }),
        formField({ label: (isZh ? '2026E 发射次数' : '2026E launches'), name: 'best_launches_2026', value: bestEstimateLaunches(record, 2026), type: 'number' }),
        formField({ label: (isZh ? '2030E 年供给' : '2030E annual supply') + ' (kg)', name: 'best_supply_2030', value: bestEstimateSupply(record, 2030), type: 'number' }),
        formField({ label: (isZh ? '2030E 发射次数' : '2030E launches'), name: 'best_launches_2030', value: bestEstimateLaunches(record, 2030), type: 'number' }),
        formField({ label: (isZh ? '2026E 单次价格' : '2026E price / launch') + ' (USD m)', name: 'model_price_2026_usd_m', value: record.model_price_2026_usd_m || '', type: 'number' }),
        formField({ label: (isZh ? '2030E 单次价格' : '2030E price / launch') + ' (USD m)', name: 'model_price_2030_usd_m', value: record.model_price_2030_usd_m || '', type: 'number' }),
        formField({ label: (isZh ? '估值' : 'Valuation') + ' (USD bn)', name: 'valuation_est_usd_m', value: record.valuation_est_usd_m ? record.valuation_est_usd_m / 1000 : '', type: 'number' }),
        formField({ label: (isZh ? '融资额' : 'Funding') + ' (USD bn)', name: 'funding_est_usd_m', value: record.funding_est_usd_m ? record.funding_est_usd_m / 1000 : '', type: 'number' }),
        formField({ label: t('labels').mainSites, name: 'launchSites', value: (record.launchSites || []).join(', ') }),
        formField({ label: isZh ? '当前状态（中文）' : 'Current status (ZH)', name: 'currentRealityZh', value: record.currentRealityZh || '', textarea: true }),
        formField({ label: 'Current status (EN)', name: 'current_reality', value: record.current_reality || '', textarea: true })
      )
    }

    if (drawer.type === 'company') {
      fields.push(
        formField({ label: isZh ? '公司中文名' : 'Company name (ZH)', name: 'companyZh', value: record.companyZh || '' }),
        formField({ label: t('labels').country, name: 'country', value: record.country || '' }),
        formField({ label: (isZh ? '2026E 年供给' : '2026E annual supply') + ' (kg)', name: 'best_supply_2026', value: Number(record.model_supply_2026_kg || record.supply_2026_kg || 0), type: 'number' }),
        formField({ label: (isZh ? '2026E 发射次数' : '2026E launches'), name: 'best_launches_2026', value: Number(record.model_launches_2026 || 0), type: 'number' }),
        formField({ label: (isZh ? '2030E 年供给' : '2030E annual supply') + ' (kg)', name: 'best_supply_2030', value: Number(record.model_supply_2030_kg || record.supply_2030_kg || 0), type: 'number' }),
        formField({ label: (isZh ? '2030E 发射次数' : '2030E launches'), name: 'best_launches_2030', value: Number(record.model_launches_2030 || 0), type: 'number' }),
        formField({ label: (isZh ? '估值' : 'Valuation') + ' (USD bn)', name: 'valuation_est_usd_m', value: record.valuation_est_usd_m ? record.valuation_est_usd_m / 1000 : '', type: 'number' }),
        formField({ label: (isZh ? '融资额' : 'Funding') + ' (USD bn)', name: 'funding_est_usd_m', value: record.funding_est_usd_m ? record.funding_est_usd_m / 1000 : '', type: 'number' }),
        formField({ label: t('labels').mainSites, name: 'mainLaunchSites', value: (record.mainLaunchSites || []).join(', ') }),
        formField({ label: isZh ? '发射方式（中文）' : 'Launch methods (ZH)', name: 'launchMethodsZh', value: (record.launchMethodsZh || []).join(', ') }),
        formField({ label: 'Launch methods (EN)', name: 'launchMethodsEn', value: (record.launchMethodsEn || []).join(', ') }),
        formField({ label: isZh ? '场地获取方式（中文）' : 'Site access (ZH)', name: 'siteAccessZh', value: record.siteAccessZh || '', textarea: true }),
        formField({ label: 'Site access (EN)', name: 'siteAccessEn', value: record.siteAccessEn || '', textarea: true }),
        formField({ label: isZh ? '公司摘要（中文）' : 'Summary (ZH)', name: 'summary_zh', value: record.summary_zh || '', textarea: true }),
        formField({ label: 'Summary (EN)', name: 'summary_en', value: record.summary_en || '', textarea: true })
      )
    }

    if (drawer.type === 'site') {
      fields.push(
        formField({ label: isZh ? '显示名称（中文）' : 'Display name (ZH)', name: 'nameZh', value: state.data.launchSites[drawer.id]?.nameZh || '' }),
        formField({ label: t('labels').country, name: 'country', value: state.data.launchSites[drawer.id]?.country || '' }),
        formField({ label: isZh ? '运营方（中文）' : 'Operator (ZH)', name: 'operatorZh', value: state.data.launchSites[drawer.id]?.operatorZh || '' }),
        formField({ label: 'Operator (EN)', name: 'operator', value: state.data.launchSites[drawer.id]?.operator || '' }),
        formField({ label: t('labels').accessCategory, name: 'access_category', value: state.data.launchSites[drawer.id]?.access_category || 'unknown', type: 'select', options: accessOptions }),
        formField({ label: isZh ? '场地类型（中文）' : 'Site type (ZH)', name: 'site_type_zh', value: state.data.launchSites[drawer.id]?.site_type_zh || '' }),
        formField({ label: 'Site type (EN)', name: 'site_type', value: state.data.launchSites[drawer.id]?.site_type || '' }),
        formField({ label: 'Latitude', name: 'lat', value: state.data.launchSites[drawer.id]?.lat || '', type: 'number' }),
        formField({ label: 'Longitude', name: 'lon', value: state.data.launchSites[drawer.id]?.lon || '', type: 'number' })
      )
    }

    return `
      <div class="drawer-hero">
        <p class="eyebrow">${t('editorTitle')}</p>
        <h2>${record.label || record.company || record.site || record.vehicle || record.id}</h2>
        <p class="drawer-subtitle">${t('editorNote')}</p>
      </div>
      <div class="info-card soft edit-note">${t('lockedId')}</div>
      <form class="edit-grid" id="editForm">${fields.join('')}</form>
      <div class="editor-actions">
        <button class="button primary" id="saveEditBtn">${t('dataButtons').save}</button>
        <button class="button secondary" id="exportPatchBtn">${t('dataButtons').exportPatch}</button>
        <button class="ghost-button" id="cancelEditBtn">${t('dataButtons').cancel}</button>
      </div>
    `;
  }

  function saveDrawerEdit() {
    const record = currentDrawerRecord();
    if (!record || !state.drawer) return;
    const form = document.getElementById('editForm');
    if (!form) return;
    const fd = new FormData(form);
    const text = (key) => (fd.get(key) ?? '').toString().trim();
    const number = (key) => {
      const val = text(key);
      return val === '' ? null : Number(val);
    };
    const list = (key) => text(key).split(',').map((v) => v.trim()).filter(Boolean);

    if (state.drawer.type === 'vehicle') {
      record.vehicleZh = text('vehicleZh');
      record.vehicle = text('vehicle') || record.vehicle;
      record.companyZh = text('companyZh');
      record.company = text('company') || record.company;
      record.country = text('country') || record.country;
      record.route_class = text('route_class') || record.route_class;
      record.single_launch_kg = number('single_launch_kg') ?? record.single_launch_kg;
      record.cost_score = number('cost_score') ?? record.cost_score;
      record.launchSites = list('launchSites');
      record.currentRealityZh = text('currentRealityZh');
      record.current_reality = text('current_reality');
      [2026, 2030].forEach((year) => {
        const supply = number(`best_supply_${year}`);
        const launches = number(`best_launches_${year}`);
        if (supply != null) {
          record[`model_supply_${year}_kg`] = supply;
          record[`supply_${year}_kg`] = supply;
        }
        if (launches != null) {
          record[`model_launches_${year}`] = launches;
          record[year === 2026 ? 'flights_2026_base' : 'flights_2030_base'] = launches;
        }
        const price = number(`model_price_${year}_usd_m`);
        if (price != null) record[`model_price_${year}_usd_m`] = price;
        if (price != null && launches != null) record[`model_revenue_${year}_usd_m`] = price * launches;
        if (price != null && supply != null && supply > 0 && launches != null) record[`model_usd_per_kg_${year}`] = (price * launches * 1_000_000) / supply;
      });
      const valuation = number('valuation_est_usd_m');
      const funding = number('funding_est_usd_m');
      if (valuation != null) record.valuation_est_usd_m = valuation * 1000;
      if (funding != null) record.funding_est_usd_m = funding * 1000;
    }

    if (state.drawer.type === 'company') {
      const companyMeta = findCompany(state.drawer.id);
      companyMeta.companyZh = text('companyZh');
      companyMeta.country = text('country') || companyMeta.country;
      companyMeta.mainLaunchSites = list('mainLaunchSites');
      companyMeta.launchMethodsZh = list('launchMethodsZh');
      companyMeta.launchMethodsEn = list('launchMethodsEn');
      companyMeta.siteAccessZh = text('siteAccessZh');
      companyMeta.siteAccessEn = text('siteAccessEn');
      companyMeta.summary_zh = text('summary_zh');
      companyMeta.summary_en = text('summary_en');
      [2026, 2030].forEach((year) => {
        const supply = number(`best_supply_${year}`);
        const launches = number(`best_launches_${year}`);
        if (supply != null) {
          companyMeta[`model_supply_${year}_kg`] = supply;
          companyMeta[`supply_${year}_kg`] = supply;
        }
        if (launches != null) companyMeta[`model_launches_${year}`] = launches;
      });
      const valuation = number('valuation_est_usd_m');
      const funding = number('funding_est_usd_m');
      if (valuation != null) companyMeta.valuation_est_usd_m = valuation * 1000;
      if (funding != null) companyMeta.funding_est_usd_m = funding * 1000;
    }

    if (state.drawer.type === 'site') {
      const siteMeta = state.data.launchSites[state.drawer.id] || {};
      siteMeta.nameZh = text('nameZh');
      siteMeta.country = text('country') || siteMeta.country;
      siteMeta.operatorZh = text('operatorZh');
      siteMeta.operator = text('operator');
      siteMeta.access_category = text('access_category') || siteMeta.access_category;
      siteMeta.site_type_zh = text('site_type_zh');
      siteMeta.site_type = text('site_type');
      siteMeta.lat = number('lat') ?? siteMeta.lat;
      siteMeta.lon = number('lon') ?? siteMeta.lon;
      state.data.launchSites[state.drawer.id] = siteMeta;
    }

    saveDataToLocal();
    state.editing = false;
    renderAll();
    renderDrawer();
  }

  function exportDrawerPatch() {
    const record = currentDrawerRecord();
    if (!record || !state.drawer) return;
    const patch = {
      type: state.drawer.type,
      id: state.drawer.id,
      changes: deepClone(record)
    };
    downloadJson(`${state.drawer.type}-${state.drawer.id}-patch.json`, patch);
  }


  function renderVehicleDrawer(node) {
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
          <div class="stat-box"><span>${yearLabel()} ${t('labels').modelSupply}</span><strong>${bestEstimateSupplyLabel(node)}</strong></div>
          <div class="stat-box"><span>${yearLabel()} ${t('labels').modelLaunches}</span><strong>${bestEstimateLaunchesLabel(node)}</strong></div>
          <div class="stat-box"><span>${t('labels').price}</span><strong>${fmtMoneyM(node[currentKeys().modelPrice])}</strong></div>
          <div class="stat-box"><span>${isZh ? '估值（USD bn）' : 'Valuation (USD bn)'}</span><strong>${fmtMoneyCapital(node.valuation_est_usd_m)}</strong></div>
          <div class="stat-box"><span>${isZh ? '融资额（USD bn）' : 'Funding (USD bn)'}</span><strong>${fmtMoneyCapital(node.funding_est_usd_m)}</strong></div>
        </div>
      </section>
      <section class="drawer-section">
        <h3>${t('drawerSections').route}</h3>
        <div class="info-card"><span class="info-label">${t('labels').route}</span><span class="info-value">${routeTag(node)}</span></div>
        <div class="info-card"><span class="info-label">${isZh ? '为什么这样做' : 'Why this route'}</span><span class="info-value">${isZh ? (node.route_why_zh || node.route_summary) : (node.route_why_en || node.route_summary)}</span></div>
        <div class="info-card"><span class="info-label">${isZh ? '当前约束' : 'Current constraint'}</span><span class="info-value">${isZh ? (node.constraint_zh || t('unknown')) : (node.constraint_en || t('unknown'))}</span></div>
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
        ${node.excel_model_available ? renderExcelTable(node, false) : `<div class="empty-state">${isZh ? '该节点没有完整 5 年预测；当前页仍保留核心市场信息。' : 'No full 5-year outlook was linked for this node; the key market view remains available.'}</div>`}
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
    const aggregate = buildCompanyRows(state.data.nodes).find((row) => row.company === company.company) || {};
    const view = { ...aggregate, ...company };
    return `
      <div class="drawer-hero">
        <p class="eyebrow">${view.country || t('unknown')} · ${routeTag(view)}</p>
        <h2>${isZh ? (view.companyZh || view.company) : view.company}</h2>
        <p class="drawer-subtitle">${isZh ? view.summary_zh : view.summary_en}</p>
      </div>
      <section class="drawer-section">
        <h3>${t('drawerSections').summary}</h3>
        <div class="stats-grid wide">
          <div class="stat-box"><span>${isZh ? '载具数' : 'Vehicles'}</span><strong>${fmtInt(nodes.length)}</strong></div>
          <div class="stat-box"><span>${yearLabel()} ${t('labels').modelSupply}</span><strong>${fmtMass(view.best_estimate_supply_selected_kg || Number(view[`model_supply_${state.year}_kg`] || view[`supply_${state.year}_kg`] || 0))}</strong></div>
          <div class="stat-box"><span>${yearLabel()} ${t('labels').modelLaunches}</span><strong>${fmtInt(view.best_estimate_launches_selected || Number(view[`model_launches_${state.year}`] || 0))}</strong></div>
          <div class="stat-box"><span>${isZh ? '估值（USD bn）' : 'Valuation (USD bn)'}</span><strong>${fmtMoneyCapital(view.valuation_est_usd_m)}</strong></div>
          <div class="stat-box"><span>${isZh ? '融资额（USD bn）' : 'Funding (USD bn)'}</span><strong>${fmtMoneyCapital(view.funding_est_usd_m)}</strong></div>
          <div class="stat-box"><span>${isZh ? '最大单发能力' : 'Max single-launch'}</span><strong>${fmtMass(Math.max(...nodes.map((n) => Number(n.single_launch_kg || 0)), 0))}</strong></div>
        </div>
      </section>
      <section class="drawer-section">
        <h3>${t('drawerSections').sites}</h3>
        <div class="info-card"><span class="info-label">${t('labels').launchMethod}</span><span class="info-value">${(isZh ? view.launchMethodsZh : view.launchMethodsEn || []).join(' / ') || t('unknown')}</span></div>
        <div class="info-card"><span class="info-label">${t('labels').siteAccess}</span><span class="info-value">${isZh ? (view.siteAccessZh || t('unknown')) : (view.siteAccessEn || t('unknown'))}</span></div>
        <div class="info-card"><span class="info-label">${t('labels').mainSites}</span><span class="info-value">${(view.mainLaunchSites || []).join(' / ') || t('unknown')}</span></div>
        <div class="chip-row">${nodes.map((n) => `<span class="chip" data-vehicle-link="${n.id}">${isZh ? (n.vehicleZh || n.vehicle) : n.vehicle}</span>`).join('')}</div>
      </section>
      <section class="drawer-section">
        <h3>${t('drawerSections').excel}</h3>
        ${view.excel_model_available ? renderExcelTable(view, true) : `<div class="empty-state">${isZh ? '该公司没有完整 5 年预测。' : 'No full 5-year outlook was linked for this company.'}</div>`}
      </section>
      <section class="drawer-section">
        <h3>${t('drawerSections').capital}</h3>
        <div class="info-card"><span class="info-label">${t('labels').valuation}</span><span class="info-value">${view.valuationZh || t('unknown')}</span></div>
        <div class="info-card"><span class="info-label">${t('labels').funding}</span><span class="info-value">${view.fundingZh || t('unknown')}</span></div>
        <div class="info-card"><span class="info-label">${t('labels').investors}</span><span class="info-value">${view.investorsZh || t('unknown')}</span></div>
        ${renderSources(view.sources)}
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
          <div class="stat-box"><span>${yearLabel()} ${t('labels').modelSupply}</span><strong>${fmtMass(site.best_estimate_supply_selected_kg)}</strong></div>
          <div class="stat-box"><span>${yearLabel()} ${t('labels').modelLaunches}</span><strong>${fmtInt(site.best_estimate_launches_selected)}</strong></div>
          <div class="stat-box"><span>${isZh ? '经纬度' : 'Coordinates'}</span><strong>${fmtFloat(site.lat, 2)}, ${fmtFloat(site.lon, 2)}</strong></div>
        </div>
        <div class="info-card"><span class="info-label">${t('labels').accessCategory}</span><span class="info-value">${accessLabel(site.access_category)}</span></div>
        <div class="info-card"><span class="info-label">${isZh ? '场地类型' : 'Site type'}</span><span class="info-value">${site.site_type}</span></div>
        <div class="info-card"><span class="info-label">${isZh ? '覆盖公司' : 'Companies'}</span><span class="info-value">${(site.companies || []).join(' / ') || t('unknown')}</span></div>
        <div class="info-card"><span class="info-label">${isZh ? '覆盖载具' : 'Vehicles'}</span><span class="info-value">${(site.vehicles || []).join(' / ') || t('unknown')}</span></div>
      </section>
    `;
  }


  function renderDrawer() {
    if (!state.drawer) return;
    const record = currentDrawerRecord();
    let html = '';
    if (record && state.editing) {
      html = renderEditor(state.drawer, { ...record, label: record.label || (isZh ? (record.companyZh || record.vehicleZh || record.site || record.company || record.vehicle) : (record.company || record.vehicle || record.site)) });
    } else if (state.drawer.type === 'vehicle') {
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
    if (els.editRecordBtn) {
      els.editRecordBtn.hidden = !state.drawer;
      els.editRecordBtn.textContent = state.editing ? t('dataButtons').cancel : t('dataButtons').edit;
    }
    [...els.drawerBody.querySelectorAll('[data-vehicle-link]')].forEach((chip) => {
      chip.addEventListener('click', () => openDrawer({ type: 'vehicle', id: chip.dataset.vehicleLink }));
    });
    const saveBtn = document.getElementById('saveEditBtn');
    if (saveBtn) saveBtn.addEventListener('click', saveDrawerEdit);
    const exportBtn = document.getElementById('exportPatchBtn');
    if (exportBtn) exportBtn.addEventListener('click', exportDrawerPatch);
    const cancelBtn = document.getElementById('cancelEditBtn');
    if (cancelBtn) cancelBtn.addEventListener('click', () => {
      state.editing = false;
      renderDrawer();
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
    if (els.benchmarkYear) {
      els.benchmarkYear.addEventListener('change', (e) => {
        state.benchmarkYear = Number(e.target.value);
        renderAll();
      });
    }
    if (els.benchmarkTopN) {
      els.benchmarkTopN.addEventListener('change', (e) => {
        state.benchmarkTopN = e.target.value;
        renderAll();
      });
    }
    if (els.benchmarkSort) {
      els.benchmarkSort.addEventListener('change', (e) => {
        state.benchmarkSort = e.target.value;
        renderAll();
      });
    }
    if (els.overviewSupplyGroup) {
      els.overviewSupplyGroup.addEventListener('change', (e) => {
        state.overviewSupplyGroup = e.target.value;
        renderAll();
      });
    }
    if (els.overviewSupplyYear) {
      els.overviewSupplyYear.addEventListener('change', (e) => {
        state.overviewSupplyYear = Number(e.target.value);
        renderAll();
      });
    }
    els.siteMetricSelect.addEventListener('change', (e) => {
      state.siteMetric = e.target.value;
      renderAll();
    });
    if (els.siteZoomIn) els.siteZoomIn.addEventListener('click', () => setSiteZoom(state.siteZoom * 1.2));
    if (els.siteZoomOut) els.siteZoomOut.addEventListener('click', () => setSiteZoom(state.siteZoom / 1.2));
    if (els.siteZoomReset) els.siteZoomReset.addEventListener('click', resetSiteMapView);
    if (els.siteZoomSlider) {
      els.siteZoomSlider.addEventListener('input', (e) => setSiteZoom(Number(e.target.value)));
      els.siteZoomSlider.addEventListener('change', (e) => setSiteZoom(Number(e.target.value)));
    }
    els.closeDrawer.addEventListener('click', closeDrawer);
    els.drawerBackdrop.addEventListener('click', closeDrawer);
    if (els.editRecordBtn) {
      els.editRecordBtn.addEventListener('click', () => {
        state.editing = !state.editing;
        renderDrawer();
      });
    }
    if (els.downloadDataBtn) {
      els.downloadDataBtn.addEventListener('click', () => downloadJson('rocket-market-map-current.json', state.data));
    }
    if (els.importDataBtn) {
      els.importDataBtn.addEventListener('click', () => els.importDataInput.click());
    }
    if (els.importDataInput) {
      els.importDataInput.addEventListener('change', async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        try {
          const raw = await file.text();
          const parsed = JSON.parse(raw);
          applyPatch(parsed, { save: true, statusMessage: t('statusText').importSuccess });
        } catch (error) {
          console.error(error);
          setDataStatus(t('statusText').importError);
        } finally {
          e.target.value = '';
        }
      });
    }
    if (els.resetDataBtn) {
      els.resetDataBtn.addEventListener('click', async () => {
        if (DATA_FROM_API) {
          try {
            const next = await resetDataOnServer();
            state.data = deepClone(next);
            state.defaultData = deepClone(next);
            state.editing = false;
            saveDataToLocal(t('statusText').resetSuccess);
            renderAll();
            if (state.drawer) renderDrawer();
            return;
          } catch (error) {
            console.error(error);
          }
        }
        resetLocalData();
      });
    }
    if (els.uploadDataBtn) {
      els.uploadDataBtn.addEventListener('click', uploadCurrentData);
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDrawer();
    });
  }


  async function init() {
    [
      'brandTitle','heroEyebrow','heroTitle','heroSubtitle','heroTakeaways','heroPrimaryAction','heroSecondaryAction',
      'navMap','navSites','navBenchmark','navData','overviewTitle','overviewGrid','overviewSupplyLabel','overviewSupplyGroup','overviewSupplyYear','overviewSupplyChart','routeTitle','routeSubtitle','routeGrid',
      'year2026','year2030','hideZeroBtn','regionSelect','countrySelect','companySelect','searchInput','clearBtn',
      'mapTitle','mapSubtitle','mapSummary','bubbleChart','mapLegend','sitesTitle','sitesSubtitle','siteMetricLabel','siteMetricSelect','siteZoomOut','siteZoomReset','siteZoomSlider','siteZoomIn','siteMap','siteLegend',
      'benchmarkTitle','benchmarkSubtitle','benchmarkModeLabel','benchmarkMetricLabel','benchmarkYearLabel','benchmarkTopNLabel','benchmarkSortLabel','benchmarkMode','benchmarkMetric','benchmarkYear','benchmarkTopN','benchmarkSort','benchmarkSummary','benchmarkChart',
      'listTitle','listSubtitle','companyGrid','dataTitle','dataSubtitle','dataPortGrid','downloadDataBtn','importDataBtn','uploadDataBtn','resetDataBtn','importDataInput','dataStatus',
      'drawerBackdrop','detailDrawer','closeDrawer','editRecordBtn','drawerBody','tooltip','tooltipHost'
    ].forEach((id) => {
      els[id] = document.getElementById(id);
    });
    if (els.tooltip && els.tooltipHost && els.tooltip.parentElement !== els.tooltipHost) {
      els.tooltipHost.appendChild(els.tooltip);
    }
    const baseData = await loadData();
    state.defaultData = deepClone(baseData);
    const localData = savedDataFromLocal();
    state.data = DATA_FROM_API ? deepClone(baseData) : (localData || deepClone(baseData));
    bindEvents();
    exposePublicApi();
    renderAll();
    setDataStatus('');
  }


  Object.assign(TEXT.zh, {
    overviewSupplyLabel: '供给时间线',
    overviewSupplyGroup: '显示公司数',
    overviewSupplyYear: '主要公司排序年份',
    mapSubtitle: '横轴是单发能力，纵轴是成本与兑现难度，气泡大小是所选年份的年供给最佳估算。支持 2026E–2030E 任一年查看，悬浮查看摘要，点击查看完整资料。',
    drawerSections: { ...TEXT.zh.drawerSections, visual: '尺寸与结构' },
    labels: {
      ...TEXT.zh.labels,
      height: '高度',
      diameter: '直径',
      stages: '级数',
      propellant: '推进剂',
      reuse: '复用方式',
      architecture: '构型',
      engines: '发动机',
      designLogic: '设计逻辑',
      dimensionsQuality: '尺寸口径'
    }
  });

  Object.assign(TEXT.en, {
    overviewSupplyLabel: 'Supply timeline',
    overviewSupplyGroup: 'Number of leaders',
    overviewSupplyYear: 'Ranking year',
    mapSubtitle: 'The x-axis shows single-launch capability, the y-axis shows cost / execution difficulty, and bubble size shows the best estimate of annual supply in the selected year. You can switch across any year from 2026E to 2030E; hover for a preview, click for full detail.',
    drawerSections: { ...TEXT.en.drawerSections, visual: 'Size and structure' },
    labels: {
      ...TEXT.en.labels,
      height: 'Height',
      diameter: 'Diameter',
      stages: 'Stages',
      propellant: 'Propellant',
      reuse: 'Reuse',
      architecture: 'Architecture',
      engines: 'Engines',
      designLogic: 'Design logic',
      dimensionsQuality: 'Dimension basis'
    }
  });

  const VEHICLE_SCHEMATICS = {
    spacex_starship: { height_m: 120, diameter_m: 9, stageCount: 2, boosterCount: 0, profile: 'starship', quality: 'public', noteZh: '全复用超重型，尺寸为公开尺度。', noteEn: 'Fully reusable super-heavy system; dimensions follow public specs.' },
    spacex_f9: { height_m: 70, diameter_m: 3.7, stageCount: 2, boosterCount: 0, quality: 'public', noteZh: '一级回收、二级一次性，公开尺寸较明确。', noteEn: 'Reusable first stage, expendable upper stage, with well-known public dimensions.' },
    longmarch_fleet: { profile: 'fleet', quality: 'aggregate', noteZh: '这是“舰队节点”，不是单一火箭；这里用结构卡解释国家体系供给能力。', noteEn: 'This is a fleet node rather than a single rocket; the card explains aggregate state-system capacity.' },
    longmarch_12a: { height_m: 62, diameter_m: 3.8, stageCount: 2, boosterCount: 0, quality: 'estimate', noteZh: '公开尺寸仍有限，这里按公开区间做近似示意。', noteEn: 'Public dimensions remain limited; the schematic uses a public-range estimate.' },
    blue_new_glenn: { height_m: 98, diameter_m: 7, stageCount: 2, boosterCount: 0, quality: 'public' },
    landspace_zq3: { height_m: 76, diameter_m: 4.5, stageCount: 2, boosterCount: 0, quality: 'estimate' },
    orienspace_g2: { height_m: 70, diameter_m: 4.2, stageCount: 2, boosterCount: 0, quality: 'estimate' },
    ula_vulcan: { height_m: 61.6, diameter_m: 5.4, stageCount: 2, boosterCount: 0, quality: 'public' },
    interstellar_h3: { height_m: 69, diameter_m: 4.2, stageCount: 2, boosterCount: 0, quality: 'estimate' },
    rocketlab_neutron: { height_m: 43, diameter_m: 7, stageCount: 2, boosterCount: 0, profile: 'winged_fairing', quality: 'public' },
    ariane6: { height_m: 63, diameter_m: 5.4, stageCount: 2, boosterCount: 2, boosterType: 'solid', quality: 'public' },
    spacepioneer_tl3: { height_m: 71, diameter_m: 3.8, stageCount: 2, boosterCount: 0, quality: 'estimate' },
    relativity_terranr: { height_m: 82, diameter_m: 5.4, stageCount: 2, boosterCount: 0, quality: 'public' },
    spacex_fh: { height_m: 70, diameter_m: 3.7, stageCount: 2, boosterCount: 2, boosterType: 'liquid', quality: 'public' },
    firefly_eclipse: { height_m: 59, diameter_m: 4.5, stageCount: 2, boosterCount: 0, quality: 'estimate' },
    h3_japan: { height_m: 63, diameter_m: 5.2, stageCount: 2, boosterCount: 2, boosterType: 'solid', quality: 'public' },
    casspace_k2: { height_m: 52, diameter_m: 3.35, stageCount: 2, boosterCount: 0, quality: 'estimate' },
    galactic_pallas1: { height_m: 42, diameter_m: 3.35, stageCount: 2, boosterCount: 0, quality: 'estimate' },
    landspace_zq2e: { height_m: 49.5, diameter_m: 3.35, stageCount: 2, boosterCount: 0, quality: 'estimate' },
    deepblue_nebula1: { height_m: 57, diameter_m: 3.8, stageCount: 2, boosterCount: 0, quality: 'estimate' },
    lvm3_india: { height_m: 43.5, diameter_m: 4, stageCount: 3, boosterCount: 2, boosterType: 'solid', quality: 'public' },
    orienspace_g1: { height_m: 31, diameter_m: 2.65, stageCount: 3, boosterCount: 0, quality: 'estimate' },
    stoke_nova: { height_m: 44, diameter_m: 5, stageCount: 2, boosterCount: 0, quality: 'estimate' },
    vega_c: { height_m: 35, diameter_m: 3, stageCount: 4, boosterCount: 0, quality: 'public' },
    casspace_k1: { height_m: 30, diameter_m: 2.65, stageCount: 4, boosterCount: 0, quality: 'estimate' },
    rfa_one: { height_m: 30, diameter_m: 2, stageCount: 3, boosterCount: 0, quality: 'public' },
    jielong3: { height_m: 31, diameter_m: 2.65, stageCount: 4, boosterCount: 0, quality: 'estimate' },
    firefly_alpha: { height_m: 29, diameter_m: 1.8, stageCount: 2, boosterCount: 0, quality: 'public' },
    isar_spectrum: { height_m: 28, diameter_m: 2, stageCount: 2, boosterCount: 0, quality: 'public' },
    spacepioneer_tl2: { height_m: 33, diameter_m: 3.35, stageCount: 2, boosterCount: 0, quality: 'estimate' },
    maia_launcher: { height_m: 50, diameter_m: 3.5, stageCount: 2, boosterCount: 0, quality: 'estimate' },
    rocketlab_electron: { height_m: 18, diameter_m: 1.2, stageCount: 2, boosterCount: 0, quality: 'public' },
    pslv_india: { height_m: 44, diameter_m: 2.8, stageCount: 4, boosterCount: 4, boosterType: 'solid', quality: 'public' },
    galactic_ceres1: { height_m: 19, diameter_m: 1.4, stageCount: 4, boosterCount: 0, quality: 'public' },
    pld_miura5: { height_m: 35.7, diameter_m: 2, stageCount: 2, boosterCount: 0, quality: 'public' },
    nuri_korea: { height_m: 47.2, diameter_m: 3.5, stageCount: 3, boosterCount: 0, quality: 'public' },
    vikram1_skyroot: { height_m: 24.3, diameter_m: 2.1, stageCount: 3, boosterCount: 0, quality: 'public' },
    eris_gilmour: { height_m: 25, diameter_m: 2, stageCount: 3, boosterCount: 0, quality: 'public' },
    orbex_prime: { height_m: 19, diameter_m: 1.3, stageCount: 2, boosterCount: 0, quality: 'public' }
  };

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  }

  function fmtMeters(value) {
    if (value == null || Number.isNaN(Number(value)) || Number(value) <= 0) return t('unknown');
    return `${fmtFloat(value, 1)} m`;
  }

  function companyColor(company) {
    const seed = String(company || 'Other');
    let hash = 0;
    for (let i = 0; i < seed.length; i += 1) hash = ((hash * 31) + seed.charCodeAt(i)) >>> 0;
    const hue = hash % 360;
    return `hsl(${hue}, 62%, 48%)`;
  }

  function overviewTopOptions() {
    return ['5', '8', '10', '12'];
  }

  function overviewTopLabel(value) {
    return isZh ? `Top ${value} 公司` : `Top ${value} companies`;
  }

  function overviewRankYearLabel(year) {
    return isZh ? `主要公司按 ${yearLabel(year)} 选` : `Leaders ranked by ${yearLabel(year)}`;
  }

  function ensureOverviewLegend() {
    if (els.overviewSupplyLegend) return;
    if (!els.overviewSupplyChart || !els.overviewSupplyChart.parentElement) return;
    const legend = document.createElement('div');
    legend.id = 'overviewSupplyLegend';
    legend.className = 'overview-legend';
    els.overviewSupplyChart.parentElement.insertAdjacentElement('afterend', legend);
    els.overviewSupplyLegend = legend;
  }

  function buildOverviewTimelineData() {
    const rankingYear = Number(state.overviewSupplyYear || 2030);
    const parsedTopCount = Number(state.overviewSupplyGroup);
    const topCount = Number.isFinite(parsedTopCount) && parsedTopCount > 0 ? parsedTopCount : 8;
    const companyRowsByYear = new Map(CHART_YEARS.map((year) => [year, buildCompanyRows(state.data.nodes, year)]));
    const rankingRows = (companyRowsByYear.get(rankingYear) || []).filter((row) => num(row.best_estimate_supply_selected_kg) > 0);
    const leaders = rankingRows.slice(0, topCount);
    const leaderIds = new Set(leaders.map((row) => row.company));
    const leaderSeries = leaders.map((row) => ({
      id: row.company,
      label: row.label,
      color: companyColor(row.company),
      values: CHART_YEARS.map((year) => {
        const match = (companyRowsByYear.get(year) || []).find((item) => item.company === row.company);
        return num(match?.best_estimate_supply_selected_kg);
      })
    }));
    const totals = CHART_YEARS.map((year) => (companyRowsByYear.get(year) || []).reduce((sum, row) => sum + num(row.best_estimate_supply_selected_kg), 0));
    const otherValues = CHART_YEARS.map((year, index) => {
      const leaderSum = leaderSeries.reduce((sum, series) => sum + num(series.values[index]), 0);
      return Math.max(0, totals[index] - leaderSum);
    });
    if (otherValues.some((value) => value > 0)) {
      leaderSeries.push({
        id: 'OTHER',
        label: isZh ? '其他' : 'Other',
        color: '#b8c7da',
        values: otherValues
      });
    }
    return { rankingYear, topCount, years: CHART_YEARS, series: leaderSeries, totals };
  }

  function renderOverviewSupplyChart() {
    if (!els.overviewSupplyChart) return;
    ensureOverviewLegend();
    const data = buildOverviewTimelineData();
    const { years, series, totals } = data;
    const svg = els.overviewSupplyChart;
    const width = 980;
    const height = 460;
    const margin = { top: 30, right: 36, bottom: 74, left: 88 };
    const innerW = width - margin.left - margin.right;
    const innerH = height - margin.top - margin.bottom;
    const maxTotal = Math.max(...totals, 1);
    const tickCount = 4;
    const barBand = innerW / years.length;
    const barW = Math.min(118, barBand * 0.58);
    const yScale = (v) => margin.top + innerH - (num(v) / maxTotal) * innerH;
    const xCenter = (index) => margin.left + barBand * (index + 0.5);
    const parts = [`<rect x="0" y="0" width="${width}" height="${height}" fill="transparent"></rect>`];

    for (let i = 0; i <= tickCount; i += 1) {
      const value = (maxTotal / tickCount) * i;
      const y = yScale(value);
      parts.push(`<line class="svg-grid" x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}"></line>`);
      parts.push(`<text class="svg-axis" x="${margin.left - 10}" y="${y + 4}" text-anchor="end">${fmtMass(value)}</text>`);
    }

    years.forEach((year, yearIndex) => {
      const x = xCenter(yearIndex) - barW / 2;
      let stackBottom = margin.top + innerH;
      parts.push(`<rect x="${x}" y="${margin.top}" width="${barW}" height="${innerH}" rx="16" fill="#f4f8fd"></rect>`);
      series.forEach((entry) => {
        const value = num(entry.values[yearIndex]);
        if (value <= 0) return;
        const segH = Math.max(4, (value / maxTotal) * innerH);
        const y = Math.max(margin.top, stackBottom - segH);
        const isOther = entry.id === 'OTHER';
        const radius = segH < 12 ? 4 : 10;
        parts.push(`<rect class="stack-segment" data-company="${escapeHtml(entry.id)}" data-label="${escapeHtml(entry.label)}" data-year="${year}" data-value="${value}" data-total="${totals[yearIndex]}" x="${x}" y="${y}" width="${barW}" height="${segH}" rx="${radius}" fill="${entry.color}" fill-opacity="${isOther ? '0.82' : '0.92'}"></rect>`);
        stackBottom = y;
      });
      parts.push(`<text class="svg-bar-total" x="${xCenter(yearIndex)}" y="${yScale(totals[yearIndex]) - 10}" text-anchor="middle">${fmtMass(totals[yearIndex])}</text>`);
      parts.push(`<text class="svg-axis" x="${xCenter(yearIndex)}" y="${height - 26}" text-anchor="middle">${yearLabel(year)}</text>`);
    });

    parts.push(`<text class="svg-axis" x="${margin.left}" y="${height - 8}">${isZh ? '横轴：年份' : 'X-axis: year'}</text>`);
    parts.push(`<text class="svg-axis" transform="translate(18 ${margin.top + innerH / 2}) rotate(-90)" text-anchor="middle">${isZh ? '纵轴：年供给' : 'Y-axis: annual supply'}</text>`);

    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.innerHTML = parts.join('');

    const tooltipHtml = (segment) => {
      const year = Number(segment.dataset.year);
      const value = num(segment.dataset.value);
      const total = Math.max(num(segment.dataset.total), 1);
      const share = value > 0 ? `${fmtFloat((value / total) * 100, 1)}%` : t('unknown');
      return `<strong>${escapeHtml(segment.dataset.label)}</strong><div class="tooltip-meta">${yearLabel(year)} ${t('labels').modelSupply}</div><div>${fmtMass(value)}</div><div>${isZh ? '占当年总供给' : 'Share of total supply'}: ${share}</div>`;
    };

    const resolveSegment = (target) => target?.closest ? target.closest('.stack-segment') : null;
    svg.onpointermove = (event) => {
      const segment = resolveSegment(event.target);
      if (!segment) {
        hideTooltip();
        return;
      }
      showTooltip(event, tooltipHtml(segment));
    };
    svg.onpointerleave = hideTooltip;
    svg.onclick = (event) => {
      const segment = resolveSegment(event.target);
      if (!segment) return;
      const company = segment.dataset.company;
      if (company && company !== 'OTHER') {
        state.company = company;
        state.country = 'ALL';
        state.region = 'ALL';
        syncSelectOptions();
        renderAll();
        document.getElementById('map')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (els.overviewSupplyLegend) {
      els.overviewSupplyLegend.innerHTML = series.map((entry) => {
        const latest = num(entry.values[entry.values.length - 1]);
        const tag = entry.id === 'OTHER'
          ? (isZh ? '剩余玩家合并' : 'All other players')
          : `${yearLabel(data.rankingYear)} · ${fmtMass(num(entry.values[data.years.indexOf(data.rankingYear)] || 0))}`;
        return `<button type="button" class="legend-chip" data-company="${escapeHtml(entry.id)}"><span class="legend-swatch" style="background:${entry.color}"></span><span>${escapeHtml(entry.label)}</span><span class="legend-meta">${entry.id === 'OTHER' ? tag : fmtMass(latest)}</span></button>`;
      }).join('');
      [...els.overviewSupplyLegend.querySelectorAll('.legend-chip')].forEach((chip) => {
        chip.addEventListener('click', () => {
          const company = chip.dataset.company;
          if (!company || company === 'OTHER') return;
          state.company = company;
          state.country = 'ALL';
          state.region = 'ALL';
          syncSelectOptions();
          renderAll();
          document.getElementById('map')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        chip.addEventListener('pointerenter', () => {
          const company = chip.dataset.company;
          const match = data.series.find((item) => item.id === company);
          if (!match) return;
          const rankingIndex = data.years.indexOf(data.rankingYear);
          const yearValue = rankingIndex >= 0 ? match.values[rankingIndex] : match.values[match.values.length - 1];
          showTooltipForElement(chip, `<strong>${escapeHtml(match.label)}</strong><div class="tooltip-meta">${overviewRankYearLabel(data.rankingYear)}</div><div>${t('labels').modelSupply}: ${fmtMass(yearValue)}</div>`);
        });
        chip.addEventListener('pointerleave', hideTooltip);
      });
    }
  }

  function schematicQualityLabel(spec) {
    const quality = spec?.quality || 'estimate';
    if (quality === 'public') return isZh ? '公开尺寸 / 公开资料' : 'Public dimensions / public specs';
    if (quality === 'aggregate') return isZh ? '聚合节点 / 非单一火箭' : 'Aggregate node / not a single rocket';
    return isZh ? '公开区间近似' : 'Approximate public-range estimate';
  }

  function defaultSchematicSpec(node) {
    const byLift = {
      Superheavy: { height_m: 110, diameter_m: 8, stageCount: 2 },
      Heavy: { height_m: 65, diameter_m: 5, stageCount: 2 },
      Medium: { height_m: 48, diameter_m: 3.5, stageCount: 2 },
      Small: { height_m: 28, diameter_m: 2, stageCount: 2 },
      'Fleet aggregate': { profile: 'fleet', quality: 'aggregate' }
    };
    const fallback = byLift[node.lift_class] || { height_m: 40, diameter_m: 3, stageCount: 2 };
    return { ...fallback, quality: 'estimate' };
  }

  function stageFractionsFor(spec) {
    if (spec.stageCount === 4) return [0.44, 0.24, 0.18, 0.14];
    if (spec.stageCount === 3) return [0.5, 0.28, 0.22];
    return [0.66, 0.34];
  }

  function stageLabelFor(index) {
    if (isZh) return `第 ${index + 1} 级`;
    return `Stage ${index + 1}`;
  }

  function renderFleetVisual(node, spec) {
    const cards = [
      { x: 58, h: 180, w: 24 },
      { x: 104, h: 220, w: 28 },
      { x: 154, h: 150, w: 20 },
      { x: 194, h: 240, w: 30 },
      { x: 248, h: 130, w: 18 }
    ].map((item, index) => {
      const y = 260 - item.h;
      return `<g opacity="${0.72 + index * 0.04}"><rect x="${item.x}" y="${y}" width="${item.w}" height="${item.h}" rx="12" fill="#2c61da"></rect><polygon points="${item.x},${y + 6} ${item.x + item.w},${y + 6} ${item.x + item.w / 2},${y - 18}" fill="#5f8bff"></polygon></g>`;
    }).join('');
    return `
      <div class="rocket-schematic-card fleet-card">
        <div class="rocket-schematic-title">${isZh ? '舰队节点示意' : 'Fleet-node schematic'}</div>
        <svg viewBox="0 0 320 280" class="rocket-svg" role="img" aria-label="fleet schematic">
          <rect x="0" y="0" width="320" height="280" rx="24" fill="#f7fbff"></rect>
          <line x1="36" y1="28" x2="36" y2="250" stroke="#d5e0ef" stroke-width="2"></line>
          <text x="36" y="20" text-anchor="middle" class="rocket-axis-label">${isZh ? '多型' : 'mixed'}</text>
          ${cards}
          <text x="160" y="268" text-anchor="middle" class="rocket-axis-label">${isZh ? '国家体系现役 / 试验型号组合' : 'operational and pilot vehicles combined'}</text>
        </svg>
        <div class="visual-note">${escapeHtml(spec.noteZh || spec.noteEn || '')}</div>
      </div>
    `;
  }

  function renderVehicleSchematic(node) {
    const spec = { ...defaultSchematicSpec(node), ...(VEHICLE_SCHEMATICS[node.id] || {}) };
    if (spec.profile === 'fleet') return renderFleetVisual(node, spec);
    const heightMeters = Math.max(12, num(spec.height_m));
    const diameterMeters = Math.max(1.1, num(spec.diameter_m || 3));
    const stageFractions = stageFractionsFor(spec);
    const stageCount = spec.stageCount || stageFractions.length;
    const canvasH = 360;
    const canvasW = 320;
    const rulerTop = 20;
    const rulerBottom = 324;
    const maxReference = 130;
    const rocketHeightPx = Math.max(90, (heightMeters / maxReference) * (rulerBottom - rulerTop));
    const rocketBottom = rulerBottom;
    const rocketTop = rocketBottom - rocketHeightPx;
    const bodyWidth = 28 + (diameterMeters / 9) * 54;
    const bodyX = 190 - bodyWidth / 2;
    const sideOffset = bodyWidth * 0.82;
    const boosterWidth = Math.max(10, bodyWidth * 0.36);
    const boosterHeight = rocketHeightPx * 0.58;
    const boosterTop = rocketBottom - boosterHeight;
    const ticks = [];
    for (let meter = 0; meter <= Math.ceil(heightMeters / 10) * 10; meter += 10) {
      const y = rocketBottom - (meter / maxReference) * (rulerBottom - rulerTop);
      if (y < rulerTop - 6 || y > rulerBottom + 1) continue;
      ticks.push(`<line x1="44" y1="${y}" x2="58" y2="${y}" stroke="#9db2cb" stroke-width="1.5"></line><text x="38" y="${y + 4}" text-anchor="end" class="rocket-axis-label">${meter}</text>`);
    }
    let accumulated = 0;
    const segments = stageFractions.slice(0, stageCount).map((fraction, index) => {
      const segH = rocketHeightPx * fraction;
      const y = rocketTop + accumulated;
      accumulated += segH;
      return `<rect x="${bodyX}" y="${y}" width="${bodyWidth}" height="${segH}" rx="${index === 0 ? 12 : 10}" fill="${index % 2 === 0 ? '#275bd7' : '#78a0ff'}"></rect><text x="${bodyX + bodyWidth / 2}" y="${y + segH / 2 + 4}" text-anchor="middle" class="rocket-stage-label">${index + 1}</text>`;
    }).join('');
    const boosters = spec.boosterCount ? Array.from({ length: spec.boosterCount }).map((_, index) => {
      const side = index % 2 === 0 ? -1 : 1;
      const offset = side * (sideOffset + (spec.boosterCount > 2 && index > 1 ? boosterWidth * 0.92 : 0));
      const x = bodyX + offset - boosterWidth / 2;
      return `<rect x="${x}" y="${boosterTop}" width="${boosterWidth}" height="${boosterHeight}" rx="10" fill="#4b7af0" opacity="0.92"></rect><polygon points="${x},${boosterTop + 8} ${x + boosterWidth},${boosterTop + 8} ${x + boosterWidth / 2},${boosterTop - 18}" fill="#87a8ff"></polygon>`;
    }).join('') : '';
    const fairing = spec.profile === 'starship'
      ? `<rect x="${bodyX - 4}" y="${rocketTop - 56}" width="${bodyWidth + 8}" height="64" rx="${bodyWidth / 2}" fill="#1f49ad"></rect>`
      : `<polygon points="${bodyX},${rocketTop + 8} ${bodyX + bodyWidth},${rocketTop + 8} ${bodyX + bodyWidth / 2},${rocketTop - 38}" fill="#1f49ad"></polygon>`;
    const arrowY = rocketTop - 42;
    return `
      <div class="rocket-schematic-card">
        <div class="rocket-schematic-title">${isZh ? '尺寸与构型示意' : 'Size and configuration schematic'}</div>
        <svg viewBox="0 0 ${canvasW} ${canvasH}" class="rocket-svg" role="img" aria-label="${escapeHtml(node.vehicle || node.vehicleZh || 'rocket schematic')}">
          <rect x="0" y="0" width="${canvasW}" height="${canvasH}" rx="24" fill="#f7fbff"></rect>
          <line x1="58" y1="${rulerTop}" x2="58" y2="${rulerBottom}" stroke="#d5e0ef" stroke-width="2"></line>
          ${ticks.join('')}
          <text x="58" y="${rulerTop - 6}" text-anchor="middle" class="rocket-axis-label">m</text>
          <line x1="90" y1="${rocketBottom}" x2="260" y2="${rocketBottom}" stroke="#d5e0ef" stroke-width="2"></line>
          ${boosters}
          ${segments}
          ${fairing}
          <line x1="${bodyX + bodyWidth + 18}" y1="${rocketTop}" x2="${bodyX + bodyWidth + 18}" y2="${rocketBottom}" stroke="#92a8c3" stroke-width="2" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"></line>
          <text x="${bodyX + bodyWidth + 28}" y="${(rocketTop + rocketBottom) / 2}" class="rocket-measure-label">${fmtMeters(heightMeters)}</text>
          <line x1="${bodyX}" y1="${rocketBottom + 18}" x2="${bodyX + bodyWidth}" y2="${rocketBottom + 18}" stroke="#92a8c3" stroke-width="2" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"></line>
          <text x="${bodyX + bodyWidth / 2}" y="${rocketBottom + 38}" text-anchor="middle" class="rocket-measure-label">${fmtMeters(diameterMeters)}</text>
          <defs>
            <marker id="arrowStart" markerWidth="10" markerHeight="10" refX="3" refY="5" orient="auto"><path d="M10,0 L0,5 L10,10" fill="none" stroke="#92a8c3" stroke-width="1.5"></path></marker>
            <marker id="arrowEnd" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10" fill="none" stroke="#92a8c3" stroke-width="1.5"></path></marker>
          </defs>
        </svg>
        <div class="visual-note">${escapeHtml(spec.noteZh || spec.noteEn || (isZh ? '尺寸按公开资料或公开区间绘制，用于看大小、级数和总体设计逻辑。' : 'Dimensions are drawn from public specs or public-range estimates to show scale, staging and overall design logic.'))}</div>
      </div>
    `;
  }

  function renderVehicleVisualPanel(node) {
    const spec = { ...defaultSchematicSpec(node), ...(VEHICLE_SCHEMATICS[node.id] || {}) };
    const engines = (node.engines || []).map((engine) => `${engine.stage || stageLabelFor(0)} · ${engine.name || (isZh ? '未披露' : 'Undisclosed')}${engine.count ? ` × ${engine.count}` : ''}`);
    const stageText = spec.profile === 'fleet' ? (isZh ? '多型舰队' : 'Fleet aggregate') : String(spec.stageCount || stageFractionsFor(spec).length);
    const designLogic = isZh ? (node.techRoute || node.route_summary || t('unknown')) : (node.techRouteEn || node.route_summary || t('unknown'));
    return `
      <div class="vehicle-visual-grid">
        ${renderVehicleSchematic(node)}
        <div class="vehicle-visual-meta">
          <div class="stats-grid wide visual-stats-grid">
            <div class="stat-box"><span>${t('labels').height}</span><strong>${spec.profile === 'fleet' ? t('unknown') : fmtMeters(spec.height_m)}</strong></div>
            <div class="stat-box"><span>${t('labels').diameter}</span><strong>${spec.profile === 'fleet' ? t('unknown') : fmtMeters(spec.diameter_m)}</strong></div>
            <div class="stat-box"><span>${t('labels').stages}</span><strong>${stageText}</strong></div>
            <div class="stat-box"><span>${t('labels').reuse}</span><strong>${escapeHtml(node.reusability_class || t('unknown'))}</strong></div>
          </div>
          <div class="info-card"><span class="info-label">${t('labels').propellant}</span><span class="info-value">${escapeHtml(node.propellant_class || t('unknown'))}</span></div>
          <div class="info-card"><span class="info-label">${t('labels').architecture}</span><span class="info-value">${escapeHtml(node.architecture_class || t('unknown'))}</span></div>
          <div class="info-card"><span class="info-label">${t('labels').designLogic}</span><span class="info-value">${escapeHtml(designLogic)}</span></div>
          <div class="info-card"><span class="info-label">${t('labels').engines}</span><span class="info-value">${engines.length ? engines.map((item) => `<span class="engine-pill">${escapeHtml(item)}</span>`).join('') : t('unknown')}</span></div>
          <div class="info-card soft"><span class="info-label">${t('labels').dimensionsQuality}</span><span class="info-value">${schematicQualityLabel(spec)}</span></div>
        </div>
      </div>
    `;
  }

  function renderVehicleDrawer(node) {
    return `
      <div class="drawer-hero">
        <p class="eyebrow">${routeTag(node)} · ${node.country}</p>
        <h2>${isZh ? (node.companyZh || node.company) : node.company} · ${isZh ? (node.vehicleZh || node.vehicle) : node.vehicle}</h2>
        <p class="drawer-subtitle">${isZh ? (node.currentRealityZh || node.current_reality) : (node.current_reality || node.currentRealityZh || t('unknown'))}</p>
      </div>
      <section class="drawer-section">
        <h3>${t('drawerSections').visual}</h3>
        ${renderVehicleVisualPanel(node)}
      </section>
      <section class="drawer-section">
        <h3>${t('drawerSections').summary}</h3>
        <div class="stats-grid wide">
          <div class="stat-box"><span>${t('labels').payload}</span><strong>${fmtMass(node.single_launch_kg)}</strong></div>
          <div class="stat-box"><span>${yearLabel()} ${t('labels').modelSupply}</span><strong>${bestEstimateSupplyLabel(node)}</strong></div>
          <div class="stat-box"><span>${yearLabel()} ${t('labels').modelLaunches}</span><strong>${bestEstimateLaunchesLabel(node)}</strong></div>
          <div class="stat-box"><span>${t('labels').price}</span><strong>${fmtMoneyM(node[currentKeys().modelPrice])}</strong></div>
          <div class="stat-box"><span>${isZh ? '估值（USD bn）' : 'Valuation (USD bn)'}</span><strong>${fmtMoneyCapital(node.valuation_est_usd_m)}</strong></div>
          <div class="stat-box"><span>${isZh ? '融资额（USD bn）' : 'Funding (USD bn)'}</span><strong>${fmtMoneyCapital(node.funding_est_usd_m)}</strong></div>
        </div>
      </section>
      <section class="drawer-section">
        <h3>${t('drawerSections').route}</h3>
        <div class="info-card"><span class="info-label">${t('labels').route}</span><span class="info-value">${routeTag(node)}</span></div>
        <div class="info-card"><span class="info-label">${isZh ? '为什么这样做' : 'Why this route'}</span><span class="info-value">${isZh ? (node.route_why_zh || node.route_summary) : (node.route_why_en || node.route_summary)}</span></div>
        <div class="info-card"><span class="info-label">${isZh ? '当前约束' : 'Current constraint'}</span><span class="info-value">${isZh ? (node.constraint_zh || t('unknown')) : (node.constraint_en || t('unknown'))}</span></div>
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
        ${node.excel_model_available ? renderExcelTable(node, false) : `<div class="empty-state">${isZh ? '该节点没有完整 5 年预测；当前页仍保留核心市场信息。' : 'No full 5-year outlook was linked for this node; the key market view remains available.'}</div>`}
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

  function syncSelectOptions() {
    const regions = ['ALL', ...new Set(state.data.nodes.map((n) => n.region))];
    if (!els.yearToggleGroup) els.yearToggleGroup = document.getElementById('yearToggleGroup') || els.year2026?.parentElement;
    if (els.yearToggleGroup) {
      els.yearToggleGroup.innerHTML = CHART_YEARS.map((year) => `<button type="button" class="toggle-btn ${state.year === year ? 'active' : ''}" data-map-year="${year}" aria-pressed="${state.year === year}">${yearLabel(year)}</button>`).join('');
    }

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
    els.searchInput.value = state.search;
    els.clearBtn.textContent = t('clear');

    els.benchmarkMode.innerHTML = Object.entries(t('benchmarkModes')).map(([value, label]) => makeOption(value, label, state.benchmarkMode === value)).join('');
    els.benchmarkMetric.innerHTML = Object.entries(t('benchmarkMetrics')).map(([value, label]) => makeOption(value, label, state.benchmarkMetric === value)).join('');
    if (els.benchmarkYear) els.benchmarkYear.innerHTML = CHART_YEARS.map((year) => makeOption(year, yearLabel(year), state.benchmarkYear === year)).join('');
    if (els.benchmarkTopN) els.benchmarkTopN.innerHTML = Object.entries(t('benchmarkTopOptions')).map(([value, label]) => makeOption(value, label, state.benchmarkTopN === value)).join('');
    if (els.benchmarkSort) els.benchmarkSort.innerHTML = Object.entries(t('benchmarkSortOptions')).map(([value, label]) => makeOption(value, label, state.benchmarkSort === value)).join('');
    if (els.overviewSupplyGroup) els.overviewSupplyGroup.innerHTML = overviewTopOptions().map((value) => makeOption(value, overviewTopLabel(value), String(state.overviewSupplyGroup) === String(value))).join('');
    if (els.overviewSupplyYear) els.overviewSupplyYear.innerHTML = CHART_YEARS.map((year) => makeOption(year, overviewRankYearLabel(year), Number(state.overviewSupplyYear) === year)).join('');
    els.siteMetricSelect.innerHTML = Object.entries(t('siteMetricOptions')).map(([value, label]) => makeOption(value, label, state.siteMetric === value)).join('');
    if (els.siteZoomReset) els.siteZoomReset.textContent = `${fmtFloat(state.siteZoom, 1)}×`;
  }

  function bindEvents() {
    if (!els.yearToggleGroup) els.yearToggleGroup = document.getElementById('yearToggleGroup') || els.year2026?.parentElement;
    if (els.yearToggleGroup) {
      els.yearToggleGroup.addEventListener('click', (event) => {
        const btn = event.target.closest('[data-map-year]');
        if (!btn) return;
        state.year = Number(btn.dataset.mapYear);
        renderAll();
      });
    }
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
    if (els.benchmarkYear) {
      els.benchmarkYear.addEventListener('change', (e) => {
        state.benchmarkYear = Number(e.target.value);
        renderAll();
      });
    }
    if (els.benchmarkTopN) {
      els.benchmarkTopN.addEventListener('change', (e) => {
        state.benchmarkTopN = e.target.value;
        renderAll();
      });
    }
    if (els.benchmarkSort) {
      els.benchmarkSort.addEventListener('change', (e) => {
        state.benchmarkSort = e.target.value;
        renderAll();
      });
    }
    if (els.overviewSupplyGroup) {
      els.overviewSupplyGroup.addEventListener('change', (e) => {
        state.overviewSupplyGroup = e.target.value;
        renderAll();
      });
    }
    if (els.overviewSupplyYear) {
      els.overviewSupplyYear.addEventListener('change', (e) => {
        state.overviewSupplyYear = Number(e.target.value);
        renderAll();
      });
    }
    els.siteMetricSelect.addEventListener('change', (e) => {
      state.siteMetric = e.target.value;
      renderAll();
    });
    if (els.siteZoomIn) els.siteZoomIn.addEventListener('click', () => setSiteZoom(state.siteZoom * 1.2));
    if (els.siteZoomOut) els.siteZoomOut.addEventListener('click', () => setSiteZoom(state.siteZoom / 1.2));
    if (els.siteZoomReset) els.siteZoomReset.addEventListener('click', resetSiteMapView);
    if (els.siteZoomSlider) {
      els.siteZoomSlider.addEventListener('input', (e) => setSiteZoom(Number(e.target.value)));
      els.siteZoomSlider.addEventListener('change', (e) => setSiteZoom(Number(e.target.value)));
    }
    els.closeDrawer.addEventListener('click', closeDrawer);
    els.drawerBackdrop.addEventListener('click', closeDrawer);
    if (els.editRecordBtn) {
      els.editRecordBtn.addEventListener('click', () => {
        state.editing = !state.editing;
        renderDrawer();
      });
    }
    if (els.downloadDataBtn) {
      els.downloadDataBtn.addEventListener('click', () => downloadJson('rocket-market-map-current.json', state.data));
    }
    if (els.importDataBtn) {
      els.importDataBtn.addEventListener('click', () => els.importDataInput.click());
    }
    if (els.importDataInput) {
      els.importDataInput.addEventListener('change', async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        try {
          const raw = await file.text();
          const parsed = JSON.parse(raw);
          applyPatch(parsed, { save: true, statusMessage: t('statusText').importSuccess });
        } catch (error) {
          console.error(error);
          setDataStatus(t('statusText').importError, true);
        } finally {
          e.target.value = '';
        }
      });
    }
    if (els.resetDataBtn) {
      els.resetDataBtn.addEventListener('click', async () => {
        if (DATA_FROM_API) {
          try {
            const response = await fetch('/api/reset', { method: 'POST' });
            if (response.ok) {
              const payload = await response.json();
              state.data = hydrateData(payload.data || payload);
              saveDataToLocal(t('statusText').resetSuccess);
              renderAll();
              if (state.drawer) renderDrawer();
              return;
            }
          } catch (error) {
            console.error(error);
          }
        }
        resetLocalData();
      });
    }
    if (els.uploadDataBtn) {
      els.uploadDataBtn.addEventListener('click', uploadCurrentData);
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  async function init() {
    [
      'brandTitle','heroEyebrow','heroTitle','heroSubtitle','heroTakeaways','heroPrimaryAction','heroSecondaryAction',
      'navMap','navSites','navBenchmark','navData','overviewTitle','overviewGrid','overviewSupplyLabel','overviewSupplyGroup','overviewSupplyYear','overviewSupplyChart','routeTitle','routeSubtitle','routeGrid',
      'year2026','year2030','hideZeroBtn','regionSelect','countrySelect','companySelect','searchInput','clearBtn',
      'mapTitle','mapSubtitle','mapSummary','bubbleChart','mapLegend','sitesTitle','sitesSubtitle','siteMetricLabel','siteMetricSelect','siteZoomOut','siteZoomReset','siteZoomSlider','siteZoomIn','siteMap','siteLegend',
      'benchmarkTitle','benchmarkSubtitle','benchmarkModeLabel','benchmarkMetricLabel','benchmarkYearLabel','benchmarkTopNLabel','benchmarkSortLabel','benchmarkMode','benchmarkMetric','benchmarkYear','benchmarkTopN','benchmarkSort','benchmarkSummary','benchmarkChart',
      'listTitle','listSubtitle','companyGrid','dataTitle','dataSubtitle','dataPortGrid','downloadDataBtn','importDataBtn','uploadDataBtn','resetDataBtn','importDataInput','dataStatus',
      'drawerBackdrop','detailDrawer','closeDrawer','editRecordBtn','drawerBody','tooltip','tooltipHost'
    ].forEach((id) => {
      els[id] = document.getElementById(id);
    });
    els.yearToggleGroup = document.getElementById('yearToggleGroup') || els.year2026?.parentElement;
    ensureOverviewLegend();
    if (els.tooltip && els.tooltipHost && els.tooltip.parentElement !== els.tooltipHost) {
      els.tooltipHost.appendChild(els.tooltip);
    }
    const baseData = await loadData();
    state.defaultData = deepClone(baseData);
    const localData = savedDataFromLocal();
    state.data = DATA_FROM_API ? deepClone(baseData) : (localData || deepClone(baseData));
    state.overviewSupplyGroup = overviewTopOptions().includes(String(state.overviewSupplyGroup)) ? String(state.overviewSupplyGroup) : '8';
    state.overviewSupplyYear = CHART_YEARS.includes(Number(state.overviewSupplyYear)) ? Number(state.overviewSupplyYear) : 2030;
    bindEvents();
    exposePublicApi();
    renderAll();
    setDataStatus('');
  }


  window.addEventListener('DOMContentLoaded', init);
})();
