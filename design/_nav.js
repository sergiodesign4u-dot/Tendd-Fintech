/* Tendd UI + Visual - the colored screen map (the side panel on every colored
   screen). Separate from the project roadmap: it lists only the UI + Visual
   screens and their states, marks the current page, and links back to the
   all-screens hub. One source of truth for the screen list; add a screen here
   when it is colored. No external libraries.

   Mirror of wireframes/_nav.js, but for the colored screens and styled through
   design/_screen.css. That look moved twice: design/_theme.css until the kit was
   formed at stage 07, design/kit/kit.css until step 6 of stage 08 deleted that
   file and sent the reviewer's chrome to _screen.css, which is the one stylesheet
   a colored screen loads besides design/system/index.css. The moves were git mv
   and a lift, never a re-derivation of a value.
   Fills the #ui-screen-nav mount inside the .sidebar shell. */

(function () {
  var SCREENS = [
    { name: 'Guided Reveal', base: 'guided-reveal.html', states: ['empty'] },
    { name: 'Home', base: 'home.html', states: ['empty', 'error', 'loading', 'savefocus'] },
    { name: 'Subscription Detail', base: 'subscription-detail.html', states: ['unrecognized', 'price-change', 'payment-failed', 'error', 'loading'] },
    { name: 'Add a Subscription', base: 'add-subscription.html', states: ['empty', 'error', 'loading'] },
    { name: 'History and Trends', base: 'history-trends.html', states: ['locked', 'empty', 'error', 'loading'] },
    { name: 'Upgrade to Pro', base: 'upgrade.html', states: ['current-plan', 'processing', 'payment-failed'] },
    { name: 'Settings', base: 'settings.html', states: ['no-account'] }
  ];

  function stateFile(base, state) {
    return base.replace('.html', '-' + state + '.html');
  }

  function current() {
    var p = location.pathname.split('/').pop();
    return p || 'overview.html';
  }

  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function build() {
    var here = current();
    var html = '';
    html += '<a class="scr-back' + (here === 'overview.html' ? ' current' : '') +
            '" href="overview.html">&#8592; All screens</a>';
    html += '<div class="scr-label active">UI + Visual</div>';
    for (var i = 0; i < SCREENS.length; i++) {
      var sc = SCREENS[i];
      if (here === sc.base) {
        html += '<span class="scr-current">' + esc(sc.name) + '</span>';
      } else {
        html += '<a class="scr-link" href="' + sc.base + '">' + esc(sc.name) + '</a>';
      }
      if (sc.states.length) {
        html += '<ul class="scr-states">';
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
