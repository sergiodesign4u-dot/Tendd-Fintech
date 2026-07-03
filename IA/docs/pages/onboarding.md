# Page-level IA - Onboarding and Activation (node 1)

- **Node:** 1 Onboarding and Activation. The one-time linear chain that takes a first-time person from "what is this" to their first calm view of their recurring spend, by either the bank path or the private path. It is one artifact because it is a single uninterrupted flow with no tab bar, one entrance and one exit (Home).
- **Type:** Flow (the chain), Pages (Welcome, Path Choice, Connect Bank, Add Subscription, Guided Reveal), Dialogs (connection error, preset error), States (loading, empty, error, partial-saved).
- **Canonical visual:** `IA/onboarding.html`. This markdown is the source of truth, the HTML is the reviewable render.
- **Job:** Closes J1 (activate without anxiety, the trust job) and opens J-MAIN (see all recurring charges calmly). Primary persona Emma on the bank path (1.3), Ravi on the private path (1.4). Claudia moves through it fast on the bank path.
- **Related:** exits to node 2 Core (Home, 2.6). Trust content reuses GC6 Data Source and Trust Indicator (specified in account.md, node 6). Reveal reuses GC3 Recurring Summary Strip and GC4 Subscription List Item (specified in core.md, node 2). Global chrome is deliberately absent here (GC2 tab bar is hidden across the whole chain, see navigation.md).

---

## Decisions (recommendations, flagged for review)

- **The chain shows no tab bar and no back-to-app escape.** Onboarding is linear. GC2 is hidden the whole way (confirmed in Breakpoint Deltas and navigation.md). Reason: one thing at a time (design principle 2), and the person has no app to go back to yet.
- **Path Choice (1.2) gives the two paths exactly equal visual weight, and neither is preselected.** D2 requires equal weight. Preselecting the bank path would quietly re-create the "bank first" pattern every competitor uses and Emma closes (personas.md P3). Reason: the privacy path is a primary path, not a fallback.
- **The manual fallback ("Add them yourself instead") is present on Connect Bank itself and persists on its error state.** This is the concrete fix for the Flow A dead end (Critique). Reason: there must never be a version of the bank path with only a dead exit.
- **The Guided Reveal is a single screen with three internal steps (count, categories, total with action), advanced by the person, not three separate screens.** D1 fixes the order. Reason: it is one emotional experience; splitting it into routed screens would add taps and let the total arrive alone.
- **A person can leave onboarding with a partial list and it is saved.** Fix for the Flow B manual-entry-trap dead end. Reason: Ravi has abandoned manual entry twice in research (personas.md P1); losing his progress guarantees he never returns.
- **[? draft copy] All copy below is a specific first draft, not final wording.** It is concrete on purpose so Wireframes has a real string to place, but it is not yet copy-locked.

---

## Flow / block order

Chain order matches IA/docs/flows.md Flow A (bank) and Flow B (private):

```
1.1 Welcome  ->  1.2 Activation Path Choice  ->  [ 1.3 Connect Bank  OR  1.4 Add Subscription ]  ->  1.5 Guided Reveal  ->  (exit) 2.6 Home
```

### 1.1 Welcome / Value Intro  (Page, Prompt 1 screen 1)

Serves J1 (value before the ask). Uses GC1 App Header in its minimal onboarding variant (brand only, no back, no tab bar).

Block order, top to bottom:
1. (P) Brand mark, "Tendd". [? draft copy]
2. (P) Headline: "See what you are paying for. Calmly." [? draft copy]
3. (P) Subhead: "Tendd shows every subscription and recurring charge in one calm view. No judgment, no spreadsheets." [? draft copy]
4. (P) Sample calm preview: a non-interactive demo of GC3 (count and total) over 3 to 4 sample GC4 rows with real-looking logos, shown before any ask. Traces master-research H1 (show value before bank).
5. (P) Primary CTA button: "Show me how it works" -> 1.2. [? draft copy]
6. (S) Trust line under the CTA: "No bank connection needed to start." Links to Data and Privacy (6.15). Traces D2, master-research M2.
7. (S) Returning-user affordance: "Already using Tendd? Sign in." [? the sign-in / no-account-to-try auth model is unresolved, see Open].

### 1.2 Activation Path Choice  (Page, screen 2)

Serves J1 and J5. Decision D2 (two equal paths). Uses GC1 (onboarding variant).

