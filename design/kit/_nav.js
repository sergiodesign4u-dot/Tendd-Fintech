/* Tendd Design System - the kit's own side panel, and the single registry of the system.
   Separate from the project roadmap in /_nav.js: that one lists stages, this one lists the
   material. Same two-level pattern as wireframes/_nav.js and design/_nav.js, own namespace
   (KIT_NAV), so a hub page can load both without either overwriting the other.

   ONE SOURCE. The hub reads this array to draw its cards and the panel reads it to draw its
   links, so a component cannot appear in one and not the other. Adding a component is one row
   here plus its css, its page, its inventory line and its @import: five things, and this file
   is the one that makes it visible.

   `page: null` means the page is not built yet: the panel renders it as plain text rather than
   as a dead link, the same rule the project registry uses for a stage with no page.

   Levels are read from design/kit/docs/inventory.md and are never re-derived here. They decide
   four orders downstream: consolidation, the build rounds, the @import order in
   system/index.css, and the groups below. */

window.KIT_NAV = {
  /* THE SYSTEM'S OWN DOCUMENTS, AND THEY ARE A GROUP LIKE ANY OTHER SINCE
     2026-08-13. Founder: "when you click there it should be built into the design
     system itself, maybe as a System section holding all of it."

     Until today these two pages were the only ones in design/kit/ that carried the
     PROJECT roadmap instead of this panel, because they are also the roadmap rows
     of stages 09 and 08. So clicking Design System in the roadmap landed you on a
     page that looked like the roadmap, and the system itself was somewhere else
     again: the material was one click further, behind a link in the body. A stage
     whose material has its own registry is better read from inside that registry,
     with the roadmap carried back at the foot of the panel.

     Width is deliberately NOT repeated here even though it is the roadmap page of
     stage 10: it is a foundation of this system before it is a stage document, and
     one page in two groups of one panel is a second entrance to one room. */
  system: [
    { name: 'Why the system is like this', file: 'why.html', page: 'why.html', note: 'the guide: why it looks like this, how to use it, how to grow it' },
    { name: 'Tokens and components',       file: 'overview.html', page: 'overview.html', note: 'the account of stage 08, its steps and the whole material as cards' }
  ],

  foundations: [
    { name: 'Architecture', file: 'architecture.html', page: 'architecture.html', note: 'the two ladders, naming, how to add a component' },
    { name: 'Colour',       file: 'color.html',        page: 'color.html',        note: 'primitive palette, semantic roles, contrast pairs, both themes' },
    { name: 'Typography',   file: 'typography.html',   page: 'typography.html',   note: 'the stack, the size scale, weights, line heights' },
    { name: 'Geometry',     file: 'geometry.html',     page: 'geometry.html',     note: 'spacing, radii, control sizes, the one elevation' },
    /* WIDTH STANDS AFTER GEOMETRY AND NOT AT THE END OF THE GROUP: width is
       geometry, and the two points, the containers and the grid floor read
       beside the radii and the spacing rather than in a room of their own. It is
       also the roadmap page of stage 10, and since 2026-08-13 that costs it
       nothing: it carries this panel like every other page of the stand, and the
       project comes back at the foot of the panel. */
    { name: 'Width',        file: 'responsive.html',   page: 'responsive.html',   note: 'two points, the containers, the reading measure, the grid floor' },
    { name: 'Icons',        file: 'icons.html',        page: 'icons.html',        note: 'four destination masks, fourteen merchant marks, two drawn marks' },
    /* MOTION STANDS LAST AND IT IS A FOUNDATION RATHER THAN A STAGE DOCUMENT, on the
       same grounds Width was let in: a thing a screen is built out of belongs here even
       while the stage that produced it is still running. It is the roadmap row of stage
       11 and that costs it nothing, because this panel is what every page of the stand
       carries and the project comes back at the panel's foot. The note says census
       rather than scale on purpose: on 2026-08-16 this page holds what moves, not yet
       what should. */
    { name: 'Motion',       file: 'motion.html',       page: 'motion.html',       note: 'four curves and five jobs, two durations, and one state change: colour over 150ms' }
  ],

  atoms: [
    { name: 'Amount',            cls: '.amt',          page: 'amount.html', was: null,                          axes: 'size: 14 / 32 / 46, a declared modifier at each step', wf: 69 },
    { name: 'Big total',         cls: '.total',        page: 'big-total.html', was: null,                          axes: 'size by container: 46 / 32. 40 folded at step 5',            wf: 8 },
    /* THE TWO BRAND ATOMS, 2026-08-12. `wf` counts GREY pages, and the mark's is
       0 on purpose rather than by oversight: it is the first component in this
       system that came from a DECISION instead of from the wireframes, and the
       grey corpus is frozen with no mark in it. It stands on 28 coloured screens.
       The wordmark's 54 is the real grey count, because the word was always
       there; what changed is how it is set. */
    { name: 'Brand mark',        cls: '.brand',        page: 'brand-mark.html', was: null,                          axes: 'window: crop A. B and C locked at Concept, no host in the product yet', wf: 0 },
    { name: 'Brand wordmark',    cls: '.wordmark',     page: 'brand-wordmark.html', was: null,                      axes: 'size: bar / large. the last letter is petrol with no condition (founder, 2026-08-12)', wf: 54 },
    { name: 'Button',            cls: '.btn',          page: 'button.html', was: null,                          axes: 'emphasis: fill / outline. inverse and compact both deleted 2026-08-12', wf: 85 },
    { name: 'Chart placeholder', cls: '.chart',        page: 'chart-placeholder.html', was: null,                          axes: '-',                                     wf: 4 },
    { name: 'Checkbox',          cls: '.check',        page: 'checkbox.html', was: '.switch input',                axes: '-',                                     wf: 2 },
    { name: 'Chip',              cls: '.chip',         page: 'chip.html', was: '.tag, .badge, .best, .plan',   axes: 'tone: quiet / trial / pro. cancelled has no wearer', wf: 36 },
    { name: 'Destination icon',  cls: '.ic-*',         page: 'destination-icon.html', was: null,                          axes: 'one per destination',                   wf: 112 },
    { name: 'Eyebrow',           cls: '.k',            page: 'eyebrow.html', was: '.num',                         axes: '-',                                     wf: 4 },
    { name: 'Label',             cls: '.lbl',          page: 'label.html', was: null,                          axes: 'weight: quiet 12 / strong 16',          wf: 3 },
    { name: 'Logo',              cls: '.logo',         page: 'logo.html', was: null,                          axes: 'size by container: 20 / 22 / 30 / 32 / 36 / 52', wf: 111 },
    { name: 'Meta row',          cls: '.metarow',      page: 'meta-row.html', was: '.axis, .strip',                axes: 'rule: plain / ruled',                   wf: 5 },
    { name: 'Muted line',        cls: '.muted',        page: 'muted-line.html', was: '.consequence, .context, .tone, .legal, .freshness, .removal, .pitch, p.notice, .p', axes: 'size: body / fine. rule: plain / ruled', wf: 48 },
    { name: 'Quiet line',        cls: '.quiet',        page: 'quiet-line.html', was: null,                          axes: '-',                                     wf: 12 },
    { name: 'Readout',           cls: '.readout',      page: 'readout.html', was: null,                          axes: '-',                                     wf: 2 },
    { name: 'Select',            cls: '.select',       page: 'select.html', was: '.field select',                axes: '-',                                     wf: 4 },
    { name: 'Skeleton bar',      cls: '.skel',         page: 'skeleton-bar.html', was: null,                          axes: 'width set, and one height for the total', wf: 89 },
    { name: 'Step-forward link', cls: '.next',         page: 'step-forward-link.html', was: null,                          axes: '-',                                     wf: 2 },
    { name: 'Text input',        cls: '.input',        page: 'text-input.html', was: '.field input',                 axes: 'type: text / email / search. content: plain / money',  wf: 8 }
  ],

  molecules: [
    { name: 'Action row',        cls: '.actions',      page: 'action-row.html', was: '.secondary',                   axes: '-',                                     wf: 42 },
    { name: 'Alert item',        cls: '.alert',        page: 'alert-item.html', was: null,                          axes: 'content: with prices / with unread dot', wf: 2 },
    { name: 'Charge list',       cls: '.charges',      page: 'charge-list.html', was: null,                          axes: 'state: marked',                         wf: 5 },
    { name: 'Detail hero',       cls: '.hero',         page: 'detail-hero.html', was: null,                          axes: '-',                                     wf: 6 },
    { name: 'Door',              cls: '.door',         page: 'door.html', was: null,                          axes: 'content: with a pick line / without',   wf: 4 },
    { name: 'Form field',        cls: '.field',        page: 'form-field.html', was: null,                          axes: 'host: div / form (the search)',         wf: 8 },
    { name: 'Group head',        cls: '.group-head',   page: 'group-head.html', was: null,                          axes: 'rule: banded / plain',                  wf: 16 },
    { name: 'Merchant chip group', cls: '.rgroup',     page: 'merchant-chip-group.html', was: null,                          axes: '-',                                     wf: 1 },
    { name: 'Nav row',           cls: '.navrow',       page: 'nav-row.html', was: null,                          axes: '-',                                     wf: 2 },
    { name: 'Numbered steps',    cls: '.steps',        page: 'numbered-steps.html', was: null,                          axes: '-',                                     wf: 3 },
    { name: 'Pair list',         cls: '.pairs',        page: 'pair-list.html', was: '.facts, .unlocks',             axes: 'markup: dt/dd / span. content: values / sentences', wf: 19 },
    { name: 'Plan option',       cls: '.plan-opt',     page: 'plan-option.html', was: null,                          axes: 'host: app / landing',                   wf: 2 },
    { name: 'Preset tile',       cls: '.tile',         page: 'preset-tile.html', was: null,                          axes: 'state: pressed',                        wf: 2 },
    { name: 'Promise list',      cls: '.promises',     page: 'promise-list.html', was: null,                          axes: '-',                                     wf: 3 },
    { name: 'Range picker',      cls: '.range',        page: 'range-picker.html', was: null,                          axes: 'availability x selection: rest / pressed / disabled / disabled+pressed', wf: 3 },
    { name: 'Save-focus candidate', cls: '.cand',      page: 'save-focus-candidate.html', was: null,                          axes: '-',                                     wf: 1 },
    { name: 'Share card',        cls: '.sharecard',    page: 'share-card.html', was: null,                          axes: '-',                                     wf: 2 },
    { name: 'Subscription row',  cls: '.row',          page: 'subscription-row.html', was: null,                          axes: 'state: skeleton. host: list / candidate', wf: 8 },
    { name: 'Summary',           cls: '.summary',      page: 'summary.html', was: null,                          axes: 'content: with a total / without',       wf: 5 },
    { name: 'Switch row',        cls: '.switch',       page: 'switch-row.html', was: null,                          axes: '-',                                     wf: 2 },
    { name: 'Text block',        cls: '.textblock',    page: 'text-block.html', was: '.lede, .state',                axes: 'scope: page 24 / block 20 / inset 16',  wf: 44 },
    { name: 'Trust block',       cls: '.trust',        page: 'trust-block.html', was: null,                          axes: '-',                                     wf: 11 },
    { name: 'Wash block',        cls: '.wash',         page: 'wash-block.html', was: '.attention, .notice, .decoder', axes: 'tone: neutral / attention / error / code. content: with an arrow / without', wf: 13 }
  ],

  organisms: [
    { name: 'App bar',           cls: '.appbar',       page: 'app-bar.html', was: null,                          axes: 'form: row / column rail at container 760', wf: 54 },
    { name: 'App shell',         cls: '.app',          page: 'app-shell.html', was: null,                          axes: 'form: steady / flow / detail',          wf: 54 },
    { name: 'Card',              cls: '.card',         page: 'card.html', was: '.locked, .source',             axes: '-',                                     wf: 3 },
    { name: 'Category group',    cls: '.group',        page: 'category-group.html', was: null,                          axes: '-',                                     wf: 12 },
    { name: 'Dashboard head',    cls: '.head',         page: 'dashboard-head.html', was: null,                          axes: 'exists only at container 900',          wf: 5 },
    { name: 'Dialog sheet',      cls: '.sheet',        page: 'dialog-sheet.html', was: null,                          axes: 'full width, then a card at container 760', wf: 3 },
    { name: 'Divided list',      cls: '.divlist',      page: 'divided-list.html', was: '.alerts, .navrows',            axes: 'inset: bare / inside a panel',          wf: 4 },
    { name: 'Empty block',       cls: '.empty',        page: 'empty-block.html', was: null,                          axes: '-',                                     wf: 2 },
    /* THE SEVEN PUBLIC-PAGE ORGANISMS. Five arrived on 2026-08-14 at the rollout,
       and they were the only things the landing needed that the system did not
       already have: 48 of the 57 components at that date already answered to
       `.landing`. The landing window arrived later the same day, on the founder's
       decision to make the hero move, and the cut list with it, when the same
       decision grew a second half. Each stands on exactly one grey page and
       one coloured one, because the landing is the only public surface this
       product has, and that is a fact about the product rather than a thin
       count. */
    { name: 'FAQ list',          cls: '.lp-faq',       page: 'faq-list.html', was: null,                          axes: '-',                                     wf: 1 },
    { name: 'Grid',              cls: '.grid',         page: 'grid.html', was: '.doors, .tiles, .plans',       axes: 'columns: 1 to 2 / 2 to 3 / 1 to 3. gap by child size', wf: 8 },
    { name: 'Landing bar',       cls: '.lp-nav',       page: 'landing-bar.html', was: null,                          axes: 'links: hidden / shown at container 760', wf: 1 },
    { name: 'Landing hero',      cls: '.lp-h1',        page: 'landing-hero.html', was: null,                          axes: 'the promise\'s type, no box',            wf: 1 },
    { name: 'Landing shell',     cls: '.landing',      page: 'landing-shell.html', was: null,                          axes: 'band: canvas / surface. final: centred', wf: 1 },
    { name: 'Landing orbit',     cls: '.lp-orbit',     page: 'landing-orbit.html', was: null,                          axes: 'column / spread at container 1152',     wf: 1 },
    { name: 'Landing story',     cls: '.lp-story',     page: 'landing-story.html', was: '.lp-window, .lp-cut',          axes: 'cards: over the list / beside it at container 1280', wf: 1 },
    { name: 'Landing steps',     cls: '.lp-steps',     page: 'landing-steps.html', was: null,                          axes: 'one rail, three ordinals, three pictures of the product', wf: 1 },
    { name: 'Landing paths',     cls: '.lp-paths',     page: 'landing-paths.html', was: null,                          axes: 'two doors, each ajar on the screen it opens', wf: 1 },
    { name: 'Landing facts',     cls: '.lp-facts',     page: 'landing-facts.html', was: '.lp-trust ul',                axes: 'four claims, three of them beside their own proof', wf: 1 },
    { name: 'Landing plan',      cls: '.lp-plan',      page: 'landing-plan.html', was: null,                          axes: 'one plan, three ways to pay, on the page\'s one wash', wf: 1 },
    { name: 'Landing final',     cls: '.lp-final',     page: 'landing-final.html', was: null,                         axes: 'the last word, on a sheet, on a horizon', wf: 1 },
    { name: 'Groups column set', cls: '.groups',       page: 'groups-column-set.html', was: null,                          axes: 'columns: from a 300px floor, capped at three',          wf: 4 },
    { name: 'Panel',             cls: '.panel',        page: 'panel.html', was: null,                          axes: 'head: banded h2 / summary disclosure / headless',  wf: 7 },
    { name: 'Reveal step',       cls: '.rstep',        page: 'reveal-step.html', was: null,                          axes: '-',                                     wf: 1 },
    { name: 'Save-focus list',   cls: '.candidates',   page: 'save-focus-list.html', was: null,                          axes: '-',                                     wf: 1 },
    { name: 'Site footer',       cls: '.lp-footer',    page: 'site-footer.html', was: null,                          axes: 'form: two columns / four at container 760, and a bar at the foot', wf: 1 },
    { name: 'Tab bar',           cls: '.tabbar',       page: 'tab-bar.html', was: null,                          axes: 'form: bottom bar / left rail at container 760', wf: 28 }
  ],

  /* THE FOURTH SHELF, STAGE 09, AND IT IS AFTER ORGANISMS RATHER THAN ANYWHERE
     ELSE. The panel has to read in the same ladder the system is assembled in,
     because that ladder is also the @import order in system/index.css: patterns
     are imported after every component, since a pattern is assembled from them
     and has to be able to correct the rhythm between them.

     `wf` counts GREY pages, as everywhere in this registry, and for a pattern it
     is the count that decides whether it exists at all: three screens or more,
     counted on wireframes/, where the whole product is. The coloured count is on
     each pattern's own page and it is smaller on all three, because the rollout
     is stage 12. */
  patterns: [
    { name: 'Patterns',      file: 'patterns.html', page: 'patterns.html', note: 'when to take a pattern and when the components, the three-screen threshold, the four candidates waiting' },
    /* Four hosts since 2026-08-13, not three: the list column joined them on
       alerts-error, the first screen built after the pattern was written. */
    { name: 'Interruption',  cls: '.interruption',  page: 'interruption.html',  was: null, axes: 'host: screen / detail column / dialog sheet / list column. 12 screens', wf: 16 },
    /* `file` is written out here and nowhere else in this group, because the
       renderer derives a filename from the NAME when it is absent, and "Action
       foot" would derive `action-foot.html`. The page is named after the class,
       `.act-foot`, which is the rule the other 60 pages follow too. Without this
       line the panel simply fails to highlight the page you are standing on. */
    { name: 'Action foot',   cls: '.act-foot', file: 'act-foot.html', page: 'act-foot.html', was: null, axes: 'line: consequence (.muted) / exit (.quiet). 8 screens',  wf: 17 },
    { name: 'List column',   cls: '.rows-col',      page: 'list-column.html',   was: null, axes: 'one measure, 620 from the 760 container. 4 screens',     wf: 9 }
  ],

  /* NOT PART OF THE SYSTEM, AND THAT IS WHY IT IS ITS OWN GROUP AT THE END rather
     than another foundation. Foundations are things a screen is built OUT OF; this
     is evidence ABOUT what was built, and filing it beside Colour would say the
     system contains its own audit. Step 9, 2026-08-12. */
  verification: [
    { name: 'The proof', file: 'pixel-proof.html', page: 'pixel-proof.html', note: 'the pixel comparison, the critique by class with who found it, and the three numbers still open' }
  ]
};

