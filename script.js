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

// FORM VALIDATION

function validateForm() {
  let name = document.myForm.name.value;
  let emaill = document.myForm.email.value;
  let password = document.myForm.password.value;
  let atposition = emaill.indexOf("@");
  let dotposition = emaill.lastIndexOf(".");

  if (name == null || name == "") {
    alert("Name cannot be blank.");
  } else if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= emaill.length
  ) {
    alert("Please enter a valid email address.");
  } else if (password.length < 6) {
    alert("Password must be atleast 6 characters long.");
  } else if ((name !== "") & (emaill !== "")) {
    document.myForm.reset();
    alert("Successfully signed up.");
  }
  return false;
}

function validateEmail() {
  let emaill = document.myForm.email.value;
  let password = document.myForm.password.value;
  let atposition = emaill.indexOf("@");
  let dotposition = emaill.lastIndexOf(".");

  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= emaill.length
  ) {
    alert("Please enter a valid email address.");
  } else if (password.length < 6) {
    alert("Password must be atleast 6 characters long.");
  } else if (emaill !== "") {
    document.myForm.reset();
    alert("Successfully signed in");
  }
  return false;
}
// FORM VALIDATION
