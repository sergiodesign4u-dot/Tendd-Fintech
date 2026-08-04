# Node 1.2 - Activation Path Choice

Template: `1-1-welcome.md`. Supersedes the 1.2 section of `../pages/onboarding.md`.

## Node, type, scope

**Node 1.2 · Activation Path Choice · page · MVP**

## Purpose and jobs

This screen exists for one reason: growth zone 1, the bank wall at first contact. Every
bank-connected competitor asks for bank access in step one or two, before earning any trust.
Here the person chooses which door to walk through, and both doors are the same size.

- **J1 activate without anxiety** (primary), **J5 track without sharing bank data**.
- Realizes **D2** (manual entry plus presets is an equal second path, not a fallback) and
  opens **D1** (the gradual reveal begins after this choice).

## URL and breadcrumbs

`/start`. No breadcrumbs; the onboarding chain shows position with a back arrow only. In from
node 1.1. Out to node 1.3 or node 1.4.

## Content blocks, mobile-first priority

From `../blocks.md`, type B.

| # | Block | Carries | From the bank |
|---|---|---|---|
| 1 | Step chrome: back, a step marker, nothing else | the three-tap ceiling; GC1 | TAKE, DIFFERENTLY: position without a progress bar, because a bar on step 1 of 4 tells an avoider the road is long |
| 2 | One question as H1 | design principle 2 | TAKE: one question per screen |
| 3 | Two option cards, equal in size and weight: connect a bank read-only, or add it yourself | D1, D2, J1, J5, growth zone 1 | TAKE: the category splits into two camps and each hides the other option |
| 4 | One line of consequence under each label ("read-only, about a minute" against "start with one, add more later") | J1, growth zone 1 | TAKE (Rarible): neither door is a leap in the dark |
| 5 | "I will do this later", quiet secondary, landing on Home with the empty state | J1; the retreat phase of the As-Is journey | TAKE, DIFFERENTLY: retreat is the As-Is default, and the product should survive it |
| 6 | A legal line under the fold | trust | TAKE (Care.com) |

**Named and not added:** a recommendation badge on the faster option (Arcade's "Popular").
It turns an equal choice into a nudge toward the bank, which is the wall in a softer form.

## Components and variants

GC1 App Header, onboarding variant: back arrow, no tab bar, no account entry.

## States

| State | Reads like | Trigger |
|---|---|---|
| default | The page as specified | Anyone arriving from 1.1 |
| already connected | The bank card reads "add another bank" instead of "connect" | A returning person with a live connection |

No empty, loading or error state: the screen holds no data.

## Filters and facets

None.

## Primary CTA

**There is no single primary here, and that is the point.** The two cards are the action, at
equal weight. The only quiet thing on the screen is "I will do this later". Any visual
hierarchy between the two cards would undo the decision this screen exists to express (D2).

## Emotional support

No mechanism from the table "Emotional and social jobs" (`../sitemap.md`) has this node as its
home. **E1** is present only through the line the table calls "the voice rules of every state":
no pressure, no nudge, no consequence framed as a mistake. Nothing else is claimed here.

## Responsive

Mobile: the two cards stack, full width, equal height. Desktop: side by side, still equal.
The equality is the requirement at every breakpoint.

## SEO

**noindex, no schema.** Behind the activation flow and transactional. `../pages/seo.md` scopes
the public surface to node 1.1 only.

## Status

**Locked:** two equal doors, one line of consequence each, the quiet way out, no recommendation
badge. **Open:** none.
