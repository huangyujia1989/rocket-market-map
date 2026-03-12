from __future__ import annotations

import json
import os
from copy import deepcopy
from datetime import datetime, timezone
from pathlib import Path
from threading import Lock
from typing import Any

from fastapi import Body, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles

APP_DIR = Path(__file__).resolve().parent
PROJECT_DIR = APP_DIR.parent
STORAGE_DIR = APP_DIR / "storage"
DEFAULT_PATH = STORAGE_DIR / "default" / "rocket_market_map_default.json"
CURRENT_PATH = STORAGE_DIR / "current" / "rocket_market_map_current.json"
HISTORY_DIR = STORAGE_DIR / "history"
DATA_LOCK = Lock()


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


def load_json(path: Path) -> Any:
    with path.open("r", encoding="utf-8") as f:
        return json.load(f)


def save_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)


def bootstrap_storage() -> None:
    HISTORY_DIR.mkdir(parents=True, exist_ok=True)
    CURRENT_PATH.parent.mkdir(parents=True, exist_ok=True)
    if not DEFAULT_PATH.exists():
        raise RuntimeError(f"Default dataset is missing: {DEFAULT_PATH}")
    if not CURRENT_PATH.exists():
        save_json(CURRENT_PATH, load_json(DEFAULT_PATH))


def dataset_updated_at(dataset: dict[str, Any]) -> str | None:
    meta_v3 = dataset.get("meta_v3") if isinstance(dataset, dict) else None
    if isinstance(meta_v3, dict) and meta_v3.get("updated_at"):
        return str(meta_v3["updated_at"])
    meta = dataset.get("meta") if isinstance(dataset, dict) else None
    if isinstance(meta, dict) and meta.get("version"):
        return str(meta["version"])
    return None


def validate_dataset(payload: Any) -> dict[str, Any]:
    if not isinstance(payload, dict):
        raise HTTPException(status_code=400, detail="Dataset must be a JSON object.")
    for key, expected in (("nodes", list), ("companies", list), ("launchSites", dict)):
        value = payload.get(key)
        if not isinstance(value, expected):
            raise HTTPException(status_code=400, detail=f"Dataset field '{key}' must be a {expected.__name__}.")
    payload.setdefault("meta", {})
    payload.setdefault("meta_v3", {})
    if not isinstance(payload["meta"], dict):
        raise HTTPException(status_code=400, detail="Dataset field 'meta' must be an object.")
    if not isinstance(payload["meta_v3"], dict):
        raise HTTPException(status_code=400, detail="Dataset field 'meta_v3' must be an object.")
    return payload


def stamp_dataset(dataset: dict[str, Any], source: str) -> dict[str, Any]:
    dataset = deepcopy(dataset)
    now = utc_now_iso()
    dataset.setdefault("meta", {})
    dataset.setdefault("meta_v3", {})
    dataset["meta_v3"]["updated_at"] = now
    dataset["meta_v3"]["last_write_source"] = source
    dataset["meta"]["version"] = now
    return dataset


def backup_current_dataset(dataset: dict[str, Any], prefix: str = "snapshot") -> None:
    ts = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    backup_path = HISTORY_DIR / f"{prefix}_{ts}.json"
    save_json(backup_path, dataset)


def merge_record(target: dict[str, Any], changes: dict[str, Any]) -> None:
    for key, value in (changes or {}).items():
        if isinstance(value, list):
            target[key] = value
            continue
        if isinstance(value, dict) and isinstance(target.get(key), dict):
            target[key] = {**target[key], **value}
            continue
        target[key] = value



