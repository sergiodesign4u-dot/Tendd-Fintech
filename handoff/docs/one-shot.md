# How to add a feature - the prompt

This is a **ready prompt**. Copy everything between the two rules below, put your feature in the
one blank it leaves, and hand it to whoever is building: a person, or a model in a fresh session.
It is written so that somebody who has never opened this repository can add a screen that the
instruments accept on the first run.

**It was written to be tested and it was tested twice**, on 2026-08-23, by two readers with no
memory of this project and on two different features. What each of them could not work out is
recorded in `onboarding-gaps.md`, and every hole either closed as a sentence in this file or went
to `design/kit/docs/backlog.md`. The paragraphs that look over-explained are the ones a reader
actually fell into.

**Why it is one prompt and not a checklist.** A checklist is read by somebody who already knows
what the items mean. The first thing a stranger needs is the ORDER: what to read, what is decided
for them, and what they are allowed to invent. That order is the whole content here.

---

## The prompt

You are adding one feature to Tendd, a design engineering repository that contains a clickable
product in colour, a design system, and the documentation of both. **Nothing here is built,
bundled or published**: every page is static html served from a plain file server.

**The feature:** `<< name it, and name its states >>`

**First, decide whether it is a SCREEN, a STATE, or an edit to a screen that already ships.**
The IA decides it and you do not. Open `ia/docs/nodes/`, find your feature, and read WHICH TABLE
it appears in, because the three tables answer three different questions:

| Where it appears in a node | What you are building |
|---|---|
| The node's **States** table | A state of that screen. Files are `<screen>-<state>.html`, you extend that screen's `states` array, and you add no registry row of your own |
| The node's **Content blocks** table, as a whole block | Nothing new. That block already ships on that screen, and what you have is either a change to a frozen file (a backlog row, and that is the entire correct output) or a screen BELOW it that the block links to |
| Nowhere at all | A new screen, with everything in section 4, including a node document and a visible place for it |

**Both readers who were handed this prompt got this wrong in opposite directions**, which is why
it is a table now and was a sentence before. The first found its feature in a States table and
built a new screen anyway. The second found its feature as one block of another screen, read a
paragraph here that said "the last reader who concluded new screen was wrong", read the
mechanical test that said "no States row means a new screen", and had to break the tie itself.
**If the three rows above still do not settle it, that is a finding and not a judgement call**:
write it down rather than choosing quietly.

### 1. Read these, in this order, before writing anything

Read them from disk. Do not work from a summary and do not work from what you already believe
about this project.

| Read | For |
|---|---|
| `handoff/handoff.html` | What this package is and is not, which theme is the main one, and what is deliberately not done. Ten minutes, and it saves the rest |
| `handoff/docs/behaviour.md` | How the product behaves: flows, states, edge cases, validation. **Every row names its source.** If your feature touches a flow, your screen behaves the way that flow says |
| `handoff/docs/map.md` | **Your working document.** Part A tells you which components already stand on a screen like yours; Part B tells you what each of them reads; Part C answers "if I change this value, what moves" |
| `handoff/docs/a11y.md` | What is already guaranteed and how to re-check it. You inherit all of it and you can lose it: the fastest way is a control the system does not define |
| `voice/docs/microcopy.md` | **Every string in the product.** Yours is probably already in there. Search before you write |
| `voice/docs/voice.md` | How to write one that is not |
| `design/system/CLAUDE.md` | Eight rules, and rules 5 and 8 are the ones you will need today |
| `design/kit/docs/architecture.md` | The usage rules, each with its source. A rule here beats your judgement about a specific screen |
| `ia/docs/nodes/` | One document per screen. If your feature has a node, it states what information the place needs |

### 2. What you are allowed to invent, and where

**Two steps, and the order is the rule.**

**Nothing is invented in the screen file.** A screen is assembled out of classes the system
already defines, and it carries no style of its own.

**What is missing appears in the SYSTEM first, complete, and only then goes on the screen.** This
is not "do not create new components". Growth is expected and the repository is built for it. It
is a statement about WHERE: a value goes to `design/system/tokens.css` at its level, a component
goes to `design/system/components/` **as five things at once** (the css, a page in `design/kit/`,
a row in `design/kit/_nav.js` in its level group, a line in `design/kit/docs/inventory.md` with
its level, and an `@import` in `index.css` in its own level group, never at the end). A
composition standing on three screens is a pattern; on two it stays markup.

