# Backlog - what this stage found and deliberately did not fix

Opened at the molecule round of step 5, earlier than the pack schedules it, for one reason: the
findings were arriving faster than the steps that own them, and a finding with no home is a
finding that gets lost. Stages 09 to 13 read this and close what their own material closes.

**Nothing here is an open defect on a shipped screen.** Everything is either a decision that
needs a person, or work whose correct owner is a later step. Each row says which.

---

## Blockers, and both land at step 8

| What | Why it is not fixed here | Who owns it |
|---|---|---|
| **Nothing in `design/system/` establishes a container.** `container-type: inline-size` is declared in exactly two places in the repository, `wireframes/_wf.css:35` and `design/kit/kit.css:145`, both on `.stage`, which is the reviewer's chrome and travels to no build. The product's entire desktop layout is container based | It is a decision, not a patch: either the app shell ships a wrapper that declares the container, or those rules become media queries, or `base.css` declares it on `body`. The moment a screen stops loading `kit.css` and starts loading `index.css` it renders as one mobile column at every width, and nothing errors | The organism round, with the shell in front of it |
| **Two placeholders still ship as literal text in colour.** `history-trends-loading.html:67` renders `[chart]` and `history-trends-empty.html:61` renders `[chart: waiting for a third month]` | The fix is markup on a product screen, and step 6 owns product markup. It also corrects a row on the stage 07 hub which records "3 found, 3 fixed, 0 carried" | Step 6, from the renaming map |

---

## Decisions that need a person

| What | The options, honestly | Who decides |
|---|---|---|
| **Should a card that cannot be clicked answer a pointer at all?** `.plan-opt` is a `div` holding a `button`: it cannot be focused, cannot be pressed and has no accessible role, and yet its edge strengthens under the pointer | **Narrowed, not closed.** The token half is decided: `--line-container-hover` is declared on `--hairline-strong` with a computed dark pair, because dropping a state is a visual change and none of the stage's three named sources asked for one, so carrying it was the only move that needed permission from nobody. What is left is the taste question underneath, and it is smaller: a hover that promises a click the card does not deliver | Founder |
| **Non-text contrast on the remaining surfaces.** Card, panel and divider edges sit at 1.23:1 against the 3:1 of WCAG 1.4.11 | Already decided once, on 2026-08-11: the darker edge is scoped to controls and surfaces keep the hairline, because raising `--line` outlines the whole product and the language was chosen against that. Recorded here so a later audit does not reopen it as new | Closed, kept for the record |
| **The icon set is optically unbalanced.** Painted boxes differ by 22 percent and INK by 106 percent: `.ic-save` carries 2.06 times the paint of `.ic-you` in the same tab bar | Measured, not eyeballed, at the icons page. The repair is redrawing a glyph, which is `design/system/` work and belongs with whoever owns the set | Founder, or stage 12 when the tab bar is rolled out |

---

## Holes in the system, each with the reason it was not filled

| What | Why it was left | Who closes it |
|---|---|---|
| **The numbered-steps marker is 26 by 26 and no primitive holds that size.** `--tap` and `--row` are the only size primitives and it is neither; a width is not a margin, a padding or a gap, so the 8px grid does not govern it | Inventing a size primitive for one marker would be a token nobody else reads. The honest question is whether the system needs a size scale at all, and that is a question for the whole system rather than for one list | Step 9, with every component written |
| **The spacing fold moved the step marker's text.** `padding-left: 36px` goes to `--space-40`, which opens the marker-to-text gap from 10px to 14px and shifts every step's text 4px right | It is a correct consequence of a decision the founder made, not a defect. It is here so the pixel comparison at step 8 finds it already explained | Step 8 verifies it |
| **A seam is two hairlines thick.** The last `li` of a charge list keeps its bottom rule and the `.gate` that follows it inside the same panel draws a top rule | Read from two rules and not yet seen in a browser. The fix touches the panel, which is an organism | The organism round |
| **Eleven ARIA and form-semantics findings from stage 07.** A fieldset with no legend, an aria-label on a paragraph ARIA discards, a form with no required or invalid state | They are markup, and a coloured copy owns the visual layer only. Fixing them in colour creates the grey to colour desync stage 07 exists to test for | Step 6, or the stage that owns structure |
| **The `.switch` checkbox is 20px against the 24px of WCAG 2.5.8.** Its wrapping label is the real pointer target at 44px or more, so the raw control is not the target | Recorded rather than resized on 2026-08-11: a kit value changes only by a named decision, and this one has a defensible reading | Founder |

