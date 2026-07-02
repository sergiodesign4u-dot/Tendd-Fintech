# Sitemap - Tendd

Phase IA, Prompt 1: Concept Architecture. This is structure only: what
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
research/docs/master-research.md. It is deliberately not built from a
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
  (D2). Free allows up to 2 bank connections [? assumption carried from
  CLAUDE.md free tier, not restated in D3]; Pro allows unlimited.

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

### Note on a scope conflict surfaced while building this inventory

CLAUDE.md free tier says "up to 10 tracked subscriptions", but locked
decision D3 (strategy.md, June 14 2026) says free includes full visibility
with unlimited tracked subscriptions, limited by depth and history and never
by the core relief experience. strategy.md is the current source of truth
and D3 is the later locked decision, so this concept follows D3: the free
tier is unlimited on subscription count and gated only on history, trends,
advanced alerts, cancel depth, and export. This is a product-decision
conflict, not a missing research fact, so it is recorded here rather than
appended to master-research.md.

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
not appear here. They appear in the flows (IA/docs/flows.md) and the
critique.

```
Onboarding and Activation  (one-time chain, then never seen again)
- Welcome / Value Intro                 (J1: show value before asking for data)   [E][R][C]
- Activation Path Choice                (J1 + J5: two paths, equal weight, D2)     [E][R]
  - Connect Bank                        (J1 bank path; D5 Plaid US first)          [E][C]
  - Add Subscription (manual + presets) (J5 privacy path; D2 400+ presets)         [R]  (also reused in-app by all)
- Guided Reveal                         (J-MAIN: the aha moment; gradual, D1)      [E] [PRIMARY PATH]

Core  (the steady-state product)
- Home / Subscription List              (J-MAIN + E1: calm list, count, total)     [E][R][C] [PRIMARY PATH]
  - Subscription Detail                 (J3 decode a charge + J4 its alerts)       [E][R][C]

Stay Ahead
- Alerts / Activity                     (J4: price change, payment failed)         [E][C]

Cut and Celebrate
- Cancel Guide                          (J2: identify and cancel; basic free, D3)  [C][R][E]
  - Cancel Win Moment                   (E2: the small win, money saved)           [C][E]
    - Share Snapshot                    (S1: privacy-safe share card)              [E][C]

Depth  (Pro, gated by D3)
- History and Trends                    (J-MAIN over time; Pro gate, D3)           [E][C]
- Upgrade / Tendd Pro                   (D3 split + D4 price: the paywall)          [E][R][C]

Account and Trust
- Connections / Accounts                (J1 + J5: manage sources, reauth; D5)      [E][R]
- Data and Privacy                      (E3: plain-language data use, delete)      [R][E]
- Settings / Profile                    (E3: plan, notification preferences)       [E][R][C]
```

Notes on structure:

- **Add Subscription is reused.** It is the privacy path in onboarding (Ravi)
  and the in-app "+" for anyone adding a subscription by hand later. Same
  screen, two entry points. It is not duplicated.
- **Guided Reveal is one screen, not three.** D1 makes it gradual (count,
  then categories with logos, then total paired with an action). Those are
  sequential steps of one reveal experience, not separate screens and not
  states. The flow in IA/docs/flows.md shows the internal sequence.
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

Onboarding (Welcome, Path Choice, Connect Bank, Add Subscription, Guided
Reveal) shows no tab bar; it is a one-time linear chain that ends by handing
the user to Home with the tab bar switched on.

---

## Traceability

Coverage matrix. Rows are every job from research/docs/jtbd.md (main,
related, and emotional/social). Columns are every screen from the Screens
section. A checkmark means the screen genuinely participates in closing that
job. A gate that only unlocks a job does not count as closing it.

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
| E1 feel competent, not judged | ✓ |  |  |  | ✓ | ✓ |  |  |  | ✓ |  |  |  |  |  |  |
| E2 the small win |  |  |  |  |  |  |  |  |  | ✓ | ✓ |  |  |  |  |  |
| E3 feel safe, control data |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ | ✓ | ✓ |
| S1 share the discovery |  |  |  |  |  |  |  |  |  | ✓ | ✓ |  |  |  |  |  |

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

A strict pass over the Screens, Navigation, and IA/docs/flows.md across four
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
---

# Prompt 2: Detailed Architecture

