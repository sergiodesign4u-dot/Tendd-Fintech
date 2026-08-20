/* Tendd wireframes - the single registry of screens, and the wireframe-only side panel.

   Namespace: the data lives in window.WF_NAV. The globals NAV, NAV_BASE, NAV_SECTIONS,
   NAV_ACTIVE and the nav-* classes belong to the root /_nav.js, which overview.html also
   loads for the roadmap: a name clash would silently render the wrong array in the sidebar.

   This file renders ONE thing: the wireframe-only side panel on a screen page (header with
   the "All screens" button and the stage badge, a three-level tree of cluster, screen and
   state, an accordion that opens the current screen only, and the cross-links at the bottom).
   The roadmap sidebar on overview.html comes from the ROOT /_nav.js, not from here.

   It is also the coverage tracker. Every node of the map has a row from the start; built:false
   means the page is specified and not drawn yet, and it renders muted and unlinked. An empty
   row is visible in the panel, a missing file is not.

   Structure and state names mirror wireframes/docs/screens.md, where every state is a node of
   ia/docs/sitemap.md. A state page is named after its state, not after the nearest system word. */

window.WF_NAV = {
  stage: { badge: 'WIREFRAMES', tagline: 'grey clickable prototype' },

  clusters: [
    { id: 1, name: 'Onboarding and Activation', screens: [
      { node: '1.1', name: 'Welcome / Value Intro', file: 'index.html', ia: '1-1-welcome.html',
        flow: 'A entry', scope: 'MVP', built: true, states: [] },
      { node: '1.2', name: 'Activation Path Choice', file: 'path-choice.html', ia: '1-2-path-choice.html',
        flow: 'A tap 1', scope: 'MVP', built: true, states: [] },
      { node: '1.3', name: 'Connect Bank', file: 'connect-bank.html', ia: '1-3-connect-bank.html',
        flow: 'A tap 2', scope: 'MVP', built: true, states: [
        { node: '1.3.1', slug: 'error',     label: 'connection failed',        built: true },
        { node: '1.3.2', slug: 'loading',   label: 'syncing your bank',        built: true },
        { node: '1.3.3', slug: 'empty',     label: 'connected, nothing found', built: true },
        { node: '1.3.4', slug: 'cancelled', label: 'came back without connecting', built: true }
      ]},
      { node: '1.4', name: 'Add Subscription', file: 'add-subscription.html', ia: '1-4-add-subscription.html',
        flow: 'B, and the in-app plus', scope: 'MVP', built: true, states: [
        { node: '1.4.1', slug: 'loading', label: 'preset library loading', built: true },
        { node: '1.4.2', slug: 'error',   label: 'presets unavailable',   built: true },
        { node: '1.4.3', slug: 'empty',   label: 'no preset matches',     built: true }
      ]},
      { node: '1.5', name: 'Guided Reveal', file: 'guided-reveal.html', ia: '1-5-guided-reveal.html',
        flow: 'A tap 3, the aha', scope: 'MVP', built: true, states: [
        { node: '1.5.1', slug: 'empty', label: 'nothing to reveal yet', built: true }
      ]},
      { node: '1.6', name: 'Sign In', file: 'sign-in.html', ia: '1-6-sign-in.html',
        flow: 'E, coming back', scope: 'MVP', built: true, states: [
        { node: '1.6.1', slug: 'sent',    label: 'check your email',     built: true },
        { node: '1.6.2', slug: 'expired', label: 'that link has expired', built: true }
      ]}
    ]},

    { id: 2, name: 'Core', screens: [
      { node: '2.6', name: 'Home / Subscription List', file: 'home.html', ia: '2-6-home.html',
        flow: 'A end, then the steady state', scope: 'MVP', built: true, etalon: true, states: [
        { node: '2.6.1', slug: 'empty',     label: 'both doors offered', built: true },
        { node: '2.6.2', slug: 'loading',   label: 'refreshing',         built: true },
        { node: '2.6.3', slug: 'error',     label: 'sync failed, last known list', built: true },
        { node: '2.6.5', slug: 'one',       label: 'one subscription',   built: true },
        { node: '2.6.6', slug: 'few',       label: 'a short list, ungrouped', built: true }
      ]},
      { node: '2.7', name: 'Subscription Detail', file: 'subscription-detail.html', ia: '2-7-subscription-detail.html',
        flow: 'C and D, one tap from the list', scope: 'MVP', built: true, states: [
        { node: '2.7.1', slug: 'unrecognized',   label: 'unrecognized charge', built: true, wasNamed: 'subscription-detail-empty.html' },
        { node: '2.7.2', slug: 'price-change',   label: 'price change',        built: true },
        { node: '2.7.3', slug: 'payment-failed', label: 'payment did not go through', built: true },
        { node: '2.7.4', slug: 'loading',        label: 'loading the detail',  built: true },
        { node: '2.7.5', slug: 'error',          label: 'could not load',      built: true }
      ]}
    ]},

    { id: 3, name: 'Stay Ahead', screens: [
      { node: '3.8', name: 'Alerts / Activity', file: 'alerts.html', ia: '3-8-alerts.html',
        flow: 'D entry', scope: 'MVP', built: true, states: [
        { node: '3.8.1', slug: 'empty',   label: 'nothing needs your attention', built: true },
        { node: '3.8.2', slug: 'loading', label: 'loading alerts',               built: true },
        { node: '3.8.3', slug: 'error',   label: 'could not reach your alerts',  built: true }
      ]}
    ]},

    { id: 4, name: 'Cut and Celebrate', screens: [
      { node: '4.9', name: 'Cancel Guide', file: 'cancel-guide.html', ia: '4-9-cancel-guide.html',
        flow: 'C, after deciding to cancel', scope: 'MVP', built: true, states: [
        { node: '4.9.1', slug: 'no-guide', label: 'no guide for this service', built: true, wasNamed: 'cancel-guide-empty.html' },
        { node: '4.9.2', slug: 'blocked',  label: 'could not cancel',          built: true, wasNamed: 'cancel-guide-error.html' }
      ]},
      { node: '4.10', name: 'Cancel Win Moment', file: 'cancel-win.html', ia: '4-10-cancel-win.html',
        flow: 'C, after a cancellation', scope: 'MVP', built: true, states: [] },
      { node: '4.11', name: 'Share Snapshot', file: 'share-snapshot.html', ia: '4-11-share-snapshot.html',
        flow: 'C, offered after the win', scope: 'LATER', built: true, states: [
        { node: '4.11.1', slug: 'loading', label: 'making your card', built: true },
        { node: '4.11.2', slug: 'error',   label: 'share failed',     built: true }
      ]}
    ]},

    { id: 5, name: 'Depth (Pro)', screens: [
      { node: '5.12', name: 'History and Trends', file: 'history-trends.html', ia: '5-12-history-trends.html',
        flow: 'from Home and from a subscription', scope: 'LATER', built: true, states: [
        { node: '5.12.1', slug: 'empty',   label: 'still gathering, not the lock', built: true },
        { node: '5.12.2', slug: 'loading', label: 'adding up your months',         built: true },
        { node: '5.12.3', slug: 'error',   label: 'could not load trends',         built: true },
        { node: '5.12.4', slug: 'locked',  label: 'behind the Pro gate',           built: true }
      ]},
      { node: '5.13', name: 'Upgrade / Tendd Pro', file: 'upgrade.html', ia: '5-13-upgrade.html',
        flow: 'only from a real gate', scope: 'LATER', built: true, states: [
        { node: '5.13.1', slug: 'processing',     label: 'setting up your plan', built: true },
        { node: '5.13.2', slug: 'payment-failed', label: 'payment did not go through', built: true },
        { node: '5.13.3', slug: 'current-plan',   label: 'the plan you are on',   built: true },
        { node: '5.13.4', slug: 'renewal-failed', label: 'Pro did not renew',     built: true }
      ]}
    ]},

    { id: 6, name: 'Account and Trust', screens: [
      { node: '6.14', name: 'Connections / Accounts', file: 'connections.html', ia: '6-14-connections.html',
        flow: 'Settings, and the trust line anywhere', scope: 'MVP', built: true, states: [
        { node: '6.14.1', slug: 'empty',      label: 'no sources yet',         built: true },
        { node: '6.14.2', slug: 'reconnect',  label: 'a source needs attention', built: true, wasNamed: 'connections-error.html' },
        { node: '6.14.3', slug: 'add-source', label: 'the chooser',            built: true }
      ]},
      { node: '6.15', name: 'Data and Privacy', file: 'data-privacy.html', ia: '6-15-data-privacy.html',
        flow: 'Settings, and every trust link', scope: 'MVP', built: true, states: [
        { node: '6.15.1', slug: 'delete-confirm', label: 'delete everything', built: true }
      ]},
      { node: '6.16', name: 'Settings / Profile', file: 'settings.html', ia: '6-16-settings.html',
        flow: 'the You tab', scope: 'MVP', built: true, states: [
        { node: '6.16.1', slug: 'no-account', label: 'no account yet', built: true }
      ]}
    ]}
  ],

  // The bridge out of the grey prototype. Kept at the bottom of the panel, quietly: these are
  // exits, not items of the prototype.
  out: [
    { label: 'Concept (in colour)', href: '../design/concept/concept.html' },
    { label: 'Home in colour', href: '../design/home.html' },
    { label: 'Subscription Detail in colour', href: '../design/subscription-detail.html' }
  ]
};