---

## Found at the molecule round, and each one is a decision rather than a bug

| What | The question | Who decides |
|---|---|---|
| **The switch row has no hover of its own.** `kit.css` gives `label.switch` none, and the focus ring lands on the checkbox inside it because a label is not focusable | Adding `--bg-hover` is one line and would change how Settings and Data and privacy render. That is a named decision, not a tidy-up, so the agent building it wrote both options out and invented neither | Founder |
| **`.cut` is now `.btn` minus two things.** Measured on the rendered page: identical `min-height` 44, `padding: 0 16px` and `font-size: 14px` after the fold. It differs only in `font-weight`, 400 against 600, and in a hover that changes edge and ink but not fill | Another collapse the scale exposed, the same shape as `.btn.compact`. Whether it merges is a rename question | Step 6, from the map |
| **"Sign out" wears the nav row class with no modifier.** It is the one row in the product that leaves rather than goes deeper, and nothing in the markup says so | Census case 9. A variant, or a deliberate sameness with a reason written down | Founder |
| **`.cand` is recorded as a molecule while hosting a molecule**, which the ladder calls an organism | The level was left exactly as `inventory.md` has it rather than changed mid round, and it is noted on its page. Moving it changes the `@import` order | Step 9, at the reconcile |
| **The numbered-steps marker has no size primitive** and the spacing fold shifted its text 4px right | Already listed under holes above; repeated here only because the two agents found it independently, which is worth knowing | Step 9 |
| **Two link hovers are dead in the product today, and it is not the system that killed them.** `.trust a:hover` and `.notice a:hover` are 0-2-1; `.app .trust a` and `.app .notice a` are also 0-2-1 and written 22 lines LATER in `kit.css`, so the later rule wins and the ink never changes. Measured on `design/home.html` and `design/home-error.html`: the trust link has no pointer response at all on 9 coloured pages, and the notice link's ink is pinned so only its underline goes petrol | The component files preserve `kit.css`'s order deliberately and say so at the line where it happens, because repairing a hover is a visual change and is none of the stage's three named sources. It is a real live defect and it predates the system | Step 6, which owns the product's markup and cascade |
| **A host repaints an atom, carried on purpose.** `.plan-opt .p` sets the Muted line to `--text-body` where the atom gives `--text-muted` everywhere else | The exact defect this round exists to remove, and removing it changes three paragraphs on a live coloured screen with no decision behind the change. The two honest answers: an emphasis modifier declared on the muted line, or the card accepting muted ink like every other card | Founder, or step 6 with the map |
| **A third host override of the action row has no owner yet.** `.panel .gate .actions { margin: 0 }` at `kit.css:890` is byte-identical to `.locked .actions`, before the 8px grid as well as after, so the grid did not cause it | All three overrides belong to the containers, not to the molecule: `.locked` and `.gate` land on `--space-0`, `.rstep` on `--space-16`. Written in the molecule's file they would be a molecule reaching up into an organism | The organism round |
| **The stand was showing every list component at more than twice its real width.** `.kit-stage` handed a subscription row 898px where Home renders it at 425, a charge list 898 where Subscription detail renders it at 428, a nav row 898 where Settings renders it at 620 | **Fixed, listed here as the record.** At double its width a row stops being a row: the name and the amount sit 800px apart and the component reads as dull when the measurement is what is wrong. `--kit-measure` now carries the number, defaulting to the product's row column, with `.wide` and `.bleed` as the two named exceptions. Same class of error as the reading measure that came unbound past 900px on two accepted screens: nobody widens the window, so it stays quiet | Closed at the molecule round |
| **Four atoms are sized by their hosts, which is the undeclared variant `CLAUDE.md` forbids by name.** Measured across all 18 atom files: `amount.css` sets four different sizes keyed by `.row`, `.charges li`, `.plan-opt` and `.hero`; `logo.css` sets four keyed by `.hero`, `.alert`, `.tile` and `.rgroup li`; `muted-line.css` two keyed by `.tile` and `.row`; `big-total.css` one keyed by `.sharecard` | The project's own rule reads "a contextual override is an undeclared variant, not a tidy adjustment: declare the modifier and put the class in the markup". These are exactly that, and putting the rules in the ATOM's file rather than the host's was the right half of the decision. **The visible cost is what the founder found:** an atom page cannot show its own size axis without importing four molecules, so seven of the eighteen atom pages host a higher rung. What is owed is a declared size axis on four atoms and the class in the markup, which is a rename plus a markup change | Step 6, from the map |
| **`.field input` and `.field select` are not a ladder problem, and they are counted separately so the number is honest.** `select.css` names `.field` 38 times and `text-input.css` 26 | Those atoms have **no class of their own** in the product: the input IS `.field input`. That is a naming defect already on the renaming map as `.input` and `.select`, not an atom reaching up the ladder. Counting the two together would report ten atoms reaching up where the real number is eight, and would put a scheduled rename in the same bucket as a live architecture fault | Step 6, already mapped |
| **The back arrow is still a character, and one class is why.** `a.back` is `&lsaquo; Back` 36 times and `&times; Close` twice. The mark census on 2026-08-11 counted seven drawn marks and three characters, and this class holds two of the three | CSS cannot select by text, so drawing `.back` today puts a left chevron on the word Close, and a mark on the wrong word is worse than a character on the right one. The split into `.back` and `.close` is a rename, and renames execute at step 6 with the markup. Then both marks follow their names | Step 6, from the map |
| **A button that may not wrap has to go somewhere when it does not fit.** At 360px `.actions` measures 213px of room and its button measures 225: a 12px overflow. `.plan-opt` overflows by 2px the same way | **The direct consequence of the rule the founder set**, that a button never breaks into two lines. `white-space: nowrap` was the right answer to two-line buttons and this is its bill: a label long enough must overflow, shrink, or stack. The three honest answers are a shorter label (Voice owns the string), a declared compact padding below 400px, or the action row stacking vertically at the narrow end. Not patched on one page, because a fix on one page is the desync this stage exists to remove | Founder, with Voice for the string |
| **The switch row's focus ring lands on the checkbox, not the row.** A `label` is not focusable, so the ring is drawn 20px wide inside a 44px target | Not a defect of the system: it is what the markup does. Fixing it means either the label becomes the control or the ring is projected from the input onto its label. Both are markup decisions | Step 6, with the ARIA findings above |

