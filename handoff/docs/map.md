# The correspondence map - Tendd

The question everybody asks first inside somebody else's product: **if I change this, what
moves.** It has two directions, and the second is the one a person actually needs before they
touch anything.

**Nothing here was remembered.** Every row is produced by `design/kit/screens/map13.cjs`, which
serves the repository to a headless browser, walks all 57 coloured screens, and writes
`design/kit/screens/map13.json` beside itself. Re-run it after any change and disagree with it
rather than with this file:

```
node design/kit/screens/map13.cjs --json
```

**No hex, no pixel value, no interface string.** A value is named by its token, a control by its
component, a line by its address in `voice/docs/microcopy.md`.

---

## The chain, and where each link is read

`screen -> zone -> component -> tokens -> the address of its copy`

| Link | Read from | How |
|---|---|---|
| screen | `design/*.html` minus `overview.html` and `rollout.html` | the same corpus `rollout12.cjs` uses |
| zone | the DOM in a browser | the direct children of `.app`, with `<main class="screen">` expanded one level, plus **the shell itself** as a zone of its own |
| component | `design/system/components/*.css` and `patterns/*.css` | by the KEY of each selector, under its HOST. See the two rules below |
| tokens | every `var(--x)` in that file, **plus a separate pass over `base.css`** | base.css reads tokens and is not a component; without that pass its tokens land in the dead list |
| copy | `voice/docs/microcopy.md` | its rows are screen, zone, line and type, so screen and zone already ARE the address |

### The two rules that make the component column true rather than roughly right

**The host.** Every selector in this system carries `.app` or `.landing`, and the two
vocabularies overlap: `.lockup` is written by `app-bar.css` AND by `landing-bar.css`. Read
without its host, the landing's twelve components appear on fifty screens they have never stood
on. Each screen resolves classes only against its own host.

**The key, and the compound.** A component file mentions many classes that are not its own:
`button.css` writes `.app .btn`, `plan-option.css` writes `.app .plan-opt .btn`. Both mention
`.btn` and only the first owns it, so ownership is read off the DEPTH under the host: one
segment owns, deeper decorates somebody else's class inside its own context. And a compound key
is a SIGNATURE rather than two owners: `.btn.cand` is matched only where an element carries
both, otherwise the save-focus candidate would appear on every screen with a button.

### The two cases the three sources do not cover

**Global lines.** The pack for this stage expects a Globals section in `microcopy.md` with no
"screens" column. **This repository has no such section**: a global line (the bar, the tab bar)
is listed under every screen that carries it, so screen and zone address it directly and no
special case is needed. Recorded because a reader will look for it.

**Components rendered by a script.** `design/_nav.js` draws the reviewer's panel and the theme
switch into every screen. Those classes belong to `design/_screen.css`, which is the stand's
chrome and not the system, and they are outside this map on purpose: **the map is of the
product, and the chrome is not shipped.** The two scripts a screen loads are named in the
behaviour spec instead.

---

## Roll-call

| | |
|---|---|
| screens the registry `design/_nav.js` names | **57** |
| of them, in this map | **57** |
| named by the registry with no file on disk | **0** |
| on disk and not in the registry | **0** |

**Screens 57 = mapped 57 + deliberately not 0.** The roll-call closes.

Rows in the full map, one per screen and zone: **323**, in `map13.json`. The three tables below
are that data joined and are complete by join, not by repetition.

---

## Idle control

| Check | Result |
|---|---|
| tokens no chain reaches | **3**, and every one is accounted for below |
| components on no screen | **0** |
| files on disk against `inventory.md` | **73 = 73**: 20 atoms, 22 molecules, 28 organisms, 3 patterns, and `rollout12.cjs` check 6 confirms each heading matches its own table |
| screens with no zone | **0** |

**`--bp-tablet` and `--bp-desktop` are NOT dead.** A width point is a REGISTER and a container
query cannot read a `var()`, so the token holds the decision and the literal in the query is its
application. That is the rule as `CLAUDE.md` writes it, and an idle control that did not know it
would report the two most important numbers in the system as unused.

**`--space-56` is a decided idle token.** `tokens.css` says so beside it: "no consumer today,
and it is KEPT, 2026-08-12". The instrument agrees with the comment, which is the point of
running it.

**Zero components idle, and that is a check rather than a claim.** Stage 08 asked this question
against a 28-page sample and stage 12 re-asked it against the whole product; this run asks it a
third time against 57 screens and 323 zones and finds every one of the 73 files standing
somewhere. Where this map disagreed with the earlier answer, the map was wrong and was fixed
twice before this file was written: once for the host, once for rules nested inside a container
query, which had made `groups-column-set` look like a component that stands nowhere.

**35 variables are read by a component and declared inside it** rather than in `tokens.css`
(`--chart-gutter`, `--cx`, `--scardw`, and 32 more). Rule 1 of `design/system/CLAUDE.md` allows
exactly this, "a component token only where a state lands on no role". They are named here as a
group with their number so the size of that third place is visible; judging whether all 35 earn
it is a system question and not this file's.

---

## Part A. Screen to zones and components

One row per screen. "Zones" is how many regions the markup declares; "copy zones" is how many
distinct zones `microcopy.md` addresses for that screen.

