# Component inventory - Tendd

Stage 07, UI + Visual, step 2. Read out of **all** the grey wireframes, not invented and not
collected from the two coloured screens. The sample we paint at step 5 narrows what gets
**coloured**; it never narrows what we **know** about the product. A component that is not counted
here surfaces at the rollout instead, dragging its states, its pattern and its responsive
behaviour along with it.

## The counting basis

| Fact | Value | How it was produced |
|---|---|---|
| Pages read | **55** | every `wireframes/*.html` except `overview.html`, which is the hub and not a product screen |
| Screens behind them | **17** | `wireframes/_nav.js`, the registry, cross-checked against the files on disk |
| Distinct classes | **179** | mechanical count of every token inside every `class="..."` attribute |
| Classes on 2 or more pages | **113** | the kit candidates |
| Classes on exactly one page | **66** | the one-off candidates, of which 30 are the landing's own `lp-` namespace |

The count is a class count, not a component count: `.row`, `.row .name`, `.row .amt` and
`.row .tag` are four classes and one component. The tables below turn classes into components.

## The rules this inventory applies

1. **Two or more occurrences enters the kit.** One occurrence is a one-off and is listed as such,
   so that the decision is visible rather than silent.
2. **One exception: form controls.** A text field, a textarea, a checkbox, a radio, a dropdown and
   a switch enter the kit at a single occurrence. They are interaction primitives, and a system
   missing one of them is not a system.
3. **The level is born here and afterwards only read.** `atom` (contains nothing else from the
   kit) → `molecule` (contains atoms) → `organism` (contains molecules, or is a screen shell;
   this is the ceiling). Stage 08 reads the level to decide the split order and the `@import`
   order, and stage 12 reads it to decide the rollout rounds.
4. **Grouping by purpose is forbidden.** By purpose a button and a dialog are both "forms", and
   the system would then hold one inside the other as siblings. The cost is not cosmetic:
   alphabetical `@import` puts `dialog.css` above `field.css`, so a container lands higher in the
   cascade than its own parts and every contextual fix reaches for `!important`.
5. **The control census is the second half.** A list of components with the forms left off gives a
   flat kit, and every real difference in the product then settles as a contextual patch that
   nobody named a variant. Three axes: emphasis, content, size. **Width is not an axis:** `100%`
   against `auto` is layout.

---

# Part 1. Components, by level

The level was assigned mechanically, in this order, and every borderline call was settled by
opening the CSS and reading containment:

- **atom** - one visual element, one content slot, hosts no other kit component.
- **molecule** - two or more content slots in one unit, or hosts a kit atom.
- **organism** - hosts a kit molecule, or is a screen shell or a container of repeated units.

`Pages` counts the pages whose markup carries the component's root class.

**21 atoms, 28 molecules, 19 organisms. 68 components.** Step 6 added three, all from the
Guided Reveal: the step-forward link `.next`, the merchant chip group `.rgroup`, and the reveal
step `.rstep`. Two more things the reveal wanted were reconciliations rather than additions and
are not counted: its `.num` eyebrow turned out to be the `.k` atom at a hair different tracking,
and its `.tone` line turned out to be `.context` with more space above it.

Before that, step 5 moved the count twice: the
destination icon joined the atoms and the radio left them, since the radios were deleted from the
grey when the plan cards became click targets; and two organisms, the save-focus candidate list
and the Pro gate card, were promoted out of the one-off list, because a one-off has no home in a
system where a screen may carry no CSS of its own.

## Atoms (21)

| Component | Classes | Pages | Variants | Note |
|---|---|---|---|---|
| Button | `.btn` | 36 | `.btn.primary` (33) | `_wf.css:579`. Rendered as both `a` and `button`; no size variants |
| Step-forward link | `.next` | 1 | - | `:615`. A one-off by the counting rule, and it lives in the kit anyway because a screen may carry no CSS of its own. The only link in the product with a direction |
| Consequence line | `.consequence` | 16 | `.lead`, `.spaced` | `:838`. One sentence stating what a control will do |
| Quiet line | `.quiet` | 12 | - | `:589`. Sentence with an inline exit; the `a` rule only sets the 44px target |
| Amount | `.amt` | 11 | four host-scoped sizes | **No base rule exists.** Same name, four sizes, four owners |
| Logo placeholder | `.logo` | 21 | `.is-skel`; six host-scoped sizes, 20 to 52px | Same: no base rule, sized only by its host |
| Skeleton bar | `.skel` and its width set | 8 | `.line`, `.short`, `.total`, `.amt-skel`, six percent widths | `:456-483` |
| Big total | `.total` | 8 | three host-scoped sizes (46 / 46 / 40px) | Also no base rule |
| Legal line | `.legal` | 7 | - | `:592` |
| Context line | `.context` | 7 | three host-scoped rules | `:274, :614, :646` |
| Status badge | `.badge` | 7 | position-only overrides in `.alert` and `.source` | `:651` |
| Row status tag | `.tag` | 5 | `.tag.trial` | `:325`. **`.trial` has no CSS rule anywhere** |
| Chart placeholder | `.chart` | 4 | 168 to 220px at container 760 | `:905` |
| Text input | `.field input` | 8 | text / email / search, plus `:focus` | `:746` |
| Select | `.field select` | 4 | `:focus` | Shares one rule block with the input: the CSS already settled that these are one style, two elements |
| Range labels | `.axis` | 3 | - | `:909` |
| Meta strip | `.strip` | 2 | - | `:810`. Same shape as `.axis`, different owner, no shared base |
| Readout | `.readout` | 2 | - | `:904` |
| Freshness line | `.freshness` | 2 | - | `:815` |
| Checkbox | `.switch input` | 2 | - | `:857`. A real checkbox, 20px |
| ~~Radio~~ | - | **0** | - | **Stale row, corrected at step 5.** `_wf.css:936` is no longer a rule, it is the comment recording that the radios were deleted from the grey when the plan cards became click targets. Nothing in the product carries a radio, so nothing is owed to the kit. The form-control exception stands for the primitives that do exist |
| Destination icon | `.ic-home` `.ic-alerts` `.ic-save` `.ic-you` | 55 | one per GC2 destination | **Authored at step 5, not extracted.** The grey draws `.ic` as an empty bordered box on purpose (`_wf.css:355`), so this is one of the atoms greyscale could not express. Masks painted with `currentColor`, which is what turns the current tab petrol with no second rule; the mask sits on a pseudo-element because a mask clips its own children and `.ic` hosts the unread dot |

