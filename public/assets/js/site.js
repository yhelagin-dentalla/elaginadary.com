(() => {
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-mobile-menu]');
  let lastY = window.scrollY;

  const closeMenu = () => {
    menu?.classList.remove('open');
    menu?.setAttribute('aria-hidden', 'true');
    menuButton?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  menuButton?.addEventListener('click', () => {
    const opening = !menu.classList.contains('open');
    menu.classList.toggle('open', opening);
    menu.setAttribute('aria-hidden', String(!opening));
    menuButton.setAttribute('aria-expanded', String(opening));
    document.body.style.overflow = opening ? 'hidden' : '';
  });

  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (!menu?.classList.contains('open')) {
      header?.classList.toggle('hidden', y > lastY && y > 140);
    }
    lastY = y;
  }, { passive: true });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
