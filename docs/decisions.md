# Decision log

What we did, why exactly this, and what we rejected on what ground. Newest on top.
This file is never loaded into a session automatically: read it when you need the ground
under a decision. Rules that must hold next time live in `CLAUDE.md`; status lives in the
README table and in `done:true` in `/_nav.js`.

---

## 2026-08-12 - The last letter is petrol, with no condition, and the brand heads the rail

Three corrections on the day the mark shipped, all from the founder looking at a real screen
rather than at a plate. Two were asked for and the third was found while measuring the first.

**The coloured letter loses its three conditions.** `logo-crop.html` made it depend on the word
standing alone, on being above 20px, and on the mark being absent, "because the mark is already
carrying the petrol and two petrol things beside each other is one too many". The product
satisfies none of the three, so the rule shipped for one day as no colour at all, and the coloured
letter would have stayed unbuilt and untested until stage 12.

The concept's reason describes a bar with two saturated **objects** in it. What is on the screen
is a 22px mark and one 16px glyph 46px to its right, and the pair reads as one lockup rather than
as two claims. The rule is now: **the last letter is petrol.** No condition, at any size, with or
without the mark. Rejected: keeping the conditional rule and building none of it, which is how a
brand rule becomes a paragraph nobody has ever seen rendered.

The sentence this overrules is **left standing** on the concept page. That page is the record of
how the mark was found, not a live specification, and editing the record to match the outcome
would destroy the only evidence that a decision was taken at all.

**The brand heads the rail.** Founder: "the logo jumps down, and it should not, here or on any
other page." Measured at 1280 before anything was touched: the lockup sat 8px from the top of the
bar on the ten screens with no leading control and **56px** on the eighteen carrying a back or a
close. Walking from the list into a subscription moved the mark down 48px and walking back moved
it up again. An identity whose vertical position depends on which screen you are on is not an
identity.

The same jump had a twin on mobile that the complaint did not name: the bar's three links each
stand on the 44px tap floor and the brand stood on nothing, so a bar holding only the brand was
41px tall against 61px everywhere else, on four screens. The brand now takes the same floor as
every other slot, and the mark sits **19px from the top of the bar on all 28 screens, at both
viewports, in both themes**.

Fixed with `order: -1` on the lockup inside the 760 container block: same DOM, two arrangements,
one per form factor. The row keeps the way out at the leading edge, which is right on a phone; the
rail puts the brand at the head and the way out on the first line under it, which is what a rail
is. Rejected: reordering the markup, which would have moved the way out off the leading edge at
360 and traded a desktop defect for a mobile one.

## 2026-08-12 - The identity is Crop, and the wordmark reverses its tracking

Thirteen logo directions were built as live HTML at real sizes on `design/concept/logo.html`. The
founder chose **Crop**, taken to depth on `design/concept/logo-crop.html`, and asked for it in the
product the same day.

**What makes it the choice, in one sentence:** it is not a picture of a `d`. One letterform is
drawn on a 100 unit square, deliberately larger than any frame that will ever hold it, and a
window is cut out of it. The letter never changes size relative to itself; the window does. So a
new surface gets a new window rather than a new drawing, and the round avatar is the proof: nothing
was redrawn, the window simply stopped having corners.

**Rejected: a wordmark and no mark at all,** which is what shipped until this day and is direction
"No mark" on the same page. It is honest, it is cheap, and it has no answer to the favicon. A
16px tab, a home screen icon and a share card are three places where a word cannot go, and the
repository had no icon in it at all.

