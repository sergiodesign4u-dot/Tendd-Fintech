# Tendd

Tendd helps people who are not into finance see and control their recurring payments and
subscriptions, turning money anxiety into calm, everyday clarity. Mobile-first responsive
web app, desktop in scope.

**Live: https://sergiodesign4u-dot.github.io/Tendd-Fintech/** (the project entry page; every
stage below opens from its sidebar).

Rules for this repository: [CLAUDE.md](./CLAUDE.md). Decision log:
[docs/decisions.md](./docs/decisions.md). Where every figure on a screen comes from:
[docs/bank-connection.md](./docs/bank-connection.md). Entry for the external critic:
[AGENTS.md](./AGENTS.md).

## Status

| Stage | Page | Status |
|---|---|---|
| Foundation Research | [research/research.html](./research/research.html) | Done, June 2026 |
| User Research (Personas + JTBD) | [research/personas.html](./research/personas.html), [research/jtbd.html](./research/jtbd.html) | Done, June 2026 |
| CJM (As-Is + To-Be) | [research/cjm-as-is.html](./research/cjm-as-is.html), [research/cjm-to-be.html](./research/cjm-to-be.html) | Done, July 2026 |
| Information Architecture (IA) | [ia/structure.html](./ia/structure.html), [ia/sitemap.html](./ia/sitemap.html), [ia/globals.html](./ia/globals.html), [ia/accessibility.html](./ia/accessibility.html) | Done, August 2026. Two layers: base (flows, concept map) and detail (one page per node, the block bank, the seven global elements, one accessibility contract). The nine cluster pages were retired into it. **Updated 2026-08-10:** the auth model closed the last structural `[?]` and added node 1.6 Sign In, state 6.16.1 and Flow E; node 5.13.3 gave Pro a cancel door; the alert channel, the telemetry classes and the trial data source were settled. Ground: [docs/decisions.md](./docs/decisions.md) |
| Wireframes | [wireframes/overview.html](./wireframes/overview.html) | Done, August 2026. Rebuilt from scratch against the upgraded IA: 16 screens, **50 pages**, one per state node, live screens with no zone annotations. Critique taken on two instruments and closed; `wireframes/index.html` is the product home, `overview.html` the hub. **Round 3, 2026-08-10:** the auth model re-opened the stage on purpose and brought it back level with the IA, so the set is now **17 screens, 55 pages**. New: `sign-in` with its two states (node 1.6), `settings-no-account` (6.16.1), `upgrade-current-plan` (5.13.3), and the email field on `connect-bank`. The landing's "Sign in" link pointed at Settings until then |
| Voice | [voice/voice.html](./voice/voice.html) | Done, July 2026. **Updated 2026-08-10:** the line inventory gained the Sign In screen with its two states, the Connect Bank email field, node 6.16.1 and node 5.13.3, as Round 3 of the rewrite log |
| Concept | [design/concept/directions.html](./design/concept/directions.html), [design/concept/concept.html](./design/concept/concept.html) | Done, July 2026 |
| UI + Visual | [design/overview.html](./design/overview.html) | **Done, August 2026.** Done means three things and not a fourth. **The language** is `DESIGN.md`, generated from the shipped code, every token carrying its origin. **The kit is for the whole product**, not for the sample: 68 components read out of all 55 grey pages, one flat `design/kit/kit.css`, the showcase at [kit.html](./design/kit/kit.html), the count and the control census in `design/kit/inventory.md`. **The sample is 7 screens, 28 pages** in colour, every state of every one of them, each assembled from the kit and carrying no style of its own. The sixth screen, Guided Reveal, was added at the strategy check: the first five were chosen for component coverage and left H0, the assumption the product is a bet on, with no coloured screen. The seventh, Settings, was added as the saturation test and needed nothing new in the kit, which is what an inventory read from the whole product rather than from the sample buys. **The other ten screens stay grey on purpose** and are coloured in one pass at stage 12, because a screen is built once, when everything it needs already exists. Critique closed on three instruments and the audit on four: 24 fixes, all into the kit, none onto a screen ([was to became](./design/overview.html#delta)) |
| Tokens + Components | design/kit/ | Not started |
| Design System | design/kit/why.html | Not started |
| Responsive | - | Not started |
| Animation | - | Not started |
| Handoff | handoff/ | Not started |
