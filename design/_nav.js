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
    /* The landing stands FIRST and outside the node order for once, because it is
       node 1.1 and because it is the only public page: a person meets it before
       anything else in this list exists for them. */
    { name: 'Welcome (landing)', base: 'index.html', states: [] },
    /* It carried one extra row, 'circle', from 2026-08-14 to 2026-08-15: the
       CANDIDATE hero the founder asked for, the same page with a round window of
       platforms in the middle instead of a centred column. It was never a product
       state and the label was doing a second job. The founder chose it on the
       15th ("давай теперь перенесем index-circle.html на основу index.html"), so
       it IS index.html now and the centred version is gone. One landing, one row,
       no states. */
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

  /* ==========================================================================
     WHERE A WAIT GOES, 2026-08-19. The founder, on `connect-bank-loading`:
     **"для меня тупик ... а что тут может быть дальше - success или ошибка или
     что-то еще, как сделать так, чтобы это не шло как в продукт, но было
     понятно, куда двигаться дальше"**.

     THE DEAD END IS CORRECT AND IT IS A RULE. U7: a wait carries no control at
     all, because an edge a person takes is a control and an edge the system
     takes is not. Counted over all 55 coloured screens, exactly TWO have no link
     out of `.app`, and they are U7's own two pages: `connect-bank-loading` and
     `upgrade-processing`. Every other wait carries a tab bar and is walkable.

     SO THE ANSWER GOES ON THE STAND AND NEVER INTO THE SCREEN. This strip is
     drawn by the reviewer's chrome, outside `.app`, from data that lives here.
     Nothing is added to the 55 screen files: no markup, no class, no link. Turn
     the chrome off - which is what a build does - and the wait is exactly the
     wait the product ships.

     THE EDGES ARE NOT THIS FILE'S TO INVENT. Their owner is `ia/docs/flows.md`
     (flow A: SyncLoad -> ConnOK -> the reveal, the error or the empty) and the
     node comment on `connect-bank-cancelled.html`, which is where the fourth
     outcome was added on 2026-08-04: "Plaid Link returns four outcomes and the
     map had three". `upgrade-processing` states its own success in its own copy:
     "When it is done you go straight back to Your trends, open." Two entries,
     each copied from a named source, and a wait that is coloured later without
     an entry still gets a strip - see the fallback in `nextStep()`.
     ========================================================================== */
  var AFTER = {
    'connect-bank-loading.html': {
      why: 'A wait carries no control, by rule (U7): an edge the system takes is not a control. In the product this screen moves on its own when the bank answers, and Plaid Link returns four outcomes.',
      doors: [
        ['guided-reveal.html', 'Charges found', 'the reveal begins'],
        ['connect-bank-empty.html', 'Nothing found', 'connected, nothing recurring yet'],
        ['connect-bank-error.html', 'Could not connect', 'the bank link failed'],
        ['connect-bank-cancelled.html', 'You backed out', 'the bank window was closed']
      ]
    },
    'upgrade-processing.html': {
      why: 'A wait carries no control, by rule (U7), and this one must not offer one twice over: a way out in the middle of a charge is the thing this screen must never offer. In the product it moves on its own.',
      doors: [
        ['history-trends.html', 'It went through', 'straight back to Your trends, open'],
        ['upgrade-payment-failed.html', 'The card was declined', 'nothing was charged']
      ]
    }
  };

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

  /* THE STRIP ITSELF. It is built only where the screen has NO link out of
     `.app`, which is the runtime form of the same question U7 answers, so it
     cannot appear on a screen that is walkable and cannot be forgotten on a wait
     that is coloured tomorrow. Where such a screen has no entry in AFTER, the
     strip still draws and says so, listing the siblings the registry knows: a
     reviewer is never left in front of a page with nothing to click and no
     explanation of why. */
  function nextStep() {
    var app = document.querySelector('.app');
    if (!app || app.querySelector('a[href$=".html"]')) return;
    var here = current();
    var e = AFTER[here], doors, why;
    if (e) {
      doors = e.doors; why = e.why;
    } else {
      /* the fallback: the siblings of whatever screen this is a state of */
      doors = [];
      for (var i = 0; i < SCREENS.length; i++) {
        var sc = SCREENS[i], mine = (here === sc.base);
        for (var k = 0; k < sc.states.length; k++) if (here === stateFile(sc.base, sc.states[k])) mine = true;
        if (!mine) continue;
        if (here !== sc.base) doors.push([sc.base, sc.name, 'the screen this is a state of']);
        for (var j = 0; j < sc.states.length; j++) {
          var f = stateFile(sc.base, sc.states[j]);
          if (f !== here) doors.push([f, sc.states[j], 'another state of ' + sc.name]);
        }
      }
      why = 'This screen has no way out, and no next step is declared for it in design/_nav.js. What follows is every other state of the same screen, from the registry.';
    }
    var html = '<p class="scr-next-h">The stand, not the product</p>' +
               '<p class="scr-next-w">' + esc(why) + '</p><div class="scr-next-d">';
    for (var d = 0; d < doors.length; d++) {
      html += '<a href="' + doors[d][0] + '"><b>' + esc(doors[d][1]) + '</b>' +
              '<span>' + esc(doors[d][2]) + '</span></a>';
    }
    html += '</div>';
    var box = document.createElement('aside');
    box.className = 'scr-next';
    box.setAttribute('aria-label', 'Where this screen goes, for review');
    box.innerHTML = html;
    document.body.appendChild(box);
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
    nextStep();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