The sections below add the detail layer on top of the locked Prompt 1
skeleton (Entities, Screens, Navigation, Traceability, Critique above). The
skeleton is not changed here: no screens added, removed, or reordered, no
navigation change, no flow redraw. Where Prompt 2 found something that looks
wrong in the skeleton, it is recorded under "Flags from Prompt 2" (in the
Page Cards section) and left for Wireframes, not silently fixed.

Every content block below traces to an entity (Prompt 1 Entities), a job
(research/docs/jtbd.md), or a locked decision (research/docs/strategy.md
Section 6). Genuine unknowns are marked [?] as real signals for Wireframes.

---

## Global Components

Elements that repeat across more than one screen. Documented once here; the
page cards reference them by name and do not redescribe them. This is the
product (the Tendd app), not the documentation site.

### GC1. App Header

- **Blocks (in order):** back or menu control; screen title; one contextual
  action slot (for example add, share, or edit).
- **Desktop vs mobile:** content is identical. On mobile it is a top bar; on
  desktop it merges into the top of the left rail (see GC2). This is a
  structural delta, listed in Breakpoint Deltas.
- **Cross-cutting states:** signed-in (full header), onboarding (title and
  progress only, no tab bar, see GC2), and no-account-yet [? Ravi wants to
  try with no account, personas.md; the exact auth model is unresolved].
- **Traces to:** Navigation section (global chrome); auth-state axis from
  personas.md (Ravi, no account required to try).

### GC2. Global Tab Bar (primary navigation)

- **Blocks (in order):** Home, Alerts, Save, You. Each is one job cluster
  (see Navigation section).
- **Desktop vs mobile:** mobile is a bottom tab bar (thumb reach); desktop is
  a left rail with the same four destinations. Same content, different
  structure. Listed in Breakpoint Deltas.
- **Cross-cutting states:** visible in steady state; hidden across the whole
  onboarding chain (Welcome, Activation Path Choice, Connect Bank, Add
  Subscription, Guided Reveal), which is a linear flow.
- **Traces to:** Navigation section (the 4 tabs and their job clusters).

### GC3. Recurring Summary Strip

- **Blocks (in order):** subscription count; monthly total (the largest
  number on screen); optional short context line ("what you have signed up
  for", not "what you spent").
- **Desktop vs mobile:** identical content.
- **Cross-cutting states:** populated; loading (numbers resolving); empty
  (zero subscriptions, shows an invite, not a zero).
- **Traces to:** J-MAIN; design principle "the most important number is the
  biggest thing on screen" (CLAUDE.md); D1 (total is paired with meaning, not
  shown as a bare shock); framing from master-research self-image finding.
  Aggregates the Subscription entity.

### GC4. Subscription List Item

- **Blocks (in order):** merchant logo; real merchant name; amount and
  frequency; next billing date; status tag (active, trial, paused,
  cancelled).
- **Desktop vs mobile:** same blocks; mobile stacks, desktop may show them in
  one row. Layout only, not a structural delta.
- **Cross-cutting states:** normal; unrecognized (enrichment failed, name
  still cryptic, invites naming, see Subscription Detail); cancelled (muted).
- **Traces to:** the Subscription entity; J-MAIN; J3 (real name and logo,
  master-research M3).

### GC5. Alert Item

- **Blocks (in order):** alert type; plain-language, active-voice message
  ("we could not take this payment", not "payment declined"); related
  subscription; one suggested next action.
- **Desktop vs mobile:** identical content. Appears inline as a banner on
  Home and as a row in Alerts / Activity.
- **Cross-cutting states:** free type (price change, payment failed); Pro type
  (trial ending, unusual, duplicate), which renders with a Pro gate for free
  users.
- **Traces to:** the Alert entity; J4; master-research M1 (active voice);
  D3 (free vs Pro alert split).

### GC6. Data Source and Trust Indicator

- **Blocks (in order):** current source (bank connection, or private/manual);
  read-only and "cannot move money" reassurance; link to the full "what we
  read" explanation (Data and Privacy).
- **Desktop vs mobile:** identical content.
- **Cross-cutting states:** bank-connected; private/manual; needs-reauth
  (error).
- **Traces to:** the Account entity and User and data controls entity; J1,
  E3; master-research M2 (name the fear); D2 (bank vs manual); D5 (Plaid).