(function () {
  var W = window.WF_NAV;

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function stateFile(screen, st) {
    return screen.file.replace('.html', '-' + st.slug + '.html');
  }

  function here() {
    var p = decodeURIComponent(location.pathname.split('/').pop());
    return p || 'index.html';
  }

  // The current screen is the one whose base page or one of whose state pages we are on.
  function locate(page) {
    for (var i = 0; i < W.clusters.length; i++) {
      var cl = W.clusters[i];
      for (var j = 0; j < cl.screens.length; j++) {
        var sc = cl.screens[j];
        if (sc.file === page) return { screen: sc, state: null };
        for (var k = 0; k < sc.states.length; k++) {
          if (stateFile(sc, sc.states[k]) === page) return { screen: sc, state: sc.states[k] };
        }
      }
    }
    return { screen: null, state: null };
  }

  function build(page) {
    var at = locate(page);
    var h = '';

    h += '<div class="wfp-head">';
    h += '<a class="wfp-back" href="overview.html">All screens</a>';
    h += '<p class="wfp-badge">' + esc(W.stage.badge) + '</p>';
    h += '<p class="wfp-tagline">' + esc(W.stage.tagline) + '</p>';
    h += '</div>';

    h += '<nav class="wfp-tree" aria-label="Wireframe screens">';
    for (var i = 0; i < W.clusters.length; i++) {
      var cl = W.clusters[i];
      h += '<p class="wfp-cluster">' + cl.id + ' ' + esc(cl.name) + '</p><ul>';
      for (var j = 0; j < cl.screens.length; j++) {
        var sc = cl.screens[j];
        var isHere = (at.screen === sc);
        h += '<li class="wfp-screen' + (isHere ? ' is-open' : '') + '">';
        h += '<a href="' + sc.file + '"' + (isHere && !at.state ? ' data-active="true" aria-current="page"' : '') + '>' +
             esc(sc.name) + '<span class="wfp-node">' + sc.node + '</span>' +
             (sc.scope === 'LATER' ? '<span class="wfp-later">later</span>' : '') + '</a>';
        // Accordion: the states of the current screen only. Everything else is one row.
        if (isHere && sc.states.length) {
          h += '<ul class="wfp-states">';
          for (var k = 0; k < sc.states.length; k++) {
            var st = sc.states[k];
            var f = stateFile(sc, st);
            if (!st.built) {
              h += '<li><span class="wfp-spec">' + esc(st.label) + '<span class="wfp-node">' + st.node + '</span>' +
                   '<span class="wfp-tag">spec</span></span></li>';
            } else {
              h += '<li><a href="' + f + '"' + (at.state === st ? ' data-active="true" aria-current="page"' : '') + '>' +
                   esc(st.label) + '<span class="wfp-node">' + st.node + '</span></a></li>';
            }
          }
          h += '</ul>';
        } else if (sc.states.length) {
          h += '<span class="wfp-count">' + sc.states.length + ' states</span>';
        }
        h += '</li>';
      }
      h += '</ul>';
    }
    h += '</nav>';

    h += '<div class="wfp-out">';
    if (at.screen) {
      h += '<a class="wfp-ia" href="../ia/' + at.screen.ia + '">IA specification, node ' + at.screen.node + '</a>';
    }
    h += '<p class="wfp-cluster">Design track</p><ul>';
    for (var m = 0; m < W.out.length; m++) {
      h += '<li><a class="wfp-away" href="' + W.out[m].href + '">' + esc(W.out[m].label) + '</a></li>';
    }
    h += '</ul></div>';
    return h;
  }

  function mount() {
    var el = document.getElementById('wf-sidebar') || document.getElementById('wftree');
    if (!el) return;
    var d = document.createElement('details');
    d.className = 'wfp';
    d.innerHTML = '<summary>Screens and states</summary><div class="wfp-body">' + build(here()) + '</div>';
    if (window.innerWidth >= 820) d.open = true;
    el.replaceWith(d);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
