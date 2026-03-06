# AI Update Port

## Canonical source of truth

The website reads **one canonical dataset file**:

- `data/rocket_market_map_2026_2030_v2.json`

If an automation agent updates that file and the site is redeployed, the dashboard will reflect the change.

## Machine-readable entry points

- `data/manifest.json`  
  Version, canonical file path, merge mode, and stable keys.

- `data/update_contract.json`  
  Field contract and QA rules for agents.

- `updates/sample_patch.json`  
  Example patch payload.

- `tools/apply_update.py`  
  Merge helper for patch-based updates.

## Stable keys

### Nodes
Use `id` as the stable primary key.

### Companies
Use composite key: `region + company`.

### Launch sites
Use the site dictionary key, for example `CCSFS LC-36`.

## Recommended automation flow

1. Read `data/manifest.json`
2. Read `data/update_contract.json`
3. Generate a patch file matching the contract
4. Run:

```bash
python tools/apply_update.py   --dataset data/rocket_market_map_2026_2030_v2.json   --patch updates/patch.json   --out data/rocket_market_map_2026_2030_v2.json   --backup-dir updates/archive
```

5. Commit the updated dataset file and deploy

## Important merge rule

Inside each node/company row, **arrays are replaced wholesale when present in a patch**.  
That means if an automation agent sends a new `plannedMissions` array, it should send the full desired array, not only the delta.

## Practical note

GitHub Pages itself is static and does not provide a write API.  
So the “update port” here is a **repository file contract** designed for AI agents, GitHub Actions, or any repo-writing automation.
