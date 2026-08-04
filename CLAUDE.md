# CLAUDE.md - Tendd

Rules for this repository. This file is loaded in full at the start of every session,
so it holds only what must hold NEXT time. It is not a journal and not a report.

- **Status** (what is done, what is next) lives in the README table and in `done:true`
  in `/_nav.js`. Never here: a third copy only drifts from the other two.
- **Decision records** (what we did, why exactly this, what we rejected and on what
  ground) live in `docs/decisions.md`. That file is never loaded; read it when you need
  the ground under a decision.
- **Budget: 200 lines.** A new rule enters by replacing or generalizing an existing one,
  not by being added next to it. Over budget means two rules inside already contradict.

**Project boundary:** one language (English); no brand at the start, the visual language
was found and locked at Concept (Petrol and Paper); about 16 screens.

---

## Product

**Tendd** helps people who are not into finance see and control their recurring payments
and subscriptions, turning money anxiety into calm, everyday clarity. Mobile-first
responsive web app, desktop in scope (a native app is not). Not a budgeting app: a calm,
low-friction visibility and control layer for recurring spend, for people who feel anxious
about money and avoid finance apps.

**Audience:** 22 to 42 (core 26 to 36), low to medium financial confidence, skeptical about
connecting a bank. Primary driver: reducing anxiety ("I know what is going out, and I am
okay"). Secondary: pride in a small win. They are not budget optimizers or spreadsheet fans.

**Primary job (J-MAIN):** "When I suspect I am paying for things I forgot about, I want to
see all my recurring charges in one calm view, so that I feel in control without becoming a
finance person." Secondary: cancel what I do not use (J3), never be surprised by a price
change or failed payment (J4).

**Free tier** is the whole calm view, uncapped: value before any bank connection, connect a
bank read-only through Plaid or add subscriptions yourself, the categorized list, basic
details, the monthly total, basic alerts. **Tendd Pro** is depth, not a visibility unlock:
history and trends, cancel support, advanced alerts, household view, export, priority
support. Out of MVP: full budgeting, investments, native app, bill negotiation, bill pay.

**Markets:** US and EU (US and Plaid first, per D5). **Stack hypothesis:** Next.js on
Vercel, Postgres, Plaid (US) and TrueLayer or GoCardless (EU), Stripe, PostHog.

**Riskiest assumption (H0):** that an avoider actually looks and feels calmer. It is
provable only in a prototype, so the MVP is built to test it, not to assume it. `[?]`

## Locked decisions

Founder, June 14 2026 (ground in `research/docs/strategy.md` section 6):

- **D1** Gradual reveal with a paired action (count, then categories, then the total).
- **D2** Manual entry plus presets at launch, as an equal second path.
- **D3** The paywall sits at depth (history, trends, advanced alerts), never at basic
  visibility and never at the cancel moment.
- **D4** Pro is 7.99 a month or 69 a year.
- **D5** US and Plaid first, EU deferred.
- **D-Free** (July 2026) No cap on subscriptions and no cap on bank connections in Free: a
  cap is a visibility cap, and it would break the reveal.
- **D-Concept** (July 2026) The visual language is Petrol and Paper: white canvas, Inter,
  petrol #1c6a76 spent only on the primary action, the current selection and the trust
  line; status is a quiet gray badge, never red; a price change is calm amber, a genuine
  error desaturated clay.

## Design principles

1. **Calm over clever.** Every screen lowers anxiety. No red, no urgency, no clutter.
2. **One thing at a time.** Progressive disclosure by default; the most important number is
   the biggest thing on screen.
3. **Plain money language.** "You are paying for 14 subscriptions", never "monthly recurring
   expenditure". Numbers always in context.
4. **Trust through transparency.** Say what happens with the data, every time. Show the
   source of every figure.
5. **Small wins feel good.** The moment a forgotten subscription is found is the product's
   most important emotional beat.

---

## Rules that bind every stage

**Language.** Internal md (this file, README, every `*/docs/*.md`) in English. Chat in
Ukrainian. Product copy and html pages in English. Registry labels in `/_nav.js` are
interface text: one language across the sidebar, mixed language counts as a defect.

**No em dash** in any output file of the project. Use a hyphen or rewrite the sentence.

**Navigation has two levels, and the roadmap has one owner.** `/_nav.js` is the single
registry of the project: it renders the sidebar on every page, and active / Next / SOON are
computed at render. A new page means one row plus `done:true`, never a hand written roadmap
in a page. `/_nav.css` owns the look; a page never describes `nav-*` itself. Per-stage
registries (`wireframes/_nav.js`, `design/_nav.js`) keep their data and classes in their own
namespace, because hub pages load both. Stage pages carry the roadmap; the screens of a
stage carry only their stage panel.

**`index.html` is the product home page, `overview.html` is the hub.** In any stage folder:
opening the folder lands on the product screen (node 0.0 from the flows); the list of all
pages of that stage is `overview.html`. This holds for `wireframes/` and `design/` alike.

**The wireframes are grey and frozen.** `wireframes/` is the structure contract: greyscale,
semantic, real copy, one page per state. Voice was the last stage allowed to edit text
there. From Concept on, color goes onto COPIES in `design/`, never onto the grey file, and a
colored page may differ from its grey original by styling only.

**Every artifact has a visible place.** A md that no page shows does not exist for the person
who decides. Three legal forms: its own page in the registry, a named section on the stage
page (with a `NAV_SECTIONS` entry), or a satellite page that declares `NAV_ACTIVE` and the
label of its nearest registry page. Critique and audit logs appear as a "was to became"
summary in a closed state, not as a list of open defects.

**Live md, unfrozen html.** Changing a md that already has a published page means rebuilding
the affected section of that page in the same step. If the page cannot hold the new material,
put a visible "updated after publishing" note on it and say so out loud.

**One owner per string.** SEO copy (title, description, H1, body) belongs to the IA node in
`ia/docs/pages/`. Interface strings (buttons, labels, states, toasts) belong to
`voice/docs/microcopy.md`; the IA node states what information the place needs, not the
wording. No product line exists in two editions. All product copy obeys `voice/docs/voice.md`.

**Values migrate, they are never re-derived.** One line of CSS values runs
`design/_theme.css` (Concept) into `design/kit/kit.css` (UI + Visual, git mv, the `:root`
block byte for byte) into `design/system/tokens.css` (Tokens + Components, split into
primitive and semantic). Each step adds a level; a value changes only by a named decision
("variable, value, why"), never as a side effect of an extract or a refactor. Every value
carries its origin in a comment next to it.

**Critique runs on two instruments.** Claude and Codex (read-only, see `AGENTS.md`), taken
independently and merged afterwards, with a "who found it" column. Codex owns what is
falsifiable in the source (contradiction between files, an orphan, a state that is not in
the code, a broken link, a rule violation); "breaks at 360px" and pixel checks stay with
Claude in a browser. Verify a finding by re-reading the place before fixing it; a finding
that does not hold stays in the log marked "dropped at verification", with the reason.

**Acceptance happens on screen.** Where a stage produces a screen or text on a screen, open
it in a browser, walk every state, narrow to 360px, and only then call it done. Ask for the
fix with a prompt, not by hand editing the file: a hand edit does not survive the next clone.

**Zone rules live in their own docs, this file only points at them:**
`wireframes/docs/conventions.md` (the grey contract), `voice/docs/voice.md` (the voice) and
`voice/docs/microcopy.md` (the line inventory), `ia/docs/sitemap.md` and `ia/docs/flows.md`
(structure), `design/concept/docs/concept.md` (taste and attributes; a visual decision with
no attribute is an invention).

---

## Where things live

```
/_nav.js /_nav.css /index.html   the project registry, its look, the entry page
CLAUDE.md  README.md  AGENTS.md  rules, status index, entry for the Codex critic
docs/decisions.md                decision log, never loaded
DESIGN-artifacts.md              draft design doc from the brand (Concept); DESIGN.md
                                 is produced from the code at UI + Visual
research/                        stages 01, 02 and 02+ together: research.html,
                                 personas, jtbd, cjm-as-is, cjm-to-be + docs/ + screens/
ia/                              structure: docs/sitemap.md, docs/flows.md, docs/pages/
wireframes/                      the grey clickable prototype: index.html (home),
                                 overview.html (hub), screens and states, docs/
voice/                           voice.md, microcopy.md and their pages
design/                          the whole visual half: concept/ (how the language was
                                 found), _theme.css, the colored screens flat in the
                                 root, overview.html as the hub
```
