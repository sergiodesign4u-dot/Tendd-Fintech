/* ============================================================================
   Tendd design system - the one behaviour file, and why it exists at all.

   Everything else in design/system/ is CSS. This file is here because one
   requirement cannot be met with CSS, and the founder stated it twice: the
   Amount field takes digits, and a letter must not go in.

   WHAT WAS TRIED FIRST, AND WHY IT WAS NOT ENOUGH.

   1. inputmode="decimal" brings up the number pad on a phone. It is a hint to
      the keyboard and no constraint at all: a hardware keyboard ignores it.
   2. pattern="[0-9]*[.,]?[0-9]*" makes the browser consider the field invalid,
      and :user-invalid paints it clay the moment the person leaves it wrong.
      That is real feedback and it stays, but it is a verdict after the fact.
   3. type="number" was rejected on its own merits, and the reasons are worth
      keeping: it adds spinner arrows, it lets the mouse wheel change the amount
      while a person scrolls past it, and in several locales it refuses a comma.
      It also reports an empty value for a bad entry rather than the text, so a
      typo becomes silence.

   So the last step is a filter, and it is deliberately the smallest one that
   can work.

   WHAT IT DOES NOT DO, because each of these is how input filters go wrong:

   - It never rewrites what a person TYPES. Rewriting moves the caret, and a
     caret that jumps to the end while somebody edits the middle of a number is
     worse than the letter would have been. A keystroke that does not fit is
     simply refused and the caret does not move.
   - A PASTE is the one exception, and it earns it. The string people copy for
     an amount is "$17.99", so refusing the whole paste because of the dollar
     sign fails the single most common way this field gets filled. A paste is
     therefore cleaned rather than refused: everything that is not a digit or a
     separator is dropped, and the remainder is inserted with setRangeText, so
     the browser places the caret itself. If nothing survives the cleaning, the
     paste is refused and nothing moves.
   - It never listens to keydown. keydown does not know about paste, drag and
     drop, autofill or an IME, so a keydown filter blocks a person typing and
     waves through a person pasting.
   - It never blocks deletion, selection, undo, or the arrow keys. Only an
     insertion is examined.
   - It does not run per element. One listener in the capture phase covers every
     field on the page including any added later, so nothing has to be
     initialised and nothing can be forgotten.

   IT IS AN ENHANCEMENT AND NOT A LOAD-BEARING PART. With the file absent the
   field still carries inputmode, still carries pattern, and still paints clay
   through :user-invalid. Nothing on the page depends on this running.
   ============================================================================ */

(function () {
  'use strict';

  /* A decimal amount as this product writes one: digits, at most one separator,
     digits. Empty passes, because a field being cleared is not an error yet.
     Both the point and the comma are accepted: the product ships in the US and
     the EU, and D5 defers the EU rather than excluding it. */
  var DECIMAL = /^\d*[.,]?\d*$/;

  function textOf(e) {
    if (e.data != null) return e.data;
    if (e.dataTransfer) return e.dataTransfer.getData('text') || '';
    return '';
  }

  document.addEventListener('beforeinput', function (e) {
    var el = e.target;
    if (!el || el.tagName !== 'INPUT') return;
    if (el.getAttribute('inputmode') !== 'decimal') return;

    /* Only insertions are judged. deleteContentBackward, historyUndo and the
       rest go through untouched. */
    if (!e.inputType || e.inputType.indexOf('insert') !== 0) return;

    var added = textOf(e);
    if (added === '') return;

    /* What the value WOULD become, selection included, so replacing a selected
       run is judged on the result and not on the characters alone. */
    var start = el.selectionStart == null ? el.value.length : el.selectionStart;
    var end = el.selectionEnd == null ? el.value.length : el.selectionEnd;
    var next = el.value.slice(0, start) + added + el.value.slice(end);
    if (DECIMAL.test(next)) return;

    /* A paste is cleaned. "$17.99" becomes "17.99"; "12ab" becomes "12"; a
       string with two separators keeps the first. Anything typed one character
       at a time is simply refused instead. */
    if (e.inputType === 'insertFromPaste' || e.inputType === 'insertFromDrop') {
      var kept = '';
      for (var i = 0; i < added.length; i++) {
        var ch = added[i];
        if (ch >= '0' && ch <= '9') kept += ch;
        else if ((ch === '.' || ch === ',') && kept.indexOf('.') < 0 && kept.indexOf(',') < 0) kept += ch;
      }
      var cleaned = el.value.slice(0, start) + kept + el.value.slice(end);
      e.preventDefault();
      if (kept !== '' && DECIMAL.test(cleaned)) {
        el.setRangeText(kept, start, end, 'end');
        el.dispatchEvent(new Event('input', { bubbles: true }));
      }
      return;
    }

    e.preventDefault();
  }, true);
})();


