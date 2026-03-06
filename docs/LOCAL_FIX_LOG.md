# Local Preview Fix Log

## Root cause
The v2 package loaded data via `fetch('data/rocket_market_map_2026_2030_v2.json')`.
When `index.html` was opened directly from disk with a `file://` URL, many browsers blocked that request, so the page shell loaded but no data rendered.

## Fix applied
1. Embedded a bootstrap copy of the JSON inside both `index.html` and `en.html`.
2. Updated `assets/app.js` to use embedded data when opened via `file://`.
3. Kept the external JSON fetch path for deployed environments, so the AI update port remains stable.

## Result
- Direct open from Finder/Explorer now works.
- GitHub Pages deployment still reads the external JSON by default.
- The machine-readable update endpoint remains `data/rocket_market_map_2026_2030_v2.json`.
