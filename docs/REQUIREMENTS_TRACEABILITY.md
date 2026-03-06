# Requirements traceability

## From the improvement brief to implementation

### Data comparison and new fields

| Requirement | Implemented in this package | Notes |
| --- | --- | --- |
| firstFlight | `nodes[].firstFlightYear`, `nodes[].firstFlightStatus` | Added |
| totalFlights | `nodes[].totalFlights`, `nodes[].totalFlightsDisplay` | Added |
| engines | `nodes[].engines[]` | Added |
| plannedMissions | `nodes[].plannedMissions[]` | Added |
| gtoPayload | `nodes[].gtoPayloadKg` | Added where public or best-effort |
| techRoute | `nodes[].techRoute`, `nodes[].techRouteEn` | Added |
| launchSite | `nodes[].launchSites[]` + `launchSites{}` | Added |
| constellationCapable | `nodes[].constellationCapable` | Added |
| certified | `nodes[].certified` | Added |

### Visual changes

| Requirement | Implemented |
| --- | --- |
| 时间轴视图 | First-flight timeline |
| 发动机对比表 | Engine comparison table |
| 发射频次趋势图 | Launch cadence trend |
| 地理视图 | Launch-site longitude / latitude view |

### UI / wording

| Requirement | Implemented |
| --- | --- |
| 中文页阅读更顺 | Chinese-facing copy refreshed |
| 不需要明确标注“MECE” | Explicit “MECE” wording removed from UI, classification logic retained in data |
| 给 AI 自动更新端口 | Added manifest, update contract, sample patch, and merge helper |
