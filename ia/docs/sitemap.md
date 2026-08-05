# Sitemap - Tendd

Phase IA, Prompt 1: Information Architecture. This is structure only: what
entities exist, what screens exist, what job each screen serves, and how a
person moves between them. Per-screen content structure, states, and shared
components are Prompt 2, not this document.

Every entity and every screen below traces to a job in
research/docs/jtbd.md or a locked decision in research/docs/strategy.md
(Section 6, D1 to D5). Anything only suspected is marked [?] and kept in an
"Under question" list, not in the main structure. Anything explicitly cut
from MVP scope gets no entity and no screen.

Job shorthand (from research/docs/jtbd.md):
- J-MAIN: see all recurring charges clearly in one calm view (fused J1+J2 of strategy.md)
- J1: activate without anxiety, the trust job (trust before bank)
- J2: identify and cancel unused subscriptions, the cut job
- J3: understand what a charge actually is, the clarity job
- J4: stay ahead of surprises, the alert job
- J5: track subscriptions without sharing bank data, the privacy job
- E1: feel competent, not judged
- E2: the small win, the cancel-and-save pride moment
- E3: feel safe and in control of data
- S1: share the discovery (privacy-safe)
- D1 to D5: locked founder decisions in strategy.md Section 6

---

## Entities

The core objects a person deals with to close their jobs. Screens only
display entities, and entities grow out of jobs. This inventory is built
from research/docs/personas.md, research/docs/jtbd.md, and
research/docs/research.md. It is deliberately not built from a
competitor's menu.

### 1. Subscription (central entity)

- **Made of:** display name, real merchant name and logo, amount, billing
  frequency (monthly / quarterly / yearly / custom), next billing date,
  category, status (active / paused / trial / cancelled), source
  (bank-detected / added from preset / added custom), linked account.
- **Job that produces it:** J-MAIN (see all recurring charges in one calm
  view). The real merchant name and logo fields exist because of J3
  (understand what a charge is, replacing "SPOTIFYAB STOCKHOLM" with
  "Spotify Premium", master-research M3).
- **Connects to:** Account (detected from or charged to), Alert (alerts
  fire on a subscription), Cancellation (a subscription can be cancelled),
  Charge (its billing instances), Snapshot (aggregated into count and total).

### 2. Account (data source or connection)

- **Made of:** type (bank connection via Plaid, or a manual/private
  source), institution name, connection status (connected / syncing /
  error / needs reauth), last sync time, count of subscriptions detected.
- **Job that produces it:** J1 (activate without anxiety, the bank path)
  and J5 (track without sharing bank data, where the "source" is a manual
  source rather than a bank). Build decision D5 (US first with Plaid;
  TrueLayer for EU designed in but built later).
- **Connects to:** Subscription (subscriptions belong to a source), User
  (a user has one or more sources).
- **Note:** the privacy path is a manual source, not a bank connection
  (D2). Free allows unlimited bank connections (no cap); Pro's value is
  depth, not connection count (product decision, July 2026; D3 gates on
  history, trends, and advanced alerts, never on the core visibility).

### 3. Preset (service template)

- **Made of:** service name, logo, typical price, default billing
  frequency, category.
- **Job that produces it:** J5 (the privacy path) via founder decision D2,
  which locks a launch preset library of 400+ services so manual entry is
  low effort.
- **Connects to:** Subscription (a manually added subscription is
  instantiated from a preset), the Add Subscription screen.
- **Note:** D2 makes preset library quality a launch requirement, not a
  nice-to-have.

### 4. Alert

- **Made of:** type (price change and payment failed are free; trial
  ending, unusual charge, and duplicate are Pro per D3), related
  subscription, plain-language message (active voice, master-research M1),
  timestamp, read / unread, suggested next action.
- **Job that produces it:** J4 (stay ahead of financial surprises).
- **Connects to:** Subscription (an alert references a subscription),
  Charge (a payment-failure alert references a failed charge).

### 5. Charge (billing instance / payment record)

- **Made of:** date, amount, related subscription, status (scheduled /
  paid / failed).
- **Job that produces it:** J4 (a payment that failed or a price that
  changed references a specific charge) and the history and trends depth
  (D3, a Pro feature). At the free level only the next and last charge and
  any failure surface; the full timeline is Pro.
- **Connects to:** Subscription (a charge belongs to a subscription),
  Alert (a failed charge triggers an alert), the History and Trends screen.

### 6. Cancellation

- **Made of:** related subscription, method (basic instruction, meaning a
  link plus a step description, is free; the full step-by-step guide plus
  direct cancel link is Pro, per D3), progress status (not started / in
  progress / confirmed cancelled), money saved (monthly and yearly).
- **Job that produces it:** J2 (identify and cancel unused subscriptions)
  and E2 (the small win, the money saved).
- **Connects to:** Subscription (cancels a subscription), Snapshot (a
  cancel win can seed a shareable card).
- **Note:** D3 keeps basic cancel instruction free. Only cancel depth is
  paid, because the cancel moment is a trust moment, not an upsell moment.

### 7. Snapshot (shareable card)

- **Made of:** subscription count, monthly total, an optional recent cancel
  win, and deliberately no bank data or account numbers.
- **Job that produces it:** S1 (share the discovery) and E2 (the pride
  moment).
- **Connects to:** the Subscription collection (an aggregate), Cancellation
  (a win can seed a snapshot).
- **Note:** whether sharing actually goes viral is a hypothesis
  [? master-research H2 and jtbd.md S1], but the privacy-safe card itself
  is a designed object the product must build.

### 8. User and data controls

- **Made of:** minimal identity (Ravi wants no account required to try
  [? assumption from personas.md Ravi trust triggers]), activation path
  (bank or privacy), plan reference, notification preferences, plain-language
  data-access explanation (master-research M2), one-tap data deletion control.
