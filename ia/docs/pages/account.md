# Page-level IA - Account and Trust (node 6)

- **Node:** 6 Account and Trust. Where a person manages their sources, controls their data, and holds their plan. Trust is ongoing, not just an onboarding moment, so this cluster is the always-findable home for "what does Tendd know about me and how do I change or remove it". One artifact because Connections, Data and Privacy, and Settings are the three faces of the same account-and-trust relationship, reached from the You tab.
- **Type:** Pages (Connections / Accounts, Data and Privacy, Settings / Profile), Dialogs (add-a-source chooser, delete-data confirmation, reauth), Section (GC6 Data Source and Trust Indicator is specified here), States (success, empty, needs-reauth, loading, error, deletion-confirmation).
- **Canonical visual:** `ia/account.html`.
- **Job:** E3 (feel safe and in control of data) across all three; J1 (trust) and J5 (the manual source) on Connections. Primary persona Ravi (data control is his defining ongoing job); Emma needs to know it is possible even if she never uses it.
- **Related:** the You tab (GC2) lands here on Settings; Connections re-enters 1.3 Connect Bank and 1.4 Add Subscription (FLAG 2); plan management routes to 5.13 Upgrade; data explanation is linked from 1.1, 1.2, 1.3. Reuses GC1, GC2 (navigation.md), GC7 (pro.md). GC6 is specified here.

---

## Decisions (recommendations, flagged for review)

- **FLAG 2 resolved: Connections / Accounts (6.14) re-enters onboarding's Connect Bank and Add Subscription through one "Add a source" action, not by duplicating those screens.** Concretely, "Add a source" opens a small chooser (6.14.1) with two options, "Connect a bank" and "Add manually", mirroring the onboarding Path Choice logic. "Connect a bank" reopens 1.3 Connect Bank in its in-app variant (with the tab bar context, returning to 6.14 on success). "Add manually" reopens 1.4 Add Subscription the same way. No new screen is created; the locked screens are reused with an in-app entry point. Recorded as the resolution of FLAG 2.
- **Data deletion is one clearly labeled action reachable in two taps from the You tab, with a single confirm, and it deletes everything.** Traces E3 (one-tap deletion, personas.md Ravi) and O20 (people want built-in controls). Reason: a person must never feel trapped; hiding deletion deep or splitting it into partial toggles reads as reluctance.
- **The data-access explanation uses the "name the fear" pattern: it states plainly what a person is afraid of, then denies it with specifics.** Traces master-research M2. Reason: vague "bank-level security" language is exactly what scares Ravi (personas.md); specifics earn trust.
- **The free connection cap is presented as "up to 2 bank connections on Free" carried from CLAUDE.md, but flagged, because D3 did not restate it.** [? the free connection cap is unresolved between CLAUDE.md (2) and D3 (silent). Resolving input: a product decision.] Reason: do not silently invent a number, but give Wireframes a concrete default to render.
- **[? draft copy] all copy below is a specific first draft.**

---

## Flow / block order

### 6.14 Connections / Accounts  (Page + Dialog, Prompt 1 screen 14)

Uses GC1, GC2, GC6. Entities Account, Subscription.

Block order:
1. (P) Title: "Your sources." [? draft copy]
2. (P) Sources list: each source is a GC6 Data Source and Trust Indicator row showing the bank name or "Added by you", connection status, last sync time, and count of subscriptions from it. Traces the Account entity.
3. (P) Add a source: "Add a source" -> the chooser 6.14.1. Free allows up to 2 bank connections [? cap]; Pro unlimited (GC7). FLAG 2 resolution.
4. (S) Per-source actions: "Reconnect" (needs-reauth), "Remove". Traces E3.
5. (S) Provider note: "US banks connect through Plaid. More regions soon." [? EU via TrueLayer deferred, D5.]

Sub-node 6.14.1 Add-a-source chooser (Dialog): "Connect a bank" -> 1.3 in-app, "Add manually" -> 1.4 in-app. Returns to 6.14 on completion.

### 6.15 Data and Privacy  (Page + Dialog, screen 15)

Uses GC1, GC6. Entities User and data controls, Account.

Block order:
1. (P) Title: "Data and privacy." [? draft copy]
2. (P) Data-access explanation (name-the-fear, M2): "Worried what an app does with your bank data? Here is exactly what we do. We read your recurring charges, read-only. We can never move your money. We do not sell your data." Traces E3, master-research M2.
3. (P) Delete data: "Delete all my data" -> the delete-data confirmation (6.15.1). Traces E3.
4. (S) What each source accesses, one sentence per method: "Bank connection: read-only transaction history via Plaid. Manual: only what you type." Traces D2.
5. (S) Permission management: notification and access toggles. Traces O20.
6. (S) Export your data: "Download your data" [? overlaps the Pro CSV export in 5.12; resolve which owns export in Wireframes].

