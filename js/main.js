/* INDEX TECHNOLOGIES — main.js */

/* ── Navbar: shadow on scroll ─────────────────────────────────────────── */
(function () {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
})();

/* ── Scroll reveal ────────────────────────────────────────────────────── */
(function () {
  const els = document.querySelectorAll(
    '.reveal, .dashboard-card, .workflow-card, .city-card, .country-card, ' +
    '.metric-item, .stat-item, .feature-item, .service-highlight, .bridge-highlight'
  );
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        e.target.style.transitionDelay = (i % 4) * 0.1 + 's';
        e.target.classList.add('visible', 'reveal');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });
})();

/* ── Active nav link by current page ─────────────────────────────────── */
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = (link.getAttribute('href') || '').split('#')[0].split('/').pop();
    if (href === page) link.classList.add('active');
    else if (page === '' && href === 'index.html') link.classList.add('active');
  });
})();
