const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const dialog = card.querySelector(".dialog");
  const closeButton = dialog.querySelector(".close-dialog");

  card.addEventListener("click", () => {
    dialog.showModal();
  });
  closeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    dialog.close();
  });
});
