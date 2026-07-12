# Wireframe Conventions (Tendd)

Phase: Wireframes, Step 2. These are the rules every Tendd wireframe follows.
Steps 3 to 9 of this phase, and later phases that read wireframes, rely on
this document. Read it before building or reviewing any screen.

Sources this obeys: wireframes/docs/screens.md (the screen and state inventory),
ia/docs/sitemap.md (screen names, navigation, entities), ia/docs/flows.md
(flows and states), and the five design principles in CLAUDE.md.

A wireframe is structure, not look. It answers "what is on the screen, in
what order, and what is the main action" and nothing about color, type, or
brand. If a choice is visual, it is not made here; it is deferred to the
Design phase.

---

## 1. Fidelity: grey, structure only

- Greyscale only. No color, no brand palette, no accent hues. The only visual
  variables are box, border, spacing, weight of the outline, and text.
- No typography decisions: no font family, no type scale, no custom sizes
  beyond the browser default hierarchy of headings and paragraphs.
- No shadows, no gradients, no rounded-corner styling as decoration, no icons,
  no images, no logos. Where a logo or image would sit, use a labelled grey
  placeholder box, for example `[logo]` or `[merchant logo]`.
- Show hierarchy and zones, not polish. A zone is a labelled region of the
  screen (search, summary, list, detail, primary action). Each zone is a
  bordered block with a short zone label so the structure reads at a glance.
- One shared stylesheet only, inline in each page or a single linked file. No
  external CSS frameworks, no icon fonts, no web fonts, no CDN libraries.

## 2. Markup: semantic HTML

- Use real semantic elements, not a wall of `div`: `header`, `nav`, `main`,
  `section`, `article`, `aside`, `form`, `label`, `input`, `button`, `a`,
  `ul`, `ol`, `li`, `h1` to `h4`, `p`, `footer` only where a footer truly
  exists (see the no-footer rule below).
- Interactive things are real elements: a button is a `button`, a link is an
  `a href`, a field is an `input` or `select` with a `label`. Not styled
  spans.
- Every screen has exactly one `h1` (the screen name or its main heading).
  Zones are `section` with an `h2` label. Repeated items (a subscription row,
  an alert row) are `article` or `li`.
- Landmarks are present and correct so the structure is navigable: one
  `header`, one `main` per page, and the product's own `nav` (the global tab
  bar). No reviewer-only `nav` sits in a frame (see the shell rule below).

## 3. Real content, no lorem ipsum

Use real Tendd domain text so the structure is judged on real length and
meaning. Never "Heading 1" or lorem ipsum.

Domain vocabulary and formats:
- Money in US dollars first (D5, US and Plaid first): `$12.99`, `$7.99/mo`,
  `$69/yr`. A monthly total like `$142.87`.
- Subscriptions: real merchant name and a `[logo]` placeholder, amount,
  billing frequency (monthly, yearly, quarterly), next billing date
  (`Next: Aug 3`), category (Streaming, Music, Fitness, Software, News),
  status (Active, Trial, Paused, Cancelled). Use plausible real services:
  Spotify Premium, Netflix, Disney+, Adobe Creative Cloud, iCloud+, Notion,
  Amazon Prime, The New York Times, Peloton, ChatGPT Plus.
- The J3 decode case: show the raw statement string versus the readable name,
  for example `SPOTIFYAB STOCKHOLM` decoded to `Spotify Premium`.
- Counts and totals in plain language (design principle 3): "You are paying
  for 14 subscriptions", not "Monthly recurring expenditure". The most
  important number is the biggest thing in its zone (design principle 2).
- Alerts in active voice, plain language (M1): "Netflix went up by $2.50",
  "A payment to Peloton did not go through". No jargon, no red-alarm wording.