Sub-node 6.15.1 Delete-data confirmation (Dialog): "This deletes your subscriptions, sources, and account. It cannot be undone." Actions: "Delete everything", "Keep my data".

### 6.16 Settings / Profile  (Page, screen 16)

Uses GC1, GC2. Entities User and data controls, Plan.

Block order:
1. (P) Account basics: name or email [? the no-account-to-try model is unresolved; a person who tried without an account sees "Create an account to save your list"]. See Open.
2. (P) Plan status and manage: "Free" or "Tendd Pro", with "Manage plan" -> 5.13 or billing. Traces the Plan entity, D4.
3. (P) Notification preferences: which alerts to send, and the weekly email digest on or off. Traces J4, retention BP4.
4. (S) Link to Data and Privacy (6.15).
5. (S) Link to Your sources (6.14).
6. (S) Sign out and help.

---

## States

| Node | State | What it reads like | Trigger |
|------|-------|--------------------|---------|
| 6.14 | success | List of sources with status | One or more sources |
| 6.14 | empty | "No sources yet. Connect a bank or add subscriptions yourself." | No sources |
| 6.14 | needs-reauth | A source row shows "Reconnect needed" plus a "Reconnect" action | A connection expired (Account error state) |
| 6.14 | loading | Skeleton source rows | Syncing sources |
| 6.14 | error | "We could not load your sources. Try again." | Load failed |
| 6.14.1 | chooser (Dialog) | "Connect a bank" or "Add manually" | "Add a source" tapped (FLAG 2) |
| 6.15 | default | Explanation plus controls | Opened |
| 6.15.1 | deletion-confirmation (Dialog) | "This cannot be undone." Delete or Keep | "Delete all my data" tapped |
| 6.16 | default | Settings list | Opened via You tab |
| 6.16 | logged-out | "Create an account to save your list" prompt in place of account basics | A no-account trial session [? auth model] |
| 6.16 | loading | Skeleton settings rows | Loading preferences |

### Section GC6 - Data Source and Trust Indicator (specified here, reused by 1.3, 2.6, 2.7)

Block order: (1) current source (bank connection or private/manual), (2) read-only and "cannot move money" reassurance, (3) link to the full "what we read" explanation (6.15). Traces the Account and User-and-data-controls entities, J1, E3, master-research M2, D2, D5. States: bank-connected, private/manual, needs-reauth. Same content on mobile and desktop.

---

## SEO

Private, behind auth. `noindex`, no schema, not a content surface. Account, data, and settings are never crawlable.

---

## Accessibility

- Each source row (GC6) exposes an accessible name with source, status, and count ("Chase, connected, 8 subscriptions"); the "Reconnect" and "Remove" actions are distinct labeled buttons.
- The add-a-source chooser, the delete-data confirmation, and reauth are modals with focus traps; Escape maps to the safe choice ("Keep my data" for deletion), never a silent dismiss.
- The delete-data confirmation states the consequence in text, not by color, and the destructive button is clearly labeled "Delete everything", not just "OK".
- The data-access explanation is plain text, not an image, so a screen reader reads exactly what Tendd accesses.
- Notification toggles are real, labeled switches with state announced.
- Tap targets at least 44 by 44 px.

---

## Mobile (Tendd is mobile-first responsive web scaling to desktop)

Cross-checked against Breakpoint Deltas. No structural delta: all three screens are single-column settings-style lists on every breakpoint, wider with more margin on desktop. GC2 shifts from bottom bar to left rail (navigation.md). The modals (chooser, delete confirmation, reauth) are centered on desktop and full-width sheets on mobile, which is standard responsive behavior, not a structural reflow.

---

## Locked (draft, 2026-07-03) / Open

- **Locked (draft, 2026-07-03):**
  - FLAG 2 resolved: one "Add a source" action re-enters 1.3 and 1.4 in-app via a chooser; no duplicate screens.
  - One-tap-reachable, single-confirm, delete-everything data deletion.
  - Name-the-fear data-access explanation (M2).
  - GC6 specified here as canonical.
  - Free connection cap rendered as 2, flagged pending a product decision.
- **Still [?] (operational or data, not IA):**
  - The free connection cap (CLAUDE.md 2 vs D3 silent). Resolving input: a product decision.
  - The no-account-to-try auth model (shared with onboarding 1.1). Resolving input: a product decision on lazy vs up-front account creation.
  - Whether data export lives here or in Pro (5.12). Resolving input: a product call on export ownership.
