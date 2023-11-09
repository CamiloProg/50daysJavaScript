const cards = document.querySelectorAll(".card");
var elemento = document.querySelector('title');
cards.forEach((card) => {
  card.addEventListener("click", () => {

    cards.forEach((c) => {
      if (c !== card) {
        c.classList.remove("expanded");
      }
    });
    card.classList.add("expanded");

  });
});