def apply_patch_in_memory(dataset: dict[str, Any], patch: Any) -> dict[str, Any]:
    current = deepcopy(validate_dataset(dataset))

    if not isinstance(patch, dict):
        raise HTTPException(status_code=400, detail="Patch payload must be a JSON object.")

    if {"nodes", "companies", "launchSites"}.issubset(patch.keys()):
        return validate_dataset(deepcopy(patch))

    if isinstance(patch.get("meta_v3"), dict):
        current.setdefault("meta_v3", {}).update(patch["meta_v3"])
    if isinstance(patch.get("meta"), dict):
        current.setdefault("meta", {}).update(patch["meta"])

    if isinstance(patch.get("nodes"), list):
        by_id = {str(node.get("id")): node for node in current["nodes"] if node.get("id") is not None}
        for row in patch["nodes"]:
            if not isinstance(row, dict) or row.get("id") is None:
                continue
            row_id = str(row["id"])
            if row_id in by_id:
                merge_record(by_id[row_id], row)
            else:
                current["nodes"].append(row)
                by_id[row_id] = row

    if isinstance(patch.get("companies"), list):
        by_company = {str(company.get("company")): company for company in current["companies"] if company.get("company") is not None}
        for row in patch["companies"]:
            if not isinstance(row, dict) or row.get("company") is None:
                continue
            company_id = str(row["company"])
            if company_id in by_company:
                merge_record(by_company[company_id], row)
            else:
                current["companies"].append(row)
                by_company[company_id] = row

    launch_sites = patch.get("launchSites")
    if isinstance(launch_sites, dict):
        for site_name, row in launch_sites.items():
            if not isinstance(row, dict):
                continue
            existing = current["launchSites"].get(site_name, {})
            current["launchSites"][site_name] = {**existing, **row}
    elif isinstance(launch_sites, list):
        for row in launch_sites:
            if not isinstance(row, dict):
                continue
            site_key = row.get("site") or row.get("name") or row.get("id")
            if not site_key:
                continue
            existing = current["launchSites"].get(site_key, {})
            current["launchSites"][site_key] = {**existing, **row}

    patch_type = patch.get("type")
    patch_id = patch.get("id")
    patch_changes = patch.get("changes")
    if patch_type and patch_id and isinstance(patch_changes, dict):
        if patch_type == "vehicle":
            target = next((node for node in current["nodes"] if str(node.get("id")) == str(patch_id)), None)
            if target is None:
                raise HTTPException(status_code=404, detail=f"Vehicle '{patch_id}' was not found.")
            merge_record(target, patch_changes)
        elif patch_type == "company":
            target = next((row for row in current["companies"] if str(row.get("company")) == str(patch_id)), None)
            if target is None:
                raise HTTPException(status_code=404, detail=f"Company '{patch_id}' was not found.")
            merge_record(target, patch_changes)
        elif patch_type == "site":
            existing = current["launchSites"].get(str(patch_id), {})
            current["launchSites"][str(patch_id)] = {**existing, **patch_changes}
        else:
            raise HTTPException(status_code=400, detail=f"Unsupported patch type '{patch_type}'.")

    return validate_dataset(current)


app = FastAPI(title="Rocket Market Map API", version="1.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("ROCKET_MAP_ALLOW_ORIGINS", "*").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def startup() -> None:
    bootstrap_storage()


@app.get("/api/health")
def health() -> dict[str, Any]:
    bootstrap_storage()
    dataset = load_json(CURRENT_PATH)
    history_count = len(list(HISTORY_DIR.glob("*.json")))
    return {
        "ok": True,
        "updated_at": dataset_updated_at(dataset),
        "history_versions": history_count,
        "current_path": str(CURRENT_PATH.relative_to(PROJECT_DIR)),
    }


@app.get("/api/data")
def get_data() -> JSONResponse:
    bootstrap_storage()
    return JSONResponse(load_json(CURRENT_PATH))


@app.post("/api/data")
def save_data(payload: Any = Body(...)) -> JSONResponse:
    bootstrap_storage()
    validated = stamp_dataset(validate_dataset(payload), "save_data")
    with DATA_LOCK:
        current = load_json(CURRENT_PATH)
        backup_current_dataset(current, prefix="dataset")
        save_json(CURRENT_PATH, validated)
    return JSONResponse(validated)


@app.post("/api/patch")
def patch_data(payload: Any = Body(...)) -> JSONResponse:
    bootstrap_storage()
    with DATA_LOCK:
        current = load_json(CURRENT_PATH)
        next_dataset = stamp_dataset(apply_patch_in_memory(current, payload), "patch")
        backup_current_dataset(current, prefix="patch")
        save_json(CURRENT_PATH, next_dataset)
    return JSONResponse(next_dataset)


@app.get("/api/history")
def history(limit: int = 20) -> dict[str, Any]:
    bootstrap_storage()
    files = sorted(HISTORY_DIR.glob("*.json"), reverse=True)
    items = []
    for path in files[: max(1, min(limit, 100))]:
        try:
            stat = path.stat()
            items.append(
                {
                    "filename": path.name,
                    "bytes": stat.st_size,
                    "modified_at": datetime.fromtimestamp(stat.st_mtime, tz=timezone.utc).replace(microsecond=0).isoformat(),
                }
            )
        except OSError:
            continue
    return {"items": items, "count": len(items)}


@app.post("/api/reset")
def reset_data() -> JSONResponse:
    bootstrap_storage()
    default = stamp_dataset(load_json(DEFAULT_PATH), "reset")
    with DATA_LOCK:
        current = load_json(CURRENT_PATH)
        backup_current_dataset(current, prefix="reset")
        save_json(CURRENT_PATH, default)
    return JSONResponse(default)


# Serve the front-end from the same process so /api and the UI work together out of the box.
app.mount("/", StaticFiles(directory=str(PROJECT_DIR), html=True), name="frontend")
