// /js/nav.js
(function () {
  function init() {
    const nav = document.getElementById('nav-menu');
    const toggle = document.querySelector('.menu-toggle');
    if (!nav || !toggle) return;

    // Open/close
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('show');
      toggle.setAttribute('aria-expanded', String(open));
    });

    // Close after tapping a link (mobile UX)
    document.addEventListener('click', (e) => {
      if (e.target.closest('#nav-menu a')) {
        nav.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on desktop resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) {
        nav.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // ESC to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        nav.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