- Tone is calm and non-judgmental (design principle 1): no urgent words, no
  shame, no "you wasted". Reassure about data ("read-only, we cannot move
  your money") wherever a trust moment appears (design principle 4).

Placeholders that are allowed because they stand for a deferred asset, not
missing text: `[logo]`, `[merchant logo]`, `[chart]`, `[preview image]`.
Everything else is real copy.

## 4. File naming

- Latin, lowercase, hyphenated filenames. All wireframe files live in
  `wireframes/`.
- Base page per screen: `wireframes/<screen>.html`. The base page is the
  success (normal, populated) state.
- One page per extra state: `wireframes/<screen>-<state>.html` where state is
  `empty`, `error`, or `loading`. Example set for Home:
  `home.html`, `home-empty.html`, `home-error.html`, `home-loading.html`.
- Filenames are fixed by wireframes/docs/screens.md (the File column). Do not
  invent a filename that is not in that table, and do not create a state page
  the table marks `-`.
- The inventory docs live in `wireframes/docs/` with no leading underscore:
  `docs/screens.md`, `docs/conventions.md`, `docs/critique.md`. The shared shell
  files keep a leading underscore at the wireframes root: `_nav.js`, `_wf.css`.
  The overview lives at `wireframes/index.html`.

## 5. States: one page each, never a toggle

- Every state is a separate HTML page, not a JS toggle inside one file. Same
  structure and zones as the base page; only the content of the affected zone
  changes.
- The four states and what each must contain:
  - success (base): the normal, working view.
  - empty: no data yet, plus a visible way out. Never a bare "nothing here".
    For example Home empty invites connecting or adding; a search with no
    preset match offers "add it by hand".
  - error: a failure, plus a visible recovery. For example Connect Bank error
    keeps both "try again" and "add them yourself instead".
  - loading: calm grey placeholder blocks in the shape of the content that is
    coming (skeleton rows), not a spinner-only screen.
- No dead ends. Every empty and every error page has at least one main action
  that leads somewhere real in flows.md. This is checked in Step 9.
- Build only the states marked `check` for that screen in
  wireframes/docs/screens.md. Do not add states the scenario does not produce.

## 6. Navigation and shell (shared on every page)

- Review side menu (the wireframe tree, built by _nav.js): a grey `details`
  panel on the left of every page, identical everywhere, listing section, then
  screen, then that screen's states, with the current page marked. It is the
  reviewer's navigation across the set; on narrow screens it collapses to a
  "Wireframe map" bar at the top. Structure mirrors screens.md and sitemap.md.
- What stays removed (the July 2026 declutter): the meta/annotation bar
  (cluster, job, flow, tap depth), the "this screen: states" strip, and the
  per-page desktop-reflow note. A frame is the product screen plus the review
  tree, nothing else pasted on top. The overview, `wireframes/index.html`, is
  still the single flow-grouped index of every page and state.
- The product's own chrome is the only navigation inside the frame itself. Per
  sitemap.md the app has a global bar with four destinations, Home, Alerts,
  Save, You; onboarding screens show no bar.
- Welcome / Value Intro is the exception to the app shell. It is the public
  landing (the web front door): a full-width marketing wireframe with its own
  top nav and a footer, still greyscale and structure only, built with the
  landing classes (`.landing`, `.lp-*`) in _wf.css. Its CTAs lead into
  the onboarding chain at Path Choice. It is the one page that uses full width
  rather than the centered phone frame.
- Mobile first, desktop responsive, and the wireframe reflows for real (the
  product is mobile-first web scaling to desktop). Author the mobile structure
  first; the same page then reflows to desktop through the shared CSS, so
  widening the browser shows the wide-screen layout, it is not only a note.
  The shared reflow (in _wf.css, driven by a container query on the
  stage) implements the IA delta:
  - the global bar is a bottom tab bar on mobile and becomes a left rail on
    desktop, with the header (GC1) folded into the top of that rail (per
    navigation.md); single-column app screens sit in a centered, comfortable
    measure (max 820px) so rows do not stretch on large monitors;
  - Home and Subscription Detail become a real two-pane master-detail on wide
    desktop (stage >= 1040): the list is the master and a selected-item detail
    (Home) or the returning list (Detail) sits in the second pane;
  - onboarding has no structural delta: it stays a single centered column,
    just wider, with no rail.
  Still deferred to Design: Cancel Guide, Share Snapshot, and Upgrade as modals
  on desktop. Exact breakpoint values beyond these are a Design decision.
- No footer inside the app (locked in IA navigation.md). Tendd is an app, not
  a marketing site. Do not add a link or legal footer to app screens. The sole
  footer in the set is on the Welcome landing, which is a marketing page.
- Onboarding shows no global bar (Path Choice, Connect Bank, Add Subscription,
  Guided Reveal are a one-time linear chain). Mark its absence so it does not
  read as a gap. Welcome sits before this chain as the public landing.

## 7. Deferred to the Design phase (not here)

Color, brand, typography and type scale, shadows, real icons, real logos and
imagery, motion and transitions, exact spacing values, the finished UI look,
and any pixel-level layout. Wireframes stop at structure, hierarchy, zones,
real copy, and the four states.

## 8. Scope discipline

- Every wireframe traces to a screen in screens.md and a place in a flow in
  flows.md. No screen that is not on the map.
- No new zones beyond what sitemap.md and the IA page-level library
  (ia/docs/pages/) define for that screen. If a zone seems missing, it is a
  question for the map, not an invention in the wireframe.
- English only in all files. No em dashes anywhere.
