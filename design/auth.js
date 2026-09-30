/* design/auth.js - the way in (P17), on the static stand. Hand-written, and small.

   WHAT IT MIRRORS. The product draws this with React, at commit 4158f6c:
   components/landing/AuthDialog.tsx (the dialog over the public page),
   components/auth/SignInPanel.tsx (node 1.6, one panel in three steps: choose,
   email, sent) and components/auth/StartPanel.tsx (node 1.2, the two doors).
   Every word it shows is in the page's own markup, in a <template>, and is owned
   by voice/docs/microcopy.md, section "sign-in"; this file writes none of them,
   except the running minute on "Send another link", whose figure is a number.

   WHERE IT RUNS. On design/index.html it opens the dialog: the links stay links
   to sign-in.html and path-choice.html, so a new tab, a middle click or a page
   with no script reach the same panels on pages of their own, and only a plain
   click is caught. On sign-in.html, sign-in-sent.html and sign-in-expired.html
   it moves the panel between its steps. path-choice.html needs nothing from it.

   A STATIC PAGE SENDS NO MAIL AND ASKS NO PROVIDER. So "Send a sign-in link"
   moves to the sent step with the address stated back, "Send another link"
   starts its minute again, and "Continue with Google" is a GET to the page the
   product would land on: the door that was chosen (connect-bank.html or
   add-subscription.html, lib/chosen-path.ts) or the list (home.html). With no
   script the forms still post nowhere: the field's form goes to
   sign-in-sent.html, which is the sent step on a page of its own.

   A failure line exists in the product (G1) and has no way to happen here.
   Turnstile (P18) does not run on the stand; its empty box is kept, as the
   product renders it before it has a question to ask. */
