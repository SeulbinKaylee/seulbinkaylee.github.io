(() => {
  const root = document.documentElement;
  const btn = document.getElementById('themeBtn');
  btn.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  const targets = document.querySelectorAll('.section, .strip');
  if (!('IntersectionObserver' in window)) return;
  targets.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  targets.forEach(el => io.observe(el));
})();
