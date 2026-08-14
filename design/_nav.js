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
    /* Connect Bank, added 2026-08-14, the first flow of the ROLLOUT. It stands at
       the head of the list because the list runs by node number where a flow
       allows it, and 1.3 is the earliest node in colour: the sample of stage 07
       began at Guided Reveal because everything before it was still grey. */
    { name: 'Path Choice', base: 'path-choice.html', states: [] },
    { name: 'Connect Bank', base: 'connect-bank.html', states: ['loading', 'error', 'empty', 'cancelled'] },
    { name: 'Guided Reveal', base: 'guided-reveal.html', states: ['empty'] },
    { name: 'Sign In', base: 'sign-in.html', states: ['sent', 'expired'] },
    { name: 'Home', base: 'home.html', states: ['empty', 'error', 'loading', 'savefocus'] },
    { name: 'Subscription Detail', base: 'subscription-detail.html', states: ['unrecognized', 'price-change', 'payment-failed', 'error', 'loading'] },
    /* Alerts, added 2026-08-13 at stage 09 step 5, the self-sufficiency test of
       the design system: the eighth screen, and the first one coloured after the
       sample of stage 07 closed. It sits here rather than at the end of the list
       because the list runs by node number where a flow allows it, and 3.8 comes
       after 2.7. Nothing was added to design/system/ to build it. */
    { name: 'Alerts', base: 'alerts.html', states: ['empty', 'error', 'loading'] },
    { name: 'Add a Subscription', base: 'add-subscription.html', states: ['empty', 'error', 'loading'] },
    { name: 'Cancel Guide', base: 'cancel-guide.html', states: ['no-guide', 'blocked'] },
    { name: 'Cancel Win', base: 'cancel-win.html', states: [] },
    { name: 'Share Snapshot', base: 'share-snapshot.html', states: ['loading', 'error'] },
    { name: 'History and Trends', base: 'history-trends.html', states: ['locked', 'empty', 'error', 'loading'] },
    { name: 'Upgrade to Pro', base: 'upgrade.html', states: ['current-plan', 'processing', 'payment-failed'] },
    { name: 'Connections', base: 'connections.html', states: ['empty', 'reconnect', 'add-source'] },
    { name: 'Data and Privacy', base: 'data-privacy.html', states: ['delete-confirm'] },
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

  /* THE THEME SWITCH, and it lives here rather than in the markup of 29 pages
     for the same reason the screen list does: one source, and a screen added
     tomorrow gets it without being told.

     THE ATTRIBUTE IS data-set-theme, NOT data-theme. `data-theme` is the STYLE
     hook: tokens.css declares `[data-theme="dark"]` unscoped on purpose, so a
     theme can be pinned to a subtree. A button that used the same name to tell
     this script what to do would also be telling the stylesheet that the button
     IS a dark subtree, and it would paint itself in the wrong theme's values in
     both themes. That is not hypothetical: it is exactly what the stand's
     switcher did from step 4 until 2026-08-12, where its label measured 1.92:1
     in the DEFAULT theme and nobody saw it.

     ITS OWN STORAGE KEY, separate from the stand's `tendd-kit-theme`. Two
     surfaces, two questions: a reviewer who put the stand in dark to check one
     component has not asked for every product screen to open dark afterwards.

     THE FIRST PAINT IS NOT THIS SCRIPT'S JOB. Each screen carries a three line
     inline script in its <head> that reads the same key and stamps <html> before
     the stylesheet paints. A toggle that runs on DOMContentLoaded shows the
     wrong theme for one frame on every load, and a flash of white is the single
     most visible thing a dark theme can do wrong. */
  var KEY = 'tendd-screen-theme';

  function setTheme(t) {
    if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    try { localStorage.setItem(KEY, t); } catch (e) {}
    var bs = document.querySelectorAll('.scr-theme button');
    for (var i = 0; i < bs.length; i++) bs[i].setAttribute('aria-pressed', String(bs[i].dataset.setTheme === t));
  }

  function build() {
    var here = current();
    var html = '';
    html += '<div class="scr-theme" role="group" aria-label="Theme">' +
            '<button type="button" data-set-theme="light" aria-pressed="true">Light</button>' +
            '<button type="button" data-set-theme="dark" aria-pressed="false">Dark</button>' +
            '</div>';
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
    el.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('button[data-set-theme]') : null;
      if (b) setTheme(b.dataset.setTheme);
    });
    var stored = 'light';
    try { stored = localStorage.getItem(KEY) || 'light'; } catch (e) {}
    setTheme(stored);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
