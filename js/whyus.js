export function whyus() {
  const cards = document.querySelectorAll(".whyus-card");

  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener("click", () => {
 
      cards.forEach(c => c.classList.remove("active"));

      card.classList.add("active");
    });
  });
}
