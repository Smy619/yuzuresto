export function burger(){
  const burger = document.getElementById('burger-toggle');
  const nav = document.getElementById('mobile-nav');

  burger.addEventListener("click",() => {
     nav.classList.toggle("open");
     burger.classList.toggle("active");
  });
};