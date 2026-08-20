// _nav.js : the single navigation registry of the whole project.
// One source of truth for the side panel of EVERY page.
// Added a page? Add a row to NAV and set done:true when it is ready.
// active / Next / SOON, the accordion and the links are computed at render time.
//
// Every html page wires it in like this:
//   <link rel="stylesheet" href="../_nav.css">
//   <aside id="sidebar"></aside>
//   <script>
//     window.NAV_BASE = '../';                 // prefix to the repo root ('' at the root, '../' one level down)
//     window.NAV_SECTIONS = [                   // sections of THIS page, for sub links under the active stage; may be []
//       { id:'intro', label:'Introduction' },
//     ];
//     window.NAV_ACTIVE = 'ia/structure.html';  // OPTIONAL: for pages that are NOT in NAV (an IA node page,
//                                               // a color seed copy in design/). Name the NEAREST registry page: the page
//                                               // shows up as its own sub item right under it
//     window.NAV_ACTIVE_LABEL = 'Home (0.0)';   // OPTIONAL, paired with NAV_ACTIVE: how to label that sub item.
//   </script>                                  // Not set: document.title is used
//   <script src="../_nav.js"></script>
//
// THE GLOBALS BELONG TO THIS FILE. Per-stage registries (ia/_nav.js, wireframes/_nav.js,
// design/_nav.js, design/kit/_nav.js) keep their data in their OWN namespace
// (IA_NAV, WF_NAV, DESIGN_NAV, KIT_NAV) and never touch NAV, NAV_BASE, NAV_SECTIONS,
// NAV_ACTIVE, NAV_ACTIVE_LABEL or the nav-* classes. Hub pages (ia/structure.html, wireframes/overview.html,
// design/overview.html, design/kit/overview.html) load two registries at once:
// if a local one declared window.NAV, the roadmap would silently render the wrong array.
//
// SINCE 2026-08-13 EVERY PAGE OF design/kit/ LOADS THIS FILE TOO, and on all but four of
// them this file draws NOTHING: the renderer below returns on its first line when it finds
// no #sidebar, so what those pages get is the REGISTRY and not the roadmap. They read
// window.NAV to draw a way back into the project at the foot of the system's own panel,
// and the drawing is done by design/kit/_nav.js in the kn-* namespace, never here. This
// file still knows nothing about components, and that is the point of the arrangement.

