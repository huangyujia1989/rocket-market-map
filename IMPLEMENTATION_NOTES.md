# Rocket Market Map v7 — timeline + any-year map + vehicle schematics

This iteration focuses on three product changes:

1. The top overview chart is now a **stacked annual supply timeline** with:
   - x-axis = 2026E to 2030E
   - y-axis = annual supply
   - breakdown = top N companies + Other
   - hover tooltip on each segment
   - click a company segment / legend chip to filter the main market map

2. The main market map now supports **any year from 2026E to 2030E**.
   - Bubble size, summary pills, detail drawer, and linked views react to the selected year.
   - Intermediate years use the existing best-estimate fields already present in the dataset.

3. Every vehicle detail drawer now includes a **size-and-structure schematic** instead of leaving the user with text only.
   - Public dimensions are used where they are broadly published.
   - For programs with limited disclosure, the schematic uses a clearly labeled approximate public-range estimate.
   - The panel shows height, diameter, stage count, reuse mode, propellant, architecture, engines, and design logic.

## Files changed

- `assets/app.js`
  - Added overview timeline chart logic
  - Added 2026E–2030E year toggle rendering for the market map
  - Added vehicle schematic rendering and drawer section
  - Added state sanitization for the new overview controls

- `assets/styles.css`
  - Added legend chip styles
  - Added schematic card styles
  - Added responsive layout for the new vehicle visual panel

## Design choices

- I used **schematics rather than hotlinked photos** so deployment stays stable and the user can read dimensions, structure, and design logic in one place.
- The overview timeline ranks “major companies” by a selectable year, because “top companies” changes across 2026E–2030E and users should be able to choose the ranking basis.
- “Other” is always preserved, so the market total remains readable even when only the top companies are broken out.