- **Job that produces it:** E3 (feel safe and in control of data) and J1
  (trust).
- **Connects to:** Account, Subscription (a user owns them), Plan.

### 9. Plan (Tendd Pro tier)

- **Made of:** tier (Free / Pro monthly / Pro yearly / lifetime), price
  ($7.99/mo, $69/yr, lifetime price TBD [? D4 hypothesis $99-139]), status,
  renewal date.
- **Job that produces it:** a business rule, not a user job directly.
  Traces to founder decisions D3 (the free vs paid split) and D4 (pricing).
- **Connects to:** User, and every Pro-gated feature (History and Trends,
  advanced alerts, full cancel guides, export).

---

## Entities Under Question

These are not in the main structure. They get no entity and no screen in
this MVP concept.

- **Household / shared subscription view** - JH1 [? hypothesis] in jtbd.md,
  Segment C in strategy.md, explicitly out of MVP scope. The business-model
  paid bullet mentions a "multi-account household view", but the underlying
  job is deferred, so no household entity is modelled here. Note: connecting
  more than one of a single user's own bank accounts is in scope (see
  Account); sharing across two people is not.
- **Gmail scan source and AI screenshot import source** - [? v2]. Deferred
  by D2 until user testing confirms they are trusted more than bank
  connection. Not launch entities.
- **AI assistant / conversational query** - JH2 [? hypothesis], explicitly
  cut in jtbd.md and ux-patterns.md (adds cognitive load, the opposite of
  the differentiator).
- **Budget envelopes, spending goals, credit score, investment tracking,
  bill negotiation** - explicitly cut in jtbd.md Part 5 and CLAUDE.md out of
  scope. No entities.

### Note on a scope conflict surfaced while building this inventory (resolved)

While building this inventory, CLAUDE.md's free tier still said "up to 10
tracked subscriptions" (and "connect up to 2 bank accounts"), which conflicted
with locked decision D3 (strategy.md, June 14 2026): free includes full
visibility with unlimited tracked subscriptions and connections, limited by
depth and history and never by the core relief experience. This concept
followed D3: the free tier is unlimited on subscription and connection count
and gated only on history, trends, advanced alerts, cancel depth, and export.
The conflict was resolved in the CJM Step 11 living-docs update (commit
0dac829): the caps were removed from CLAUDE.md and the free tier aligned to D3,
so the brief and this concept now agree.

---

## Screens

Derived from the entities above and from what each person is trying to do,
not from any competitor's structure. Every screen names the job it serves in
parentheses. A screen with no job would be tagged [ORPHAN]; there are none
here (verified against the coverage matrix in the Traceability section).

Persona need is marked per screen:
- **[E]** Emma, the primary persona (anxious, bank-willing). Her core path
  is marked **[PRIMARY PATH]**.
- **[R]** Ravi, secondary (privacy-first, manual path).
- **[C]** Claudia, secondary (motivated cutter, cancels fast).

Empty, error, and loading are states of a screen, not screens, so they do
not appear here. They appear in the flows (ia/docs/flows.md) and the
critique.

```
Onboarding and Activation  (one-time chain, then never seen again)
- Welcome / Value Intro                 (J1: show value before asking for data)   [E][R][C]  MVP
- Activation Path Choice                (J1 + J5: two paths, equal weight, D2)     [E][R]     MVP
  - Connect Bank                        (J1 bank path; D5 Plaid US first)          [E][C]     MVP
  - Add Subscription (manual + presets) (J5 privacy path; D2 400+ presets)         [R]        MVP  (also reused in-app by all)
- Guided Reveal                         (J-MAIN: the aha moment; gradual, D1)      [E]        MVP  [PRIMARY PATH]

Core  (the steady-state product)
- Home / Subscription List              (J-MAIN + E1: calm list, count, total)     [E][R][C]  MVP  [PRIMARY PATH]
  - Subscription Detail                 (J3 decode a charge + J4 its alerts)       [E][R][C]  MVP

Stay Ahead
- Alerts / Activity                     (J4: price change, payment failed)         [E][C]     MVP

Cut and Celebrate
- Cancel Guide                          (J2: identify and cancel; basic free, D3)  [C][R][E]  MVP
  - Cancel Win Moment                   (E2: the small win, money saved)           [C][E]     MVP
    - Share Snapshot                    (S1: privacy-safe share card)              [E][C]     LATER

Depth  (Pro, gated by D3)
- History and Trends                    (J-MAIN over time; Pro gate, D3)           [E][C]     LATER
- Upgrade / Tendd Pro                   (D3 split + D4 price: the paywall)          [E][R][C] LATER

Account and Trust
- Connections / Accounts                (J1 + J5: manage sources, reauth; D5)      [E][R]     MVP
- Data and Privacy                      (E3: plain-language data use, delete)      [R][E]     MVP
- Settings / Profile                    (E3: plan, notification preferences)       [E][R][C]  MVP
```

### Scope: MVP or LATER on every screen

The rule: a screen is **MVP** when the To-Be journey breaks without it or when an
MVP backlog item (B1 to B7 in research/docs/cjm-to-be.md) cannot be delivered
without it. Everything else is **LATER**. LATER screens stay on the map, because
the map shows the product whole; the tag decides what the detail layer specifies
first and what the wireframes and the color pass take in the first round.

**Estimate: 13 MVP, 3 LATER.**

