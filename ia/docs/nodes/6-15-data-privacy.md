# Node 6.15 - Data and Privacy

Template: `1-1-welcome.md`. Supersedes the 6.15 section of `../pages/account.md`.

## Node, type, scope

**Node 6.15 · Data and Privacy · page plus a dialog · MVP**

## Purpose and jobs

The full answer to the question the whole audience arrives with. `../../research/docs/personas.md`
has Ravi refusing every app that will not say plainly what it does with the data, and the
landing already promises an answer; this is where the answer actually is.

- **J5 keep control of my data** (primary), and **E3 feel safe, control data**.
- It is also the screen that makes leaving easy, which is what makes staying a choice.

## URL and breadcrumbs

`/privacy`. Breadcrumb: back to Settings. In from node 6.16, from the trust line (GC6) on any
screen, and from the "what we read" links on nodes 1.1, 1.2 and 1.3. Out to node 6.14, to the
policy, and to a signed-out state after a deletion.

## Content blocks, mobile-first priority

From `../blocks.md`, type G.

| # | Block | Carries | From the bank |
|---|---|---|---|
| 1 | Back, and the title (GC1) | GC1 | TAKE |
| 2 | **The plain answer, name-the-fear**: the fear stated first, then denied with specifics: we read your recurring charges, read-only; we cannot move your money; we do not sell your data | J5, E3, master-research M2 | TAKE, DIFFERENTLY (Canva): a statement before any control. Vague "bank-level security" language is exactly what scares this person; specifics earn trust |
| 3 | What each source can reach, one sentence each: the bank connection, and what you typed yourself | D2, principle 4 | TAKE |
| 4 | The controls that actually control something: refresh automatically, and use my activity to improve Tendd, off by default | J5, O20 | TAKE, DIFFERENTLY: two real toggles and no theatre |
| 5 | **Export my data, free** | J5, D-Export | TAKE: **decided on 2026-08-04.** A plain, complete export of what we hold about you is a right, not a feature, so it is free and it lives here. The analytical export of history and trends is Pro and lives with node 5.12 |
| 6 | Delete everything, into dialog 6.15.1 | J5, E3, legal duty | TAKE: one clearly labelled action, two taps from the You tab |
| 7 | Links to the policy and to node 6.14 | E3 | TAKE |

**Named and not added:** toggles for advertising, personalisation and profile enrichment. We do
none of these, and offering a switch implies we could. It is the same rule that dropped the
read-against-write toggle at node 1.3: a control with only one legal position is theatre, and
theatre is the opposite of what this screen is for.

## Components and variants

GC1 App Header, detail variant with back. GC6 Data Source and Trust, short variant, at the top
of block 3.

## States

| Node | State | Reads like | Trigger |
|---|---|---|---|
| - | default | The seven blocks | Opened |
| 6.15.1 | Delete everything (dialog) | The consequence in plain text, then two doors: delete everything, or keep my data | "Delete all my data" tapped |
| - | Exporting | "Preparing your file", then the download | Export tapped |
| - | Deleted | Signed out, with a plain confirmation that it is done | Deletion completed |

**On 6.15.1:** two doors, and no alarm colouring. The bank takes Fingerprint's shape (a warning
callout, "keep account" against "continue") and drops its palette under D-Concept: clay is for
a genuine error, never for decoration. **The consequence carries the weight, not the colour.**
The destructive button says what it does, not "OK", and Escape maps to the safe door. The
dialog was numbered on 2026-08-04; `../pages/account.md` specified it without a node number.

## Filters and facets

None.

## Primary CTA

**None, and that is the point.** This screen is read, not used. Its two actions, export and
delete, are both a person taking their data back, and neither is a thing the product wants
them to do more of.

## Emotional support

| Job | Mechanism | Where exactly |
|---|---|---|
| E3 feel safe, control data | Read-only stated in the same breath as the bank, the source of every figure shown, and disconnect and delete reachable in one tap rather than buried | Block 2 for the promise in the person's own words, block 3 for the source, blocks 5 and 6 for the exits |

This node is E3's fullest home. Everywhere else in the product E3 appears as one line; here it
is the screen.

## Responsive

Mobile: one column, the plain answer above the fold and the controls below it. Desktop: the
same order at a wider measure. The dialog is a centred modal on desktop and a full-width sheet
on mobile, which is presentation and not a structural change.

## SEO

**noindex, no schema.** Private, behind auth. The public policy page, if one is published, is a
different surface and belongs to node 8.

## Status

**Locked:** the statement before the controls, no theatre toggles, the free plain export
(D-Export), one-tap deletion with a single confirm that deletes everything, two doors with no
alarm colouring.
**Done at the wireframe rebuild, 2026-08-05:** node 6.15.1 has a page for the first time. It
lived inside the page as a block and could not be walked as the interruption it is.

**Open:** none. The export question that was open here was answered on 2026-08-04 (D-Export),
and `CLAUDE.md` was corrected with it.
