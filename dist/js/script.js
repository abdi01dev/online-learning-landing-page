// Body Debug
window.addEventListener("keyup", (e) => {
  if (e.key == "a") {
    document.body.classList.toggle("debug");
  }
});

window.addEventListener("dblclick", () => {
  document.body.classList.toggle("debug");
});

// Hamburger Menu Toggle
const navbar = document.querySelector("nav");
const navbarExtra = navbar.querySelector(".navbar__extra");
const hamburgerToggle = document.querySelector("#hamburger-toggle");

hamburgerToggle.addEventListener("click", () => {
  hamburgerToggle.classList.toggle("active");
  navbarExtra.classList.toggle("active");
});
