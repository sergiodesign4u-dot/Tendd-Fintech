# Node 1.1 - Welcome / Value Intro

This is the **etalon node page**: the first node specified with the template below, and the
shape every other node page follows. It was chosen as the etalon because it is the only
indexed screen in the product, so it exercises the whole template including the full A-E SEO
block, which no other node needs.

**Supersedes** the 1.1 section of `../pages/onboarding.md` and the Welcome templates in
`../pages/seo.md`. Those files stay as the cluster and engine documents; the node owns its
own specification from here on.

---

## The template (fixed here, applied to every node)

Every node page carries these lines, in this order. Nothing is added "for completeness":
a section with nothing true to put in it says so in one line and stops.

1. **Node, type, scope.** Number, name, page or dialog or state, MVP or LATER.
2. **Purpose and jobs.** One line of purpose; the jobs it closes, by their id.
3. **URL and breadcrumbs.**
4. **Content blocks, mobile-first priority.** The composition comes from
   `../blocks.md`, the rows marked TAKE for **this page type**, plus what the jobs of this
   particular node demand. A block that is not in the bank and traces to nothing is not
   added silently: it is named out loud, and either it enters the bank with a trace or it
   does not exist.
5. **Components and variants**, from the shared library (GC1 to GC7).
6. **States.** Guest, signed in, empty, loading, error, and whatever else is real here.
7. **Filters and facets**, for listing pages only.
8. **Primary CTA.** One understandable next step.
9. **Emotional support.** If a mechanism from the table "Emotional and social jobs: what
   supports them" (`../sitemap.md`, base layer) lives on this node, it is named as
   `job -> mechanism -> where exactly on the page`. The mechanism "microcopy" stays a marker:
   stage 05 writes the text, but the place for it must exist in the blocks now.
10. **Responsive.** The mobile stack, then the desktop delta.
11. **SEO block A-E**, on every indexed page. Private screens carry one line: noindex, no
    schema, and why.

---

## Node, type, scope

**Node 1.1 · Welcome / Value Intro · page (public landing) · MVP**

The front door and the only public surface of the product. In this repository it is a real
page (`wireframes/index.html`), not a placeholder for a marketing site built elsewhere.

## Purpose and jobs

Carry an avoider from "I suspect I am paying for things I forgot about" to the first look,
**without asking for a bank first**. That single sentence is the reason every block below
exists.

- **J1 activate without anxiety** (primary here). The whole page is the answer to growth
  zone 1, the bank wall at first contact, which the research names as the largest gap in the
  category.
- **J-MAIN** is promised here and delivered at node 1.5 and node 2.6.
- **J5 track without sharing bank data** is answered by the two paths block and the trust
  block.
- **E1 feel competent, not judged** is carried by the register of every line on the page.

## URL and breadcrumbs

- URL: `/` (self-canonical)
- Breadcrumbs: none. This is the root.
- Entry: organic search, direct, shared link. Exit: node 1.2 Activation Path Choice.

## Content blocks, mobile-first priority

Composition from `../blocks.md`, type A, the rows marked TAKE. Ten blocks; the source of
each is the bank row, and the bank row carries the trace.

