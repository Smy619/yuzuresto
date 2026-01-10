import { lang } from "./lang.js";
import { navActive } from "./navActive.js";
import { headerScroll } from "./headerScroll.js";
import { dots } from "./dots.js";
import { burger } from "./burger.js";
import { lightbox } from "./lightbox.js";
import { whyus } from "./whyus.js";
import { formuleTabs } from "./formuleTabs.js";
import { galleryFilter } from "./galleryFilter.js";



document.addEventListener("DOMContentLoaded", () => {
   const safe = (fn, name) => {
    try {
      fn();
    } catch (e) {
      console.error(`❌ ${name} crashed:`, e);
    }
  };

  safe(lang, "lang");
  safe(headerScroll, "headerScroll");
  safe(navActive, "navActive");
  safe(burger, "burger");
  safe(lightbox, "lightbox");
  safe(dots, "dots");
  safe(whyus, "whyus");
  safe(formuleTabs, "formuleTabs");
  safe(galleryFilter, "galleryFilter");

  const video = document.querySelector(".hero-bg-video");
  if (!video) return;

  const tryPlay = () => {
    if (!video.paused) return;
    video.play().catch(() => {});
  };

  video.addEventListener("canplay", tryPlay, { once: true });
  window.addEventListener("pageshow", tryPlay);
  document.addEventListener("click", tryPlay, { once: true });
  document.addEventListener("touchstart", tryPlay, { once: true });

  const hero = document.querySelector(".hero");
const header = document.querySelector(".site-header");

if (hero && header) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      header.classList.toggle("on-hero", entry.isIntersecting);
    },
    { threshold: 0.1 }
  );
  observer.observe(hero);
}

});
