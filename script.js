// LOADER SETTINGS

const preloader = document.querySelector(".loader-container");
window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

// LOADER SETTINGS

// NAVBAR SETTINGS
window.onscroll = function () {
  navBar.classList.remove("show");
};

const navOpen = document.querySelector(".fa-bars");
const navClose = document.querySelector(".fa-times");
const navBar = document.querySelector(".navbar");

navOpen.addEventListener("click", () => {
  navBar.classList.add("show");
});
navClose.addEventListener("click", () => {
  navBar.classList.remove("show");
});
navOpen.forEach(function (element) {
  element.addEventListener("click", () => {
    navBar.classList.add("show");
  });
});
navClose.forEach(function (element) {
  element.addEventListener("click", () => {
    navBar.classList.remove("show");
  });
});

// NAVBAR SETTINGS