Block order:
1. (P) Title: "How do you want to start?" [? draft copy]
2. (P) Option A card, "Connect your bank": support line "Fast and automatic. Read-only, we can never move your money." Traces J1, D5, master-research M2. -> 1.3
3. (P) Option B card, "Add them yourself": support line "Private. Pick from 400+ services, nothing leaves your control." Traces J5, D2. -> 1.4
4. (S) Reassurance under both: "Either way, you land on the same calm view."
5. (S) Link: "What does each option access?" -> Data and Privacy (6.15).

Both option cards are identical in size and visual weight (D2). Order (bank first, private second) is presentation only and must not imply preference.

### 1.3 Connect Bank  (Page + Dialog, screen 3)

Serves J1. Decisions D5 (Plaid, US first), D2 (fallback). Uses GC1 (onboarding variant), GC6 Data Source and Trust Indicator.

Block order:
1. (P) Title: "Connect your bank." [? draft copy]
2. (P) Trust statement (GC6 content): "Here is exactly what we do. We read your recurring charges, read-only. We can never move your money. Powered by Plaid." Traces master-research M2, personas.md P3.
3. (P) Primary action: "Choose your bank" -> launches Plaid Link. Traces D5.
4. (P) Persistent fallback: "Add them yourself instead" -> 1.4. Present here and on the error dialog. Critique fix.
5. (S) Region note: "Available for US banks today. More regions soon." [? EU via TrueLayer is deferred, D5.]

Sub-node 1.3.1 Connection error (Dialog): see States.

### 1.4 Add Subscription (manual + presets)  (Page, screen 4)

Serves J5. Decision D2 (400+ presets at launch). Uses GC1 (onboarding variant in the chain; GC1 plus GC2 when reopened in-app from Connections, see account.md FLAG 2 resolution). Entities Subscription, Preset.

Block order:
1. (P) Title: "Add a subscription." [? draft copy]
2. (P) Preset search field, placeholder "Search 400+ services" (searches the Preset library). Traces D2.
3. (P) Preset results list: each result is logo, service name, and a prefilled typical price. Selecting one opens block 4 prefilled. Traces Preset entity.
4. (P) Subscription form, prefilled from the preset, all editable: fields Name, Amount, Billing frequency (Monthly, Every 4 weeks, Quarterly, Yearly, Custom), Next payment date, Category. Traces Subscription entity.
5. (P) Primary action pair: "Add subscription" then "Add another". Loop matches Flow B.
6. (S) Custom fallback below results: "Can't find it? Add it manually." -> opens block 4 empty. Flow B not-in-presets branch.
7. (S) Running progress: "3 added so far. Your list is saved." Anti-abandon, Critique fix.
8. (S) Finish action: "See my list" -> 1.5 (enabled once at least one is added).

### 1.5 Guided Reveal  (Page with a 3-step internal sequence, screen 5)

Serves J-MAIN. Decision D1 (gradual, total paired with action). Uses GC3 Recurring Summary Strip, GC4 Subscription List Item. Do not reorder the three steps.

Internal sequence (person advances each step, single screen):
1. (P) Step 1, count first: "You are subscribed to 14 things." No total yet. Traces D1.
2. (P) Step 2, categories with logos: the 14 grouped into recognizable categories (Streaming, Software, Fitness, ...) each with GC4 logos. Traces D1, J3.
3. (P) Step 3, total paired with an action on the same view: "That is $247 a month. Here are 2 you might not be using." The total never appears alone. Traces D1.
4. (P) The paired action: "Review these 2" (primary) and "See my full list" (secondary) -> 2.6 Home. Traces D1.
5. (S) Judgment-free tone line held throughout: framed as "what you have signed up for", never "what you spent". Traces E1, master-research self-image finding.

---

## States

