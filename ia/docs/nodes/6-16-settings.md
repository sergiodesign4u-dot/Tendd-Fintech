# Node 6.16 - Settings / Profile

Template: `1-1-welcome.md`. Supersedes the 6.16 section of `../pages/account.md`.

## Node, type, scope

**Node 6.16 · Settings / Profile · page · MVP**

## Purpose and jobs

The entry to the whole account-and-trust cluster: the You tab lands here, and from here a
person reaches their sources, their data, and their plan. It holds almost nothing itself.

- **E3 feel safe, control data**, as the door to the two screens that carry it.
- **J4 stay ahead of financial surprises**, through one place that answers what will reach you.

**This is the plan's right home, and that is what keeps the calm view clean.** The bank dropped
every upsell from node 2.6 precisely so the plan could live here, once, without pressure. D3
says the paywall never sits at basic visibility; the plan row is not a paywall, it is a
statement of what you are on.

## URL and breadcrumbs

`/settings`. No breadcrumbs: it is a tab. In through GC2. Out to node 6.14, node 6.15, node
5.13, and help.

## Content blocks, mobile-first priority

From `../blocks.md`, type G.

| # | Block | Carries | From the bank |
|---|---|---|---|
| 1 | App header (GC1) and the tab bar (GC2) | GC1, GC2 | TAKE |
| 2 | **Your details: email and currency, and nothing else** | principle 4 | TAKE, DIFFERENTLY (Uber): ours holds an email and a currency. We have no reason to hold a name or a phone number, and not holding them is easier to explain than protecting them |
| 3 | The plan row: Free or Pro, what Free includes, and manage plan into node 5.13 | D3, D4 | TAKE: **the right home for the plan.** Stated once, in the place a person goes to look for it |
| 4 | **What we tell you about**: which alerts arrive, and the weekly digest on or off | J4 | TAKE: one place that answers what will reach you, instead of a reminder toggle on every subscription the way the category does it. This is where the link from node 3.8 lands |
| 5 | A row into node 6.14, Your sources | J1, E3 | TAKE |
| 6 | A row into node 6.15, Data and privacy | J5, E3 | TAKE, and Uber's split confirmed: the data question and the preferences question are different questions and different screens |
| 7 | Help, and sign out | | TAKE |

**Named and not added:** an avatar and photo upload (nothing traces to it, and the product has
no social surface), a phone number, and a two-column settings layout with a category sidebar,
which does not survive 360px and is the reason this cluster is three screens rather than one.

**Carried to the wireframe rebuild:** the grey `wireframes/settings.html` shows a **Name**
field, which contradicts block 2, and it has no currency row. The bank decided the field list
after the wireframe was drawn, so the screen is behind the decision, not the other way round.

## Components and variants

GC1 App Header, app variant. GC2 Global Tab Bar, the You tab active. GC7 Plan Chip, in block 3
only, in its chip form: the plan is stated here, never sold here.

## States

| State | Reads like | Trigger |
|---|---|---|
| default | The seven blocks | Opened through the You tab |
| loading | Skeleton rows | Loading preferences |
| logged out `[?]` | "Create an account to save your list" in place of the details | A no-account trial session |

**Neither of these two gets a node number, and the reason differs.** The skeleton is chrome and
not a distinct destination. The logged-out variant depends on an unresolved product decision
(whether an account is created up front or lazily); it is numbered when that is answered, and
`[?]` is what an unanswered question looks like here.

## Filters and facets

None.

## Primary CTA

**None.** Every row is a door, and the screen has no opinion about which one a person wants.
"Manage plan" is not the primary action of the screen; it is one row among six.

## Emotional support

| Job | Mechanism | Where exactly |
|---|---|---|
| E3 feel safe, control data | Disconnect and delete are reachable in one tap rather than buried | Rows 5 and 6, which put Your sources and Data and privacy one tap from the tab bar |

The mechanism table names Settings as one of E3's four homes for exactly this reason: not for
what the screen contains, but for how short the path from it is.

## Responsive

Mobile: one column of rows. Desktop: the same one column at a wider measure with more margin,
and the tab bar becomes a left rail. No settings sidebar at any width.

## SEO

**noindex, no schema.** Private, behind auth.

## Status

**Locked:** email and currency only, the plan stated once and here, one place that answers what
will reach you, the two cluster doors one tap from the tab bar, no sidebar at any width.
**Done at the wireframe rebuild, 2026-08-05:** the Name field is off the screen and the
currency row is on it. The screen holds an email and a currency, and nothing else.
**Open:** `[?]` the no-account-to-try auth model, shared with node 1.1. Resolving input: a
product decision on lazy against up-front account creation.
