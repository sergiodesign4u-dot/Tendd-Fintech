# Wireframes - Screen and State Inventory (Tendd)

Phase: Wireframes, Step 1. This is not a wireframe yet. It is the order for
every step that follows: which screens exist, what job each closes, where it
sits in a flow, and which of the four states (empty / error / loading /
success) are real for it. Steps 3 to 8 build against this table.

Source of truth: IA/docs/sitemap.md (screen names, jobs, navigation),
IA/docs/flows.md (flows, decisions, states, dead ends), and
research/docs/jtbd.md (jobs). Screen names below are copied exactly from
sitemap.md. No screen is invented here.

## How to read the four states

Wireframes are structure, not look. A screen is not done until every state
that its scenario actually produces has its own page (same structure,
different content):

- **success** = the base page: the normal, working, default view of the
  screen. This is the file `<screen>.html`. Every screen has one. It is the
  "it works, here is your result" view, not a separate celebration screen,
  except for Cancel Win Moment, which is a dedicated success-only screen.
- **empty** = the screen has no data to show yet, and the empty view must
  offer a way out (never a dead end).
- **error** = something failed (a load, a sync, a connection), and the error
  view must offer a way out (retry or an alternative).
- **loading** = a real waiting beat worth showing calmly (grey placeholders),
  not an instant, offline screen.

In the state table: `check` where the scenario genuinely produces that state,
`-` where it does not. Success is only marked where the base page carries a
real result; pure waypoint screens (Welcome, Path Choice) get success on the
base page as their default view but no extra state pages.

## Build order

- **Main flow (build first, Steps 3 to 7):** Flow A, Emma, bank path. The
  screens are Welcome, Activation Path Choice, Connect Bank, Guided Reveal,
  Home / Subscription List, plus Subscription Detail (the Core pair). Home is
  the reference screen (the pattern the rest clone).
- **Everything else (Step 8, subagents):** the remaining flows and every
  other sitemap screen, cloning the pattern locked by the main flow.

---

## Flows and their screens

Screens repeat across flows on purpose (Home, Subscription Detail, Add
Subscription, Upgrade are shared). Reuse is noted, not duplicated.

### Flow A - J-MAIN, see all recurring charges calmly (Emma, bank path) - PRIMARY, BUILD FIRST

The main job, first session, bank-connected path. Ends at the calm list.

| Screen (from sitemap) | Job closed (jtbd) | Place in Flow A | Real states and why |
|---|---|---|---|
| Welcome / Value Intro | J1 show value before asking for data | Entry, tap 0 | success only. A static value screen with no data to load, fail, or be empty. |
| Activation Path Choice | J1 + J5 two paths, equal weight (D2) | tap 1 | success only. An offline choice between two paths; no data, so no empty / error / loading. |
| Connect Bank | J1 bank path (D5 Plaid US first) | tap 2 | success (connect prompt and handoff), loading (syncing your bank), error (could not connect, keeps a manual fallback so it is not a dead end), empty (connected but no recurring charges found). |
| Guided Reveal | J-MAIN the aha, gradual (D1) | tap 3, the aha | success (the reveal: count, then categories, then total with an action), empty (nothing to reveal yet, thin or partial list). No error (upstream failures live on Connect Bank / Add Subscription). |
| Home / Subscription List | J-MAIN + E1 calm list, count, total | end of flow, then the steady state | success (populated calm list), empty (zero or all cancelled, a calm invite), loading (refreshing sync, non-alarming), error (sync failed, still shows the last known list). |

### Flow B - J5, track without sharing bank data (Ravi, manual + presets)

The privacy path. Shares Welcome, Path Choice, Guided Reveal, and Home with
Flow A; the distinct screen is Add Subscription.

| Screen (from sitemap) | Job closed (jtbd) | Place in Flow B | Real states and why |
|---|---|---|---|
| Welcome / Value Intro | J1 | Entry | shared with Flow A. |
| Activation Path Choice | J1 + J5 | tap 1, picks Privacy | shared with Flow A. |
| Add Subscription (manual + presets) | J5 privacy path (D2, 400+ presets) | after choosing Privacy; reused in-app as the "+" | success (added from a preset, prefilled), loading (preset library loading), error (presets unavailable, falls back to manual custom entry), empty (no preset matches the search / nothing added yet). |
| Guided Reveal | J-MAIN | after adding | shared with Flow A; the empty state matters more here (manual-entry trap). |
| Home / Subscription List | J-MAIN + E1 | end of flow | shared with Flow A (private list, no bank). |

### Flow C - J2 + E2, find, cancel, and feel the win (Claudia)

The cut job and the pride moment. Basic cancel is free; the full guide is Pro
(D3). Cancel is never walled at the relief moment.