---

## Copy, owned by Voice

| What | Where |
|---|---|
| Thirteen microcopy divergences found at stage 07 | Closed in Voice Round 4, 2026-08-11. Kept here as the pointer |
| **Two result-count strings for the preset search have no row in `microcopy.md`**: `1 match for "net"` and `3 matches for "net"` | Written when the tile filter was built, 2026-08-11, and both follow the product's plain-language rule. The third string the filter uses is NOT new: `No match for "Cerebro Cloud"` is the exact line `add-subscription-empty` already carries, which is why the zero case reuses it rather than inventing a fourth. Voice owns all three and should give the two new ones a row |
| The Amount placeholder changed from `$0.00` to `0.00` and no row in `microcopy.md` owns either string | Forced by the founder's decision that the field takes digits only: with the sign now drawn beside the input, the old placeholder would have rendered `$ $0.00`. The hint "Enter an amount, like $9.99" was left alone and still reads correctly. Voice owns the string and should give it a row either way |
| The typographic prose in `DESIGN.md` disagrees with the code in fifteen places | Decided: the document moves to the code. The edit waits for the scale, which now exists, so this is ready to execute |

---

## What is deliberately NOT in this file

Anything already fixed, anything recorded in `docs/tokens-audit.md` as one of the three named
sources of a visual change, and anything a later step is scheduled to do anyway. A backlog that
lists the plan alongside the exceptions stops being readable, and a backlog nobody reads is the
same as no backlog.
