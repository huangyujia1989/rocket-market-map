# v7 test results

Runtime tests were executed by loading the page in headless Chromium with the HTML, CSS, and JS inlined, then exercising the key interactions.

## Verified

- Market map year toggle renders **5 buttons**: 2026E / 2027E / 2028E / 2029E / 2030E
- Overview timeline renders a stacked chart with:
  - **44 stacked segments** in the default view
  - **9 legend chips** in the default Top 8 + Other view
- Overview controls render correctly:
  - Top 5 / Top 8 / Top 10 / Top 12 companies
  - ranking year 2026E–2030E
- Switching the market map to **2028E** updates the summary and chart-linked values
- Hovering a stacked segment shows a tooltip with:
  - company name
  - selected year
  - annual supply
  - share of that year’s total
- Changing the overview selector to **Top 5** reduces the legend to **6 chips** (Top 5 + Other)
- Clicking a legend chip filters the main map to that company
- Opening a vehicle drawer shows:
  - a new **“尺寸与结构 / Size and structure”** section
  - a schematic card
  - height / diameter / stage / reuse stats

## Output artifacts

- `home_v7.png` — full-page screenshot from the v7 runtime test
