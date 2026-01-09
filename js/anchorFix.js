
// anchorFix.js
export function anchorFix() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  let lock = false;

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", () => {
      // 🔒 锁住 headerScroll
      lock = true;

      // 强制显示 header
      header.classList.remove("is-hidden");

      // 100ms 后解锁（浏览器已完成 anchor 滚动）
      setTimeout(() => {
        lock = false;
      }, 120);
    });
  });

  // 向 headerScroll 暴露锁
  window.__HEADER_SCROLL_LOCK__ = () => lock;
}

