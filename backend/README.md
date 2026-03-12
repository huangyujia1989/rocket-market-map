# Rocket Market Map backend

This backend makes the front-end's **上传保存 / Save to server** flow real.

## What it does

- Serves the static site and the API from the same process
- Persists the latest dataset to `backend/storage/current/rocket_market_map_current.json`
- Keeps timestamped backups in `backend/storage/history/`
- Supports both full dataset replacement and incremental patch updates

## API

- `GET /api/health`
- `GET /api/data`
- `POST /api/data`
- `POST /api/patch`
- `POST /api/reset`
- `GET /api/history`

## Run locally

From the project root:

```bash
uvicorn backend.app:app --host 0.0.0.0 --port 8000
```

Then open:

```text
http://127.0.0.1:8000/
```

## Notes

- The front-end tries `/api/data` first. If the backend is unavailable, it falls back to bundled data and local browser storage.
- CORS is open by default for easier integration. You can restrict it with the `ROCKET_MAP_ALLOW_ORIGINS` environment variable.
