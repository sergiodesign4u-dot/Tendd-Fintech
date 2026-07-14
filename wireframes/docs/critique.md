# Wireframe Critique and Final Check (Step 9)

Phase: Wireframes, Step 9. A strict pass over all 40 wireframe pages against
wireframes/docs/conventions.md, ia/docs/sitemap.md, and ia/docs/flows.md. Defects
first as a table, then the fixes applied. Structure only; no visual design.

## What was checked

Every page in wireframes/ (40 screens plus index) across these defect classes:
- Stray look: color, hex, shadow, font-family, icon fonts, real logos, images.
- Placeholder text: lorem ipsum or filler instead of real Tendd copy.
- Missing states: each screen's state pages vs the marks in screens.md.
- Dead ends: an empty or error page with no visible exit.
- Zone without a main action.
- Screen not on the map (sitemap.md / flows.md).
- Shell drift: layout, wireframe tree, wf-meta, wf-states, css and _nav.js.
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

- 41 files present (40 screens + index); filenames match the screens.md File column.
- Zero broken links; every link target is one of the 40 valid pages.
- Zero dead ends; every empty and every error page has a real exit, cross-checked with flows.md (bank error keeps the manual fallback, could-not-cancel has an in-app next step, failed-payment has a next-step card, sync-error keeps the last known list).
- State coverage matches screens.md exactly (no missing state, no invented state).
- Greyscale only: no hex color, no shadow, no icon font, no real logo, no `<img>`. One color leak that grep cannot see, native radios and checkboxes rendering in the OS blue, was fixed at the CSS level with a grey `accent-color`.
- No em dashes. One `<h1>` per page. Correct onboarding (no tab bar) vs app (correct current tab) chrome.
- Desktop responsive: every screen reflows through the shared container-query CSS (bottom tab bar becomes a left rail, content widens; onboarding stays a centered column). Verified live on Home, Welcome, and Upgrade.
- Main-flow click-through passes end to end: welcome, path-choice, connect-bank, loading, guided-reveal, home, subscription-detail, with state transitions and both-way branches.

## Outcome

The wireframe set is complete and consistent: 16 screens, 40 pages, all four
states covered where the scenario produces them, no dead ends, greyscale and
semantic, with real Tendd copy and a live desktop reflow. One real defect was
found and fixed; the rest of the audit was clean. Ready for the Design phase.

---

## Deep audit (Step 9 follow-up, four independent reviewers)

A second, deeper pass ran four independent reviewers (onboarding+core,
alerts+cancel, pro+account, cross-cutting) plus a visual review. The system
layer was confirmed clean (shell, naming, nav tree, state coverage, chrome,
greyscale, responsive reflow, links, no em dashes). The issues were in content,
flow, and data consistency. All of the following were fixed.

### High
- **settings.html** advertised Free as "up to 10 subscriptions", contradicting
  the locked D3 (Free is unlimited on count, gated only by depth/history).
  Fixed: "Unlimited subscriptions. Up to 2 bank connections. History, trends
  and advanced alerts are Pro." (The connection clause was later dropped by a
  July 2026 product decision - Free is uncapped on connections; settings.html
  now reads "Unlimited subscriptions and bank connections." See account.md.)

### Medium
- **Save tab / "Review these 2" / cancel-candidates nudge** all pointed at
  home-empty.html (the zero-state), because the FLAG 1 save-focus state had no
  wireframe. Fixed: added **home-savefocus.html** (candidates pinned open,
  summary swaps to potential savings) and retargeted the Save tab (all app
  pages), the reveal CTA, and the nudge to it. This is the 41st page; _nav.js,
  screens.md, and index.html were updated.
- **Canonical example dataset** locked to remove number drift. Home now shows
  all 14 subscriptions grouped 4/4/2/2/2 (matching the Guided Reveal), summing
  to the displayed monthly total **$192.90**. Propagated to Guided Reveal,
  home-error, History and Trends. Cancel candidates (Peloton App, The New York
  Times, save $29.99) are now visible rows. share-snapshot fixed to the
  post-cancel figures (13 subscriptions, $174.91, freed up $17.99), removing
  the Netflix double-count. Alerts reconciled to the dataset (Netflix next Aug
  3; payment-failed on Amazon Prime not the Peloton trial; trial-ending on
  Peloton).
- **data-privacy.html** delete-everything control moved to position 3, directly
  under the data explanation (one-tap reachable, per account.md), instead of
  last. Export copy now separates the free full download from the Pro CSV.
