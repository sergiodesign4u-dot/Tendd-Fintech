/* Tendd UI + Visual - the colored screen map (the side panel on every colored
   screen). Separate from the project roadmap: it lists only the UI + Visual
   screens and their states, marks the current page, and links back to the
   all-screens hub. One source of truth for the screen list; add a screen here
   when it is colored. No external libraries.

   Mirror of wireframes/_nav.js, but for the colored screens and styled through
   ui-visual/_theme.css. Fills the #ui-screen-nav mount inside the .sidebar shell. */

(function () {
  var SCREENS = [
    { name: 'Home', base: 'home.html', states: ['empty', 'error', 'loading', 'savefocus'] },
    { name: 'Subscription Detail', base: 'subscription-detail.html', states: ['empty', 'error', 'loading'] }
  ];

  function stateFile(base, state) {
    return base.replace('.html', '-' + state + '.html');
  }

  function current() {
    var p = location.pathname.split('/').pop();
    return p || 'all-screens.html';
  }

  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function build() {
    var here = current();
    var html = '';
    html += '<a class="nav-back' + (here === 'all-screens.html' ? ' current' : '') +
            '" href="all-screens.html">&#8592; All screens</a>';
    html += '<div class="nav-section-label active">UI + Visual</div>';
    for (var i = 0; i < SCREENS.length; i++) {
      var sc = SCREENS[i];
      if (here === sc.base) {
        html += '<span class="nav-page-active">' + esc(sc.name) + '</span>';
      } else {
        html += '<a class="nav-link" href="' + sc.base + '">' + esc(sc.name) + '</a>';
      }
      if (sc.states.length) {
        html += '<ul class="nav-states">';
        for (var k = 0; k < sc.states.length; k++) {
          var st = sc.states[k];
          var f = stateFile(sc.base, st);
          var cur = (here === f) ? ' current' : '';
          html += '<li><a class="' + cur.trim() + '" href="' + f + '">' + st + '</a></li>';
        }
        html += '</ul>';
      }
    }
    return html;
  }

  function mount() {
    var el = document.getElementById('ui-screen-nav');
    if (!el) return;
    el.innerHTML = build();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
