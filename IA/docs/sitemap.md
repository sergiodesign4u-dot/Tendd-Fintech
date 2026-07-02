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