| # | Block | Carries | From the bank |
|---|---|---|---|
| 1 | Header: wordmark, "How it works", "Trust and security", "Pricing", Sign in, Get started free | GC1 (marketing variant) | TAKE, all seven sources; ours makes "See how it works" the loud action, not "Sign up" |
| 2 | Hero: H1, one-sentence promise, primary CTA, secondary CTA, and the line "No bank connection needed to start. Read-only, we can never move your money." | J-MAIN, J1, J5 | TAKE plus TAKE-DIFFERENTLY (the reassurance line says the harder thing) |
| 3 | Product preview: the calm list with real merchant names and one total, labelled "Example, not your data" | growth zone 2, H0 | TAKE, DIFFERENTLY (Vivid shows a chart, we show the actual list) |
| 4 | Benefits, one differentiator each: everything in one place, clear never judged, never caught off guard | J-MAIN, J3, J4 | the on-screen realization of the three H2 differentiators |
| 5 | How Tendd works: three numbered steps, and the length of the path stated up front | Phase 3 barrier (tedium), the 3-tap activation node | TAKE (Visitors' "set up in minutes") |
| 6 | Two paths: connect a bank read-only, or add it yourself from 400+ services | D1, D2, J5, growth zone 1 | TAKE, DIFFERENTLY: the category hides one of the two doors, we show both as equals |
| 7 | Trust and security: what we can see, what we can never do, read-only, delete any time | J1, J5, E3, GC6 | TAKE (ReSubs states a badge, we state the facts) |
| 8 | Plan line: the whole calm view is free, Pro is depth | D3, D4 | TAKE, DIFFERENTLY (one honest line, not a comparison table) |
| 9 | FAQ, four objections, the same ones the category proves people arrive with | J1, J5, SEO block D | TAKE |
| 10 | Closing CTA (the same single action) and the marketing footer, privacy first | J-MAIN, SEO block E | TAKE |

**Blocks named out loud and not added:** press logos, a savings counter, user statistics,
testimonials, store ratings, a comparison table against a named competitor. Each is a SKIP
row in the bank with its reason. The testimonial block currently on the grey screen
(`welcome | social-proof` in `voice/docs/microcopy.md`) is one of them: it is authored copy
with no real quote behind it yet, and the bank scopes it LATER. **This is a change to the
grey screen and belongs to the wireframe rebuild, not to a hand edit here.**

## Components and variants

GC1 App Header, marketing variant (the only screen with a full navigation and a footer).
GC3 Recurring Summary Strip appears inside block 3 as a static example, not as live data.
GC4 Subscription List Item, example variant, three rows. GC6 Data Source and Trust,
long-form variant, inside block 7.

## States

| State | Reads like | Trigger |
|---|---|---|
| default (guest) | The page as specified | Anyone not signed in |
| returning, signed in | The header swaps "Get started free" for "Go to your subscriptions" | A live session |
| JavaScript off / crawler | Everything above is server-rendered text; the preview is a real image with alt text | Crawlers, no-JS |

No empty, loading or error state: the page holds no live data by design, which is also what
makes it fast and indexable.

## Filters and facets

None. Not a listing page.

## Primary CTA

**"Get started free"**, to node 1.2 Activation Path Choice. It appears in the header, the
hero and the closing block, and it is the same action all three times. The secondary is
"See how it works", an in-page jump to block 5, never a second competing destination.

## Emotional support

From the table "Emotional and social jobs: what supports them" (`../sitemap.md`, base layer),
one mechanism lives on this node:

- **E1 feel competent, not judged** -> money is framed as "what you signed up for", never as
  spending or waste; no score, no red, no advice -> **where exactly:** the hero promise
  (block 2), the preview caption "a month, for what you have signed up for" (block 3), and
  the benefit card "Clear, never judged" (block 4).

E3 is prepared here (the trust block) and completed at node 1.3, where the read-only sentence
is said in the same breath as the bank request. S1 does not appear on this node.

## Responsive

Mobile stack: the ten blocks in the order above, one column, the hero preview at the width of
the screen. Desktop delta: blocks 2 and 3 become two columns (promise left, preview right),
the benefits become a three-up row, the two paths sit side by side, and the FAQ becomes two
columns. No block is added or removed by breakpoint.

---

## SEO block A-E

**A. Meta tags, ready copy**

- `title` (49 chars): `Tendd - See and control your subscriptions, calmly`
- `description` (147 chars): `See every subscription and recurring charge in one calm view. No bank connection needed to start. Built for people who find money apps stressful.`
- `canonical`: self, the root URL
- `hreflang`: none. One language by project boundary
- `robots`: `index, follow`
- OG and Twitter: title and description as above; the OG image is the calm-list preview, with
  the same "Example, not your data" label baked in, so a shared link never implies real data

**B. Heading structure**

Exactly one H1, then the H2s in block order:

- H1: `See what you're paying for. Calmly.`
- H2: `Calm control of your recurring money` (block 4)
- H2: `How Tendd works` (block 5)
- H2: `Two ways to start` (block 6)
- H2: `Trusted with your money` (block 7)
- H2: `Simple, honest pricing` (block 8)
- H2: `Questions people ask first` (block 9)

**Correction, 2026-08-04:** `../pages/seo.md` still writes the H1 as "See what you are paying
for. Calmly.". Voice locked the contracted form ("contractions warm by default, firm on money
and data", `voice/docs/voice.md`), and the on-screen H1 is `See what you're paying for.
Calmly.`. The SEO H1 and the on-screen H1 are one string and it is the contracted one. The
node owns it from here.

**C. SEO text, ready**

The indexed body text is the on-screen copy: it is already written, already in voice, and
already in `voice/docs/microcopy.md` under `welcome`. This node does not author a second
edition of it. What the node fixes is what information must be present for search, and it is
present:

- the category term ("subscriptions", "recurring charge") in the H1 area and the hero
- the differentiator terms ("calm", "no bank connection needed to start") in the hero and in
  block 7, both as real text and not inside an image
- the privacy angle ("read-only", "we can never move your money") in the hero and block 7
- the manual path ("add your subscriptions by hand from 400+ services") in blocks 5 and 6,
  which is the "track subscriptions without linking bank" cluster
- the four FAQ questions in block 9, which are the long-tail informational cluster

Keyword model and priority: `../pages/seo.md`, unchanged. Volumes stay `[?]` until real tool
data exists.

**D. Structured data**

`Organization` (name, logo, and social profiles when they exist) and `WebSite`. `FAQPage` on
block 9, which is now legitimate because the questions and answers are real on-page text.
No `Product` or `Offer` schema: the plan line is one honest sentence, not a pricing page.

**E. Optimization checklist**

- exactly one H1, H2s in block order, no heading used for styling
- LCP is the hero preview image: sized, compressed, not lazy, space reserved so CLS stays low
- every navigation and CTA is a crawlable `<a href>`, never a button that only listens to JS
- self-canonical, no hreflang, `index, follow` here and `noindex` on every node from 1.2 on
- all differentiator copy is real text, never text baked into an image
- INP: the FAQ accordion is the only interactive block above the fold on mobile

---

## Status

**Locked here:** the ten-block composition and its order, the single primary action repeated
three times, the H1 in its contracted form, and the FAQPage schema on block 9.

**Done at the wireframe rebuild, 2026-08-05:** the testimonial block is dropped (bank, type A)
and three blocks the July screen did not have are on it: the two paths (block 6), the plan line
(block 8) and the FAQ (block 9). The ten blocks are now all present and in order. The two-paths
block carries no button of its own, because the single action of this page appears in the
header, the hero and the closing block and nowhere else; adding a fourth instance of it there
would make the page argue with its own rule.

**Still `[?]`:** real search volumes and Core Web Vitals targets, both operational and both
already marked in `../pages/seo.md`.
