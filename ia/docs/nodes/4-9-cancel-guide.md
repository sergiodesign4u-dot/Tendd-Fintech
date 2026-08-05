# Node 4.9 - Cancel Guide

Template: `1-1-welcome.md`. Supersedes the 4.9 section of `../pages/cancel.md`.

## Node, type, scope

**Node 4.9 · Cancel Guide · page plus a dialog · MVP**

## Purpose and jobs

Turn "I should cancel this" into "it is cancelled", on a path where the merchant is actively
working against the person.

- **J2 identify and cancel unused subscriptions** (primary).
- **D3** binds hardest here: the basic instruction is always free and always first; the Pro
  depth is an addition below it, never a wall in front of it.

## URL and breadcrumbs

`/s/<id>/cancel`. Breadcrumb: back to the subscription. In from node 2.7 or the save-focus
state of node 2.6. Out to node 4.10.

## Content blocks, mobile-first priority

From `../blocks.md`, type F. The strings are already written and belong to
`voice/docs/microcopy.md`; this node fixes composition, and the bank found three blocks
missing from the grey screen.

| # | Block | Carries | From the bank |
|---|---|---|---|
| 1 | Back to the subscription | GC1 | TAKE |
| 2 | Heading and the amount, with "you can always resubscribe later" | J2 | TAKE |
| 3 | **What happens when you cancel, with the real date** ("you keep it until 3 August") | J2, the anxiety of an irreversible action | TAKE: **missing from the grey screen.** ReSubs can only promise this in general; we know the billing period |
| 4 | **The meta strip: about five minutes, and where these steps came from** | Phase 3 barrier, principle 4 | TAKE: **missing from the grey screen.** The category asks for a cancellation with no statement of effort or source |
| 5 | **The one channel path that matches how this person pays**, numbered | J2, growth zone 2, the decoder line at node 2.7 | TAKE, DIFFERENTLY: **the sharpest difference in the bank.** ReSubs publishes three channel sections because it does not know how you subscribed; we do |
| 6 | The primary action that opens the cancellation page | J2 | TAKE |
| 7 | Pro depth below the free steps: screenshots and a direct link | GC7, D3 | TAKE: below, never in front |
| 8 | "I cancelled it" | J2 | TAKE |
| 9 | "Could not cancel?", into the dialog | J2 | TAKE: the category ends at the instructions; ours stays for the outcome, including the failure |
| 10 | **When we last checked these steps** | principle 4 | TAKE, DIFFERENTLY: **missing from the grey screen.** A guide that silently rots is worse than no guide |

**Named and not added:** a six-question FAQ (on a task screen it is a second document; the two
useful answers are blocks 3 and 10), related guides and an article footer (that is an SEO
surface), and "can I pause instead" (TAKE but LATER: it needs per-service data we will not have
at MVP, and it is named so it is a decision rather than an omission).

## Components and variants

GC1 App Header, detail variant with back. GC7 Pro Gate and Plan Chip, inside block 7 only.

## States

| Node | State | Reads like | Trigger |
|---|---|---|---|
| - | default | The ten blocks, with the channel that matches this charge | A guide exists for this service |
| 4.9.1 | No guide for this service | The general way most subscriptions cancel, plus "ask us to add this guide" | No specific guide |
| 4.9.2 | Could not cancel (dialog) | **"Cancelling can be made deliberately hard, and it is not your fault"**, then other things to try, and "remind me later" | The person hit a retention wall |

**On 4.9.2:** this state exists because of the merchant, not because of us. The Duolingo
manage-subscription screen read while building the bank is exactly what the person walks into:
an expiry banner whose primary action is REACTIVATE, and a benefits list arguing against
leaving. Our guide warns that this is coming, so the pressure is expected rather than
surprising.

## Filters and facets

None.

## Primary CTA

**"Open <merchant> and cancel"**, the link that goes straight to the cancellation page for the
channel this person actually pays through. Free, always. D3 names the cancel moment as a place
a paywall must never sit, and the Pro block sits below the working free steps.

## Emotional support

No mechanism from the table has this node as its home; the win that follows it does. **E1**
through the voice rules of every state, and specifically through 4.9.2, whose whole job is to
move the blame off the person and onto the merchant's design.

## Responsive

Mobile: one column, the steps numbered, the primary action sticky at the bottom so it survives
a long list of steps. Desktop: the same order; the guide may open as a modal over the
subscription, which keeps the person's place.

## SEO

**noindex, no schema** in the app. If a public guide library is ever built, it is a separate
surface owned by node 8, and then `HowTo` and `FAQPage` schema become legitimate there.

## Status

**Locked:** free steps first, one channel path, the duration and source strip, what happens
with the real date, the freshness line, the not-your-fault dialog.
**Open:** `[?]` guide coverage at launch (the long tail of services with no specific guide).
Resolving input: how many guides are authored before release.

**Done at the wireframe rebuild, 2026-08-05:** the three blocks the bank found
missing are on the screen: what happens when you cancel with the real date (block 3), the
duration and source strip (block 4), and when the steps were last checked (block 10). The
steps themselves are the netflix.com path rather than a generic list, which is block 5 and the
sharpest difference in the bank.