/* ============================================================================
   THE PRESET SEARCH FILTERS THE CATALOGUE IN PLACE, and no list drops down.

   The founder asked whether this field should open a suggestions list. It
   should not, and the grey structure contract had already decided it before the
   question was asked:

   - `wireframes/add-subscription.html` comments its own intent, unchanged since
     the wireframe stage: "The search is focused on arrival, because the fastest
     finish is typing three letters. The tiles below are for the person who
     would rather look."
   - The zero-result case is not an empty dropdown, it is a whole designed
     SCREEN: `add-subscription-empty` carries "No match for \"Cerebro Cloud\""
     and then the manual form, with the typed name carried over so nothing is
     retyped.

   A floating list would contradict a state that already exists, cover the tiles
   it is supposedly helping with, and on a phone fight the keyboard for the same
   strip of screen. The tiles ARE the result set, and they are a better one than
   a dropdown could be: each carries the merchant's real mark, its name and its
   typical price, where a suggestion row carries a string.

   So the search narrows what is already on screen. Nothing appears over
   anything, the same behaviour runs at 360 and at desktop, and the manual form
   for a service we do not have is already below the tiles on the same screen.

   THE GROUP HEAD IS THE RESULT COUNT while a query is active, and it is
   restored the moment the field is cleared. Two of its three strings are new
   and Voice owns strings, so they are recorded as owed in docs/backlog.md; the
   zero-match line is not new, it is the one the empty screen already carries.

   VISIBILITY IS SET AS AN INLINE STYLE AT RUNTIME rather than through a class
   or the hidden attribute, and that is deliberate: `.app .tile` declares
   `display: flex` at 0-2-0, so `[hidden]` at 0-1-0 loses and the tile stays
   visible. The alternatives were !important, which the project bans, or a new
   product class for a behaviour that is not a design decision. A runtime style
   is neither: the ban is on style attributes AUTHORED into the markup. */

(function () {
  'use strict';

  /* THE PRICE SLOT IS `.muted`, AND THIS LINE IS THE SECOND HALF OF A LESSON.
     It read `.p` until the renaming map folded that class into `.muted` at step
     6. The failure was silent and it was worse than the container's: with
     `price` null the typical-price line stayed in the string, so the search
     matched a person's three letters against "netflix typically $17.99 a month"
     and returned tiles for anyone who typed a digit. Nothing errored, the
     filter kept filtering, and it filtered on the wrong text.

     `grid.css` carried a comment warning about exactly this, for the container
     selector eight lines below, and that one was fixed. This one was in the same
     file, twelve lines up, and was missed: a warning written about one line does
     not cover the file. A class name in a behaviour file is a dependency no
     stylesheet audit greps for. */
  function nameOf(tile) {
    var price = tile.querySelector('.muted');
    var text = tile.textContent || '';
    if (price) text = text.replace(price.textContent, '');
    return text.trim().toLowerCase();
  }

  document.addEventListener('input', function (e) {
    var field = e.target;
    if (!field || field.type !== 'search') return;

    /* THE CONTAINER IS FOUND THROUGH ITS CHILDREN, not by its own class, and
       that is the lesson of step 6 rather than a preference. This read
       `.tiles` until the renaming map folded that container into `.grid`, and
       the failure mode was silent in the worst way: `querySelector` returns
       null, the listener returns early, and the preset search stops filtering
       with nothing in the console and nothing on screen to see. A behaviour
       file naming a class that a rename can move is a dependency nobody greps
       for, because it is JavaScript and every audit this stage runs reads CSS
       and HTML.

       `.grid:has(.tile)` names the relationship instead: the grid that holds
       preset tiles. It survives the container being renamed again, and it
       cannot pick up the wrong grid on a page that has two. */
    var grid = document.querySelector('.grid:has(.tile)');
    if (!grid) return;
    var head = grid.previousElementSibling;
    while (head && !head.classList.contains('group-head')) head = head.previousElementSibling;
    var slot = head ? head.querySelector('span') : null;

    /* The original heading is read once and kept on the element, so clearing
       the field restores exactly what the screen shipped with rather than a
       string this file invented. */
    if (slot && slot.dataset.rest === undefined) slot.dataset.rest = slot.textContent;

    var q = field.value.trim().toLowerCase();
    var tiles = grid.querySelectorAll('.tile');
    var shown = 0;

    for (var i = 0; i < tiles.length; i++) {
      var hit = q === '' || nameOf(tiles[i]).indexOf(q) !== -1;
      tiles[i].style.display = hit ? '' : 'none';
      if (hit) shown++;
    }

    if (!slot) return;
    if (q === '') slot.textContent = slot.dataset.rest;
    else if (shown === 0) slot.textContent = 'No match for "' + field.value.trim() + '"';
    else if (shown === 1) slot.textContent = '1 match for "' + field.value.trim() + '"';
    else slot.textContent = shown + ' matches for "' + field.value.trim() + '"';
  }, true);
})();