// Groups (children) have no page of their own: the top link is computed from the children and
// points at the first READY page of the group, so it never points at a file that does not exist yet.
window.NAV = [
  { label:'Foundation Research', page:'research/research.html', done:true },
  { label:'User Research', children:[
      { label:'Personas',  page:'research/personas.html',  done:true },
      { label:'JTBD',      page:'research/jtbd.html',      done:true },
      { label:'CJM As-Is', page:'research/cjm-as-is.html', done:true },
      { label:'CJM To-Be', page:'research/cjm-to-be.html', done:true },
  ]},
  { label:'Information Architecture (IA)', children:[
      { subhead:'Base layer' },
      { label:'Flows',        page:'ia/flows.html',       done:true },
      { label:'Concept map',  page:'ia/concept-map.html', done:true },
      { subhead:'Detail layer' },
      { label:'Sitemap',      page:'ia/sitemap.html',     done:true },
      { label:'Structure',    page:'ia/structure.html',   done:true },
      { label:'Accessibility', page:'ia/accessibility.html', done:true },
  ]},
  { label:'Wireframes',  page:'wireframes/overview.html', done:true },
  { label:'Voice',       page:'voice/voice.html',         done:true },
  { label:'Concept', children:[
      { label:'Directions', page:'design/concept/directions.html', done:true },
      { label:'Concept',    page:'design/concept/concept.html',    done:true },
  ]},
  { label:'UI + Visual',         page:'design/overview.html',     done:true },
  // Tokens + Components and Design System were two rows until 2026-08-11 and are one now.
  // They were never two destinations: both led into design/kit/, one to the tokens and one to
  // the reasons behind them, and a roadmap row whose page is a section of another row's page is
  // a second entrance to one room. The stages behind it stay two (tokens and components here,
  // patterns next); what the sidebar shows is the one place they live. The component list is
  // NOT in this registry: it is the kit's own panel, design/kit/_nav.js, on the same two-level
  // pattern as wireframes/ and design/. A roadmap that listed 55 components would stop being a
  // roadmap.
  // done:true from 2026-08-13, and it flipped exactly as the note here said it would:
  // with no new row. The row was one and the stages behind it were two, tokens and
  // components at stage 08 and patterns at stage 09; the second one closed today, so the
  // row closed with it. What "done" covers: two token levels, 64 components, 3 patterns,
  // 11 usage rules, the growth rule written into four files, and one product screen
  // (design/alerts.html) built out of the system to prove it stands on its own.
  //
  // The page moved from design/kit/overview.html to why.html on 2026-08-13, and the row
  // did not: it is still ONE row, which is the whole point of the 2026-08-11 decision
  // above. What changed is which page it opens on. overview.html is the ACCOUNT of stage
  // 08, written in its own steps; why.html is the guide to the system, and it is what a
  // person who did not build it needs first: why it looks like this, how to use it, how
  // to grow it.
  //
  // AND THE PAGE IT OPENS ON NO LONGER RENDERS THIS ROADMAP, same day, founder: "it
  // should be built into the design system itself." why.html, overview.html and
  // responsive.html carry the system's own panel now, where the first two are its System
  // group and the third is Width in Foundations, and this roadmap comes back at the foot
  // of that panel. So this row still points where it pointed; what changed is that
  // arriving there puts you INSIDE the material instead of beside it. NAV_ACTIVE is no
  // longer used by any of the three, because none of them renders a sidebar to hint at.
  { label:'Design System',       page:'design/kit/why.html', done:true },
  { label:'Responsive',          page:'design/kit/responsive.html', done:true },
  // ANIMATION TOOK A PAGE ON 2026-08-16, AT ITS OWN STEP 1, and it was the first row in this
  // registry to use `ready` for what `ready` was written for: the stage was unfinished, `done`
  // stayed false so the badge and the state class were honest, and `ready` made the row a LINK
  // while it ran, because the census it opened on was the thing most worth reading during the
  // stage rather than after it. Like Design System and Responsive, the page carries the
  // system's own panel rather than this roadmap, and the roadmap comes back at the foot of it.
  //
  // CLOSED 2026-08-17, by the founder, after the page was walked. `ready` is left in place
  // rather than deleted: it costs nothing beside `done:true`, and the next stage that wants to
  // publish a page mid-flight has the precedent in front of it instead of in the git history.
  { label:'Animation',           page:'design/kit/motion.html', ready:true, done:true },
  // ROLLOUT WAS MISSING FROM THIS REGISTRY AND FROM THE README UNTIL 2026-08-13,
  // and it was found at stage 10 rather than at stage 12, which is the only
  // reason it cost nothing. The stage that builds the rest of the product in
  // colour is the main consumer of everything stage 10 produces: the audit row
  // per screen, the ban on a width rule in a screen file, the width column of
  // the inventory. A consumer with no row in either owner of status is a stage
  // that nothing schedules and nobody checks off. Founder, 2026-08-13.
  //
  // IT TOOK A PAGE ON 2026-08-17, on the same `ready` the animation row used and for
  // the same reason: the screens of this stage have been on disk since before it opened,
  // so the thing worth reading during it is the ACCOUNT of them, and a row with no link
  // hides that until the stage ends. `done` stays false until the founder walks the page,
  // which is how stage 11 closed. The page is design/rollout.html rather than a page under
  // design/kit/, because this stage's material is the SCREENS and the kit's is the system;
  // it carries the project roadmap, the way design/overview.html does, since the coloured
  // screen registry is the panel of a screen and not of a stage account.
  //
  // CLOSED 2026-08-17, by the founder, the same day it took the page: "давай ставим
  // done:true". `ready` is left beside `done` exactly as the animation row left it, and
  // for the record it made the row a link for about four hours rather than a stage.
  //
  // WHAT "done" COVERS HERE, because this stage's screens were built before it opened and
  // the word could be read as covering them: the ACCOUNT. 58 grey pages paired against 55
  // coloured with no orphan on either side, an audit row per screen measured at 360 and
  // 1440, the four-part ban re-proved on all 55 files, the inventory's width column
  // recounted on 72 entries, and eight rows addressed to the stage closed - three of them
  // by measuring rather than by fixing. Three things are left to the founder and none of
  // them is a defect: a skip link, a rename, and one line to revert the dialog sheet's 480.
  { label:'Rollout',             page:'design/rollout.html', ready:true, done:true },
  // HANDOFF HAS A PAGE FROM 2026-08-18, and `ready` beside `done` exactly as the two
  // rows above it left it: the page exists and the stage is not closed, which is the
  // one state this registry can say out loud. What the page reports is the census, the
  // LIFT TEST - design/system/ copied into an empty directory and used to assemble a
  // screen it had never seen, 0 failed requests and 0 console errors in both themes -
  // the run surface a receiver meets, and the open list counted off backlog.md rather
  // than remembered. The one dependency the folder cannot carry is the typeface, and
  // that is the finding the lift test exists to have produced.
  { label:'Handoff',             page:'handoff/handoff.html', ready:true, done:false },
];

