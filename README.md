# Tendd

Tendd helps people who are not into finance see and control their recurring payments and
subscriptions, turning money anxiety into calm, everyday clarity. A mobile-first responsive web
app, desktop in scope. Not a budgeting app: a calm, low-friction visibility and control layer for
recurring spend, for people who feel anxious about money and avoid finance apps.

**This README is an index, not a report.** Every section is a sentence or two and a link. What
happened in a stage is written on that stage's own page, which is better at its own subject than
a paragraph here could be.

## The four addresses

| | |
|---|---|
| **The product**, every screen in colour | https://sergiodesign4u-dot.github.io/Tendd-Fintech/design/index.html |
| **The design system**, and why it is like this | https://sergiodesign4u-dot.github.io/Tendd-Fintech/design/kit/why.html |
| **The repository** | https://github.com/sergiodesign4u-dot/Tendd-Fintech |
| **The project entry**, the roadmap of all thirteen stages | https://sergiodesign4u-dot.github.io/Tendd-Fintech/ |

**If you are receiving this project, start at [handoff/handoff.html](./handoff/handoff.html).** It
is the one page that answers what is being handed over, what this package is and is not, which
theme is the main one, how the product behaves, what each screen is assembled from, where
accessibility lives, and who decides what is still open.

## What is where

| Folder | What is in it |
|---|---|
| [`research/`](./research/research.html) | Who this is for: the market, four personas, the jobs, and the journey before and after |
| [`ia/`](./ia/structure.html) | The structure: a sitemap, the flows, one page per node, and one accessibility contract |
| [`wireframes/`](./wireframes/overview.html) | The grey structure contract, frozen since Voice. Read-only, and the answer to why every screen exists twice |
| [`voice/`](./voice/voice.html) | The voice, and the line inventory that owns every interface string |
| [`design/`](./design/index.html) | The product in colour: 17 screens across 57 pages, and [the map of all of them](./design/overview.html) |
| [`design/system/`](./design/system/CLAUDE.md) | The code of the design system, liftable whole, with its own rules file |
| [`design/kit/`](./design/kit/why.html) | The stand that shows it: a page per component, the foundations, the architecture, the backlog |
| [`handoff/`](./handoff/handoff.html) | This project, handed over: the page and its five documents |

At the root: [CLAUDE.md](./CLAUDE.md) the rules, [docs/decisions.md](./docs/decisions.md) the
decision log, [DESIGN.md](./DESIGN.md) the visual language read out of the shipped code,
[docs/bank-connection.md](./docs/bank-connection.md) where every figure on a screen comes from,
and [AGENTS.md](./AGENTS.md) the entry for an outside critic.

## Running it

Nothing is built. Every page is static html that opens from a plain file server, and the deploy
is Jekyll copying the tree.

```
python3 -m http.server 8080     # or: npm run serve, then open http://localhost:8080
npm install                     # playwright, the only dependency, and the only reason package.json exists
npm run check                   # the rollout ledger and the quality sweep
npm run check:route             # every link in every page and document, and the click depth from the entry page
npm run census                  # what is on disk, what is open, what a receiver needs
```

The **instruments** are node scripts in `design/kit/screens/`, each deriving its corpus from the
tree or from a registry rather than from a typed list, and each writing its output beside itself.
Most serve the repository to a headless browser and need playwright; two never open one -
`handoff13.cjs` counts the tree and `ledger09.cjs` reads two checked-in json files. The rest are
`check:width`, `check:inert`, `check:edges`, `check:pages`, `check:walk`, `check:map`,
`check:a11y`, `check:aria` and `fp:before` / `fp:after`. The box fingerprint is the one to run
around any change that is supposed to move nothing, `check:edges` after any change to a width,
`check:walk` after any change to where a screen can go, and `check:route` after anything moves.

