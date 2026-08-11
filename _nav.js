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
  { label:'Design System',       page:'design/kit/overview.html', done:false, ready:true },
  { label:'Responsive',          page:null, done:false },
  { label:'Animation',           page:null, done:false },
  { label:'Handoff',             page:null, done:false },
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