| Screen | Scope | Traced to |
|---|---|---|
| Welcome / Value Intro | MVP | B1 value before the bank |
| Activation Path Choice | MVP | B2 two visible paths (D2) |
| Connect Bank | MVP | B3 read-only trust line (D5) |
| Add Subscription | MVP | L6, which is MVP for the product as a whole (D2) |
| Guided Reveal | MVP | B5 the gradual reveal (D1) |
| Home / Subscription List | MVP | B6 the calm list and the total |
| Subscription Detail | MVP | B4 and B6 what this charge is |
| Alerts / Activity | MVP | B7 basic alerts, free (D3) |
| Cancel Guide | MVP | Basic cancel is free by D3 |
| Cancel Win Moment | MVP | Boundary call, see below |
| Share Snapshot | LATER | L4 referral, hangs on S1, a `[?]` job |
| History and Trends | LATER | L3 Pro depth (D3) |
| Upgrade / Tendd Pro | LATER | L3 revenue gate |
| Connections / Accounts | MVP | Reauthorization is part of the trust path (E3, D5) |
| Data and Privacy | MVP | E3 and B3: trust is the activation gate |
| Settings / Profile | MVP | E3 plan and notification control, minimal |

**Two boundary calls, named rather than hidden.** *Cancel Win Moment* is not in
the B1 to B7 backlog, because that backlog covers Emma crossed with J-MAIN only
(a Lite CJM pass). It is kept MVP because cancelling is free by D3 and Flow C
would otherwise end nowhere, which is the dead end class the critique exists to
catch. *Upgrade / Tendd Pro* is LATER because every surface that leads to it
(History and Trends, advanced alerts, the full cancel guides) is LATER: a paywall
with no gated surface in front of it has nothing to gate.

### Cross-check against the chosen UX pattern

The pattern locked in research/docs/ux-patterns.md is **Pattern C (Guided Reveal)
for onboarding plus Pattern A (Automated Dashboard) for return sessions**. The map
realizes it literally: Guided Reveal is a screen of its own in the activation
chain, and Home / Subscription List is the dashboard every later session opens on.

The known break of Pattern A (an empty dashboard before trust is earned) is
answered by two screens that exist for exactly that reason: Welcome / Value Intro
shows the value before any data is asked for, and Activation Path Choice offers the
manual path at equal weight. No screen on the map works against the pattern.

### Second cut: every entity has a screen

The first cut groups screens by intent, which catches holes in the person's path.
This one goes by the objects in the Entities section, which catches holes in the
subject matter.

| Entity | Where it is seen or acted on |
|---|---|
| Subscription | Home (list), Subscription Detail, Add Subscription, Guided Reveal |
| Account (source or connection) | Connect Bank, Connections / Accounts |
| Preset (service template) | Add Subscription |
| Alert | Alerts / Activity, Subscription Detail |
| Charge (billing instance) | Subscription Detail, Alerts / Activity |
| Cancellation | Cancel Guide, Cancel Win Moment |
| Snapshot | Share Snapshot |
| User and data controls | Data and Privacy, Settings / Profile |
| Plan (Pro tier) | Upgrade / Tendd Pro, Settings / Profile |

No entity is left without a screen, and no screen was added to serve an entity
that no job produces.

### Node map (detail layer)

The concept above expands into numbered nodes. `X` is the cluster, `Y` the step
inside it; states and dialogs are nodes of their own, not footnotes, because each
of them is a page in the prototype and a state in the code. GROUP is the value
`ia/_nav.js` uses to place the chip in the hub: `global` elements frame every
screen, `pages` are the screens themselves. SCOPE is inherited from the concept
map above and is not re-derived here; a state inherits the scope of its screen.

**Cluster 0, global chrome** (group `global`, specified in
`ia/docs/pages/navigation.md`; the reusable sections are specified in the cluster
that owns them and referenced by name everywhere else)

| Node | Name | Type | Includes | Scope | Specified in |
|---|---|---|---|---|---|
| 0.1 | App Header (GC1) | section | brand, title, one action; states onboarding / signed-in / no-account-yet | MVP | navigation.md |
| 0.2 | Global Tab Bar (GC2) | section | four destinations (Home, Alerts, Save, You); states default / hidden / new-on-alerts | MVP | navigation.md |
| 0.3 | Recurring Summary Strip (GC3) | section | count, monthly total, context line, trust line | MVP | core.md |
| 0.4 | Subscription List Item (GC4) | section | logo, name, amount, next date, status tag | MVP | core.md |
| 0.5 | Alert Banner (GC5) | section | what changed, one action | MVP | alerts.md |
| 0.6 | Data Source and Trust Indicator (GC6) | section | source of the figure, read-only statement | MVP | account.md |
| 0.7 | Plan Chip (GC7) | section | Free or Pro, entry to the gate | LATER | pro.md |

**Cluster 1, Onboarding and Activation** (group `pages`)

| Node | Name | Type | Transitions | Persona / job | Scope |
|---|---|---|---|---|---|
| 1.1 | Welcome / Value Intro | page (public landing) | -> 1.2 | all / J1 | MVP |
| 1.2 | Activation Path Choice | page | -> 1.3, -> 1.4 | E, R / J1 + J5 | MVP |
| 1.3 | Connect Bank | page + dialog | -> 1.5, -> 1.4 (fallback) | E, C / J1 | MVP |
| 1.3.1 | Connection error | state (dialog) | -> 1.3 retry, -> 1.4 | E / J1 | MVP |
| 1.3.2 | Syncing your bank | state (loading) | -> 1.5, -> 1.3.1 | E / J1 | MVP |
| 1.3.3 | Connected, nothing found | state (empty) | -> 1.4 | E / J1 | MVP |
| 1.3.4 | Came back without connecting | state | -> 1.2, -> 1.4 | E / J1 | MVP |
| 1.4 | Add Subscription | page | -> 1.5, loops to itself | R, all / J5 | MVP |
| 1.4.1 | Preset library loading | state (loading) | -> 1.4 | R / J5 | MVP |
| 1.4.2 | Presets unavailable | state (error) | -> 1.4 manual entry | R / J5 | MVP |
| 1.4.3 | No preset matches | state (empty) | -> 1.4 manual entry | R / J5 | MVP |
| 1.5 | Guided Reveal | page (3 internal steps) | -> 2.6 | E / J-MAIN | MVP |
| 1.5.1 | Nothing to reveal yet | state (empty) | -> 1.4 | E, R / J-MAIN | MVP |