| Screen | Zones | Components standing on it | Copy zones |
|---|---|---|---|
| `add-subscription-empty.html` | 7 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, form-field, interruption, select, text-block, text-input | 3 |
| `add-subscription-error.html` | 5 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, form-field, interruption, select, text-block, text-input | 3 |
| `add-subscription-loading.html` | 7 | app-bar, app-shell, brand-mark, brand-wordmark, form-field, grid, group-head, logo, preset-tile, quiet-line, skeleton-bar, text-block, text-input | 1 |
| `add-subscription.html` | 10 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, form-field, grid, group-head, logo, muted-line, preset-tile, quiet-line, select, text-block, text-input | 7 |
| `alerts-empty.html` | 4 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, category-group, chip, destination-icon, group-head, list-column, pair-list, tab-bar, text-block | 3 |
| `alerts-error.html` | 4 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, chip, destination-icon, interruption, list-column, tab-bar, text-block, trust-block | 4 |
| `alerts-loading.html` | 4 | alert-item, app-bar, app-shell, brand-mark, brand-wordmark, category-group, chip, destination-icon, divided-list, group-head, list-column, logo, skeleton-bar, tab-bar, text-block | 1 |
| `alerts.html` | 4 | act-foot, action-row, alert-item, app-bar, app-shell, brand-mark, brand-wordmark, button, category-group, chip, destination-icon, divided-list, group-head, list-column, logo, panel, tab-bar, text-block | 4 |
| `cancel-guide-blocked.html` | 3 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, dialog-sheet, interruption, muted-line, numbered-steps, text-block | 5 |
| `cancel-guide-no-guide.html` | 5 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, destination-icon, group-head, interruption, meta-row, muted-line, numbered-steps, pair-list, tab-bar, text-block | 7 |
| `cancel-guide.html` | 5 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, destination-icon, group-head, meta-row, muted-line, numbered-steps, pair-list, panel, tab-bar, text-block | 10 |
| `cancel-win.html` | 5 | act-foot, action-row, amount, app-bar, app-shell, brand-mark, brand-wordmark, button, eyebrow, muted-line, pair-list, summary | 4 |
| `connect-bank-cancelled.html` | 5 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, interruption, quiet-line, text-block | 3 |
| `connect-bank-empty.html` | 5 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, interruption, muted-line, text-block | 3 |
| `connect-bank-error.html` | 5 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, interruption, quiet-line, text-block | 3 |
| `connect-bank-loading.html` | 4 | app-bar, app-shell, big-total, brand-mark, brand-wordmark, logo, skeleton-bar, subscription-row, text-block | 1 |
| `connect-bank.html` | 8 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, form-field, muted-line, pair-list, promise-list, text-block, text-input | 7 |
| `connections-add-source.html` | 3 | app-bar, app-shell, brand-mark, brand-wordmark, dialog-sheet, door, grid, interruption, quiet-line, text-block | 3 |
| `connections-empty.html` | 4 | app-bar, app-shell, brand-mark, brand-wordmark, destination-icon, door, empty-block, grid, list-column, muted-line, tab-bar, text-block | 1 |
| `connections-reconnect.html` | 4 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, card, chip, destination-icon, list-column, logo, muted-line, pair-list, tab-bar, text-block, wash-block | 3 |
| `connections.html` | 4 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, card, chip, destination-icon, list-column, logo, muted-line, pair-list, tab-bar, text-block | 5 |
| `data-privacy-delete-confirm.html` | 3 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, dialog-sheet, interruption, pair-list, quiet-line, text-block | 4 |
| `data-privacy.html` | 4 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, category-group, checkbox, destination-icon, group-head, list-column, muted-line, pair-list, promise-list, quiet-line, switch-row, tab-bar, text-block | 7 |
| `guided-reveal-empty.html` | 5 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, interruption, quiet-line, text-block | 3 |
| `guided-reveal.html` | 3 | act-foot, action-row, app-bar, app-shell, big-total, brand-mark, brand-wordmark, button, eyebrow, group-head, label, logo, merchant-chip-group, muted-line, reveal-step, step-forward-link | 4 |
| `history-trends-empty.html` | 9 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, chart-placeholder, chip, destination-icon, interruption, meta-row, muted-line, readout, tab-bar, text-block | 4 |
| `history-trends-error.html` | 6 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, chip, destination-icon, interruption, muted-line, tab-bar, text-block | 4 |
| `history-trends-loading.html` | 7 | app-bar, app-shell, big-total, brand-mark, brand-wordmark, category-bars, category-group, chart-placeholder, chip, dashboard-head, destination-icon, grid, group-head, logo, range-picker, skeleton-bar, subscription-row, tab-bar, text-block | 1 |
| `history-trends-locked.html` | 6 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, card, chart-placeholder, chip, destination-icon, grid, meta-row, muted-line, range-picker, readout, tab-bar, text-block | 6 |
| `history-trends.html` | 9 | act-foot, action-row, amount, app-bar, app-shell, big-total, brand-mark, brand-wordmark, button, category-bars, category-group, chart-placeholder, chip, dashboard-head, destination-icon, grid, group-head, logo, meta-row, muted-line, range-picker, readout, subscription-row, summary, tab-bar, text-block, trust-block, wash-block | 5 |
| `home-empty.html` | 5 | app-bar, app-shell, brand-mark, brand-wordmark, chip, dashboard-head, destination-icon, door, empty-block, grid, muted-line, summary, tab-bar | 2 |
| `home-error.html` | 8 | act-foot, action-row, amount, app-bar, app-shell, big-total, brand-mark, brand-wordmark, button, category-group, chip, dashboard-head, destination-icon, group-head, groups-column-set, logo, muted-line, subscription-row, summary, tab-bar, trust-block, wash-block | 3 |
| `home-few.html` | 7 | act-foot, action-row, amount, app-bar, app-shell, big-total, brand-mark, brand-wordmark, button, category-group, chip, dashboard-head, destination-icon, group-head, groups-column-set, logo, quiet-line, subscription-row, summary, tab-bar, trust-block | 4 |
| `home-loading.html` | 5 | app-bar, app-shell, big-total, brand-mark, brand-wordmark, category-group, chip, dashboard-head, destination-icon, group-head, groups-column-set, logo, muted-line, skeleton-bar, subscription-row, summary, tab-bar | 1 |
| `home-one.html` | 7 | act-foot, action-row, amount, app-bar, app-shell, big-total, brand-mark, brand-wordmark, button, category-group, chip, dashboard-head, destination-icon, group-head, groups-column-set, logo, quiet-line, subscription-row, summary, tab-bar, trust-block | 4 |
| `home.html` | 8 | act-foot, action-row, amount, app-bar, app-shell, big-total, brand-mark, brand-wordmark, button, category-group, chip, dashboard-head, destination-icon, group-head, groups-column-set, logo, muted-line, save-focus-candidate, save-focus-list, subscription-row, summary, tab-bar, trust-block, wash-block | 12 |
| `index.html` | 8 | action-row, amount, brand-mark, brand-wordmark, button, card, checkbox, chip, eyebrow, faq-list, grid, landing-bar, landing-facts, landing-final, landing-hero, landing-orbit, landing-paths, landing-plan, landing-shell, landing-steps, landing-story, logo, muted-line, pair-list, plan-option, preset-tile, site-footer, summary, switch-row | - |
| `path-choice.html` | 6 | app-bar, app-shell, brand-mark, brand-wordmark, door, grid, muted-line, quiet-line, text-block | 5 |
| `settings-no-account.html` | 4 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, category-group, destination-icon, divided-list, form-field, group-head, list-column, muted-line, nav-row, promise-list, tab-bar, text-block, text-input | 4 |
| `settings.html` | 4 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, category-group, checkbox, chip, destination-icon, divided-list, form-field, group-head, list-column, muted-line, nav-row, select, switch-row, tab-bar, text-block, text-input | 4 |
| `share-snapshot-error.html` | 5 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, interruption, muted-line, text-block | 4 |
| `share-snapshot-loading.html` | 5 | app-bar, app-shell, big-total, brand-mark, brand-wordmark, muted-line, share-card, skeleton-bar, text-block | 2 |
| `share-snapshot.html` | 6 | act-foot, action-row, app-bar, app-shell, big-total, brand-mark, brand-wordmark, button, eyebrow, label, muted-line, share-card, text-block | 5 |
| `sign-in-expired.html` | 5 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, interruption, quiet-line, text-block | 3 |
| `sign-in-sent.html` | 6 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, interruption, pair-list, quiet-line, text-block | 4 |
| `sign-in.html` | 8 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, form-field, pair-list, quiet-line, text-block, text-input, trust-block | 7 |
| `subscription-detail-error.html` | 5 | act-foot, action-row, amount, app-bar, app-shell, brand-mark, brand-wordmark, button, destination-icon, detail-hero, interruption, logo, summary, tab-bar, text-block, trust-block | 4 |
| `subscription-detail-loading.html` | 5 | amount, app-bar, app-shell, brand-mark, brand-wordmark, charge-list, destination-icon, detail-hero, logo, muted-line, pair-list, panel, skeleton-bar, summary, tab-bar, trust-block, wash-block | 1 |
| `subscription-detail-payment-failed.html` | 5 | act-foot, action-row, amount, app-bar, app-shell, brand-mark, brand-wordmark, button, charge-list, chip, destination-icon, detail-hero, logo, muted-line, pair-list, panel, summary, tab-bar, trust-block, wash-block | 6 |
| `subscription-detail-price-change.html` | 5 | act-foot, action-row, amount, app-bar, app-shell, brand-mark, brand-wordmark, button, charge-list, chip, destination-icon, detail-hero, logo, muted-line, pair-list, panel, summary, tab-bar, trust-block, wash-block | 4 |
| `subscription-detail-unrecognized.html` | 5 | act-foot, action-row, amount, app-bar, app-shell, brand-mark, brand-wordmark, button, charge-list, chip, destination-icon, detail-hero, logo, muted-line, pair-list, panel, summary, tab-bar, trust-block, wash-block | 6 |
| `subscription-detail.html` | 5 | act-foot, action-row, amount, app-bar, app-shell, brand-mark, brand-wordmark, button, charge-list, chip, destination-icon, detail-hero, logo, muted-line, pair-list, panel, summary, tab-bar, trust-block, wash-block | 11 |
| `upgrade-current-plan.html` | 6 | app-bar, app-shell, brand-mark, brand-wordmark, chip, muted-line, pair-list, quiet-line, text-block | 7 |
| `upgrade-payment-failed.html` | 6 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, chip, interruption, muted-line, pair-list, text-block | 5 |
| `upgrade-processing.html` | 5 | app-bar, app-shell, brand-mark, brand-wordmark, chip, interruption, muted-line, skeleton-bar, text-block | 2 |
| `upgrade-renewal-failed.html` | 6 | act-foot, action-row, app-bar, app-shell, brand-mark, brand-wordmark, button, chip, interruption, muted-line, pair-list, text-block | 6 |
| `upgrade.html` | 6 | act-foot, action-row, amount, app-bar, app-shell, brand-mark, brand-wordmark, button, chip, eyebrow, grid, muted-line, plan-option, summary, text-block | 6 |

