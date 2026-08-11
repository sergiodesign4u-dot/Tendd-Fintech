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
