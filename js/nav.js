// /js/nav.js
(function () {
  function closeMenu(nav, toggle) {
    nav.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function init() {
    const nav = document.getElementById('nav-menu');
    const toggle = document.querySelector('.menu-toggle');

    if (!nav || !toggle) return;

    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('show');
      toggle.setAttribute('aria-expanded', String(open));
    });

    document.addEventListener('click', function (e) {
      const clickedLink = e.target.closest('#nav-menu a');
      const clickedToggle = e.target.closest('.menu-toggle');
      const clickedInsideNav = e.target.closest('#nav-menu');

      if (clickedLink) {
        closeMenu(nav, toggle);
        return;
      }

      if (!clickedInsideNav && !clickedToggle && nav.classList.contains('show')) {
        closeMenu(nav, toggle);
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) {
        closeMenu(nav, toggle);
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('show')) {
        closeMenu(nav, toggle);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();