### GC7. Pro Gate and Plan Chip

- **Blocks (in order):** current plan indicator (Free or Pro); at a gated
  feature, a short "what unlocks" line and an upgrade action into Upgrade /
  Tendd Pro.
- **Desktop vs mobile:** identical content.
- **Cross-cutting states:** free (shows upgrade affordance at gates); Pro
  (shows Pro badge, no gate).
- **Traces to:** the Plan entity; D3 (the free vs paid split); D4 (pricing).
  This is the surface that carries the one decision-justified screen
  (Upgrade / Tendd Pro) into context.

---

## Page Cards

One card per locked screen, in sitemap tree order. Each block is tagged
primary (P) or secondary (S). States are cross-checked against
IA/docs/flows.md and the Critique. Global components are referenced by their
GC number and not redescribed.

### Flags from Prompt 2

Issues in the Prompt 1 skeleton found while writing these cards. Recorded,
not fixed here, per the locked-skeleton rule.

- **FLAG 1: the "Save" tab has no dedicated landing screen.** Navigation maps
  the Save tab to a "Cancel hub (Cancel Guide plus cancel candidates plus
  wins)", but the 16-screen list has no single screen by that name. The
  nearest surfaces are Home (which carries the "N you might not use" cancel
  candidates) and Cancel Guide (per subscription). For Wireframes: either the
  Save tab lands on Home filtered to cancel candidates, or a Save/Review
  landing screen is added in a later structural pass. Not resolved here
  because the screen list is locked. Cards below treat the Save tab as
  landing on the Home cancel-candidates view.
- **FLAG 2 (minor): Connect Bank and Add Subscription are reused outside
  onboarding.** Both are listed under the onboarding chain, but Connections /
  Accounts needs to reopen them to add a source later. This matches the
  existing "Add Subscription is reused" note in the Screens section and is not
  a defect, just made explicit for Wireframes.

---

### 1. Welcome / Value Intro

- **Jobs:** J1 (show value before asking for data).
- **Entities:** none stored yet; may show sample Subscription data.
- **Global components:** GC1 (onboarding variant, no GC2).
- **Content structure:**
  1. (P) Product value line, calm and plain ("See what you are paying for, calmly.") - J1, CLAUDE.md tone.
  2. (P) Sample calm preview: a demo count and total with sample subscriptions, shown before any ask - J1, master-research H1.
  3. (P) Primary CTA into Activation Path Choice ("Show me how it works").
  4. (S) Trust reassurance line ("No bank connection needed to start.") linking to Data and Privacy - D2, master-research M2.
  5. (S) Returning-user sign in [? auth model unresolved, personas.md Ravi no-account-to-try].
- **States:** default; returning-user variant (skip to Home). No data-dependent empty or error state.

### 2. Activation Path Choice

- **Jobs:** J1, J5. Decision D2.
- **Entities:** Account (the source type being chosen).
- **Global components:** GC1 (onboarding variant).
- **Content structure:**
  1. (P) Prompt ("How do you want to start?").
  2. (P) Option A, Connect your bank: fast, automatic, "read-only, we cannot move money" - J1, D5, master-research M2.
  3. (P) Option B, Add them yourself: private, no bank, "pick from 400+ services" - J5, D2. Equal visual weight to Option A is required by D2.
  4. (S) Reassurance that both paths reach the same calm view - master-research Activation.
  5. (S) Link to what each option accesses (Data and Privacy) - E3.
- **States:** default only. No loading, empty, or error (it is a choice). D2 equal-weight requirement carried as a wireframe constraint.

### 3. Connect Bank

- **Jobs:** J1. Decisions D5, D2 (fallback).
- **Entities:** Account.
- **Global components:** GC1 (onboarding variant), GC6.
- **Content structure:**
  1. (P) Title ("Connect your bank").
  2. (P) Trust statement: exactly what we read, read-only, cannot move money, powered by Plaid - J1, master-research M2, personas.md P3.
  3. (P) Bank picker and Plaid Link launch - D5.
  4. (P) Persistent fallback action "Add them yourself instead", always visible including on the error state - Critique dead-end fix for Flow A.
  5. (S) Region note: US first; EU [? deferred, D5].
- **States:** default; loading ("syncing your bank", Flow A); error ("could not connect", with retry and the manual fallback, Flow A); success (into Guided Reveal).

