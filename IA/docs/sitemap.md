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
