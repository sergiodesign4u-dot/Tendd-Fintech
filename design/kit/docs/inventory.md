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

# Part 1. The system after consolidation

**55 components: 18 atoms, 23 molecules, 14 organisms.** Before the consolidation of stage 08
step 2 the same material was 68 rows, and the pre-consolidation tables are not reproduced here:
they were a list of what the product draws, and this is a list of what the system HAS. The
ledgers further down record how the count moved, screen by screen and stage by stage.

**One row per component, never per occurrence.** A row that appeared on eleven screens was
eleven lines of evidence at stage 07 and is one unit here. The `Axes` column carries the matrix
that replaces those lines: what actually varies, and by what rule.

**The level is read, not re-derived.** atom (contains nothing else from the kit) to molecule
(two or more content slots, or hosts an atom) to organism (hosts a molecule, or is a screen
shell, or is a container of repeated units). It decides four orders downstream: the build
rounds, the `@import` order in `system/index.css`, the groups of the stand, and the rollout
rounds at stage 12.

**`design/kit/_nav.js` is the live registry** and renders both this system's hub cards and its
side panel. The tables below and that file are generated from the same decisions; if they ever
disagree, the registry is the one the pages actually read.

**Two axes recur and are worth stating once.** SIZE is set by the **container**, never by
importance: the same button is 14px in a page action row and 13.5px in a compact one because
the row is tighter, not because the action matters less. GAP in a grid is set by the **size of
the child**: doors are full cards and take air, tiles are chips and do not.

## Atoms (20)

| Component | Class | Axes and their values | Pages in the product | Was |
|---|---|---|---|---|
| Amount | `.amt` | size by container: 13.5 / 14 / 30 / 32 | 69 | - |
| Big total | `.total` | size by container: 46 / 40 | 8 | - |
| Brand mark | `.brand` | window: crop A. B and C locked at Concept, no host yet | 0 | - |
| Brand wordmark | `.wordmark` | one setting. The coloured d waits for a host where the word stands alone | 54 | - |
| Button | `.btn` | emphasis: fill / outline / inverse. size: default / compact | 85 | - |

**Built.** `design/system/components/button.css` + `design/kit/button.html`. The etalon of step 5,
and the first component through the five-thing gate: css, page, registry row, inventory line,
`@import` in its own level group.
| Chart placeholder | `.chart` | - | 4 | - |
| Checkbox | `.check` | - | 2 | `.switch input` |
| Chip | `.chip` | tone: quiet / trial / pro / cancelled | 36 | `.tag`, `.badge`, `.best`, `.plan` |
| Destination icon | `.ic-*` | one per destination | 112 | - |
| Eyebrow | `.k` | - | 4 | `.num` |
| Label | `.lbl` | weight: quiet 12 / strong 15 | 3 | - |
| Logo | `.logo` | size by container: 20 / 22 / 30 / 32 / 36 / 52 | 111 | - |
| Meta row | `.metarow` | rule: plain / ruled | 5 | `.axis`, `.strip` |
| Muted line | `.muted` | size: 12 / 12.5 / 13. rule: plain / ruled | 48 | `.consequence`, `.context`, `.tone`, `.legal`, `.freshness`, `.removal`, `.pitch`, `p.notice`, `.p` |
| Quiet line | `.quiet` | - | 12 | - |
| Readout | `.readout` | - | 2 | - |
| Select | `.select` | - | 4 | `.field select` |
| Skeleton bar | `.skel` | width set, and one height for the total | 89 | - |
| Step-forward link | `.next` | - | 2 | - |
| Text input | `.input` | type: text / email / search | 8 | `.field input` |

**The two brand atoms break this document's own counting rule, and the break is the finding.**
Every other row above was read out of the grey corpus and enters the kit on two or more
occurrences. `.brand` occurs **zero** times there, and no amount of reading `wireframes/` would
ever have produced it: the wireframes are frozen, Voice was the last stage allowed to touch them,
and there was no mark when they were written. It arrived on 2026-08-12 from a **decision** by the
founder, out of `design/concept/logo-crop.html`, and it is the first component in this system with
that provenance.

The consequence worth carrying forward is about the instrument rather than the row. This
inventory reads what the product already draws, so it can only ever find what has been drawn. A
brand, a splash screen, a first-run tour and an error page that nobody wireframed are invisible to
it by construction, and each of them is a real component with real states. The rollout at stage 12
inherits that gap, and it is named here so the gap is a known one.

`.wordmark` is the opposite case and needs no exception: it stands on all 54 grey pages and always
did. What changed is who draws it. Until 2026-08-12 its weight, size and tracking were set by
`app-bar.css`, an organism, in the file whose first paragraph says an organism repaints nothing.
That is the same defect the consolidation already fixed once, when the reveal's container was
found restyling the Label; this is the second instance and it was invisible until the brand gave
the wordmark somewhere else to live.