## Molecules (28)

| Component | Classes | Pages | Variants | Note |
|---|---|---|---|---|
| Action row | `.actions` | 36 | margin overrides in four hosts | `:578`. Flex row hosting Button atoms |
| Merchant chip group | `.rgroup` | 1 | - | `:619`. Hosts the Logo atom and the Group head; the one place the mark is 22px. No amounts, ever |
| Lede | `.lede` + h1 + p | 25 | - | `:547` |
| State message | `.state` + h1/h2 + p | 19 | h1 form (page subject) against h2 form (state inside a page) | `:598` |
| Fact list | `.facts` + div/dt/dd | 18 | `.facts.sentences` (5) | `:565`. The pair has no class of its own, so it cannot be split out |
| Group head | `.group-head` + h2 + `.subtotal` | 16 | `.plain` (4) | `:288`. `.plain` drops the band to a bare title |
| Trust block | `.trust` + p + a | 11 | - | `:341` |
| Removal note | `.removal` + p + a | 8 | - | `:677` |
| Subscription row | `.row` + body/name/when/amt/tag/logo | 8 | `.is-skel` (4), `.cand .row` | `:300`. Hosts the logo, amount and tag atoms |
| Form field | `.field` + label + `.hint` | 8 | `form.field` (the search) | `:744`. Wraps the input or select atom |
| Detail hero | `.hero` + logo/h1/amt/cycle | 6 | - | `:636` |
| Secondary link bar | `.secondary` + a | 6 | - | `:331`. Its `a` is **a second button geometry that does not use `.btn`** |
| Notice | `.notice` + p + a | 5 | - | `:433`. Kept apart from `.attention` by an explicit comment: amber against clay at Concept |
| Charge list | `.charges` + li + amt + `.was` | 5 | `li.marked` (2) | `:666` |
| Decoder line | `.decoder` + `.raw` | 5 | - | `:656` |
| Summary | `.summary` + h1 + total + context | 5 | - | `:271`. Hosts the big-total atom |
| Door | `.door` + h2/h3 + p + `.pick` | 4 | `.pick` on 2 of 4 | `:446` |
| Attention row | `.attention` + p + a | 3 | - | `:278` |
| Promise list | `.promises` + li + strong | 3 | - | `:559`. Twin of the landing's trust list, **not shared** |
| Numbered steps | `.steps` + li + counter | 3 | - | `:802` |
| Range picker | `.range` + button | 3 | `[aria-pressed]`, `[disabled]` | `:894`. Its button is **a third button geometry** |
| Alert item | `.alert` + logo/body/what/meta/go/newdot/prices/badge | 2 | `.prices`, `.newdot` in the filled state only | `:778` |
| Nav row | `.navrow` + `.sub` + `.arrow` | 2 | - | `:845` |
| Switch row | `.switch` + `.t` + `.h` | 2 | - | `:855`. Hosts the checkbox atom |
| Preset tile | `.tile` + logo + `.p` | 2 | `[aria-pressed="true"]` | `:757` |
| Plan option | `.plan-opt` + amt/p/q/best/input | 2 | `:has(input:checked)`, `.landing .plan-opt` | One rule, two hosts, by the decision of 2026-08-10 |
| Unlock list | `.unlocks` + li + `.p` | 2 | - | `:941` |
| Share card | `.sharecard` + lbl/count/total/p/win-line | 2 | - | `:949` |

## Organisms (19)

