// Эффект появления секций при скролле
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// Скролл к секции при нажатии "Book Now"
document.querySelector(".learn-more").addEventListener("click", () => {
  document.querySelector("#destinations").scrollIntoView({ behavior: "smooth" });
});

// Эффект клика (ripple)
document.addEventListener("click", e => {
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 1000);
});

// Меню бургер
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Изменение шапки при скролле
window.addEventListener("scroll", () => {
  document.querySelector("header").classList.toggle("scrolled", window.scrollY > 50);
});
