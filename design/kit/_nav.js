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
  foundations: [
    { name: 'Architecture', file: 'architecture.html', page: 'architecture.html', note: 'the two ladders, naming, how to add a component' },
    { name: 'Colour',       file: 'color.html',        page: 'color.html',        note: 'primitive palette, semantic roles, contrast pairs, both themes' },
    { name: 'Typography',   file: 'typography.html',   page: 'typography.html',   note: 'the stack, the size scale, weights, line heights' },
    { name: 'Geometry',     file: 'geometry.html',     page: 'geometry.html',     note: 'spacing, radii, control sizes, the one elevation' },
    { name: 'Icons',        file: 'icons.html',        page: 'icons.html',        note: 'four destination masks, fourteen merchant marks, two drawn marks' }
  ],

  atoms: [
    { name: 'Amount',            cls: '.amt',          page: 'amount.html', was: null,                          axes: 'size by container: 14 / 32. 13.5 and 30 folded at step 5', wf: 69 },
    { name: 'Big total',         cls: '.total',        page: 'big-total.html', was: null,                          axes: 'size by container: 46 / 32. 40 folded at step 5',            wf: 8 },
    /* THE TWO BRAND ATOMS, 2026-08-12. `wf` counts GREY pages, and the mark's is
       0 on purpose rather than by oversight: it is the first component in this
       system that came from a DECISION instead of from the wireframes, and the
       grey corpus is frozen with no mark in it. It stands on 28 coloured screens.
       The wordmark's 54 is the real grey count, because the word was always
       there; what changed is how it is set. */
    { name: 'Brand mark',        cls: '.brand',        page: 'brand-mark.html', was: null,                          axes: 'window: crop A. B and C locked at Concept, no host in the product yet', wf: 0 },
    { name: 'Brand wordmark',    cls: '.wordmark',     page: 'brand-wordmark.html', was: null,                      axes: 'one setting, and the last letter is petrol with no condition (founder, 2026-08-12)', wf: 54 },
    { name: 'Button',            cls: '.btn',          page: 'button.html', was: null,                          axes: 'emphasis: fill / outline. inverse and compact both deleted 2026-08-12', wf: 85 },
    { name: 'Chart placeholder', cls: '.chart',        page: 'chart-placeholder.html', was: null,                          axes: '-',                                     wf: 4 },
    { name: 'Checkbox',          cls: '.check',        page: 'checkbox.html', was: '.switch input',                axes: '-',                                     wf: 2 },
    { name: 'Chip',              cls: '.chip',         page: 'chip.html', was: '.tag, .badge, .best, .plan',   axes: 'tone: quiet / trial / pro. cancelled has no wearer', wf: 36 },
    { name: 'Destination icon',  cls: '.ic-*',         page: 'destination-icon.html', was: null,                          axes: 'one per destination',                   wf: 112 },
    { name: 'Eyebrow',           cls: '.k',            page: 'eyebrow.html', was: '.num',                         axes: '-',                                     wf: 4 },
    { name: 'Label',             cls: '.lbl',          page: 'label.html', was: null,                          axes: 'weight: quiet 12 / strong 16',          wf: 3 },
    { name: 'Logo',              cls: '.logo',         page: 'logo.html', was: null,                          axes: 'size by container: 20 / 22 / 30 / 32 / 36 / 52', wf: 111 },
    { name: 'Meta row',          cls: '.metarow',      page: 'meta-row.html', was: '.axis, .strip',                axes: 'rule: plain / ruled',                   wf: 5 },
    { name: 'Muted line',        cls: '.muted',        page: 'muted-line.html', was: '.consequence, .context, .tone, .legal, .freshness, .removal, .pitch, p.notice, .p', axes: 'size: 12 / 12.5 / 13. rule: plain / ruled', wf: 48 },
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
    { name: 'Grid',              cls: '.grid',         page: 'grid.html', was: '.doors, .tiles, .plans',       axes: 'columns: 1 to 2 / 2 to 3 / 1 to 3. gap by child size', wf: 8 },
    { name: 'Groups column set', cls: '.groups',       page: 'groups-column-set.html', was: null,                          axes: 'columns: 2 at 900, 3 at 1340',          wf: 4 },
    { name: 'Panel',             cls: '.panel',        page: 'panel.html', was: null,                          axes: 'head: banded h2 / summary disclosure / headless',  wf: 7 },
    { name: 'Reveal step',       cls: '.rstep',        page: 'reveal-step.html', was: null,                          axes: '-',                                     wf: 1 },
    { name: 'Save-focus list',   cls: '.candidates',   page: 'save-focus-list.html', was: null,                          axes: '-',                                     wf: 1 },
    { name: 'Tab bar',           cls: '.tabbar',       page: 'tab-bar.html', was: null,                          axes: 'form: bottom bar / left rail at container 760', wf: 28 }
  ]
};

(function () {
  var N = window.KIT_NAV;
  var GROUPS = [
    { key: 'foundations', label: 'Foundations' },
    { key: 'atoms',       label: 'Atoms' },
    { key: 'molecules',   label: 'Molecules' },
    { key: 'organisms',   label: 'Organisms' }
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
      var open = mine || (cur === 'overview.html' && g.key === 'foundations');
      html += '<div class="kn-group' + (open ? ' is-open' : '') + '" data-group="' + g.key + '">';
      html += '<button class="kn-head" type="button" aria-expanded="' + open + '">' +
              '<span><span class="kn-caret">&rsaquo;</span> ' + esc(g.label) + '</span>' +
              '<span class="kn-count">' + built + '/' + items.length + '</span></button>';
      html += '<ul class="kn-list">';
      items.forEach(function (it) {
        var f = fileOf(it), isCur = (cur === f);
        if (it.page === null && !isCur) html += '<li><span class="kn-pending">' + esc(it.name) + '</span></li>';
        else html += '<li><a class="' + (isCur ? 'current' : '') + '" href="' + f + '">' + esc(it.name) + '</a></li>';
      });
      html += '</ul></div>';
    });
    return html;
  }

  function mount() {
    var el = document.getElementById('kit-nav');
    if (el) {
      el.innerHTML = build();
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
