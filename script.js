// ===============================
// SCRIPT HUB PREMIUM
// script.js
// ===============================

// Sayfa açılış animasyonu
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Kart animasyonu
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";

    setTimeout(() => {

        card.style.transition = "0.6s ease";

        card.style.opacity = "1";

        card.style.transform = "translateY(0px)";

    }, 250 * index);

});

// Mouse parallax efekti
document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 70;
    const y = (window.innerHeight / 2 - e.clientY) / 70;

    document.querySelector(".header").style.transform =
        `translate(${x}px, ${y}px)`;

});

// Hover sesi için hazır (şimdilik kapalı)
// İstersen sonra ses ekleriz

// Sayfa geçiş efekti
cards.forEach(card => {

    card.addEventListener("click", function () {

        this.style.transform = "scale(.96)";

    });

});

// Gelecekte arama sistemi buraya eklenecek

// Gelecekte tema sistemi buraya eklenecek

// Gelecekte ziyaretçi sayacı buraya eklenecek

// Gelecekte loading ekranı buraya eklenecek
