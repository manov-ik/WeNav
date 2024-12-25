'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);
// Function to show the popup
function openPopup() {
  const popup = document.getElementById('popup');
  if (popup) {
    popup.classList.remove('hidden');
  }
}

// Function to hide the popup
function closePopup() {
  const popup = document.getElementById('popup');
  if (popup) {
    popup.classList.add('hidden');
  }
}

// Function to redirect to the payment page
function openPaymentPage() {
  const paymentUrl = "https://rzp.io/rzp/7daytech";
  window.open(paymentUrl, "_blank");
}

function toggleFAQ(faqElement) {
  faqElement.classList.toggle("open");
}

//typing
document.addEventListener("DOMContentLoaded", () => {
  const dynamicTxt = document.querySelector(".dynamic-txt");
  const phrases = [
    "Are You Ready to Dive into the Future of Tech?",
    "Could Tech Be Your Perfect Fit?",
    "Developer",
    "Which Cutting-Edge Tech Field Will You Explore Next?",
    "Find out with us!!!!"
  ];
  
  let index = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    const currentPhrase = phrases[index];
    
    if (!deleting) {
      dynamicTxt.textContent = currentPhrase.slice(0, charIndex++);
      if (charIndex > currentPhrase.length) {
        deleting = true;
        setTimeout(typeEffect, 2000);  // Pause before deleting
      } else {
        setTimeout(typeEffect, 100);  // Typing speed
      }
    } else {
      dynamicTxt.textContent = currentPhrase.slice(0, charIndex--);
      if (charIndex < 0) {
        deleting = false;
        index = (index + 1) % phrases.length;
        setTimeout(typeEffect, 500);  // Pause before typing next
      } else {
        setTimeout(typeEffect, 50);  // Deleting speed
      }
    }
  }

  typeEffect();
});