**1.3.4 added 2026-08-04.** Plaid Link returns four outcomes, not three: connected,
cancelled, failed, and connected-with-nothing-found (`plaid.com/docs/link`, read while
building `blocks.md` type B). The map had the last three and not the cancelled one, so a
person who opens the bank screen and backs out had nowhere specified to land. The category
designs only the happy path; that is exactly the gap this node closes.

**Cluster 2, Core** (group `pages`)

| Node | Name | Type | Transitions | Persona / job | Scope |
|---|---|---|---|---|---|
| 2.6 | Home / Subscription List | page | -> 2.7, -> 3.8, -> 1.4, -> 4.9 | all / J-MAIN + E1 | MVP |
| 2.6.1 | Empty list | state (empty) | -> 1.3, -> 1.4 | all / J-MAIN | MVP |
| 2.6.2 | Refreshing | state (loading) | -> 2.6 | all / J-MAIN | MVP |
| 2.6.3 | Sync failed, last known list | state (error) | -> 2.6 retry, -> 6.14 | all / J-MAIN | MVP |
| 2.6.4 | Save focus | state (role) | -> 4.9 | C, E / J2 | MVP |
| 2.7 | Subscription Detail | page | -> 4.9, -> 5.12, -> 3.8 | all / J3 + J4 | MVP |
| 2.7.1 | Unrecognized charge | state (empty) | -> 2.7 named | all / J3 | MVP |
| 2.7.2 | Price change | state (domain) | -> 4.9, -> 2.7 keep | E, C / J4 | MVP |
| 2.7.3 | Payment failure | state (domain) | -> next step card | E / J4 | MVP |
| 2.7.4 | Loading detail | state (loading) | -> 2.7 | all / J3 | MVP |
| 2.7.5 | Could not load | state (error) | -> 2.6, retry | all / J3 | MVP |

**Cluster 3, Stay Ahead** (group `pages`)

| Node | Name | Type | Transitions | Persona / job | Scope |
|---|---|---|---|---|---|
| 3.8 | Alerts / Activity | page | -> 2.7, -> 4.9, -> 5.13 | E, C / J4 | MVP |
| 3.8.1 | All clear | state (empty) | -> 2.6 | E / J4 | MVP |
| 3.8.2 | Loading alerts | state (loading) | -> 3.8 | E / J4 | MVP |
| 3.8.3 | Could not load alerts | state (error) | -> 3.8 retry, -> 2.6 | E / J4 | MVP |

**Cluster 4, Cut and Celebrate** (group `pages`)

| Node | Name | Type | Transitions | Persona / job | Scope |
|---|---|---|---|---|---|
| 4.9 | Cancel Guide | page + dialog | -> 4.10, -> 5.13 (full guide) | C, R, E / J2 | MVP |
| 4.9.1 | No guide for this service | state (empty) | -> generic steps, request a guide | C / J2 | MVP |
| 4.9.2 | Could not cancel | state (error) | -> in-app next step | C / J2 | MVP |
| 4.10 | Cancel Win Moment | page | -> 4.11, -> 2.6 | C, E / E2 | MVP |
| 4.11 | Share Snapshot | page | -> 4.10, -> 2.6 | E, C / S1 | LATER |
| 4.11.1 | Generating the card | state (loading) | -> 4.11 | E / S1 | LATER |
| 4.11.2 | Share failed | state (error) | -> 4.11 retry | E / S1 | LATER |

**Cluster 5, Depth (Pro)** (group `pages`)

| Node | Name | Type | Transitions | Persona / job | Scope |
|---|---|---|---|---|---|
| 5.12 | History and Trends | page | -> 5.13 gate, -> 2.7 | E, C / J-MAIN over time | LATER |
| 5.12.1 | Still gathering history | state (empty) | -> 2.6 | E / J-MAIN | LATER |
| 5.12.2 | Loading history | state (loading) | -> 5.12 | E / J-MAIN | LATER |
| 5.12.3 | Could not load trends | state (error) | -> 5.12 retry, -> 2.6 | E / J-MAIN | LATER |
| 5.12.4 | Trends behind the Pro gate | state (locked) | -> 5.13, -> 2.6 | E / D3 | LATER |
| 5.13 | Upgrade / Tendd Pro | page (gate) | -> back to the gated surface | all / D3 + D4 | LATER |
| 5.13.1 | Setting up your plan | state (processing) | -> the originating gate | all / D4 | LATER |
| 5.13.2 | Payment did not go through | state (error) | -> 5.13 retry | all / D4 | LATER |

**5.12.3, 5.13.1 and 5.13.2 added 2026-08-04.** `pages/pro.md` named these three
states and gave them no numbers, so the two screens that decide whether money moves
had unnumbered failure paths. A LATER screen is numbered like any other, the way
4.11.1 and 4.11.2 already are: the second round builds to the map, it does not
re-derive it. Success at 5.13 is deliberately not a state here, because it is a
return to the gate the person came from and not a screen.

**5.12.4 added 2026-08-05, at the second wireframe round.** The locked view stood in
the node file as an unnumbered variant, and an unnumbered variant gets no page. That
left the map unable to draw the only version of this screen the canonical person can
see: Emma is on Free everywhere else in the product, and node 5.13 states that the
person arrived at the upgrade screen **from Your trends**, which requires a gate on
this screen for that sentence to be true. Numbering it makes the chain walkable
(5.12.4 -> 5.13 -> back to 5.12.4) and keeps D3 visible, since this is the screen
where the paywall legitimately sits. The unlocked view stays the base page: it is what
the screen is for, and the three other states are drawn on a paid plan, which node
5.12 requires for 5.12.1 in particular.

