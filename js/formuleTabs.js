export function formuleTabs() {
  const tabs = document.querySelectorAll(".formule-tab");
  const panels = document.querySelectorAll(".formule-panel");

  if (!tabs.length || !panels.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.formule;

      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      panels.forEach((panel) => {
        panel.classList.toggle(
          "active",
          panel.dataset.formule === target
        );
      });
    });
  });
}
