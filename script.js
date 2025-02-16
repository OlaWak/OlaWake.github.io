// Typing Animation for Hero Text
const typedHero = document.getElementById("typed-hero");
const heroText = "Ola Waked";
let index = 0;

function typeHero() {
  if (index < heroText.length) {
    typedHero.innerHTML += heroText.charAt(index);
    index++;
    setTimeout(typeHero, 150);
  }
}
document.addEventListener("DOMContentLoaded", typeHero);

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true
});

// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
