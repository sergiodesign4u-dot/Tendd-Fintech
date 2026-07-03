# Page-level IA - System Pages (node 9)

- **Node:** 9 System. The cross-cutting states that are not part of any one cluster: not found, server error, maintenance, the consent banner, and toasts. One artifact because these are the app's connective tissue, seen anywhere, owned by no cluster.
- **Type:** States (Not found, Server error, Maintenance), Section (Consent banner), Section (Toasts), Dialog-adjacent (none blocking here; blocking dialogs live in their clusters).
- **Canonical visual:** `IA/system.html`.
- **Job:** none directly. These protect the calm-and-trust experience when something goes wrong or when the law requires a notice. A broken or alarming error state would undo the same anxiety work every other screen does.
- **Related:** all system states inherit GC1 and GC2 chrome (navigation.md) when a person is signed in; toasts appear over any screen; the consent banner, if used, appears on first public visit (see onboarding 1.1 and seo.md).

---

## Decisions (recommendations, flagged for review)

- **Not found and server error are in-app states that keep the chrome, not bare browser pages.** Tendd is a single-page app (Next.js), so most "wrong route" cases are handled in-app with GC1 and GC2 still present and a clear way back to Home. A true server 404 or 500 (a hard load failure before the app boots) gets a minimal standalone template that does not depend on the app or backend being up. Reason: a person should never hit a dead, chrome-less wall inside a calm product.
- **No full-app maintenance page at MVP.** Tendd's real downtime risk is a bank-sync provider (Plaid) being unavailable, which is a per-source condition already handled by the needs-reauth and sync-error states (account.md, core.md), not a reason to take the whole app offline. A whole-app maintenance state is only worth building if Tendd itself needs planned downtime, which is not established. Stated and skipped rather than invented. [? revisit if a planned-downtime operating model appears.]
- **The consent banner is marked [?], not assumed either way.** CLAUDE.md lists PostHog analytics ("privacy-friendly, EU-compliant"). Whether Tendd sets a non-essential tracking cookie depends on how PostHog is configured (it can run cookieless). If it does set one, a consent banner is required for EU visitors; if configured cookieless with only essential storage, it is not. This is unresolved and tied to the EU compliance review that D5 explicitly defers. Reason: do not invent a legal posture; name what resolves it.
- **Toasts are non-blocking, auto-dismissing, and carry at most one action.** They are distinct from the blocking dialogs already specified (Connect Bank error 1.3.1, Add Subscription, delete confirmation 6.15.1). Reason: routine feedback ("Added") must not interrupt; only genuine decisions block.
- **[? draft copy] all copy below is a specific first draft.**

---

## Flow / block order

### 9.1 Not found (in-app state)

Inherits GC1 and GC2 when signed in. Block order:
1. (P) Calm heading: "We could not find that." [? draft copy]
2. (S) One line: "The page may have moved, or the link may be old."
3. (P) Primary action: "Back to my list" -> 2.6 Home.

### 9.2 Server error (standalone minimal template)

Independent of the app and backend. Block order:
1. (P) Heading: "Something went wrong on our side." [? draft copy]
2. (S) One line: "This is usually temporary."
3. (P) Actions: "Refresh" and "Back to Home".
No chrome dependency, no data dependency, active voice (M1).

### 9.3 Maintenance (not built at MVP)

Not created. See Decisions. Bank-sync provider outages surface per-source (needs-reauth, sync-error), not as a whole-app page.

### 9.4 Consent banner (conditional, [?])

Only if Tendd sets a non-essential tracking or analytics cookie on the web app. Block order if built:
1. (P) Plain statement of what is set and why. [? draft copy pending the cookie decision]
2. (P) "Accept" and "Only essential" as equal choices (no dark-pattern default).
3. (S) Link to the privacy explanation (6.15).
Status: [? unresolved]. Resolving input: the PostHog cookie configuration decision plus the deferred EU compliance review (D5).

### 9.5 Toasts (lightweight feedback)

A brief, non-blocking message over the current screen, auto-dismissing in a few seconds, at most one action. Drafts:
- "Subscription added." (after 1.4)
- "Saved." (after editing a subscription)
- "Removed." with "Undo" (after removing a source or subscription, where reversible)
- "Reconnected." (after reauth)
- "Couldn't refresh, showing your last update." (recoverable sync error, distinct from the blocking connect error 1.3.1)

Traces: routine confirmations for Subscription, Account, and Cancellation actions. Never used for a decision the person must make (those block).

---

## States

| Node | State | What it reads like | Trigger |
|------|-------|--------------------|---------|
| 9.1 | not-found (in-app) | Calm heading plus "Back to my list", chrome intact | An unknown in-app route |
| 9.2 | server-error | Standalone minimal template, "Refresh" and "Home" | Hard load or backend failure before the app boots |
| 9.3 | maintenance | Not built | n/a at MVP |
| 9.4 | consent | Conditional banner | [? only if a non-essential cookie is set] |
| 9.5 | toast (info) | "Added", "Saved" | A routine action succeeded |
| 9.5 | toast (undoable) | "Removed" plus "Undo" | A reversible action |
| 9.5 | toast (recoverable error) | "Couldn't refresh, showing your last update" | A non-blocking sync hiccup |

---

## SEO

The in-app not-found (9.1) is `noindex`. A true server 404 (9.2) returns a real 404 status so crawlers do not index a missing route. No schema. Not content surfaces.

---

## Accessibility

- Not found and server error present their heading as the focus target on load, with the primary action reachable by keyboard.
- The server-error template does not depend on app JavaScript, so it is operable even when the app fails to boot.
- Toasts use `role="status"` with `aria-live="polite"` so they are announced without stealing focus; an undo action inside a toast is keyboard reachable for the toast's lifetime, and the auto-dismiss timing is long enough to reach it (or pauses on focus).
- The consent banner, if built, is keyboard reachable, does not trap, and offers "Accept" and "Only essential" as equally weighted, equally easy choices.
- Tap targets at least 44 by 44 px.

---

## Mobile (Tendd is mobile-first responsive web scaling to desktop)

No structural delta. Not found and server error are single-column on every breakpoint. Toasts anchor to the bottom above the tab bar on mobile and to a corner on desktop, which is placement, not structure. The consent banner, if built, is a bottom sheet on mobile and a smaller anchored bar on desktop.

---

## Locked (draft, 2026-07-03) / Open

- **Locked (draft, 2026-07-03):**
  - Not found and server error keep the calm tone and always offer a way back to Home; server error is chrome- and backend-independent.
  - No full-app maintenance page at MVP; sync outages are per-source.
  - Toasts are non-blocking, auto-dismissing, one action max, distinct from blocking dialogs.
- **Still [?] (operational or data, not IA):**
  - The consent banner (9.4). Resolving input: the PostHog cookie configuration decision and the deferred EU compliance review (D5).
