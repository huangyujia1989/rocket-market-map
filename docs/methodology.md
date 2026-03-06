# Rocket Market Map 2026 / 2027-2030 — Notes

## What is in the website
A self-contained single-page HTML dashboard for investors / C-level users, with:
- Big-picture KPI layer
- Interactive filters and metric toggles
- Region / company / technology-route charts
- Vehicle explorer with click-through detail drawer
- Company / capital explorer
- Source index
- Built-in CSV / JSON download

## MECE framework
The site uses a strict primary object model:
- **Primary object = launch supply node**
- A node is either a specific launcher program or, where needed to avoid false precision, a **fleet node** representing an operational national launcher family.

Each node belongs to exactly one category on each primary dimension:
1. **Region**: US / Europe / China
2. **Time status**: Live 2026 supply / 2027-2030 option / Distressed or paused
3. **Ownership**: State system / State-backed commercial / Industrial JV or incumbent / Public company / Private company
4. **Reusability**: Expendable / Partial reusable / Full reusable
5. **Propellant family**: Solid / Kerosene-LOX / Methane-LOX / Mixed cryogenic / Propane-LOX / Mixed family

This prevents the common double-counting mistake where the same program is simultaneously treated as:
- a current launcher,
- a future reusable option,
- and a company-level capacity bucket.

## Why some systems are modeled as fleet nodes
Very large state systems can have many variants. Splitting every subvariant can create fake accuracy and double-count market capacity. For that reason, the current operational Long March system is modeled as a **fleet node** in the big-picture view, while newer programs like Long March 12A remain separate option nodes.

## Metric definitions
### 2026 deliverable kg
A conservative base-case estimate of full-year launch supply likely to be practically deliverable in 2026. Development-stage programs usually score zero here.

### 2030 potential kg
A directional strategy scenario for plausible 2030 supply if the program reaches a reasonable cadence. This is not management guidance and not an audited forecast.

### Single-launch kg
Published or tracked payload capacity per launch. This is useful for vehicle class, but it is often the least decision-useful number by itself.

### Cost score
A strategic heuristic from 1-10, not a quoted launch price. It primarily reflects:
- reuse depth,
- expected cadence,
- manufacturability,
- market fit,
- and ability to amortize fixed costs.

## Suggested investor reading order
1. Start on **2026 deliverable kg** to see who really has supply now.
2. Switch to **2030 potential kg** to see where option value sits.
3. Filter by **reusability** and **propellant** to compare technical routes.
4. Open the **company explorer** to see whether the capital base can survive the development cycle.

## Files
- `rocket_market_map_2026_2030.html` — website
- `rocket_market_map_2026_2030.json` — underlying data
