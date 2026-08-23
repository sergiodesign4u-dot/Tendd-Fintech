# Onboarding gaps - Tendd, stage 13 step 1

What a stranger could not work out from this repository, and what a stranger worked out
wrongly. This is not a report. It is the ORDER for the rest of stage 13: every row carries the
step that closes it, and a row with no step is carried to the founder instead of being quietly
dropped.

**Read this file with `handoff/handoff.html`** (the stage page) and with
`design/kit/docs/backlog.md` (the debts this stage may not fix).

---

## How the lists were taken

Two subagents with a clean context, run 2026-08-23, given the working directory, `AGENTS.md`
and `CLAUDE.md` and nothing else. Neither had this session's chat, and both were told in one
explicit line to read every file FROM DISK, because a file already present in a context is
somebody else's earlier snapshot and is not a source.

| | Route | Entry | Files opened |
|---|---|---|---|
| **A** | as a receiver | `README.md`, then the root `index.html`, then outward by link | 46 |
| **B** | as a builder | a product screen in `design/` first, the rules only when the code sent it there | 50 |

Two routes rather than one on purpose. Route B reached `README.md` at its twentieth open and
the root `CLAUDE.md` at its twenty-fourth, which is itself a finding: the code does not send a
reader to the rules for twenty files.

### The half of this file that does not exist

The pack for this stage expects the first rows here to come from the section "Questions from
the subagents" in `design/kit/docs/rollout.md`: twenty rollout readers who had already written
down what they could not understand in the stage 08 to 11 documentation. **That file does not
exist in this repository and that section exists nowhere else** (checked across the whole tree,
md and html). Stage 12 closed with a page, `design/rollout.html`, rather than with a document,
because its screens were on disk before it opened. So the "found by" column below has two
values and not three, the missing one is named rather than silently absent, and the count of
this order is smaller than the pack assumes it would be.

### Proof the ban held

Both agents returned a reading journal, every file in the order it was opened. Both journals
were checked line by line against the forbidden list (`docs-course/`,
`wireframes/docs/critique.md`, `design/kit/docs/tokens-audit.md`, `design/kit/docs/census.md`,
`research/docs/quality-check.md`, `design/kit/pixel-proof.html`, plus nine named critique
sections inside otherwise allowed files, plus the general rule that any table with columns
"Was" and "Became" is a rendered defect log).

**No forbidden path appears in either journal.** Both stopped where they were told to: A at
the "Critique" heading of `ia/docs/sitemap.md` and before the IA-critique note in
`wireframes/docs/screens.md`, B before Part C of `design/kit/docs/motion.md` and before "Every
row this stage opened" in `design/rollout.html`. Both skipped the critique section of
`handoff/handoff.html` and read the rest of that page, which was allowed on purpose: the page
already stands in the root roadmap, so a real receiver meets it today, and forbidding it would
have audited a repository that does not exist.

One line is worth recording rather than waving through: B ran `wc -l` over
`design/kit/docs/*.md`, which returned the NAMES and line counts of two forbidden files without
their content. It learned that they exist and how long they are. Not a leak, and not nothing.

Every row of the two "could not understand" lists names files that appear in that agent's own
journal, in the order it tried them. No row rests on a term that exists only in a chat.

### Idle control

Neither list is empty: A returned six rows, B returned six. An empty list would have meant the
run was formal or the agent was given too much. Six and six, with four of the twelve found
independently by both, is the shape of a real read.

---

## List 1: could not understand

Verified row by row by re-reading the file, not from memory. Four verdicts, and three of them
are defects. "Closed by" stays empty until the step that owns the row does the work.

