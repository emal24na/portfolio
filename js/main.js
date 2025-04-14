// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Shrink header on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//MENU
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuToggle.classList.toggle("open");

  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !expanded);
});

// Reveal animation on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document
  .querySelectorAll(".editorial-section, .hero, .project-card")
  .forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });

// FORM

const form = document.querySelector("form");
const statusMessage = document.querySelector(".form-status-message");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      showMessage("Thank you! Your message has been sent. ✨", "success");
      form.reset();
    } else {
      showMessage("Oops! Something went wrong. Please try again.", "error");
    }
  } catch (error) {
    showMessage("Network error. Please check your connection.", "error");
  }
});

function showMessage(message, type) {
  statusMessage.textContent = message;
  statusMessage.className = "form-status-message visible " + type;

  setTimeout(() => {
    statusMessage.classList.remove("visible");
  }, 5000); // meddelandet försvinner efter 5 sek
}
