# Rocket Market Map — user-first refresh

## What changed

### 1) Reframed the page around user value
- Rewrote hero copy, section names, labels and subtitles to describe what the product helps the user do.
- Removed interface wording that sounded like an internal implementation report.
- Added a dedicated **Data updates** entry in the top navigation.

### 2) Unified the market view into one “best estimate”
- The UI no longer presents separate “Excel vs. strategic” language as the main framing.
- Main map, company cards, comparison chart and launch-site view now default to a **best estimate** value:
  - prefer richer model values when available
  - fall back to baseline estimates when model values are missing

### 3) Reduced jargon and improved comprehension
- Renamed sections such as “Excel market snapshot”, “main chart”, and “benchmarking” into user-facing labels.
- Reworked explanatory text so an uninformed user can understand what they are looking at.

### 4) Added hover preview on key visuals
- Main market map bubbles now show a hover tooltip with company / vehicle, route, payload, supply, launches and price.
- Launch-site markers now show hover previews as well.

### 5) Reworked the launch-site map
- Removed the right-side list.
- Added a world map background directly inside the SVG rendering path so the map remains self-contained.
- Kept click-through detail behavior consistent with the main market map.

### 6) Added editable data flow
- Company, vehicle and launch-site detail drawers now support **Edit data** mode.
- Users can:
  - edit common fields directly in the drawer
  - save locally in the browser
  - export a patch JSON
  - export the full current dataset
  - import a patch or full dataset JSON
  - reset to default data

### 7) Exposed a public front-end update API
The page now exposes:

```js
window.RocketMarketMap.getData()
window.RocketMarketMap.setData(nextData)
window.RocketMarketMap.applyPatch(patch)
window.RocketMarketMap.saveLocally()
window.RocketMarketMap.resetLocalData()
```

Example patch:

```js
window.RocketMarketMap.applyPatch({
  type: 'vehicle',
  id: 'spacex_starship',
  changes: {
    model_launches_2030: 48,
    model_supply_2030_kg: 960000
  }
})
```

## Upload save behavior
There is no backend inside this static package.

The **Upload save** button works like this:
- if `window.RocketMarketMapAPI.saveCurrentData` exists, it will call that function and pass the full current dataset
- otherwise it falls back to local browser save and shows a status message

Expected hook:

```js
window.RocketMarketMapAPI = {
  async saveCurrentData(data) {
    // send data to your server here
  }
}
```

## Files touched
- `index.html`
- `en.html`
- `assets/app.js`
- `assets/styles.css`
- `assets/world-map-bg.png`
