export function topbar() {
  const header = document.querySelector('.site-header');
  if (!header) { console.warn('[topbar] .site-header not found'); return; }

  const threshold = 50;

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > threshold);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}