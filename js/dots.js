export function dots() {
  const viewport = document.querySelector("#avis .slider-viewport");
  const track = viewport.querySelector(".slider-track");
  const slides = Array.from(track.children);
  const dotsBox = document.querySelector("#avis .dots");

  function perView() {
    const vw = viewport.offsetWidth;
    const w0 = slides[0].offsetWidth;
    return Math.max(1, Math.round(vw / w0));
  }

  let page = 0;
  let timer;

  function pagesCount() {
    return Math.ceil(slides.length / perView());
  }

  function buildDots() {
    dotsBox.innerHTML = "";
    for (let i = 0; i < pagesCount(); i++) {
      const b = document.createElement("button");
      if (i === 0) b.classList.add("active");
      b.addEventListener("click", () => goTo(i));
      dotsBox.appendChild(b);
    }
  }

  function update() {
    track.style.transform = `translateX(-${page * 100}%)`;
    dotsBox
      .querySelectorAll("button")
      .forEach((d, i) => d.classList.toggle("active", i === page));
  }

  function goTo(p) {
    const max = pagesCount();
    page = (p + max) % max;
    update();
  }

  function nextPage() {
    goTo(page + 1);
  }

  function start() {
    stop();
    timer = setInterval(nextPage, 4000);
  }
  function stop() {
    clearInterval(timer);
  }

  viewport.addEventListener("mouseenter", stop);
  viewport.addEventListener("mouseleave", start);

  buildDots();
  update();
  start();
  window.addEventListener("resize", () => {
    buildDots();
    page = 0;
    update();
  });
}
