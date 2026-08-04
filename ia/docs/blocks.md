# Block bank by page type - Tendd

Where the composition of a screen comes from. Every other artifact in this project has a
rule of origin: a research fact carries a cited source, a CJM emotion carries a mined quote
or a `[?]`, a To-Be feature traces to a barrier, a color comes off the brand plate, a line
comes from `microcopy.md`. The list of blocks on a page had no such rule, so it was invented
on the spot, and the invention is always the median of everything the model has seen: hero,
filter, cards, pagination. That median is exactly what a thin wireframe looks like.

This file fixes the source of blocks **before** the page specifications are written, and it
does it **by page type, not by node**: 16 screens collapse into 7 types, so the expensive
step runs 7 times, not 23.

## Two sources, two different questions

| Source | Answers | Taken with |
|---|---|---|
| Competitors (`research/docs/competitors.md`) | what they actually sell and what holds a person **inside our category** | Playwright over public / pre-login pages, opened in the working session |
| Refero (MCP) | how a page of **this type** is built in best-in-class products **outside our category** | `refero_search_screens` then `refero_get_screen` and `refero_get_similar_screens` |

One source alone fails in both directions. Refero alone gives beautiful patterns from a
category that does not know our people. Competitors alone give the median of our own
category, which is the thing we set out to beat.

## Four filling rules

1. **A block with no trace is not taken.** Every TAKE cites a job from `jtbd.md`, a barrier
   or growth zone from `cjm-as-is.md`, or an SEO requirement from `pages/seo.md`. Nothing to
   trace to means SKIP, with the reason written down.
2. **"Where we are better" is filled in, not skipped.** Name the weak block and why our
   version serves the person better, against a barrier. Where the domain half was missing
   (see below), this column holds the barrier the block works on instead.
3. **A reference is an input, not an output.** No screen is carried over whole. If our
   composition matches one source one to one, that is a copy, not a coincidence.
4. **A scope label on every block.** A block can be right and still not be MVP. Without this
   column the step silently doubles the product: denser IA gives denser wireframes, a bigger
   inventory at UI + Visual and a longer roll-out at Tokens.

## Source availability, stated out loud

The rule about two sources says what is *not enough*, not what to do when one half is
physically unavailable. For Tendd the domain half is available for two types only:

| Type | Domain half (competitors) | Craft half (Refero) |
|---|---|---|
| A. Public landing | available: Rocket Money, ReSubs, Bobby | available |
| B. Onboarding step | **missing**: behind signup at every competitor | available |
| C. List dashboard | **missing**: behind login | available |
| D. Object detail | **missing**: behind login | available |
| E. Activity feed | **missing**: behind login | available |
| F. Task guide plus confirmation | partly available: ReSubs publishes cancel guides | available |
| G. Account and settings | **missing**: behind login | available |

For the five types marked missing, the pack fallback applies and the founder approved it on
2026-08-04: the craft half stays with Refero, and the domain half is replaced by **our own
research** (barriers and growth zones from `cjm-as-is.md`, jobs from `jtbd.md`, open
questions from `research.md`). We do not imitate a domain source from a competitor's
marketing landing: that is a different page type and its blocks are about something else.
In those tables the "where we are better" column holds the barrier the block works on.

## Types in this round

13 MVP screens collapse into 7 types. Types whose nodes are all LATER (Share Snapshot,
History and Trends, Upgrade) are out of the first round.

| Type | Nodes | Count |
|---|---|---|
| A. Public landing | 1.1 | 1 |
| B. Onboarding step | 1.2, 1.3, 1.4, 1.5 | 4 |
| C. List dashboard | 2.6 | 1 |
| D. Object detail | 2.7 | 1 |
| E. Activity feed | 3.8 | 1 |
| F. Task guide plus confirmation | 4.9, 4.10 | 2 |
| G. Account and settings | 6.14, 6.15, 6.16 | 3 |

---

## Type A. Public landing (node 1.1 Welcome / Value Intro)

The front door, and the only indexed screen in the product (`pages/seo.md`). Its job is J1,
activate without anxiety: carry an avoider to the first look **without** asking for a bank
first, which is growth zone 1, the single biggest gap named in the category.

### Sources opened in this session

