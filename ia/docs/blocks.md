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
| C. List dashboard | **second-hand**: Refero indexes real in-product screens (Monarch Money), plus two category peers on iOS | available |
| D. Object detail | **second-hand**: Orbit's own detail sheet through Refero, plus Duolingo's cancel-side screen | available |
| E. Activity feed | **partly**: the category has no feed at all, only per-item reminders (Subo, second-hand) plus a public promise on Rocket Money's landing | available, but in the wrong register |
| F. Task guide plus confirmation | partly available: ReSubs publishes cancel guides | available |
| G. Account and settings | **missing**: behind login | available |

**Correction after type C ran (2026-08-04).** The line above says the domain half is missing
for five types because competitor products are behind login. That is true of Playwright, and
it turned out to be untrue of the whole question: Refero indexes screens from *inside* logged
in products, so the domain half can come back through the craft instrument. For type C it did:
Monarch Money's own recurring screens, plus two subscription trackers on iOS. Such a source is
**second-hand and dated**: we did not open it, we cannot date it, and it is one capture rather
than a live walk. It is marked as such wherever it is used, and it never carries a claim on its
own. The availability table above is corrected as each type runs.

For the types marked missing, the pack fallback applies and the founder approved it on
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

---

## Type B. Onboarding step (nodes 1.2 Path Choice, 1.3 Connect Bank, 1.4 Add Subscription, 1.5 Guided Reveal)

Four screens, one type: each is a single step that asks for exactly one thing and then gets
out of the way. This is the chain the whole product is judged on, because it is where the
avoider decides to stay or to close the tab, and where H0 is either won or lost.

**The domain half is missing.** Every competitor puts these screens behind signup, and we do
not log in. The fallback applies: the craft half stays with Refero, the domain half is
replaced by our own research, and the "where we are better" column names the barrier the
block works on. Two real domain sources survive and they are not a competitor's marketing
page:

