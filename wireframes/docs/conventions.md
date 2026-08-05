# Wireframe conventions (Tendd)

The contract every screen and every subagent follows. Read it before building or reviewing a
screen. It is shown on `overview.html` under "Conventions", because a rule that lives only in a
markdown file is a rule only the model reads.

**A wireframe is structure, not look.** It answers what is on the screen, in what order, and
what the one main action is. It says nothing about colour, type or brand: those are stages 06
to 08, and they work on copies in `design/`, never on these files.

**Rewritten 2026-08-05.** Three rules changed and one is new. The old file asked for a zone
label on every block, which is the schema form of the previous stage and is exactly what this
stage removes. It listed four states, and the real set is the state nodes of the map. It
pointed at `ia/docs/pages/`, which was retired into the node files. And it had nothing at all
about where inline CSS is allowed to live, which is the rule this stage breaks quietly without.

---

## 0. What this inherits, and from where

Nothing below is invented here. Each line names its owner, and a gap is fixed in the owner
first and rendered second.

| What | Owner | Note |
|---|---|---|
| Screens, node numbers, scope | `ia/docs/sitemap.md` | The map owns numbering. A page renders a node |
| Which blocks a screen has, in what order | `ia/docs/nodes/<node>.md` | Composition traces to `ia/docs/blocks.md`, the block bank |
| The seven global elements | `ia/docs/nodes/globals.md` | GC1 to GC7, with what each must never do |
| States and their exits | the "States" section of each node file, cross-checked against `ia/docs/flows.md` | |
| Every interface string | `voice/docs/microcopy.md` | The node says what information the place needs; Voice owns the wording |
| Accessible names, focus, live regions | `ia/docs/accessibility.md` | Six rules everywhere, plus what each node adds |
| Grey tokens | `wireframes/_wf.css` | Inherited from the IA pages' greyscale, not a new palette |

**A-E SEO copy exists for node 1.1 only.** It is the one public, indexed screen; every other
node is `noindex` and carries no A-E block, by design. So the text of every app screen comes
from `voice/docs/microcopy.md`, which is the line inventory and the actual owner. This is a
deliberate difference from the generic pack instruction "take the text from the A-E block".

---

## 1. Fidelity: a live screen, not a schema

This is the rule the previous build broke, so it is first.

- **Every page is a real screen at full viewport**, mobile-first, that scrolls and clicks. Not
  an anatomy diagram, not a specification with captions.
- **No zone labels.** A block does not carry a caption explaining what it is. If a zone needs a
  label to be understood, the zone is wrong, and that is a finding for the IA, not a sticker.
- **No "main action" captions.** The main action is a real button or link that goes somewhere.
  Writing "Main action: cancel one you do not use" underneath is the schema form of the same
  thing, and it lets a screen pass review without actually having the action.
- **No mockup frame.** A screen is not a 420 by 720 card floating in a grey stage. It fills the
  viewport and reflows, the way the product will.
- **One screen per page, one viewport.** Never a desktop frame and a mobile frame side by side,
  and never the IA's section 01 / section 02 split. Mobile is checked by narrowing the browser.
- **A loading state is a real screen with grey placeholders in the shape of the content**, not a
  skeleton standing in for a screen we did not build.

## 2. Grey, structure only

- Greyscale only, from the tokens in `_wf.css`. No colour, no brand, no accent.
- No type decisions: no font family, no scale beyond the browser's heading hierarchy.
- No shadows, no gradients, no decorative radii, no icons, no images, no logos. Where an asset
  will sit later, a labelled grey box: `[logo]`, `[merchant logo]`, `[chart]`.
- Allowed placeholders stand for a deferred **asset**, never for missing **text**. There is no
  lorem ipsum and no "Heading 1" anywhere: the copy exists, in `microcopy.md`.

## 3. Inline CSS is transport, not the home of look

New rule, and the one this stage breaks silently without it. At fan-out, parallel agents cannot
all write into `_wf.css`, so each agent puts its screen's CSS inline. **That is temporary by
construction.** Two criteria decide where every rule ends up:

1. **A token value never lives inline.** Not even on one screen. Greys, spacing, radii and sizes
   are variables in `_wf.css`, and a screen writes `var(--...)`. A literal inline is the start
   of drift. If the needed variable does not exist, an agent does not add one (the file is
   shared): it writes the literal and reports the line "variable, value, why, which screen
   needs it", and the parent decides.
2. **A rule that appears on two or more screens moves into `_wf.css`.** The same "two or more
   occurrences" test that stage 07 uses to decide what is a component. Only a genuinely
   one-off rule stays inline, and even that is written through `var()`.

Every inline block sits in one `<style>` in the head, opened with the marker
`/* INLINE: <screen> :: for consolidation into _wf.css */`, so the parent can find them
mechanically instead of reading twenty files.

**Everything shared lives in `_wf.css` and nothing shipped inline.** By the end of the stage the
file holds four blocks under `.app`: the live screen shell (node 2.6 and node 2.7's family), the
onboarding chain `.app.flow`, the detail `.app.detail`, and the forms, feed, steps, cards and
rows the rest of the set shares. Every one of them was a multi-screen rule on arrival, so the
inline stage never happened; the rule below is what would have applied if any of them had been a
one-screen rule.

**The etalon consolidated early, at Step 5, and that is the rule and not an exception.** The
moment node 2.6 had its four state pages, the shell was a five-screen rule by the test above, and
leaving it inline would have meant five copies of it until Step 8. It sits in `_wf.css` under the
heading "The live screen shell", **scoped under `.app`**, which makes it strictly additive: the
pages still on the July `.phone` frame are untouched, and the `.phone` block dies when the last
one leaves it. Any screen rebuilt from here writes `.app` and inherits the shell; what it adds
for itself goes inline until it too is shared.

**Why this is not pedantry.** Stage 07 derives the component classes of the kit from these
screens. If the structure of twenty screens lives in twenty inline blocks, the extract honestly
returns the differences: three card variants, two grids, four spacings where there should have
been one. The defect becomes visible three stages after it is created.

## 4. Markup: semantic HTML

- Real elements, not a wall of `div`: `header`, `nav`, `main`, `section`, `article`, `form`,
  `label`, `input`, `button`, `a`, `ul`, `ol`, `li`, `h1` to `h4`, `p`.
- Interactive things are real: a button is a `button`, a link is an `a href`, a field is an
  `input` with a `label`. Never a styled span.
- Exactly one `h1` per page. Repeated objects are `li` or `article`.
- The accessible names from `ia/docs/accessibility.md` are written now, not later: one name per
  subscription row carrying the whole row, `role="status"` on the alert banner, the live region
  on the states that announce something. They cost nothing here and are expensive to retrofit.

## 5. Real content, and one canonical set of numbers

The screens are judged on real length and meaning, so the data is one story told consistently.
**Named once, here, and every screen uses it:**

- The person: **Emma**. **14 subscriptions, $192.90 a month.**
- Sources: **Chase, 11 subscriptions**, and **added by you, 3**. Eleven plus three is fourteen,
  and that has to hold on every screen that shows either number.
- Groups: Streaming 4, Software 4, Music, Fitness and News 6.
- The alert case: **Netflix went up by $2.50, now $17.99**, which is also the subscription the
  cancel chain runs on (detail, guide, win). A price rise is what triggers the cut.
- The decode case: `SPOTIFYAB STOCKHOLM` decoded to **Spotify Premium**, which is also why
  Spotify Premium is the subscription the base detail page renders: the screen exists for the
  decoder line, so its default should be the case that shows one.
- The failed payment: **Amazon Prime**, on **Jul 20**, at $14.99. Corrected here on 2026-08-05:
  this file said Peloton, and the screen that actually renders the event (`alerts.html`) and the
  line inventory both say Amazon Prime. `alerts.html` still dates it Jul 2, which its own
  billing cycle contradicts; that is a carried fix for the round that rebuilds Alerts.
- The three detail cases, one page each: **Spotify Premium** at rest, **Netflix** for the price
  change (the alert case above), **Amazon Prime** for the failed payment. Statement strings:
  `SPOTIFYAB STOCKHOLM`, `NETFLIX.COM 866-579-7172`, `AMZN Digital*2H4KL9`, and the unmatched
  `SQ *BLUEBOTTLE 8890` at $14.00. Paid so far, twelve months back to Aug 2025: $143.88,
  $185.88, and $164.89, which is eleven payments and the one that did not go through.
- The payment source is named as **Chase checking**, never with card digits.
- The save-focus candidates: **Peloton App $12.99** and **The New York Times $17.00**, which is
  why save focus offers "up to $29.99 a month".
- The win: **$17.99 a month, $215.88 a year**, with a running total of $32.98 a month.

**Known break, to fix during the rebuild:** `connections.html` shows Chase with 11
subscriptions and `connections-reconnect.html` shows Chase with 8. Same source, same story, two
numbers. A stale connection does not reduce the count, and the IA says the last figures stay
visible and dated.

- **Today is 1 August**, fixed. Every screen that says "in 6 days" counts from it, and the
  canonical dates were already written against it: node 2.6 gives "in 6 days" as its example
  and Spotify Premium renews on 7 August. Without one fixed today, two screens showing the same
  subscription disagree about when it charges.
- Group subtotals, derived from the list and not authored: Streaming $54.96, Software $53.98,
  Music $22.98, Fitness $24.98, News $36.00. They add up to $192.90.

Domain formats: money in US dollars (D5), `$17.99 / month`; the next charge as days first and
the date second (`in 2 days, Aug 3`, and `tomorrow` at one day); status as a quiet word, and
shown only when it is not the plain default, because a column of fourteen "Active" tags is
noise on a screen whose job is calm. Plain money language, calm and non-judgmental, with
the read-only line wherever a trust moment appears. All of it is already written in
`microcopy.md`.

## 6. File naming

- Lowercase Latin, hyphenated, all in `wireframes/`.
- `wireframes/<screen>.html` is the base page and is the success state.
- `wireframes/<screen>-<state>.html` is one page per state, **named after the state itself**,
  not after the nearest system word. `subscription-detail-unrecognized`, never
  `subscription-detail-empty`, because node 2.7 has no empty state at all. The names are fixed
  in `docs/screens.md`; a name not in that table does not get created.
- `index.html` is the product home page, the public Welcome landing, node 1.1. The hub with
  every screen and state is `overview.html`. The two are never swapped.
- Shared shell files keep their underscore at the root: `_nav.js`, `_wf.css`. Docs sit in
  `docs/` without one.

## 7. States: one page each, never a toggle

- Every state is its own page. Same structure as the base, different content in the zone that
  changed. No JavaScript toggle inside one file: the prototype has to navigate between states.
- **The four system states are the floor, not the set.** The real set is the state nodes in
  `docs/screens.md`, which come from the node files. Domain and transit states (a price change,
  a retention wall, a dialog) are first class and get their own page.
- **No dead ends.** Every state has a visible exit that exists in `ia/docs/flows.md` and points
  at a page that is really in `wireframes/`.
- **An edge a person takes is a control; an edge the system takes is not.** Added 2026-08-05,
  when the flow was wired end to end. A person tapping "Try again" is a real `a href`. A sync
  finishing or a load resolving is not: putting a button on a wait screen would give the screen
  an action the product does not have, which is the same defect as a caption naming an action
  that is not there (section 1). System edges are walked in the side panel, which is why every
  state of every screen is a row in it. `connect-bank-loading` is the one page in the set with
  no link at all, and that is correct: the onboarding chain has no tab bar and a sync has
  nothing for a person to do.
  The check that makes this falsifiable: **every MVP base screen is reachable from the front
  door by clicking, and the pages that are not are state pages**, each produced by a condition
  rather than by a tap. One base screen is deliberately unreachable: node 4.11 Share Snapshot
  is LATER under D-Share, and it lost its entry when the share block came off `cancel-win`. An
  MVP screen cannot lead to a screen that is not in MVP, and that is the decision showing up in
  the link graph rather than a broken route.
- **The four dead ends of `flows.md` are drawn on purpose and each one is closed by a named
  control on a named page.** The list is on `overview.html` under Flows. A wireframe stage that
  leaves one of them open has not finished, whatever else it drew.
- A state that is not in the table is not drawn. If a screen turns out to need one, say so and
  fix the table, and if the gap is deeper, fix the node file first.

## 8. Navigation: two of them, and they do not mix

- **`overview.html` carries the roadmap sidebar** from the root `/_nav.js`: the bridge back into
  the project. Its own sections are Flows, Coverage map, State matrix, Conventions and Work
  order. The work order is the delta against the pages that exist; when the critique closes it
  is replaced by "was to became", which is the same list with outcomes against it.
- **The overview does not keep its own copy of the screen list.** The flows name node numbers,
  and every name, file, scope and state is resolved from `wireframes/_nav.js`, the same registry
  the screen panel renders. The counts on the page are computed from it too, so "41 of 49" can
  never be a number someone forgot to update.
- **Every screen page carries the wireframe-only side panel** from `wireframes/_nav.js`, and
  nothing else: a header with an "All screens" button and the stage badge, a **three-level tree**
  (IA cluster, then screen with its node number, then its states), an accordion that opens the
  states of the current screen only, and at the bottom, quietly, a cross-link to the IA node
  this screen renders.
- **No thin state strip above the screen.** Navigation between states lives in the side panel.
- **No roadmap on a screen page**, and no wireframe tree on `overview.html`. Each page has one
  navigation, and it is the one that belongs to it.
- The product's own chrome, GC1 and GC2, is the only navigation inside the screen. The
  onboarding chain shows no tab bar, and that absence is deliberate.
- **No footer inside the app.** Tendd is an app. The one footer in the set is on the Welcome
  landing, which is a marketing page.

## 9. Responsive: one screen that reflows

Mobile-first, authored from the narrow layout. The same page reflows to desktop through
`_wf.css`, so widening the browser really shows the wide layout. The reflow implements the IA
delta, decided once and not re-decided per screen: the tab bar becomes a left rail with the
header folded into its top; **Home becomes a dashboard** (the total and the attention row side
by side across the top, the groups in balanced columns, two-up and then three-up); onboarding
stays a single column, just wider. **Every screen is checked at 360px**: no horizontal scroll,
no clipped text, no overlap.

**Decided at the etalon, 2026-08-05: no second pane on Home.** The width goes into showing more
of the list, not into a preview of one row. An action has one destination at every width, and a
row opens node 2.7 whether the window is 360px or 1600px. The ground is in the Responsive
section of `ia/docs/nodes/2-6-home.md`.

**Decided at Step 6, the same day: no master pane on Subscription Detail either.** It was left
open above and is now closed. The pane had no origin once Home lost its own, it was a second
copy of the canonical list, and it spent half the screen on navigation the header already
provides. The width goes into the subscription instead: two columns, the identity and the facts
on the left, the evidence and the actions on the right, in the same order the narrow layout
reads down the page. The onboarding chain has no desktop delta at all, so it overrides the
dashboard grid rather than inheriting it: single column, centred, just wider.

## 10. Deferred to Design, not decided here

Colour, brand, typography, shadows, real icons and logos, imagery, motion, exact spacing values,
and the finished look. Also deferred: whether Cancel Guide, Share Snapshot and Upgrade become
modals on desktop.

## 11. Scope discipline

- Every screen traces to a node in `ia/docs/sitemap.md` and a place in `ia/docs/flows.md`.
- **Every block traces to the node file**, whose composition traces to the block bank. A block
  that seems missing is a question for the node, not an invention here.
- English in the docs, product language on the screens. **No em dash anywhere**, in any file.