| Screen (from sitemap) | Job closed (jtbd) | Place in Flow C | Real states and why |
|---|---|---|---|
| Home / Subscription List | J-MAIN, entry to the cut | start | shared with Flow A. |
| Subscription Detail | J3 decode a charge + J4 its alerts | tap a row | success (normal detail), loading (detail loading), error (could not load, or a failed-payment fix that lives at the bank / merchant, with a plain next step), empty (unrecognized charge, enrichment failed, a prompt to name it). |
| Cancel Guide | J2 identify and cancel; basic free (D3) | after choosing to cancel | success (steps: basic free or full Pro), empty (no guide for this service yet, generic steps plus request-a-guide), error (could not cancel, blocked by a retention dark pattern, with an in-app next step). |
| Upgrade / Tendd Pro | D3 split + D4 price (the gate) | if the user wants the full guide | success only. A contextual paywall / plan screen; not a data screen. Orphan by design (traces to a decision, not a job). |
| Cancel Win Moment | E2 the small win, money saved | after a successful cancel | success only. The dedicated "it worked" celebration screen. |
| Share Snapshot | S1 privacy-safe share card | offered after the win | success (card ready / shared), loading (generating the card), error (share or image failed). |

### Flow D - J4, stay ahead of a surprise (alert to action)

Entry is a notification (the return hook). Price change and payment failed
are free; trial ending and unusual are Pro (D3).

| Screen (from sitemap) | Job closed (jtbd) | Place in Flow D | Real states and why |
|---|---|---|---|
| Alerts / Activity | J4 price change, payment failed | opens from a notification | success (the alert feed), empty (all clear, a calm healthy state), loading (loading alerts), error (could not load alerts, with retry). |
| Subscription Detail | J3 + J4 | open the alerted subscription | shared with Flow C. Success here is "caught it early, nothing to do". |
| Upgrade / Tendd Pro | D3 | a Pro alert type hits the gate | shared with Flow C. |
| Cancel Guide | J2 | a price change may hand off to cancel | shared with Flow C. |
| Home / Subscription List | J-MAIN | fallback after retry declined or empty | shared with Flow A. |

### Beyond the four core flows - steady-state and account screens

These are in sitemap.md but are not part of a single linear persona flow. They
are reached globally (the You tab) or contextually (a Pro gate), and they are
built in Step 8.

| Screen (from sitemap) | Job closed (jtbd) | Reached from | Real states and why |
|---|---|---|---|
| History and Trends | J-MAIN over time; Pro gate (D3) | contextually from Home; Pro only | success (charts and trends), empty (still gathering your history, under 3 months, distinct from the Pro upsell), loading (loading history). No standalone error page at this stage. |
| Connections / Accounts | J1 + J5 manage sources, reauth (D5) | You tab | success (list of sources), empty (no sources connected yet), error (a source needs reauth or is in error). |
| Data and Privacy | E3 plain-language data use, delete | You tab | success only. A static trust and control page (what we read, one-tap delete). |
| Settings / Profile | E3 plan, notification preferences | You tab (default of You) | success only. A static settings page (plan, notifications). |

---

## Master state table (all 16 screens)

Rows are screens. Columns are the four states. `check` = a real state that
gets its own page; `-` = the scenario does not produce it. The file column is
the base filename; state pages append `-empty`, `-error`, `-loading`.

| # | Screen | File (base) | empty | error | loading | success | Build |
|---|---|---|:---:|:---:|:---:|:---:|---|
| 1 | Welcome / Value Intro | welcome.html | - | - | - | check | main |
| 2 | Activation Path Choice | path-choice.html | - | - | - | check | main |
| 3 | Connect Bank | connect-bank.html | check | check | check | check | main |
| 4 | Add Subscription | add-subscription.html | check | check | check | check | step 8 |
| 5 | Guided Reveal | guided-reveal.html | check | - | - | check | main |
| 6 | Home / Subscription List | home.html | check | check | check | check | main (reference) |
| 7 | Subscription Detail | subscription-detail.html | check | check | check | check | main |
| 8 | Alerts / Activity | alerts.html | check | check | check | check | step 8 |
| 9 | Cancel Guide | cancel-guide.html | check | check | - | check | step 8 |
| 10 | Cancel Win Moment | cancel-win.html | - | - | - | check | step 8 |
| 11 | Share Snapshot | share-snapshot.html | - | check | check | check | step 8 |
| 12 | History and Trends | history-trends.html | check | - | check | check | step 8 |
| 13 | Upgrade / Tendd Pro | upgrade.html | - | - | - | check | step 8 |
| 14 | Connections / Accounts | connections.html | check | check | - | check | step 8 |
| 15 | Data and Privacy | data-privacy.html | - | - | - | check | step 8 |
| 16 | Settings / Profile | settings.html | - | - | - | check | step 8 |

### Page count

40 pages total (one base page per screen plus one page per extra state).

- Main flow build set (Steps 3 to 7): Welcome (1), Activation Path Choice (1),
  Connect Bank (4), Guided Reveal (2), Home (4), Subscription Detail (4) = 16
  pages.
- Step 8 (the rest): 24 pages.

### Notes carried from the IA critique (must be honored as states, not new screens)

- Connect Bank error keeps a persistent "add them yourself instead" exit.
- Add Subscription persists partial progress; the reveal can run on a partial
  list (the manual-entry trap).
- Cancel Guide has a "could not cancel" state with an in-app next step.
- Subscription Detail has an "unrecognized charge" state (protects J3) and a
  failed-payment next-step card.
- Home has empty, loading, and sync-error states.
- History and Trends has a "still gathering your history" empty state, kept
  distinct from the Pro upsell.
- Share Snapshot has a generating (loading) state and a share-failed error.

These are the four-state and dead-end fixes from IA/docs/sitemap.md Critique.
Every one resolves to a state page here, not a new screen.
