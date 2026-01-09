export function headerScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  let lastScrollY = window.scrollY;

  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.scrollY;

      // 向下滚动 → 隐藏
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.classList.add("is-hidden");
      } 
      // 向上滚动 → 显示
      else {
        header.classList.remove("is-hidden");
      }

      lastScrollY = currentScrollY;
    },
    { passive: true }
  );
}