/* ============================================================================
   THE TREND CURSOR, 2026-08-18
   The founder asked for a chart a person can use: "нам би надо сделать его
   активнім, что им можно будет пользоваться, двигать мишкой и смотреть сколько
   когда было затрат". This is that, and it is the third thing in this file, so
   the same rules apply as to the two above it: no library, no framework, and
   nothing that breaks the screen when it does not run.

   PROGRESSIVE ENHANCEMENT IS THE WHOLE DESIGN. The markup already carries the
   plot as a static path, so with no script the screen is what it was: a curve,
   its months and its value axis. This file adds a layer on top and only where
   the box says it has data. If it never runs, nothing is missing and nothing
   is broken.

   ONE SOURCE OF TRUTH. `data-points` on the box is the data ("May 172.90|Jun
   192.90|Jul 192.90") and `data-scale` is the axis it is drawn against
   ("160 200"). The script recomputes the path from those two and writes it back
   over the authored one, so the curve a person hovers and the number the card
   shows cannot disagree: they are the same array. The authored path is the
   fallback and is generated by the same arithmetic, which is written down on
   the component's page.

   THE GEOMETRY, so the next person does not have to reverse it: x is the index
   spread across 0 to 300, y is the value mapped into 90 to 10 - the two outer
   gridlines - so the plot never touches the frame. The curve between two points
   is a cubic with horizontal handles at a third and two thirds, which is the
   plainest smoothing there is: it eases out of a value and into the next one and
   it draws a flat line between two equal values, which is what a plateau in a
   monthly total actually is.
   ============================================================================ */
