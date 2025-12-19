export function topbar() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  let lastScrollY = window.scrollY;

  const update = () => {
    // menu open -> freeze header
    if (header.classList.contains("nav-open")) return;

    const current = window.scrollY;
    const headerHeight = header.offsetHeight;

    // optional: hero zone behavior
    if (current < 80) {
      header.classList.add("on-hero");
      header.classList.remove("is-scrolled");
      header.style.transform = "translateY(0)";
      lastScrollY = current;
      return;
    }

    header.classList.remove("on-hero");
    header.classList.add("is-scrolled");

    // down -> hide, up -> show
    if (current > lastScrollY && current > headerHeight) {
      header.style.transform = `translateY(-${headerHeight}px)`;
    } else {
      header.style.transform = "translateY(0)";
    }

    lastScrollY = current;
  };

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update, { passive: true });
  update();
}



