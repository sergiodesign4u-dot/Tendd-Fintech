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
    { name: 'Home', base: 'home.html', states: ['empty', 'one', 'few', 'error', 'loading'] },
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
    { name: 'Upgrade to Pro', base: 'upgrade.html', states: ['current-plan', 'processing', 'payment-failed', 'renewal-failed'] },
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
     takes is not. Counted over all 57 coloured screens, exactly TWO have no link
     out of `.app`, and they are U7's own two pages: `connect-bank-loading` and
     `upgrade-processing`.

     AND "NO LINK AT ALL" WAS THE WRONG TEST, WHICH THE FOUNDER FOUND THE SAME
     HOUR by standing on `sign-in-sent`: "и тут получается та же проблема, не
     видно, куда двигаться дальше - правильный имейл и ты перешёл дальше, или
     ошибка". That screen has two controls and both of them go BACKWARDS - send
     another link, use a different email - because the step that moves it forward
     happens in a mail client. Counted over the click graph of all 55: one screen
     is a cul-de-sac by that reading and 21 states cannot be reached by clicking
     at all, most of them the outcomes of a wait.

     SO THE TEST IS DECLARED AND NOT INFERRED. A screen is in this map when its
     forward step is somewhere the prototype cannot go: the system takes it (the
     eight waits) or the person leaves to take it (the mail link). The "no link at
     all" check stays underneath as a net, so a wait coloured next month is never
     silently a dead end.

     SO THE ANSWER GOES ON THE STAND AND NEVER INTO THE SCREEN. This strip is
     drawn by the reviewer's chrome, outside `.app`, from data that lives here.
     Nothing is added to the 57 screen files: no markup, no class, no link. Turn
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
  var WAIT = 'A wait carries no control, by rule (U7): an edge the system takes is not a control, so this screen has no button by design. In the product it moves on its own, and these are the places it can land.';
  var WAIT_TAB = 'A wait carries no control, by rule (U7). The tab bar underneath leaves the screen; it does not move this one forward. In the product the wait ends by itself, and these are the places it can land.';

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
    },
    'sign-in-sent.html': {
      why: 'The step that moves this screen forward is not on it and not in the product: the person opens their mail and taps the link. Both controls here go backwards, which is why it reads as a dead end. The link itself lands in one of two places.',
      doors: [
        ['home.html', 'The link worked', 'back in your list, signed in'],
        ['sign-in-expired.html', 'The link had expired', 'it works once and then stops']
      ]
    },
    'home-loading.html': {
      why: WAIT_TAB,
      doors: [
        ['home.html', 'The list landed', 'fourteen subscriptions and the monthly total'],
        ['home-few.html', 'A short list landed', 'three, ungrouped, by what comes off next'],
        ['home-one.html', 'One landed', 'the singular, and the way the list grows'],
        ['home-empty.html', 'There is nothing to add up yet', 'connected, and no list to show'],
        ['home-error.html', 'It could not be refreshed', 'the last update is shown instead']
      ]
    },
    'alerts-loading.html': {
      why: WAIT_TAB,
      doors: [
        ['alerts.html', 'There is something to know', 'the few things worth knowing about'],
        ['alerts-empty.html', 'All clear', 'nothing needs your attention'],
        ['alerts-error.html', 'They could not be loaded', 'nothing is wrong with your money']
      ]
    },
    'history-trends-loading.html': {
      why: WAIT_TAB,
      doors: [
        ['history-trends.html', 'The months landed', 'three months, and what moved'],
        ['history-trends-empty.html', 'There is not enough history', 'fewer than three months so far'],
        ['history-trends-error.html', 'They could not be loaded', 'something on our side did not answer']
      ]
    },
    'subscription-detail-loading.html': {
      why: WAIT_TAB,
      doors: [
        ['subscription-detail.html', 'The record landed', 'the full detail of one subscription'],
        ['subscription-detail-error.html', 'The rest could not be loaded', 'the head is there, the record is not']
      ]
    },
    'add-subscription-loading.html': {
      why: WAIT,
      doors: [
        ['add-subscription.html', 'The service list landed', '400+ presets, and a search'],
        ['add-subscription-error.html', 'The list could not be loaded', 'adding by hand still works']
      ]
    },
    'share-snapshot-loading.html': {
      why: WAIT,
      doors: [
        ['share-snapshot.html', 'The card was drawn', 'nothing is shared until you tap Share'],
        ['share-snapshot-error.html', 'The card could not be made', 'the cancel win is saved either way']
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
    if (!app) return;
    var here = current(), e = AFTER[here], doors, why;
    /* declared first, the net second: a screen with a way out that is not a way
       FORWARD is invisible to any structural test, and `sign-in-sent` is the
       proof - two controls, both of them backwards */
    if (!e && app.querySelector('a[href$=".html"]')) return;
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

    /* AND IT CLEARS THE TAB BAR, MEASURED RATHER THAN GUESSED. Six of the nine
       screens this strip stands on carry a tab bar, and below the shell's own
       point that bar is a 63px block along the bottom of the window - straight
       under a box pinned 16px off the same edge. Past the point it is a 220px
       rail down the left and there is nothing to clear.

       The height is READ off the bar instead of written here, because 63 is the
       product's number and the chrome may not hold a copy of it: `tab-bar.css`
       declares `min-height: 48px` and the rest is padding and a label, so a
       literal would be right today and silently wrong after any change to
       either. The test is geometric and not a width: is this bar sitting on the
       bottom edge of the window, and is it wider than it is tall. On resize it
       is measured again, because the same bar becomes a rail at 760. */
    function lift() {
      var tab = document.querySelector('.tabbar');
      var px = 0;
      if (tab) {
        var r = tab.getBoundingClientRect();
        if (Math.abs(r.bottom - window.innerHeight) < 2 && r.width > r.height) px = Math.round(r.height);
      }
      box.style.setProperty('--lift', px + 'px');
    }
    lift();
    window.addEventListener('resize', lift);
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
