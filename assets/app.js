(() => {
  const lang = document.body.dataset.lang || 'zh';
  const isZh = lang.startsWith('zh');

  const TEXT = {
    zh: {
      brand: 'Rocket Market Map · Executive Edition',
      heroEyebrow: 'Executive view',
      heroTitle: '全球火箭市场：先看目标，再看技术',
      heroSubtitle: '火箭公司不是在比“谁最先进”，而是在成本、运力、可靠性、节奏、主权和资本之间做取舍。这个版本只保留对管理层真正有用的内容：先解释为什么会有不同路线，再用一张主图和可下钻的公司卡把市场看清。',
      ctaMap: '看主图',
      ctaRoutes: '看路线解释',
      heroTakeaways: [
        ['先问目标', '一家公司到底想赢什么：最低长期成本、最大单发运力、最高任务把握度、最快响应，还是国家主权准入？'],
        ['再看约束', '发动机成熟度、资本、订单、发射场和认证，决定了它敢不敢走复用，能不能把路线做成生意。'],
        ['最后看路线', '多数主流玩家最终都会落到六类路线里。路线不同，不代表谁先进谁落后，而是服务不同目标。']
      ],
      overview: [
        ['为什么火箭会长得不一样？', '因为客户不一样。大星座想要的是单位成本和频率，国家任务想要的是任务把握度，小卫星客户想买的是专属窗口。'],
        ['为什么不是所有人都做全复用？', '因为全复用的上限最高，但研发风险、系统复杂度和资本消耗也最高。多数公司先从一次性或一级复用起步。'],
        ['看一家公司最该看什么？', '看它服务谁、靠什么赚钱、最怕什么，以及它的技术路线是否真的和这些目标匹配。']
      ],
      principlesTitle: '先用第一性原理读懂火箭设计',
      principlesSubtitle: '大多数设计差异，都可以追溯到四个拨杆：客户、推进剂、回收方式，以及现实约束。',
      principles: [
        ['客户是谁', '大星座和政府重型任务，会推动更大的运力和更高频率；小卫星客户更看重专属时间窗。'],
        ['推进剂怎么选', '煤油成熟、甲烷更利于复用、氢效率高但系统复杂、固体响应快但长期成本通常不占优。'],
        ['回收做到哪一步', '不回收最稳、一级回收最像主流商业方案、全复用潜力最大但系统难度最高。'],
        ['现实约束是什么', '资本、发动机成熟度、认证、供应链和发射场，常常比“理论最优解”更能决定最终路线。']
      ],
      goalsTitle: '如果目标变了，路线也会变',
      goalsSubtitle: '点一个目标，看它通常会把公司推向哪些路线。',
      routesTitle: '六种最重要的主流路线',
      routesSubtitle: '点卡片可过滤主图与公司卡。默认展示全部。',
      clearRouteFilter: '显示全部路线',
      mapTitle: '主图：单发运力 vs. 长期成本竞争力',
      mapSubtitle: '横轴看单发运力，纵轴看长期成本竞争力评分，气泡大小看可交付运力。颜色代表路线，点击气泡看公司策略卡。',
      metric2026: '2026 可交付运力',
      metric2030: '2030 潜在运力',
      regionAll: '全部地区',
      regionUS: '美国',
      regionEurope: '欧洲',
      regionChina: '中国',
      mapNote: '说明：这张图只放“单一火箭产品节点”。像“长征现役舰队”这种体系级节点，会在公司卡里保留，但不会放在单发气泡图里。长期成本竞争力是基于复用深度、频率、批产和订单闭环的研究性评分，不等于官方报价。',
      companiesTitle: '公司策略卡',
      companiesSubtitle: '默认按路线分组。点任意公司卡，可展开技术、历史、资本和计划任务。',
      searchPlaceholder: '搜索公司或火箭…',
      emptyState: '当前筛选条件下没有匹配结果。',
      dataPortTitle: '数据更新端口',
      dataPortSubtitle: '以后你用 AI 自动采集和更新时，只要读这几个固定入口就行。网站主读取主数据文件，其它是清单和更新契约。',
      portCards: [
        ['主数据文件', '网站的可视化和详情页都优先读取这一份 JSON。'],
        ['数据清单', '告诉 AI 哪个文件是主入口，以及当前版本号。'],
        ['更新契约', '告诉 AI 应该按什么主键和字段去改，避免把网站改坏。']
      ],
      drawerClose: '关闭',
      drawerSections: {
        thesis: '一句话判断',
        coreData: '关键数据',
        why: '为什么会选这条路线',
        tech: '技术与基础设施',
        history: '历史与近期任务',
        capital: '资本与投资人',
        sources: '来源'
      },
      drawerLabels: {
        route: '路线', region: '地区', maturity: '状态', target: '目标', constraint: '主要制约', watch: '下一观察点',
        payload: '单发 LEO', gto: '单发 GTO', flights2026: '2026 发射次数', firstFlight: '首飞', totalFlights: '累计发射',
        propellant: '推进剂', reuse: '复用方式', recovery: '回收方式', architecture: '架构', launchSite: '发射场',
        certified: '认证', constellation: '组网适配', valuation: '估值', funding: '融资', investors: '投资人',
        engines: '发动机', planned: '近期计划任务', historyChart: '近年发射节奏'
      },
      yes: '是', no: '否', unknown: '未披露 / 不适用',
      actual: '已首飞', planned: '计划首飞',
      nodesUnit: '个节点',
      supplyUnit: '2026 运力',
      chartXTitle: '单发 LEO 运力（对数轴）',
      chartYTitle: '长期成本竞争力评分',
      topLabelNote: '标签只展示少数关键节点；其余请悬停或点击查看。',
      axisTickKg: 'kg',
      axisTickT: 't'
    },
    en: {
      brand: 'Rocket Market Map · Executive Edition',
      heroEyebrow: 'Executive view',
      heroTitle: 'Global launch market: start with goals, then technology',
      heroSubtitle: 'Rocket companies are not simply competing on “who is more advanced.” They are making tradeoffs between cost, payload, reliability, cadence, sovereignty and capital. This version keeps only what helps leadership teams: explain why different routes exist, then show the market through one main chart and drill-down strategy cards.',
      ctaMap: 'Open main chart',
      ctaRoutes: 'See route archetypes',
      heroTakeaways: [
        ['Start with the goal', 'Is the company trying to win on delivered cost, payload per launch, mission assurance, response time, or sovereign access?'],
        ['Then look at constraints', 'Engine maturity, capital, launch sites, certification and order flow determine how bold a vehicle architecture can be.'],
        ['Only then look at technology', 'Most serious players eventually cluster into six route archetypes. Different routes exist because the business goals differ.']
      ],
      overview: [
        ['Why do rockets look so different?', 'Because customers differ. Constellations want delivered cost and cadence, sovereign missions want assurance, and small-satellite buyers often want a dedicated window.'],
        ['Why not build everything around full reuse?', 'Because full reuse offers the highest upside, but also the hardest engineering, the largest capital burn, and the longest path to stable operations.'],
        ['What should you ask first?', 'Who pays, what the company is trying to win, what can break the model, and whether the chosen architecture actually matches that reality.']
      ],
      principlesTitle: 'Read rocket design from first principles',
      principlesSubtitle: 'Most design differences come from four levers: customer, propellant, recovery depth and real-world constraints.',
      principles: [
        ['Customer', 'Constellation and government-heavy demand pushes toward larger payloads and higher cadence; small satellites often value a dedicated window.'],
        ['Propellant', 'Kerosene is mature, methane is attractive for reuse, hydrogen is efficient but complex, and solids are operationally fast but usually weaker on long-run cost.'],
        ['Recovery depth', 'Expendable is simpler, first-stage reuse is today’s commercial sweet spot, and full reuse has the highest upside with the highest system complexity.'],
        ['Real-world constraints', 'Capital, engines, certification, supply chain and launch-site access often matter more than the elegant theoretical answer.']
      ],
      goalsTitle: 'Change the goal, change the architecture',
      goalsSubtitle: 'Pick a goal to see which routes it usually pushes companies toward.',
      routesTitle: 'Six route archetypes that matter most',
      routesSubtitle: 'Click a card to filter the chart and strategy cards. Default view shows all routes.',
      clearRouteFilter: 'Show all routes',
      mapTitle: 'Main chart: payload per launch vs. long-term cost position',
      mapSubtitle: 'X shows single-launch payload, Y is a long-term cost competitiveness score, bubble size shows supply. Color shows route type. Click a bubble for the strategy card.',
      metric2026: '2026 deliverable supply',
      metric2030: '2030 potential supply',
      regionAll: 'All regions',
      regionUS: 'U.S.',
      regionEurope: 'Europe',
      regionChina: 'China',
      mapNote: 'Note: the chart shows single-vehicle product nodes only. Fleet-level nodes such as the active Long March fleet remain in the company cards but are excluded from the single-launch bubble chart. The long-term cost score is an analytical view based on reuse depth, cadence, production scale and order loops; it is not an official price quote.',
      companiesTitle: 'Strategy cards by company and vehicle',
      companiesSubtitle: 'By default the cards are grouped by route. Open any card for the full technical, historical and capital detail.',
      searchPlaceholder: 'Search company or vehicle…',
      emptyState: 'No matching vehicles under the current filters.',
      dataPortTitle: 'Data update port',
      dataPortSubtitle: 'If you later automate collection and refresh with AI, these are the fixed endpoints to read and update. The website reads the primary data file first.',
      portCards: [
        ['Primary data file', 'The site reads this JSON first for charts and drill-down detail.'],
        ['Manifest', 'Tells an AI which file is the primary entry point and which version is live.'],
        ['Update contract', 'Tells an AI which keys and fields to update so the site stays stable.']
      ],
      drawerClose: 'Close',
      drawerSections: {
        thesis: 'Bottom line',
        coreData: 'Key data',
        why: 'Why this route',
        tech: 'Technology and infrastructure',
        history: 'History and near-term missions',
        capital: 'Capital and investors',
        sources: 'Sources'
      },
      drawerLabels: {
        route: 'Route', region: 'Region', maturity: 'Status', target: 'Objective', constraint: 'Main constraint', watch: 'What to watch',
        payload: 'Single-launch LEO', gto: 'Single-launch GTO', flights2026: '2026 flights', firstFlight: 'First flight', totalFlights: 'Total flights',
        propellant: 'Propellant', reuse: 'Reuse', recovery: 'Recovery method', architecture: 'Architecture', launchSite: 'Launch sites',
        certified: 'Certified', constellation: 'Constellation capable', valuation: 'Valuation', funding: 'Funding', investors: 'Investors',
        engines: 'Engines', planned: 'Planned missions', historyChart: 'Recent launch cadence'
      },
      yes: 'Yes', no: 'No', unknown: 'Undisclosed / n.a.',
      actual: 'Flown', planned: 'Planned',
      nodesUnit: 'nodes',
      supplyUnit: '2026 supply',
      chartXTitle: 'Single-launch LEO payload (log scale)',
      chartYTitle: 'Long-term cost competitiveness',
      topLabelNote: 'Only a few key labels are shown by default; hover or click for the rest.',
      axisTickKg: 'kg',
      axisTickT: 't'
    }
  };

  const ROUTE_COPY_EN = {
    scaled_reuse: {
      why: 'The goal is to turn launch into a high-cadence industrial service where reuse, refurbishment and demand all compound together.',
      tradeoff: 'Best long-run cost and cadence, but it only works if flight rate, ops discipline and infrastructure all hold up.',
      fit: 'Best fit for mixed government/commercial demand and large constellations.'
    },
    reuse_challenger: {
      why: 'The goal is to capture most reuse benefits in medium/heavy launch without taking the full risk of all-up full reuse on day one.',
      tradeoff: 'Promising cost curve if scale arrives, but the company must master landing, engines and manufacturing at the same time.',
      fit: 'Best fit for players trying to challenge the commercial mainstream by 2027–2030.'
    },
    frontier_full_reuse: {
      why: 'The goal is not a small cost gain but a step change in payload and marginal cost.',
      tradeoff: 'Highest upside, highest systems risk: thermal protection, turnaround, reentry and in-space ops all become central.',
      fit: 'Best fit for ultra-heavy cargo, giant constellations and deep-space logistics ambitions.'
    },
    sovereign_assured: {
      why: 'The goal is assured national access and certified mission execution, not pure minimum price.',
      tradeoff: 'High mission assurance and political value, but usually slower cadence and weaker structural cost position.',
      fit: 'Best fit for sovereign launch ecosystems and national-security-heavy portfolios.'
    },
    dedicated_small: {
      why: 'The goal is to sell a dedicated window and orbital flexibility to small payloads.',
      tradeoff: 'Flexible and useful, but hard to make cheap without real volume.',
      fit: 'Best fit for dedicated small-sat missions, demos and time-sensitive rides.'
    },
    responsive_solid: {
      why: 'The goal is rapid deployment with simpler operations and lighter infrastructure demands.',
      tradeoff: 'Fast and operationally simple, but usually weaker on long-run cost and orbital finesse.',
      fit: 'Best fit for responsive missions, some government demand and early constellation replenishment.'
    }
  };

  const REGIONS = {
    ALL: { zh: TEXT.zh.regionAll, en: TEXT.en.regionAll },
    US: { zh: TEXT.zh.regionUS, en: TEXT.en.regionUS },
    Europe: { zh: TEXT.zh.regionEurope, en: TEXT.en.regionEurope },
    China: { zh: TEXT.zh.regionChina, en: TEXT.en.regionChina }
  };

  const state = {
    data: null,
    metric: 'supply_2026_kg',
    region: 'ALL',
    route: 'ALL',
    goal: 'low_cost',
    search: '',
    selectedId: null
  };

  const els = {
    brandTitle: document.getElementById('brandTitle'),
    heroEyebrow: document.getElementById('heroEyebrow'),
    heroTitle: document.getElementById('heroTitle'),
    heroSubtitle: document.getElementById('heroSubtitle'),
    ctaMap: document.getElementById('ctaMap'),
    ctaRoutes: document.getElementById('ctaRoutes'),
    heroTakeaways: document.getElementById('heroTakeaways'),
    overviewCard1: document.getElementById('overviewCard1'),
    overviewCard2: document.getElementById('overviewCard2'),
    overviewCard3: document.getElementById('overviewCard3'),
    principlesTitle: document.getElementById('principlesTitle'),
    principlesSubtitle: document.getElementById('principlesSubtitle'),
    principlesGrid: document.getElementById('principlesGrid'),
    goalsTitle: document.getElementById('goalsTitle'),
    goalsSubtitle: document.getElementById('goalsSubtitle'),
    goalPills: document.getElementById('goalPills'),
    goalCallout: document.getElementById('goalCallout'),
    routesTitle: document.getElementById('routesTitle'),
    routesSubtitle: document.getElementById('routesSubtitle'),
    clearRouteFilter: document.getElementById('clearRouteFilter'),
    routeGrid: document.getElementById('routeGrid'),
    mapTitle: document.getElementById('mapTitle'),
    mapSubtitle: document.getElementById('mapSubtitle'),
    metricToggle: document.getElementById('metricToggle'),
    regionToggle: document.getElementById('regionToggle'),
    chartLegend: document.getElementById('chartLegend'),
    bubbleChart: document.getElementById('bubbleChart'),
    mapNote: document.getElementById('mapNote'),
    companiesTitle: document.getElementById('companiesTitle'),
    companiesSubtitle: document.getElementById('companiesSubtitle'),
    companySearch: document.getElementById('companySearch'),
    companyGroups: document.getElementById('companyGroups'),
    dataPortTitle: document.getElementById('dataPortTitle'),
    dataPortSubtitle: document.getElementById('dataPortSubtitle'),
    dataPortGrid: document.getElementById('dataPortGrid'),
    drawerBackdrop: document.getElementById('drawerBackdrop'),
    detailDrawer: document.getElementById('detailDrawer'),
    drawerEyebrow: document.getElementById('drawerEyebrow'),
    drawerTitle: document.getElementById('drawerTitle'),
    drawerSubtitle: document.getElementById('drawerSubtitle'),
    drawerBody: document.getElementById('drawerBody'),
    closeDrawer: document.getElementById('closeDrawer'),
    tooltip: document.getElementById('tooltip')
  };

  function t(key) {
    return TEXT[isZh ? 'zh' : 'en'][key];
  }

  function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  async function loadData() {
    const inline = window.__INLINE_DATA__ ? deepCopy(window.__INLINE_DATA__) : null;
    const useInline = location.protocol === 'file:';
    if (!useInline && window.__DATA_PATH__) {
      try {
        const res = await fetch(window.__DATA_PATH__, { cache: 'no-store' });
        if (res.ok) return await res.json();
      } catch (err) {
        console.warn('Falling back to inline data:', err);
      }
    }
    return inline;
  }

  function regionLabel(region) {
    const entry = REGIONS[region];
    if (!entry) return region;
    return isZh ? entry.zh : entry.en;
  }

  function routeLabel(node) {
    return isZh ? node.route_class_zh : node.route_class_en;
  }

  function routeCopy(routeId) {
    const defs = state.data.meta_v3.routeDefinitions[routeId];
    return {
      name: isZh ? defs.zh : defs.en,
      why: isZh ? defs.why_zh : ROUTE_COPY_EN[routeId].why,
      tradeoff: isZh ? defs.tradeoff_zh : ROUTE_COPY_EN[routeId].tradeoff,
      fit: isZh ? defs.fit_zh : ROUTE_COPY_EN[routeId].fit,
      color: defs.color,
      order: defs.order
    };
  }

  function goalCopy(goalId) {
    const goal = state.data.meta_v3.goalDefinitions[goalId];
    return {
      label: isZh ? goal.zh : goal.en,
      summary: isZh ? goal.summary_zh : (goal.summary_en || {
        low_cost: 'Lower delivered cost usually pushes you toward first-stage reuse or full reuse.',
        high_payload: 'Higher payload usually means larger boosters, more engine thrust and heavier ground systems.',
        high_reliability: 'Government and high-value missions often prioritize mission assurance over the lowest possible price.',
        fast_schedule: 'If schedule matters most, the market tends to split between high-cadence reusable platforms and dedicated small / responsive systems.',
        sovereignty: 'When sovereign access matters more than minimum cost, procurement and certification shape the architecture.',
        risk_control: 'The more conservative the architecture, the easier it is to manage development risk—at the expense of long-run cost upside.'
      }[goalId]),
      routes: goal.routes
    };
  }

  function massShort(kg) {
    if (kg == null) return t('unknown');
    if (kg >= 1_000_000) return `${(kg / 1000).toLocaleString(undefined, { maximumFractionDigits: 0 })}${t('axisTickT')}`;
    if (kg >= 1000) {
      const tons = kg / 1000;
      return `${tons >= 10 ? tons.toLocaleString(undefined, { maximumFractionDigits: 0 }) : tons.toLocaleString(undefined, { maximumFractionDigits: 1 })}${t('axisTickT')}`;
    }
    return `${kg.toLocaleString()} ${t('axisTickKg')}`;
  }

  function regionShort(region) {
    return regionLabel(region);
  }

  function currentText(node, keyZh, keyEn, fallback = '') {
    if (isZh) return node[keyZh] || fallback;
    return node[keyEn] || fallback;
  }

  function textSearch(node) {
    const parts = [node.company, node.vehicle, node.companyZh, node.vehicleZh, node.route_class_zh, node.route_class_en, node.region, node.country];
    return parts.join(' ').toLowerCase();
  }

  function filteredNodes() {
    const q = state.search.trim().toLowerCase();
    return state.data.nodes.filter((node) => {
      if (state.region !== 'ALL' && node.region !== state.region) return false;
      if (state.route !== 'ALL' && node.route_class !== state.route) return false;
      if (q && !textSearch(node).includes(q)) return false;
      return true;
    });
  }

  function chartNodes() {
    return filteredNodes().filter((n) => Number.isFinite(n.single_launch_kg));
  }

  function setText() {
    els.brandTitle.textContent = t('brand');
    els.heroEyebrow.textContent = t('heroEyebrow');
    els.heroTitle.textContent = t('heroTitle');
    els.heroSubtitle.textContent = t('heroSubtitle');
    els.ctaMap.textContent = t('ctaMap');
    els.ctaRoutes.textContent = t('ctaRoutes');

    const takeaways = t('heroTakeaways');
    els.heroTakeaways.innerHTML = takeaways.map(([title, body]) => `<div class="takeaway-card"><strong>${title}</strong><span>${body}</span></div>`).join('');

    const overview = t('overview');
    [els.overviewCard1, els.overviewCard2, els.overviewCard3].forEach((el, i) => {
      el.innerHTML = `<h3>${overview[i][0]}</h3><p>${overview[i][1]}</p>`;
    });

    els.principlesTitle.textContent = t('principlesTitle');
    els.principlesSubtitle.textContent = t('principlesSubtitle');
    els.principlesGrid.innerHTML = t('principles').map(([title, body]) => `<div class="principle-card"><h3>${title}</h3><p>${body}</p></div>`).join('');
    els.goalsTitle.textContent = t('goalsTitle');
    els.goalsSubtitle.textContent = t('goalsSubtitle');

    els.routesTitle.textContent = t('routesTitle');
    els.routesSubtitle.textContent = t('routesSubtitle');
    els.clearRouteFilter.textContent = t('clearRouteFilter');

    els.mapTitle.textContent = t('mapTitle');
    els.mapSubtitle.textContent = t('mapSubtitle');
    els.mapNote.textContent = t('mapNote');

    els.companiesTitle.textContent = t('companiesTitle');
    els.companiesSubtitle.textContent = t('companiesSubtitle');
    els.companySearch.placeholder = t('searchPlaceholder');

    els.dataPortTitle.textContent = t('dataPortTitle');
    els.dataPortSubtitle.textContent = t('dataPortSubtitle');
    els.closeDrawer.setAttribute('aria-label', t('drawerClose'));
  }

  function renderGoalPills() {
    const goals = Object.keys(state.data.meta_v3.goalDefinitions);
    els.goalPills.innerHTML = goals.map((goalId) => {
      const copy = goalCopy(goalId);
      const active = goalId === state.goal ? 'active' : '';
      return `<button class="goal-pill ${active}" data-goal="${goalId}">${copy.label}</button>`;
    }).join('');
    [...els.goalPills.querySelectorAll('.goal-pill')].forEach((btn) => {
      btn.addEventListener('click', () => {
        state.goal = btn.dataset.goal;
        renderGoalPills();
        renderGoalCallout();
        renderRoutes();
      });
    });
    renderGoalCallout();
  }

  function renderGoalCallout() {
    const copy = goalCopy(state.goal);
    const routesHtml = copy.routes.map((rid) => {
      const rcopy = routeCopy(rid);
      return `<span class="mini-pill"><span class="mini-dot" style="background:${rcopy.color}"></span>${rcopy.name}</span>`;
    }).join('');
    els.goalCallout.innerHTML = `
      <h4>${copy.label}</h4>
      <p>${copy.summary}</p>
      <div class="goal-routes">${routesHtml}</div>
    `;
  }

  function computeRouteStatsForView() {
    const baseNodes = state.data.nodes.filter((node) => {
      const q = state.search.trim().toLowerCase();
      if (state.region !== 'ALL' && node.region !== state.region) return false;
      if (q && !textSearch(node).includes(q)) return false;
      return true;
    });
    const grouped = {};
    for (const node of baseNodes) {
      const key = node.route_class;
      if (!grouped[key]) grouped[key] = { count: 0, supply: 0, examples: [] };
      grouped[key].count += 1;
      grouped[key].supply += Number(node[state.metric] || 0);
      grouped[key].examples.push(node);
    }
    return grouped;
  }

  function renderRoutes() {
    const stats = computeRouteStatsForView();
    const highlightedRoutes = new Set(goalCopy(state.goal).routes);
    const routeIds = Object.keys(state.data.meta_v3.routeDefinitions).sort((a, b) => routeCopy(a).order - routeCopy(b).order);
    els.routeGrid.innerHTML = routeIds.map((routeId) => {
      const copy = routeCopy(routeId);
      const stat = stats[routeId] || { count: 0, supply: 0, examples: [] };
      const examples = stat.examples.sort((a, b) => Number(b[state.metric] || 0) - Number(a[state.metric] || 0)).slice(0, 3);
      const exampleHtml = examples.map((n) => `
        <button class="route-example-chip" data-node-open="${n.id}">${isZh ? `${n.companyZh} · ${n.vehicleZh}` : `${n.company} · ${n.vehicle}`}</button>`).join('');
      const active = state.route === routeId ? 'active' : '';
      const highlighted = highlightedRoutes.has(routeId) ? 'highlighted' : '';
      const borderColor = copy.color;
      return `
        <div class="route-card ${active} ${highlighted}" data-route="${routeId}" style="border-color:${active ? borderColor : '#dde6f3'}">
          <div class="route-top">
            <div class="route-name"><span class="route-swatch" style="background:${copy.color}"></span><h3>${copy.name}</h3></div>
            <div class="route-metric">
              <div>${stat.count} ${t('nodesUnit')}</div>
              <div>${massShort(stat.supply)}</div>
            </div>
          </div>
          <p>${copy.why}</p>
          <p class="tradeoff"><strong>${isZh ? '代价' : 'Tradeoff'}：</strong>${copy.tradeoff}</p>
          <p class="tradeoff"><strong>${isZh ? '最适合' : 'Best fit'}：</strong>${copy.fit}</p>
          <div class="route-examples">${exampleHtml}</div>
        </div>`;
    }).join('');

    [...els.routeGrid.querySelectorAll('.route-card')].forEach((card) => {
      card.addEventListener('click', (event) => {
        if (event.target.closest('[data-node-open]')) return;
        const routeId = card.dataset.route;
        state.route = state.route === routeId ? 'ALL' : routeId;
        renderAll();
      });
    });
    [...els.routeGrid.querySelectorAll('[data-node-open]')].forEach((btn) => {
      btn.addEventListener('click', (event) => {
        event.stopPropagation();
        openDrawer(btn.dataset.nodeOpen);
      });
    });
  }

  function renderControls() {
    els.metricToggle.innerHTML = [
      ['supply_2026_kg', t('metric2026')],
      ['supply_2030_kg', t('metric2030')]
    ].map(([metric, label]) => `<button class="toggle-button ${state.metric === metric ? 'active' : ''}" data-metric="${metric}">${label}</button>`).join('');
    [...els.metricToggle.querySelectorAll('.toggle-button')].forEach((btn) => {
      btn.addEventListener('click', () => {
        state.metric = btn.dataset.metric;
        renderAll();
      });
    });

    els.regionToggle.innerHTML = ['ALL', 'US', 'Europe', 'China'].map((region) => `<button class="toggle-button ${state.region === region ? 'active' : ''}" data-region="${region}">${regionLabel(region)}</button>`).join('');
    [...els.regionToggle.querySelectorAll('.toggle-button')].forEach((btn) => {
      btn.addEventListener('click', () => {
        state.region = btn.dataset.region;
        renderAll();
      });
    });

    els.chartLegend.innerHTML = Object.keys(state.data.meta_v3.routeDefinitions)
      .sort((a, b) => routeCopy(a).order - routeCopy(b).order)
      .map((routeId) => {
        const copy = routeCopy(routeId);
        return `<span class="legend-chip"><span class="mini-dot" style="background:${copy.color}"></span>${copy.name}</span>`;
      }).join('');
  }

  function renderBubbleChart() {
    const svg = els.bubbleChart;
    const data = chartNodes().slice().sort((a, b) => Number(b[state.metric] || 0) - Number(a[state.metric] || 0));
    const width = 1120;
    const height = 560;
    const margin = { top: 28, right: 34, bottom: 74, left: 90 };
    const innerW = width - margin.left - margin.right;
    const innerH = height - margin.top - margin.bottom;
    const ticksTons = [0.1, 0.3, 1, 3, 10, 30, 100, 200];
    const xMin = Math.log10(100);
    const xMax = Math.log10(200000);
    const metricMax = Math.max(...data.map((d) => Number(d[state.metric] || 0)), 1);

    const xScale = (kg) => {
      const x = Math.log10(Math.max(kg, 100));
      const ratio = (x - xMin) / (xMax - xMin);
      return margin.left + ratio * innerW;
    };
    const yScale = (score) => margin.top + innerH - (score / 10) * innerH;
    const radiusScale = (value) => 7 + Math.sqrt(Math.max(value, 0) / metricMax) * 40;

    const selected = state.selectedId ? data.find((d) => d.id === state.selectedId) : null;
    const labels = new Set(data.slice(0, 8).map((d) => d.id));
    if (selected) labels.add(selected.id);

    const parts = [];
    parts.push(`<rect x="0" y="0" width="${width}" height="${height}" fill="transparent"></rect>`);

    for (let y = 0; y <= 10; y += 2) {
      const py = yScale(y);
      parts.push(`<line class="svg-grid" x1="${margin.left}" y1="${py}" x2="${width - margin.right}" y2="${py}"></line>`);
      parts.push(`<text class="svg-axis" x="${margin.left - 16}" y="${py + 5}" text-anchor="end">${y}</text>`);
    }
    for (const tick of ticksTons) {
      const xkg = tick * 1000;
      const px = xScale(xkg);
      parts.push(`<line class="svg-grid" x1="${px}" y1="${margin.top}" x2="${px}" y2="${height - margin.bottom}"></line>`);
      const label = tick < 1 ? `${Math.round(tick * 1000)} ${t('axisTickKg')}` : `${tick}${t('axisTickT')}`;
      parts.push(`<text class="svg-axis" x="${px}" y="${height - margin.bottom + 28}" text-anchor="middle">${label}</text>`);
    }
    parts.push(`<line class="svg-axis-line" x1="${margin.left}" y1="${height - margin.bottom}" x2="${width - margin.right}" y2="${height - margin.bottom}"></line>`);
    parts.push(`<line class="svg-axis-line" x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${height - margin.bottom}"></line>`);
    parts.push(`<text class="svg-title" x="${margin.left + innerW / 2}" y="${height - 18}" text-anchor="middle">${t('chartXTitle')}</text>`);
    parts.push(`<text class="svg-title" x="24" y="${margin.top + innerH / 2}" transform="rotate(-90 24 ${margin.top + innerH / 2})" text-anchor="middle">${t('chartYTitle')}</text>`);
    parts.push(`<text class="svg-note" x="${width - margin.right}" y="18" text-anchor="end">${t('topLabelNote')}</text>`);

    data.forEach((node) => {
      const cx = xScale(node.single_launch_kg);
      const cy = yScale(Number(node.cost_score || 0));
      const r = radiusScale(Number(node[state.metric] || 0));
      const color = routeCopy(node.route_class).color;
      const selectedClass = state.selectedId === node.id ? 'selected' : '';
      parts.push(`
        <g class="bubble-node ${selectedClass}" data-node="${node.id}" tabindex="0" role="button" aria-label="${isZh ? node.vehicleZh : node.vehicle}">
          <circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" fill-opacity="0.18" stroke="${color}" stroke-width="${state.selectedId === node.id ? 4 : 2.4}"></circle>
          <circle cx="${cx}" cy="${cy}" r="${Math.max(2.4, r * 0.16)}" fill="${color}" fill-opacity="0.85"></circle>
        </g>
      `);
    });

    const labelBoxes = [];
    data.filter((node) => labels.has(node.id)).forEach((node) => {
      const cx = xScale(node.single_launch_kg);
      const cy = yScale(Number(node.cost_score || 0));
      const r = radiusScale(Number(node[state.metric] || 0));
      const label = isZh ? node.vehicleZh : node.vehicle;
      let lx = cx + r + 8;
      let ly = cy - r - 6;
      const widthApprox = Math.max(50, label.length * 8.6);
      const heightApprox = 16;
      if (lx + widthApprox > width - margin.right) lx = cx - r - widthApprox - 8;
      if (ly < margin.top + 14) ly = cy + r + 16;
      let tries = 0;
      while (tries < 8 && labelBoxes.some((b) => !(lx + widthApprox < b.x || b.x + b.w < lx || ly + heightApprox < b.y || b.y + b.h < ly))) {
        ly += 18;
        if (ly > height - margin.bottom - 10) {
          ly = cy - r - 6 - tries * 18;
        }
        tries += 1;
      }
      labelBoxes.push({ x: lx, y: ly - 12, w: widthApprox, h: heightApprox });
      parts.push(`<text class="svg-bubble-label" x="${lx}" y="${ly}">${label}</text>`);
    });

    svg.innerHTML = parts.join('');

    [...svg.querySelectorAll('.bubble-node')].forEach((nodeEl) => {
      const nodeId = nodeEl.dataset.node;
      nodeEl.addEventListener('mouseenter', (e) => showTooltip(e, nodeId));
      nodeEl.addEventListener('mousemove', (e) => moveTooltip(e));
      nodeEl.addEventListener('mouseleave', hideTooltip);
      nodeEl.addEventListener('click', () => openDrawer(nodeId));
      nodeEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openDrawer(nodeId);
        }
      });
    });
  }

  function showTooltip(event, nodeId) {
    const node = state.data.nodes.find((n) => n.id === nodeId);
    if (!node) return;
    els.tooltip.hidden = false;
    const title = isZh ? `${node.companyZh} · ${node.vehicleZh}` : `${node.company} · ${node.vehicle}`;
    const subtitle = `${routeLabel(node)} · ${regionShort(node.region)}`;
    const payloadLabel = `${t('drawerLabels').payload}: ${massShort(node.single_launch_kg)}`;
    const supplyLabel = `${state.metric === 'supply_2026_kg' ? t('metric2026') : t('metric2030')}: ${massShort(node[state.metric])}`;
    const why = isZh ? node.route_why_zh : node.route_why_en;
    els.tooltip.innerHTML = `<strong>${title}</strong><div class="tooltip-meta">${subtitle}</div><div style="margin-top:6px">${payloadLabel} · ${supplyLabel}</div><div style="margin-top:6px">${why}</div>`;
    moveTooltip(event);
  }

  function moveTooltip(event) {
    const tip = els.tooltip;
    const host = els.bubbleChart.parentElement.getBoundingClientRect();
    const x = Math.min(host.width - 340, Math.max(12, event.clientX - host.left + 14));
    const y = Math.max(12, event.clientY - host.top + 14);
    tip.style.left = `${x}px`;
    tip.style.top = `${y}px`;
  }

  function hideTooltip() {
    els.tooltip.hidden = true;
  }

  function groupNodesByRoute(nodes) {
    const groups = {};
    nodes.forEach((node) => {
      if (!groups[node.route_class]) groups[node.route_class] = [];
      groups[node.route_class].push(node);
    });
    return Object.entries(groups)
      .sort((a, b) => routeCopy(a[0]).order - routeCopy(b[0]).order)
      .map(([routeId, routeNodes]) => [routeId, routeNodes.sort((x, y) => Number(y[state.metric] || 0) - Number(x[state.metric] || 0))]);
  }

  function renderCompanyCards() {
    const nodes = filteredNodes();
    if (!nodes.length) {
      els.companyGroups.innerHTML = `<div class="empty-state">${t('emptyState')}</div>`;
      return;
    }
    const groups = groupNodesByRoute(nodes);
    els.companyGroups.innerHTML = groups.map(([routeId, routeNodes]) => {
      const copy = routeCopy(routeId);
      const groupMeta = `${routeNodes.length} ${t('nodesUnit')} · ${(state.metric === 'supply_2026_kg' ? t('metric2026') : t('metric2030'))} ${massShort(routeNodes.reduce((sum, n) => sum + Number(n[state.metric] || 0), 0))}`;
      return `
        <section class="company-group">
          <h3><span class="mini-dot" style="display:inline-block;background:${copy.color};margin-right:8px"></span>${copy.name}</h3>
          <div class="group-meta">${groupMeta}</div>
          <div class="company-grid">
            ${routeNodes.map(renderCompanyCard).join('')}
          </div>
        </section>`;
    }).join('');
    [...els.companyGroups.querySelectorAll('.company-card')].forEach((card) => {
      card.addEventListener('click', () => openDrawer(card.dataset.node));
    });
  }

  function renderCompanyCard(node) {
    const title = isZh ? `${node.companyZh} · ${node.vehicleZh}` : `${node.company} · ${node.vehicle}`;
    const summary = isZh ? node.route_why_zh : node.route_why_en;
    const constraint = isZh ? node.constraint_zh : node.constraint_en;
    const firstFlight = node.firstFlightYear ? `${node.firstFlightYear} · ${node.firstFlightStatus === 'actual' ? t('actual') : t('planned')}` : t('unknown');
    return `
      <article class="company-card" data-node="${node.id}">
        <h4>${title}</h4>
        <div class="meta-line">
          <span class="badge">${routeLabel(node)}</span>
          <span class="badge">${regionShort(node.region)}</span>
          <span class="badge">${isZh ? node.maturity_class.replace('Development / pre-scale','研发 / 未形成规模').replace('Mature service','成熟运营').replace('Early operations','初步运营').replace('Operational / scaling','运营扩张').replace('Operational / ramping','运营爬坡').replace('Operational','运营中').replace('Distressed / paused','停滞 / 暂停') : node.maturity_class}</span>
        </div>
        <p>${summary}</p>
        <p><strong>${isZh ? '关键制约：' : 'Constraint:'}</strong>${constraint}</p>
        <div class="card-stats">
          <div class="stat-box"><span class="label">${t('drawerLabels').payload}</span><span class="value">${massShort(node.single_launch_kg)}</span></div>
          <div class="stat-box"><span class="label">${state.metric === 'supply_2026_kg' ? t('metric2026') : t('metric2030')}</span><span class="value">${massShort(node[state.metric])}</span></div>
          <div class="stat-box"><span class="label">${t('drawerLabels').firstFlight}</span><span class="value">${firstFlight}</span></div>
        </div>
      </article>`;
  }

  function openDrawer(nodeId) {
    const node = state.data.nodes.find((n) => n.id === nodeId);
    if (!node) return;
    state.selectedId = nodeId;
    const route = routeCopy(node.route_class);
    const title = isZh ? `${node.companyZh} · ${node.vehicleZh}` : `${node.company} · ${node.vehicle}`;
    const subtitle = isZh ? node.currentRealityZh || node.current_reality : node.current_reality;
    els.drawerEyebrow.textContent = route.name;
    els.drawerTitle.textContent = title;
    els.drawerSubtitle.textContent = subtitle || '';

    const labels = t('drawerLabels');
    const certified = node.certified == null ? t('unknown') : (node.certified ? t('yes') : t('no'));
    const constellation = node.constellationCapable == null ? t('unknown') : (node.constellationCapable ? t('yes') : t('no'));
    const sourceLinks = (node.sources || []).map((s) => `<a class="source-link" href="${s.url}" target="_blank" rel="noreferrer noopener">${s.label}</a>`).join('');
    const companyCapital = state.data.companies.find((c) => c.company === node.company) || {};
    const launchSites = (node.launchSites || []).join(isZh ? '、' : ', ');
    const plannedRows = (node.plannedMissions || []).length ? (node.plannedMissions || []).map((m) => `
      <tr><td>${m.date || '—'}</td><td>${isZh ? (m.mission || m.missionEn || '—') : (m.missionEn || m.mission || '—')}</td><td>${m.orbit || '—'}</td></tr>`).join('') : `<tr><td colspan="3">${t('unknown')}</td></tr>`;
    const engineRows = (node.engines || []).length ? (node.engines || []).map((e) => `
      <tr><td>${e.name || '—'}</td><td>${e.stage || '—'}</td><td>${e.count ?? '—'}</td><td>${e.thrust_kN ?? '—'} kN</td><td>${e.isp_s ?? '—'} s</td></tr>`).join('') : `<tr><td colspan="5">${t('unknown')}</td></tr>`;
    const historyEntries = Object.entries(node.launchHistory || {}).filter(([k]) => !String(k).includes('e'));
    const maxHistory = Math.max(...historyEntries.map(([, v]) => Number(v || 0)), 1);
    const historyBars = historyEntries.length ? `<div class="history-bars">${historyEntries.map(([year, value]) => {
      const height = 24 + (Number(value || 0) / maxHistory) * 72;
      return `<div style="display:flex;flex-direction:column;align-items:center;flex:1;min-width:26px"><div class="history-bar" style="height:${height}px"><span>${value}</span></div><div class="history-year">${year}</div></div>`;
    }).join('')}</div>` : `<div class="empty-state">${t('unknown')}</div>`;

    const whyTitle = isZh ? node.costThesisZh || node.cost_thesis : node.cost_thesis;
    const whyRoute = isZh ? node.route_why_zh : node.route_why_en;
    const constraint = isZh ? node.constraint_zh : node.constraint_en;
    const watch = isZh ? node.watch_zh : node.watch_en;
    const techRoute = isZh ? (node.techRoute || node.route_summary) : (node.techRouteEn || node.route_summary);

    els.drawerBody.innerHTML = `
      <section class="drawer-section">
        <h3>${t('drawerSections').thesis}</h3>
        <div class="info-card"><span class="info-value">${whyTitle || whyRoute}</span></div>
      </section>

      <section class="drawer-section">
        <h3>${t('drawerSections').coreData}</h3>
        <div class="drawer-grid-3">
          <div class="info-card"><span class="info-label">${labels.payload}</span><span class="info-value">${massShort(node.single_launch_kg)}</span></div>
          <div class="info-card"><span class="info-label">${labels.gto}</span><span class="info-value">${massShort(node.gtoPayloadKg)}</span></div>
          <div class="info-card"><span class="info-label">${labels.flights2026}</span><span class="info-value">${node.flights_2026_base ?? t('unknown')}</span></div>
          <div class="info-card"><span class="info-label">${labels.firstFlight}</span><span class="info-value">${node.firstFlightYear ? `${node.firstFlightYear} · ${node.firstFlightStatus === 'actual' ? t('actual') : t('planned')}` : t('unknown')}</span></div>
          <div class="info-card"><span class="info-label">${labels.totalFlights}</span><span class="info-value">${node.totalFlightsDisplay || node.totalFlights || t('unknown')}</span></div>
          <div class="info-card"><span class="info-label">${state.metric === 'supply_2026_kg' ? t('metric2026') : t('metric2030')}</span><span class="info-value">${massShort(node[state.metric])}</span></div>
        </div>
      </section>

      <section class="drawer-section">
        <h3>${t('drawerSections').why}</h3>
        <div class="drawer-grid-3">
          <div class="info-card"><span class="info-label">${labels.route}</span><span class="info-value">${route.name}</span></div>
          <div class="info-card"><span class="info-label">${labels.target}</span><span class="info-value">${isZh ? node.target_goal_zh : node.route_why_en}</span></div>
          <div class="info-card"><span class="info-label">${labels.region}</span><span class="info-value">${regionShort(node.region)}</span></div>
        </div>
        <div class="info-list">
          <div class="info-card"><span class="info-label">${isZh ? '为什么选这条路线' : 'Why this route'}</span><span class="info-value">${whyRoute}</span></div>
          <div class="info-card"><span class="info-label">${labels.constraint}</span><span class="info-value">${constraint}</span></div>
          <div class="info-card"><span class="info-label">${labels.watch}</span><span class="info-value">${watch}</span></div>
        </div>
      </section>

      <section class="drawer-section">
        <h3>${t('drawerSections').tech}</h3>
        <div class="drawer-grid-2">
          <div class="info-card"><span class="info-label">${labels.propellant}</span><span class="info-value">${isZh ? translatePropellant(node.propellant_class) : node.propellant_class}</span></div>
          <div class="info-card"><span class="info-label">${labels.reuse}</span><span class="info-value">${isZh ? translateReuse(node.reusability_class) : node.reusability_class}</span></div>
          <div class="info-card"><span class="info-label">${labels.recovery}</span><span class="info-value">${node.recoveryMethod || t('unknown')}</span></div>
          <div class="info-card"><span class="info-label">${labels.architecture}</span><span class="info-value">${isZh ? translateArchitecture(node.architecture_class) : node.architecture_class}</span></div>
          <div class="info-card"><span class="info-label">${labels.launchSite}</span><span class="info-value">${launchSites || t('unknown')}</span></div>
          <div class="info-card"><span class="info-label">${labels.certified} / ${labels.constellation}</span><span class="info-value">${certified} / ${constellation}</span></div>
        </div>
        <div class="info-card"><span class="info-label">${isZh ? '技术路线解释' : 'Technical route'}</span><span class="info-value">${techRoute || t('unknown')}</span></div>
        <div class="table-wrap">
          <table class="table">
            <thead><tr><th>${labels.engines}</th><th>${isZh ? '级段' : 'Stage'}</th><th>${isZh ? '数量' : 'Count'}</th><th>${isZh ? '推力' : 'Thrust'}</th><th>ISP</th></tr></thead>
            <tbody>${engineRows}</tbody>
          </table>
        </div>
      </section>

      <section class="drawer-section">
        <h3>${t('drawerSections').history}</h3>
        <div class="drawer-grid-2">
          <div class="info-card"><span class="info-label">${labels.firstFlight}</span><span class="info-value">${node.firstFlightYear ? `${node.firstFlightYear} · ${node.firstFlightStatus === 'actual' ? t('actual') : t('planned')}` : t('unknown')}</span></div>
          <div class="info-card"><span class="info-label">${labels.totalFlights}</span><span class="info-value">${node.totalFlightsDisplay || node.totalFlights || t('unknown')}</span></div>
        </div>
        <div class="info-card"><span class="info-label">${labels.historyChart}</span>${historyBars}</div>
        <div class="table-wrap">
          <table class="table">
            <thead><tr><th>${isZh ? '时间' : 'Date'}</th><th>${isZh ? '任务' : 'Mission'}</th><th>${isZh ? '轨道' : 'Orbit'}</th></tr></thead>
            <tbody>${plannedRows}</tbody>
          </table>
        </div>
      </section>

      <section class="drawer-section">
        <h3>${t('drawerSections').capital}</h3>
        <div class="info-list">
          <div class="info-card"><span class="info-label">${labels.valuation}</span><span class="info-value">${isZh ? (companyCapital.valuationZh || node.valuation || t('unknown')) : (companyCapital.valuation || node.valuation || t('unknown'))}</span></div>
          <div class="info-card"><span class="info-label">${labels.funding}</span><span class="info-value">${isZh ? (companyCapital.fundingZh || node.funding || t('unknown')) : (companyCapital.funding || node.funding || t('unknown'))}</span></div>
          <div class="info-card"><span class="info-label">${labels.investors}</span><span class="info-value">${isZh ? (companyCapital.investorsZh || node.investors || t('unknown')) : (companyCapital.investors || node.investors || t('unknown'))}</span></div>
        </div>
      </section>

      <section class="drawer-section">
        <h3>${t('drawerSections').sources}</h3>
        <div class="source-links">${sourceLinks || `<div class="empty-state">${t('unknown')}</div>`}</div>
      </section>
    `;

    els.drawerBackdrop.hidden = false;
    els.detailDrawer.classList.add('open');
    els.detailDrawer.setAttribute('aria-hidden', 'false');
    renderBubbleChart();
  }

  function closeDrawer() {
    state.selectedId = null;
    els.drawerBackdrop.hidden = true;
    els.detailDrawer.classList.remove('open');
    els.detailDrawer.setAttribute('aria-hidden', 'true');
    renderBubbleChart();
  }

  function renderDataPort() {
    const ports = [
      state.data.meta_v3.data_port,
      state.data.meta_v3.manifest_port,
      state.data.meta_v3.schema_port
    ];
    const cards = t('portCards');
    els.dataPortGrid.innerHTML = cards.map((card, idx) => `
      <div class="port-card">
        <strong>${card[0]}</strong>
        <p>${card[1]}</p>
        <code>${ports[idx]}</code>
      </div>
    `).join('');
  }

  function translatePropellant(value) {
    const map = {
      'Kerosene/LOX': '煤油 / 液氧',
      'Methane/LOX': '甲烷 / 液氧',
      'Mixed cryogenic': '混合低温',
      'Solid': '固体',
      'Propane/LOX': '丙烷 / 液氧',
      'Mixed family': '多型号混合'
    };
    return map[value] || value;
  }

  function translateReuse(value) {
    const map = {
      'Expendable': '一次性',
      'Partial reusable': '一级 / 部分复用',
      'Full reusable': '全复用'
    };
    return map[value] || value;
  }

  function translateArchitecture(value) {
    const map = {
      'Two-stage medium/heavy launcher': '两级中大型火箭',
      'Three-core heavy launcher': '三芯级重型火箭',
      'Super heavy fully reusable stack': '超重型全复用堆栈',
      'Reusable first stage + hydrogen upper stage': '一级可回收 + 氢上面级',
      'Methane booster + hydrogen upper stage; solid-boosted variants': '甲烷一级 + 氢上面级 / 固体助推变体',
      'Small dedicated launcher': '专属小火箭',
      'Reusable medium launcher': '可复用中型火箭',
      'Small launcher': '小型火箭',
      'Reusable medium-heavy launcher': '可复用中重型火箭',
      'Fully reusable two-stage launcher': '两级全复用火箭',
      'Hydrogen core + solid boosters': '氢芯级 + 固体助推',
      'Small-medium solid launcher': '小中型固体火箭',
      'Small launcher with recovered first stage': '带一级回收的小型火箭',
      'Mini launcher with reusable and expendable variants': '带可回收 / 一次性变体的迷你火箭',
      'Three-stage small launcher': '三级小火箭',
      'Micro launcher': '微型火箭',
      'National launch fleet': '国家发射舰队',
      'Reusable first-stage state launcher': '国家体系一级可回收火箭',
      'Sea/land-launch commercial solid launcher': '海陆通用商业固体火箭',
      'Medium launcher': '中型火箭',
      'Micro-launch family': '微小型火箭家族',
      'Small/medium solid launcher': '小中型固体火箭',
      'Reusable heavy launcher': '可复用重型火箭',
      'Medium solid launcher': '中型固体火箭',
      'Reusable medium-small launcher': '可复用中小型火箭'
    };
    return map[value] || value;
  }

  function renderAll() {
    renderGoalPills();
    renderRoutes();
    renderControls();
    renderBubbleChart();
    renderCompanyCards();
    renderDataPort();
  }

  function bindEvents() {
    els.clearRouteFilter.addEventListener('click', () => {
      state.route = 'ALL';
      renderAll();
    });
    els.companySearch.addEventListener('input', (e) => {
      state.search = e.target.value;
      renderAll();
    });
    els.drawerBackdrop.addEventListener('click', closeDrawer);
    els.closeDrawer.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  loadData().then((data) => {
    state.data = data;
    setText();
    bindEvents();
    renderAll();
  });
})();
