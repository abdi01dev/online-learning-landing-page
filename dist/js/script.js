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

// Company Logo Scroller
const scroller = document.querySelector(".scroller");
const scrollerInner = scroller.querySelector(".scroller__inner");
const scrollerContent = Array.from(scrollerInner.children);

scrollerContent.forEach((item) => {
  const duplicatedItem = item.cloneNode(true);
  scrollerInner.appendChild(duplicatedItem);
});
