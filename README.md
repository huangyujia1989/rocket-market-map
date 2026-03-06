# Rocket Market Map v2

This package now supports both:
- local preview by opening `index.html` directly
- normal web deployment on GitHub Pages

## Data update port
Primary machine-readable endpoint after deployment:
- `data/rocket_market_map_2026_2030_v2.json`
- `data/manifest.json`
- `data/update_contract.json`

## Local preview
Because browsers often block `fetch()` under `file://`, this package embeds a bootstrap copy of the data inside `index.html` and `en.html`. Deployed web pages still read the external JSON first.