**A wrapper this stage deliberately did not promote.** The lockup, `.lockup`, holds the two atoms
in the app bar. It stands in **one** host, so by rule 1 of this file it is a one-off and is
recorded here rather than given a component of its own. Its rule lives in `app-bar.css` beside
`.back`, `.close` and `.step`, the other three slots with no component anywhere. The concept page
names two more hosts for it, the share card's band and a launch screen, and the share card stands
on 2 grey pages and 0 coloured ones. When the second host is built, this becomes a molecule.

## Molecules (23)

| Component | Class | Axes and their values | Pages in the product | Was |
|---|---|---|---|---|
| Action row | `.actions` | - | 42 | `.secondary` |
| Alert item | `.alert` | content: with prices / with unread dot | 2 | - |
| Charge list | `.charges` | state: marked | 5 | - |
| Detail hero | `.hero` | - | 6 | - |
| Door | `.door` | content: with a pick line / without | 4 | - |
| Form field | `.field` | host: div / form (the search) | 8 | - |
| Group head | `.group-head` | rule: banded / plain | 16 | - |
| Merchant chip group | `.rgroup` | - | 1 | - |
| Nav row | `.navrow` | - | 2 | - |
| Numbered steps | `.steps` | - | 3 | - |
| Pair list | `.pairs` | markup: dt/dd / span. content: values / sentences | 19 | `.facts`, `.unlocks` |
| Plan option | `.plan-opt` | host: app / landing | 2 | - |
| Preset tile | `.tile` | state: pressed | 2 | - |
| Promise list | `.promises` | - | 3 | - |
| Range picker | `.range` | availability x selection: rest / pressed / disabled / disabled+pressed | 3 | - |
| Save-focus candidate | `.cand` | - | 1 | - |
| Share card | `.sharecard` | - | 2 | - |
| Subscription row | `.row` | state: skeleton. host: list / candidate | 8 | - |
| Summary | `.summary` | content: with a total / without | 5 | - |
| Switch row | `.switch` | - | 2 | - |
| Text block | `.textblock` | scope: page 24 / block 21 / inset 17 | 44 | `.lede`, `.state` |
| Trust block | `.trust` | - | 11 | - |
| Wash block | `.wash` | tone: neutral / attention / error / code. content: with an arrow / without | 13 | `.attention`, `.notice`, `.decoder` |

## Organisms (14)

| Component | Class | Axes and their values | Pages in the product | Was |
|---|---|---|---|---|
| App bar | `.appbar` | form: row / column rail at container 760 | 54 | - |
| App shell | `.app` | form: steady / flow / detail | 54 | - |
| Card | `.card` | - | 3 | `.locked`, `.source` |
| Category group | `.group` | - | 12 | - |
| Dashboard head | `.head` | exists only at container 900 | 5 | - |
| Dialog sheet | `.sheet` | full width, then a card at container 760 | 3 | - |
| Divided list | `.divlist` | inset: bare / inside a panel | 4 | `.alerts`, `.navrows` |
| Empty block | `.empty` | - | 2 | - |
| Grid | `.grid` | columns: 1 to 2 / 2 to 3. gap by child size | 8 | `.doors`, `.tiles`, `.plans` |
| Groups column set | `.groups` | columns: 2 at 900, 3 at 1340 | 4 | - |
| Panel | `.panel` | head: banded h2 / summary disclosure | 7 | - |
| Reveal step | `.rstep` | - | 1 | - |
| Save-focus list | `.candidates` | - | 1 | - |
| Tab bar | `.tabbar` | form: bottom bar / left rail at container 760 | 28 | - |

## What the consolidation removed, and on what ground

| Level | Merged into one | Ground |
|---|---|---|
| atom | `.consequence`, `.context`, `.tone`, `.legal`, `.freshness`, `.removal`, `.pitch`, `p.notice`, `.p` to **`.muted`** | One zone, one text slot, muted ink. Three sizes and one ruled variant. Margins belonged to the host all along |
| atom | `.tag`, `.badge`, `.best`, `.plan`, `.locklabel` to **`.chip`** | The code merged them into one base rule at stage 07; the inventory still counted two |
| atom | `.axis`, `.strip` to **`.metarow`** | A row of labels, with and without rules |
| molecule | `.attention`, `.notice`, `.decoder` to **`.wash`** | Same fill token family, same padding, same margin. Tone is an axis, and the decoder's 10px corner was drift |
| molecule | `.actions`, `.secondary` to **`.actions`** | Identical but for a margin |
| molecule | `.lede`, `.state` to **`.textblock`** | Verified by markup: neither contains anything from the kit. Heading plus paragraph at three scopes |
| molecule | `.facts`, `.unlocks` to **`.pairs`** | Label and value per line, divided by a hairline, last one bare |
| organism | `.alerts`, `.navrows` to **`.divlist`** | Three identical `li + li` divider rules; the third belongs to `.group` and stays a usage |
| organism | `.doors`, `.tiles`, `.plans` to **`.grid`** | One zone: a repeated child. Columns are the axis |
| organism | `.locked`, `.source` to **`.card`** | White, `--line`, `--radius`, padded content. The 18 against 16 padding was drift |