**Cluster 6, Account and Trust** (group `pages`)

| Node | Name | Type | Transitions | Persona / job | Scope |
|---|---|---|---|---|---|
| 6.14 | Connections / Accounts | page + dialog | -> 1.3, -> 1.4, -> 6.15 | E, R / J1 + J5 | MVP |
| 6.14.1 | No sources yet | state (empty) | -> 1.3, -> 1.4 | R / J5 | MVP |
| 6.14.2 | Source needs attention | state (error) | -> 1.3 reauthorize | E / J1 | MVP |
| 6.14.3 | Add a source, the chooser | dialog | -> 1.3 in-app, -> 1.4 in-app | R / J5 | MVP |
| 6.15 | Data and Privacy | page + dialog | -> 6.16, -> 6.15.1 | R, E / E3 | MVP |
| 6.15.1 | Delete everything, confirmation | dialog | -> 6.15 (kept), -> signed out (deleted) | R / E3 | MVP |
| 6.16 | Settings / Profile | page | -> 6.14, -> 6.15, -> 5.13 | all / E3 | MVP |

**6.14.3 and 6.15.1 added 2026-08-04, and a numbering collision resolved with them.**
`pages/account.md` numbered the add-a-source chooser 6.14.1, which this map already
gave to the empty state, so the same number named two different things and the delete
confirmation had no number at all. Both dialogs are real (FLAG 2 is resolved through
the chooser, and deletion is a two-door dialog by `blocks.md` type G), so both are
numbered here, where node numbers are owned. `pages/account.md` was corrected to match.

**Cluster 9, System** (group `global`, specified in `ia/docs/pages/system.md`)

| Node | Name | Type | Scope | Note |
|---|---|---|---|---|
| 9.1 | Not found | state (in-app) | MVP | Not a standalone page: an in-app state with a way back |
| 9.2 | Server error | page (minimal template) | MVP | Standalone, outside the app shell |
| 9.3 | Maintenance | page | LATER | Not built at MVP; sync issues are per source |
| 9.4 | Consent banner | dialog | LATER | Conditional on region, `[?]` |
| 9.5 | Toasts | section | MVP | Lightweight feedback, no page of its own |

**Count: 23 specified nodes (7 global, 16 screens) plus 5 system nodes, with 30
state and dialog nodes hanging off the screens.** Of the 16 screens, 13 are MVP.
The SEO engine (`ia/docs/pages/seo.md`) is a cross-cutting specification, not a
node with a screen.

Notes on structure:

- **Add Subscription is reused.** It is the privacy path in onboarding (Ravi)
  and the in-app "+" for anyone adding a subscription by hand later. Same
  screen, two entry points. It is not duplicated.
- **Guided Reveal is one screen, not three.** D1 makes it gradual (count,
  then categories with logos, then total paired with an action). Those are
  sequential steps of one reveal experience, not separate screens and not
  states. The flow in ia/docs/flows.md shows the internal sequence.
- **Emma's primary path is short:** Welcome, Path Choice, Connect Bank,
  Guided Reveal, then Home. In every session after the first, she lands
  straight on Home. Depth is measured in the Navigation section.
- **Cancel depth nests under the cut job.** Cancel Guide leads to the Cancel
  Win Moment, which offers Share Snapshot. This chain is where E2 and S1 live.
- **No screen for E1 by itself.** E1 (feel competent, not judged) is a tone
  requirement met by Home, Guided Reveal, and Cancel Win rather than a
  standalone screen. The coverage matrix records where it is served.

---

## Navigation

Mobile-first. The global navigation is a bottom tab bar (thumb reach on a
phone), scaling to a left rail on desktop. It is deliberately small so the
product stays calm (design principle: one thing at a time).

### 1. Global navigation (4 items)

Each item is an entry point into one main job cluster, chosen because a
distinct job lives behind it, not because a category is conventional.

| Tab | Opens | Job cluster behind it | Why it earns a global slot |
|-----|-------|----------------------|----------------------------|
| **Home** | Home / Subscription List | J-MAIN (see all recurring charges calmly) + E1 | The reason the product exists. It must be reachable in zero taps, so it is the default tab. |
| **Alerts** | Alerts / Activity | J4 (stay ahead of surprises) | This is also the return engine. Research BP4: without an external hook this segment does not come back, so the surprise surface is promoted to a permanent home. |
| **Save** | Cancel hub (Cancel Guide + cancel candidates + wins) | J2 (cut) + E2 (the win) | The emotional peak and the upgrade trigger live here. It is Claudia's primary job and Emma's secondary one, so it gets a calm, dedicated door instead of being buried in a menu. |
| **You** | Settings / Profile (into Data and Privacy, Connections, Plan) | E3 (feel safe, control data) + J1 (trust) | Trust is ongoing, not just onboarding. Ravi needs one-tap data deletion and connection control to always be findable. |

History and Trends does NOT get a global tab: it is Pro-gated (D3), and a
mostly-locked tab would irritate free users and break the calm promise. It
is reached contextually from Home. Upgrade is not a tab either: it appears
at the gate, in context, not as a standing invitation to pay.

### 2. Depth to the main job

**Main job (stated explicitly):** J-MAIN, "see all recurring charges clearly
in one calm view." For Emma (primary persona) it is delivered by the Guided
Reveal in the first session and by Home / Subscription List in every session
after.

First session (activation), counting taps from the first screen:

```
Welcome  --tap 1-->  Activation Path Choice  --tap 2-->  Connect Bank  --tap 3-->  Guided Reveal (sees the list)
```

That is **3 taps** to the main job. The bank authorization and sync happen
inside the Connect Bank step and then the reveal plays automatically, so no
extra tap is added. 3 is at the ceiling, not over it.

Every session after the first: the app opens on **Home**, so the main job is
at **0 to 1 tap**. The steady state is where Emma lives, and it is effectively
zero depth.

