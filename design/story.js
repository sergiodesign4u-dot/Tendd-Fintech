/* ============================================================================
   THE CONDUCTOR. Loaded by design/index-circle.html and by nothing else.

   It does two small things and owns no style of either:

   1. THE SETTLE. The reader's scroll is native and untouched - CSS snap was
      tried both ways and `mandatory` juddered, because on a document scroller
      every wheel tick starts the browser's snap animation and the next tick
      interrupts it. So nothing here ever fights a moving hand: only once the
      scroll has been STILL for a beat does this file glide the page to the next
      anchor in the direction the reader was going, on a long soft curve. The
      anchors are the `.storybeats .beat` elements, whose positions
      landing-orbit.css derives from the animation ranges - the choreography
      keeps exactly one owner and this file reads it from the DOM.

   2. THE LEAN. The pointer's offset from the stage centre is damped into two
      custom properties on the stage, --parx and --pary, and landing-orbit.css
      decides what they mean (the window leans a few pixels toward the hand,
      the strands a little more). The script hands over two numbers and styles
      nothing.

   Both do nothing under reduced motion, nothing below the stage's own 60rem
   point, and nothing outside the one section. Any input cancels a glide
   instantly. If the candidate loses, this file is deleted with the page that
   loads it.
   ========================================================================== */
(function () {
  "use strict";

  var stage = document.querySelector(".landing .lp-orbit.lp-story.fromcircle");
  if (!stage) return;
  var beats = Array.prototype.slice.call(
    stage.querySelectorAll(".storybeats .beat")
  );
  if (beats.length < 2) return;

  var still = window.matchMedia("(prefers-reduced-motion: reduce)");
  var wide = window.matchMedia("(min-width: 60rem)");
  var on = function () { return wide.matches && !still.matches; };

  /* ---- the settle ------------------------------------------------------- */

  var gliding = false;
  var raf = 0;
  var idle = 0;
  var lastY = window.scrollY;
  var dir = 1;

  function cancelGlide() {
    gliding = false;
    cancelAnimationFrame(raf);
  }

  /* any hand on the page outranks the conductor, instantly */
  ["wheel", "touchstart", "pointerdown", "keydown"].forEach(function (t) {
    window.addEventListener(t, cancelGlide, { passive: true });
  });

  function settle() {
    if (!on() || gliding) return;
    var y = window.scrollY;
    var tops = beats.map(function (b) {
      return b.getBoundingClientRect().top + window.scrollY;
    });
    var first = tops[0];
    var last = tops[tops.length - 1];
    /* outside the stage the page is the reader's alone */
    if (y < first - 4 || y > last + 4) return;

    /* STANDING ON A BEAT IS STANDING STILL, and the check is explicit because
       its absence was an autonomous crawler: a page at rest on beat N has a
       "next beat in the direction of travel" too, and the first cut of this
       walked the reader through the whole stage by itself, one settle at a
       time, with no hand on anything. Found by the beat probe, whose reads
       came back scrambled by a page that was conducting itself. */
    var i;
    for (i = 0; i < tops.length; i++) {
      if (Math.abs(tops[i] - y) < 6) return;
    }

    /* the next beat in the direction of travel, so a small gesture plays the
       whole movement it began: forward when the hand went down, back when it
       went up */
    var target = null;
    if (dir >= 0) {
      for (i = 0; i < tops.length; i++) {
        if (tops[i] > y + 4) { target = tops[i]; break; }
      }
    } else {
      for (i = tops.length - 1; i >= 0; i--) {
        if (tops[i] < y - 4) { target = tops[i]; break; }
      }
    }
    if (target === null) return;
    var dist = target - y;
    /* never carry the page further than about a screen: the beats are solved
       to stand closer than that, so a longer distance means the geometry is
       not the one this was written for, and the right move is to do nothing */
    if (Math.abs(dist) < 3 || Math.abs(dist) > window.innerHeight * 1.5) return;

    var t0 = performance.now();
    /* the travel time grows with the distance and is capped, and the curve is
       a smoothstep: gentle out of the rest, gentle into the landing. This is
       the glide the browser's own snap cannot be asked for. */
    var D = Math.min(1100, 420 + Math.abs(dist) * 0.55);
    var from = y;
    gliding = true;
    (function step(now) {
      if (!gliding) return;
      var p = Math.min(1, (now - t0) / D);
      var e = p * p * (3 - 2 * p);
      window.scrollTo(0, from + dist * e);
      if (p < 1) raf = requestAnimationFrame(step);
      else gliding = false;
    })(t0);
  }

  window.addEventListener("scroll", function () {
    var y = window.scrollY;
    if (y !== lastY) dir = y > lastY ? 1 : -1;
    lastY = y;
    if (gliding) return;
    clearTimeout(idle);
    idle = setTimeout(settle, 130);
  }, { passive: true });

  /* ---- the lean --------------------------------------------------------- */

  var fine = window.matchMedia("(pointer: fine)");
  var tx = 0, ty = 0, cx = 0, cy = 0;
  var leaning = false;
  var leanRaf = 0;

  function leanStep() {
    /* damped: the picture lags the hand a little, which is what makes it read
       as weight rather than as a cursor effect */
    cx += (tx - cx) * 0.085;
    cy += (ty - cy) * 0.085;
    if (Math.abs(tx - cx) < 0.05 && Math.abs(ty - cy) < 0.05) {
      cx = tx; cy = ty; leaning = false;
    }
    stage.style.setProperty("--parx", cx.toFixed(2) + "px");
    stage.style.setProperty("--pary", cy.toFixed(2) + "px");
    if (leaning) leanRaf = requestAnimationFrame(leanStep);
  }
  function lean(x, y) {
    tx = x; ty = y;
    if (!leaning) { leaning = true; leanRaf = requestAnimationFrame(leanStep); }
  }

  stage.addEventListener("pointermove", function (e) {
    if (!on() || !fine.matches) return;
    var r = stage.getBoundingClientRect();
    /* the offset is measured against the VIEWPORT centre and not the section's,
       because the section is three screens tall and its centre is off screen
       for most of the scroll */
    var nx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    var ny = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    if (r.top > window.innerHeight || r.bottom < 0) return;
    lean(Math.max(-1, Math.min(1, nx)) * 9, Math.max(-1, Math.min(1, ny)) * 6);
  });
  stage.addEventListener("pointerleave", function () { lean(0, 0); });
  still.addEventListener("change", function () {
    if (still.matches) { cancelGlide(); lean(0, 0); }
  });
})();
