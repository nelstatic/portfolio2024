// Récupérer tous les éléments ayant un dialog
const cards = document.querySelectorAll(".card");

// Ajouter des événements pour chaque carte
cards.forEach((card) => {
  const dialog = card.querySelector(".dialog"); // Dialog associé à la carte
  const closeButton = dialog.querySelector(".close-dialog");

  // Ouvrir le dialog au clic sur la carte
  card.addEventListener("click", () => {
    dialog.showModal();
  });

  // Fermer le dialog au clic sur le bouton "Fermer"
  closeButton.addEventListener("click", () => {
    dialog.close();
  });
});
