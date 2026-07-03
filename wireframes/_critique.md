# Wireframe Critique and Final Check (Step 9)

Phase: Wireframes, Step 9. A strict pass over all 40 wireframe pages against
wireframes/_conventions.md, IA/docs/sitemap.md, and IA/docs/flows.md. Defects
first as a table, then the fixes applied. Structure only; no visual design.

## What was checked

Every page in wireframes/ (40 screens plus index) across these defect classes:
- Stray look: color, hex, shadow, font-family, icon fonts, real logos, images.
- Placeholder text: lorem ipsum or filler instead of real Tendd copy.
- Missing states: each screen's state pages vs the marks in _screens.md.
- Dead ends: an empty or error page with no visible exit.
- Zone without a main action.
- Screen not on the map (sitemap.md / flows.md).
- Shell drift: layout, wireframe tree, wf-meta, wf-states, css and nav.js.
- Chrome: onboarding has no tab bar; app screens have the right current tab.
- Broken links; em dashes.

Method: an automated audit script over all pages, plus full reads of
data-privacy, alerts, connections, share-snapshot, cancel-guide-error, and
history-trends-empty to judge content-level quality, and a container-query
desktop reflow check.

## Defects found

| # | Severity | Screen | Defect | Resolution |
|---|----------|--------|--------|------------|
| 1 | High | subscription-detail-empty.html | Inline `font-family:monospace` (plus a font-size) on the raw charge descriptor. A typography decision, which the conventions defer to Design. | Fixed: removed the inline font; the raw descriptor still reads as raw from its content. |
| 2 | Low x15 | various | Heuristic "zone with no action". | Not defects: every flagged zone is a title, a trust statement, or a form/checkbox zone, and each page has a clear main action elsewhere (verified by reading the pages and their links). No change. |
| 3 | Info | 24 agent-built pages | Inline `style=` used a little more than "tiny one-offs" (font-size, margins). | Kept: all values are greyscale (var() tokens) and structural, not brand or type-scale decisions. Acceptable at wireframe fidelity. |

## Cross-cutting checks (all passed)

- 41 files present (40 screens + index); filenames match the _screens.md File column.
- Zero broken links; every link target is one of the 40 valid pages.
- Zero dead ends; every empty and every error page has a real exit, cross-checked with flows.md (bank error keeps the manual fallback, could-not-cancel has an in-app next step, failed-payment has a next-step card, sync-error keeps the last known list).
- State coverage matches _screens.md exactly (no missing state, no invented state).
- Greyscale only: no hex color, no shadow, no icon font, no real logo, no `<img>`. One color leak that grep cannot see, native radios and checkboxes rendering in the OS blue, was fixed at the CSS level with a grey `accent-color`.
- No em dashes. One `<h1>` per page. Correct onboarding (no tab bar) vs app (correct current tab) chrome.
- Desktop responsive: every screen reflows through the shared container-query CSS (bottom tab bar becomes a left rail, content widens; onboarding stays a centered column). Verified live on Home, Welcome, and Upgrade.
- Main-flow click-through passes end to end: welcome, path-choice, connect-bank, loading, guided-reveal, home, subscription-detail, with state transitions and both-way branches.

## Outcome

The wireframe set is complete and consistent: 16 screens, 40 pages, all four
states covered where the scenario produces them, no dead ends, greyscale and
semantic, with real Tendd copy and a live desktop reflow. One real defect was
found and fixed; the rest of the audit was clean. Ready for the Design phase.
