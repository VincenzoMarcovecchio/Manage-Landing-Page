const error = document.querySelector(".error");

const email = document.querySelector(".email");

function checkInput() {
  const emailValue = email.value.trim();
  if (emailValue === "") {
    setErrorFor();
    changePlaceHolder();
  } else if (!isEmail(emailValue)) {
    setErrorFor();
    changePlaceHolder();
  } else {
    setSuccessFor();
  }
}

function isEmail() {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function setErrorFor() {
  error.style.display = "block";
}
function setSuccessFor() {
  error.style.display = "Inherit";
}
function changePlaceHolder() {
  email.placeholder = "email@example.com";
  email.placeholder.style.color = "red";
}

document.querySelector(".form").addEventListener("submit", e => {
  e.preventDefault();
  checkInput();
});

const hamburger = document.querySelector(".hamburger-icon");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("hamburger-close");
  showMenu();
});

function showMenu() {
  const menu = document.querySelector(".menu");

  menu.classList.toggle("show");
}