(function () {
  var N = window.KIT_NAV;
  var GROUPS = [
    { key: 'system',      label: 'System' },
    { key: 'foundations', label: 'Foundations' },
    { key: 'atoms',       label: 'Atoms' },
    { key: 'molecules',   label: 'Molecules' },
    { key: 'organisms',   label: 'Organisms' },
    { key: 'patterns',    label: 'Patterns' },
    { key: 'verification', label: 'Verification' }
  ];

  function here() { return location.pathname.split('/').pop() || 'overview.html'; }
  function fileOf(it) { return it.file || (it.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.html'); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  /* THE THEME LIVES ON <html>, and it is chosen before first paint by an inline
     script in the page head, not here: a toggle that runs after the stylesheet
     has painted shows the wrong theme for one frame on every load. This function
     only switches and remembers.

     THE BUTTONS SAY data-set-theme AND NOT data-theme, and the rename is the
     first fix of the dark stress test rather than a preference. `data-theme` is
     a STYLE HOOK: tokens.css and _page.css both declare `[data-theme="dark"]`
     unscoped, on purpose, so a theme can be pinned to a SUBTREE and color.html
     can stand both themes side by side. A button carrying `data-theme="dark"`
     to tell this function what to do therefore also told the stylesheet that
     the button IS a dark subtree, and it took the dark chrome palette in both
     themes: measured before the fix, the Dark button's label was #b1bdc0 on the
     white panel at 1.92:1, unreadable in the DEFAULT theme since step 4, and its
     border 1.35:1 on the dark panel. One attribute name, two meanings, and the
     one control the whole theme depends on was the one it broke. Scoping the CSS
     to `:root[data-theme]` would have fixed this instance and killed the pinned
     samples on color.html; renaming the handle fixes the class. */
  function setTheme(t) {
    if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    try { localStorage.setItem('tendd-kit-theme', t); } catch (e) {}
    var bs = document.querySelectorAll('.kit-theme button');
    for (var i = 0; i < bs.length; i++) bs[i].setAttribute('aria-pressed', String(bs[i].dataset.setTheme === t));
  }
  window.KIT_SET_THEME = setTheme;

  /* THE SECTIONS OF THE PAGE YOU ARE STANDING ON, under its own row, 2026-08-13.

     `window.NAV_SECTIONS` is PAGE data and not registry data, which is why reading
     it here breaks no namespace: /_nav.js owns NAV and NAV_BASE, a page owns its
     own sections, and either renderer may show them. It is declared on the three
     documents of this system and on no component page, so this list appears
     exactly where there is something long enough to need it.

     Without it the swap of 2026-08-13 would have been a loss: the roadmap showed
     "Step 1, the audit ... The material" under the stage row, and moving those
     pages into this panel would have taken that away. The panel now shows what the
     roadmap showed, in the place the founder asked for it. */
  function sections() {
    var S = window.NAV_SECTIONS || [];
    if (!S.length) return '';
    var h = '<ul class="kn-sections">';
    S.forEach(function (s) {
      h += '<li><a class="kn-section" data-section="' + s.id + '" href="#' + s.id + '">' + esc(s.label) + '</a></li>';
    });
    return h + '</ul>';
  }

  /* The same reading position the roadmap marks, marked the same way. Copied in
     behaviour and not in code: /_nav.css owns the roadmap's look and this file owns
     the panel's, so the class is kn-section and the rule lives in _page.css. */
  function watchSections() {
    var S = window.NAV_SECTIONS || [];
    if (!S.length || !('IntersectionObserver' in window)) return;
    var links = {};
    Array.prototype.forEach.call(document.querySelectorAll('.kn-section'), function (a) {
      links[a.getAttribute('data-section')] = a;
    });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        Object.keys(links).forEach(function (k) { links[k].classList.remove('is-current'); });
        if (links[e.target.id]) links[e.target.id].classList.add('is-current');
      });
    }, { rootMargin: '-15% 0px -75% 0px' });
    S.forEach(function (s) { var t = document.getElementById(s.id); if (t) obs.observe(t); });
  }

  function build() {
    var cur = here(), html = '';
    GROUPS.forEach(function (g) {
      var items = N[g.key] || [];
      if (!items.length) return;
      var mine = items.some(function (it) { return fileOf(it) === cur; });
      var built = items.filter(function (i) { return i.page !== null; }).length;
      /* the accordion opens the group you are standing in, and only that one.
         On the hub, where you stand in none, Foundations opens: it is the group
         the system is read from. */
      /* THE ACCORDION OPENS THE GROUP YOU STAND IN, AND `system` ON TOP OF THAT.
         It is the exception and it is two rows: the guide and the account of the
         stage, which are the way IN to everything below them. They used to be a
         link in the panel head and a link in its foot, on 72 pages each; as a
         group that is always open they are one thing in one place, and the two
         duplicates are deleted rather than left beside it. */
      var open = mine || g.key === 'system';
      html += '<div class="kn-group' + (open ? ' is-open' : '') + '" data-group="' + g.key + '">';
      html += '<button class="kn-head" type="button" aria-expanded="' + open + '">' +
              '<span><span class="kn-caret">&rsaquo;</span> ' + esc(g.label) + '</span>' +
              '<span class="kn-count">' + built + '/' + items.length + '</span></button>';
      html += '<ul class="kn-list">';
      items.forEach(function (it) {
        var f = fileOf(it), isCur = (cur === f);
        if (it.page === null && !isCur) { html += '<li><span class="kn-pending">' + esc(it.name) + '</span></li>'; return; }
        html += '<li><a class="' + (isCur ? 'current' : '') + '" href="' + f + '">' + esc(it.name) + '</a>' +
                (isCur ? sections() : '') + '</li>';
      });
      html += '</ul></div>';
    });
    return html;
  }

  /* THE PROJECT, AT THE FOOT OF THE MATERIAL. The stage list comes from window.NAV,
     which every page of the stand loads for this one purpose, and the renderer in
     /_nav.js does nothing here: it returns on its first line when it finds no
     #sidebar, so that file is a registry on this stand and a renderer only on a
     roadmap page. This is what makes the swap of 2026-08-13 cost nothing: the three
     pages that used to show the roadmap show the system instead, and the roadmap is
     still one glance away from every page of it.

     WHERE YOU ARE is matched on the tail of the PATH and never on the file name.
     `overview.html` is the file name of this system's hub and of the wireframes
     hub, and a basename comparison marked Wireframes as the stage you were standing
     in while you stood in the system. Every page of the stand that names no stage of
     its own belongs to Design System, which is the stage that owns this folder;
     responsive.html is the exception, because it is also the roadmap page of stage
     10 and says so itself. */
  function mountProject() {
    var el = document.getElementById('kit-nav');
    if (!el || !window.NAV || el.querySelector('.kn-project')) return;
    var base = window.NAV_BASE || '../../';
    var cur = here(), path = location.pathname;
    var box = document.createElement('div');
    box.className = 'kn-project';
    var h = document.createElement('span');
    h.className = 'kn-project-head';
    h.textContent = 'The project';
    box.appendChild(h);
    var ul = document.createElement('ul');
    ul.className = 'kn-project-list';
    window.NAV.forEach(function (item) {
      var pages = (item.children || [item]).filter(function (c) { return c.page; });
      var target = pages[0] || null;
      var mine = pages.some(function (p) { return path.slice(-p.page.length) === p.page; }) ||
                 (cur !== 'responsive.html' && item.label === 'Design System');
      var li = document.createElement('li');
      var a = document.createElement(target ? 'a' : 'span');
      if (target) a.href = base + target.page;
      a.className = 'kn-project-link' + (mine ? ' is-here' : '');
      a.textContent = item.label;
      if (!pages.length) {
        var s = document.createElement('span');
        s.className = 'kn-project-soon';
        s.textContent = 'soon';
        a.appendChild(s);
      }
      li.appendChild(a); ul.appendChild(li);
    });
    box.appendChild(ul);
    el.appendChild(box);
  }

  function mount() {
    var el = document.getElementById('kit-nav');
    if (el) {
      el.innerHTML = build();
      mountProject();
      watchSections();
      el.addEventListener('click', function (e) {
        var b = e.target.closest ? e.target.closest('.kn-head') : null;
        if (!b) return;
        var g = b.parentNode, open = g.classList.toggle('is-open');
        b.setAttribute('aria-expanded', String(open));
      });
    }
    var t = document.querySelector('.kit-theme');
    if (t) t.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('button[data-set-theme]') : null;
      if (b) setTheme(b.dataset.setTheme);
    });
    var stored = 'light';
    try { stored = localStorage.getItem('tendd-kit-theme') || 'light'; } catch (e) {}
    setTheme(stored);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