| Component | Classes | Pages | Variants | Note |
|---|---|---|---|---|
| App bar | `.appbar` + wordmark/acct/back/step/plan | 54 | row form in the flow shell, column form at container 760 | Laid out by the `.app` grid itself |
| Reveal step | `.rstep` | 1 | last-of-type drops its rule | `:608`. Hosts the chip group, the Display and the Action row. Three on one page, never three routes: D1 drawn |
| App shell | `.app` + `.screen` + the column sets | 54 | `.app.flow` (26), `.app.detail` (8) | Three container breakpoints: 760 / 900 / 1340 |
| Tab bar | `.tabbar` + a + `.ic` + `.dot` + `.cur` | 28 | left rail at container 760 | `:346` |
| Category group | `.group` + ul + li | 12 | `break-inside: avoid` in columns | `:287`. Hosts Group head and Subscription row; on Settings it hosts Form field and Switch row instead |
| Panel | `.panel` + h2 + summary + `.alerts` + `.gate` | 7 | `section` form against `details` disclosure form | `:661`. `.gate` never occurs outside it, so it is folded in |
| Dashboard head | `.head` | 5 | exists only as a grid at container 900 | Hosts Summary and Attention row |
| Groups column set | `.groups` | 4 | 2 columns at 900, 3 at 1340 | Hosts Category groups |
| Doors pair | `.doors` | 4 | 2-up at container 760 | `:445` |
| Dialog sheet | `.sheet` + h1 + p + doors | 3 | framed and centred at container 760 | `:864` |
| Alert list | `.alerts` | 2 | inset inside `.panel` | Hosts Alert items |
| Nav row list | `.navrows` | 2 | - | `:844` |
| Tile grid | `.tiles` | 2 | 2-col to 3-col at container 760 | `:756` |
| Plan grid | `.plans` | 2 | `.landing` host, 3-col at 760 | Hosts Plan options |
| Empty block | `.empty` + h2 + p | 2 | - | `:442` |
| Source card | `.source` + top/h2/kind/badge/actions | 2 | - | `:829` |
| Review page frame | `.layout`, `.stage`, `.stage-app`, `.stage-flush` | 55 | - | **Not product.** It is the wireframe review scaffolding that hosts the `_nav.js` panel, and it does not migrate to the kit |
| Save-focus candidate list | `.candidates` + `.lead` + `.cand` + `.cut` | 1 | 460px reflow, where the cut drops to its own line | `:487-498, :507-511`. **Promoted out of the one-off list at step 5.** Hosts the subscription row molecule and a second, separately named control beside it: confusing the two is what costs the cancellation |
| Pro gate card | `.locked` + h2 + p + ul + `.actions` | 1 | 560px cap at container 760 | `:915-921, :1021`. **Promoted at step 5.** Took the radius and the card surface its siblings `.sharecard` and `.panel` already carry, by named decision: a card that is a card everywhere else is not a rectangle only here |

## One-offs: built once, not in the kit

| One-off | Page | Classes |
|---|---|---|
| The landing, entire | `index.html` | 39 classes in the `lp-` namespace |
| Guided reveal step | `guided-reveal.html` | `.rstep`, `.num`, `.next`, `.rgroup`, `.tone`, `.lbl` |
| Cancel win | `cancel-win.html` | `.win`, `.freed`, `.year`, `.honest` |
| Save-focus candidate list | `home-savefocus.html` | `.candidates`, `.cand`, `.cut`, `.lead` |
| Pro lock frame | `history-trends-locked.html` | `.locked` |
| By-category line | `history-trends.html` | `.bycat`, `.k` |
| What is on this card | `share-snapshot.html` | `.oncard`, `.k` |
| Pitch line | `upgrade.html` | `.pitch` |
| Plain-answer intro | `data-privacy.html` | `.intro` |
| The landing preview list | `index.html` | `.list`, `.tag.trial`, **and neither has any CSS rule** |

Folded into a component rather than counted as a one-off: `.newdot`, `.what`, `.go`, `.prices`
into Alert item; `.count`, `.win-line` into Share card; `.w90`, `.skel-list` into Skeleton bar.
Excluded entirely: the 25 `.wfp-*` review-panel classes, injected at runtime and present in no
page's markup.

## Nine things the kit has to resolve, found by the level pass

1. **Four chip look-alikes with four owners and no base:** `.tag`, `.badge`, `.plan-opt .best`, `.appbar .plan` are near-identical bordered micro-labels.
2. **Three button geometries with no shared base:** `.btn`, `.secondary a` (twinned by `.cand .cut`), and `.range button`. A fourth, `.lp-btn`, lives on the landing.
3. **Two identical dots:** `.tabbar .ic .dot` and `.newdot` are byte-identical geometry under different owners.
4. **Seven slot names with no base rule**, sized only by their host: `.amt` (4 rules), `.logo` (6), `.p` (5), `.total` (3), `.context` (3), `.lbl` (3), `.k` (2).
5. **`.lead` is overloaded:** `.consequence.lead` and `.candidates .lead` are unrelated rules sharing a class name.
6. **Dead CSS:** the removed social-proof block (`.lp-quote`, `.lp-quotes`, `.who`) and `.app button.row` plus `.app .row .p` match no markup on any page.
7. **The landing's preview list renders unstyled.** `index.html` carries `.row`, `.logo`, `.name`, `.tag` markup, but every one of those rules is scoped under `.app`, and the landing root is `.landing`.
8. **`.col1` and `.col2` have no CSS rule at all.** They exist only as anonymous grid children on 8 pages.
9. **No `textarea` and no `progress` anywhere.** Both form primitives have nothing to inherit and must be authored fresh.

---

# Part 2. The control census

Read across the same 55 pages. **471 interactive elements**: 374 `a`, 29 `button`, 29 `label`,
25 `input`, 5 `summary`, 5 `details`, 4 `select`. No `role="button"`, no `onclick`, no `tabindex`,
no `dialog`, and no anchor without an `href`. The review panel is injected at runtime and
contributes no product control.

## The finding this census exists for

| | Number |
|---|---|
| Distinct control **forms** (element + class + container, collapsing byte-identical CSS) | **45** |
| Distinct **looks** (collapsing `a` against `button` where the rule is identical, and `.cur` as a state) | 41 |
| Distinct **jobs** covered | 112 (105 actions plus 7 field labels) |
| Real **components** those forms reduce to | **16** |