---

## Part B. Component to the tokens it reads

Every `var(--x)` inside that component's own css. "Screens" is its reach, taken from Part A.

| Component or pattern | Screens | Tokens it reads |
|---|---|---|
| `act-foot` | 43 | `--space-0` `--space-16` |
| `action-row` | 44 | `--space-0` `--space-16` `--space-8` |
| `alert-item` | 2 | `--bg-hover` `--color-focus` `--dur-press` `--dur-state` `--ease-arrive` `--ease-state` `--nudge` `--ring` `--space-0` `--space-16` `--space-4` `--space-8` `--text-body` `--text-muted` `--text-primary` `--type-body` `--type-meta` |
| `amount` | 14 | `--text-primary` `--type-body` `--type-display` `--type-figure` |
| `app-bar` | 56 | `--bg-surface` `--color-focus` `--dur-state` `--ease-arrive` `--line-container` `--line-divider` `--nudge` `--ring` `--space-0` `--space-16` `--space-2` `--space-4` `--space-8` `--tap` `--text-body` `--text-muted` `--text-primary` `--type-body` `--type-meta` `--z-appbar` |
| `app-shell` | 56 | `--bg-surface` `--container-column` `--container-page` `--container-wide` `--row` `--space-0` `--space-16` `--space-24` `--space-32` `--space-40` `--space-48` `--space-64` |
| `big-total` | 11 | `--space-0` `--space-2` `--text-primary` `--type-display` `--type-figure` |
| `brand-mark` | 57 | `--bg-surface` `--crop-whole` `--dur-signature` `--dur-state` `--ease-arrive` `--ease-leave` `--ease-settle` `--sig-name` `--text-action` |
| `brand-wordmark` | 57 | `--dur-signature` `--dur-state` `--ease-arrive` `--text-action` `--text-primary` `--type-head` `--type-sub` |
| `button` | 44 | `--bg-action` `--bg-action-strong` `--bg-hover` `--bg-recessed` `--bg-surface` `--color-focus` `--dur-press` `--dur-state` `--ease-state` `--line-control` `--line-control-hover` `--line-divider` `--nudge` `--radius-sm` `--ring` `--space-0` `--space-16` `--tap` `--text-body` `--text-muted` `--text-on-action` `--text-primary` `--type-body` |
| `card` | 4 | `--bg-surface` `--container-text` `--line-container` `--line-divider` `--radius` `--space-0` `--space-16` `--space-24` `--space-8` `--text-body` `--text-muted` `--type-body` `--type-meta` `--type-sub` |
| `category-bars` | 2 | `--bg-measure` `--bg-recessed` `--line-divider` `--radius-xs` `--space-0` `--space-16` `--space-8` `--text-body` `--type-body` |
| `category-group` | 13 | `--line-divider` `--space-0` `--space-24` |
| `charge-list` | 5 | `--bg-attention` `--line-divider` `--space-0` `--space-16` `--space-8` `--text-muted` `--type-body` `--type-meta` |
| `chart-placeholder` | 4 | `--bg-recessed` `--bg-surface` `--chart-gutter` `--chart-rule` `--container-page` `--cx` `--cy` `--dur-state` `--ease-state` `--line-container` `--line-divider` `--lx` `--ly` `--plot-area` `--plot-line` `--radius-sm` `--shadow` `--space-0` `--space-16` `--space-2` `--space-40` `--space-8` `--text-muted` `--tipflip` `--tipx` `--type-label` `--type-meta` `--type-sub` |
| `checkbox` | 3 | `--bg-action-strong` `--bg-recessed` `--color-focus` `--control-accent` `--dur-press` `--dur-state` `--ease-state` `--ring` `--space-0` `--space-4` |
| `chip` | 28 | `--bg-chip-accent` `--bg-status` `--radius-xs` `--space-0` `--space-16` `--space-24` `--space-4` `--space-8` `--text-chip-accent` `--text-status` `--type-label` |
| `dashboard-head` | 8 | `--line-divider` `--space-0` `--space-24` `--space-32` `--space-40` |
| `destination-icon` | 29 | `--text-body` |
| `detail-hero` | 6 | `--space-0` `--space-16` `--space-2` `--space-8` `--text-muted` `--text-primary` `--type-body` `--type-title` |
| `dialog-sheet` | 3 | `--bg-surface` `--line-container` `--radius` `--shadow` `--space-0` `--space-16` `--space-24` |
| `divided-list` | 4 | `--line-divider` `--space-0` `--space-16` `--space-8` |
| `door` | 4 | `--bg-hover` `--bg-surface` `--color-focus` `--dur-press` `--dur-state` `--ease-arrive` `--ease-state` `--line-control` `--line-control-hover` `--nudge` `--radius` `--ring` `--space-0` `--space-16` `--space-4` `--space-8` `--text-body` `--text-muted` `--text-primary` `--type-body` `--type-sub` |
| `empty-block` | 2 | `--container-text` `--space-0` `--space-16` `--space-24` `--space-8` `--text-muted` `--type-body` `--type-sub` |
| `eyebrow` | 5 | `--space-0` `--space-4` `--space-8` `--text-muted` `--type-meta` |
| `faq-list` | 1 | `--bg-hover` `--bg-surface` `--container-column` `--container-text` `--line-container` `--radius` `--space-0` `--space-24` `--space-64` `--space-96` `--tap` `--text-action` `--text-body` `--text-primary` `--type-body` `--type-title` |
| `form-field` | 8 | `--container-text` `--space-0` `--space-16` `--space-4` `--text-failure` `--text-muted` `--type-meta` |
| `grid` | 11 | `--grid-col-min` `--grid-gap` `--space-0` `--space-16` `--space-24` `--space-48` |
| `group-head` | 18 | `--line-divider` `--space-0` `--space-16` `--space-2` `--space-24` `--space-8` `--text-muted` `--type-meta` |
| `groups-column-set` | 5 | `--space-48` |
| `interruption` | 20 | `--space-0` `--space-24` |
| `label` | 2 | `--space-0` `--space-4` `--text-body` `--text-muted` `--type-meta` `--type-sub` |
| `landing-bar` | 1 | `--bg-surface` `--line-container` `--space-0` `--space-16` `--space-32` `--space-8` `--tap` `--text-body` `--text-primary` `--type-body` |
| `landing-facts` | 1 | `--bg-recessed` `--bg-surface` `--container-text` `--ease-arrive` `--line-container` `--radius` `--radius-sm` `--space-0` `--space-16` `--space-24` `--space-32` `--space-8` `--text-action` `--text-body` `--text-primary` `--type-body` `--type-sub` `--type-title` |
| `landing-final` | 1 | `--bg-page` `--bg-surface` `--container-column` `--line-container` `--radius` `--shadow` `--space-32` `--space-48` `--space-96` `--wash-final` |
| `landing-hero` | 1 | `--container-text` `--space-0` `--space-16` `--space-24` `--space-8` `--text-body` `--text-primary` `--type-hero` `--type-sub` |
| `landing-orbit` | 1 | `--bg-page` `--bg-recessed` `--bg-surface` `--container-column` `--container-text` `--deckhalf` `--ease-arrive` `--ease-leave` `--ease-settle` `--ease-travel` `--ftravel` `--line-container` `--line-divider` `--oph` `--osp` `--owidth` `--parx` `--pary` `--pb1` `--pb2` `--pb3` `--pbite` `--pblur` `--pfade` `--pscale` `--radius` `--scardc` `--scardoff` `--scardw` `--sglide` `--shadow` `--space-0` `--space-16` `--space-2` `--space-24` `--space-32` `--space-40` `--space-48` `--space-8` `--space-96` `--srow-h` `--story-gutter` `--text-muted` `--text-primary` `--type-body` `--type-figure` `--type-label` `--type-title` |
| `landing-paths` | 1 | `--bg-recessed` `--container-text` `--ease-arrive` `--shadow` `--space-0` `--space-24` `--space-32` `--space-8` `--text-body` `--text-primary` `--type-body` `--type-sub` `--type-title` |
| `landing-plan` | 1 | `--bg-recessed` `--bg-surface` `--ease-arrive` `--line-divider` `--line-selected` `--radius-sm` `--shadow` `--space-0` `--space-16` `--space-24` `--space-32` `--space-48` `--space-64` `--space-8` `--text-primary` `--type-sub` `--wash-pricing` |
| `landing-shell` | 1 | `--bg-page` `--bg-surface` `--container-wide` `--space-0` `--space-16` `--space-40` `--space-80` `--space-96` `--text-primary` `--type-head` `--type-section` |
| `landing-steps` | 1 | `--bg-action` `--bg-page` `--bg-surface` `--ease-arrive` `--ease-state` `--line-container` `--line-divider` `--radius` `--shadow` `--space-0` `--space-16` `--space-24` `--space-32` `--space-48` `--space-8` `--text-muted` `--text-primary` `--type-body` `--type-step` `--type-title` |
| `landing-story` | 1 | `--bg-page` `--bg-recessed` `--bg-surface` `--container-column` `--container-page` `--container-text` `--container-wide` `--line-container` `--line-divider` `--pfade` `--pscale` `--radius` `--radius-sm` `--scardslot` `--shadow` `--space-0` `--space-16` `--space-2` `--space-24` `--space-32` `--space-4` `--space-40` `--space-64` `--space-8` `--srow-h` `--stilt` `--story-gutter` `--story-top` `--stravel` `--text-body` `--text-muted` `--text-primary` `--type-body` `--type-figure` `--type-head` `--type-label` `--type-meta` `--type-title` |
| `list-column` | 10 | `--container-column` |
| `logo` | 22 | `--bg-callout` `--bg-placeholder` `--dur-state` `--ease-arrive` `--line-container` `--nudge` `--radius` `--radius-sm` `--radius-xs` `--text-muted` `--type-label` `--type-meta` `--type-title` |
| `merchant-chip-group` | 1 | `--bg-surface` `--line-divider` `--radius-sm` `--space-0` `--space-16` `--space-4` `--space-8` `--type-body` |
| `meta-row` | 5 | `--line-divider` `--space-0` `--space-24` `--space-4` `--space-8` `--text-muted` `--type-meta` |
| `muted-line` | 37 | `--container-text` `--line-container` `--line-divider` `--space-0` `--space-16` `--space-24` `--space-4` `--space-8` `--tap` `--text-action` `--text-body` `--text-muted` `--type-body` `--type-meta` |
| `nav-row` | 2 | `--bg-hover` `--color-focus` `--dur-press` `--dur-state` `--ease-arrive` `--ease-state` `--nudge` `--ring` `--row` `--space-16` `--text-muted` `--type-body` `--type-meta` |
| `numbered-steps` | 3 | `--container-text` `--line-container` `--space-0` `--space-16` `--space-24` `--space-4` `--space-40` `--text-muted` `--text-primary` `--type-body` `--type-meta` |
| `pair-list` | 20 | `--line-divider` `--space-0` `--space-16` `--space-24` `--space-4` `--space-8` `--text-muted` `--text-primary` `--type-body` |
| `panel` | 7 | `--bg-hover` `--bg-recessed` `--bg-surface` `--color-focus` `--container-text` `--line-container` `--line-divider` `--radius` `--ring` `--space-0` `--space-16` `--space-24` `--tap` `--text-body` `--text-muted` `--text-primary` `--type-body` `--type-meta` |
| `plan-option` | 2 | `--bg-surface` `--dur-state` `--ease-state` `--line-container` `--line-divider` `--radius` `--space-0` `--space-16` `--space-2` `--space-24` `--space-8` `--tap` `--text-body` `--text-muted` `--type-body` `--type-meta` |
| `preset-tile` | 3 | `--bg-hover` `--bg-selected` `--bg-surface` `--color-focus` `--dur-press` `--dur-state` `--ease-state` `--line-control` `--line-control-hover` `--line-selected` `--nudge` `--radius-sm` `--ring` `--row` `--space-8` `--type-body` |
| `promise-list` | 3 | `--container-text` `--line-container` `--space-0` `--space-16` `--space-2` `--space-24` `--text-body` `--text-primary` `--type-body` |
| `quiet-line` | 15 | `--container-text` `--line-container` `--space-0` `--space-16` `--space-24` `--tap` `--text-action` `--text-body` `--type-body` |
| `range-picker` | 3 | `--bg-recessed` `--bg-selected` `--bg-surface` `--color-focus` `--dur-press` `--dur-state` `--ease-state` `--nudge` `--radius` `--radius-sm` `--ring` `--space-0` `--space-16` `--space-2` `--space-24` `--tap` `--text-action` `--text-body` `--text-muted` `--type-body` |
| `readout` | 3 | `--container-text` `--space-0` `--space-16` `--space-8` `--text-primary` `--type-sub` |
| `reveal-step` | 1 | `--line-divider` `--space-0` `--space-16` `--space-24` `--space-8` `--text-primary` `--type-head` |
| `save-focus-candidate` | 1 | `--dur-press` `--dur-state` `--ease-state` `--line-divider` `--nudge` `--space-0` `--space-4` `--space-8` |
| `save-focus-list` | 1 | `--container-column` `--container-text` `--line-divider` `--space-0` `--space-24` `--space-8` `--text-muted` `--type-body` |
| `select` | 4 | `--bg-failure` `--bg-hover` `--bg-recessed` `--bg-surface` `--color-focus` `--line-container` `--line-control` `--line-control-hover` `--line-divider` `--line-failure` `--radius-sm` `--radius-xs` `--ring` `--space-0` `--space-16` `--space-4` `--space-8` `--tap` `--text-action` `--text-muted` `--text-primary` `--type-body` |
| `share-card` | 2 | `--bg-surface` `--container-text` `--line-container` `--line-divider` `--radius` `--space-0` `--space-16` `--space-24` `--space-8` `--text-body` `--text-primary` `--type-body` `--type-title` |
| `site-footer` | 1 | `--bg-surface` `--container-text` `--line-container` `--line-divider` `--space-0` `--space-16` `--space-24` `--space-32` `--space-48` `--space-8` `--tap` `--text-action` `--text-body` `--text-muted` `--type-body` `--type-meta` |
| `skeleton-bar` | 8 | `--bg-placeholder` `--dur-pulse` `--radius-xs` `--space-0` `--space-24` `--space-4` `--space-8` |
| `step-forward-link` | 1 | `--color-focus` `--dur-state` `--ease-arrive` `--ease-state` `--line-container` `--nudge` `--ring` `--space-16` `--space-8` `--tap` `--text-action` `--text-body` `--text-muted` `--type-body` |
| `subscription-row` | 8 | `--bg-hover` `--color-focus` `--dur-press` `--dur-state` `--ease-state` `--nudge` `--ring` `--row` `--space-0` `--space-16` `--space-4` `--space-8` `--text-muted` `--text-primary` `--type-meta` `--type-sub` |
| `summary` | 16 | `--space-0` `--space-24` `--space-4` `--space-48` `--text-body` `--text-primary` `--type-sub` `--type-title` |
| `switch-row` | 3 | `--bg-hover` `--color-focus` `--line-divider` `--ring` `--space-0` `--space-16` `--space-2` `--space-4` `--text-muted` `--text-primary` `--type-body` `--type-meta` |
| `tab-bar` | 29 | `--bg-recessed` `--bg-surface` `--color-focus` `--dur-press` `--dur-state` `--ease-arrive` `--ease-state` `--line-container` `--line-selected` `--nudge` `--ring` `--row` `--space-0` `--space-24` `--space-4` `--space-48` `--space-8` `--tap-rail` `--text-action` `--text-muted` `--type-meta` `--z-tabbar` |
| `text-block` | 43 | `--container-text` `--space-0` `--space-16` `--space-24` `--space-8` `--text-body` `--text-primary` `--type-body` `--type-head` `--type-sub` `--type-title` |
| `text-input` | 8 | `--bg-failure` `--bg-recessed` `--bg-surface` `--color-focus` `--line-control` `--line-control-hover` `--line-divider` `--line-failure` `--radius-sm` `--ring` `--space-0` `--space-16` `--space-4` `--space-8` `--tap` `--text-muted` `--text-primary` `--type-body` |
| `trust-block` | 13 | `--container-text` `--line-action-soft` `--line-divider` `--space-0` `--space-16` `--space-24` `--space-4` `--tap` `--text-action` `--text-muted` `--type-meta` |
| `wash-block` | 9 | `--bg-attention` `--bg-callout` `--bg-failure` `--container-text` `--line-container` `--radius-wash` `--soft` `--space-0` `--space-16` `--space-24` `--space-4` `--space-40` `--space-8` `--tap` `--text-action` `--text-attention` `--text-body` `--text-failure` `--text-primary` `--type-body` |