(function () {
  'use strict';
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  /* seconds between two letters to one address: the provider's own limit (N5) */
  var COOLDOWN = 60;
  var DOORS = { bank: 'connect-bank.html', manual: 'add-subscription.html' };

  function tpl(scope, name) {
    var t = scope.querySelector('template[data-auth="' + name + '"]');
    return t ? t.content.cloneNode(true) : document.createDocumentFragment();
  }
  function plain(e) {
    return !(e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey);
  }

  /* ---------- one panel, three steps ---------- */
  function panel(el, scope, opts) {
    var step = el.getAttribute('data-step') || 'choose';
    var size = el.querySelector('.lp-auth-size');
    var body = el.querySelector('.lp-auth-body');
    var back = el.querySelector('.lp-auth-back');
    var legal = el.querySelector('.lp-auth-legal');
    var email = '';
    var timer = 0;

    /* THE PANEL GROWS AND SHRINKS, it never jumps: the inner block is measured
       and the outer one is given its height, which landing-auth.css transitions */
    if (size && body && 'ResizeObserver' in window) {
      var fit = function () { size.style.height = body.offsetHeight + 'px'; };
      fit();
      new ResizeObserver(fit).observe(body);
    }

    function render() {
      el.setAttribute('data-step', step);
      if (back) back.hidden = !(step === 'email' || (opts.onBack && step === 'choose'));
      if (legal) legal.hidden = step === 'sent';
    }

    /* the minute on "Send another link", counted down and then released */
    function cool(btn) {
      clearInterval(timer);
      var label = btn.firstChild.nodeValue.replace(/ in 0:\d+$/, '');
      var end = Date.now() + COOLDOWN * 1000;
      var bar = btn.querySelector('.lp-auth-cool');
      if (bar) bar.remove();
      bar = document.createElement('i');
      bar.className = 'lp-auth-cool';
      bar.setAttribute('aria-hidden', 'true');
      btn.appendChild(bar);
      btn.disabled = true;
      var tick = function () {
        var s = Math.max(0, Math.ceil((end - Date.now()) / 1000));
        btn.firstChild.nodeValue = s > 0 ? label + ' in 0:' + (s < 10 ? '0' : '') + s : label;
        if (!s) { clearInterval(timer); btn.disabled = false; bar.remove(); }
      };
      tick();
      timer = setInterval(tick, 250);
    }

    function wire() {
      var g = el.querySelector('.lp-auth-google');
      if (g && g.form) g.form.setAttribute('action', DOORS[opts.door] || 'home.html');

      var mail = el.querySelector('.lp-auth-mail');
      if (mail) mail.addEventListener('click', function () { go('email'); });

      var send = el.querySelector('.lp-auth-send');
      var field = el.querySelector('.lp-auth-field input');
      if (send && field) {
        if (email) field.value = email;
        /* deliberately loose, as the product's: it stops an empty or obviously
           unfinished address and does not adjudicate what an address is */
        var check = function () { send.disabled = !/.+@.+\..+/.test(field.value.trim()); };
        check();
        field.addEventListener('input', check);
        send.form.addEventListener('submit', function (e) {
          e.preventDefault();
          if (send.disabled) return;
          email = field.value.trim();
          go('sent');
        });
      }

      var again = el.querySelector('.lp-auth-again');
      if (again) {
        var to = el.querySelector('.lp-auth-sub strong');
        if (to && email) to.textContent = email;
        else if (to) email = to.textContent;
        cool(again);
        again.form.addEventListener('submit', function (e) { e.preventDefault(); cool(again); });
      }
      var other = el.querySelector('.lp-auth-text');
      if (other) other.addEventListener('click', function () { go('email'); });
    }

    function go(next) {
      clearInterval(timer);
      step = next;
      var s = document.createElement('div');
      s.className = 'lp-auth-step';
      s.appendChild(tpl(scope, next));
      var old = body.querySelector('.lp-auth-step');
      body.replaceChild(s, old);
      render();
      wire();
      /* focus follows the step: into the field, onto the news, or back onto
         the button that opened the field */
      var f = s.querySelector('[data-focus]');
      if (f) f.focus({ preventScroll: true });
    }

    if (back) back.addEventListener('click', function () {
      if (step === 'email') go('choose'); else if (opts.onBack) opts.onBack();
    });
    render();
    wire();
  }

  var root = document.querySelector('.landing');
  if (!root) return;
  var d = root.querySelector('dialog.lp-modal');

  /* ---------- a page of its own: sign-in, sent, expired ---------- */
  if (!d) {
    var door = null;
    try { door = new URLSearchParams(location.search).get('path'); } catch (e) { door = null; }
    var p = root.querySelector('.lp-auth');
    if (p) panel(p, document, { door: DOORS[door] ? door : null });
    return;
  }

  /* ---------- the dialog over the public page ---------- */
  var t = 0;

  /* THE CARD IS DRAWN AGAIN FOR EACH VIEW, so turning from the doors to
     sign-in is the next card rising into place */
  function show(view) {
    var old = d.querySelector('.lp-modal-card');
    var card = document.createElement('div');
    card.className = view.start ? 'lp-modal-card lp-wide' : 'lp-modal-card';
    card.appendChild(old.querySelector('.lp-modal-x'));
    d.replaceChild(card, old);
    d.setAttribute('aria-label', view.start ? 'How do you want to start?' : 'Sign in');
    if (view.start) {
      card.appendChild(tpl(d, 'start'));
      /* a plain click on a door stays in the dialog and carries the door; any
         other click is the link's own */
      [].forEach.call(card.querySelectorAll('.lp-door, .lp-start-foot a'), function (a) {
        a.addEventListener('click', function (e) {
          if (!plain(e)) return;
          e.preventDefault();
          var m = /[?&]path=(bank|manual)\b/.exec(a.getAttribute('href'));
          turn({ start: false, door: m ? m[1] : null, from: true });
        });
      });
    } else {
      card.appendChild(tpl(d, 'panel'));
      panel(card.querySelector('.lp-auth'), d, {
        door: view.door,
        onBack: view.from ? function () { turn({ start: true }); } : null
      });
    }
  }
  /* focus lands on the first way on, not on the corner that closes, and
     without scrolling to it */
  function first() {
    var f = d.querySelector('.lp-modal-card .lp-door, .lp-modal-card .lp-auth .lp-btn');
    if (f) f.focus({ preventScroll: true });
    d.scrollTop = 0;
  }
  function turn(view) { show(view); first(); }
  function open(view) {
    if (d.open) return;
    clearTimeout(t);
    d.classList.remove('is-closing');
    show(view);
    d.showModal();
    first();
    if (root.__hold) root.__hold(true);
  }
  function close() {
    if (!d.open || d.classList.contains('is-closing')) return;
    d.classList.add('is-closing');
    t = setTimeout(function () { d.classList.remove('is-closing'); d.close(); }, RM ? 0 : 260);
  }

  root.addEventListener('click', function (e) {
    if (!plain(e)) return;
    var a = e.target.closest && e.target.closest('a[href="sign-in.html"], a[href="path-choice.html"]');
    if (!a || d.contains(a)) return;
    e.preventDefault();
    open(a.getAttribute('href') === 'path-choice.html' ? { start: true } : { start: false, door: null, from: false });
  });
  /* the ground around the card is the dialog itself, so a press there is a
     press outside the card */
  d.addEventListener('click', function (e) {
    if (e.target === d || (e.target.closest && e.target.closest('.lp-modal-x'))) close();
  });
  d.addEventListener('cancel', function (e) { e.preventDefault(); close(); });
  d.addEventListener('close', function () { if (root.__hold) root.__hold(false); });
})();
