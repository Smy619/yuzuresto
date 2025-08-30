import { lang } from "./lang.js";
import { navActive } from "./navActive.js";
import { topbar } from "./topbar.js";
import { dots } from "./dots.js";
import { burger } from "./burger.js";

document.addEventListener("DOMContentLoaded",()=>{
  lang();
  topbar();
  navActive();
  burger();
  dots();
});