**Two atoms were ADDED, not removed.** The eyebrow (`.k`, 4 pages) and the label (`.lbl`, 3
pages) each have a base rule in `kit.css` and occurrences in the product, and neither had a row
in the stage-07 tables. The inventory's own prose calls `.k` "the `.k` atom" twice while the
atom table does not list it. Found by reading the stylesheet against the tables rather than
trusting either.

**One organism left the system rather than merging.** The reviewer's page frame (`.layout`,
`.stage`, `.stage-app`, `.sidebar`, `.nav-toggle` and the eight `--c-*` variables) stands on 55
pages and travels to no build. It is not a component of the product, so it moved to the stand's
own `design/kit/_page.css`, where the four literals Codex found also get fixed by the move.

**Three rows are deleted outright**, each with its proof: `--success` (declared, read nowhere,
founder decision on 2026-08-11), `.locklabel` (declared in the chip base, zero occurrences on
all 55 grey pages), and `.app .plan-opt .amt { font-size: 22px }` (a dead declaration overridden
by 30px 373 lines later, which renders and is what the plan price actually is).

## The renaming map

Decided here, executed at step 6 when the product moves onto system classes, and read again by
the rollout at stage 12 for the screens that are still grey. Without it, four steps later
nobody can reconstruct what `.decoder` was folded into.

| Old class or selector | New class and variant | design/ | wireframes/ |
|---|---|---|---|
| `.consequence` | `.muted` (12.5px) | 11 | 21 |
| `.context`, `.tone` | `.muted` (13px) | 9 | 10 |
| `.legal` | `.muted.ruled` (12px) | 0 | 7 |
| `.freshness` | `.muted` (12px) | 0 | 2 |
| `.removal` | `.muted` (13px, 52ch) | 5 | 8 |
| `.pitch` | `.muted` (13px) | 1 | 1 |
| `p.notice` | `.muted` | 1 | 1 |
| `.p` | `.muted` (13px) | 13 | 5 |
| `.lbl` | `.lbl`, kept, with `.strong` | 1 | 3 |
| `.badge`, `.best`, `.plan` | `.chip` plus tone | 14 | 21 |
| `.tag` | `.chip` (quiet) | 12 | 15 |
| `.tag.trial` | `.chip.trial` | 0 | 1 |
| `.tag.cancelled` | **deleted at step 6, not renamed** | 0 | **0**, this row said 1 |
| `.axis` | `.metarow` | 3 | 3 |
| `.strip` | `.metarow.ruled` | 0 | 2 |
| `.attention` | `.wash.attention` | 3 | 3 |
| `.notice` | `.wash` | 4 | 5 |
| `.notice.is-error` | `.wash.error` | 1 | 1 |
| `.decoder` | `.wash.code` | 5 | 5 |
| `.secondary` | `.actions` | 3 | 6 |
| `.lede` | `.textblock` (24px) | 10 | 25 |
| `.state` | `.textblock` (21px) | 8 | 19 |
| `.facts` | `.pairs` (dt/dd) | 7 | 18 |
| `.facts.sentences` | `.pairs.sentences` | 1 | 5 |
| `.unlocks` | `.pairs` (span) | 1 | 1 |
| `.alerts` | `.divlist` | 0 | 2 |
| `.panel .alerts` | `.divlist.inset` | 0 | 2 |
| `.navrows` | `.divlist` | 2 | 2 |
| `.doors` | `.grid.roomy` (1 to 2) | 1 | 4 |
| `.tiles` | `.grid` (2 to 3) | 2 | 2 |
| `.plans` | `.grid` (1 to 3) | 1 | 2 |
| `.locked` | `.card` | 1 | 1 |
| `.source` | `.card` | 0 | 2 |
| `.field input` | `.input` | 6 | 8 |
| `.field select` | `.select` | 4 | 4 |
| `.switch input` | `.check` | 1 | 2 |
| `.num` | `.k` | 0 | 1 |
| `.btn` on `add-subscription-error` | **refused at step 6, stays `.btn`** | 1 | 1 |
| `[chart]` literal on `history-trends-loading` | a drawn frame, as on the other three | 1 | - |
| `[chart: waiting for a third month]` literal on `history-trends-empty` | a drawn frame, keeping its accessible name | 1 | - |
| `.layout`, `.stage`, `.stage-app` | leave the system, to `_page.css` | 28 | 55 |

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
| GC1 App Header | `.appbar` + `.wordmark` `.acct` `.back` `.step` `.plan`, plus the flow and rail forms | **54** (all but the landing) | 6 variants named, **7** compositions rendered (recorded as 10 until 2026-08-11, corrected by reading the children of `header.appbar` on all 54 grey pages: 21 / 10 / 9 / 8 / 3 / 2 / 1), only 3 tellable apart by class |
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