- **connections.html** dropped the invented Data-and-privacy zone (the title
  already links it) and removed "Reconnect" from the healthy source (it belongs
  to needs-reauth). Source counts reconciled to 14 (11 bank + 3 manual).
- **cancel-guide-error.html** re-weighted so the free next step ("I cancelled
  it") is the primary action and the Pro guide is secondary; D3 keeps the
  could-not-cancel moment a trust moment, not an upsell.
- **share-snapshot.html** card dropped its inline custom type scale
  (font-size:34px, weight, tracking) in favour of the shared .count/.total
  classes.

### Low
- Error states unified to a calm `role="status" aria-live="polite"` (was a mix
  of alertdialog+assertive and alert).
- upgrade.html pay button now states the amount ("Start Tendd Pro - $69 a
  year"); a lifetime option is noted as deferred [?] (D4).
- history-trends.html time-range control is now real buttons with aria-pressed
  (was anchors cosplaying as tabs).
- home cancel-candidates nudge dropped the misleading aria-expanded (it
  navigates rather than expanding in place).
- cancel-win.html wf-states label standardized to "success (base)".

### Verified after fixes
42 html files (41 screens + index), zero broken links, zero dead ends, no
stray color/font/shadow/img, no em dashes, shell intact on every page, and the
example dataset is arithmetically consistent across Home, Guided Reveal,
save-focus, alerts, cancel, share, and history. Known-open [?] items remain
(auth target for "Sign in", lifetime price) and are annotated, not invented.

---

## Declutter pass (post-audit, July 2026)

Founder feedback: the frames carried too much reviewer scaffolding and the
desktop layout was not actually reflowing well. Applied across all 41 frames:

- Removed the reviewer chrome from every frame: the left wireframe tree, the
  meta/annotation bar (cluster, job, flow, tap depth), the "this screen:
  states / overview" strip, and the per-page desktop-reflow note. _nav.js
  (which rendered the tree) is deleted; nothing references it now. Each frame
  is now only the product screen.
- The overview (index.html) is unchanged and remains the single place that
  lists every page and state, grouped by flow. Navigation between frames is via
  the overview plus the product's own in-screen links.
- Desktop responsive made real. With the 250px tree gone, the stage is
  full-width, so the container query on `.stage` fires and the wide-screen
  layout shows: bottom tab bar becomes a left rail, the app shell centers at
  960px, and the content column widens with a capped reading measure.
  Onboarding stays a single centered column. Verified live at 390px and 1200px
  on Home (app) and Welcome (onboarding).
- Kept at wireframe fidelity: zone borders and zone labels remain (they are the
  structure being communicated, not reviewer chrome). Greyscale, semantic HTML,
  real copy, and the four-states-as-pages rule are all unchanged.

## Welcome rebuilt as the public landing (founder decision, July 2026)

Founder feedback: on desktop the Welcome screen was too narrow (capped at 560px
as an onboarding step) and too thin on content for a page that sells the
product. Decision (of three options offered): make it a full-width marketing
landing rather than a minimal onboarding step.

- welcome.html is now a full-width landing wireframe: top nav (wordmark, section
  links, Sign in, Get started), a two-column hero (value copy + a calm app
  preview using the canonical 14 subs / $192.90 dataset), three benefit cards
  (one per core job: J1 see all, J2 calm not judged, J4 no surprises), a
  three-step "How Tendd works", a trust and security block (read-only, Plaid,
  delete anytime, never sell), a three-quote social-proof band in the persona
  voices (Emma, Ravi, Claudia), a final CTA, and a marketing footer.
- Still a wireframe: greyscale, semantic HTML, real calm copy, no color or type
  decisions. New landing classes (`.landing`, `.lp-*`) added to _wf.css,
  mobile-first with a >=760px breakpoint (hero and card grids go multi-column).
- It is the only page that uses full width and the only one with a footer (it
  is a marketing page, not an app screen). All CTAs lead into the onboarding
  chain at path-choice.html; Sign in goes to settings.html. Footer links to
  unbuilt marketing pages are `#` stubs; Privacy and Data and privacy point to
  data-privacy.html. Verified at 390px and 1280px.

## Side menu restored + full-width + two-pane (founder decision, July 2026)

Founder asked to bring back the side menu (the wireframe tree) and to let the
app screens use the full width like the landing, with a real two-pane where it
helps. Chosen option: tree back + full-width content + two-pane for Home and
Subscription Detail.

- The review side menu (_nav.js tree) is restored on all 41 pages, including the
  landing (which sits in an edge-to-edge `.stage-flush` beside it). It collapses
  to a top "Wireframe map" bar below 820px. Only the annotation bar, the state
  strip, and the reflow note stay removed.
- App screens now fill the available width on desktop (the 960px cap and the
  620px zone cap are gone). The bottom tab bar still becomes a left rail.
- Home and Subscription Detail are a genuine two-pane master-detail at stage
  width >= 1040. Home: the list is the master, a selected-item detail pane
  (Netflix, mirroring the Subscription Detail blocks) opens on the right instead
  of navigating away. Subscription Detail: the grouped list returns as a master
  on the left with the current row marked, the detail sits on the right. Both
  panes are hidden on mobile and mid-desktop, so the phone experience is
  unchanged (a row still opens subscription-detail.html).
- Verified live at 1440px (Home two-pane, Detail two-pane, Settings full-width,
  landing with tree) and 390px (tree collapsed, single column, panes hidden).

## Post-hoc reconciliation (July 12 2026)

- **Upgrade annual-savings copy vs D4.** upgrade.html said the yearly plan was
  "two months cheaper than paying monthly", but D4 ($7.99/mo, $69/yr) makes the
  annual save $95.88 - $69 = $26.88, about 3.4 months, not two. Reworded to "it
  saves about $27 a year versus paying monthly" in upgrade.html and the two
  voice inventory mirrors (voice/docs/microcopy.md, voice/microcopy.html).
  Caught while adapting the Voice prompt to the current repo.

## Full-page dashboard shell (founder decision, July 14 2026)

Founder feedback: the landing (welcome.html) reads as a real full-width desktop
page, but every app screen still read as a phone card framed in a grey field,
and the bottom tab bar sat at the very bottom of a tall scrolling card rather
than behaving like app chrome. The critique, verified live at 1440px:

- Phone-frame-in-a-box: each app screen is a bordered `.phone` card floating in
  the grey `--page` stage; on desktop it reads as a phone mockup on a page, not
  a product. The landing has no such frame.
- Wasted width: Home two-pane put the list in a ~340px ribbon with a short
  detail and a large empty void bottom-right; single-column screens capped at
  820px and hugged the rail, leaving a wide empty field.
- The bottom tab bar was not chrome: `position: absolute; bottom: 0` inside a
  720px-min card, so on a long list it was stranded far below, not fixed.
- The desktop rail was a thin stub in a tall empty column.

Decision (of the options offered): turn the app shell into a real full-page
dashboard, like the landing, still at wireframe fidelity (greyscale, structure,
real copy). Onboarding and the landing are untouched.

Implementation (all in _wf.css, behind a new `.dash` class so the change is
opt-in per page):

- The old framed-phone desktop rules are fenced with `:not(.dash)`, so every
  non-dash page renders exactly as before.
- `.dash` desktop (stage >= 760): the stage goes edge-to-edge (`.stage-app`
  removes the gutter), the phone loses its border and fills the viewport height,
  the header folds into the top of a persistent full-height left sidebar, and
  the tab bar becomes that sidebar's vertical nav. The content area owns the
  width and scrolls independently of the sidebar.
- Two-pane (stage >= 1040): the detail pane (Home) and the master + detail
  (Subscription Detail) span full height beside the list, so a wide screen has
  no outside void.
- Single-column app screens: a comfortable measure (max 940px), left-aligned in
  the full-bleed content area, not a centered floating card.
- Mobile (<= 460): the bottom tab bar becomes `position: fixed`, real viewport
  chrome, instead of resting at the bottom of the card.

Scope and verification: `.dash` + `.stage-app` applied to all 29 app pages
(base screens and their empty/error/loading states, including the two-pane Home
and Subscription Detail). Excluded and unchanged: onboarding (Welcome landing,
Path Choice, Connect Bank, Add Subscription, Guided Reveal) and index.html.
Verified live across a two-pane page, a single-column page, a state page, and
mobile: full-height sidebar, content owns the width, empty-state exits intact,
mobile bar fixed. Cross-checked all 42 pages: 0 broken links, 0 em dashes;
onboarding, landing, and index not modified.

Known trait: on a very wide screen a two-pane detail pane shows whitespace below
a short detail. This is normal master-detail behaviour (a reading pane taller
than its content) and was left as is.

This revises the earlier "Side menu restored + full-width + two-pane" desktop
model: the review side menu, the two-pane structure, and mobile are all kept;
what changed is that on desktop the app is now edge-to-edge dashboard chrome
rather than a framed phone widened in place.