**45 minus 16 is 29.** Twenty-nine of the forty-five forms are not components. They are the same
sixteen components re-declared because a link happened to land in a different paragraph.

**Thirteen of the twenty-nine are one job.** A quiet inline link, wearing thirteen different rules:
`.quiet a`, `section.trust a`, `div.trust a`, `div.removal a`, `p.removal a`, `p.legal a`,
`section.legal a`, `.notice a`, `.attention a`, `.consequence a`, `.lp-links a`, `.fcol a`,
`.lp-micro a`. They differ in one thing that matters, font size (12 / 12.5 / 13 / 13.5 / 14), and
one thing that matters more, whether anyone remembered the 44px target. Six more of the
twenty-nine are the `.lp-btn` pair, which is `.btn` with different padding for no reason the CSS
states.

**This is the brief for the rollout, stated as a number rather than as a worry.** Stage 08 will
take the same census from the assembled colour screens and read FORMS; this one reads JOBS off the
grey. The gap between the two lists is the work.

## The emphasis axis does not fit the grey, and that is the correct answer

Measured against `_wf.css`, the 471 elements fall into: bare text 259, outlined 67, bare row 63,
accent 39, field 20, segment 9, native 9.

**There is no filled control and no inverse control anywhere in the 55 pages.** Greyscale has no
fill to give, so the accent role is carried entirely by `.primary`, which today is a heavier
border plus weight 600. That slot is what D-Concept fills with petrol.

**Consequence for the kit, and it is not a detail:** the filled button and the inverse button have
to be **authored** at this stage, not extracted. Extraction can only return what grey could
express. Every other component in the list is extracted; these two are the exception, and they are
named here so the exception is deliberate.

## Size is set by the container, and one bucket is a defect