---

## Part C. THE REVERSE LIST: token to the screens it stands on

**This is the working half of the map** and it answers the question at the top of this file. It
is derived by INVERTING Parts A and B, not by walking the code a second time: two editions of
one dataset drift apart, and the one used less often goes stale first.

**The inversion is two knees deep.** A component reads colour ONLY through a semantic role, so
a flat inversion would name no primitive at all and the whole primitive level would look unused.
The chain is `component -> semantic role -> primitive`, and both knees are followed, in the light
theme and in the dark one, since a dark role points at a `-dark` primitive.

Ordered by reach. "Through" names the components that carry it; where more than six do, the
first six are named and the rest counted.

| Token | Level | Screens | Through |
|---|---|---|---|
| `--bg-surface` | semantic | 57 | app-bar, app-shell, brand-mark, button, card, chart-placeholder and 21 more |
| `--color-focus` | semantic | 57 | alert-item, app-bar, button, checkbox, door, nav-row and 9 more |
| `--container-column` | primitive | 57 | app-shell, faq-list, landing-final, landing-orbit, landing-story, list-column and 1 more |
| `--container-page` | primitive | 57 | app-shell, chart-placeholder, landing-story |
| `--container-text` | primitive | 57 | card, empty-block, faq-list, form-field, landing-facts, landing-hero and 15 more |
| `--container-wide` | primitive | 57 | app-shell, landing-shell, landing-story |
| `--crop-whole` | semantic | 57 | brand-mark |
| `--curve-expo-in` | primitive | 57 | brand-mark, landing-orbit |
| `--curve-expo-out` | primitive | 57 | alert-item, app-bar, brand-mark, brand-wordmark, button, chart-placeholder and 16 more |
| `--curve-spring` | primitive | 57 | brand-mark, landing-orbit |
| `--dur-signature` | primitive | 57 | brand-mark, brand-wordmark |
| `--dur-state` | primitive | 57 | alert-item, app-bar, brand-mark, brand-wordmark, button, chart-placeholder and 11 more |
| `--ease-arrive` | semantic | 57 | alert-item, app-bar, brand-mark, brand-wordmark, door, landing-facts and 8 more |
| `--ease-leave` | semantic | 57 | brand-mark, landing-orbit |
| `--ease-settle` | semantic | 57 | brand-mark, landing-orbit |
| `--hairline` | primitive | 57 | app-bar, card, chart-placeholder, dialog-sheet, faq-list, landing-bar and 18 more |
| `--hairline-dark` | primitive | 57 | app-bar, card, chart-placeholder, dialog-sheet, faq-list, landing-bar and 18 more |
| `--hairline-soft` | primitive | 57 | app-bar, button, card, category-bars, category-group, charge-list and 23 more |
| `--hairline-soft-dark` | primitive | 57 | app-bar, button, card, category-bars, category-group, charge-list and 23 more |
| `--ink` | primitive | 57 | alert-item, amount, app-bar, big-total, brand-wordmark, button and 26 more |
| `--ink-dark` | primitive | 57 | alert-item, amount, app-bar, big-total, brand-wordmark, button and 26 more |
| `--line-container` | semantic | 57 | app-bar, card, chart-placeholder, dialog-sheet, faq-list, landing-bar and 18 more |
| `--line-divider` | semantic | 57 | app-bar, button, card, category-bars, category-group, charge-list and 23 more |
| `--muted` | primitive | 57 | alert-item, app-bar, button, card, charge-list, chart-placeholder and 29 more |
| `--muted-dark` | primitive | 57 | alert-item, app-bar, button, card, charge-list, chart-placeholder and 29 more |
| `--nudge` | primitive | 57 | alert-item, app-bar, button, door, logo, nav-row and 6 more |
| `--paper` | primitive | 57 | app-bar, app-shell, brand-mark, button, card, chart-placeholder and 21 more |
| `--paper-dark` | primitive | 57 | app-bar, app-shell, brand-mark, button, card, chart-placeholder and 21 more |
| `--petrol` | primitive | 57 | alert-item, app-bar, brand-mark, brand-wordmark, button, chart-placeholder and 22 more |
| `--petrol-dark` | primitive | 57 | alert-item, app-bar, brand-mark, brand-wordmark, button, chart-placeholder and 22 more |
| `--ring` | primitive | 57 | alert-item, app-bar, button, checkbox, door, nav-row and 9 more |
| `--row` | primitive | 57 | app-shell, nav-row, preset-tile, subscription-row, tab-bar |
| `--sig-name` | semantic | 57 | brand-mark |
| `--slate` | primitive | 57 | alert-item, app-bar, button, card, category-bars, destination-icon and 20 more |
| `--slate-dark` | primitive | 57 | alert-item, app-bar, button, card, category-bars, destination-icon and 20 more |
| `--space-0` | primitive | 57 | act-foot, action-row, alert-item, app-bar, app-shell, big-total and 56 more |
| `--space-16` | primitive | 57 | act-foot, action-row, alert-item, app-bar, app-shell, button and 43 more |
| `--space-2` | primitive | 57 | app-bar, big-total, chart-placeholder, detail-hero, group-head, landing-orbit and 5 more |
| `--space-24` | primitive | 57 | app-shell, card, category-group, chip, dashboard-head, dialog-sheet and 31 more |
| `--space-32` | primitive | 57 | app-shell, dashboard-head, landing-bar, landing-facts, landing-final, landing-orbit and 5 more |
| `--space-4` | primitive | 57 | alert-item, app-bar, checkbox, chip, door, eyebrow and 18 more |
| `--space-40` | primitive | 57 | app-shell, chart-placeholder, dashboard-head, landing-orbit, landing-shell, landing-story and 2 more |
| `--space-48` | primitive | 57 | app-shell, grid, groups-column-set, landing-final, landing-orbit, landing-plan and 4 more |
| `--space-64` | primitive | 57 | app-shell, faq-list, landing-plan, landing-story |
| `--space-8` | primitive | 57 | action-row, alert-item, app-bar, card, category-bars, charge-list and 37 more |
| `--tap` | primitive | 57 | app-bar, button, faq-list, landing-bar, muted-line, panel and 9 more |
| `--text-action` | semantic | 57 | brand-mark, brand-wordmark, faq-list, landing-facts, muted-line, quiet-line and 7 more |
| `--text-body` | semantic | 57 | alert-item, app-bar, button, card, category-bars, destination-icon and 20 more |
| `--text-muted` | semantic | 57 | alert-item, app-bar, button, card, charge-list, chart-placeholder and 28 more |
| `--text-primary` | semantic | 57 | alert-item, amount, app-bar, big-total, brand-wordmark, button and 26 more |
| `--type-body` | primitive | 57 | alert-item, amount, app-bar, button, card, category-bars and 31 more |
| `--type-head` | primitive | 57 | brand-wordmark, landing-shell, landing-story, reveal-step, text-block |
| `--type-meta` | primitive | 57 | alert-item, app-bar, card, charge-list, chart-placeholder, eyebrow and 16 more |
| `--type-sub` | primitive | 57 | brand-wordmark, card, chart-placeholder, door, empty-block, label and 8 more |
| `--type-title` | primitive | 57 | detail-hero, faq-list, landing-facts, landing-orbit, landing-paths, landing-steps and 5 more |
| `--z-appbar` | primitive | 56 | app-bar |
| `--bg-hover` | semantic | 54 | alert-item, button, door, faq-list, nav-row, panel and 4 more |
| `--dur-press` | primitive | 54 | alert-item, button, checkbox, door, nav-row, preset-tile and 4 more |
| `--ease-state` | semantic | 54 | alert-item, button, chart-placeholder, checkbox, door, landing-steps and 8 more |
| `--panel` | primitive | 54 | alert-item, button, category-bars, chart-placeholder, checkbox, door and 15 more |
| `--panel-dark` | primitive | 54 | alert-item, button, category-bars, chart-placeholder, checkbox, door and 15 more |
| `--bg-recessed` | semantic | 51 | button, category-bars, chart-placeholder, checkbox, landing-facts, landing-orbit and 8 more |
| `--canvas-dark` | primitive | 50 | button, landing-final, landing-orbit, landing-shell, landing-steps, landing-story and 2 more |
| `--edge` | primitive | 50 | button, category-bars, door, preset-tile, select, text-input |
| `--edge-dark` | primitive | 50 | button, category-bars, door, preset-tile, select, text-input |
| `--radius-sm` | primitive | 50 | button, chart-placeholder, landing-facts, landing-plan, landing-story, logo and 5 more |
| `--line-control` | semantic | 49 | button, door, preset-tile, select, text-input |
| `--line-control-hover` | semantic | 49 | button, door, preset-tile, select, text-input |
| `--bg-action` | semantic | 44 | button, landing-steps |
| `--bg-action-strong` | semantic | 44 | button, checkbox |
| `--petrol-deep` | primitive | 44 | button, checkbox |
| `--petrol-deep-dark` | primitive | 44 | button, checkbox |
| `--text-on-action` | semantic | 44 | button |
| `--radius-xs` | primitive | 37 | category-bars, chip, logo, select, skeleton-bar |
| `--type-label` | primitive | 34 | chart-placeholder, chip, landing-orbit, landing-story, logo |
| `--petrol-tint` | primitive | 33 | chart-placeholder, chip, preset-tile, range-picker, trust-block |
| `--petrol-tint-dark` | primitive | 33 | chart-placeholder, chip, preset-tile, range-picker, trust-block |
| `--radius` | primitive | 33 | card, dialog-sheet, door, faq-list, landing-facts, landing-final and 8 more |
| `--line-selected` | semantic | 32 | landing-plan, preset-tile, tab-bar |
| `--tap-rail` | primitive | 29 | tab-bar |
| `--z-tabbar` | primitive | 29 | tab-bar |
| `--bg-chip-accent` | semantic | 28 | chip |
| `--bg-status` | semantic | 28 | chip |
| `--stone` | primitive | 28 | chip |
| `--stone-dark` | primitive | 28 | chip |
| `--stone-ink` | primitive | 28 | chip |
| `--stone-ink-dark` | primitive | 28 | chip |
| `--text-chip-accent` | semantic | 28 | chip |
| `--text-status` | semantic | 28 | chip |
| `--bg-placeholder` | semantic | 24 | logo, skeleton-bar |
| `--skeleton` | primitive | 24 | logo, skeleton-bar |
| `--skeleton-dark` | primitive | 24 | logo, skeleton-bar |
| `--bg-callout` | semantic | 22 | logo, wash-block |
| `--canvas` | primitive | 22 | landing-final, landing-orbit, landing-shell, landing-steps, landing-story, logo and 1 more |
| `--type-display` | primitive | 20 | amount, big-total |
| `--type-figure` | primitive | 20 | amount, big-total, landing-orbit, landing-story |
| `--bg-failure` | semantic | 17 | select, text-input, wash-block |
| `--clay` | primitive | 17 | form-field, select, text-input, wash-block |
| `--clay-dark` | primitive | 17 | form-field, select, text-input, wash-block |
| `--clay-wash` | primitive | 17 | select, text-input, wash-block |
| `--clay-wash-dark` | primitive | 17 | select, text-input, wash-block |
| `--text-failure` | semantic | 17 | form-field, wash-block |
| `--line-action-soft` | semantic | 13 | trust-block |
| `--grid-col-min` | primitive | 11 | grid |
| `--grid-gap` | semantic | 11 | grid |
| `--amber` | primitive | 9 | wash-block |
| `--amber-dark` | primitive | 9 | wash-block |
| `--amber-wash` | primitive | 9 | charge-list, wash-block |
| `--amber-wash-dark` | primitive | 9 | charge-list, wash-block |
| `--bg-attention` | semantic | 9 | charge-list, wash-block |
| `--radius-wash` | primitive | 9 | wash-block |
| `--soft` | semantic | 9 | wash-block |
| `--text-attention` | semantic | 9 | wash-block |
| `--dur-pulse` | primitive | 8 | skeleton-bar |
| `--line-failure` | semantic | 8 | select, text-input |
| `--shadow` | primitive | 8 | chart-placeholder, dialog-sheet, landing-final, landing-orbit, landing-paths, landing-plan and 2 more |
| `--bg-selected` | semantic | 6 | preset-tile, range-picker |
| `--chart-gutter` | semantic | 4 | chart-placeholder |
| `--chart-rule` | semantic | 4 | chart-placeholder |
| `--cx` | semantic | 4 | chart-placeholder |
| `--cy` | semantic | 4 | chart-placeholder |
| `--lx` | semantic | 4 | chart-placeholder |
| `--ly` | semantic | 4 | chart-placeholder |
| `--plot-area` | semantic | 4 | chart-placeholder |
| `--plot-line` | semantic | 4 | chart-placeholder |
| `--tipflip` | semantic | 4 | chart-placeholder |
| `--tipx` | semantic | 4 | chart-placeholder |
| `--control-accent` | semantic | 3 | checkbox |
| `--bg-measure` | semantic | 2 | category-bars |
| `--bg-page` | semantic | 1 | landing-final, landing-orbit, landing-shell, landing-steps, landing-story |
| `--curve-firm` | primitive | 1 | landing-orbit |
| `--deckhalf` | semantic | 1 | landing-orbit |
| `--ease-travel` | semantic | 1 | landing-orbit |
| `--ftravel` | semantic | 1 | landing-orbit |
| `--oph` | semantic | 1 | landing-orbit |
| `--osp` | semantic | 1 | landing-orbit |
| `--owidth` | semantic | 1 | landing-orbit |
| `--parx` | semantic | 1 | landing-orbit |
| `--pary` | semantic | 1 | landing-orbit |
| `--pb1` | semantic | 1 | landing-orbit |
| `--pb2` | semantic | 1 | landing-orbit |
| `--pb3` | semantic | 1 | landing-orbit |
| `--pbite` | semantic | 1 | landing-orbit |
| `--pblur` | semantic | 1 | landing-orbit |
| `--pfade` | semantic | 1 | landing-orbit, landing-story |
| `--pscale` | semantic | 1 | landing-orbit, landing-story |
| `--scardc` | semantic | 1 | landing-orbit |
| `--scardoff` | semantic | 1 | landing-orbit |
| `--scardslot` | semantic | 1 | landing-story |
| `--scardw` | semantic | 1 | landing-orbit |
| `--sglide` | semantic | 1 | landing-orbit |
| `--space-80` | primitive | 1 | landing-shell |
| `--space-96` | primitive | 1 | faq-list, landing-final, landing-orbit, landing-shell |
| `--srow-h` | semantic | 1 | landing-orbit, landing-story |
| `--stilt` | semantic | 1 | landing-story |
| `--story-gutter` | semantic | 1 | landing-orbit, landing-story |
| `--story-top` | semantic | 1 | landing-story |
| `--stravel` | semantic | 1 | landing-story |
| `--type-hero` | primitive | 1 | landing-hero |
| `--type-section` | primitive | 1 | landing-shell |
| `--type-step` | primitive | 1 | landing-steps |
| `--wash-final` | primitive | 1 | landing-final |
| `--wash-pricing` | primitive | 1 | landing-plan |

