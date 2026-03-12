# Rocket Market Map — v6 iteration

## What was fixed in this round

This iteration focused on the parts that still felt broken in the deployed site, especially the user-facing interaction layer.

### 1) Hover previews were fixed at the root cause
The main issue was not only event binding. The shared tooltip element was mounted inside the first chart container, so even when events fired, the tooltip could be positioned relative to the wrong box and appear broken or invisible.

This round:
- moved the shared tooltip to the global page host
- kept pointer tracking, but also added direct hover bindings to interactive SVG elements
- added hover support for bubble labels, site labels, and benchmark / overview row labels
- added keyboard focus previews for the main interactive targets

### 2) Launch-site map zoom is clearer and easier to use
The map already had wheel + drag logic, but it was not obvious enough and was still easy to miss.

This round:
- enlarged the site map canvas
- added a zoom slider
- kept wheel zoom, drag-to-pan, and +/- controls
- added double-click zoom
- improved cursor and drag feedback

### 3) Quick compare controls are more explicit
The controls now show visible field labels instead of unlabeled dropdowns only.

Users can choose:
- comparison level
- metric
- year
- display range: Top 5 / Top 10 / Top 20 / All
- sort order

### 4) User-facing wording stayed aligned
- Chinese user-facing terminology remains **载具**
- capital-style metrics remain unified in **USD bn**

## Validation done

### Static validation
- checked the patched HTML for duplicate IDs
- verified the tooltip is now mounted at the page host instead of inside the map chart container
- verified the new controls exist in the DOM
- ran `node --check assets/app.js`

### Backend validation
Validated with FastAPI `TestClient`:
- `GET /api/health`
- `GET /api/data`
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
