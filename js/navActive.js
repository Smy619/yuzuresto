export function navActive(){
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      navLinks.forEach(el => el.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
}