### 4. Add Subscription (manual + presets)

- **Jobs:** J5. Decision D2.
- **Entities:** Subscription, Preset.
- **Global components:** GC1 (onboarding variant when in onboarding; GC1 plus GC2 when reused in-app).
- **Content structure:**
  1. (P) Title ("Add a subscription").
  2. (P) Preset search field over the 400+ library - D2.
  3. (P) Preset results, each showing logo, name, and a prefilled typical price - Preset entity.
  4. (P) Subscription form prefilled from the preset (name, amount, frequency, next date, category), editable - Subscription entity.
  5. (P) Add action and "Add another" loop - Flow B.
  6. (S) "Cannot find it? Add it manually" custom entry - Flow B (not-in-presets branch).
  7. (S) Running count of what has been added, and progress is saved, so a half-done list is not lost - Critique dead-end fix for Flow B.
- **States:** default; loading (preset library, Flow B); error (presets unavailable, falls back to manual custom entry, Flow B); empty (no search match, offer custom entry); partial-progress-saved (Critique fix); success (added).

### 5. Guided Reveal

- **Jobs:** J-MAIN. Decision D1.
- **Entities:** Subscription (aggregate), Charge (next dates).
- **Global components:** GC3, GC4.
- **Content structure (order is the D1 gradual sequence, do not reorder):**
  1. (P) Count reveal first ("You are subscribed to 14 things.") - D1.
  2. (P) Categories with logos next, grouped and recognizable - D1, J3.
  3. (P) Monthly total last, on the same screen as an action, never as a standalone shock ("that is $247 a month, here are 2 to look at") - D1.
  4. (P) The paired action itself (review the flagged few, or see the full list) - D1.
  5. (S) Judgment-free tone line, framed as "what you have signed up for" - E1, master-research self-image finding.
- **States:** default (populated); empty ("nothing to reveal yet", Flow B); loading (assembling the reveal); low-count [? the minimum number of subscriptions that still creates the aha is an open research question, personas.md open list and master-research open questions; Wireframes needs a fallback for 1 to 2 subscriptions].

### 6. Home / Subscription List

- **Jobs:** J-MAIN, E1. (Also the Save tab cancel-candidates view, see Flag 1.)
- **Entities:** Subscription, Charge (next date), Alert (banner).
- **Global components:** GC1, GC2, GC3, GC4, GC5 (banner), GC6, GC7.
- **Content structure:**
  1. (P) Recurring Summary Strip: count and monthly total - GC3, J-MAIN.
  2. (S) Active alert banner if any, plain language - GC5, J4.
  3. (P) Subscription list grouped by category, each a Subscription List Item - GC4, J-MAIN, J3.
  4. (S) "N you might not use" cancel-candidates nudge (this is also the Save tab view) - D1 paired action carried into steady state, J2 entry, Flag 1.
  5. (S) Add subscription action, reusing Add Subscription - J5.
  6. (S) Link into History and Trends, Pro-gated - GC7, D3.
- **States:** success (populated); empty (zero or all cancelled, a calm invite to add or connect, not a bare zero); loading (refreshing sync); sync-error (shows the last known list with a gentle note). Empty, loading, and sync-error are Critique fixes.

### 7. Subscription Detail

- **Jobs:** J3, J4. (Also J2 entry.)
- **Entities:** Subscription, Charge, Alert, Cancellation (entry point).
- **Global components:** GC1 (back), GC6, GC7.
- **Content structure:**
  1. (P) Subscription header: real name, logo, amount, frequency - J3, GC4 detail.
  2. (P) Next payment amount and date - Charge, J3/J4.
  3. (S) Category and source (bank or manual) - GC6.
  4. (S) Alerts on this subscription (price change, payment failed) - GC5, J4.
  5. (S) Price history entry, Pro-gated, into History and Trends - GC7, D3.
  6. (P) Cancel action into Cancel Guide - J2.
  7. (P, conditional) Failed-payment next-step card ("update your card with the merchant", or "no action needed, it retries on DATE") - Critique dead-end fix for Flow D.
- **States:** success; unrecognized-charge (enrichment failed, invites naming or categorizing, Critique fix, protects J3); price-change (shows old vs new price); payment-failure (shows the next-step card); loading; error (could not load the detail).

### 8. Alerts / Activity

