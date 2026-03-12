# Rocket Market Map v5

This package is a user-first, editable, full-stack version of the rocket market map.

## Included

- user-facing interactive front-end
- hover preview on charts and maps
- zoomable / pannable launch-site map
- interactive supply overview chart
- editable company / vehicle / launch-site drawers
- JSON import / export
- FastAPI backend for persistence and patch updates

## Key files

- `index.html` — Chinese entry page
- `en.html` — English entry page
- `assets/app.js` — front-end logic
- `assets/styles.css` — front-end styles
- `data/rocket_market_map_2026_2030_v3.json` — bundled default dataset
- `backend/app.py` — back-end API + static server
- `backend/storage/` — current data + backups

## Run locally

```bash
uvicorn backend.app:app --host 0.0.0.0 --port 8000
```

Open:

```text
http://127.0.0.1:8000/
```

## API

- `GET /api/health`
- `GET /api/data`
- `POST /api/data`
- `POST /api/patch`
- `POST /api/reset`
- `GET /api/history`

## Deploy

### Static-only
Upload the extracted contents to a static host. The site will still work with browser-local persistence and JSON import / export.

### Full-stack
Deploy the whole folder and run the FastAPI app so the front-end can save directly to the server.