| # | Question | Where they looked | Found by | Verdict | Closed by step | Closed by |
|---|---|---|---|---|---|---|
| **G1** | How many destinations does the tab bar have, and what are they? | `design/home.html`, `design/kit/shell.html`, `design/kit/docs/architecture.md` U18, `voice/docs/microcopy.md`, `ia/docs/sitemap.md` 0.2, `design/overview.html`, `README.md` | A + B | **TRULY ABSENT.** The code answers four (Home, Trends, Alerts, You) and eighteen files still answer five or still name Save. Verified below | 3, 5, and backlog for the frozen surfaces | |
| **G2** | Which corpus figure do I quote today: 55 or 57? | `README.md` two rows, `design/kit/docs/inventory.md`, `design/rollout.html`, then a run of `rollout12.cjs` | A | **THERE, BUT NOT WHERE HE LOOKED.** The rule is in `CLAUDE.md` (a claim keeps the corpus it was measured on, NAMED) and the live number comes from an instrument. What is missing is one place that says so and names the instrument. Separately a real defect: the census on `handoff/handoff.html` reads 55 and 55, two rounds stale, and names no corpus | 5 | |
| **G3** | What is the end-to-end recipe for adding a new SCREEN? | `design/kit/docs/architecture.md` "Contributing", `CLAUDE.md`, `design/kit/shell.html`, `design/_nav.js`, `design/overview.html`, `rollout12.cjs` check 1 | A + B | **TRULY ABSENT.** Five things for a COMPONENT are written in four places. Nothing joins the steps for a screen, and the ledger requires a grey twin in a folder the rules freeze. A guessed an order and put 85 per cent on it; B could not close it at all | 7 (`one-shot.md`), 5 (route) | |
| **G4** | Which IA folder do I edit, `ia/docs/nodes/` or `ia/docs/pages/`? | `wireframes/docs/conventions.md`, `CLAUDE.md`, both listings, `ia/docs/nodes/2-6-home.md` | A | **TRULY ABSENT, and the rules file points the wrong way.** `CLAUDE.md` line 130 sends SEO copy to `ia/docs/pages/`; every node file says it supersedes its `pages/` section, and the SEO block A-E lives in the node. Two readers, two answers, from one repository | 8 (`CLAUDE.md`), 5 (route) | |
| **G5** | Is dark a product feature or a system capability, and which theme is the main one? | `design/home.html` head, `design/_screen.css`, `design/system/CLAUDE.md`, `design/settings.html`, `voice/docs/microcopy.md` | A | **SO INTENTIONALLY, AND NOWHERE WRITTEN** (to be confirmed by the founder). The system is complete in both themes; the switch is reviewer chrome; the product has no control and no string. `design/system/CLAUDE.md` says "however the product decides to set it" and nothing decides it | 5 (the mandated section), then `docs/decisions.md` | |
| **G6** | What is this package, and what becomes of 57 static pages in a real build? | `README.md`, `package.json`, `CLAUDE.md` stack hypothesis, `design/system/CLAUDE.md`, `handoff/handoff.html` | A + B | **TRULY ABSENT.** Every state is its own file, there is no runtime, no data layer and no router, and nothing says who owns the translation from 57 pages to 17 screens with states | 5 (the mandated section) | |
| **G7** | Which pages may carry the class `context`, and what owns it? | `design/home.html`, `wireframes/home.html`, a run of `rollout12.cjs` check 2, `design/kit/docs/backlog.md` | A + B | **TRULY ABSENT.** Two live violations, `home-few.html` and `home-one.html`, in no backlog row. The screens are frozen, so this stage does not fix it | backlog row, founder decision | |
| **G8** | Is `design/kit/shell.html` really the file I copy to start a screen? | `design/kit/_nav.js` (which registers it as exactly that), the file itself, `design/home.html` | B | **TRULY ABSENT.** The template is stale in three ways, verified below. `design/kit/*.html` is frozen for this stage | backlog row, founder decision; step 7 may not point a receiver at it unfixed | |
| **G9** | What regenerates `DESIGN.md`, and does anything check it? | `DESIGN.md` front matter, `design/system/tokens.css`, `design/kit/docs/backlog.md`, the instrument table on `handoff/handoff.html` | B | **TRULY ABSENT.** Seven colour names in the front matter resolve to no token, and `design13.cjs` compares type steps only. Nothing checks the colour list | backlog row (an instrument gap), founder decision | |
| **G10** | What owns state at runtime, and is `design/story.js` product code? | `design/home.html`, a grep for `behaviour.js`, `design/system/behaviour.js`, `rollout12.cjs` output | B | **THERE, AND HE DID NOT SEE IT.** The answer is in the first two lines of `design/story.js` itself and in `design/kit/docs/motion.md`; B never opened the file it was asking about. A route defect, not a missing answer | 3 (the map names both js files), 5 | |

