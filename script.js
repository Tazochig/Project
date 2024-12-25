// pricing divs script

let pricingDivs = document.querySelectorAll(".pricing_div");

let absolute = document.querySelector(".absolute_recommended");

pricingDivs.forEach((div) => {
  let height = div.offsetHeight;
  let add = 100;

  div.addEventListener("mouseover", () => {
    div.classList.add("clicked_pricing_div");

    if (div.classList.contains("clicked_pricing_div")) {
      div.style.height = height + add + "px";
      div.style.transition = "0.5s";
    } else {
      div.style.height = height + "px";
    }

    if (
      div.classList.contains("clicked_pricing_div") &&
      div.classList.contains("recommended")
    ) {
      absolute.style.display = "block";
    } else {
      absolute.style.display = "none";
    }

    pricingDivs.forEach((otherDiv) => {
      if (otherDiv !== div) {
        otherDiv.classList.remove("clicked_pricing_div");
        otherDiv.style.height = height + "px";
      }
    });
  });
});

// regex validation and quotes with burger menu
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
  "ადამიანები ხშირად გეტყვიან, რომ არ გამოიგვაო, უნა გამაიყვანო!",
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
    showError(name1, "Invalid Name.");
    isValid = false;
  }

  if (!addyRegex.test(addy.value)) {
    showError(addy, "Invalid Address.");
    isValid = false;
  }

  if (!telRegex.test(tel.value)) {
    showError(tel, "Invalid Number.");
    isValid = false;
  }

  if (select.value == 0) {
    showError(select, "Invalid Option.");
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

let container = document.getElementById("oe");
const users = ["Tazochig", "varg814", "Tazochig", "varg814", "Tazochig"];
i = 0;
async function fetchSlides() {
  try {
    let data = await fetch(`https://api.github.com/users/${users[i]}`);
    let user = await data.json();

    const reviewCount = Math.floor(Math.random() * 5) + 1;
    const commentText =
      "Special thanks to Dito for making this project possible. Your dedication, hard work, and support have been invaluable. We truly appreciate your contributions and couldn't have done it without you. Thank you!";

    let stars = document.createElement("div");
    stars.classList.add("stars");
    for (let index = 0; index < reviewCount; index++) {
      let star = document.createElement("i");
      star.classList.add("fa-solid", "fa-star");
      star.style.color = "gold";
      stars.appendChild(star);
    }

    let comment = document.createElement("p");
    comment.innerHTML = commentText;

    let commentContainer = document.createElement("div");
    commentContainer.classList.add("larger_paragraph");
    commentContainer.style.height = "120px";
    commentContainer.style.overflow = "scroll";
    commentContainer.appendChild(comment);

    let userImg = document.createElement("img");
    userImg.classList.add("user_img");
    userImg.src = user.avatar_url;

    let userHeading = document.createElement("h1");
    userHeading.classList.add("small_heading");
    userHeading.innerHTML = user.name || user.login;

    let userParagraph = document.createElement("p");
    userParagraph.classList.add("smaller_paragraph");
    userParagraph.innerHTML = "Reviews On Google";

    let userText = document.createElement("div");
    userText.classList.add("user_text");
    userText.appendChild(userHeading);
    userText.appendChild(userParagraph);

    let userWrapper = document.createElement("div");
    userWrapper.classList.add("user");
    userWrapper.appendChild(userImg);
    userWrapper.appendChild(userText);

    let card = document.createElement("swiper-slide");
    card.appendChild(stars);
    card.appendChild(commentContainer);
    card.appendChild(userWrapper);

    container.appendChild(card);

    i++;

    if (i < users.length) {
      fetchSlides();
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

fetchSlides();

const swiperEl = document.querySelector(".mySwiper");

const swiperParams = {
  slidesPerView: 1,
  breakpoints: {
    1160: {
      slidesPerView: 2,
    },
  },
  on: {
    init() {},
  },
};

Object.assign(swiperEl, swiperParams);

const contactsForm = document.getElementById("contactsForm");
let contactsName = document.getElementById("contactsName");
let contactsLastName = document.getElementById("contactsLastName");
let contactsEmail = document.getElementById("contactsEmail");
let contactsSubject = document.getElementById("contactsSubject");
let contactsTextarea = document.getElementById("contactsTextarea");

let contactsNameRegex = /^[A-Za-z]+([ '-][A-Za-z]+)*$/;
let contactsLastNameRegex = /^[A-Za-z]+([ '-][A-Za-z]+)*$/;
let contactsEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let contactsSubjectRegex = /^[A-Za-z0-9\s.,?!'-]+$/;
let contactsTextareaRegex = /^.{1,500}$/;

contactsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;

  if (!contactsNameRegex.test(contactsName.value)) {
    showError(contactsName, "Invalid Name.");
    isValid = false;
  }

  if (!contactsLastNameRegex.test(contactsLastName.value)) {
    showError(contactsLastName, "Invalid Last Name.");
    isValid = false;
  }

  if (!contactsEmailRegex.test(contactsEmail.value)) {
    showError(contactsEmail, "Invalid Email.");
    isValid = false;
  }

  if (!contactsSubjectRegex.test(contactsSubject.value)) {
    showError(contactsSubject, "Invalid Subject.");
    isValid = false;
  }

  if (!contactsTextareaRegex.test(contactsTextarea.value)) {
    showError(contactsTextarea, "Invalid Message.");
    isValid = false;
  }

  if (isValid) {
    alert("gilocavt!!!");
    contactsForm.reset();
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

contactsName.addEventListener("input", () => {
  if (contactsNameRegex.test(contactsName.value)) {
    removeError(contactsName);
  }
});

contactsLastName.addEventListener("input", () => {
  if (contactsLastNameRegex.test(contactsLastName.value)) {
    removeError(contactsLastName);
  }
});

contactsEmail.addEventListener("input", () => {
  if (contactsEmailRegex.test(contactsEmail.value)) {
    removeError(contactsEmail);
  }
});

contactsSubject.addEventListener("input", () => {
  if (contactsSubjectRegex.test(contactsSubject.value)) {
    removeError(contactsSubject);
  }
});

contactsTextarea.addEventListener("input", () => {
  if (contactsTextareaRegex.test(contactsTextarea.value)) {
    removeError(contactsTextarea);
  }
});

function removeError(inputElement) {
  const errorMessage =
    inputElement.parentElement.querySelector(".error-message");
  if (errorMessage) {
    errorMessage.remove();
  }
}

const footerForm = document.getElementById("footerForm");
let footerEmail = document.getElementById("footerEmail");
let footerEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

footerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;

  if (!footerEmailRegex.test(footerEmail.value)) {
    showError(footerEmail, "Invalid Email.");
    isValid = false;
  }

  if (isValid) {
    alert("gilocavt!!!");
    footerForm.reset();
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

footerEmail.addEventListener("input", () => {
  if (footerEmailRegex.test(footerEmail.value)) {
    removeError(footerEmail);
  }
});

let priceHeadings = document.querySelectorAll(".price");

async function fetchPrice() {
  try {
    // Fetch product data from the API
    let data = await fetch("https://fakestoreapi.com/products/1");
    let product = await data.json();

    // Loop through all price elements and update them
    priceHeadings.forEach((priceHeading) => {
      priceHeading.innerHTML = `$${product.price}`; // Set price for each element
    });
  } catch (error) {
    console.error("Error fetching the product price:", error);

    // If an error occurs, update all elements with an error message
    priceHeadings.forEach((priceHeading) => {
      priceHeading.innerHTML = "Error loading price"; // Optional: Display an error message if fetch fails
    });
  }
}

// Call the fetchPrice function to load the price
fetchPrice();
