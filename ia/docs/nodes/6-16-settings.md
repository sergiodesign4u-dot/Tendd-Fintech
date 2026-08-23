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
| 4 | **What we tell you about**: which alerts arrive, the channel they arrive by, and the weekly digest on or off | J4 | TAKE: one place that answers what will reach you, instead of a reminder toggle on every subscription the way the category does it. This is where the link from node 3.8 lands |
| 5 | **How Tendd looks: dark mode on or off** | E3 | **ADDED 2026-08-23 by a founder's decision at the close of stage 13.** A group of its own and not a fifth switch inside block 4: that block answers what Tendd TELLS you and this one answers what it LOOKS like. The ground is that `design/system/` has carried both themes since stage 08, every semantic colour role paired in `[data-theme="dark"]` or refused, while the product had no control, no string and no `prefers-color-scheme` anywhere - a capability fully paid for and a feature never specified. **What it stores and where is in `handoff/docs/behaviour.md`**, and it is the one thing this node does not decide |
| 6 | A row into node 6.14, Your sources | J1, E3 | TAKE |
| 7 | A row into node 6.15, Data and privacy | J5, E3 | TAKE, and Uber's split confirmed: the data question and the preferences question are different questions and different screens |
| 8 | Help, and sign out | | TAKE |

**Named and not added:** an avatar and photo upload (nothing traces to it, and the product has
no social surface), a phone number, and a two-column settings layout with a category sidebar,
which does not survive 360px and is the reason this cluster is three screens rather than one.

**Closed at the wireframe rebuild, confirmed 2026-08-10:** this said the grey
`wireframes/settings.html` still showed a **Name** field and no currency row. The rebuilt screen
shows Email and Currency and no name, so the carried fix is done and the note is closed rather
than left standing as an open break.

**On block 3, and the state it now routes to.** For a person on Free the row leads to node 5.13
as before. For a person on Pro it leads to **node 5.13.3**, the plan they are on, which is the
only place in the product where Pro can be cancelled. Sending a subscriber into the screen that
sells Pro was the defect this closes; the ground is in `../../../docs/decisions.md`, 2026-08-10.

**On block 4, and what the channel row says.** Alerts and the weekly digest both arrive by
**email**, decided 2026-08-10 with the ground in node 3.8. The row names the address they go to
and links to block 2 to change it. There is no push toggle, because there is no push at MVP,
and a switch for something that does not happen is the same theatre as the read-against-write
toggle node 1.3 refused.

## Components and variants

GC1 App Header, app variant. GC2 Global Tab Bar, the You tab active. GC7 Plan Chip, in block 3
only, in its chip form: the plan is stated here, never sold here.

## States

| Node | State | Reads like | Trigger |
|---|---|---|---|
| - | default | The seven blocks | Opened through the You tab |
| - | loading | Skeleton rows | Loading preferences |
| 6.16.1 | No account yet | "Create an account to keep your list" in place of the details, one field, and what an account changes | A manual-path session with no account |

**6.16.1 was numbered on 2026-08-10, and the reason it could not be before.** This state stood
here as "logged out `[?]`" with a note saying it gets a number when the auth model is answered.
It now is: the manual path runs with no account at all, so this is not an edge case, it is the
steady state of everyone who came in through node 1.4 and never connected a bank. It is a
destination people live in, so it is numbered like one.

It offers, and does not nag. What an account changes is stated in the person's terms (your list
survives this device, and alerts can reach you), not in ours. If the address turns out to
already have an account, the same emailed link signs them in and the list they built here joins
the one they had, which is the merge rule in the auth model decision.

**Two blocks come off in this state, and one link is knowingly imperfect.** Block 4, what we
tell you about, is gone: there is no address to send anything to, and a preferences panel for
messages that cannot arrive is the same theatre as the read-against-write toggle node 1.3
refused. That fact is not hidden, it is the second of the three lines above, written as what an
account changes rather than as a lack. Block 7's sign-out is gone too, because there is nothing
to sign out of; help stays. **And the two cluster rows still lead to node 6.14 and node 6.15 as
the canonical person sees them, with Chase on them.** That is the same accepted seam as the
pages the prototype leaves unreachable: one prototype holds one person, and drawing a second
full set of sources for a second person would buy less than the confusion it costs.

**The skeleton stays unnumbered:** it is chrome, not a distinct destination.

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
**Open:** none. The auth model closed that `[?]` on 2026-08-10, and the answer is above: no
account on the manual path, so the account-less view is state 6.16.1 rather than a variant
waiting on a decision.