### The four rows verified in the source

**G1, eighteen files against the code.** `design/home.html` renders four links: Home,
Trends, Alerts, You. Save is gone, retired by the founder on 2026-08-21 and recorded in
`README.md` Round 5. Counted by script, **18 files still carry a sentence naming five
destinations or naming Save as a tab**: the five `design/history-trends*.html` (one comment,
repeated), `design/overview.html`, `design/kit/app-bar.html`, `design/kit/architecture.html`,
`design/kit/responsive.html`, `design/kit/tab-bar.html`, `design/kit/docs/architecture.md` U18,
`design/kit/docs/census.md`, `design/kit/docs/responsive.md`, `ia/docs/pages/navigation.md`,
`ia/docs/sitemap.md` (node 0.2 and again in prose), `voice/docs/microcopy.md`, its rendered
`voice/microcopy.html`, and `docs/decisions.md`. **One of the eighteen is not stale:**
`docs/decisions.md` is the log, newest on top and never edited, and it records what was true on
the day it was written. That leaves **17 to be judged**, and **this stage may edit exactly
two** of them, `design/kit/docs/architecture.md` and `design/kit/docs/responsive.md`: the rest
are product pages, stand pages, or files owned by Voice and IA.

A nineteenth surface says it differently and belongs to **G8** rather than here:
`design/kit/shell.html` names no Save at all and offers three destinations, Home, Alerts and
You, so the template is behind the code in the other direction.

**G7, the two undefined classes.** `node design/kit/screens/rollout12.cjs`, check 2, reports
"classes the system does not define: 2", `home-few.html` and `home-one.html`, both `context`.
The grey originals use `class="context"` in the same slot and the coloured `home.html` uses
`muted`. `design/system/components/muted-line.css` mentions `.context` three times in comments,
including one recording that `.app.detail .context` used to exist, and defines no such
selector today. Both pages arrived on 2026-08-20 in Round 4. **The second-order finding is
larger than the first:** `README.md` calls `npm run check` "the two that must stay clean", and
it is not clean.

**G8, the template.** In `design/kit/shell.html` the `.app` element opened at line 96 as a
`<div>` is closed at line 125 by `</main>`, so the tags do not balance; its tab bar carries
three destinations, Home, Alerts and You, where every live screen carries four; and it puts a
`.back` control at line 102 on a screen that also carries the tab bar, which usage rule U18
forbids. `design/kit/_nav.js` registers this file as "the markup a coloured screen is copied
from".

**G9, the front matter.** `DESIGN.md` declares 23 colours by name. Seven of them have no token
of that name in `design/system/tokens.css`: `moss`, `badge-bg`, `badge-ink`, `trial-bg`,
`trial-ink`, `control-edge`, `control-edge-hover`. Two of the seven are a pair the token file
records as deliberately deleted, on the ground of D-Concept, in a comment beside the place they
stood. `design13.cjs` reads `DESIGN.md` against `tokens.css` and compares the eleven type steps
only.

---

## List 2: understood as

The more valuable list. "Could not understand" is a known hole; "understood it this way" with
the wrong conclusion is the hole nothing else catches, because the reader read the page and
confidently concluded the wrong thing. That is what a real developer will do.

**Where the two readers DIVERGED is the strongest evidence in this file**, because it is one
repository read twice.

