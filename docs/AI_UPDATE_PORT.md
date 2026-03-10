# AI UPDATE PORT

## Primary target for automated updates

The website reads this file first:

`data/rocket_market_map_2026_2030_v3.json`

If an AI automation only updates one file, update this one.

## Supporting machine-readable files

- `data/manifest.json`
- `data/update_contract.json`
- `updates/sample_patch.json`
- `tools/apply_update.py`

## What an AI should update

### Vehicle / node-level changes

Update the matching node by `id` when any of these change:

- payload
- GTO payload
- 2026 or 2030 supply estimate
- maturity state
- first flight status
- total flight count
- planned missions
- launch history
- engine data
- route explanation fields

### Company-level changes

Update the matching company by `company` when any of these change:

- valuation
- funding
- investors
- company-level supply totals

## Critical rule

Do not create a second competing primary data file unless you also update:

- `data/manifest.json`
- page bootstrap path in `window.__DATA_PATH__`

## Stable keys

- node primary key: `id`
- company primary key: `company`

## Minimal automation loop

1. Collect new source data.
2. Match affected node ids and company names.
3. Update `data/rocket_market_map_2026_2030_v3.json`.
4. Keep derived explanatory fields in sync if the strategic story changes.
5. Redeploy the static site.
