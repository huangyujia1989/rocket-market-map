#!/usr/bin/env python3
"""
Apply an AI / automation patch onto the canonical Rocket Market Map dataset.

Usage:
  python tools/apply_update.py \
      --dataset data/rocket_market_map_2026_2030_v2.json \
      --patch updates/patch.json \
      --out data/rocket_market_map_2026_2030_v2.json \
      --backup-dir updates/archive
"""
from __future__ import annotations

import argparse
import copy
import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Tuple


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def composite_key(item: Dict[str, Any], keys: List[str]) -> Tuple[Any, ...]:
    return tuple(item.get(k) for k in keys)


def upsert_rows(rows: List[Dict[str, Any]], updates: List[Dict[str, Any]], keys: List[str]) -> List[Dict[str, Any]]:
    index = {composite_key(row, keys): copy.deepcopy(row) for row in rows}
    for update in updates:
        ck = composite_key(update, keys)
        base = index.get(ck, {})
        merged = copy.deepcopy(base)
        merged.update(update)
        index[ck] = merged
    return list(index.values())


def delete_rows(rows: List[Dict[str, Any]], deletes: List[Dict[str, Any]], keys: List[str]) -> List[Dict[str, Any]]:
    delete_keys = {composite_key(item, keys) for item in deletes}
    return [row for row in rows if composite_key(row, keys) not in delete_keys]


def validate(dataset: Dict[str, Any]) -> None:
    node_ids = [node["id"] for node in dataset.get("nodes", [])]
    if len(node_ids) != len(set(node_ids)):
        raise ValueError("Duplicate node ids found.")
    company_keys = [(c["region"], c["company"]) for c in dataset.get("companies", [])]
    if len(company_keys) != len(set(company_keys)):
        raise ValueError("Duplicate company keys found.")
    launch_sites = dataset.get("launchSites", {})
    for node in dataset.get("nodes", []):
        for site in node.get("launchSites", []) or []:
            if site not in launch_sites:
                raise ValueError(f"Node {node['id']} references missing launch site: {site}")
        for fld in ("single_launch_kg", "supply_2026_kg", "supply_2030_kg", "gtoPayloadKg"):
            val = node.get(fld)
            if val is not None and isinstance(val, (int, float)) and val < 0:
                raise ValueError(f"Negative numeric field {fld} on node {node['id']}")
        for src in node.get("sources", []):
            if not src.get("label") or not src.get("url"):
                raise ValueError(f"Invalid source row on node {node['id']}")


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dataset", required=True)
    ap.add_argument("--patch", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--backup-dir", default="")
    args = ap.parse_args()

    dataset_path = Path(args.dataset)
    patch_path = Path(args.patch)
    out_path = Path(args.out)
    backup_dir = Path(args.backup_dir) if args.backup_dir else None

    dataset = load_json(dataset_path)
    patch = load_json(patch_path)

    if backup_dir:
        backup_dir.mkdir(parents=True, exist_ok=True)
        stamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
        save_json(backup_dir / f"{stamp}-before-apply.json", dataset)

    if patch.get("meta_updates"):
        dataset["meta"].update(patch["meta_updates"])

    dataset["nodes"] = upsert_rows(dataset.get("nodes", []), patch.get("nodes_upsert", []), ["id"])
    dataset["nodes"] = delete_rows(dataset.get("nodes", []), patch.get("nodes_delete", []), ["id"])

    dataset["companies"] = upsert_rows(dataset.get("companies", []), patch.get("companies_upsert", []), ["region", "company"])
    dataset["companies"] = delete_rows(dataset.get("companies", []), patch.get("companies_delete", []), ["region", "company"])

    launch_sites = dict(dataset.get("launchSites", {}))
    for name, payload in patch.get("launchSites_upsert", {}).items():
        launch_sites[name] = payload
    for item in patch.get("launchSites_delete", []):
        launch_sites.pop(item["site_name"], None)
    dataset["launchSites"] = launch_sites

    if patch.get("dataset_version"):
        dataset["meta"]["version"] = patch["dataset_version"]

    validate(dataset)
    save_json(out_path, dataset)
    print(f"Updated dataset written to {out_path}")


if __name__ == "__main__":
    main()