No restructure needed: both the first-session path (3) and the steady-state
path (0 to 1) are within the three-tap limit.

### 3. Global, contextual, and deep

| Visibility | Meaning | Screens |
|-----------|---------|---------|
| **Global** (always visible) | The 4 tab bar destinations | Home / Subscription List, Alerts / Activity, Save (Cancel hub), You (Settings / Profile) |
| **Contextual** (appears inside a flow) | Reached by acting on something, not from the tab bar | Guided Reveal, Subscription Detail, Add Subscription, Cancel Guide, Cancel Win Moment, Share Snapshot, History and Trends, Upgrade / Tendd Pro |
| **Deep** (rare, one-time or infrequent actions) | Two or more levels in, or seen once | Welcome, Activation Path Choice, Connect Bank (onboarding chain), Connections / Accounts, Data and Privacy, plan and billing management inside Settings, export inside History and Trends |

The activation chain (Path Choice, Connect Bank, Add Subscription, Guided
Reveal) shows no tab bar; it is a one-time linear chain that ends by handing
the user to Home with the tab bar switched on. Welcome / Value Intro (updated
2026-07-04) sits in front of the chain as the public marketing landing (its own
full-width top nav and footer, not the app tab bar); its "Get started" CTA is
tap 1 into Path Choice, so the 3-tap count above is unchanged.

---

## Traceability

Coverage matrix. Rows are the **functional** jobs from research/docs/jtbd.md
(main and related). Columns are every screen from the Screens section. A
checkmark means the screen genuinely participates in closing that job. A gate
that only unlocks a job does not count as closing it.

Emotional and social jobs (E1, E2, E3, S1) are deliberately **not** rows here.
They are not closed by a screen: "feel competent, not judged" is a quality the
product carries across screens, and asking "where does the person do this?"
produces either a stretched checkmark or an invented screen. They get their own
table below, which names the mechanism instead.

Column key:
Wel = Welcome / Value Intro, Pth = Activation Path Choice, Bnk = Connect
Bank, Add = Add Subscription, Rev = Guided Reveal, Hom = Home / Subscription
List, Det = Subscription Detail, Alr = Alerts / Activity, Gde = Cancel Guide,
Win = Cancel Win Moment, Shr = Share Snapshot, His = History and Trends,
Upg = Upgrade / Tendd Pro, Con = Connections / Accounts, Prv = Data and
Privacy, Set = Settings / Profile.

| Job | Wel | Pth | Bnk | Add | Rev | Hom | Det | Alr | Gde | Win | Shr | His | Upg | Con | Prv | Set |
|-----|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| J-MAIN see all charges calmly |  |  |  |  | ✓ | ✓ |  |  |  |  |  | ✓ |  |  |  |  |
| J1 activate without anxiety | ✓ | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  | ✓ | ✓ |  |
| J2 identify and cancel unused |  |  |  |  |  | ✓ | ✓ |  | ✓ | ✓ |  | ✓ |  |  |  |  |
| J3 understand what a charge is |  |  |  |  | ✓ | ✓ | ✓ |  |  |  |  |  |  |  |  |  |
| J4 stay ahead of surprises |  |  |  |  |  |  | ✓ | ✓ |  |  |  |  |  |  |  |  |
| J5 track without sharing bank |  | ✓ |  | ✓ |  |  |  |  |  |  |  |  |  | ✓ |  |  |
| **SCOPE** | MVP | MVP | MVP | MVP | MVP | MVP | MVP | MVP | MVP | MVP | LATER | LATER | LATER | MVP | MVP | MVP |

**Estimate: 13 MVP screens, 3 LATER.** The detail layer specifies the MVP subset
first, the wireframes draw it first, and the color pass takes it first; the three
LATER screens go in a named second round, not into a silent backlog. No screen is
tagged MVP without a checkmark above it except the two named in the orphan list
below, and both carry a reason there.

### Emotional and social jobs: what supports them

Not screens, mechanisms. This table has two named readers: the detail layer takes
the "emotional support" line of a node card from it, and Voice takes it as the
order for tone.

| Job | Mechanism (not a screen) | Where it lives | What backs it |
|---|---|---|---|
| E1 feel competent, not judged | Money is framed as "what you signed up for", never as spending or waste; no score, no red, no advice; the biggest thing on screen is one number the person can act on | Guided Reveal, Home summary strip, Cancel Win, and the voice rules of every state | personas.md O7 and the PMC finding that avoidance is triggered by a threat to a positive self-image (jtbd.md 6A); design principle 3 |
| E2 the small win | The saved amount is stated as a specific number with a next step, then the product stops talking; the moment gets its own screen rather than a toast | Cancel Win Moment, and the savings line in the Home save-focus state | jtbd.md E2 and the Claudia quote ("saved me $400 in 15 minutes"); competitors.md gap G4 |
| E3 feel safe, control data | Read-only is stated in the same breath as the bank request ("Read-only. Tendd cannot move your money."), the source of every figure is shown, and disconnect and delete are reachable in one tap, not buried | Connect Bank trust line, Connections / Accounts, Data and Privacy, Settings | personas.md Ravi; benchmark.md (Apple Card); D5; design principle 4 |
| S1 share the discovery | A snapshot card that carries the count and the total and no bank data, so sharing never leaks a statement | Share Snapshot, entered from Cancel Win | jtbd.md S1, marked `[?]`: the virality is a hypothesis, which is why the screen is LATER |

### Orphan screens (columns with no checkmark)

