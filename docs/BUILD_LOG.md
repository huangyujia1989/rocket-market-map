# Build log / change log — 2026-03-06 v2

## What changed in this version

1. Rebuilt the bilingual site shell around the latest 33-node dataset, instead of patching the broken earlier English page.
2. Cleaned the Chinese interface copy so the page is readable as a Chinese investor-facing product.
3. Removed explicit “MECE” wording from the interface, while keeping exclusive classification logic in the data model.
4. Added high-priority data fields:
   - `firstFlightYear`
   - `firstFlightStatus`
   - `totalFlights`
   - `totalFlightsDisplay`
   - `engines`
   - `plannedMissions`
5. Added medium-priority data fields:
   - `gtoPayloadKg`
   - `techRoute`
   - `techRouteEn`
   - `launchSites`
   - `recoveryMethod`
6. Added low-priority / strategic fields:
   - `constellationCapable`
   - `certified`
   - `launchHistory`
7. Added new visual modules:
   - first-flight timeline
   - launch cadence trend
   - engine comparison table
   - launch-site geographic view
8. Added a formal AI update port:
   - canonical dataset manifest
   - update contract
   - example patch
   - merge helper script

## Files added

- `assets/app.js`
- `assets/styles.css`
- `data/rocket_market_map_2026_2030_v2.json`
- `data/manifest.json`
- `data/update_contract.json`
- `updates/sample_patch.json`
- `tools/apply_update.py`
- `docs/AI_UPDATE_PORT.md`

## Data notes

- The 33 launch nodes from the earlier market map were retained.
- New P0/P1/P2 fields are best-effort public-data snapshots as of March 2026.
- For some emerging programs, especially on engines, GTO payload, and launch cadence, values are approximate when public disclosure is limited.
- Company valuation/funding/investor strings remain strategic narrative summaries, not audited cap-table records.

## QA completed

- JSON dataset regenerated and validated for unique node IDs.
- JavaScript syntax checked with `node --check`.
- HTML / JS ID references cross-checked for missing targets.
- Launch-site references checked against the launch-site dictionary.

## Known limitations

- Some Chinese page capital strings are translated at summary level rather than line-by-line editorial translation.
- Trend history is strongest for the best-known active vehicles and weaker for the newest development programs.
- This remains a static site; “real-time updates” require updating the dataset file and redeploying.

## Deployment note

For GitHub Pages, publish the repository root with:
- `index.html`
- `en.html`
- `assets/`
- `data/`
- `docs/`
- `tools/`
- `updates/`