| Node | State | What it reads like | Trigger |
|------|-------|--------------------|---------|
| 1.1 | default | Full value intro with sample preview | First open |
| 1.1 | returning-user | Same, sign-in affordance emphasized | Known device or prior session [?] |
| 1.2 | default | Two equal path cards | Reached from Welcome |
| 1.3 | default | Trust statement plus "Choose your bank" | Bank path chosen |
| 1.3 | loading | "Syncing your bank. This takes a few seconds." calm, no spinner-anxiety | Plaid link succeeded, pulling charges (Flow A) |
| 1.3.1 | error (Dialog) | "We could not connect to your bank. This is usually temporary." Actions: "Try again" and "Add them yourself instead" | Connection or sync failure (Flow A). Active voice, M1. Fallback persists here (Critique). |
| 1.3 | empty | "We connected, but did not find recurring charges yet. You can add them yourself." -> 1.4 | Clean connect, zero detected (Flow A) |
| 1.4 | loading | "Loading services..." while the preset library loads | Entering 1.4 (Flow B) |
| 1.4 | error (preset) | "We could not load the service list. You can still add subscriptions by hand." -> custom entry | Preset library unavailable (Flow B). Fallback is manual custom entry. |
| 1.4 | empty (search) | "No match for 'X'. Add it manually." | Preset search returns nothing |
| 1.4 | partial-saved | "Your list is saved. Add more any time." | Person leaves mid-entry (Critique dead-end fix) |
| 1.5 | default | The 3-step gradual reveal | Arriving with a populated list |
| 1.5 | empty | "Nothing to reveal yet. Add a subscription to see your list." -> 1.4 | Reached with zero items (Flow B) |
| 1.5 | low-count | The reveal still runs but adapts its copy for 1 to 2 items | Very small list. [? the minimum count that still creates the aha is an open research question, personas.md open list, master-research open questions] |
| 1.5 | loading | "Putting your list together..." | Assembling the reveal |

---

## SEO

Welcome (1.1) is the only node in this cluster that can be reachable before sign-in, so it is the only indexable surface here. Everything from Activation Path Choice (1.2) onward is behind the activation flow and is `noindex`, private, not a content surface.

Welcome SEO (drafted against the engine in seo.md):
- **Title:** "Tendd - See and control your subscriptions, calmly" [? draft copy]
- **Meta description:** "Tendd shows every subscription and recurring charge in one calm view. No bank connection needed to start. Built for people who find money apps stressful." [? draft copy]
- **H1:** "See what you are paying for. Calmly." (matches the on-screen headline)
- **Primary intent:** informational plus commercial ("subscription tracker", "see all my subscriptions"). Keyword model and volumes live in seo.md, volumes marked [?] pending real tool data.
- **Structured data:** Organization and WebSite (see seo.md). No Product schema (Tendd is a SaaS app, not a retail product).
- **Technical:** canonical to the public marketing URL if one exists outside this app repo; mobile-first; Core Web Vitals budget in seo.md.

Full keyword model, templates, and checklist: see `IA/docs/pages/seo.md`.

---

## Accessibility

- The chain is fully keyboard operable: each screen has one clear primary action reachable by Tab, and focus moves to the new screen's H1 or first control on transition.
- Path Choice (1.2): the two options are a labeled radio-style pair or two buttons, both reachable by keyboard, each with an accessible name that includes its support line ("Connect your bank, fast and automatic, read-only").
- Connect Bank launches Plaid Link, which manages its own focus trap; on return, focus goes to the loading state's status region (`aria-live="polite"`) so the "syncing" and result are announced.
- The connection error dialog (1.3.1) is a modal: focus trapped inside, Escape maps to the safe non-destructive choice ("Add them yourself instead"), not to a silent dismiss that would strand the person.
- Guided Reveal (1.5): each step advance moves focus and is announced via `aria-live`; the count, categories, and total are text, not image-only, so a screen reader reads the numbers.
- All tap targets at least 44 by 44 px. Icon-only controls (none critical here) carry `aria-label`.

---

## Mobile (Tendd is mobile-first responsive web scaling to desktop)

Cross-checked against Breakpoint Deltas in sitemap.md. This cluster has NO structural delta: the whole chain is single-column, full-screen, one action at a time on every breakpoint. On desktop it is the same single column centered with more surrounding space, not a reflow. The one carried constraint: the Guided Reveal (1.5) must stay gradual (count, then categories, then total with action) at every breakpoint, and must not collapse into a single all-at-once view where desktop space would tempt it. This is a content-order rule, not a structural delta.

---

## Locked (draft, 2026-07-03) / Open

- **Locked (draft, 2026-07-03):**
  - Chain order and the five nodes, matching Prompt 1 and Flows A and B.
  - Equal-weight, no-preselect Path Choice (D2).
  - Persistent manual fallback on Connect Bank and its error state.
  - Guided Reveal as one screen, three steps, D1 order, total never alone.
  - Partial list is saved; a person can leave and return.
  - First-draft copy for every visible string.
- **Still [?] (operational or data, not IA):**
  - The auth model for "try with no account" (Ravi) versus returning-user sign in. Resolving input: a product decision on whether onboarding creates an account lazily or up front.
  - The minimum subscription count that still makes the Guided Reveal feel like an aha. Resolving input: the prototype test in strategy.md section 5.
  - Real SEO search volumes and keyword difficulty. Resolving input: a keyword tool (see seo.md).
