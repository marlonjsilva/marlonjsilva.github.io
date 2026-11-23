// Hermes Design System — progressive enhancement.
// No framework, no dependencies. Every effect degrades to readable content.

(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // --- 1. Fit the hero wordmark to the available width ----------------------
  // CSS clamp() gets close; this makes the wordmark span the column exactly,
  // the way the reference layout does, whatever the font ends up being.
  var wordmark = document.querySelector("[data-fit]");

  function fitWordmark() {
    if (!wordmark) return;

    var box = wordmark.parentElement;
    var available = box.clientWidth;
    if (!available) return;

    wordmark.style.fontSize = "100px";
    var width = wordmark.getBoundingClientRect().width;
    if (!width) return;

    var size = Math.min((available / width) * 100, 340);
    wordmark.style.fontSize = size.toFixed(2) + "px";
  }

  if (wordmark) {
    fitWordmark();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fitWordmark);
    }

    var resizeTimer;
    window.addEventListener("resize", function () {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(fitWordmark, 80);
    });
  }

  // --- 2. Reveal on scroll ---------------------------------------------------
  var revealables = document.querySelectorAll("[data-reveal]");

  if (revealables.length) {
    if ("IntersectionObserver" in window && !reduceMotion.matches) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -10% 0px", threshold: 0.15 });

      revealables.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      revealables.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }
  }

  // --- 3. Close the mobile menu after navigating ----------------------------
  var mobileMenu = document.querySelector(".nav__mobile");
  if (mobileMenu) {
    mobileMenu.addEventListener("click", function (event) {
      if (event.target.closest("a")) mobileMenu.open = false;
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && mobileMenu.open) {
        mobileMenu.open = false;
        var summary = mobileMenu.querySelector("summary");
        if (summary) summary.focus();
      }
    });
  }
})();