- **Jobs:** J4.
- **Entities:** Alert, Charge, Subscription.
- **Global components:** GC1, GC2, GC5, GC7.
- **Content structure:**
  1. (P) Title ("Alerts").
  2. (P) Alert list, each an Alert Item with type, plain-language message, related subscription, and one next action - GC5, J4, master-research M1.
  3. (S) Advanced alert types (trial ending, unusual, duplicate) shown Pro-gated for free users - GC7, D3.
- **States:** success (has alerts); empty ("all clear", a calm healthy state, Flow D); loading; error ("could not load alerts", with retry, Flow D).

### 9. Cancel Guide

- **Jobs:** J2. Decision D3.
- **Entities:** Cancellation, Subscription.
- **Global components:** GC1, GC7.
- **Content structure:**
  1. (P) The subscription being cancelled (name, logo).
  2. (P) Basic instruction, always free: a direct link and a step description - D3 (the relief moment is never paywalled).
  3. (S) Full step-by-step guide and direct cancel link, Pro, gated for free users - GC7, D3.
  4. (P) "Mark as cancelled" confirmation into Cancel Win Moment - J2, E2.
  5. (S) "Could not cancel?" help path with alternative steps or retry - Critique dead-end fix for Flow C.
- **States:** success (guide shown); no-guide-yet (generic steps plus a request-a-guide action, Critique fix); could-not-cancel (help path, Flow C error, Critique fix); Pro-locked (full guide gated); loading.

### 10. Cancel Win Moment

- **Jobs:** E2. (Also S1 entry, J2 completion.)
- **Entities:** Cancellation (money saved), Snapshot (seed).
- **Global components:** GC1 (light).
- **Content structure:**
  1. (P) Win statement with specific numbers ("You just freed up $14.99 a month, that is $179.88 a year") - E2, jtbd.md E2.
  2. (S) Running cumulative total saved - E2.
  3. (P) Share action into Share Snapshot - S1.
  4. (S) Continue back to Home.
- **States:** default success only. This screen is reached only on a confirmed cancellation (Flow C), so it has no empty or error state of its own.

### 11. Share Snapshot

- **Jobs:** S1. (Also E2.)
- **Entities:** Snapshot.
- **Global components:** GC1 (light).
- **Content structure:**
  1. (P) Snapshot card preview: subscription count and monthly total, optional recent win, and deliberately no bank data - S1, privacy-safe by design.
  2. (P) Share action into the system share sheet.
  3. (S) Privacy note ("No account numbers or bank data are shared") - E3, S1.
  4. (S) Choose what the card shows [? optional, not required for MVP].
- **States:** default; loading (generating the card, Critique fix); error (render or share failed, Critique fix). Note: whether sharing spreads is a hypothesis [? master-research H2], but the card itself is a real object.

### 12. History and Trends

- **Jobs:** J-MAIN over time. Decision D3.
- **Entities:** Charge, Subscription, Plan.
- **Global components:** GC1, GC3, GC7.
- **Content structure:**
  1. (P) Time-range selector (3, 6, 12 month) - D3.
  2. (P) Spend-over-time chart placeholder - Charge history.
  3. (S) Per-category or per-subscription trend list.
  4. (S) Export action, Pro - D3.
  5. (P) Pro-lock overlay for free users into Upgrade - GC7, D3.
- **States:** success (paid, enough history); Pro-locked (free user, D3); empty ("still gathering your history", a paid user under 3 months, Critique fix, distinct from the Pro lock); loading; error.

### 13. Upgrade / Tendd Pro

- **Jobs:** none. Decision-justified screen (D3, D4). See the Traceability orphan note; not a defect.
- **Entities:** Plan.
- **Global components:** GC1, GC7 (context).
- **Content structure:**
  1. (P) What Pro unlocks: history and trends, advanced alerts, full cancel guides, multi-account, export - D3.
  2. (P) Pricing: $7.99 a month or $69 a year; lifetime option [? price TBD $99 to $139, D4].
  3. (P) Upgrade action.
  4. (S) Positioning line ("Pays for itself with the first subscription you cancel") - D4.
  5. (S) Contextual reason showing which gate the user came from - GC7.
- **States:** default; loading (processing payment); error (payment failed); success (upgraded, returns to the gated feature).

### 14. Connections / Accounts

