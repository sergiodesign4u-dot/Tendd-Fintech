# Wireframe Conventions (Tendd)

Phase: Wireframes, Step 2. These are the rules every Tendd wireframe follows.
Steps 3 to 9 of this phase, and later phases that read wireframes, rely on
this document. Read it before building or reviewing any screen.

Sources this obeys: wireframes/_screens.md (the screen and state inventory),
IA/docs/sitemap.md (screen names, navigation, entities), IA/docs/flows.md
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
  `header`, one `nav` (the wireframe tree, see Step 4), one `main` per page.

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
- Filenames are fixed by wireframes/_screens.md (the File column). Do not
  invent a filename that is not in that table, and do not create a state page
  the table marks `-`.
- Support files keep the leading underscore: `_screens.md`, `_conventions.md`,
  `_critique.md`. The overview lives at `wireframes/index.html`.

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
  wireframes/_screens.md. Do not add states the scenario does not produce.

## 6. Navigation and shell (shared on every page)

- Left wireframe tree (built in Step 4): a grey `nav` panel on the left of
  every page, identical everywhere, listing section, then screen, then that
  screen's states, with the current page marked. Structure comes from
  _screens.md and sitemap.md; nothing invented.
- The product's own chrome is wireframed inside `main`, not confused with the
  tree. Per sitemap.md navigation: the app has a global bar with four
  destinations, Home, Alerts, Save, You. Draw it as a labelled zone.
- Mobile first, desktop responsive (the product is mobile-first web scaling to
  desktop). Wireframe the mobile structure as the primary layout. Where the IA
  library defines a desktop reflow, note it as a labelled structural note, not
  a second pixel layout:
  - the global bar is a bottom tab bar on mobile and a left rail on desktop;
  - Home and Subscription Detail are two screens on mobile and a two-pane
    master-detail on desktop;
  - Cancel Guide, Share Snapshot, and Upgrade may be modals on desktop.
  Exact breakpoint values are a Design decision, not set here.
- No footer inside the app (locked in IA navigation.md). Tendd is an app, not
  a marketing site. Do not add a link or legal footer to app screens. A `footer`
  element is only used if a specific screen genuinely has one (none at MVP).
- Onboarding shows no global bar (Welcome, Path Choice, Connect Bank, Add
  Subscription, Guided Reveal are a one-time linear chain). Mark its absence
  so it does not read as a gap.

## 7. Deferred to the Design phase (not here)

Color, brand, typography and type scale, shadows, real icons, real logos and
imagery, motion and transitions, exact spacing values, the finished UI look,
and any pixel-level layout. Wireframes stop at structure, hierarchy, zones,
real copy, and the four states.

## 8. Scope discipline

- Every wireframe traces to a screen in _screens.md and a place in a flow in
  flows.md. No screen that is not on the map.
- No new zones beyond what sitemap.md and the IA page-level library
  (IA/docs/pages/) define for that screen. If a zone seems missing, it is a
  question for the map, not an invention in the wireframe.
- English only in all files. No em dashes anywhere.
