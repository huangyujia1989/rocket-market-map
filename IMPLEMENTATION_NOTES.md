# Rocket Market Map — full-stack refresh

## This round of work

This build turns the site from a static interactive page into a **front-end + back-end** package.

## What changed

### 1) Hover previews now exist across the key views
- Main market map bubbles support hover preview.
- Launch-site markers support hover preview.
- The new supply overview bar chart supports hover preview.
- The benchmark chart supports hover preview.

Implementation note: the hover logic was moved to SVG event delegation so it works more reliably on the actual circle / bar elements instead of depending on group-level hover behavior.

### 2) Launch-site map now supports zoom and pan
- Added zoom in / reset / zoom out controls.
- Added mouse-wheel zoom.
- Added drag-to-pan.
- Kept click-through detail behavior.

### 3) “Quick compare” is now user-controllable
Users can now choose:
- comparison level: vehicle / company / country
- metric
- year: 2026E–2030E
- range: Top 10 / Top 20 / All
- order: high → low or low → high

### 4) Chinese terminology was corrected
- `Vehicle` is now translated as **载具** in the user-facing Chinese UI.

### 5) “先看整体” now has an interactive supply bar chart
- Added a supply overview chart under the top summary cards.
- Supports grouping by company / country / route.
- Supports year switching.
- Hover shows details.
- Clicking a bar applies the corresponding filter and jumps the user into the market view.

### 6) Revenue / valuation / funding now use one unit
- Unified user-facing display for capital-style metrics to **USD bn**.
- Price per launch is still shown separately as price, since it is a different concept.

### 7) A real backend was added
New FastAPI backend in `backend/`:
- `GET /api/health`
- `GET /api/data`
- `POST /api/data`
- `POST /api/patch`
- `POST /api/reset`
- `GET /api/history`

Behavior:
- stores current live data in `backend/storage/current/rocket_market_map_current.json`
- keeps timestamped backups in `backend/storage/history/`
- serves the static site and API from the same process
- front-end automatically prefers `/api/data` when the backend is available
- **上传保存** now actually persists data server-side when the backend is running

## Public front-end API

```js
window.RocketMarketMap.getData()
window.RocketMarketMap.setData(nextData)
window.RocketMarketMap.applyPatch(patch)
window.RocketMarketMap.saveLocally()
window.RocketMarketMap.resetLocalData()
window.RocketMarketMap.saveToServer()
window.RocketMarketMap.serverApplyPatch(patch)
window.RocketMarketMap.resetServerData()
```

## Run locally

From the project root:

```bash
uvicorn backend.app:app --host 0.0.0.0 --port 8000
```

Then open:

```text
http://127.0.0.1:8000/
```