A **close** control (`× Close` reusing the `.back` class) on the upgrade pair. **This is now blocking, not merely untidy** (found 2026-08-11 at the mark census): `a.back` carries `&lsaquo;` 36 times and `&times;` twice, and CSS cannot tell them apart because nothing distinguishes them but the words inside. So neither mark can be drawn while they share a class, and the back arrow is the single most common mark in the product. The renaming map owes a split: `.back` and `.close`. The **step marker**,
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
input and a date input are owed. **The money half was paid on 2026-08-11**, on the founder's
decision: the Amount field holds digits only, takes `inputmode="decimal"` and wears the `.affix`
variant of the text input, which draws the currency sign inside the box. The date half is still
owed. And the product's toggle is a checkbox inside `label.switch`;
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

## One open value, flagged rather than merged, and closed on 2026-08-12 at 220

The desktop rail is **240px in the kit and 232px in the grey**. Eight pixels, and by the migration
rule a value moves only by its own named decision. Carried at 240, which is what the migrated file
and `shell.html` already agree on, and left for the founder.

**Closed by the founder on 2026-08-12, and by a third number: 220.** Neither of the two had been
chosen by anyone, which is exactly why the row stayed open. The floor was probed at 180 (the app
bar's widest way out, "Your subscriptions", is 148px of unbreakable ink plus the bar's two 16px
margins) and 220 keeps 40px of slack. One declaration moved, `grid-template-columns` in
`app-shell.css`; the stand's `--kit-measure` mirror in `_page.css` follows it rather than deciding
anything. Ledger in `docs/tokens-audit.md`, section The brand, correction 3.


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

---

## The control edge: the non-text contrast decision, and why it is two values

Carried out of step 6 as the one finding the audit was not allowed to fix, decided by the founder
on 2026-08-11: **scope the darker edge to controls, leave every surface alone.**

WCAG 1.4.11 asks 3:1 of the visual information that identifies a user interface component. A
control in this system is identified by its edge, because its fill is paper and so is the card
behind it. `--line` measures **1.23:1 on paper**, so the requirement was missed on every one of
them.

**Two new values, and no existing value moved:**

| Token | Value | On paper | On canvas | On panel |
|---|---|---|---|---|
| `--line-control` | `#7b8d91` | 3.46 | 3.10 | 3.22 |
| `--line-control-hover` | `#5a686c` | 5.78 | 5.17 | 5.37 |

`--line-control` is the lightest value on the `--line-strong` hue that clears 3:1 on all three
grounds a control can sit on, so the edge is exactly as dark as the norm requires and not a shade
darker. `--line-control-hover` is equal to `--soft` today and is a different **role**, the same way
`--on-accent` is equal to `--frame`: `--soft` is muted text, this is a control's edge under the
pointer. They part company at the dark theme.

**Six rules take it, and the list is the decision written as code:**

| Takes `--line-control` | Keeps `--line` | Why |
|---|---|---|
| `.btn` (outline form) | `.btn.primary` | The petrol fill identifies it at 6.23:1 already |
| `.field input`, `.field select` | `.btn[disabled]` | A disabled control is exempt from 1.4.11 |
| `.tile` | `.plan-opt` | A `div` holding a button. The button is the control, the tile is a card |
| `.door` | `.locked`, `.panel`, `.source`, `.sharecard` | Surfaces. Nothing has to be found by touch |
| `.range button` | `.logo` placeholder | Not interactive |
| `.cand .cut` | dividers, the tab bar seam, `.promises` rule | Separators, not boundaries |

**The rejected option is the one worth recording.** Raising `--line` itself to 3:1 would have been
one line and would have satisfied any checker, and it would have put a hard edge on every card,
panel, list and callout in the product. The language was chosen for a person who avoids finance
apps; a screen of boxed compartments is the thing it was chosen against. The norm asks for the
edge of a control to be findable, not for every surface to be outlined, and the split follows the
norm rather than the convenience of one variable.

**Carried, still:** the checkbox inside `.switch` is a native control at 20px against the 24px
WCAG 2.5.8 asks. Its wrapping label is the real pointer target at 44px or more, and its edge is
drawn by the browser rather than by this file.
