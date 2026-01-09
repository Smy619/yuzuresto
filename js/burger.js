// burger.js
export function burger() {
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("burger-toggle");

  if (!header || !toggle) return;

  toggle.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });
}