- **Upgrade / Tendd Pro.** No job in jtbd.md closes on this screen. It exists
  because of business decisions D3 (the free vs paid split) and D4 (pricing),
  not because a user job needs it. A paywall gates jobs, it does not close
  them, so it earns no checkmark.
  - **Resolution: retain, justified by decision, and attach rather than
    promote.** It is kept because D3 and D4 require a place to convert, but it
    is implemented as a contextual gate reached from the Pro-gated surfaces
    (History and Trends, advanced alerts in Alerts / Activity, the full guide
    in Cancel Guide), not as a global navigation destination. This is already
    how the Navigation section classifies it. It is the one screen that
    traces to a decision instead of a job, and that is recorded here openly
    rather than hidden with a stretched checkmark.

- **Settings / Profile.** It lost its only checkmark when the emotional jobs
  moved out of the matrix (it used to carry E3). No functional job closes here.
  - **Resolution: retain, justified by mechanism and by D4.** E3 needs a place
    where the plan, the notifications and the account live and can be changed;
    the table above names that mechanism, and D4 (a paid plan exists) requires
    somewhere to see and manage it. It stays out of the matrix honestly rather
    than collecting a stretched checkmark.

- **Share Snapshot.** Also lost its checkmarks with the emotional and social
  jobs; it exists for S1, which jtbd.md itself marks `[?]`.
  - **Resolution: retain, tagged LATER.** The screen is built and stays on the
    map, but the hypothesis behind it is untested, which is exactly why it is not
    in the MVP round.

No other screen is orphaned. Every other column has at least one checkmark.

### Orphan jobs (rows with no checkmark)

None. All ten jobs (J-MAIN, J1 to J5, E1 to E3, S1) are served by at least
one screen. The jobs deliberately excluded from MVP (JH1 household, JH2 AI
assistant) are not rows here, because they are not MVP jobs.

### Outcome

Zero orphan jobs. One orphan screen (Upgrade / Tendd Pro), which is retained
by design as a decision-justified gate rather than removed, since removing it
would break the business model. Every MVP job has a home, and every screen
except the deliberate paywall gate closes at least one job.

---

## Critique

A strict pass over the Screens, Navigation, and ia/docs/flows.md across four
defect classes. Defects are listed first, most dangerous class first (dead
ends, then missing states, then excess depth, then orphans). The proposed
fixes are proposals, not applied here: this is structure only, so they become
requirements for Prompt 2 (per-screen content and states). All four fixes for
dead ends and missing states resolve to states and copy on existing screens,
so the 16-screen inventory does not change.

### 1. Dead ends (most dangerous)

| Where | What (defect) | Proposed fix (for Prompt 2) |
|-------|---------------|------------------------------|
| Flow A, Connect Bank | If the user declines both retry and the manual fallback after a connection error, they leave with no list at all. | Make the manual path the always-available floor: the connection-error state keeps a persistent "Add them yourself instead" action, so there is never a version of the error with only a dead exit. |
| Flow B, Add Subscription | Ravi abandons manual entry half-done (the manual-entry trap) and leaves with a partial, low-value list. | Save partial progress and re-hook: persist what was added, let the reveal run on a partial list ("here is what you have so far"), and use the return notification (BP4) to pull him back to finish. |
| Flow C, Cancel Guide | A blocked external cancellation (retention dark pattern) leaves the user stuck with no in-app next step. | Add a "could not cancel" state to Cancel Guide with a next step (alternative steps, escalation tips, or mark-to-retry) so the person always has a move inside the app. |
| Flow D, Subscription Detail | A failed-payment alert whose fix lives at the bank or merchant ends at "informed" with nothing to do. | Add a plain-language next-step card ("update your card with the merchant" or "no action needed, it will retry on DATE") so the alert never terminates without a next step. |

### 2. Missing states (also dangerous)

| Where | What (defect) | Proposed fix (for Prompt 2) |
|-------|---------------|------------------------------|
| Home / Subscription List | Only the populated happy path is defined. Empty (zero or all cancelled), loading (refreshing sync), and sync-error are not yet specified. | Define three states: a calm empty state that invites adding or connecting, a non-alarming loading state, and a sync-error state that still shows the last known list. |
| Subscription Detail | No state for when enrichment fails and the merchant name stays cryptic. This directly threatens J3 (understand what a charge is). | Define an "unrecognized charge" state with a plain-language prompt to name or categorize it, so a failed logo or name lookup does not re-create the exact pain J3 exists to remove. |
| History and Trends | Only the Pro-locked state is implied. A paid user with too little history yet (under 3 months) has no defined empty state. | Define a "still gathering your history" empty state distinct from the Pro upsell, so early paid users are not shown a blank chart. |
| Cancel Guide | No state for a service that has no guide yet. | Define a "no guide for this one yet" state with the generic basic instruction and a request-a-guide action. |
| Share Snapshot | Generating the card and a share failure are not specified. | Define a loading state while the card renders and an error state if the share sheet or image fails. |

### 3. Excess depth

| Where | What | Proposed fix |
|-------|------|--------------|
| Flow A, first-session J-MAIN | The main job sits at exactly 3 taps in the first session (Welcome, Path Choice, Connect Bank, Guided Reveal). This is at the ceiling, not over it, so it is not a violation. | Watch item, not a defect: do not add any step to the onboarding chain. Any new interstitial would push the main job to 4 taps and break the limit. Guard this in wireframes. |

No frequent job for the primary persona exceeds three taps. Steady-state
J-MAIN is 0 to 1 tap (opens on Home). J4 from a notification is about 2 taps.
J2 for Claudia is 2 taps to the guide.

### 4. Orphans (cross-checked against the coverage matrix)

| Where | What | Proposed fix |
|-------|------|--------------|
| Upgrade / Tendd Pro | Orphan screen: no job closes on it. It traces to decisions D3 and D4, not to a job. | Retain as a contextual gate over the Pro surfaces (History and Trends, advanced alerts, full cancel guide), not a navigation destination. Already reflected in Navigation and Traceability. |
| Jobs | No orphan jobs. Every job in jtbd.md is served by at least one screen. | None needed. |

