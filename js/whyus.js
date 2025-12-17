
export function whyus() {
  const container = document.querySelector(".whyus-grid");

  if (!container) return;

  container.addEventListener("click", (e) => {
    const card = e.target.closest(".whyus-card");
    if (!card) return;

   
    document.querySelectorAll(".whyus-card").forEach(c => c.classList.remove("active"));

  
    card.classList.add("active");
  });
}
