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

---

# The exam, run 1: Export your data

Step 7 does the same thing as step 1 with the direction reversed. Step 1 asked a stranger what it
could not understand; the exam asks a stranger to BUILD something and finds out what the writing
was missing by watching where it goes wrong. **The only instruction the reader was given was
`handoff/docs/one-shot.md`**, plus a feature and a size, and the size was named before the run
rather than after it: **one screen, four states, four files.** A reader who does not stumble on a
feature of two states has proved nothing.

The feature is **Export your data**, taken from `docs/decisions.md` D-Export. It was chosen
because it is a trap of a particular shape: the screen does not exist, and the STRINGS partly do.
`design/data-privacy.html` already mentions the export, and `voice/docs/microcopy.md` already
carries thirteen lines about it. What the exam wanted to know is whether a stranger finds the
lines that exist or writes new ones beside them.

## Proof the ban held, and the finding inside the proof

The reading journal is 43 files and **not one forbidden path appears in it**. The reader also
disclosed, without being asked, three recursive greps that walked forbidden folders while
searching for the word "export". That disclosure is worth more than the compliance, and it is
the methodological finding of this run:

**A path ban enforced as "do not open this file" does not bind `grep -r`.** A recursive search is
a reading instrument. It walks every file under the folder it is given, and filtering its OUTPUT
afterwards does not undo the reading; it only hides it from the person holding the log.

Verified rather than accepted, by asking which of the forbidden files could have produced a line
at all:

| Forbidden path | Lines containing "export" | Could it have leaked |
|---|---|---|
| `handoff/docs/onboarding-gaps.md` | **0** | No. The one file that holds the answers could not have produced a single line |
| `design/kit/docs/census.md` | 0 | No |
| `design/rollout.html`, `design/kit/pixel-proof.html` | 0 | No |
| `design/kit/docs/tokens-audit.md` | 2 | Both are about exported cuts of the brand mark for the favicon. Nil substance |
| `wireframes/docs/critique.md` | 1 | Substantive: it names the free download against the Pro CSV. It was in the grep whose 4MB output went to a file, and the reader named the six paths that appeared in the 2KB preview it actually saw; this was not among them |
| `design/overview.html` | 2 | Substantive, same grep, same answer |

**So the run stands**, and the ban for run 2 was rewritten to say what this one learned: scope the
search, or exclude the paths inside the command, rather than filtering the output afterwards.

## What the exam found, and what closed it

Two of the reader's findings were about the PRODUCT and survive the exam. Both were verified
against the files before being believed, and both are now rows in `design/kit/docs/backlog.md`.

| Found | Verified at | Verdict |
|---|---|---|
| **A rewrite the log records was applied by halves.** `microcopy.md` line 149 logs the export body losing the word "spend" on the ground of D9 and Principle 3. Line 1138 of the same file and `design/data-privacy.html` line 114 still carry it; only the CSV half of the rewrite landed | `voice/docs/microcopy.md` 149 and 1138, `design/data-privacy.html` 114 | **Holds.** A log that records a change nobody applied reads exactly like one that records a change somebody did |
| **A shipped button breaks its own voice rule, in three places.** `voice/docs/voice.md` line 186 says buttons say "your" and never "my". The label is "Download my data" | `voice/docs/voice.md` 186, `microcopy.md` 1139, `design/data-privacy.html` 116, `design/data-privacy-delete-confirm.html` 72 | **Holds.** No instrument compares a line in the inventory against the rules of the voice, and this is the first time the two were read side by side |

Everything else the reader produced was about the PROMPT, and a hole in the prompt is closed by
editing the prompt rather than by filing it. Eight paragraphs of `one-shot.md` exist because of
this run:

| What the reader had to decide alone | What the prompt says now |
|---|---|
| **Is this feature a new screen, or a state of an existing one?** The reader chose a new screen. The IA had already answered: node 6.15's States table carries an `Exporting` row, so it is a state. The reader had opened that table | Section 4 opens with the decision and hands it to `ia/docs/nodes/`: a row in a node's States table means a state file and no registry row of your own |
| **Which existing screen do I copy?** The prompt said "the nearest screen of the same shape" and then pointed at Part A of the map, which lists COMPONENTS. Two different selection procedures, and they choose different files | Shape first, map second, in that order, with what shape means spelled out. A file with the right parts and the wrong frame is the harder of the two to unpick |
| **`microcopy.md` and `voice.md` contradict each other on a shipped label.** The prompt said "the string that exists there is the string, verbatim" and the voice rules forbid that string. The reader obeyed both, which put "my" and "your" one tap apart in one flow | The shipped string wins, the disagreement is a backlog row, and re-authoring a line is Voice's job and not the builder's |
| **"add the screen to `ia/docs/nodes/`" has two readings**: write a new node document, or add a row to an existing node's table. The second is a line; the first drags in a page, because a document no page shows does not exist here | Both readings are named, with the cost of the expensive one stated rather than absorbed |
| **What does "both themes" actually ask for**, when the accessibility instrument already measures both? | The instrument proves the two resting states, because it runs with reduced motion emulated on purpose. What it cannot prove is the switch between them, and that is what the human look is for |
| **Nothing said what to do about the counts** when a new screen grows the corpus | A section of its own: recount what a person typed, name the corpus of what a machine measured, and write one row rather than re-running four instruments |
| **Is my screen reachable at all?** The reader built four correct pages that nothing in the product links to, and found out from `walk13.cjs` after the fact | The check is named, with the tell: a States row whose trigger reads "X tapped" means something else is supposed to BE that tap |
| **The prompt counted the rows of another document** and was one short within the hour, because the feature it produced added one | The count is gone, and the paragraph says why a prompt may not state the length of a document it does not own |

## The screen itself: branch B, and it is deleted

The pack makes the fate of an exam screen a fork, and this one took **B: the screen was a probe
and is gone.** Four html files, a registry row, twenty-four new lines in the inventory and its
published page, a NOT DECIDED row, a recount in the README - all reverted by git, so the deletion
is provable rather than promised.

**The reason is not that the work was bad.** It passed: check 2 of the ledger clean on all four
files, the quality sweep byte-identical to its baseline, 3222 text nodes and 926 tab stops with
zero contrast and zero focus findings, zero prose past the measure across 58 widths, both themes
correct. Branch A would have accepted it as new work - and accepting it means the pixel
comparison the whole of stage 12 stands on has to be taken again, on a corpus of 61 rather than
57, at the last step of the last stage. **An unaccepted screen in the product is worse than an
absent one, and a screen accepted by reopening a closed stage is worse than both.**

What the exam was for is the list, and the list is above.

---

# The exam, run 2: Weekly digest

The second run exists to find out whether the first run's repairs held. It was a different reader
on a different feature, handed the same prompt after eight paragraphs of it had been rewritten,
and sized before the run: **one screen, three states, three files.**

The feature is **Weekly digest**, row L1 of the backlog in `research/docs/cjm-to-be.md`, the only
row there still marked "partly new". It was chosen to test the opposite of what run 1 tested: the
export had strings and no screen, and the digest has almost no strings and appears in the IA only
as one switch inside somebody else's screen. Run 1 exercised "find the line that exists"; run 2
exercises "there is no line, so go through Voice", and it exercises the branch the first run's
fix created, the one that decides whether a feature is a new screen at all.

## Proof the ban held, and it held better because run 1 said how

The ban for this run carried the sentence run 1 produced: **scope the search or exclude the paths
inside the command, rather than filtering the output afterwards.** The reader ran **no recursive
search at all**. Every one was a single file or a non-recursive glob, and the one `grep -r` it
began was abandoned before it ran.

It also did the one thing that makes a journal worth keeping: it declared the near miss.
`ia/docs/sitemap.md` carries a `## Critique` at line 681, which is a forbidden section inside an
allowed file. The reader located the heading first, read lines 1 to 680 only, and disclosed that
it had twice loaded the whole file into a script that printed counts. **A file read by a program
that prints nine numbers is not a file read**, and saying so unprompted is the behaviour the
journal exists to produce.

## The verdict the pack asks for, said plainly

**The second list is not shorter.** Thirteen confident-and-possibly-wrong readings became twelve.
That is not an improvement and it is not reported as one.

What did change is which readings, and that is measurable too:

| | Run 1 | Run 2 |
|---|---|---|
| Could not work out | 6 | 6 |
| Understood confidently, could be wrong | 13 | 12 |
| Paragraphs of the prompt named as having done real work | not asked | **5, each with what it saved** |
| Items repeating a difficulty from the previous run | - | **1** |

