# BUILD LOG — Rocket Market Map v3

Date: 2026-03-06

## Why this rebuild happened

The previous iterations suffered from three problems:

1. Too much surface area and too many charts.
2. The visual hierarchy rewarded “showing data” more than “building understanding.”
3. Several charts did not help a senior reader answer the real question: why do rocket companies choose different architectures?

The rebuild therefore started from a simpler framing:

- First explain the goals.
- Then explain the constraints.
- Then explain why different routes emerge.
- Only then show the market map and let readers drill into company detail.

## Product decisions

### Removed

- heatmap
- first-flight timeline as a primary page section
- launch-site map as a primary page section
- dense multi-filter controls
- secondary charts that did not directly explain design choice

### Kept

- one main bubble chart: single-launch payload vs. long-term cost position

### Added

- first-principles explainer cards
- interactive goal selector
- six route archetype cards
- simplified company strategy cards
- richer detail drawer with engines, launch history, missions and capital information
- explicit AI data update port

## Data model changes

Primary file moved to:

`data/rocket_market_map_2026_2030_v3.json`

Added derived fields per node:

- `route_class`
- `route_class_zh`
- `route_class_en`
- `route_color`
- `route_why_zh`
- `route_why_en`
- `constraint_zh`
- `constraint_en`
- `watch_zh`
- `watch_en`
- `target_goal_zh`
- display fields for payload and supply

These fields let the website explain *why* each company chose a route instead of merely listing specs.

## UX principles used in v3

1. One main chart, not many medium-value charts.
2. Text is short by default; detail appears on click.
3. Route color is more important than region color because the design question is “why this architecture,” not just “where is it from.”
4. Region still exists as a filter because geography matters for procurement, sovereignty and customer mix.
5. Fleet-level nodes are excluded from the single-launch bubble chart to avoid misleading comparisons.

## Technical notes

- The page supports both `file://` preview and hosted deployment.
- If hosted, it tries to load `data/rocket_market_map_2026_2030_v3.json`.
- If local, it falls back to `window.__INLINE_DATA__` embedded into each page.
- No external JS library is required.
- Bubble chart is pure SVG.

## Sanity checks performed

- JS syntax check via `node --check`
- data file presence check
- HTML pages generated with inline data fallback
- route archetype mapping applied to all nodes
- no chart dependence on fleet nodes with null payload
