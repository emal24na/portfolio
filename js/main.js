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

// Form alert
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for your message! I'll get back to you soon.");
  this.reset();
});
