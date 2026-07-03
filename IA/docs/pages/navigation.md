# Page-level IA - Global Navigation and Chrome (node 0)

- **Node:** 0 Global chrome. The two elements that frame every steady-state screen: GC1 App Header and GC2 Global Tab Bar. They are true global chrome (present on every non-onboarding screen), so they get their own file rather than living inside one cluster. The reusable Sections GC3 to GC7 are NOT here; each is specified in the cluster where it belongs (GC3 and GC4 in core.md, GC5 in alerts.md, GC6 in account.md, GC7 in pro.md) and referenced by name elsewhere.
- **Type:** Section (App Header), Section (Global Tab Bar), State matrix.
- **Canonical visual:** `IA/navigation.html`.
- **Job:** navigation chrome serves no single job; it carries every job cluster into reach. The four tabs map to job clusters (Home to J-MAIN, Alerts to J4, Save to J2 plus E2, You to E3 plus J1), per the Navigation section of sitemap.md.
- **Related:** every page in the library sits inside this chrome except the onboarding chain (node 1), where both are hidden. Reuses nothing; is reused by everything.

---

## Decisions (recommendations, flagged for review)

- **Four tabs, no more, and no red badge counts.** Traces the Navigation section (4 clusters) and the calm principle. Reason: a fifth tab or an urgent red count is exactly the density and alarm this segment avoids.
- **The whole onboarding chain hides both the header actions and the tab bar.** Traces the onboarding "no tab bar" note. Reason: onboarding is linear, the person has no app to navigate yet.
- **The header carries at most one contextual action.** Reason: one thing at a time; a crowded header reads as a finance-power-tool, the opposite of Tendd's position.
- **On desktop the bottom tab bar becomes a left rail and the header folds into the top of that rail.** Carried from Breakpoint Deltas. Reason: a bottom bar is a phone pattern; on a wide screen a persistent left rail is calmer and matches the research pages' own layout.
- **Tendd has no footer.** It is a mobile-first app, not a marketing site. There is no legal or link footer on any app screen. This is stated explicitly so its absence is not read as a gap. Any future public marketing page (outside this app repo) would have its own footer, specified with the SEO engine, not here.

---

## Flow / block order

### GC1 - App Header

Block order (left to right on mobile top bar): (1) back or menu control, (2) screen title, (3) one contextual action slot (for example "+", "Share", "Edit"). Variants:
- **Onboarding variant:** brand mark only, no back, no action, no tab bar. Used across node 1.
- **Signed-in variant:** back or title plus one action.
- **No-account-yet variant:** same, but the You area surfaces "Create an account to save your list" [? auth model, see account.md].

### GC2 - Global Tab Bar

Block order (four destinations, left to right): (1) Home -> 2.6, (2) Alerts -> 3.8, (3) Save -> 2.6 in save-focus (FLAG 1 resolution), (4) You -> 6.16. Each has an icon plus a text label. A quiet "new" dot may sit on Alerts (see alerts.md); no numeric badge. Hidden across onboarding (node 1).

---

## States

### State matrix (what changes by persona and by plan)

| Element | Emma (bank) | Ravi (privacy) | Claudia (cutter) | Free | Pro |
|---------|-------------|----------------|------------------|------|-----|
| **App Header** | Standard. Source context reads "from [Bank]". | Standard. Source context reads "Added by you". If trialing with no account, You surfaces "Create an account to save". | Standard. | Plan chip reads "Free" in the You area (GC7). | Plan chip reads "Pro" badge (GC7). |
| **Global Tab Bar** | Four tabs; lives mostly on Home and Save. | Four tabs; lives on Home and You (data control). | Four tabs; lives on Save and Alerts. | Four identical tabs. Save and its cancel candidates are fully usable (cancel is free, D3); the History link inside Home is gated. | Four identical tabs. Gated surfaces (History, advanced alerts, full guides) are unlocked; no tab changes. |

The tab SET never changes by persona or plan; only what is gated behind a tab's destinations changes (D3). This keeps navigation stable and predictable, which is itself calming.

### Cross-cutting states

| Element | State | What it reads like | Trigger |
|---------|-------|--------------------|---------|
| GC1 | onboarding | Brand only, no tab bar | Anywhere in node 1 |
| GC1 | signed-in | Title plus one action | Steady state |
| GC1 | no-account-yet | You shows "Create an account to save" | Trial session [? auth model] |
| GC2 | default | Four tabs, current tab highlighted | Steady state |
| GC2 | hidden | Not shown | Onboarding chain (node 1) |
| GC2 | new-on-alerts | Quiet dot on Alerts, no count | New alert since last visit |

---

## SEO

Chrome is not a content surface. `noindex`, not applicable.

---

## Accessibility

- The tab bar is a `role="navigation"` landmark with four links; the current tab has `aria-current="page"`.
- Each tab has a visible text label, not icon-only, so its purpose is clear to everyone; the icon is decorative.
- The header back control has an accessible name ("Back to [previous]"), and the single action slot control is labeled by function ("Add subscription"), never icon-only without a label.
- On desktop the left rail is the same navigation landmark; focus order runs rail then main content.
- The "new" dot on Alerts is exposed as "new alerts" to assistive tech, not left as a decorative dot.
- Tab targets at least 44 by 44 px, comfortably met by a bottom bar.

---

## Mobile (Tendd is mobile-first responsive web scaling to desktop)

This is the source of the main breakpoint delta for the whole product: GC2 is a bottom tab bar on mobile and a left rail on desktop, and GC1 folds into the top of that rail on desktop. Same four destinations, same header content, reorganized placement. This delta cascades to every steady-state screen and is why individual cluster files reference it rather than re-deciding it. Breakpoint value set in Wireframes.

---

## Locked (draft, 2026-07-03) / Open

- **Locked (draft, 2026-07-03):**
  - Four tabs (Home, Alerts, Save, You), no red counts, quiet new-dot only.
  - Tab bar hidden across onboarding.
  - Header carries at most one contextual action.
  - Bottom bar becomes a left rail on desktop; header folds into it.
  - No footer anywhere in the app (stated, not omitted).
  - The tab set is constant across personas and plans; only gating changes.
- **Still [?] (operational or data, not IA):**
  - The no-account-yet header/You treatment depends on the auth model (shared with onboarding and account).