A reader who takes only the first half of that rule stops for good. A reader who takes only the
second half writes css into a screen file. Both are worse than not starting.

### 3. The four bans on a screen file, copied from `design/system/CLAUDE.md` word for word

> **In a screen file `@media` is forbidden.**

And the screen file carries, in the words of the root `CLAUDE.md`:

> **no style block, no style attribute, no `@media`, no class the system does not define.**

`@container`, `transition`, `animation` and `@keyframes` are the same ban read outward: a query
belongs to a token, a component, a pattern or the shell, and motion belongs to the component,
because a verb is a statement about what an object IS and a screen file cannot know that. **The
instrument checks all of it**: `node design/kit/screens/rollout12.cjs`, check 2.

### 4. The file, and registering it

**Every STATE is its own file, with one kind of exception that a node states out loud.** A screen
with four states is four html files in `design/`, named `<screen>.html`, `<screen>-<state>.html`.
Where a node declares a state and then refuses it a number - node 6.16 says of its own wait, "the
skeleton stays unnumbered: it is chrome, not a distinct destination" - the node wins and there is
no file. Do not generalise from that to your own screen without the same sentence in your node. There is no runtime and no router: navigation is
an anchor from one file to another.

**Do not start from a blank file and do not start from a template.** Start from the nearest
existing screen of the same shape and replace its content. **Pick by SHAPE first and confirm with
the map second**, in that order: shape is whether the screen is a destination or a short task
with a beginning and an end, whether it stands inside the tab bar or replaces it, and what the
bar carries. Part A of `handoff/docs/map.md` then tells you whether the file you picked already
holds the components you need. Doing it the other way round finds a file with the right parts and
the wrong frame, and the frame is the harder of the two to unpick. What
you are copying is the scaffolding every screen shares - the head, the pre-paint theme line, the
two stylesheets, the reviewer's shell, the app bar and the tab bar - and every one of those is
current, because the instruments read those files every day.

> **`design/kit/shell.html` is registered as "the markup a coloured screen is copied from" and it
> is stale in three ways.** Do not use it until that row in `design/kit/docs/backlog.md` is
> closed. This is the one place in this repository where a registry currently lies, and it is
> named here rather than left for you to discover.

Then register the screen, or it exists only on disk:

- **a row in `design/_nav.js`**, `{ name, base, states: [...] }`, placed by node number the way
  the rows around it are;
- **`ia/docs/sitemap.md` owns the node NUMBERS**, and it is the file nobody finds on their own.
  A new node is numbered there or it is numbered nowhere. It also carries hand-typed counts of
  nodes, screens and states, which are exactly the kind section 7 tells you to recount;
- it appears on the coverage map, `design/overview.html`, which is read from that registry;
- **the reviewer's chrome comes with the file you copied** and needs nothing from you: the panel
  that names the screen, the theme switch, and the roadmap. None of it ships;
- **the IA node**, and there are two different jobs behind that phrase. If your feature is a state
  of an existing node, add its row to that node's **States** table and nothing more. If it is a
  genuinely new screen, it needs a new document in `ia/docs/nodes/` AND a visible place for that
  document, because `CLAUDE.md` says one no page shows does not exist - which is real work, and
  saying so is better than absorbing it silently. If neither applies, say out loud that the
  feature has no node.

### 5. Copy

**Search `voice/docs/microcopy.md` first.** A string that exists there is the string, verbatim.
If your feature genuinely needs a line that is not there, the line belongs in `microcopy.md`
before it belongs on the screen, and it obeys `voice/docs/voice.md`. **Do not write a product
string straight onto a page**: one owner per string is the oldest rule in this repository, and a
line that exists in two editions has already started to drift.

**When the shipped string and the voice rules disagree, the shipped string wins and the
disagreement is a backlog row.** They do disagree in at least one place today. You are not the
person who re-authors a line: a string is Voice's before it is anybody's, and quietly correcting
one on your own screen puts the same line in two editions, which is the failure the paragraph
above is about. Reuse the shipped one exactly, write your new lines to the rules, and say in the
row that the two now stand one tap apart.

