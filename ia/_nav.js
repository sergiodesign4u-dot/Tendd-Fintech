/* ia/_nav.js : the node registry of the detail layer.
   One record per node; the hub (structure.html) renders them as chips into
   #ia-structure, split into "Global elements" (group global) and "Pages"
   (group pages). A new node appears in the hub the moment it is added here.

   Namespace: the data lives in window.IA_NAV. The globals NAV, NAV_BASE,
   NAV_SECTIONS, NAV_ACTIVE and the nav-* classes belong to the root /_nav.js,
   which structure.html also loads for the roadmap: a name clash would silently
   render the wrong array in the sidebar.

   file: where the node is specified today. While the detail layer still lives in
   cluster pages, that is a cluster page plus the node anchor; as node pages are
   built, the entry moves to its own page and nothing else changes. Node pages are
   named ia/<number>-<slug>.html with the dots of the node number turned into
   hyphens (node 1.1 -> 1-1-welcome.html), so the file name sorts and links cleanly. */

window.IA_NAV = [
  // Global chrome and reusable sections
  { node:'0.1', label:'App Header (GC1)',            type:'section', group:'global', file:'navigation.html#GC1' },
  { node:'0.2', label:'Global Tab Bar (GC2)',        type:'section', group:'global', file:'navigation.html#GC2' },
  { node:'0.3', label:'Recurring Summary Strip (GC3)', type:'section', group:'global', file:'core.html#GC3' },
  { node:'0.4', label:'Subscription List Item (GC4)', type:'section', group:'global', file:'core.html#GC4' },
  { node:'0.5', label:'Alert Item (GC5)',            type:'section', group:'global', file:'alerts.html#GC5' },
  { node:'0.6', label:'Data Source and Trust (GC6)', type:'section', group:'global', file:'account.html#GC6' },
  { node:'0.7', label:'Pro Gate and Plan Chip (GC7)', type:'section', group:'global', file:'pro.html#GC7' },

  // System nodes
  { node:'9.1', label:'Not found',       type:'state',   group:'global', file:'system.html#9.1' },
  { node:'9.2', label:'Server error',    type:'page',    group:'global', file:'system.html#9.2' },
  { node:'9.3', label:'Maintenance',     type:'page',    group:'global', file:'system.html' },
  { node:'9.4', label:'Consent banner',  type:'dialog',  group:'global', file:'system.html#9.4' },
  { node:'9.5', label:'Toasts',          type:'section', group:'global', file:'system.html#9.5' },
  { node:'8',   label:'SEO engine',      type:'spec',    group:'global', file:'seo.html' },

  // Pages, cluster by cluster
  { node:'1.1',  label:'Welcome / Value Intro',   type:'page',   group:'pages', file:'1-1-welcome.html',    scope:'MVP' },
  { node:'1.2',  label:'Activation Path Choice',  type:'page',   group:'pages', file:'1-2-path-choice.html', scope:'MVP' },
  { node:'1.3',  label:'Connect Bank',            type:'page',   group:'pages', file:'1-3-connect-bank.html', scope:'MVP' },
  { node:'1.4',  label:'Add Subscription',        type:'page',   group:'pages', file:'1-4-add-subscription.html', scope:'MVP' },
  { node:'1.5',  label:'Guided Reveal',           type:'page',   group:'pages', file:'1-5-guided-reveal.html', scope:'MVP' },
  { node:'2.6',  label:'Home / Subscription List', type:'page',  group:'pages', file:'2-6-home.html',       scope:'MVP' },
  { node:'2.7',  label:'Subscription Detail',     type:'page',   group:'pages', file:'2-7-subscription-detail.html', scope:'MVP' },
  { node:'3.8',  label:'Alerts / Activity',       type:'page',   group:'pages', file:'alerts.html#3.8',     scope:'MVP' },
  { node:'4.9',  label:'Cancel Guide',            type:'page',   group:'pages', file:'cancel.html#4.9',     scope:'MVP' },
  { node:'4.10', label:'Cancel Win Moment',       type:'page',   group:'pages', file:'cancel.html#4.10',    scope:'MVP' },
  { node:'4.11', label:'Share Snapshot',          type:'page',   group:'pages', file:'cancel.html#4.11',    scope:'LATER' },
  { node:'5.12', label:'History and Trends',      type:'page',   group:'pages', file:'pro.html#5.12',       scope:'LATER' },
  { node:'5.13', label:'Upgrade / Tendd Pro',     type:'page',   group:'pages', file:'pro.html#5.13',       scope:'LATER' },
  { node:'6.14', label:'Connections / Accounts',  type:'page',   group:'pages', file:'account.html#6.14',   scope:'MVP' },
  { node:'6.15', label:'Data and Privacy',        type:'page',   group:'pages', file:'account.html#6.15',   scope:'MVP' },
  { node:'6.16', label:'Settings / Profile',      type:'page',   group:'pages', file:'account.html#6.16',   scope:'MVP' },
];

(function () {
  var mount = document.getElementById('ia-structure');
  if (!mount || !window.IA_NAV) return;

  var hash = decodeURIComponent(location.hash.replace('#', ''));

  function chip(n) {
    var a = document.createElement('a');
    a.className = 'ia-chip' + (n.node === hash ? ' is-active' : '');
    a.href = n.file;
    a.innerHTML = '<span class="ia-chip-node">' + n.node + '</span>' +
                  '<span class="ia-chip-label">' + n.label + '</span>' +
                  '<span class="ia-chip-type">' + n.type + '</span>' +
                  (n.scope ? '<span class="ia-chip-scope' + (n.scope === 'LATER' ? ' later' : '') + '">' + n.scope + '</span>' : '');
    return a;
  }

  [['global', 'Global elements'], ['pages', 'Pages']].forEach(function (g) {
    var items = IA_NAV.filter(function (n) { return n.group === g[0]; });
    if (!items.length) return;
    var h = document.createElement('h3');
    h.className = 'ia-group';
    h.textContent = g[1] + ' (' + items.length + ')';
    mount.appendChild(h);
    var wrap = document.createElement('div');
    wrap.className = 'ia-chips';
    items.forEach(function (n) { wrap.appendChild(chip(n)); });
    mount.appendChild(wrap);
  });
})();
