# Rocket Market Map v3

This package is a simplified executive-facing rebuild.

## What changed

- Rebuilt the information architecture around first principles: goals, constraints, route archetypes, then company detail.
- Removed low-value charts that created visual noise but did not explain why rockets look different.
- Kept one primary chart: payload per launch vs. long-term cost position.
- Added concise strategy cards for each company / vehicle.
- Preserved a clear AI update port under `data/`.

## Files that matter most

- `index.html` — Chinese entry page
- `en.html` — English entry page
- `data/rocket_market_map_2026_2030_v3.json` — primary data file the site reads
- `data/manifest.json` — machine-readable manifest
- `data/update_contract.json` — machine-readable update contract
- `tools/apply_update.py` — example patch applier

## Deployment

Upload the extracted contents to the root of a GitHub Pages repository.

Expected structure:

```text
rocket-market-map/
├─ index.html
├─ en.html
├─ assets/
├─ data/
├─ docs/
├─ tools/
└─ updates/
```


## v3.1 update (2026-03-10)

- Added hide-zero toggle for selected-year supply on the main map
- Added country/company filters shared across map, launch-site map, benchmarking chart, and company cards
- Added launch-site intelligence layer (main sites, launch method, site-access model, site map)
- Added flexible benchmarking bar chart for vehicles / companies / countries
- Integrated Excel model metrics into vehicle and company layers (launches, payload, supply, price, revenue, $/kg, cumulative launches)
- Added Japan / India / Korea / Australia representative launch vehicles
