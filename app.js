let cards = document.querySelectorAll(".flip-card");

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        card.classList.toggle("active");
    });
});