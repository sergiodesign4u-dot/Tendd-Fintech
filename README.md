# Tendd - Product Research

Tendd is a mobile-first, desktop-responsive web app that helps people who are not into finance see and control their recurring payments and subscriptions, turning money anxiety into calm, everyday clarity.

---

## Project Status

| Phase | Document | Status |
|-------|----------|--------|
| Brief | [CLAUDE.md](./CLAUDE.md) | Done |
| Strategy (formerly Product Model) | [research/docs/strategy.md](./research/docs/strategy.md) | Done |
| Product Model v1-v2 (deprecated, kept for history) | [research/docs/product-model.md](./research/docs/product-model.md) | Superseded by Strategy |
| AARRR Model | [research/docs/aarrr.md](./research/docs/aarrr.md) | Done |
| Competitive Analysis | [research/docs/competitive-analysis.md](./research/docs/competitive-analysis.md) | Done |
| Benchmark: Trust and Clarity | [research/docs/benchmark-trust.md](./research/docs/benchmark-trust.md) | Done |
| UX Patterns | [research/docs/ux-patterns.md](./research/docs/ux-patterns.md) | Done |
| Master Research Synthesis | [research/docs/master-research.md](./research/docs/master-research.md) | Done |
| Quality Gate | [research/docs/quality-check.md](./research/docs/quality-check.md) | Done |
| Research HTML | [research.html](./research/research.html) - [Live](https://sergiodesign4u-dot.github.io/Tendd-Fintech/research/research.html) | Done |
| Personas | [personas.html](./research/personas.html) - [Live](https://sergiodesign4u-dot.github.io/Tendd-Fintech/research/personas.html) | Done |
| JTBD | [jtbd.html](./research/jtbd.html) - [Live](https://sergiodesign4u-dot.github.io/Tendd-Fintech/research/jtbd.html) | Done |
| Concept Architecture (IA) | [ia.html](./IA/ia.html) - [Live](https://sergiodesign4u-dot.github.io/Tendd-Fintech/IA/ia.html) | Done |
| Wireframes | [wireframes/index.html](./wireframes/index.html) - [Live](https://sergiodesign4u-dot.github.io/Tendd-Fintech/wireframes/index.html) | Done (July 2026) |
| Voice (Product Voice) | [Voices/voices.html](./Voices/voices.html) - [Live](https://sergiodesign4u-dot.github.io/Tendd-Fintech/Voices/voices.html) | Done (July 2026) |
| Voice document | [Voices/docs/voice.md](./Voices/docs/voice.md) - [voice.html](./Voices/voice.html) | Done |
| Microcopy inventory | [Voices/docs/microcopy.md](./Voices/docs/microcopy.md) - [microcopy.html](./Voices/microcopy.html) | Done |
| Design System | design-system/ | Pending |
| Components | components/ | Pending |
| Handoff | handoff/ | Pending |

---

## Key Documents

- [Product Brief (CLAUDE.md)](./CLAUDE.md) - JTBD, audience, MVP scope, business model, design principles
- [Strategy](./research/docs/strategy.md) - Objectives, segments, JTBD, business model, riskiest assumption (replaces the old Product Model; AIDA retired, AARRR is the single funnel)
- [AARRR Model](./research/docs/aarrr.md) - Funnel, metrics, product decisions
- [Competitive Analysis](./research/docs/competitive-analysis.md) - Competitor matrix, gaps
- [Benchmark: Trust](./research/docs/benchmark-trust.md) - Best-in-class trust mechanisms
- [UX Patterns](./research/docs/ux-patterns.md) - Pattern selection rationale
- [Master Research Synthesis](./research/docs/master-research.md) - Single source of truth
- [Quality Check](./research/docs/quality-check.md) - Self-review before HTML
- [Research HTML](./research/research.html) - Live research summary page
- [Personas](./research/personas.html) - 3 personas with observations, [?] badges, and trust triggers
- [JTBD](./research/jtbd.html) - Job hierarchy, matrix, hypotheses, and critique
- [Concept Architecture (IA)](./IA/ia.html) - Entities, sitemap, navigation, flows, coverage matrix, critique
- [Wireframes](./wireframes/index.html) - Grey, semantic, mobile-first responsive wireframes with real copy and all four states per screen; a flow-by-flow overview is the entry point
- [Voice](./Voices/voices.html) - The product voice as rules: principles, dictionary, forbidden list, and microcopy rules, plus the full was/became line inventory

---

## Voice

The product's voice lives in the [Voices/](./Voices/) phase: how Tendd talks, as
rules not a mood, so any line can be written the same way by a person or by Claude.

- [Voices/docs/voice.md](./Voices/docs/voice.md) - the binding document, four
  sections: Principles (5, each sourced from research), Dictionary (one concept one
  word, plus address and contraction rules), Forbidden (14 banned patterns with
  fixes), and Microcopy (rules by element type and by state tone).
- [Voices/docs/microcopy.md](./Voices/docs/microcopy.md) - the line inventory of
  all 41 wireframe pages and the was/became record of every line the voice changed.
- [Voices/voices.html](./Voices/voices.html) - the living entry point, with
  [voice.html](./Voices/voice.html) and [microcopy.html](./Voices/microcopy.html)
  rendering the two documents. The Voices tree is wired into the review sidebar of
  every research and IA page.

The voice was applied to every wireframe: Home set the sample, the rest were rolled
out by subagents, and an adversarial four-reviewer pass caught the last misses.
Alerts, Cancel Guide, Upgrade, and Settings were already fully in voice. Wireframe
structure was untouched; only the text changed. Next phase is the Design System.

---

## Structure

The product structure (entities, screens, navigation, and user flows) lives
in the IA phase:

- [IA/docs/sitemap.md](./IA/docs/sitemap.md) - the single source of truth for
  structure and detail: entities, screens tagged with jobs, navigation,
  coverage matrix, critique (Prompt 1), plus global components, a page card
  per screen (ordered content blocks and states), and breakpoint deltas
  (Prompt 2)
- [IA/docs/flows.md](./IA/docs/flows.md) - user flows in Mermaid for the main
  job and three related jobs, with decision points, states, and dead ends
- [IA/docs/pages/](./IA/docs/pages/) - the page-level library: one markdown
  file per cluster (onboarding, core, alerts, cancel, pro, account) plus
  navigation, system, and seo, each with real copy drafts, block order,
  states, accessibility, and mobile notes
- [IA/ia.html](./IA/ia.html) - the living site: overview, site graph, and a
  card per cluster linking to its own rendered page (IA/onboarding.html,
  IA/core.html, and so on)

The page-level library gives Wireframes an ordered content structure, real
copy drafts, and real states per screen, with no product decision left to
invent. Visual design, spacing, and interaction detail come in Wireframes.

---

## Folder Structure

```
/
- CLAUDE.md               Product brief and principles
- README.md               This file
- research/               Research pages, documents, and evidence
  - research.html         Live research summary page
  - personas.html         Personas (People & JTBD phase)
  - jtbd.html             Jobs to Be Done (People & JTBD phase)
  - docs/                 Research markdown documents
  - screens/              Competitor and benchmark screenshots
- wireframes/             UX wireframes
- Voices/                 Product voice (voice.md, microcopy.md, HTML renders)
  - voices.html           Voice phase entry point
  - voice.html            Voice document render
  - microcopy.html        Microcopy inventory render
  - docs/                 voice.md and microcopy.md
- concept/                Visual concept and moodboard
- tokens/                 Design tokens (color, spacing, type)
- components/             UI component library
- design-system/          Design system documentation
- handoff/                Developer handoff specs
```

---

## Research Screens

Competitor and benchmark screenshots are stored in [research/screens/](./research/screens/).

---

## Live Research Page

Live URL: https://sergiodesign4u-dot.github.io/Tendd-Fintech/research/research.html

View the full research summary: [research.html](./research/research.html)