---

## What this map cannot see, said plainly

**The shell is the host.** `app-shell.css` styles `.app` and `.screen`, which are the frame the
map identifies everything else INSIDE. It is in the map on 56 screens only because the shell was
entered as a zone of its own; a class-based map that did not do that would report the product's
most widely worn component as standing on three screens. If you add a component that styles the
host rather than something in it, check it appears here before believing the map.

**Occurrences are not screens.** The "Pages in the product" column of `design/kit/docs/inventory.md`
counts OCCURRENCES across both corpora, grey and coloured; this map counts SCREENS in colour.
They are different questions and neither is wrong. Where a component's own css states its
footprint in a comment, that sentence is hand-written and is the largest structural debt in the
repository (`design/kit/docs/backlog.md`): `groups-column-set.css` still names `home-savefocus`,
a page retired on 2026-08-21. **This instrument computes that footprint**, which is a route out
of that debt and is offered rather than taken, since fixing 40 hand-written sentences is a change
to the system and this stage does not change the product.

---

## Writing a line for a screen that is not in this map yet

The map answers what stands where. It does not answer what to WRITE, and a person adding a
screen tomorrow needs both:

- **`voice/docs/voice.md`** is the binding voice: the principles, the tone by phase, the
  dictionary and the forbidden phrases. A new line obeys it or it is not shipped.
- **`voice/docs/microcopy.md`** is the inventory: one row per line, addressed by screen and
  zone. A new screen adds its rows there FIRST, and the screen file then carries them. No
  product line exists in two editions.
- The IA node in `ia/docs/nodes/` states what information the place needs, never the wording.

That order is the direct input to `handoff/docs/one-shot.md`, the prompt for adding a feature.