The five the second reader named are worth recording, because a prompt is only tested by somebody
who did not write it: **pick by shape first** ("the single most useful sentence in the document":
it sent the reader to the right file and away from the one with the right parts and the wrong
frame); **the block quote about the stale template**, which is proof that naming your own broken
registry out loud works; **the reachability check**, which "predicted my main finding precisely
and told me what to do with it before I hit it", and without which the reader says it would have
edited a frozen screen; **the split between a count somebody typed and a figure a machine
measured**, which turned a day of re-running instruments into one recount and four dated notes;
and **the two-step growth rule**, which is why it never considered writing css anywhere.

**The one repeat is the paragraph run 1's own fix created.** The screen-or-state test said "no
row in a States table means a new screen", and the cautionary tale beside it said the last reader
who concluded new screen was wrong. The digest is not in a States table; it is one block of node
6.16's Content blocks table, and that block already ships as a switch on Settings. So the rule and
the story pointed at two different tables, the reader read the paragraph three times and broke the
tie against the feature brief rather than against the prompt. **The two readers got the same
question wrong in opposite directions**, which is why it is a three-row table now: States table,
Content blocks table, nowhere at all - and a fourth line saying that if the table does not settle
it, that is a finding rather than a judgement call.

**A prompt that is measurably better and still produces a list that long is working and is not
finished.** The honest form of that sentence is the number, not the comfort.

## What run 2 closed, and what it found

Five more paragraphs of `one-shot.md` exist because of this run:

| What the reader had to decide alone | What the prompt says now |
|---|---|
| Screen, state, or an edit to a screen that already ships | The three-row table above, and the instruction to write it down rather than choose quietly |
| **`ia/docs/sitemap.md` owns node numbers**, and the prompt never named it. The reader found it only by reading the sitemap for the numbering scheme, and it also carries hand-typed counts of nodes, screens and states | Named in the registration list, with its counts pointed at section 7 |
| **`voice/microcopy.md` has a published page** and `CLAUDE.md`'s live rule obliges rebuilding it in the same step. The prompt stopped at the document | Named, with the reason it has to be: **no instrument in this repository catches the omission**, so the only thing standing between a receiver and a page a version behind is this sentence |
| **Is a screen whose only door sits on a frozen file finished?** The instrument reports it, the prompt said it was a backlog row rather than a fix, and nothing said whether the feature was done | It ships unreachable, with the row, and that is done rather than half-done. The alternative is a builder who cannot finish until a founder answers, which is the state the prompt exists to prevent |
| **A node that declares a state and refuses it a page.** Node 6.16 says of its own wait, "the skeleton stays unnumbered: it is chrome, not a distinct destination", while every other screen numbers and builds its wait | The exception is named with its precedent, and with the instruction not to generalise from it without the same sentence in your own node |

**One finding about an instrument, and it is the same class this stage keeps finding.**
`walk13.cjs` printed *"still unreachable, and every one is a state no product screen should link
to"* - a verdict, hard-coded, true of the corpus it was written on. The new screen landed in that
list as a BASE screen and the instrument told it that it belonged there. It reads `design/_nav.js`
now and says which entries are base screens, because **a base screen nothing opens is a finding
and a state nothing opens is expected**, and an instrument that cannot tell the two apart is
answering a question nobody asked. Fixed rather than filed: an instrument is not the product.

**Nothing else survived.** Run 2's four backlog rows were all about its own screen - nothing
opens it, it has no grey twin, the corpus grew, and whether the digest is Pro - and all four went
with the screen.

## Branch B again, and the same reason

Three html files, an IA node document and its page, three registry rows, twenty-three copy lines
in the inventory and its published page, node 6.17 written into the sitemap with its three counts
recounted, a NOT DECIDED row, a README recount. All reverted. The corpus is 57 pages, as it was.

It passed as thoroughly as run 1 did: the ledger clean on all three files, 3228 text nodes and
954 tab stops at zero failures across sixty screens by two themes, zero prose past the measure at
3480 measurements, one width measure across the state family, zero of 130 pages scrolling
sideways. **And accepting it still means taking the pixel comparison of stage 12 again, on a
larger corpus, at the last step of the last stage.** What the exam was for is the two lists and
the thirteen paragraphs they wrote, and those are kept.