- **Plaid Link**, the component we actually embed (D5), documented publicly at
  [plaid.com/docs/link](https://plaid.com/docs/link/), demo index at
  [plaid.com/demo](https://plaid.com/demo/). Screenshot: `research/screens/blocks-plaid-link-flow.png`.
  Its published flow is a hard constraint on node 1.3, not an inspiration: Link opens, the
  person picks their bank, is handed off to the bank's own OAuth, signs in there, chooses
  which accounts to share, and comes back linked. Credential entry, MFA, error handling and
  the confirmation email all live inside Link. **We do not design those screens.** What we
  own is the screen before the handoff and the state after the return.
- **Our own research**: growth zone 1 (the bank wall at first contact), growth zone 4 (the
  all-or-nothing reveal, the H0 crux), the Phase 3 barrier (the manual path is fragmented and
  tedious), J1, J5, and the three-tap ceiling recorded in `docs/sitemap.md`.

### Craft sources (Refero)

| Node | Screen | What it contributes |
|---|---|---|
| 1.2 | [Arcade, "How would you like to get started?"](https://refero.design/pages/eb11bc02-74f7-488e-819f-6ac1278bb48f) | a whole screen that is nothing but a question and option cards, one marked as the popular one |
| 1.2 | [Care.com, two option cards](https://refero.design/pages/e2d54fc8-1c65-41c7-a3b7-cbe87010b5f2) | exactly two paths, a compact legal footer under them, no other chrome |
| 1.2 | [Rarible, "Choose Type"](https://refero.design/pages/aa751900-41bd-4bed-bf6b-18b27a017d80) | each option card carries an icon, a label and one line of consequence |
| 1.2 | [Fernand, migration choice](https://refero.design/pages/5b814b55-0260-4a11-b05f-2145d32be77d) | an escape hatch as a secondary action ("none of these") |
| 1.3 | [Rox, integration consent modal](https://refero.design/pages/9b77f9c5-5dea-4ca7-aa89-a66481114db9) | permission detail lines and an explicit read against write choice before the connect button |
| 1.3 | [Stripe, "Activate payments"](https://refero.design/pages/2e8c180d-96fe-4572-bd87-9fb0c6e16f50) | headline, one paragraph, primary action, "Skip for now", and two info blocks: what is needed and how long it takes |
| 1.4 | [IFTTT, "Choose a service"](https://refero.design/pages/c1eba600-7a7b-4605-9f6b-4b312764f99a) | back plus title, a filter, a search field, then a grid of logo tiles: search and browse in one screen |
| 1.4 | [Square, "Create an Item"](https://refero.design/pages/468dcc75-15dd-4a56-b881-4584346c5874) | the manual fallback form: name, category, price, save and cancel |
| 1.5 | [Quizlet, completion screen](https://refero.design/pages/4c032c5b-3b15-4cfc-b533-5abc42056e0a) | a finished state that reports a result, then offers exactly the next steps that make sense |
| 1.5 | [Product Hunt, success card](https://refero.design/pages/13b35666-ce41-4be0-a981-8bd3f297eb33) | one success statement, one primary action, and the page continues underneath it |

### Decisions

| Node | Source | Block | Verdict | Traces to | Scope | Barrier it works on |
|---|---|---|---|---|---|---|
| all four | Stripe, Care | Step chrome: back, a step marker, nothing else | TAKE, DIFFERENTLY | the three-tap ceiling (`docs/sitemap.md`); GC1 | MVP | Ours shows the position without a progress bar. A bar on step 1 of 4 tells an avoider the road is long; "you can go back" is the reassurance that actually matters |
| all four | own research | Exactly one question per screen, one primary action | TAKE | design principle 2 (one thing at a time); growth zone 4 | MVP | The all-or-nothing shock is built out of screens that ask for several things at once |
| 1.2 | Arcade, Care, Rarible | Two option cards: connect a bank, or add it yourself | TAKE | D1, D2; J1; J5; growth zone 1 | MVP | This screen exists only because of the bank wall. Both cards are the same size and the same weight: the manual path is not the consolation prize |
| 1.2 | Arcade ("Popular" badge) | A recommendation badge on the faster option | SKIP | nothing to trace it to, and it turns an equal choice into a nudge toward the bank | out | The nudge is the wall in a softer form |
| 1.2 | Rarible | One line of consequence under each option label | TAKE | J1; growth zone 1 | MVP | Says what happens next in plain words ("read-only, takes about a minute" against "start with one, add more later"), so neither door is a leap in the dark |
| 1.2 | Fernand | Escape hatch as a secondary action | TAKE, DIFFERENTLY | J1; the retreat phase of the As-Is journey | MVP | Ours is "I will do this later", and it lands on Home with an empty state, not on a dead end. Retreat is the As-Is default; the product should survive it |
| 1.3 | Stripe | "What is needed" and "how long it takes" before the action | TAKE | Phase 3 barrier; J1 | MVP | The category asks for bank credentials with no statement of duration or of what happens after. Two lines remove the biggest unknown |
| 1.3 | Rox | Permission lines, read against write stated explicitly | TAKE | J1, J5, E3; GC6; design principle 4 | MVP | Read-only is our position, not a setting: we say what we can see, what we can never do, and that it can be disconnected at any time, on the screen before the handoff |
| 1.3 | Plaid Link | Institution search, credential entry, MFA, account selection | DO NOT DESIGN | Plaid Link owns these screens (`plaid.com/docs/link`) | MVP | Our wireframe shows the handoff as one boundary block, and the states around it. Drawing a fake credential screen would be a lie about the product |
| 1.3 | Plaid Link | Return states: connected, cancelled, failed, no accounts found | TAKE | node states in `docs/sitemap.md`; J4 | MVP | Link returns four outcomes and the category only ever designs the happy one. A cancelled connection must land somewhere calm, not on an error |
| 1.3 | Rox (write toggle) | A read against write toggle the person operates | SKIP | we never request write access, so a toggle would imply we could | out | A control that only has one legal position is theatre |
| 1.4 | IFTTT | Search field plus a browsable grid of logo tiles | TAKE | D2; Phase 3 barrier; growth zone 2 (real names, real logos) | MVP | Turns "type in everything you pay for" into "recognize what you already know". The tedium of the manual path is the reason the manual path fails today |
| 1.4 | Square | Manual form: name, price, billing cycle, first charge date | TAKE, DIFFERENTLY | D2; J-MAIN | MVP | Ours opens prefilled from the chosen preset, so the form is a confirmation, not data entry. A blank form is the version of this screen that people abandon |
| 1.4 | Square | Category, image upload, SKU and other catalog fields | SKIP | nothing traces to them; category is derived, not asked | out | Every extra field is a reason to close the tab |
| 1.4 | own research | "Add another" as a quiet secondary action after saving | TAKE | J-MAIN (all recurring charges in one view) | MVP | The one-at-a-time loop has to be cheap, or the manual path stops at the first entry |
| 1.5 | Quizlet, Product Hunt | A result stated in one sentence | TAKE, DIFFERENTLY | D1; growth zone 4; H0 | MVP | This is the reveal, and D1 makes it gradual: the count first, then the categories, then the total, each paired with an action. The category dumps a full dashboard in one frame, which is exactly the all-or-nothing shock |
| 1.5 | own research | Real merchant names and logos in the first list a person sees | TAKE | growth zone 2; J3 | MVP | Half the charges are unreadable bank codes today. The first screen after the connect is where that gets fixed, or the whole promise fails |
| 1.5 | Quizlet | Next steps offered at the end | TAKE, DIFFERENTLY | J-MAIN; J2 | MVP | Ours offers one: go to the calm view. A menu of next steps at the emotional peak is a second decision nobody asked for |
| 1.5 | own research | Loading state with an honest wait message | TAKE | node state 1.5.1 in `docs/sitemap.md`; J1 | MVP | A bank sync takes seconds and the screen is empty. That empty stretch is where the avoider's doubt lands, so it gets a line, not a spinner alone |
| 1.5 | category habit | A celebratory total, "you are spending $X a month" as the first thing | SKIP | growth zone 3, growth zone 4; design principle 1 | out | The number first is the shock. Under D1 it comes third, after the count and the categories, and paired with an action |

### Our order, per node, mobile-first

**1.2 Path Choice.** Back / one question as H1 / two equal option cards, each with a label,
an icon and one line of consequence / "I will do this later" as a quiet secondary / a legal
line under the fold.

**1.3 Connect Bank.** Back / H1 / one paragraph on what happens / what we can see and what
we can never do (read-only, three lines) / how long it takes / primary action that hands off
to Plaid Link / "add subscriptions myself instead" as the way out / the four return states
as their own nodes.

**1.4 Add Subscription.** Back / search field / a row of the most tracked brands as tiles /
a prefilled form when a preset is picked (name, price, cycle, next charge) / save as primary
/ "add another" after saving / a fully manual entry as the fallback path.

**1.5 Guided Reveal.** The loading state with an honest line / step one: the count, paired
with an action / step two: the categories / step three: the total / one primary action into
the calm view.

Four screens, ten craft sources, one embedded component that dictates its own middle. The
composition matches none of the sources: Arcade and Care have no escape hatch, Stripe has no
read-only statement, IFTTT has no prefilled form behind the tile, Quizlet reveals everything
at once. The gradual reveal is ours by decision D1, and it is the one block in this type that
no reference could have supplied.

---

## Type C. List dashboard (node 2.6 Home)

The screen the whole product is. Everything before it is a path to it, everything after it is
a detail of it. It carries J-MAIN in one frame: all recurring charges in one calm view.

**The domain half came back, through the other instrument.** Playwright cannot reach it, but
Refero indexes screens from inside logged in products, and it has the exact screen: Monarch
Money's own recurring list, in two states. Two subscription trackers on iOS are in the index
too. These are second-hand captures, not a live walk: we did not open them, we cannot date
them, and they are marked that way in every row below.

### Sources

**Domain, second-hand through Refero:**
- [Monarch Money, `/recurring/all`](https://refero.design/pages/fa06d2af-a192-4105-b136-edb66a555242) - a soft competitor in `research/docs/competitors.md`, the filled state
- [Monarch Money, `/recurring/upcoming`](https://refero.design/pages/584d72ab-1c8c-4326-99a9-9e284d068654) - the same screen empty, with the connect-an-account card
- [Subo](https://refero.design/screens/5385855d-77ed-4ac7-829d-77eb62f6d595) - a subscription tracker on iOS, category peer, grouped by category with per-group totals
- [Orbit](https://refero.design/screens/29d16075-67b0-43da-8373-3289e47f5a3f) - a subscription tracker on iOS, category peer, count and total in the header

**Craft, outside the category:**
- [Cursor, billing dashboard](https://refero.design/pages/819744b3-e4a8-49fc-a182-a1187e622c11) - usage summary cards above a plain list, no chart anywhere
- [Dime, budget overview](https://refero.design/screens/233611e2-db04-46da-a987-8a7fdcf4a1f5) - mobile: summary on top, grouped list under it, single column
- [Teal, resume list](https://refero.design/pages/55d4bee1-eccf-4238-8f20-6015deee2e48) - a list with exactly one primary create action

### Block order in the sources

| Source | Order |
|---|---|
| Monarch, filled | sidebar of ten product sections (Recurring is one of them) / tabs: Recurring, Monthly, All recurring / filter row: By status, Filters, and a "Manage recurring" button / a table with five columns: name with icon, next due date with days remaining in parentheses, payment account, category with an emoji, amount / free trial progress and a discount offer pinned in the sidebar |
| Monarch, empty | same chrome / month label / a three column split: Income, Expenses, Credit cards / a view switch: Today, List, Calendar / one centered card: "Automatically identify and track your recurring transactions" with a single button, "Connect an account to get started" |
| Subo | top bar / category header rows, each with its own total / stacked cards: logo, name, renewal date, cost / search field at the bottom |
| Orbit | header with the count and the yearly total / an Upgrade pill next to it / a plus button / sort and group popover / the list / a three tab bar |
| Cursor | sidebar / stacked cards: included usage, on-demand usage, invoices / a table inside the last card / no chart |
| Dime | top actions / a budget summary with the remaining amount and a progress bar / a grouped, dated expense list / a date range selector at the bottom |

### Decisions

| Source | Block | Verdict | Traces to | Scope | Where we are better and how |
|---|---|---|---|---|---|
| Orbit, Dime, Cursor | Summary strip at the top: the count in plain language and the monthly total | TAKE | GC3; J-MAIN; D1; design principle 2 (the most important number is the biggest thing) | MVP | Orbit puts the count and the total in a header line next to an Upgrade pill. Ours is the largest thing on the screen and has nothing selling next to it |
| Subo | Grouping by category, each group carrying its own subtotal | TAKE, DIFFERENTLY | J-MAIN; J3; design principle 2 | MVP | Ours groups by default and offers no sort menu at MVP. A grouping the person has to choose is a decision handed to someone who came here to stop making decisions |
| Monarch, Subo | List item: logo, real merchant name, amount, next charge | TAKE | GC4; growth zone 2 (cryptic charges); J3 | MVP | This is the block the whole category treats as table stakes and nobody has made a differentiator. Real names and logos are the fix for the unreadable bank code, and they are the reason the first look is not futile |
| Monarch | Next due date with days remaining in parentheses | TAKE, DIFFERENTLY | J4 (never be surprised); GC4 | MVP | Ours drops the raw date to second place and leads with "in 6 days", because the question is never "what is the date", it is "is this about to happen" |
| Monarch | Payment account column | SKIP | nothing traces to it; our person does not reconcile accounts | out | Every column that is not load-bearing makes the list denser, and density is the overwhelm barrier |
| Monarch | Three way split: Income, Expenses, Credit cards | SKIP | out of product scope; this is accounting framing | out | The split is what turns a subscription tracker into a budgeting app, which our audience actively avoids |
| Monarch | View switch: Today, List, Calendar | SKIP for now | design principle 2; no barrier asks for a calendar at MVP | LATER | A calendar of charges is a legitimate Pro-side idea; on the calm view it is a second product |
| Monarch, Orbit | Filter row and sort popover | SKIP for now | a list of ten to twenty items does not need filtering, and offering it implies the list will be long | LATER | Implying a long list is itself anxiety. Returns if real lists turn out long |
| Subo | Search field | SKIP for now | same reason as filters | LATER | |
| Monarch (trial progress plus discount), Orbit (Upgrade pill) | Upsell inside the calm view | SKIP | D3: the paywall sits at depth, never at basic visibility | out | This is the single most important skip of this type. Emma's own reviews name aggressive upsells as the thing that spoils an otherwise strong app, and the calm view is exactly where an avoider must not be sold to |
| Monarch, empty state | "Connect an account to get started" as the only way out of the empty state | TAKE, DIFFERENTLY | D2; growth zone 1; J5 | MVP | Their empty state is the bank wall again, one screen later. Ours offers both paths, in the same words used at Path Choice, so the manual route survives all the way to the empty list |
| own research | Attention row, shown only when something needs it: a price change, a failed payment | TAKE | J4; GC4; D-Concept (amber, never red) | MVP | The category either says nothing or shouts in red. A quiet amber line that appears only when it is true is the version an anxious person can live with |
| own research | Data source and trust line under the list | TAKE | GC6; design principle 4; J5 | MVP | No competitor tells you where the number came from. Ours names the source and the last sync, because a number with no origin is a number to distrust |
| Monarch, Orbit | A prominent add or manage button in the header | TAKE, DIFFERENTLY | D2; J-MAIN | MVP | Ours is a quiet secondary. The job of this screen is to look, not to add; a plus button competing with the total sends the wrong instruction |
| Vivid, Monarch cash flow | Charts, donuts, spending graphs | SKIP | growth zone 3 (too many numbers and graphs); the depth belongs to 5.12 | LATER | The chart is the exact texture our person named as overwhelming, and putting it behind Pro is D3 working as designed |
| Cursor | Stacked cards instead of one flat table | TAKE, DIFFERENTLY | mobile-first; design principle 2 | MVP | A five column table does not survive 360px. Ours is one card per subscription, and the card carries four things, not five |

### Our order, mobile-first

1. App header (GC1): the screen name and a quiet way into the account
2. Summary strip (GC3): "You are paying for 14 subscriptions", the monthly total as the biggest thing on screen, one line of context under it
3. Attention row, only when it is true: a price change or a failed payment, amber, one line
4. The list, grouped by category, each group with its own subtotal
5. The item (GC4): logo, real name, amount, "in 6 days"
6. Add a subscription, as a quiet secondary
7. Data source and trust line (GC6): where these numbers come from and when they were last checked
8. Tab bar (GC2)

States: empty with both paths, loading as a skeleton of the list rather than a spinner, sync
failed with the last known figures still visible and dated, and the ordinary filled state.

Eight blocks. Monarch has three of them and buries the screen under ten product sections plus
a trial countdown; Subo has the grouping and no summary; Orbit has the summary and sells next
to it; Cursor and Dime supplied the shape (summary first, plain list under it, no chart) and
know nothing about our people. The attention row and the trust line exist in none of the six.

---

## Type D. Object detail (node 2.7 Subscription Detail)

One subscription, everything known about it. This screen is where J3 lives, the clarity job:
"what IS this charge". It is also the doorway to J2, the cut job, because a person decides to
cancel here and not on the list.

**The domain half is second-hand again, and this time from both sides of the mirror.** Orbit,
a subscription tracker on iOS, has the detail sheet. Duolingo has the screen our person meets
at the other end, when they go to the merchant to cancel: that one is a retention screen, and
knowing its shape is what makes node 4.9 honest later.

### Sources

**Domain, second-hand through Refero:**
- [Orbit, subscription detail](https://refero.design/screens/6ca00e91-4000-4547-94ed-63be3c448fe9) - category peer, iOS: hero with logo, name and price / five label and value rows (Billing, Next payment, Total spent, Subscribed, Category) / a Billing History card / a full width "Mark as Cancelled" / a "Delete subscription" text link
- [Duolingo, Manage subscription](https://refero.design/pages/cbce989c-30cb-4180-9597-55a434008700) - the merchant side: an expiry banner with REACTIVATE as the primary action / a benefits list that argues against leaving / current plan, next payment, payment method with the card ending / a per-benefit "TURN OFF"

**Craft, outside the category:**
- [TwelveLabs, billing](https://refero.design/pages/5ec94fab-0728-45b7-9e99-aaef03841592) - stacked cards: plan, payment, summary, history, including the history's empty state
- [Wealthsimple, accounts](https://refero.design/pages/8a1adb56-9e86-49c3-9daf-72500aed3ac1) - back link, title, a stacked list of object cards, no tabs on one object
- [Shop, order history](https://refero.design/pages/47c793b4-b845-4454-9022-c6f717cf3402) - a history block that is designed for being empty

### Decisions

| Source | Block | Verdict | Traces to | Scope | Where we are better and how |
|---|---|---|---|---|---|
| Orbit | Hero: logo, name, the amount as the largest thing, cycle beside it | TAKE | J3; GC4; design principle 2 | MVP | Orbit sets the price in lavender at 34pt on a purple gradient. Ours is the same hierarchy in a calm register: the number is big because it is the answer, not because it is dramatic |
| own research | The decoder line: "Appears on your statement as SPOTIFYAB STOCKHOLM" | TAKE | growth zone 2 (cryptic charges); J3 | MVP | **This block exists in none of the sources.** It is the whole reason the detail screen exists: the friendly name is what we show, the bank code is what she saw, and connecting the two is the moment the charge stops being frightening |
| Orbit | Label and value rows: billing cycle, next payment, category | TAKE | J3, J4; GC4 | MVP | Ours leads the next payment with "in 6 days" and keeps the date second, the same rule as on the list |
| Orbit ("Total spent") | Paid so far | TAKE, DIFFERENTLY | J2 (deciding whether to cut); E2 | MVP | Neutral label, no exclamation, and only once there is enough history for it to mean anything. The same number can read as a small win or as an accusation, and the label decides which |
| Duolingo, Orbit | Payment method, "Visa ending 4400" | TAKE, DIFFERENTLY | J3; design principle 4 | MVP | We do not hold card data, so we never print card digits. We name what we actually know from the source: "Charged to Chase checking". This is the column that was dropped from the list on purpose and belongs here, one level deeper |
| Orbit, TwelveLabs | Charge history | TAKE, DIFFERENTLY | J3, J4; D3 | MVP | The last three months are free, because that is basic detail. Longer history and trends are Pro, node 5.12. D3 in one row: depth is paid, visibility is not |
| own research | Price change marked inside the history, in amber | TAKE | J4; D-Concept (amber, never red) | MVP | The category tells you the new price and never shows you the old one. Ours marks the row where it changed, so a price rise is a fact with a date, not a suspicion |
| Orbit ("Mark as Cancelled") | Primary action on the object | TAKE, DIFFERENTLY | J2; D3 (never a paywall at the cancel moment) | MVP | Orbit's primary marks a status the person has to achieve elsewhere on their own. Ours opens the cancel guide and actually helps, and it is free |
| Duolingo | Benefits list plus a REACTIVATE banner | SKIP | retention framing; we are not the merchant | out | Kept as an input for node 4.9 instead: our cancel guide must warn that this is exactly what the merchant will show, so the pressure is expected rather than surprising |
| Duolingo | Per-benefit "TURN OFF" toggle | SKIP | not our object; we do not control the merchant's plan | out | |
| Orbit | Edit pencil on the history card | SKIP | editing past charges implies we keep an editable ledger of facts | out | History is evidence. If it is wrong, the fix is to report the source, not to overwrite the record |
| own research | Correction action: "this is not a subscription" | TAKE | design principle 4; the detection is a guess and must be correctable | MVP | Automatic detection is wrong sometimes, and every competitor makes that the person's problem. A visible correction is what makes the figures trustworthy |
| Orbit | Delete subscription as a destructive text link | TAKE, DIFFERENTLY | D-Concept (clay only for a genuine error, never red decoration) | MVP | For a bank-detected item ours hides it and says it can come back; only a manual entry is truly deleted. Deleting something the bank will re-detect tomorrow is a lie about what happened |
| Wealthsimple | Tabs on the object | SKIP | one object, one screen; design principle 2 | out | |
| own research | Data source and trust line | TAKE | GC6; design principle 4 | MVP | Where this figure came from and when it was last checked, on the screen where the person is deciding to act on it |

### Our order, mobile-first

1. Back to the list (GC1)
2. Hero: logo, real merchant name, the amount, the cycle beside it
3. Status: a quiet badge, amber only if the price changed or a payment failed
4. The facts: next charge "in 6 days, 11 March", billing cycle, charged to, category, paid so far
5. The decoder line: how this charge appears on the statement
6. Charge history: the last three months, the price change marked; deeper history is Pro
7. Primary: help me cancel this, into node 4.9
8. Secondary: edit the details, and "this is not a subscription"
9. Remove from the list, quiet, and honest about whether it can come back
10. Data source and trust line (GC6)

States: a manual entry (no bank source, no decoder line, editable), a detected entry (source
named, correction offered), price changed, payment failed, and already cancelled.

Ten blocks. Orbit has five of them and its primary action only marks a status; Duolingo has
the shape of what our person is about to walk into and none of what she needs before she does;
TwelveLabs and Wealthsimple supplied the stacking and the empty history. The decoder line and
the correction action exist in no source, and they are the two blocks that make the screen
worth opening.

---

## Type E. Activity feed (node 3.8 Alerts)

The screen that closes J4, never be surprised by a price change or a failed payment. It is
also the screen that decides whether the product is a source of calm or one more thing that
buzzes at you.

**Two findings before any block.** First, on the domain side: **the category has no such
screen.** Subo and Orbit configure reminders per subscription, inside the add and edit flow,
and deliver them outside the app; there is no place to go and see what happened. Rocket Money
sells the promise on its public landing, opened 2026-08-04: "We'll notify you of important
events that need your attention so you're never caught off guard", and nothing behind it is
visible to us. Second, on the craft side: the pattern exists everywhere, but the good
examples are **enterprise audit logs**, and their register is the opposite of ours. Both
findings are load-bearing, and both push the same way: this screen has to be invented rather
than adapted.

### Sources

**Domain:**
- Rocket Money, [rocketmoney.com](https://www.rocketmoney.com/), opened 2026-08-04: the promise stated in marketing, no screen exposed
- [Subo, add and edit](https://refero.design/screens/6960fdf8-365d-4fb3-90a2-269fbffecde6) and [the reminder step](https://refero.design/screens/2a6c41f1-ae0e-4516-9a0c-42de13b8e969), second-hand through Refero: a renewal reminder toggle, reminder timing, and a notes field, all per subscription
- [Subo, subscription screen with delete confirmation](https://refero.design/screens/c38779de-5f0c-49ec-a2a4-afabe07eb4f4): reminders shown as a card on the object, not as a feed

**Craft, outside the category:**
- [Dropbox, admin activity log](https://refero.design/pages/5e6ff4e4-04f7-42ea-8790-4d7f92760895) - the complete pattern: search, filters, a multi column audit table
- [Airbnb, notifications](https://refero.design/pages/c1ac5160-ac20-4557-84a6-f904b640df11) - one card: icon, message, dismiss, and nothing else
- [Missive](https://refero.design/pages/f9871a0f-a2eb-472b-8fa4-d5b9f5455340) - an activity and notification feed inside a working surface

### Decisions

| Source | Block | Verdict | Traces to | Scope | Where we are better and how |
|---|---|---|---|---|---|
| Missive, Airbnb | A list of events, newest first, each one a plain sentence | TAKE | J4; GC5; design principle 3 (plain money language) | MVP | The category has no such list at all. Ours is a sentence a person can read once, not a log line to decode |
| own research | Two groups: "Needs you" and "Just so you know" | TAKE | J4; design principle 2; growth zone 3 | MVP | **Exists in no source.** A feed sorted by date makes the person scan to find out whether anything is wrong. Sorting by whether it needs them answers that question before they start reading |
| Dropbox | Unread counts, badges, red dots | SKIP | D-Concept: status is a quiet gray badge, never red; growth zone 3 | out | A red badge on a money app is an anxiety machine, and our person already avoids opening the app. The count is quiet or it is absent |
| Dropbox | Search, filter row, multi column audit table | SKIP | the enterprise register; a person has a handful of events, not an audit trail | out | The whole craft half of this type is built for an admin proving what happened. Our person is deciding whether they need to worry |
| Airbnb | Dismiss on an item | TAKE, DIFFERENTLY | J4 | MVP | Ours marks it read and never deletes the underlying fact. Dismissing a price change should not erase that the price changed |
| own research | Price change alert shows the old price, the new price and the difference | TAKE | J4; growth zone 2; D-Concept (amber) | MVP | **Exists in no source.** Every product tells you the new number. The old one next to it is what turns a surprise into an explanation |
| own research | The action lives inside the alert: see the charge, help me cancel | TAKE | J2, J4; the flows in `docs/flows.md` | MVP | An alert with no action is a notification. An alert with the next step is the product doing the job |
| own research | An empty state that is a good state: "Nothing needs you right now" | TAKE | E1 (feel financially competent); H0 | MVP | In most products an empty feed reads as a dead end. Here it is the product working, and it is the single most reassuring sentence in the whole app |
| Subo | Reminder settings attached to each subscription | TAKE, DIFFERENTLY | J4; design principle 2 | MVP | Subo makes you set a reminder on every item, one at a time, which means an avoider sets none. Ours has one place that says what we will tell you about, linked from here and living in Settings |
| Subo | Notes field on a subscription | SKIP | nothing traces to it; it is a tracker feature for people who enjoy trackers | out | Our person is not a spreadsheet person, and that is in the audience definition |
| Subo, Rocket Money | Channel configuration (push, email) on this screen | SKIP here | belongs to node 6.16 Settings | MVP | One screen, one job. The feed shows what happened; the settings decide what arrives |
| own research | The source named on each alert: which account it came from | TAKE | GC6; design principle 4 | MVP | An alert that cannot say where it came from is a rumour |
| own research | Older events, collapsed | TAKE | design principle 2 | MVP | The recent past is the job. The distant past is history, and history is node 5.12 |

### Our order, mobile-first

1. App header (GC1)
2. "Needs you", usually empty: a failed payment (desaturated clay), a price change (amber)
3. "Just so you know": charges due in the next seven days, a newly detected subscription
4. The alert item (GC5): icon, one plain sentence, the merchant and the amount, when, the
   source, and one inline action
5. Older, collapsed
6. A link to what we tell you about, into node 6.16
7. Tab bar (GC2)

States: nothing at all ("nothing needs you right now"), only the quiet group, something in
"Needs you", and loading as a skeleton.

Seven blocks, and the two that carry the screen came from neither half of the sources: the
split into "needs you" and "just so you know", and the price change that shows the old number
beside the new one. The craft half taught us mostly what not to do, which is a legitimate
result and is written down here rather than quietly dropped.