(function () {
  'use strict';

  var TOP = 10, BOT = 90, W = 300;

  function parse(box) {
    var raw = (box.getAttribute('data-points') || '').split('|');
    var pts = [];
    for (var i = 0; i < raw.length; i++) {
      var m = raw[i].trim().match(/^(.+?)\s+([\d.]+)$/);
      if (m) pts.push({ label: m[1], value: parseFloat(m[2]) });
    }
    return pts;
  }

  function geometry(box, pts) {
    var scale = (box.getAttribute('data-scale') || '').split(/\s+/);
    var lo = parseFloat(scale[0]), hi = parseFloat(scale[1]);
    if (!isFinite(lo) || !isFinite(hi) || hi === lo) return null;
    var out = [];
    for (var i = 0; i < pts.length; i++) {
      out.push({
        x: pts.length === 1 ? W / 2 : (i / (pts.length - 1)) * W,
        y: BOT - ((pts[i].value - lo) / (hi - lo)) * (BOT - TOP)
      });
    }
    return out;
  }

  function round(n) { return Math.round(n * 100) / 100; }

  function path(g) {
    if (!g.length) return '';
    var d = 'M' + round(g[0].x) + ' ' + round(g[0].y);
    for (var i = 1; i < g.length; i++) {
      var a = g[i - 1], b = g[i], dx = (b.x - a.x) / 3;
      d += ' C' + round(a.x + dx) + ' ' + round(a.y) + ', ' +
                  round(b.x - dx) + ' ' + round(b.y) + ', ' +
                  round(b.x) + ' ' + round(b.y);
    }
    return d;
  }

  function money(v) {
    return '$' + v.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function build(box) {
    var pts = parse(box);
    if (pts.length < 2) return;
    var g = geometry(box, pts);
    if (!g) return;

    var d = path(g);
    var plot = box.querySelector('.plot');
    var area = box.querySelector('.area');
    if (plot) plot.setAttribute('d', d);
    if (area) area.setAttribute('d', d + ' L' + W + ' 100 L0 100 Z');

    /* ---- THE LAST POINT IS MARKED, AND IT IS THE ONE THING HERE THAT IS TRUE
       WITH NOBODY TOUCHING IT. 2026-08-19. The cursor answers a pointer and is
       invisible until there is one, so a line that ran edge to edge and simply
       stopped had no terminal at all: it read as a shape that had been cut off by
       the frame rather than as a reading that ends at this month. A dot on the
       final point is what every chart of a running total puts there, and it says
       the one thing the sentence above the chart also says: this is where you are
       now.

       IT IS BUILT HERE AND NOT IN THE MARKUP for the same reason the cursor is:
       the coordinates come from `data-points` and `data-scale`, which only this
       file reads, and a hand-written dot would be a second copy of the geometry
       to keep in step. With no script the chart is a line and its labels, exactly
       as it was.

       It hides while the cursor is on, in css, because the cursor puts its own
       dot on the curve and two dots on one point is a bug a reader has to think
       about. */
    var last = g[g.length - 1];
    var mark = document.createElement('span');
    mark.className = 'mark';
    mark.innerHTML = '<span class="pin"></span>';
    var pin = mark.firstChild;
    pin.style.setProperty('--lx', round((last.x / W) * 100) + '%');
    pin.style.setProperty('--ly', round(last.y) + '%');
    box.appendChild(mark);

    var cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.innerHTML = '<span class="guide"></span><span class="dot"></span>' +
                       '<span class="tip"><b></b><span></span></span>';
    box.appendChild(cursor);
    var tipValue = cursor.querySelector('b');
    var tipLabel = cursor.querySelector('.tip > span');

    var current = -1;

    function show(i) {
      if (i < 0 || i >= pts.length) return;
      current = i;
      var xPct = (g[i].x / W) * 100;
      var yPct = g[i].y;
      cursor.style.setProperty('--cx', xPct + '%');
      cursor.style.setProperty('--cy', yPct + '%');
      /* the card is 6rem of half-width at most; clamping it inside the plot is
         cheaper and steadier than measuring it every frame */
      cursor.style.setProperty('--tipx', Math.min(Math.max(xPct, 18), 82) + '%');
      /* under the point when the point is in the top third, over it otherwise:
         the frame clips, and a card half outside it is worse than a card on the
         other side of the dot */
      cursor.style.setProperty('--tipflip', yPct < 34 ? '14px' : 'calc(-100% - 14px)');
      tipValue.textContent = money(pts[i].value);
      tipLabel.textContent = pts[i].label;
      cursor.classList.add('on');
    }

    function hide() { cursor.classList.remove('on'); current = -1; }

    function nearest(clientX) {
      var r = box.getBoundingClientRect();
      var left = r.left + (box.clientLeft || 0);
      /* the plot starts after the axis gutter, and the gutter is a computed
         length rather than a number this file may know */
      var pad = parseFloat(getComputedStyle(box).paddingLeft) || 0;
      var w = r.width - pad;
      if (w <= 0) return 0;
      var f = (clientX - left - pad) / w;
      return Math.min(pts.length - 1, Math.max(0, Math.round(f * (pts.length - 1))));
    }

    box.addEventListener('pointermove', function (e) { show(nearest(e.clientX)); });
    box.addEventListener('pointerleave', hide);
    box.addEventListener('pointercancel', hide);

    /* AND IT IS REACHABLE WITHOUT A POINTER. The box takes focus from the script
       rather than from the markup, because the markup is right when this file
       does not run: an element that can be focused and does nothing is worse
       than one that cannot. */
    box.tabIndex = 0;
    box.addEventListener('focus', function () { show(current < 0 ? pts.length - 1 : current); });
    box.addEventListener('blur', hide);
    box.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { show(Math.min(pts.length - 1, current + 1)); e.preventDefault(); }
      else if (e.key === 'ArrowLeft') { show(Math.max(0, current - 1)); e.preventDefault(); }
      else if (e.key === 'Home') { show(0); e.preventDefault(); }
      else if (e.key === 'End') { show(pts.length - 1); e.preventDefault(); }
      else if (e.key === 'Escape') { hide(); }
    });
  }

  function init() {
    var boxes = document.querySelectorAll('.chart[data-points]');
    for (var i = 0; i < boxes.length; i++) build(boxes[i]);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