**And `microcopy.md` has a published page, `voice/microcopy.html`.** `CLAUDE.md`'s live rule says
changing a document that already has a page means rebuilding the affected part of that page in
the same step. **No instrument in this repository catches the omission**, which is precisely why
it is written here: a reader who works only from this prompt adds the rows to the document and
leaves the page a version behind, and nothing ever tells them.

### 6. Done means the instruments say so

Run them. They derive their corpus from the tree, so they will find your screen without being
told about it.

```
npm install
npm run check        # the pairing, the four-part ban, the links, the registry against the code
npm run check:route  # every link resolves, and nothing is more than two clicks from the entry page
npm run check:quality
npm run check:a11y   # contrast in both themes, a real tab pass, motion under reduce, text at 200%
```

**Both themes, and this is not optional.** A colour role that exists in one theme and not the
other does not exist. `check:a11y` measures both, but it measures the RESTING colour: it runs with
reduced motion emulated on purpose, because asserting a theme starts a cross-fade across the whole
page and a sample taken inside one compares two themes at once. So the instrument proves the two
end states, and the only thing that proves the switch between them is you. Open the screen, switch
the theme, and watch what happens in between.

**Check that anything can reach it.** `node design/kit/screens/walk13.cjs` builds the click graph
and will tell you if your screen is registered, rendered, correct and reachable by nobody. If the
IA node's States table gives your state a trigger like "Export tapped", then something on another
screen is supposed to BE that tap - and if that control turns out to be a button with no
destination on a frozen screen, you have found a backlog row rather than a thing to fix.
**A screen whose only door is on a frozen file ships unreachable, with the row, and that is done
rather than half-done.** The alternative is a builder who cannot finish until a founder answers,
which is the state this prompt exists to prevent.

**Sweep the width instead of sampling two ends.** The worst width is the one where the content
has stopped fitting and the query has not fired yet, and a 28px band of sideways scroll survived
two accepted stages of this project by being between the two widths anybody checked.

### 7. Recount what a person typed, name the corpus of what a machine measured

Your screen grows the corpus, and `CLAUDE.md` says growing it means recounting every claim about
it in the same step, by script and never from memory. In practice that splits in two, and the
split is the whole of it:

- **A count somebody typed by hand** - "17 screens across 57 pages" in `README.md` - you recount,
  now, in this step.
- **A figure an instrument produced** - the census, the map, the accessibility run, the link count
  - you leave alone and **name the corpus it was taken on**, which is the escape hatch the same
  rule provides. Re-running four instruments and rewriting thirty numbers across four surfaces is
  a stage's work and not a feature's. Write one backlog row naming which figures are now about a
  corpus that has grown, and put that naming where those figures are, not only where the row is.

### 8. What you may not do

- **Do not edit anything under `wireframes/`.** It is the grey structure contract, frozen since
  Voice, and it is read-only.
- **Do not fix something you noticed on the way.** The product was accepted at stage 12 against a
  pixel comparison of the whole corpus, and an edit voids it. A defect you find becomes a row in
  `design/kit/docs/backlog.md` with its measurement. Adding that row IS the way of not touching
  the product.
- **Do not invent a behaviour.** If no file states what happens, do not choose: `behaviour.md`
  keeps a NOT DECIDED list for exactly this, and adding a row to it is the correct outcome.
- **Do not change a value because it looks wrong on your screen.** A fix applied on one screen is
  a desync. It goes to the token of its level, or to the component plus its page plus every
  screen holding it.

---

## What this prompt does not cover, and why

**It does not tell you what to build.** The feature is the one blank, and it is the one thing
this repository cannot decide for you.

**It does not repeat a single value.** There is no hex, no pixel number, no interface string and
no css fragment anywhere above, and that is deliberate rather than terse: a copy of a value goes
stale within a week and keeps a confident face while it does. Every line here names the file that
owns the thing and stops.

**It does not replace the founder.** Two lists in this package are addressed to a person and not
to a builder: the questions in `onboarding-gaps.md` that are true on purpose and written down
nowhere, and the NOT DECIDED rows in `behaviour.md` that no file decides. If your feature lands
on one of them, you have found a decision, not a task. **Neither list is counted here, on
purpose**: a prompt that states the length of another document goes stale the first time that
document grows, and the first feature built from this prompt grew one of them within the hour.