(function () {
  var BASE = window.NAV_BASE || '';
  var here = location.pathname;
  var SECTIONS = window.NAV_SECTIONS || [];

  function pagesOf(item){ return (item.children || [item]).filter(function(c){ return c.page; }); }
  var flat = [];
  NAV.forEach(function(it){ pagesOf(it).forEach(function(p){ flat.push(p); }); });

  function isHere(p){ return p.page && here.slice(-p.page.length) === p.page; }
  var current = flat.filter(isHere)[0] || null;

  // a page outside the registry (an IA node, a color copy) names its stage through NAV_ACTIVE
  var hinted = (!current && window.NAV_ACTIVE)
    ? (flat.filter(function(p){ return p.page === window.NAV_ACTIVE; })[0] || null) : null;
  var activePage = current || hinted;
  function contains(item, p){ return p && pagesOf(item).indexOf(p) !== -1; }

  // NEXT is computed over STAGES, not pages: a stage with no page yet (Responsive,
  // Animation, Handoff) must be able to take Next too, otherwise the badge would
  // disappear from the roadmap for good after the last ready page.
  var nextItem = NAV.filter(function(it){
    var ps = pagesOf(it);
    return ps.length === 0 || ps.some(function(p){ return !p.done; });
  })[0] || null;
  var nextPage = nextItem ? (pagesOf(nextItem).filter(function(p){ return !p.done; })[0] || null) : null;

  function badge(text){ var b = document.createElement('span'); b.className = 'nav-badge nav-badge-' + text.toLowerCase(); b.textContent = text; return b; }
  function sectionList(){
    var s = document.createElement('ul'); s.className = 'nav-sections';
    SECTIONS.forEach(function(sec){
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + sec.id; a.className = 'nav-section'; a.setAttribute('data-section', sec.id); a.textContent = sec.label;
      li.appendChild(a); s.appendChild(li);
    });
    return s;
  }
  function subItem(label, page, isCur, tag){
    var s = document.createElement('li'); s.className = 'nav-subitem';
    var a = document.createElement(page ? 'a' : 'span');
    if (page) a.href = BASE + page;
    a.className = 'nav-link' + (isCur ? ' is-current' : '');
    a.textContent = label;
    if (tag) a.appendChild(badge(tag));
    s.appendChild(a);
    if (isCur && SECTIONS.length) s.appendChild(sectionList());
    return s;
  }

  var el = document.getElementById('sidebar');
  if (!el) return;
  var ul = document.createElement('ul'); ul.className = 'nav-roadmap';

  NAV.forEach(function(item){
    var pages = pagesOf(item);
    var doneCount = pages.filter(function(p){ return p.done; }).length;
    var fullyDone = pages.length > 0 && doneCount === pages.length;
    var isActive  = contains(item, activePage);
    // the top link points at the first REACHABLE page of the stage, so it never points at a file
    // that does not exist yet; with none reachable, but us inside the stage, it points at the current page.
    // `ready:true` means the page exists while the stage is still running: done drives the badge and the
    // state class, ready drives the link. Without the split a live hub is unreachable from the roadmap
    // for the whole length of its own stage, which is exactly when it is most worth opening.
    var target = pages.filter(function(p){ return p.done || p.ready; })[0] || (isActive ? (activePage || pages[0]) : null);

    var li = document.createElement('li');
    li.className = 'nav-item ' + (isActive ? 'is-active' : fullyDone ? 'is-done' : doneCount ? 'is-partial' : 'is-soon');

    var top;
    if (target) { top = document.createElement('a'); top.href = BASE + target.page; }
    else { top = document.createElement('span'); }               // a stage not started yet: not a link
    top.className = 'nav-top'; top.textContent = item.label;
    if (!isActive) {                                             // no badge on your own page
      if (item === nextItem) top.appendChild(badge('Next'));
      else if (!doneCount) top.appendChild(badge('SOON'));       // Next already marks the next one; SOON on the rest
    }
    li.appendChild(top);

    if (isActive && item.children) {                             // accordion: sub links only under the active stage
      var sub = document.createElement('ul'); sub.className = 'nav-sub';
      item.children.forEach(function(c){
        if (c.subhead) { var h = document.createElement('li'); h.className = 'nav-subhead'; h.textContent = c.subhead; sub.appendChild(h); return; }
        var isCur = (c === current);
        var tag = (c === nextPage && !isCur) ? 'Next' : ((!c.done && !isCur) ? 'SOON' : null);
        sub.appendChild(subItem(c.label, (c.done || isCur) ? c.page : null, isCur, tag));
        // a page outside the registry becomes its own sub item and carries ITS OWN NAV_SECTIONS
        if (c === hinted) sub.appendChild(subItem(window.NAV_ACTIVE_LABEL || document.title, null, true, null));
      });
      li.appendChild(sub);
    }
    // a stage WITHOUT children (Wireframes, Voice, UI + Visual, Tokens + Components, ...). The branch above
    // does not reach here, because it needs item.children, so a page outside the registry has to be shown
    // right here: otherwise NAV_ACTIVE would only work under groups, and design/kit/kit.html would never appear
    if (isActive && !item.children) {
      if (item === hinted) {                                     // we are on a page OUTSIDE the registry
        var sub2 = document.createElement('ul'); sub2.className = 'nav-sub';
        sub2.appendChild(subItem(window.NAV_ACTIVE_LABEL || document.title, null, true, null));
        li.appendChild(sub2);                                    // subItem picks up NAV_SECTIONS of this page itself
      } else if (SECTIONS.length) li.appendChild(sectionList()); // we are on the registry page itself
    }

    ul.appendChild(li);
  });

  el.innerHTML = ''; el.appendChild(ul);

  if (SECTIONS.length && 'IntersectionObserver' in window) {
    var links = {};
    Array.prototype.forEach.call(document.querySelectorAll('.nav-section'), function(a){ links[a.getAttribute('data-section')] = a; });
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (!e.isIntersecting) return;
        Object.keys(links).forEach(function(k){ links[k].classList.remove('is-current'); });
        if (links[e.target.id]) links[e.target.id].classList.add('is-current');
      });
    }, { rootMargin: '-15% 0px -75% 0px' });
    SECTIONS.forEach(function(sec){ var t = document.getElementById(sec.id); if (t) obs.observe(t); });
  }
})();
