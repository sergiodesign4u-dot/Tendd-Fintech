/* Tendd wireframes - shared navigation tree (the review side menu).
   One source of truth for the left panel on every screen page.
   Renders section -> screen -> states, marks the current page, and is
   collapsed on narrow screens. No external libraries.

   Structure mirrors wireframes/docs/screens.md. When a page is added, add it here. */

(function () {
  var TREE = [
    { section: 'Onboarding and Activation', screens: [
      { name: 'Welcome (landing)', base: 'welcome.html', states: [] },
      { name: 'Activation Path Choice', base: 'path-choice.html', states: [] },
      { name: 'Connect Bank', base: 'connect-bank.html', states: ['empty', 'error', 'loading'] },
      { name: 'Add Subscription', base: 'add-subscription.html', states: ['empty', 'error', 'loading'] },
      { name: 'Guided Reveal', base: 'guided-reveal.html', states: ['empty'] }
    ]},
    { section: 'Core', screens: [
      { name: 'Home / Subscription List', base: 'home.html', states: ['savefocus', 'empty', 'error', 'loading'] },
      { name: 'Subscription Detail', base: 'subscription-detail.html', states: ['empty', 'error', 'loading'] }
    ]},
    { section: 'Stay Ahead', screens: [
      { name: 'Alerts / Activity', base: 'alerts.html', states: ['empty', 'error', 'loading'] }
    ]},
    { section: 'Cut and Celebrate', screens: [
      { name: 'Cancel Guide', base: 'cancel-guide.html', states: ['empty', 'error'] },
      { name: 'Cancel Win Moment', base: 'cancel-win.html', states: [] },
      { name: 'Share Snapshot', base: 'share-snapshot.html', states: ['error', 'loading'] }
    ]},
    { section: 'Depth (Pro)', screens: [
      { name: 'History and Trends', base: 'history-trends.html', states: ['empty', 'loading'] },
      { name: 'Upgrade / Tendd Pro', base: 'upgrade.html', states: [] }
    ]},
    { section: 'Account and Trust', screens: [
      { name: 'Connections / Accounts', base: 'connections.html', states: ['empty', 'error'] },
      { name: 'Data and Privacy', base: 'data-privacy.html', states: [] },
      { name: 'Settings / Profile', base: 'settings.html', states: [] }
    ]}
  ];

  function stateFile(base, state) {
    return base.replace('.html', '-' + state + '.html');
  }

  function current() {
    var p = location.pathname.split('/').pop();
    return p || 'index.html';
  }

  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function build() {
    var here = current();
    var html = '';
    html += '<summary>Wireframe map</summary>';
    html += '<div class="wftree-body">';
    html += '<a class="wf-overview-link' + (here === 'index.html' ? ' current' : '') + '" href="index.html">Overview</a>';
    for (var i = 0; i < TREE.length; i++) {
      var sec = TREE[i];
      html += '<p class="cluster">' + esc(sec.section) + '</p><ul>';
      for (var j = 0; j < sec.screens.length; j++) {
        var sc = sec.screens[j];
        var cur = (here === sc.base) ? ' current' : '';
        html += '<li class="wf-screen"><a class="' + cur.trim() + '" href="' + sc.base + '">' + esc(sc.name) + '</a>';
        if (sc.states.length) {
          html += '<ul class="states">';
          for (var k = 0; k < sc.states.length; k++) {
            var st = sc.states[k];
            var f = stateFile(sc.base, st);
            var scur = (here === f) ? ' current' : '';
            html += '<li><a class="' + scur.trim() + '" href="' + f + '">' + st + '</a></li>';
          }
          html += '</ul>';
        }
        html += '</li>';
      }
      html += '</ul>';
    }
    html += '</div>';
    return html;
  }

  function mount() {
    var el = document.getElementById('wftree');
    if (!el) return;
    var d = document.createElement('details');
    d.className = 'wftree';
    d.innerHTML = build();
    if (window.innerWidth >= 820) d.open = true;
    el.replaceWith(d);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
