export function burger() {
  const burger = document.getElementById("burger-toggle");
  const header = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll(".site-nav a");

  if (!burger || !header) return;

  const closeMenu = () => {
    header.classList.remove("nav-open");
    burger.classList.remove("active");
    document.body.classList.remove("no-scroll");
  };

  const toggleMenu = () => {
    header.classList.toggle("nav-open");
    burger.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  };

  if (!burger.dataset.bound) {
    burger.addEventListener("click", toggleMenu);
    burger.dataset.bound = "true";
  }

  navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });
}