### Summary of the critique

The structure has no orphan jobs and one intentional orphan screen (the
paywall gate). The real work it surfaces is at the edges: four dead ends and
five missing-state gaps, all of which are state and copy problems on existing
screens rather than missing screens. They are handed to Prompt 2 as
requirements. The one structural watch item is that first-session depth to
the main job is exactly at the three-tap limit and must not grow.

---

# Full Information Architecture - Index

Prompt 2 (full) built a page-level library: one markdown file per cluster
plus global chrome, system pages, and SEO, each rendered to its own HTML
page. Those files are the single source of truth for page-level detail. This
sitemap stays the index and the skeleton (Entities, Screens, Navigation,
Traceability, Critique above). The earlier draft "Global Components", "Page
Cards", and "Breakpoint Deltas" sections were migrated into the library and
removed from here so there is one source of truth, not two.

## Page-level library

| Node | Source | Covers | Rendered |
|------|--------|--------|----------|
| 0 | [pages/navigation.md](pages/navigation.md) | GC1 App Header, GC2 Tab Bar, persona x plan state matrix, desktop rail delta, no-footer note | retired; see [globals.html](../globals.html) |
| 1 | [pages/onboarding.md](pages/onboarding.md) | Welcome, Path Choice, Connect Bank, Add Subscription, Guided Reveal (screens 1 to 5) | retired; one page per node |
| 2 | [pages/core.md](pages/core.md) | Home, Subscription Detail (6 to 7); owns GC3, GC4; FLAG 1 resolution | retired; one page per node |
| 3 | [pages/alerts.md](pages/alerts.md) | Alerts / Activity (8); owns GC5 | retired; one page per node |
| 4 | [pages/cancel.md](pages/cancel.md) | Cancel Guide, Cancel Win, Share Snapshot (9 to 11) | retired; one page per node |
| 5 | [pages/pro.md](pages/pro.md) | History and Trends, Upgrade (12 to 13); owns GC7 | retired; one page per node |
| 6 | [pages/account.md](pages/account.md) | Connections, Data and Privacy, Settings (14 to 16); owns GC6; FLAG 2 resolution | retired; one page per node |
| 8 | [pages/seo.md](pages/seo.md) | SEO engine, scoped to the public Welcome screen | [seo.html](../seo.html) |
| 9 | [pages/system.md](pages/system.md) | Not found, server error, maintenance, consent [?], toasts | [system.html](../system.html) |

**Retired 2026-08-05.** The seven cluster renders are gone: their per-node sections
became one page per node in `ia/`, their seven global-element sections became
`ia/globals.html`, and their nine Accessibility sections became `docs/accessibility.md`
and `ia/accessibility.html`. The markdown files stay as the base-layer record they were
written as, and every node page names the section of them it supersedes. The two that
still own their nodes, `seo.html` and `system.html`, were not touched.

Reusable Sections: all seven are now specified in one place,
[docs/nodes/globals.md](nodes/globals.md), rendered at
[ia/globals.html](../globals.html). They were scattered across five cluster
files (GC1 and GC2 in navigation.md, GC3 and GC4 in core.md, GC5 in
alerts.md, GC6 in account.md, GC7 in pro.md), which is how GC7 came to carry
two opposite rules for the same lock.

## Flags from Prompt 2 (resolved)

- **FLAG 1** (the Save tab had no dedicated landing screen): resolved in
  pages/core.md. The Save tab lands on a save-focus state of Home, not a new
  screen.
- **FLAG 2** (Connect Bank and Add Subscription reused outside onboarding):
  resolved in pages/account.md. One "Add a source" action re-enters both
  in-app through a chooser.

## Locked decisions (this layer)

- Save tab is a save-focus state of Home; no new screen (core.md).
- Add a source re-enters onboarding screens in-app; no duplicates (account.md).
- Equal-weight, no-preselect Path Choice; persistent manual fallback on the bank path (onboarding.md).
- Guided Reveal stays one screen, three steps, total never alone (onboarding.md).
- Cancel is free-first, never walled; could-not-cancel has an in-app next step (cancel.md).
- Free is gated by depth and history, never by subscription count or connection count (pro.md, D3).
- Upgrade is a context-only gate that shows its origin; never a nav item (pro.md).
- Active-voice alert copy; quiet new-dot, no red counts (alerts.md, navigation.md).
- One-tap, single-confirm, delete-everything data deletion (account.md).
- No footer on app screens; the Welcome landing (1.1) is the one exception, a marketing footer (navigation.md, onboarding.md, updated 2026-07-04).
- No full-app maintenance page at MVP; sync issues are per-source (system.md).
- Welcome / Value Intro is the public marketing landing / front door in-repo (full-width, own nav + footer); its CTAs enter the chain at Path Choice (onboarding.md, seo.md, updated 2026-07-04).
- Desktop: bottom tab bar becomes a left rail with the header folded into its top; Home and Subscription Detail are a two-pane master-detail (navigation.md, core.md, realized in Wireframes 2026-07-04).

## Open items [?] (operational or data, not IA)

Gathered from every page-level file's Open section:
- Auth model for try-with-no-account vs returning sign in (onboarding.md, account.md, navigation.md).
- Minimum subscription count for the Guided Reveal aha (onboarding.md).
- How cancel candidates and potential savings are computed (core.md).
- Cancellation verification via the next billing cycle (cancel.md).
- Cancel-guide content coverage, the no-guide-yet long tail (cancel.md).
- Lifetime price, $99 to $139 (pro.md, D4).
- Whether data export lives in Data and Privacy or in Pro (account.md, pro.md).
- Consent banner, pending the PostHog cookie decision and the deferred EU review (system.md).
- Real SEO search volumes and Core Web Vitals targets (seo.md).
- Alerts new-dot vs count, and pricing anchor order, pending usability testing (alerts.md, pro.md).