| # | Question | A concluded | B concluded | Which is right | Verdict |
|---|---|---|---|---|---|
| **U1** | Where does SEO copy live? | `ia/docs/pages/`, following `CLAUDE.md` | the node file's own SEO block A-E | **B.** `ia/docs/nodes/1-1-welcome.md` carries the block; `ia/docs/pages/seo.md` is the strategy for node 8 | A read the rules file correctly and got the wrong answer. Feeds **G4** |
| **U2** | Is the README's "57 components" a live number? | quoted it beside the instrument's 70 without resolving which is current | identified it as a dated snapshot naming its own corpus, with the live figure being the instrument's | **B**, at 80 per cent confidence in its own words | The corpus-naming rule works and its route is thin. Feeds **G2** |
| **U3** | How does a new screen enter `wireframes/`? | edit `wireframes/_nav.js`, set `built:true`, at 85 per cent | could not answer: the folder is frozen and the ledger demands a twin | **Neither, and that is the finding** | Feeds **G3**, and it is the question step 7 will put to the test |
| **U4** | What does `design/kit/shell.html` give me? | named it as the template to copy, without reading it against a live screen | read it against a live screen and found three faults | **B** | A would have copied a broken template tomorrow. Feeds **G8** |

Conclusions both readers reached that hold, checked against the source. These are recorded
because a handoff that only lists holes cannot tell the founder what already lands:

- **The screen file ban.** No `<style>`, no `style=`, no `@media`, no `@container`, no width
  literal, no third stylesheet, no class the system does not define, and it is enforced by a
  script they both ran. Both stated it correctly and both named the instrument.
- **Colour through a semantic role, geometry straight from a primitive.** Both stated rules 2
  and 3 of `design/system/CLAUDE.md` correctly, and A added the part that is easy to miss: a
  colour role must be written into both themes in the same edit or it does not exist.
- **A point is a register and its literal is the application.** B stated, unprompted, that
  changing `--bp-tablet` means editing the token and every query that applies it, because a
  container query cannot read a `var()`. That is the rule as `CLAUDE.md` writes it.
- **Component against pattern.** Both drew the line at three screens, both said a composition
  needing a style of its own is an order for a component first, and B named the three patterns
  correctly: `interruption`, `act-foot`, `list-column`.
- **The undeclared variant.** B recognised `.host .btn{font-size:15px}` as a variant to be
  declared rather than a local override, and added the part that is only in the code: every
  system selector carries both hosts, `.app` and `.landing`, and a missing `.landing` twin
  fails silently. Verified in `design/system/components/button.css`.
- **The typeface.** B found without being pointed at it that `base.css` asks for Inter and the
  folder provides no font file, and that dropping weight 800 loses the wordmark.
- **The locked product decisions.** B listed petrol's four jobs, no red in any state, amber for
  a price change and clay for a failure, one filled action per zone, D3 and D-Free, and
  correctly called them founder decisions rather than styling.

---

## What this order hands to each step

| Step | Rows |
|---|---|
| 3, the map | G1 (the tab bar row must be read off the markup), G10 (the map names both js files and what loads them) |
| 5, the route and the page | G2, G3, G4, G5, G6, G10. Four of these are the four sections the pack requires and which exist nowhere today: the boundary of the package, which theme is the main one, who decides after the handover, and what is deliberately not done |
| 7, the prompt and the exam | G3 is the exam's own subject: an agent that cannot find how a screen enters will not build one |
| 8, the rules file | G4 is a one-line correction in `CLAUDE.md`, and it replaces rather than adds |
| `design/kit/docs/backlog.md` | G7, G8, G9, and the parts of G1 that live in frozen files |
| The founder | G5 (is the missing theme control deliberate), G7, G8, G9, and whether the 17 stale tab-bar surfaces are corrected or dated |

**Nothing in this step was fixed.** Not the two undefined classes, not the template, not the
twelve tab-bar surfaces, not the front matter. The product was accepted at stage 12 and a fix
here would void every pixel comparison it stands on.
