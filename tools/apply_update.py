#!/usr/bin/env python3
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_FILE = ROOT / 'data' / 'rocket_market_map_2026_2030_v3.json'
PATCH_FILE = ROOT / 'updates' / 'sample_patch.json'


def apply_patch(data: dict, patch: dict) -> dict:
    node_index = {n['id']: n for n in data.get('nodes', [])}
    company_index = {c['company']: c for c in data.get('companies', [])}

    for op in patch.get('operations', []):
        kind = op.get('op')
        if kind == 'replace_node':
            target = node_index[op['id']]
            target.update(op.get('fields', {}))
        elif kind == 'replace_company':
            target = company_index[op['company']]
            target.update(op.get('fields', {}))
        elif kind == 'append_source':
            target_id = op.get('id')
            if target_id in node_index:
                node_index[target_id].setdefault('sources', []).append(op['source'])
            else:
                company_index[op['company']].setdefault('sources', []).append(op['source'])
        elif kind == 'set_meta_field':
            data.setdefault('meta_v3', {})[op['field']] = op['value']
        else:
            raise ValueError(f'Unsupported operation: {kind}')
    return data


def main():
    with DATA_FILE.open('r', encoding='utf-8') as f:
        data = json.load(f)
    with PATCH_FILE.open('r', encoding='utf-8') as f:
        patch = json.load(f)
    updated = apply_patch(data, patch)
    with DATA_FILE.open('w', encoding='utf-8') as f:
        json.dump(updated, f, ensure_ascii=False, indent=2)
    print(f'Applied patch from {PATCH_FILE} to {DATA_FILE}')


if __name__ == '__main__':
    main()
