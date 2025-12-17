import { lang } from "./lang.js";
import { navActive } from "./navActive.js";
import { topbar } from "./topbar.js";
import { dots } from "./dots.js";
import { burger } from "./burger.js";
import { lightbox } from "./lightbox.js";
import { whyus } from "./whyus.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOMContentLoaded fired");

  // 任何模块出错，都不会影响后面的 video
  const safe = (fn, name) => {
    try {
      fn();
    } catch (e) {
      console.error(`❌ ${name} crashed:`, e);
    }
  };

  safe(lang, "lang");
  safe(topbar, "topbar");
  safe(navActive, "navActive");
  safe(burger, "burger");
  safe(lightbox, "lightbox");
  safe(dots, "dots");
  safe(whyus, "whyus");

  // ===== HERO VIDEO (必须放最后，且不被其他模块影响) =====
  const video = document.querySelector(".hero-bg-video");
  console.log("🎥 video element:", video);

  if (!video) return;

  const playHard = () => {
    console.log("▶️ try play, paused =", video.paused, "readyState =", video.readyState);
    video.play().then(() => {
      console.log("✅ playing!");
    }).catch((err) => {
      console.warn("⚠️ play blocked:", err);
    });
  };

  // 等视频真的可播放再试（关键）
  video.addEventListener("canplay", playHard, { once: true });

  // 首次加载 / 初始化后再试
  playHard();
  setTimeout(playHard, 300);
  setTimeout(playHard, 1000);

  // BFCache 恢复也再试
  window.addEventListener("pageshow", playHard);

  // 用户第一次交互兜底
  document.addEventListener("click", playHard, { once: true });
  document.addEventListener("touchstart", playHard, { once: true });
});


