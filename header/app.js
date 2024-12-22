const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-section1-nav-group2");
const navMenus = document.querySelector(".header-section1-nav-group2-items");
const sec2 = document.querySelector(".header-section2");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  sec2.classList.toggle("active");
  navMenus.classList.toggle("active");
});

const quotes = [
  "Believe you can and you're halfway there.",
  "Success is the sum of small efforts repeated daily.",
  "The only way out is through.",
  "Dream big. Work hard. Stay focused.",
  "Everything you need is already inside you.",
  "What you get by achieving your goals is not as important.",
  "Your time is limited, don't waste it living someone else's life.",
  "Success is not final, failure is not fatal.",
  "Life is what happens when you're busy making other plans.",
  "You miss 100% of the shots you don’t take.",
];

const quoteBtn = document.getElementById("quoteBtn");
const quoteContainer = document.getElementById("quoteContainer");
let index = 0;

quoteBtn.addEventListener("click", () => {
  console.log(index);

  quoteContainer.innerHTML = quotes[index];
  index++;
  if (index > 9) {
    index = 0;
  }
});

const form = document.getElementById("form");
let name1 = document.getElementById("name");
let tel = document.getElementById("tel");
let addy = document.getElementById("addy");
let select = document.getElementById("select");
let name1Regex = /^[A-Za-z]+([ '-][A-Za-z]+)*$/;
let addyRegex = /^[A-Za-z0-9\s,.'-/#]+$/;
let telRegex =
  /^(\+?\d{1,3}[-\s]?)?(\(?\d{1,4}\)?[-\s]?)?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,4}$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  if (!name1Regex.test(name1.value)) {
    showError(name1, "Invalid name.");
    isValid = false;
  }

  if (!addyRegex.test(addy.value)) {
    showError(addy, "Invalid address.");
    isValid = false;
  }

  if (!telRegex.test(tel.value)) {
    showError(tel, "Invalid telephone number.");
    isValid = false;
  }

  if (select.value == 0) {
    showError(select, "Please select a valid option.");
    isValid = false;
  }

  if (isValid) {
    alert("gilocavt!!!");
    form.reset();
  }
});

function showError(inputElement, message) {
  if (!inputElement.parentElement.querySelector(".error-message")) {
    const errorMessage = document.createElement("span");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = message;
    inputElement.parentElement.appendChild(errorMessage);
  }
}

name1.addEventListener("input", () => {
  if (name1Regex.test(name1.value)) {
    removeError(name1);
  }
});

addy.addEventListener("input", () => {
  if (addyRegex.test(addy.value)) {
    removeError(addy);
  }
});

tel.addEventListener("input", () => {
  if (telRegex.test(tel.value)) {
    removeError(tel);
  }
});

select.addEventListener("change", () => {
  if (select.value !== "0") {
    removeError(select);
  }
});

function removeError(inputElement) {
  const errorMessage =
    inputElement.parentElement.querySelector(".error-message");
  if (errorMessage) {
    errorMessage.remove();
  }
}
