/*
  Forces the masthead nav to always collapse ALL links behind the
  greedy-nav hamburger toggle, instead of letting the theme's
  greedy-navigation.js decide (which shows as many links as fit and
  hides the rest — the mixed state we don't want).

  Must be loaded AFTER assets/js/main.min.js (which contains the
  greedy-navigation logic) so it runs after it, both on page load and
  on every window resize, and always wins.
*/
(function ($) {
  function collapseNav() {
    var $nav = $("nav.greedy-nav");
    if (!$nav.length) return;
    $nav.find(".visible-links").children().appendTo($nav.find(".hidden-links"));
    $nav.find(".greedy-nav__toggle").removeClass("hidden");
  }

  $(function () {
    collapseNav();
    $(window).on("resize", collapseNav);
  });
})(jQuery);