Five target heights, each owned by a container rather than by importance: **56px** (rows, tabs,
tiles), **48px** (the same tab in the desktop rail, container swapped), **44px** (buttons, fields,
most links), **40px** (range segments, the alert's inline action), and **none at all**.

The last one is not a size. `p.legal a`, `section.legal a`, `p.consequence a`, `nav.lp-links a`,
`p.lp-micro a` and `nav.fcol a` get no target rule and fall under 44px: **21 instances across 10
pages**, in a stylesheet whose own comment at line 743 says every one clears 44px. Carried to the
kit as a real fix, not as a note.

## Counter-check 1: one job, several forms

Ten real cases. The four that looked like drift and were not are dropped at verification below.

| Job | Forms | Worst pair |
|---|---|---|
| Try again | 3 | `a.btn.primary` on five pages, `a.btn` on one, a bare link inside `section.notice` on `home-error.html` |
| See what Pro adds | 3 | `a.btn` on five, `a.btn.primary` on `history-trends-locked`, a bare link in `p.removal` on `cancel-guide-blocked` |
| Add a subscription | 3 | bare link in `nav.secondary`, `a.btn`, `a.btn.primary` |
| Back to your subscriptions | 3 | `a.btn`, `a.btn.primary`, bare link in `nav.secondary` |
| Add them yourself | 2 | `a.btn` on three pages, `a.btn.primary` on `connect-bank-empty` |
| Maybe later | 2 | `a.btn` on the upgrade pair, `button.btn` on five detail pages |
| Download my data | 2 | bare link in `p.quiet`, `button.btn` |
| Sign in | 2 | `a.signin` and a bare link in `p.lp-micro`, **on the same page** |
| Your sources | 3 hosts | `section.trust`, `nav.secondary`, `section.legal`: three hosts, three sizes, one job |
| Data and privacy | 2 hosts | `section.trust` at 12px against `p.consequence` with no rule at all |

**Dropped at verification.** The four tab labels rendering as `a` against `a.cur` are the selected
state of one component, correctly built with `aria-current="page"`. And "You" / "Data and privacy"
/ "Your sources" appearing as `a.back` in the app bar is a different job from a link to the same
destination.

**The element half of this is worth its own line.** `a.btn` and `button.btn` are the same pixels
with different HTML, 46 instances split 36 to 10, and the accent button splits 32 / 3 / 1 across
`a`, `button[submit]` and `button[button]`. Whether a control navigates or acts is invisible in the
class today. The kit needs **one component that takes an element**, not two components.

## Counter-check 2: a control with no family

Twelve, ordered by how orphaned they are.

1. **`a.cut`** (`home-savefocus.html`) - one page, and dimensionally identical to `nav.secondary a`.
2. **`a.next`** (`guided-reveal.html`) - the only downward-pointing control in the product.
3. **`a.signin`** (`index.html`) - one instance, own class, and its own job duplicated 186 lines later as a bare link.
4. **The `.range` button** (three history pages) - a segmented control with three states and **no class name at all**. Selectable only as `.range button`, therefore unreferenceable from a component library.
5. **`p.consequence a`** - no class and no rule of any kind in `_wf.css`.
6. **`p.lp-micro a`** - no class, no rule, no target size.
7. **`details.panel summary`** (`alerts.html`) - the only disclosure in the app shell.
8. **`.lp-faq summary`** (`index.html`) - a second, unrelated disclosure with a different indicator and different padding from 7.
9. **`a.navrow` "Sign out"** (`settings.html`) - a session-ending action wearing the same class as three navigation rows, with no modifier saying it is not navigation.
10. **`a.acct`** - ten pages, own class, no sibling and no variant. A family of one.
11. **Three link families each hosted by two element types** (`section.legal` against `p.legal`, `div.trust` against `section.trust`, `p.removal` against `div.removal`): six census rows for three jobs.
12. **`button.row`** - styled at `_wf.css:772` with a comment explaining its purpose, and **rendered by no page in the set**. A family with a rule and no members.

## The zone rule, tested: one filled accent per zone

Two real violations.

- **`cancel-guide.html`**: two `a.btn.primary` in the same `div.col2`, "Open netflix.com and cancel" and "I cancelled it". They sit in separate `div.actions` with a panel between them, but `col2` is one column at every width, so the person sees two equally weighted accent buttons stacked and only one of them is the action of the moment.
- **`add-subscription.html`** and its empty and error states: a submit "Add subscription" and then `a.btn.primary` "See your subscriptions" in a sibling block, separated by one line of copy. Two accent controls in one scrolling column, and the second one leaves the screen.

**Passes, checked rather than assumed.** `index.html` carries three accent buttons, one each in the
header, the hero and the closing block: three distinct zones, so the rule holds. No other page has
more than one, and 20 of the 55 have none.

---

# Part 3. Coverage: the seven globals, and what nobody owns

## The globals, as built

| GC | Classes | Pages | Verdict |
|---|---|---|---|
| GC1 App Header | `.appbar` + `.wordmark` `.acct` `.back` `.step` `.plan`, plus the flow and rail forms | **54** (all but the landing) | 6 variants named, 10 compositions rendered, only 3 tellable apart by class |
| GC2 Tab Bar | `.tabbar` + `a.cur` `.ic` `.dot`, rail form | **28** | Clean. Exactly four links on all 28 |
| GC3 Summary Strip | `.summary` + h1 + `.total` + `.context` | **5** | Three implementations, zero shared classes |
| GC4 List Item | `.row` + logo/body/name/when/amt/tag | **8** | Two named variants never render, one rendered variant the node forbids |
| GC5 Alert Item | `.alert` + what/meta/go/newdot/prices | **2** | Only node 3.8. What 2.6 and 2.7 show is a different component |
| GC6 Source and Trust | `.trust` (11p), `.source` (2p), `.promises` (3p), `.lp-trust` (1p) | 11 / 2 / 3 / 1 | **Four implementations under three variant names, and a fourth name in a node file** |
| GC7 Gate and Chip | `.plan` (9p), `.gate` (5p), `.locked` (1p) | 9 / 5 / 1 | All four variants render, none of them on the chip's own home screen |

## Nine variants a node names and no page renders

GC1 **light** (node 4.11) and **minimal** (node 4.10) are distinguishable only by absence, and node
5.13 calls `upgrade.html` "GC1 minimal" while it renders **the fullest header in the set**. GC1
**onboarding, brand mark only** never happens: every onboarding header carries back plus wordmark.
GC1 **marketing variant** is named by node 1.1 although the landing has no `.appbar` at all, and
`globals.md` says the opposite of node 1.1 with the markup on `globals.md`'s side. GC4
**unrecognized** and **cancelled** have no page and no rule. GC6 **short** is named on nodes 1.3 and
6.15, and neither page has a `.trust` or a `.source`. GC7's chip is said to be at home on node
6.16, and settings renders a `.subtotal` instead: `.plan` appears on zero settings pages.

## Six things a page renders and no node names

A **close** control (`× Close` reusing the `.back` class) on the upgrade pair. The **step marker**,
on 11 pages, when GC1's content list has three slots and none of them is a step. The **trend row**,
which `globals.md` says is "not GC4, a different component" and which is built from GC4 markup
exactly. The **preset tile**, claimed by node 1.4 as a GC4 variant and built as its own button
component with `aria-pressed`. A **sixth alert type** ("Unusual charge") where GC5 names five, plus
a seventh ("duplicate") promised by node 5.13 and rendered nowhere. And the **Pro marker as
`.badge`** on Alerts, which is neither the chip nor the gate.

## Three contradictions inside the IA, adjudicated by the markup

1. **The attention row has three owners and two of them are wrong.** Node 2.6 block 3 says it
   carries GC4; `globals.md` says node 2.6 renders GC5. The stylesheet builds `.attention` as its
   own component with `.notice` as a deliberately separate sibling. Neither node is right.
2. **The plan chip page count.** GC1's line says nine pages, GC7's says eight, and `grep -l` returns
   nine. **Fixed in `globals.md` in this step**; the GC1 line was corrected earlier the same day and
   the GC7 line had been missed.
3. **GC6's compressed form has four names.** `globals.md` calls it "one line", five node files call
   it "short", and node 1.1 calls it "long-form", which is a fourth name for a variant `globals.md`
   does not have.

## Thirty-three structures that are built, repeated, and owned by no node

The full table is long; the headline is that **the button itself is one of them**. `.btn` runs on
36 pages and 82 uses and is named as a component in no node file and in no global. So do the action
row (36 pages), the screen lede (25), the state block (19), the fact list (18), the consequence line
(16), the section head band (16), the quiet exit (12), the form field (8), the whole skeleton system
(8 pages, 89 uses), the removal block (8), the legal footnote (7), the status badge (7), the panel
(7), the secondary link bar (6), and eighteen more down to two pages.

**This is not a criticism of the IA.** The IA specifies blocks a screen must carry, and it did that.
It is the reason the inventory is read out of the markup rather than out of the node files: the node
files were never the place where a button gets specified, and a kit assembled from them would have
started with a hole where its most-used component goes.

## Four classes written on elements with no rule anywhere

`.col1` and `.col2` on 8 pages each, and they are load-bearing: they are the grid children of the
900px detail layout, named by nothing and styled by nothing. `.list` and `.trial` on the landing,
where `.trial` reads as a GC4 status variant and has no rule.

## Two holes in the form primitives

**No `textarea` on any page**, and **no field has an error state**: a sweep for `aria-invalid`,
`required` or an error class over all 55 pages returns nothing. `add-subscription-error.html` is a
screen-level error, and its form is the clean form. A kit extracted from this set inherits an input
that cannot be invalid, so **the invalid state is authored, not extracted**, alongside the filled
and inverse buttons.

Also worth carrying: the amount field and the date field are both `input[type=text]`, so a money
input and a date input are owed. And the product's toggle is a checkbox inside `label.switch`;
there is no native and no custom switch anywhere.

## The landing: seven components carried twice

`index.html` is the only page with no `.app` shell, and it duplicates seven app components under
`lp-` names: the button (`.lp-btn` against `.btn`), the summary strip (`.lp-preview` against GC3,
and node 1.1 itself says that block **is** GC3), the promise list (`.lp-trust` against `.promises`,
a byte-identical rule), the account entry (`.signin` against `.acct`), the numbered step marker
(`.snum` against `.steps li::before`), the intro paragraph, and the two-doors block (`.lp-paths`
against `.doors`).

**One of the seven has already drifted, which is the argument in one line:** `.lp-btn` has no
`min-height: 44px`, the single rule the rest of the stylesheet enforces on every control.

**And the file already contains the fix for its own problem.** The plan card is declared once for
two hosts (`.app .plans, .landing .plans`) with the reason in a comment, and the landing reuses
GC4's row classes directly instead of copying them. Seven copies were made anyway. The kit takes
the two-host pattern as the rule and retires the `lp-` twins.

---

# Part 4. The extract, and the variable ledger

`design/_theme.css` became `design/kit/kit.css` by **`git mv`**, which git records as a rename
rather than a copy: a copy would have left two sources of values in the project, and that is the
thing the migration rule exists to prevent. The `:root` block arrived **byte for byte**, 945
bytes and 28 variables, names and origin comments untouched.

## The collision the merge had to solve first

The July block declared `.row`, `.logo`, `.tag`, `.skel` and `.btn` **with no scope**, and the kit
declares the same five names, also unscoped. Whichever sat lower in the file would have won, and
the nine coloured seed screens are built on the July markup.

**Resolved by scoping the July block under `.phone`**, the retired Concept frame it was written
for. That is not a value change: it makes explicit the scope the block always assumed, and the
collision disappears in both directions. The seeds render exactly as before (verified), and the
kit owns every screen that does not carry `.phone`. The whole block retires at step 5, when the
seeds are rebuilt on the kit with a pixel comparison.

## The leak the pixel comparison caught, and what it corrected

The first merge left the atoms and molecules **unscoped**, on the argument that a kit component
must render without a host and that this would also fix the landing, which carries `.row` and
`.logo` and renders them unstyled.

**The pixel comparison of the seed screens rejected it.** Home came back different in 1191 of 2200
rows: the trust line had gained a rule and a stacked shield, and the detail pane's labels had gone
uppercase. The superseded `.phone` block declares neither `.trust` nor `.k`, so the unscoped kit
rules were not competing with anything, they were simply the only rules, and they reached inside
the legacy island.

**Cascade layers do not fix this**, and trying them was instructive: a layer reorders *conflicting*
declarations, and there was no conflict to reorder. Only not matching fixes it.

The kit is therefore scoped under `.app` and `.landing`, matching the organisms. The landing
argument turned out to be about the wrong file: `wireframes/index.html` loads `_wf.css` and never
loads this one, so that fix belongs there. After the change the seed screen is **byte-for-byte
identical to its pre-merge render**.

## Authored, not extracted

Extraction can only return what greyscale could express. Five things could not be, and each is
named so the exception stays deliberate:

| Authored | Why extraction could not reach it |
|---|---|
| **The filled button** | In grey `.primary` is a heavier border and weight 600, because greyscale has no fill to give. This is the slot petrol fills |
| **The inverse button** | Exists on none of the 55 pages. Built as a matched pair on a dark ground so both grounds read as one system |
| **The invalid field** | A sweep of all 55 pages returns no `aria-invalid`, no `required` and no error class. The kit would otherwise inherit an input that cannot be invalid. Clay, never red, hooked on the native attribute so no page needs a new class |
| **The focus ring** | The grey draws exactly one, on the field. `:where()` keeps it at specificity 0 so any atom can still override |
| **The chip tones** | Four look-alikes render fourteen distinct states through markup that carries a class for none of them |

## The variable ledger

**Four named on 2026-08-10, by decision. All four are values the file already wrote.**

| Variable | Value | Why | Needed by |
|---|---|---|---|
| `--radius-xs` | `6px` | Written inline twice already; on a 22px chip `--radius-sm` is a pill | Chip, Skeleton bar |
| `--radius-wash` | `12px` | The banner radius. `DESIGN.md` already names it `rounded.wash`, and `.alert-banner` already hardcodes it | Attention, Notice |
| `--line-strong` | `#cdd7d9` | The hover border on every bordered control. `DESIGN.md` states it in prose; five components now need it | Button, Door, Tile, Range, Plan card |
| `--on-accent` | `#ffffff` | Equal to `--frame` and **a different role**: `--frame` is the card surface, this is text on the accent. One token was carrying both, and they part at the dark theme | Button, filled and inverse |

**Ten deferred to stage 08, deliberately:** `--rail`, `--tap`, `--tap-row`, `--tap-rail`,
`--measure`, `--measure-form`, `--measure-col`, `--gap-block`, `--z-appbar`, `--z-tabbar`. They
are real repetitions, and they are exactly the primitive-against-semantic split that stage 08
makes. Naming them now would guess at the layer they belong to, and this kit is flat on purpose.

**Not proposable at all:** the three container steps (760 / 900 / 1340). A custom property is not
valid inside a `@container` condition, so they are documented in a comment rather than tokenized.

**Not proposed, and worth the line:** a fourth text tone. The grey ran `ink / mid / soft / faint`
and six atoms wanted `--faint`. `DESIGN.md`'s Two Tiers Rule forbids a third grey by name, and the
arithmetic agrees: `--faint` on the 11 to 12px text where it was used is about 2.85:1, under AA.
All six collapse onto `--soft` at 5.6:1, and the hierarchy `--faint` was carrying is restored by
weight and by case, which is where it belonged.

## One open value, flagged rather than merged

The desktop rail is **240px in the kit and 232px in the grey**. Eight pixels, and by the migration
rule a value moves only by its own named decision. Carried at 240, which is what the migrated file
and `shell.html` already agree on, and left for the founder.


## What the extract left behind, found at step 5 on the first screen

The extract took the **deltas** of the two chrome organisms and left their base geometry in
`_wf.css`. The kit held `.app > .appbar { position: sticky }` and `.app > .tabbar { position:
fixed }` but not the `display: flex`, the padding, the background or the border those two rules
were overriding. Nothing looked wrong in the showcase, because the showcase never renders a whole
screen shell. It looked wrong the moment a screen was assembled from the kit: the app bar and the
tab bar came out as default browser links in a heap.

Restored from `_wf.css:253-258` and `:346-357` with the values unchanged, plus `.secondary a`
from `:332` and the `margin` on `.secondary` from `:417`. Two values are deliberately not the
grey ones, and both are D-Concept rather than a new decision: the current tab is petrol instead of
ink, and the icon is a real mark instead of the wireframe's bordered placeholder box.

**The class is bigger than these four.** A mechanical diff of every `.app`-scoped selector in
`_wf.css` against `kit.css` returns **81 with no counterpart**. Some are legitimate, since the kit
restructured several components, and most belong to screens the sample has not reached yet. It is
recorded here as the shape of a risk rather than as 81 defects: each one is confirmed by
assembling the screen that needs it, which is exactly what step 5 is for.

**The showcase cannot catch this class of defect** and that is the durable lesson. A plate renders
a component with its host neutralised, so a missing shell rule has nothing to show up against.
Only a whole screen assembled from the kit finds them.

## The step 5 ledger: what the sample added to the kit, screen by screen

The stage asks for this to be said out loud after every screen, because a falling curve is
the signal that the system is proved and a flat one is the signal that it is not.

| Screen | Added to the kit | Why it was missing |
|---|---|---|
| Home | the base geometry of `.appbar` and `.tabbar`, `.secondary a`, the four destination icons, the `.secondary` margin at 900 | the extract took only the deltas of the two chrome organisms; the icons could not be extracted at all, since the grey draws `.ic` as an empty bordered box on purpose |
| Home, save-focus state | the whole `.candidates` / `.cand` / `.cut` block and its 460px reflow | filed as a one-off at step 2, and one-offs have no home in a system where a screen may carry no CSS of its own |
| Subscription Detail | nothing | |
| Detail, three states | `.gate .actions`, `.app.detail .context`, the unmatched merchant mark | two lost margins, and a mark the grey wrote as `[ ? ]` with no class to hook |
| Add a Subscription | `fieldset` | without it the browser draws its own groove box around the four fields |
| Upgrade | `.pitch`, and the plan row's width | `.pitch` was a one-off until upgrade entered the sample; the plan row could never reach the 720px it asks for inside a 620px reading column |

Two things were corrected rather than added, and both were live defects in the kit itself:

- **The focus ring was dead.** Its selector list carried an unbalanced parenthesis, so the whole
  rule was invalid and nothing in the product drew a focus outline. One character.
- **The error tone was the default.** `.notice` carried the clay wash for every host, and three of
  the five pages that use it are not failures. Inverted to opt-in `.notice.is-error`; the modifier
  belongs to the colour layer for the same reason the destination icons do, since greyscale could
  not express tone at all.

And one landmine was defused before the July block was deleted: **`@keyframes pulse` lived only
inside that block**, while the skeleton atom above referenced it. Deleting the block on schedule
would have stopped every skeleton in the product from animating, silently, with no error anywhere.

**`--faint` is not in the kit and must not be reached for.** The Two Tiers Rule forbids a third
grey and `--faint` on 11px text is under AA. A rule written at step 5 referenced it anyway and the
property was simply invalid at computed-value time, which is the quiet way a dangling variable
fails. It resolves to `--soft`.

---

## The step 6 ledger: what the strategy check cost, and what it bought

The sample was chosen at step 5 for one criterion, component coverage: five screens that between
them touched all three levels, the densest layout, a form, a list and an empty state. The
criterion did its job and it is silent about one thing, which the stage's own strategy check then
found.

**The riskiest assumption had no coloured screen.** `research/docs/research.md` states H0: if we
show an avoidant person their whole recurring spend in one calm frame, they complete the reveal
and report relief rather than stress. Everything downstream of it is conditional. It is tested on
node 1.5, the Guided Reveal, which is where the gradual reveal D1 locked actually happens: the
count, then the categories, then the total, each step paired with its own action. That screen was
not in the sample. Home carries the aftermath of the reveal and not the reveal, so the answer to
"which element tests H0" was, honestly, none of them.

The kit told the same story from the other side. A mechanical diff at step 5 found 81 `.app`
selectors in `_wf.css` with no counterpart in `kit.css`, and recorded them as the shape of a risk
rather than as 81 defects. Six of them were `.rstep` and `.rgroup`: an entire organism, missing,
and the missing one belonged to the screen the product exists to prove.

**Guided Reveal is the sixth screen**, with its empty state, and the sample became twenty-six pages: every state of all six. It
adds three components, which is what a screen has to do to earn a place here: `.next`, `.rgroup`,
`.rstep`. Two more things it wanted turned out to be duplicates already in the kit under other
names, and merging them is worth more than the additions:

| The grey wrote | It is really | Why it matters |
|---|---|---|
| `.num`, 11px uppercase, 0.07em, `--faint` | `.k`, 11px uppercase, 0.06em, `--soft` | The same eyebrow at a half-step of tracking apart. Two names for one atom is exactly what stage 08 turns into two tokens |
| `.rstep .lbl`, 15px/600 | `.lbl.strong` | The grey had a host restyling an atom, the defect class this stage exists to prevent. Declared as a modifier instead, and the page carries the class |
| `.tone`, 13px `--soft` | `.context` plus space | One set of values, two names. The names stay apart because the jobs do: `.context` says what the number is, `.tone` says how to feel about it |

**And it caught a defect on a screen already accepted.** The group head's typography was bound to
`h2`, not to `.group-head`. It had already broken once at step 6 on the form screen, where the h2
IS the head; it broke again here, where the head is an h3 inside a group, and both times the
heading fell through to the browser default: 24px black against 12px uppercase soft everywhere
else. A component whose look depends on which heading level the document happened to need is not
a component. The rule now matches the class at any level.

**The strategic dimension survives the colour.** `benchmark.md` names trust and first-time
clarity as the one dimension that decides this product, and `wireframes/docs/screens.md` names
the three elements on the etalon that carry it. All three are coloured and all three still carry
it: the subscription row on Home, the attention row above it, and the trust line under it. The
reveal adds a fourth carrier that only exists in colour, because recognition is the mechanism -
`SPOTIFYAB STOCKHOLM` becoming a face is the whole of step two.

---

## The seventh screen: the saturation test, and what it cost the kit

Added after the sample was closed, on the founder's call: **Settings / Profile, node 6.16, plus
node 6.16.1, the account-less steady state of the manual path.** The sample is now seven screens
and twenty-eight pages.

**It added nothing.** Not a class, not a value, not a plate in the showcase. The counts below are
unchanged from step 3, and that is the finding rather than an absence of one:

| Level | Components | Change from the seventh screen |
|---|---|---|
| atom | 21 | none |
| molecule | 28 | none |
| organism | 19 | none |
| **total** | **68** | **none** |

The pack calls this the saturation signal and asks for it out loud: a screen that adds nothing on
the fourth means the sample is saturated and the rest of the product will assemble at the rollout.
It arrived on the seventh, three screens later than the earliest point it could have, which is the
better outcome, and it is only true because of a decision taken at step 2. The inventory was read
from **all 55 grey pages**, not from the six that were going to be coloured. Settings is not one
of the six; every class it uses (`.navrows`, `.navrow`, `.switch`, `.promises`, `.field`,
`.subtotal`, `.rows-col`) was counted anyway. A kit sized to the sample would have met this screen
with four missing components and would have discovered them on a screen nobody was reviewing.

**But it was not free, and the thing it found is worth the whole exercise.** Assembling a column
screen at desktop width exposed a defect none of the six could show:

| Where | Declared | Rendered at a 1060px container |
|---|---|---|
| `.form-col`, Add a Subscription | 560px | 588px |
| `.locked`, the Pro gate on History and Trends | 560px | 748px |
| `.rows-col`, Settings | 620px | 733px |

All three were written `.app .form-col`, specificity 0-2-0. The `@container (min-width: 900px)`
block carries `.app > .screen > * { max-width: none }`, also 0-2-0, written for Home, whose head
and column groups genuinely need the release. Equal specificity, so source order decides, and the
later block wins: past 900 the reading measures stop existing. Two of the three screens had
already been walked and accepted at the step 5 gate.

The fix is a binding, not a value: `.app > .screen > .form-col` at 0-3-0 cannot be outranked by a
blanket reset regardless of order. Every one of these classes is a direct child of `.screen` on
every page of both folders, checked before the selector was tightened. **No number moved.** 560
was always 560; it had simply stopped being applied at the width nobody re-checked.

**The lesson is about acceptance, not about CSS.** A screen is accepted at every width or it is
not accepted. The narrow end gets walked because that is where breakage is loud; this defect lived
at the wide end, looked entirely calm, and survived a triple critique and a four-instrument audit
because at 360 and at 760 the rule still held.