**Lifting the design system out.** `design/system/` is the whole visual language and it travels
alone: every `url()` inside it resolves inside it. Copied into an empty directory on 2026-08-18
and used to assemble a screen it had never seen, it rendered with **0 failed requests and 0
console errors in both themes**. It carries exactly one dependency it cannot provide, the
typeface, and `design/system/CLAUDE.md` names it with the link.

## Status

Thirteen stages, and this table is the only status table in the project. The other owner of the
same truth is `done:true` in [`/_nav.js`](./_nav.js), which is what draws the roadmap on every
page; the two are checked against each other by `handoff13.cjs`.

| # | Stage | Page | Status |
|---|---|---|---|
| 01 | Foundation Research | [research/research.html](./research/research.html) | Done, June 2026 |
| 02 | User Research | [personas](./research/personas.html), [JTBD](./research/jtbd.html) | Done, June 2026 |
| 03 | CJM, as-is and to-be | [as-is](./research/cjm-as-is.html), [to-be](./research/cjm-to-be.html) | Done, July 2026 |
| 04 | Information Architecture | [ia/structure.html](./ia/structure.html) | Done, August 2026. Two layers, one page per node, the block bank, the seven global elements, one accessibility contract |
| 05 | Wireframes | [wireframes/overview.html](./wireframes/overview.html) | Done, August 2026. 17 screens across 57 grey pages, one per state. Five rounds, the last of which removed a page rather than adding one |
| 06 | Voice | [voice/voice.html](./voice/voice.html) | Done, July 2026. The voice and the line inventory; every product string in the repository is owned here |
| 07 | Concept | [directions](./design/concept/directions.html), [concept](./design/concept/concept.html) | Done, July 2026. Petrol and Paper, found and locked |
| 08 | UI + Visual | [design/overview.html](./design/overview.html) | Done, August 2026. The kit read out of the whole product rather than out of a sample, and the first seven screens in colour |
| 09 | Design System | [design/kit/why.html](./design/kit/why.html) | Done, August 2026. Two token levels, 73 components and patterns, 17 usage rules, the growth rule written into the code, and one product screen built out of the system to prove it stands alone |
| 10 | Responsive | [design/kit/responsive.html](./design/kit/responsive.html) | Done, August 2026. Two width points in `rem`, both with a written origin; one number removed rather than blessed; verified by a width sweep rather than by three screenshots |
| 11 | Animation | [design/kit/motion.html](./design/kit/motion.html) | Done, August 2026. Opened on a census rather than a design. Fourteen tokens, four verbs, one distance, and a signature that is not a verb |
| 12 | Rollout | [design/rollout.html](./design/rollout.html) | Done, August 2026. The account: every grey page paired with a coloured twin, an audit row per screen, the ban on a screen carrying a style of its own re-proved on all of them |
| 13 | Handoff | [handoff/handoff.html](./handoff/handoff.html) | **In progress, August 2026.** The stage writes no product. What it adds is the four questions no page answered - what this package is and is not, which theme is the main one, who decides what is open, and what is deliberately not done - plus the behaviour spec, the screen-to-token map, the accessibility checklist read by a run rather than by memory, and the log of what a stranger could not work out alone |

## The design system

`design/kit/` is the stand and `design/system/` is the thing it shows. They are one row on the
roadmap and two folders on disk, and the split is the whole idea: **the folder with the code has
no html in it and can be lifted into a repository that has never heard of Tendd.**

- [**Why the system is like this**](./design/kit/why.html) - the guide, and the first thing to
  read: the attributes from Concept, the borrowed sources and the refusals, and the rule for
  adding to it.
- [**The whole system**](./design/kit/overview.html) - the hub: every component by level, the
  patterns, the foundations pages, and the inventory.
- [**Architecture**](./design/kit/architecture.html) - the two ladders, the naming, the usage
  rules with their sources, and how to contribute.
- [**The proof**](./design/kit/pixel-proof.html) - every number the stage produced, who found
  what, and what was dropped at verification.
- [**The backlog**](./design/kit/docs/backlog.md) - what the stages found and deliberately did
  not fix.
