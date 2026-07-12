// ===============================
// Portfolio JavaScript
// ===============================

const topBtn = document.getElementById("topBtn");
const header = document.querySelector("header");

// Show / Hide Scroll Button & Navbar Shadow
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";

    } else {

        topBtn.style.display = "none";
        header.style.boxShadow = "none";

    }

});

// Scroll To Top
topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});
// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
// ===============================
// Reveal Animation
// ===============================

const cards = document.querySelectorAll(
  ".project-card, .skill-card, .service-card, .why-card"
);

function revealCards() {
  cards.forEach(function(card) {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);
// ===============================
// Typing Animation
// ===============================

const typingText = [
  "Frontend Developer",
  "React Developer",
  "MERN Stack Enthusiast"
];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeEffect() {

  if (!typingElement) return;

  if (charIndex < typingText[textIndex].length) {

    typingElement.textContent += typingText[textIndex].charAt(charIndex);
    charIndex++;

    setTimeout(typeEffect, 100);

  } else {

    setTimeout(eraseEffect, 1500);

  }

}

function eraseEffect() {

  if (charIndex > 0) {

    typingElement.textContent = typingText[textIndex].substring(0, charIndex - 1);
    charIndex--;

    setTimeout(eraseEffect, 50);

  } else {

    textIndex++;

    if (textIndex >= typingText.length) {
      textIndex = 0;
    }

    setTimeout(typeEffect, 300);

  }

}

typeEffect();

// ===============================
// Dark Mode
// ===============================

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("dark")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

// ===============================
// Contact Form
// ===============================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("✅ Thank you! Your message has been received.");

        form.reset();

    });

}
