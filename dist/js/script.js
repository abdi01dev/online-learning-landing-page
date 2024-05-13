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

window.addEventListener("resize", () => {
  logoScrollerHandler();
});

window.addEventListener("load", () => {
  logoScrollerHandler();
});

function logoScrollerHandler() {
  if (window.innerWidth <= 1024) {
    scrollerInner.setAttribute("data-animation", true);
  } else {
    scrollerInner.setAttribute("data-animation", false);
  }
}

// Testimonial Slider
const right = document.querySelector("section#testimonial .container .right");
const cardsWrapper = document.querySelector(".cards__wrapper");
const cardsButtons = Array.from(document.querySelectorAll(".right button.card__button"));

let index = 1;
slideButtonHandler();
decorationAdjusment();

cardsButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.getAttribute("id") == "previous") {
      slideHandler("previous");
      index--;
      disableButton(btn);
    } else if (btn.getAttribute("id") == "next") {
      slideHandler("next");
      index++;
      disableButton(btn);
    }
    slideButtonHandler();
  });
});

function slideButtonHandler() {
  if (index == 1) {
    cardsButtons[0].style.display = "none";
    cardsButtons[1].style.display = "flex";
  } else if (index == 2) {
    cardsButtons[0].style.display = "flex";
    cardsButtons[1].style.display = "flex";
  } else if (index == 3) {
    cardsButtons[1].style.display = "none";
  }
}

function slideHandler(direction) {
  if (window.innerWidth >= 640 && window.innerWidth < 1024) {
    const container = document.querySelector("#integrations .container");
    if (direction == "next") {
      cardsWrapper.scrollLeft += window.innerWidth - (16 + container.offsetLeft * 2);
    } else if (direction == "previous") {
      cardsWrapper.scrollLeft -= window.innerWidth - (16 + container.offsetLeft * 2);
    }
  } else if (window.innerWidth >= 1024) {
    if (direction == "next") {
      cardsWrapper.scrollLeft += 505;
    } else if (direction == "previous") {
      cardsWrapper.scrollLeft -= 505;
    }
  } else {
    if (direction == "next") {
      cardsWrapper.scrollLeft += window.innerWidth - 16;
    } else if (direction == "previous") {
      cardsWrapper.scrollLeft -= window.innerWidth - 16;
    }
  }
}

function disableButton(el) {
  el.disabled = true;
  setTimeout(() => {
    el.disabled = false;
  }, 500);
}

function decorationAdjusment() {
  // button x offset
  const buttons = Array.from(document.querySelectorAll(".card__button"));
  const img = document.querySelector(".cards__wrapper img");

  buttons[0].style.left = `${img.offsetLeft}px`;
  buttons[1].style.right = `${img.offsetLeft}px`;
}
