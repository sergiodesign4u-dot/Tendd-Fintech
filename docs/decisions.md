# Decision log

What we did, why exactly this, and what we rejected on what ground. Newest on top.
This file is never loaded into a session automatically: read it when you need the ground
under a decision. Rules that must hold next time live in `CLAUDE.md`; status lives in the
README table and in `done:true` in `/_nav.js`.

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
`wireframes/welcome.html` (the landing, node 0.0) to `index.html`. The empty stage folders
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
page and the only one with a footer, which is why it is the product home page (node 0.0).

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