**Rejected: crops B and C in the system now.** They are locked and they are not built, because the
hosts that carry them (the share card's band, a launch screen, the avatar) are still grey or do
not exist. A variant with no host is an invention with a nice reason attached, and this project
already has a rule against those.

**A value changed with it, and the reason is a reversal rather than a correction.** The wordmark
was 700 at +0.02em, and both `app-bar.css` and `DESIGN.md` argued for it out loud: at 16px in a
bar the letters need air, and a wordmark set solid reads as a word rather than as a mark. Both were
describing a product with **no mark in it**, where the word carried the identity alone. It is now
800 at -0.02em with the `dd` pair a further -0.09em. The premise moved; the value followed.
`DESIGN.md` was rewritten the same day rather than left to contradict the code.

**What it cost the product, measured:** 3774 elements matched across 28 coloured screens at two
viewports, 168 added, 0 dropped, and **69 moved**. All 69 are the brand's own slot and the two plan
chips whose `margin-left: auto` absorbs its new width. The ledger is in
`design/kit/docs/tokens-audit.md` under the fifth named source.

## 2026-08-12 - The brand is petrol's fourth place, and it is an exception, not a fourth job

D-Concept spends petrol on the primary action, the current selection and the trust line, and says
"and no more". The mark is petrol and it stands on every screen, so the locked decision had to
move or the mark could not ship.

**It moves as a named exception with a boundary, not as a fourth job.** The brand is an identity
and never an accent: it lives in the chrome (the app bar, the tab, a home screen) and it **never
appears inside a screen's content**. The three jobs are unchanged, and the count of petrol things
inside any screen's content is still what it was.

**Why this is not a loophole.** The three jobs answer the question "what should I do, where am I,
can I trust this". The brand answers "whose product is this", which is not a question the content
of a screen ever asks. If the mark ever appears beside a number, that is the rule being broken and
not the exception being used.

**The consequence the concept drew from this did not survive the day.** It read: beside the mark
the wordmark is all ink, because the mark carries the petrol and two petrol things beside each
other is one too many. Overruled the same afternoon, in the entry above, after the founder looked
at the pair on a real screen. The exception itself is unchanged and so is its boundary: what moved
is how many petrol things the chrome may hold, not whether the content may hold any.

`logo-crop.html` had already written this exception as a tag on its rules plate. `CLAUDE.md` had
not, and a locked decision that only one file knows about is not locked. Both now carry it.

## 2026-08-11 - Voice Round 4: a copy defect is fixed in the grey, never in the colour

UI + Visual compared all 28 coloured pages against `voice/docs/microcopy.md` and found thirteen
divergences. **None was a colouring error:** the visible text of every coloured page is
character-identical to its grey original, so each one was a gap between the frozen grey and the
line inventory, opened before colour existed. They were carried out of stage 07 unfixed on
purpose, and closed on the founder's call before stage 08.

**The mechanism is the decision.** Voice is the stage that owns product copy, so Voice reopened:
the line inventory changed, the grey wireframe changed, and the coloured copy followed byte for
byte. Fixing them in colour would have made the coloured page say something the grey does not,
which is the exact grey-to-colour desync stage 07 exists to test for, thirteen times over.

**The count came back fourteen.** The worst finding, the project's own open-question notation
printed as product copy ("Not on sale yet. `[? D4, the lifetime price, $99 to $139, is still
being decided]`"), was on the welcome landing as well as on the paywall. The landing is not in the
coloured sample, so the stage-07 pass could not have seen it. It was found by grepping the
notation across all 55 grey pages instead of fixing only the screen that was reported. Both now
read "Not on sale yet. We are still working out the price." The question itself is not closed and
did not move: it lives in node 5.13's Status, where a question belongs.

**Two of the fourteen were not screen edits at all, and that is the point of verifying first:**

- On the home-empty doors the screen was right and the document was wrong. The inventory still
  carried "we can never move your money", the exact form D7 retired. Shipping `microcopy.md` in
  that state would have shipped a banned variant.
- On the full-screen Pro gate, `voice.md` said "Maybe later" is **always** present. The rule was
  narrowed rather than the screen changed: the appbar chevron is that gate's exit, and a second
  control one line under it going to the same place is chrome, not kindness. What "always"
  protects is that no gate is a dead end, and a chevron protects that too.

**Rejected:** deferring all of it to Handoff. The arithmetic decides it. Fixing a line today costs
two places, the grey and its coloured copy. After stage 12 colours the remaining ten screens it
costs the same two places for 55 pages instead of 28, and a line inventory that ships out of step
with the product it inventories is wrong for whoever builds from it.

**One thing this round did not touch:** the eleven ARIA and form-semantics findings from the same
pass. Those are markup, not copy, and they belong to the stage that owns structure.

The full was-to-became is Round 4 of the rewrite log in `voice/docs/microcopy.md`. The published
page was rebuilt with it, and its line inventory is now regenerated from the file rather than
hand-maintained: the two had already drifted apart on the upgrade screen before this round.

---

## 2026-08-11 - The control edge: 3:1 on controls, the hairline everywhere else

Founder's call on the one finding stage 07 carried without fixing. WCAG 1.4.11 asks 3:1 of the
visual information that identifies a user interface component. A control in this system is
identified by its edge, because its fill is paper and so is the card behind it, and `--line`
measures **1.23:1 on paper**. Every field, select, secondary button, preset tile, door and segment
missed the requirement.

**The decision is the scope, not the number.** The darker edge goes on controls only:
`.btn` in its outline form, `.field input`, `.field select`, `.tile`, `.door`, `.range button`,
`.cand .cut`. Cards, panels, plan tiles, list containers, the tab bar seam and every divider keep
the hairline. Two new values, and **no existing value moved**:

- `--line-control: #7b8d91` - the lightest value on the `--line-strong` hue that clears 3:1 on all
  three grounds a control can sit on (paper 3.46, canvas 3.10, panel 3.22). As dark as the norm
  requires and not a shade darker.
- `--line-control-hover: #5a686c` - equal to `--soft` today and a different role, the way
  `--on-accent` is equal to `--frame`. It exists because the old hover value `--line-strong`
  (#cdd7d9) is **lighter** than the new resting edge, so keeping it would have made the boundary
  weaker under the pointer, which is the opposite of what a hover is for.

**Rejected: raising `--line` itself to 3:1.** One line, satisfies any checker, and puts a hard
edge on every card, panel, list and callout in the product. The language was chosen for a person
who avoids finance apps, and a screen of boxed compartments is the thing it was chosen against.
The norm asks for the edge of a control to be findable, not for every surface to be outlined.

**Rejected: leaving it as a recorded debt.** It was already recorded once, at step 6, and a debt
that survives a stage boundary is a debt that ships. The cost of fixing it is two variables and
one comment; the cost of shipping it is an accessibility claim the product cannot make.

`.plan-opt` is the one case worth naming, because it looks like a control and is not: it is a
`div` holding a button, so the button takes the edge and the tile keeps the hairline. It is also
what keeps `--line-strong` alive, as the only consumer left.

**Still carried:** the checkbox inside `.switch` is a native control at 20px against the 24px WCAG
2.5.8 asks. Its wrapping label is the real pointer target at 44px or more, and its edge is drawn
by the browser rather than by our stylesheet.

---

## 2026-08-11 - A seventh screen, added as the saturation test, and what it found at the wide end

Founder's call after the stage closed: colour the account screen before answering the open
questions. **Settings / Profile (node 6.16) plus node 6.16.1, the account-less steady state of the
manual path.** The sample is seven screens and twenty-eight pages.

**Why it was worth building a screen that was not in the sample.** The pack asks for a saturation
signal to be said out loud: the point at which a new screen stops adding to the kit is the point
at which the rest of the product can be assembled in one pass at stage 12. Six screens never
produced that signal cleanly, because each of the six had been chosen for what it would add.
Settings was chosen for nothing, and **it added nothing**: not a class, not a value, not a plate
in the showcase. 21 atoms, 28 molecules, 19 organisms, 68 components, unchanged.

That result is not luck, it is the step-2 decision paying out. The inventory was read from all 55
grey pages rather than from the six that were going to be coloured, so `.navrows`, `.navrow`,
`.switch` and `.promises` were counted even though no screen in the sample carried them. A kit
sized to the sample would have met this screen with four missing components.

**What it cost, and why that is the real reason to have built it.** Assembling a column screen at
desktop width exposed a defect none of the six could show. Three reading measures (`.form-col`
560, `.locked` 560, `.rows-col` 620) were written at specificity 0-2-0 and tie with
`.app > .screen > * { max-width: none }` in the 900 container block, written for Home's own
layout. Source order decides, the later block wins, and past a 900px container the measures stop
existing: the form rendered at 588, the Pro gate at 748, the account column at 733. **Two of those
screens had already been walked and accepted at the step-5 gate.**

Fixed as a binding rather than a value: `.app > .screen > .form-col` at 0-3-0 cannot be outranked
by a blanket reset regardless of order, and every one of these classes is a direct child of
`.screen` on every page of both folders. No number moved.

**Rejected:** re-declaring the three measures inside the 900 block, which fixes the symptom and
leaves the next blanket reset free to unbind them again. **Rejected:** rendering the plan row on
Settings as the petrol chip GC7 wears in the app header, because node 6.16 says this screen states
the plan and never sells it, and petrol is spent on three jobs already. It stays `.subtotal`, as
the grey wrote it.

**Carried, not fixed:** the checkbox inside `.switch` is 20px, under the 24px WCAG 2.5.8 asks. The
label wraps the checkbox and measures 44px or more, so the pointer target a person actually hits
is the row; the raw control is not the target. Recorded rather than silently resized, because
changing it is a kit value and this stage changes values only by a named decision.

**The lesson, and it is about acceptance rather than CSS.** A screen is accepted at every width or
it is not accepted. The narrow end gets walked because breakage there is loud. This defect lived
at the wide end, looked entirely calm, and survived a triple critique and a four-instrument audit
because at 360 and at 760 the rule still held.

---

## 2026-08-11 - The sample is six screens, and the sixth was chosen by the strategy check

UI + Visual colours a sample, not the product. The rollout is stage 12, on purpose: a screen is
built once, when everything it needs already exists, and building it twice is the cost of
building it early.

**The five chosen at step 5, and the coverage each one bought.** The stated criterion was not
"representative" but "how much of the inventory do these together carry", reported by level so
that a sample with no organisms could not hide:

| Screen | Why it is in | What it added to the kit |
|---|---|---|
| Home / Subscription List | The etalon, the densest screen in the product, and the only list. Four states | The base of two organisms, the destination icons, the secondary actions |
| Subscription Detail | The third shell form, `.app.detail`, two columns from container 900. Three states including the unmatched merchant | Nothing. The sample's first sign of saturation |
| Add a Subscription | The form screen. The interaction primitives enter here or nowhere | `fieldset` |
| Upgrade to Pro | The one screen that asks for money, so the one where the One Voice Rule is easiest to break | `.pitch`, and a named decision on plan-row width |
| History and Trends | The paywall at depth (D3), and the locked state is a whole organism the free tier sees | `.bycat`, and the entire `.locked` organism |

**The sixth, added at step 6.** The stage owes a strategy check on the whole sample together:
which screen tests the riskiest assumption, and by which element a person actually touches. The
answer was none of them. H0 says an avoidant person who sees their whole recurring spend in one
calm frame completes the reveal and reports relief rather than stress, and it is tested on node
1.5, the Guided Reveal, where the gradual reveal D1 locked actually happens. Home carries the
aftermath of the reveal, not the reveal. **Guided Reveal is the sixth screen**, with its empty
state, and the sample is twenty-six pages: every state of all six.

It also pays for its place by the step-5 criterion, which is why it is an addition rather than an
exception: it brings three components (`.next`, `.rgroup`, `.rstep`) and forces two merges that
were owed anyway. **Rejected:** recording "we are not doing it" and leaving H0 grey until stage
12, on the ground that the prototype exists to test H0 and a grey prototype tests nothing about
whether the looking feels calm. **Rejected:** colouring `guided-reveal.html` without its empty
state, on the ground that a screen enters the sample with its states or it has not entered.

**The consequence for the criterion itself, worth carrying forward.** Component coverage is a
good criterion and it is blind to strategy: it picks the screens that stress the system, not the
screen the product is a bet on. Both questions have to be asked, and the second one is cheap to
ask first.

---

## 2026-08-10 - Tendd carries no photography, and the merchant mark is a full colour logo

Step 4 of UI + Visual was rewritten after its first attempt was rejected on screen.

**No photography anywhere, landing included.** The first version of the step specified six
generated editorial still lifes with a shared style prefix. The first image came back exactly as
briefed and was indistinguishable from stock: it could have belonged to a candle brand or a
meditation app, and nothing in it said "see what you are paying for". Underneath the taste
failure was a structural one: `wireframes/index.html` has no image slot at all, so six
destinations were invented for pictures the structure never asked for. **Rejected:** one
atmospheric photo at the top, on the ground that every one of the ten landing blocks already has
a better answer than a photograph, and the hero has the best one, which is the product itself.
The hero is a render of the real coloured Home screen, captured at step 5 and true by
construction. **Consequence:** empty states get a sentence and a button, never an illustration.

**The merchant mark is the real full colour logo** (founder). This is a deliberate hole in the
palette rule, and the ground is that a merchant mark is data rather than chrome: it is the user's
own Netflix, rendered as Netflix. Rocket Money and every competitor do the same, and
recognition in a list of fourteen rows is worth more than palette purity. The One Voice Rule
survives because petrol stays the only colour **Tendd** uses to speak. **Rejected:** the monogram
disc, which scales to all 400+ presets for free and keeps the list quiet, but makes a person hunt
for a subscription she would otherwise spot instantly; **rejected:** desaturated logos, which
lose the recognition that was the whole reason to use logos and still cost the same 14 files.

Four containment rules were written with it, in `design/visuals/README.md`: the mark lives in a
fixed 36px square, it is the only saturated thing in its row, petrol never sits inside the square,
and no brand colour appears anywhere outside it. Without those, 14 brand colours turn the calm
list loud and the product argues against its own first principle.

The monogram survives as the **fallback**, not as the style: 14 files cannot cover 400+ presets
or whatever a bank returns, so the `.logo` atom carries three states (image, monogram, skeleton).

## 2026-08-10 - The product design system is a root DESIGN.md, and the canvas was never white

Two things settled at the opening of UI + Visual, both of them corrections to prose rather than
to screens.

**The system lives at the repository root.** `DESIGN-artifacts.md` carried a July decision saying
the product system would live at `design/docs/design.md` and that there was "intentionally no root
`DESIGN.md`". The stage pack now says the opposite and forbids a `design/docs/` folder outright,
and stage 08 reads the root file. Put to the founder, who moved it. The July path was never
created, so nothing was lost, and `DESIGN-artifacts.md` stays what it always was: the draft the
generated system reads, not a second system. **Rejected:** keeping two design docs, which is how a
project ends up with two sources for one value.

**The canvas is off-white, and the cards are white.** `DESIGN-artifacts.md` recorded "bg / Paper
`#ffffff`" and `CLAUDE.md`'s D-Concept line said "white canvas". The built screens have
`--page: #eef3f4` under `--frame: #ffffff`, and **that is what attribute A1 asked for in the
first place**: its technique reads "off-white canvas, white cards". So the mockup was right and
two prose records had drifted from the attribute they were supposed to serve. Both corrected. The
same pass moved the recorded total from 44px to the 46px the screens ship.

The divergence check is written out as a table at the end of `design/concept/docs/concept.md`,
attribute by attribute with its source row in `personas.md`. Three rows, all three resolved in
favour of the built screens, no attribute dropped and no screen changed.

## 2026-08-10 - Four values get names, and ten stay literals until stage 08

The extract at UI + Visual returned fourteen proposed variables. The rule it runs under is that
extraction pulls **classes, not values**: a new variable leaves the agent as a list and enters the
system only by a named decision, and an existing value cannot be changed at all.

**Four adopted, and none of them is a new value.** `--radius-xs` (6px), `--radius-wash` (12px),
`--line-strong` (#cdd7d9) and `--on-accent` (#ffffff) are all values `kit.css` **already wrote as
literals**, two of them in more than one place, and two of them already named in prose by
`DESIGN.md` (`rounded.wash`, and the #cdd7d9 hover border). Naming them is the whole change; not
one pixel moves.

`--on-accent` is the one worth stating a reason for, because it looks redundant. It equals
`--frame` today and it is **a different role**: `--frame` is the card surface, `--on-accent` is
text on the accent. One token was carrying both, and they part company the moment stage 08 lays a
dark theme over the same system.

**Ten deferred, deliberately.** The rail width, the four tap targets, the three measures, the
block gap and the two z-indexes are real repetitions, but they are the primitive-against-semantic
split that stage 08 exists to make. Naming them now would guess at the layer they belong to, and
the kit is flat on purpose: semantic roles are only visible after the components have stood on
real screens.

**One is not a naming question at all and stays open.** The desktop rail is **240px in the kit and
232px in the grey**. That is an 8px value change, and by the migration rule a value moves only by
its own named decision, never as a side effect of an extract. It is carried at 240 (the value the
migrated file and `shell.html` already agree on) and flagged for the founder rather than merged
quietly.

## 2026-08-10 - "Best value" stays, and pricing becomes three columns on both screens

The critique found a straight contradiction: `upgrade.html` renders a **Best value** badge, and
node 5.13 lists a promotional badge among the things named and not added. Put to the founder,
who kept the badge and asked for the same treatment on the landing.

**Decided: the badge stays, and the refusal is amended in its owner rather than the screen being
stripped.** The ground is that node 5.13's list bundled two things that are not alike. "Most
people choose this" is a claim about other people that the reader cannot check, and it works by
making them feel odd; **"Best value" is arithmetic the card already shows on the line above it**,
$69 against twelve times $7.99. A badge that restates a number already on screen is a label, not
pressure. Everything else in that list stays refused: no countdown, no expiring offer, no
discount that appears when you try to leave, no pre-selected expensive plan, no undismissable
gate.

**And the pricing becomes three tall columns, the same on both screens.** Block 8 of node 1.1 was
one honest line and is now that line plus three columns: yearly with the badge, monthly, and
**lifetime**, which had been a footnote under the two cards on node 5.13 since it was drawn. The
third column is not invented: `5-13-upgrade.md` block 6 has always named the lifetime option, and
its price is the open `[?]` of D4 ($99 to $139). It is drawn with that marker on it rather than
with a number, because printing a price would settle a decision the founder has not made.

**Still not a comparison table**, which is what block 8 was written against, and the difference is
the axis. A comparison table compares **plans**, so it has to name what the cheaper one lacks, and
under D-Free the free one lacks nothing a person can see. These three are **one plan with three
ways to pay**, so no column is the lesser one and nothing has to be invented to fill a cell.

**One rule, two hosts.** The card is not copied into an `lp-` twin: `_wf.css` now carries
`.app .plan-opt, .landing .plan-opt` as a single rule, because a second copy of a component is
exactly the drift that file exists to prevent, and Tokens and Components reads these screens to
derive the kit.

## 2026-08-10 - The auth model: no account on the manual path, an email on the bank path

The last structural hole in the map. `sitemap.md` carried "auth model for try-with-no-account
vs returning sign in" in its open items, GC1 had a `no-account-yet` variant marked `[?]`,
Welcome had a "Sign in" link and Settings had "sign out", and no screen anywhere created an
account. It stopped being deferrable the day the bank connection was written down, because an
`access_token` belongs to somebody.

**Decided, and the two doors get two different answers.**

**The manual path runs with no account at all.** A person picks node 1.4, types three
subscriptions, sees a real list, and has given us nothing but the three lines they typed. That
is the whole of Ravi's path and it costs him no identity. GC1 runs in its `no-account-yet`
variant and the You tab offers "Create an account to keep your list" (new state 6.16.1), which
is the sentence `navigation.md` already wrote before anyone decided what was behind it.

**The bank path asks for an email on node 1.3, in the same breath as the bank ask, and says
why.** Not as a growth gate: as the same trust argument the rest of that screen already makes.
Bank data needs somewhere that is yours, that you can sign back into and that you can order
deleted. The account is created there, passwordless and unverified, and **Link opens
immediately**: no verification wall inside the activation flow. The verification email doubles
as the returning sign-in link, so one mechanism does both jobs and there is never a password.

**Returning people get node 1.6 Sign In**, one field and a link by email, reached from the
"Sign in" that already exists in the Welcome header and from an expired session. **A manual
list made with no account merges into the account** the moment one is created.

**Rejected: an account before everything.** It is the simplest thing to build and the worst
thing to do to Emma, who is a self-described avoider being asked for a form before she has been
shown a single reason to care. H0 is the only assumption the MVP exists to test, and a wall in
front of the reveal makes the test measure the wall.

**Rejected: staying anonymous through the bank connection too.** It converts best and it is the
one we cannot defend: a live Plaid Item tied to a cookie is a bank connection nobody can
reclaim when the cookie is lost, and one we cannot honour a deletion request against. Node 6.15
promises deletion in plain words, and an orphaned Item makes that promise unkeepable.

**No password, ever.** Node 6.16 holds an email and a currency and nothing else, and a password
is one more thing to protect, to lose and to explain.

## 2026-08-10 - A free trial has no bank signal, so the trial date is a manual field

`home.html`, `index.html` and `alerts.html` all show "Peloton App, trial ends in 17 days,
Aug 18", and Settings sells "a free trial is ending soon" as part of Pro. **A trial that has
not charged produces no transaction.** No charge, no stream, no predicted date. Plaid cannot
know that date and neither can any other aggregator.

**Decided: the trial end date is something the person tells us,** through the "Next payment
date" field node 1.4 already has, and **Peloton App is named as one of the three manual
entries** in the canonical set. That makes every screen currently showing that row honest at no
cost, because no page ever claimed Peloton came from Chase.

**What the bank side can honestly do instead** is the opposite end of the same event: a brand
new stream whose first full charge has just landed is "you are now paying for this", and that
is detectable, useful, and arguably the more valuable alert of the two. The pre-trial warning
stays scoped to what the person entered.

**Rejected: inferring trials from $0.00 or $1.00 card authorisations.** They are inconsistent
across issuers and frequently never reach the transactions feed at all, and a warning that
fires for some people and not others is worse than one that is honestly scoped.

## 2026-08-10 - A manual entry and a detected stream are one subscription, not two

Falls straight out of the two decisions above. Peloton is typed by hand today; the day the
trial converts, Chase reports a real charge and the detector opens a stream for it. Nothing in
the map said what happens then, and the default behaviour of a system with two sources is to
show fourteen subscriptions as fifteen.

**Decided: they merge.** A new stream that matches a manual row on merchant, amount within
tolerance and cycle becomes the same subscription. The bank becomes the source of truth for the
figures, and what the person contributed survives: the name they gave it, the category they
picked, the date they entered. They are told once, quietly, on the row itself.

The ground is that the count is the product. "You're paying for 14 subscriptions" is the
biggest sentence on Home and the thing the whole reveal builds to, and a product that
double-counts the moment its two sources agree has broken the only number it sells.

## 2026-08-10 - Tendd gets a cancel door of its own

Settings block 3 sends "manage plan" into node 5.13, and node 5.13 is the screen that sells
Pro. It has three states, none of them for a person who already has it, so a subscriber tapping
"manage plan" arrives at an advertisement for what they already bought. There is no path
anywhere in the map to cancel Pro.

**Decided: node 5.13 gains state 5.13.3, the plan you are on.** What is included, when it
renews and for how much, and a plain "Cancel Pro" that does not argue, does not offer a
discount and does not ask why. It runs to the end of the paid period.

The ground is that this product's entire promise is that cancelling should be easy, and the one
subscription we control cannot be the hard one. California's auto-renewal law expects
cancellation to be no harder than signing up, so the law and the thesis agree here. **Not
reused: node 4.10, the cancel-win moment.** Celebrating that someone left us would be a joke at
their expense.

## 2026-08-10 - Two classes of telemetry, and only one of them is a toggle

Node 6.15 block 4 offers "use my activity to improve Tendd, off by default". Read literally it
switches off all measurement, and `cjm-to-be.md` says H0 is measured as the share of people who
see three or more subscriptions in their first session, target 35 to 40 percent. The one number
the MVP exists to produce would be collected from a minority.

**Decided: name the two classes separately, in plain words, on the screen.** Product
measurement is a count of anonymous events, no profile, never tied to a bank, an amount or a
merchant, and it is what tells us whether the reveal works at all. It is stated rather than
toggled, because a product that cannot tell whether it helped anybody has no way to get better
and no honest reason to exist. Everything past that (person-level behaviour, session replay,
anything that builds a picture of an individual) stays behind the toggle, off by default, where
it already is.

Stating it is the point. The failure mode this avoids is not "we measured", it is "we measured
and the screen implied we did not". US-first posture; whether the counting itself needs a
consent banner is part of the EU review that D5 defers, and `system.md` already carries that
`[?]`.

## 2026-08-10 - Alerts arrive by email, and push is deferred

Node 3.8 described its entry as "through GC2 or a push notification", Settings block 4 names a
weekly email digest, and nothing said how an alert itself reaches a person who is not in the
app. J4 is "never be surprised by a price change or a failed payment", and a message that only
exists inside the app cannot keep that promise.

**Decided: email carries both the alerts and the digest at MVP, and web push is deferred.** The
ground is a constraint, not a preference: Tendd is a mobile-first responsive web app and a
native app is out of scope, and on iOS web push only works for a site the person has added to
their home screen. Push would therefore reach a minority of exactly the audience this product
is for, while looking on paper like it reached everyone. Inside the app the quiet dot on Alerts
is unchanged.

**Deferred rather than rejected:** push becomes worth building the day an installed experience
or a native app is in scope, and it changes no screen when it arrives, only the channel row.

## 2026-08-10 - Three hand-maintained datasets, named so they can be costed

Not a design decision, a liability written down. Three things in this product are content, not
code, and none of them was visible anywhere in the design: the merchant dictionary that turns
`NETFLIX.COM 866-579-7172` into Netflix and puts it in Streaming, the 400+ presets with typical
prices behind node 1.4, and the cancel guides behind node 4.9.

All three rot. The guides rot fastest and most visibly, which is why node 4.9 block 10 already
shows when the steps were last checked, and why its coverage at launch is still an open `[?]`.
The dictionary rots quietly and shows up as an unmatched charge, which node 2.7.1 already
handles gracefully. Recorded together in `bank-connection.md` section 13 with what each one
feeds and what breaks when it is stale, so the operating cost of the product is on paper before
it is a surprise.

## 2026-08-10 - The recurring model is ours, Plaid Recurring is the US adapter

The question was where subscription detection lives. Plaid's Recurring Transactions product
returns ready-made streams, and the temptation was to render them onto the screen directly.

Resolved: streams are normalized into our own subscription rows, and the two loudest states in
the product are computed by us. The ground is that half the screens have no field behind them
in any bank API. Nothing reports "Netflix went up by $2.50" (we compare the last amount against
the stream's prior amounts) and nothing at all reports a failed outgoing card charge (we infer
it from an expected charge that did not arrive). Categories are ours too: Streaming, Software,
Music, Fitness and News are not Plaid's taxonomy. Once those three are ours, owning the row is
cheaper than owning a translation layer over someone else's row.

Rejected: reading Plaid Recurring straight onto the screen. It is US and Canada only, it prices
per connected Item, and it still leaves the price-change and payment-failed states without a
source, so it buys less than it looks like it buys. Rejected: our own detection engine over raw
transactions from day one. Periodicity detection is a product of its own with its own accuracy
problem, and it delays an MVP whose entire purpose is to test H0. The hybrid takes Plaid's
detection where it is free and keeps the seam where EU will need one: GoCardless and TrueLayer
return raw transactions with no recurring product, so the EU adapter plugs into our rows rather
than forcing a second product.

Consequence for D-Free: Plaid bills per Item and Recurring is a paid add-on, against a promise
of unlimited connections. The lever is refresh cadence, never a cap, because a cap on
connections is a visibility cap and D-Free already rejected it on that ground.

Full field map, webhooks and build blockers: `bank-connection.md`.

## 2026-08-10 - Link opens directly, and Tendd shows no institution search

Node 1.3 carried an open `[?]`: whether a bank search appears on our side, or whether the
primary action opens Plaid Link directly. Resolved: directly. Link owns institution search, and
a search on our side means maintaining an institution list, keeping it in step with Plaid's
coverage, and building a screen that Link already builds better. It is the same boundary rule
that kept credential entry and MFA off our side, applied one screen earlier. Node 6.14 already
names "a bank search and picker" among the things deliberately not added, so this makes the two
nodes agree.

## 2026-08-10 - Why Home is the etalon and Flow A is the first flow, written down late

Both were chosen at the first build in July 2026 and both held through the August rebuild, but
the ground was never recorded, so the next stage would have had to take them on trust or
re-derive them. Recorded now, unchanged.

**Home / Subscription List (node 2.6) is the etalon** because it is the working horse with the
most reuse, and that is countable rather than felt: five of the seven global elements stand on
it at once (GC1 the header, GC2 the tab bar, GC3 the summary strip, GC4 the row, GC6 the trust
line). The two that are missing are missing on purpose: GC5 belongs to Alerts, and GC7 is
barred from the calm view by D3. It is also where every flow ends, it has four states, and it
carries the benchmark dimension on three named elements (`wireframes/docs/screens.md`, the
paragraph under the etalon line). An etalon is a screen later screens are measured against, so
the one that already contains most of the product is worth more than the one a person sees
first. **Rejected:** node 1.1 Welcome, which is chronologically first and structurally poor. It
is a marketing landing, it shares almost nothing with the app shell, and building it first
would have set the bar on a page that no other screen inherits from.

**Flow A (Emma, the bank path) is the first flow** because it is J-MAIN end to end, and because
H0, the riskiest assumption of the whole product, runs down it: that an avoider actually looks
and feels calmer. The flow that carries the assumption the MVP exists to test is the flow that
has to exist first. **Rejected:** Flow B (Ravi, the manual path), which is the equal second
door under D2 and reuses three of Flow A's four screens, so building it first would have
produced fewer new screens for the same work.

## 2026-08-10 - The plan chip stays, and GC1 says which badge it meant

The critique put two written absolutes against each other. The built screens carry a `Free` or
`Pro` chip in the app header on nine pages (node 5.12 with its states, node 5.12.4, node 5.13
with its states), and `ia/docs/nodes/globals.md` said GC1 never carries "a count or a badge of
any kind".

**Decided: the chip stays, and the rule is amended in its owner rather than the screens being
stripped.** Three grounds. The first is that the product already draws this distinction in two
other places and only the IA line missed it: `voice/docs/microcopy.md` owns those three lines
as `status`, and it records that a Pro badge was *retired* from Home and Subscription Detail
because node 2.6 forbids an upsell on the calm view. The distinction is not new, it is a line
that was already being applied everywhere except in the file that states it. The second is that
node 5.12.4 exists only because the canonical person is on Free, and a gate screen that cannot
say which side of the gate you are on has lost its subject. The third is what "never a badge"
was written against: a count that climbs, a notification dot, a number that pulls you back. The
plan word counts nothing and never changes on its own.

**Rejected:** removing the chip from the nine pages. It would have cost node 5.12.4 its
meaning and pushed the plan into body copy on a screen whose body is a chart.

The amended line names the exception, its nine pages, and where it stays forbidden (nodes 2.6
and 2.7). `ia/globals.html`, which renders that file, was rebuilt in the same step.

## 2026-08-10 - Chase is 11 on both connection states, and the reason is now in the convention

`connections.html` said Chase had 11 subscriptions and `connections-reconnect.html` said 8: one
source telling the same story twice with two numbers. The rebuild had already fixed both
screens to 11; `wireframes/docs/conventions.md` was still describing it as an open break.

**Decided: 11 on both, and the ground is written into the convention rather than the number
being copied a second time.** A stale connection does not reduce the count. It stops the
figures being refreshed, and the IA already says the last ones stay visible and dated, which is
the calm reading: what you see is what was true at the last check, not a product that shrank. A
reconnect screen showing a *lower* count would say the opposite, that something was lost while
the connection slept, on the one screen whose whole job is to say nothing was.

## 2026-08-05 - Subscription Detail has no master pane either, and the reveal ends with one door

Two decisions from the same step, both left open when Home was rebuilt.

**The master pane on node 2.7 is gone.** The July screen kept the whole list in a left-hand
pane beside the detail on a wide screen. It was rejected on three grounds. The first is that it
no longer has an origin: Home has no pane, so a person tapping a row would arrive at a two-pane
view they had never seen, and the same row would look like two different things depending on
where it was tapped from. The second is that it was a second copy of the canonical fourteen
subscriptions, which is a thing to keep in agreement forever on the screens whose whole job is
to be trusted about numbers. The third is that it spent the left half of the screen on
navigation the header already provides in one control.

**Chosen instead.** The width goes into the subscription itself: on a wide screen the detail
becomes two columns, the identity and the facts on the left (hero, status, the facts, the
decoder line), the evidence and the actions on the right (the charges, cancel, correct, remove,
the trust line). The order down the page on a narrow screen is unchanged, and the two columns
are the two halves of that same order, so "what is this" still comes before "what now".

**The reveal offers one action, and the save-focus nudge left it.** Node 1.5 says one action at
the emotional peak, and the July screen had two buttons plus a line naming two subscriptions
the person might not be using. That is a menu, and it duplicates node 2.6.4, which is one tap
away in the tab bar the moment the reveal ends. The reveal now ends with "See your
subscriptions" and nothing else.

**Not decided here.** Whether Cancel Guide, Share Snapshot and Upgrade become modals on a wide
screen. That stays deferred to Design.

---

## 2026-08-05 - Home is a dashboard on desktop, and has no second pane

The IA allowed the wide layout of Home to open a subscription in a right-hand pane instead of
routing to node 2.7. It was built at the etalon and removed the same day.

**Rejected, and on what ground.** One action would have had two destinations depending on the
width of the window: tapping a row would route on a laptop and fill a pane on a monitor. That
is a rule a person cannot be taught and has to discover, on the one screen whose whole promise
is that nothing surprises you. The pane also duplicated node 2.7, so one object would have had
two renderings to keep in agreement forever, and the first thing that drifts in that
arrangement is the thing the screen exists to be trusted about. Finally it spent a third of the
width on one subscription while the job of the screen is all of them.

**Chosen instead.** The same width goes into the list: the total and the attention row sit side
by side across the top, and the category groups run in balanced columns, two-up and then
three-up. On a 1440 screen all fourteen subscriptions are visible without scrolling, which is
J-MAIN ("all my recurring charges in one calm view") read literally rather than approximated.
The total stays the biggest thing at every width, and a row opens node 2.7 at every width.

**Not decided here.** Subscription Detail keeps a list as its master pane. It is a different
thing, showing where you are in the list you came from rather than previewing where you might
go, and it is re-decided on its own screen when that screen is rebuilt.

---

## 2026-08-05 - The scaffolding comes down: nine cluster pages retired

The detail layer of the IA was nine cluster pages, each holding several screens plus its own
copy of the global elements and its own accessibility section. It is now one page per node
(16 screens), one page for the seven global elements, and one accessibility contract. Seven
cluster renders and the pre-upgrade `ia/ia.html` were deleted; `system.html` and `seo.html`
stayed, because they still own nodes 9.1 to 9.5 and node 8. The temporary registry row "IA
(pre-upgrade)" was removed with them, which closes the note recorded on 2026-07-12 below.

Why the markdown stayed while the html went: the md files are the base-layer record they were
written as, and every node page names the section of them it supersedes. The html renders were
duplicates with no owner left, and a duplicate with no owner is the thing that drifts.

Rejected: deleting the markdown too. It carries the reasoning behind decisions that the node
pages state as conclusions, and git history is not a visible place.

What the consolidation surfaced, which is the argument for having done it: GC7 was carrying
two opposite rules for the same lock (a real preview frame in pro.md, a blurred item in
alerts.md) because they lived in two files; the accessibility rule for modals was written
three different ways across three files; one dialog was cited by a node number that belonged
to a different state; and five states named in a spec had no number at all. None of these are
visible while the material is spread across nine files.

## 2026-08-04 - Two answers the block bank asked for: the share block and the export

Building the block bank (`ia/docs/blocks.md`) surfaced one contradiction and one gap that
could not be resolved inside the bank, so both were carried to the founder and both were
answered the same day.

**D-Share. The share block on the Cancel Win screen is LATER, because its destination is.**
`voice/docs/microcopy.md` gave node 4.10 Cancel Win a "Share this win" button and a privacy
line, and `ia/docs/sitemap.md` scopes node 4.11 Share Snapshot as LATER. An MVP screen was
pointing at a screen that is not in the MVP. Resolved conservatively: the share block moves
to LATER with its destination, and the MVP win screen ends on "back to your subscriptions".
Rejected: pulling 4.11 into the MVP to justify the button. The share is a social job (S1),
not a core one, and the MVP exists to test H0, which the win moment already carries without
it. The lines stay in the microcopy inventory, tagged LATER: they are authored copy waiting
for their screen, not copy to be written twice.

**D-Export. A plain export of your own data is free; the analytical export is Pro.** The
product brief lists "export" under Pro, which read as if every export were paid. That would
put a paywall in front of a data right, which contradicts D3 (the paywall sits at depth,
never at basic visibility) and the privacy promise the product sells on its front door.
Split: the plain, complete export of what we hold about you is free and lives on node 6.15
Data and Privacy; the analytical export of history and trends is Pro and lives with node 5.12.
The product brief in `CLAUDE.md` is corrected in the same step.

Both decisions land in `ia/docs/blocks.md` (the two flagged rows become decided rows), in
`ia/docs/pages/cancel.md` and its page, and in `voice/docs/microcopy.md` and its page. The
grey screen `wireframes/cancel-win.html` still shows the share block as a primary action; it
is listed for the wireframe rebuild rather than hand-edited now, because that stage rebuilds
the screen from its specification.

## 2026-08-04 - The repository moves to the current course structure

The course pipeline (`AI Design Workflow/`) changed after this project was built: a single
root navigation registry, `research/` holding stages 01, 02 and 02+, a `design/` roof over
the whole visual half, `index.html` reserved for the product home page, an entry for an
external critic, and a decision log separate from the rules file. This project was built
against the older shape, so the founder asked for a full alignment rather than a partial one:
a partial move would leave two conventions living side by side in the same sidebar.

What moved: `user-research/` into `research/`; `master-research.md` to `research.md`,
`competitive-analysis.md` to `competitors.md`, `benchmark-trust.md` to `benchmark.md`;
`concept/` to `design/concept/`; `ui-visual/` to `design/` with `all-screens.html` becoming
`design/overview.html`; `wireframes/index.html` (a hub) to `overview.html` and
`wireframes/welcome.html` (the landing, node 1.1) to `index.html`. The empty stage folders
(`animation/`, `design-system/`, `responsive/`, `tokens-components/`, `handoff/`) and every
`.gitkeep` were removed: a folder now appears together with its first file, on its own stage,
and the route of the project is shown by the registry and the README, not by empty folders.

Navigation: the roadmap used to be written by hand inside every page, in three drifting
editions, so a status change meant editing 23 files. It now renders from `/_nav.js` with
`/_nav.css` for the look. Pages outside the registry (the nine IA cluster pages, the two
voice satellites) declare the nearest registry page instead of getting their own row. The
color screen map was renamed off the `nav-*` contract (`scr-*`) so it can never collide with
the root panel on a page that loads both.

Rejected: keeping the old folder names to preserve the published GitHub Pages URLs. The URLs
break on this move, and that was accepted knowingly: the addresses are shared by hand, and
the cost of two conventions is permanent while the cost of new links is one message.

**This reverses the decision of 2026-07-15 below.** `ui-visual/docs/design.md` was deleted
with it. The chain is now `DESIGN-artifacts.md` (draft, root) to a root `DESIGN.md` produced
at UI + Visual from the code, which is what the course pack does. Holding both would give the
product system two sources of truth.

Temporary, and it disappears when the IA is rebuilt: the registry carries a row "IA
(pre-upgrade)" pointing at `ia/ia.html`, because the four pages of the new two-layer IA
(flows, concept map, sitemap, structure) do not exist yet and the current IA is real work
that must stay reachable.

## 2026-07-20 - Concept retrofit: a draft design doc and one brand plate

The Concept pack gained two outputs after this project's Concept phase had closed: a root
`DESIGN-artifacts.md` (the draft design doc entered from the approved brand) and dense brand
toolkit plates. Both were added afterwards. Only ONE plate was generated
(`design/concept/assets/brand-plate-petrol-paper.png`, Google Nano Banana 2, 4k, stored at
2400px) instead of the three the pack asks for, because the brand had already been chosen
from the live html directions: the plate documents the choice rather than making it.
Generating three divergent plates after the fact would have been theatre.

## 2026-07-15 - The product design system lives outside the root (superseded)

Decided that the product design system would be generated into `ui-visual/docs/design.md`
and that a root `DESIGN.md` would never exist, on the ground that a root file would describe
the research and IA pages rather than the product. **Superseded on 2026-08-04**: the course
produces the root `DESIGN.md` from the code at UI + Visual, with `DESIGN-artifacts.md` as
the first source, and the seed file was deleted.

## 2026-07-14 - Desktop app screens become a full-page dashboard

Founder feedback on the wireframes: the landing read as a real full-width desktop page, but
every app screen still read as a phone card framed in a grey field, with the tab bar sitting
at the bottom of a tall scrolling card instead of behaving like app chrome. Decision: on
desktop the app screens become a real full-page dashboard at wireframe fidelity. App pages
are marked `.dash`, the stage goes edge to edge, the header folds into a persistent
full-height left sidebar with the tab bar as its vertical nav, and the content area owns the
width and scrolls independently. The two-pane detail (Home, Subscription Detail) spans full
height beside the list. On mobile the tab bar becomes fixed viewport chrome. Applied to all
29 app pages; onboarding and the landing were excluded. The older framed-phone desktop rules
were fenced with `:not(.dash)` rather than deleted, so nothing else moved.

## 2026-07 - Welcome is the public landing, and the only page with a footer

Welcome / Value Intro was rebuilt from a narrow onboarding step into a full-width marketing
landing wireframe (top nav, two column hero with a calm app preview, benefit cards, how it
works, trust and security, social proof, final CTA, footer). It stays greyscale, semantic and
real copy; its CTAs lead into the onboarding chain at Path Choice. It is the only full-width
page and the only one with a footer, which is why it is the product home page (node 1.1).

## 2026-07 - The desktop model: header in the rail, list and detail in two panes

Locked against the IA of 2026-07-04: on desktop the tab bar becomes a left rail and the
header folds into the top of that rail; single column app screens sit in a centered measure;
Home and Subscription Detail become a real master-detail at stage width 1040 and above.
Partly superseded by the dashboard shell decision above, which took the same idea to the full
page.

## 2026-07 - The voice is applied to text only, and rolled out by subagents

Voice rewrote text on all 41 wireframe pages and touched no markup, no states and no
structure. Home set the sample, the rest were rolled out one screen per subagent against
`voice/docs/voice.md`, and an adversarial four reviewer pass caught the last misses (a non
canonical loader, three exposure framings of "spend"). Every changed line is recorded in
`voice/docs/microcopy.md` as was and became, so no product line ships outside the table.

## 2026-07 - Free is uncapped, Pro is depth only

D3 locked the paywall at depth but was silent on how many subscriptions and how many bank
connections Free may hold. Resolved: no cap on either. A cap on connections is a visibility
cap in disguise, and it would break the gradual reveal that the whole product is built on.
Propagated across the repository the same day.

## 2026-07 - The CJM is a lite pass on one persona and one job

The CJM was drawn for Emma (the anxious non-looker) crossed with J-MAIN only, not for all six
persona and job pairs, and the mining depth was Lite. As-Is follows the research rule (every
emotion carries a source or a `[?]`), To-Be follows the design rule (every step traces to an
As-Is barrier or a job). The To-Be turned out to be fully covered by the already locked
structure, so it validates the built product rather than surfacing a gap; the relief endpoint
stays a `[?]`, which is H0, provable only in a prototype.

## 2026-06-14 - Founder decisions D1 to D5

Gradual reveal with a paired action (D1); manual entry plus presets as an equal second path
at launch (D2); the paywall at depth, never at basic visibility and never at the cancel
moment (D3); Pro at 7.99 a month or 69 a year, above the original 4 to 6 hypothesis because
the competitor data supported it (D4); US and Plaid first, EU deferred (D5). Ground and the
rejected alternatives: `research/docs/strategy.md` section 6.