- **Jobs:** J1, J5. Decision D5.
- **Entities:** Account, Subscription.
- **Global components:** GC1, GC2 (under You), GC6.
- **Content structure:**
  1. (P) Connected sources list, each an Account (bank name or "manual", status, last sync, count detected) - Account entity.
  2. (P) Add a connection or add a manual source, reusing Connect Bank or Add Subscription - Flag 2. Free allows up to 2 bank connections [? assumption from CLAUDE.md]; Pro unlimited.
  3. (S) Reauth action for a needs-reauth source - Account error state.
  4. (S) Remove a connection - E3.
  5. (S) Provider note (Plaid US, TrueLayer EU [? deferred, D5]).
- **States:** success (has sources); empty (none yet, invite to connect or add); needs-reauth (Account error); loading (syncing); error (sync failed).

### 15. Data and Privacy

- **Jobs:** E3, J1.
- **Entities:** User and data controls, Account.
- **Global components:** GC1, GC6.
- **Content structure:**
  1. (P) Plain-language data-access explanation: exactly what we read, read-only, cannot move money, we do not sell your data - E3, jtbd.md E3, master-research M2.
  2. (P) One-tap data deletion - E3, personas.md Ravi.
  3. (S) What each source accesses, one sentence per method (bank vs manual) - D2, personas.md Ravi.
  4. (S) Permission management, built-in settings - E3, personas.md O20.
  5. (S) Data export or download [? overlaps the Pro export in History and Trends, resolve ownership in Wireframes].
- **States:** default; deletion-confirmation (destructive confirm step). No standard empty or error state.

### 16. Settings / Profile

- **Jobs:** E3.
- **Entities:** User and data controls, Plan.
- **Global components:** GC1, GC2 (You).
- **Content structure:**
  1. (P) Account basics, minimal identity [? no-account-to-try model unresolved, personas.md Ravi].
  2. (P) Plan status and manage, linking to Upgrade or billing - Plan, D4.
  3. (P) Notification preferences (which alerts, the weekly email digest) - J4, retention BP4.
  4. (S) Link to Data and Privacy - E3.
  5. (S) Link to Connections / Accounts.
  6. (S) Sign out and help.
- **States:** default; logged-out variant [? tied to the no-account-to-try question]; loading (preferences). No error state required by a flow.

---

## Breakpoint Deltas

Structural differences between mobile and desktop only, meaning the content
structure reorganizes, not just spacing or sizing. Tendd is mobile-first
responsive web scaling to desktop (CLAUDE.md), so most screens have no
structural delta, and that is expected. Only the genuine reorganizations are
listed, so Wireframes does not discover them mid-build. Breakpoints
themselves are set in Wireframes.

| Where | Structural change | Breakpoint |
|-------|-------------------|-----------|
| GC2 Global Tab Bar (all steady-state screens) | Bottom tab bar on mobile becomes a left rail on desktop. Same four destinations, different placement. | To be set in Wireframes |
| GC1 App Header (all steady-state screens) | Top bar on mobile merges into the top of the left rail on desktop. Tied to the GC2 change. | To be set in Wireframes |
| Home / Subscription List plus Subscription Detail | On mobile these are two separate screens (tap a row to open detail). On desktop they may become a two-pane master-detail view (list on the left, detail on the right) rather than a full navigation. | To be set in Wireframes |
| History and Trends | On mobile the chart sits above the trend list. On desktop the trend list may sit beside the chart. A reflow from stacked to side-by-side, not just resizing. | To be set in Wireframes |
| Overlay screens: Add Subscription, Cancel Guide, Upgrade / Tendd Pro, Share Snapshot | Full screen on mobile. On desktop each is a candidate to render as a centered modal or side sheet over the current screen instead of a full page. | To be set in Wireframes |

All other screens (Welcome, Activation Path Choice, Connect Bank, Guided
Reveal, Alerts / Activity, Cancel Win Moment, Connections / Accounts, Data
and Privacy, Settings / Profile) have no structural delta. They change only
in spacing and sizing between mobile and desktop, which belongs to Wireframes
and Concept, not here.

One constraint to carry forward: the Guided Reveal must stay gradual (count,
then categories, then total with an action, per D1) at every breakpoint. Do
not collapse it into a single all-at-once view on desktop where the extra
space would otherwise tempt it. This is a content-order rule, not a
structural delta.