**Domain (competitors, public pages, opened 2026-08-04):**
- ReSubs, [resubs.app](https://resubs.app/) - closest positioning (privacy-first, no bank access at all). Screenshot: `research/screens/blocks-resubs-landing.png`
- Rocket Money, [rocketmoney.com](https://www.rocketmoney.com/) - category leader, 10M members. Screenshot: `research/screens/blocks-rocketmoney-landing.png`
- Bobby, [bobbyapp.co](https://bobbyapp.co/) - the minimal end of the category, one screen. Screenshot: `research/screens/blocks-bobby-landing.png`

**Craft (Refero, outside the category):**
- Visitors, [visitors.now/vs/google-analytics](https://refero.design/pages/e8da34d5-3d08-4fbd-a78d-8876e59074e2) - a privacy-first alternative selling itself against an incumbent
- Cushion, [cushion.so](https://refero.design/pages/b711f2e6-e33f-4c4c-90cb-e8984b6bc47a) - calm SaaS landing, "no credit card required" under the CTA
- Copperx, [copperx.io/personal-banking](https://refero.design/pages/fa494fb4-ed78-4b94-b8a5-a9bcb398de53) - money product, dedicated security section
- Vivid Money, [vivid.money spending analytics](https://refero.design/pages/e3694554-871d-4462-9779-3cd060d749a0) - money product, hero carries a real product view, Inter

### Block order in the sources, top to bottom

| Source | Order |
|---|---|
| ReSubs | header nav / hero (H1 plus two-line promise plus store ratings) / stats strip (18,000+ users, 50,000+ subs, 20+ countries, 100% privacy-first) / preset gallery (461 presets, "browse full list") / feature grid 3-up / second feature row (savings assistant, alternatives, cancel instructions) / testimonials with dates and source / FAQ ("Can ReSubs access my bank account?") / closing CTA / footer with an article list |
| Rocket Money | sticky header / hero (H1 "The money app that works for you") / social proof plus press logos ("Join 10 million+ members", "$2.5 billion saved", with a legal footnote) / feature block: subscriptions / feature block: spending / feature block: autopilot savings / Premium block with a free-vs-Premium comparison / more features (credit score, bill negotiation) / testimonials / footer |
| Bobby | announcement bar / hero (H1 plus promise plus one CTA) / one testimonial quote / small footer. Four blocks total |
| Visitors (Refero) | dark pill nav / hero (headline, subhead, primary CTA, secondary "see demo", "no credit card required") / 3 blurbs under the hero / "Set up in minutes" numbered 3-step strip / product screenshot / comparison table against the incumbent / realtime section / web vitals / "why switch" prose / FAQ accordion |
| Cushion (Refero) | minimal nav / centered hero (headline, paragraph, primary plus "Talk to a human", "30 day free trial. No credit card required.") / bento product mockups / feature blocks including "Privacy-first by default" / two-card comparison (green checks against red crosses) / FAQ accordion with a support email / grouped footer |
| Copperx (Refero) | header / hero plus phone mockup / avatar carousel "chosen by thousands" / 3-column feature cards / two-up account security section (2FA panel plus security icons) / partner logos plus testimonial / FAQ accordion / footer |
| Vivid (Refero) | header / hero (bold headline, subtitle, one CTA) plus phone mockup showing a real donut chart / two-column feature grid with notification previews / donut chart spending section / multi-column footer |

### Decisions

| Source | Block | Verdict | Traces to | Scope | Where we are better and how |
|---|---|---|---|---|---|
| all seven | Header: wordmark, one or two links, sign in | TAKE | GC1 App Header (`pages/navigation.md`); the landing is the one screen with a marketing header | MVP | Competitors put "Sign up" as the loud action; ours is "See how it works", because the sign-up ask before value is growth zone 1 |
| all seven | Hero: H1, one-sentence promise, primary CTA | TAKE | J-MAIN; SEO block B, exactly one H1 (`pages/seo.md`) | MVP | Rocket Money's H1 is about the app ("The money app that works for you"); ours names the person's outcome, per design principle 3 (plain money language) |
| Cushion, Visitors | Reassurance line directly under the CTA ("no credit card required") | TAKE, DIFFERENTLY | growth zone 1 (bank wall at first contact); J1; J5 | MVP | Ours says the harder thing: "No bank connection needed to start". The whole category asks for the bank in step 1 to 2; this line is the promise the rest of the page has to keep |
| Vivid, Cushion, Copperx | Product preview in or right under the hero | TAKE, DIFFERENTLY | growth zone 2 (cryptic charges); H0 (an avoider must see the calm view before committing) | MVP | Vivid shows a donut chart, Copperx a phone in a hand. Ours shows the actual calm list with real merchant names and one total, because the value we sell is legibility, not a chart |
| Visitors | "Set up in minutes": a numbered 3-step strip | TAKE | Phase 3 barrier (the manual path is fragmented and tedious); the 3-tap activation node (`docs/sitemap.md`) | MVP | Names the length of the path before any commitment. The category shows features, never the length of the road, and length is exactly what an avoider is bracing for |
| ReSubs (no bank at all), Rocket Money (bank only) | Two paths block: connect a bank read-only, or add it yourself | TAKE, DIFFERENTLY | D1, D2; J1; J5; growth zone 1 | MVP | The category is split into two camps and each hides the other option. We show both as equals on the front door, which is the whole point of D2 |
| Copperx (security section), ReSubs (privacy claim in a stats strip) | Trust block: what we access, what we never do, read-only, delete any time | TAKE | J1, J5, E3; design principle 4 (trust through transparency); GC6 Data Source and Trust | MVP | ReSubs states "100% privacy-first" as a badge in a number strip, and Copperx shows security iconography. A badge is a claim; ours is a plain list of what happens with the data, in the same words used later at the connect step |
| ReSubs | Preset gallery ("461 preset subscriptions", browse the full list) | TAKE, DIFFERENTLY | D2; Phase 3 barrier (tedium of manual work); J-MAIN | MVP | ReSubs uses it as a feature boast. We use it as evidence that the manual path is not punishment: a short row of recognizable brands, plus the count, next to the manual path |
| Rocket Money (Premium block), ReSubs (FAQ "is it free") | Plan line: what is free, what is Pro | TAKE, DIFFERENTLY | D3 (the paywall sits at depth), D4 (7.99 / 69); J1 (is this a trap?) | MVP | Rocket Money runs a full free-vs-Premium comparison table on the landing, which turns the front door into a sales page. Ours is one honest line plus a link: the whole calm view is free, Pro is history and trends |
| ReSubs, Visitors, Cushion, Copperx | FAQ accordion | TAKE | J1, J5; growth zone 1; SEO block D (FAQPage schema, `pages/seo.md`) | MVP | ReSubs already proves the questions people arrive with ("Can ReSubs access my bank account?", "Do I need to create an account?"). Ours answers the same four objections in the voice of `voice.md`, and it is the only block on the page allowed to use the word "bank" twice |
| ReSubs, Rocket Money | Closing CTA repeat | TAKE | the page is long on mobile; J-MAIN | MVP | Same one action as the hero, not a second, louder one. The category escalates at the bottom |
| all seven | Marketing footer: legal, privacy, contact | TAKE | `pages/navigation.md` (the landing is the one screen with a footer); SEO block E (crawlable links) | MVP | Ours puts the privacy policy first, not last, because privacy is the objection, not a formality |
| ReSubs | Stats strip: 18,000+ users, 50,000+ subscriptions, 20+ countries | SKIP for now | nothing true to put in it at launch; a fabricated number breaks design principle 4 | LATER | Returns when the numbers are real |
| Rocket Money | "$2.5 billion saved", "Join 10 million+ members", press logos | SKIP | traces to nothing on our side, and it frames the first contact as money pressure, which is growth zone 3 (no calm, judgment-free space) | out | The savings counter is the exact register an avoider retreats from |
| ReSubs, Rocket Money, Copperx, Bobby | Testimonials and store ratings | SKIP for now | no users at launch; a placeholder testimonial breaks design principle 4 | LATER | Returns with real quotes, and then it carries the emotional beat (E2), not a star count |
| Visitors, Cushion | Comparison table against a named competitor | SKIP here | no barrier asks for it at first contact, and a head-to-head raises the anxiety register | LATER | Belongs to the SEO engine as its own page (`pages/seo.md`), not to the front door |
| Rocket Money | Feature blocks for spending, autopilot savings, credit score, bill negotiation | SKIP | out of product scope: Tendd is not a budgeting app (CLAUDE.md, product boundary) | out | These are the blocks that turned Rocket Money and Emma into platforms and buried the subscription core |
| Cushion | Secondary CTA "Talk to a human" | SKIP | no support desk at MVP; the promise would be false | LATER | |
| Copperx | Avatar carousel "chosen by thousands" | SKIP | same as testimonials: nothing true yet | LATER | |
| Bobby | Announcement bar above the header | SKIP | no message worth an interruption on the calmest screen of the product; design principle 1 | out | |

### Our order, mobile-first

1. Header (wordmark, "How it works", Sign in)
2. Hero: H1, one-sentence promise, primary CTA, the "no bank connection needed to start" line
3. Product preview: the calm list with real names and one total
4. How it works, three numbered steps
5. Two paths: connect a bank read-only, or add it yourself with presets
6. Trust: what we access, what we never do, read-only, delete any time
7. Plan line: the whole calm view is free, Pro is depth
8. FAQ, four objections
9. Closing CTA, the same single action
10. Marketing footer, privacy first

Ten blocks, drawn from five sources, matching none of them: ReSubs has no product preview
and no two-paths block, Rocket Money has no trust block and no honest plan line, Visitors
and Cushion carry a comparison table we dropped, Vivid and Copperx have no FAQ answering a
bank objection. The reassurance line, the how-it-works strip and the FAQ are craft borrowed
from outside the category; the preset row is the one block taken from a direct competitor,
and it is repurposed.
