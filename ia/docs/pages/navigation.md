# Page-level IA - Global Navigation and Chrome (node 0)

- **Node:** 0 Global chrome. The two elements that frame every steady-state screen: GC1 App Header and GC2 Global Tab Bar. They are true global chrome (present on every non-onboarding screen), so they get their own file rather than living inside one cluster. The reusable Sections GC3 to GC7 are NOT here; each is specified in the cluster where it belongs (GC3 and GC4 in core.md, GC5 in alerts.md, GC6 in account.md, GC7 in pro.md) and referenced by name elsewhere.
- **Type:** Section (App Header), Section (Global Tab Bar), State matrix.
- **Superseded 2026-08-05.** GC1 and GC2 are specified in `../nodes/globals.md`, rendered at `ia/globals.html`. The page `ia/navigation.html` was retired with the other cluster renders; this file stays as the base-layer record it was written as.
- **Job:** navigation chrome serves no single job; it carries every job cluster into reach. The five tabs map to job clusters (Home to J-MAIN, Trends to J-MAIN over time plus E1, Alerts to J4, Save to J2 plus E2, You to E3 plus J1), per the Navigation section of sitemap.md.
- **Related:** every page in the library sits inside this chrome except the onboarding chain (node 1), where both are hidden. Reuses nothing; is reused by everything.

---

## Decisions (recommendations, flagged for review)

- **Five tabs and no more, and no red badge counts.** Traces the Navigation section and the calm principle. Reason: an urgent red count is exactly the alarm this segment avoids. **It read "four tabs, no more" and named a fifth as the density to refuse, until 2026-08-18**: the founder asked twice, the condition the refusal rested on had been removed the same day (Trends stopped being a locked room), and the fifth was measured before it was taken - 64px an item at a 320 viewport, no wrap and no overflow, and 219px an item on the desktop rail whatever the count. The ceiling is still real and is now at six.
- **The whole onboarding chain hides both the header actions and the tab bar.** Traces the onboarding "no tab bar" note. Reason: onboarding is linear, the person has no app to navigate yet.
- **The header carries at most one contextual action.** Reason: one thing at a time; a crowded header reads as a finance-power-tool, the opposite of Tendd's position.
- **On desktop the bottom tab bar becomes a left rail and the header folds into the top of that rail.** Carried from Breakpoint Deltas. Reason: a bottom bar is a phone pattern; on a wide screen a persistent left rail is calmer and matches the research pages' own layout.
- **No footer on app screens; the Welcome landing is the one exception (updated 2026-07-04).** Steady-state app screens carry no legal or link footer (Tendd is an app, not a marketing site), stated explicitly so its absence is not read as a gap. The exception is the Welcome / Value Intro landing (1.1): now the public marketing front door in this repo, it carries a marketing footer (product, company, legal columns). That is the sole footer in the set. See onboarding.md 1.1 and seo.md.

---

## Flow / block order

### GC1 - App Header

Block order (left to right on mobile top bar): (1) back or menu control, (2) screen title, (3) one contextual action slot (for example "+", "Share", "Edit"). Variants:
- **Onboarding variant:** brand mark only, no back, no action, no tab bar. Used across the activation chain (1.2 to 1.5). The Welcome landing (1.1) is the exception (updated 2026-07-04): it uses its own full-width marketing top nav with section links, Sign in, and a Get started CTA, plus a footer, not this minimal header.
- **Signed-in variant:** back or title plus one action.
- **No-account-yet variant:** same, but the You area surfaces "Create an account to save your list" [? auth model, see account.md].

### GC2 - Global Tab Bar

Block order (five destinations, left to right): (1) Home -> 2.6, (2) Trends -> 5.12, (3) Alerts -> 3.8, (4) Save -> 2.6 in save-focus (FLAG 1 resolution), (5) You -> 6.16. **Trends was added 2026-08-18 on the founder's decision**, in second place because Home and Trends are one cluster - the same money, now and over time - and the three after them are where a person acts; the ground and what it cost at 320px are in the Navigation section of sitemap.md. Each has an icon plus a text label. A quiet "new" dot may sit on Alerts (see alerts.md); no numeric badge. Hidden across onboarding (node 1).

---

## States

### State matrix (what changes by persona and by plan)

| Element | Emma (bank) | Ravi (privacy) | Claudia (cutter) | Free | Pro |
|---------|-------------|----------------|------------------|------|-----|
| **App Header** | Standard. Source context reads "from [Bank]". | Standard. Source context reads "Added by you". If trialing with no account, You surfaces "Create an account to save". | Standard. | Plan chip reads "Free" in the You area (GC7). | Plan chip reads "Pro" badge (GC7). |
| **Global Tab Bar** | Five tabs; lives mostly on Home and Save. | Five tabs; lives on Home and You (data control). | Five tabs; lives on Save and Alerts. | Five identical tabs. Save and its cancel candidates are fully usable (cancel is free, D3); the History link inside Home is gated. | Four identical tabs. Gated surfaces (History, advanced alerts, full guides) are unlocked; no tab changes. |

The tab SET never changes by persona or plan; only what is gated behind a tab's destinations changes (D3). This keeps navigation stable and predictable, which is itself calming.

### Cross-cutting states

| Element | State | What it reads like | Trigger |
|---------|-------|--------------------|---------|
| GC1 | onboarding | Brand only, no tab bar | Anywhere in node 1 |
| GC1 | signed-in | Title plus one action | Steady state |
| GC1 | no-account-yet | You shows "Create an account to save" | Trial session [? auth model] |
| GC2 | default | Five tabs, current tab highlighted | Steady state |
| GC2 | hidden | Not shown | Onboarding chain (node 1) |
| GC2 | new-on-alerts | Quiet dot on Alerts, no count | New alert since last visit |

---

## SEO

Chrome is not a content surface. `noindex`, not applicable.

---

## Accessibility

- The tab bar is a `role="navigation"` landmark with five links; the current tab has `aria-current="page"`.
- Each tab has a visible text label, not icon-only, so its purpose is clear to everyone; the icon is decorative.
- The header back control has an accessible name ("Back to [previous]"), and the single action slot control is labeled by function ("Add subscription"), never icon-only without a label.
- On desktop the left rail is the same navigation landmark; focus order runs rail then main content.
- The "new" dot on Alerts is exposed as "new alerts" to assistive tech, not left as a decorative dot.
- Tab targets at least 44 by 44 px, comfortably met by a bottom bar.

---

## Mobile (Tendd is mobile-first responsive web scaling to desktop)

This is the source of the main breakpoint delta for the whole product: GC2 is a bottom tab bar on mobile and a left rail on desktop, and GC1 folds into the top of that rail on desktop. Same five destinations, same header content, reorganized placement. This delta cascades to every steady-state screen and is why individual cluster files reference it rather than re-deciding it. Breakpoint value set in Wireframes.

---

## Locked (draft, 2026-07-03) / Open

- **Locked (draft, 2026-07-03):**
  - Five tabs (Home, Trends, Alerts, Save, You), no red counts, quiet new-dot only.
  - Tab bar hidden across onboarding.
  - Header carries at most one contextual action.
  - Bottom bar becomes a left rail on desktop; header folds into the top of it (realized in Wireframes, 2026-07-04).
  - No footer on app screens; the Welcome landing (1.1) is the one exception (marketing footer), added 2026-07-04.
  - The tab set is constant across personas and plans; only gating changes.
- **Still [?] (operational or data, not IA):**
  - The no-account-yet header/You treatment depends on the auth model (shared with onboarding and account).
