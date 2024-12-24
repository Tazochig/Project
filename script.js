// pricing divs script

let pricingDivs = document.querySelectorAll(".pricing_div");
let absolute = document.querySelector(".absolute_recommended");

pricingDivs.forEach((div) => {
  let height = div.offsetHeight;
  let add = 100;

  div.addEventListener("mouseenter", () => {
    div.classList.toggle("clicked_pricing_div");

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

const data = [
  {
    full_name: "Alice Johnson",
    comment:
      "Absolutely love this product! It’s so easy to use, and the features are fantastic. Totally worth the purchase!",
    review: 2,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    full_name: "Bob Smith",
    comment:
      "This product is amazing. It works exactly as advertised, and the quality is top-notch. I’m extremely happy with it!",
    review: 5,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    full_name: "Charlie Brown",
    comment:
      "An excellent product! It’s fast, intuitive, and really easy to navigate. It’s everything I needed and more.",
    review: 4,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    full_name: "David Lee",
    comment:
      "I’m very impressed with this! It performs flawlessly and the design is sleek and modern. Highly recommend.",
    review: 5,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    full_name: "Eva White",
    comment:
      "I’m extremely satisfied with this purchase. It’s user-friendly, reliable, and has exceeded my expectations in every way.",
    review: 5,
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

let container = document.getElementById("oe");
// FETCH SLIDER
function fetchData() {
  data.forEach((item) => {
    let stars = document.createElement("div");

    stars.classList.add("stars");

    for (let index = 0; index < item.review; index++) {
      let star = document.createElement("i");
      star.classList.add("fa-solid", "fa-star");
      star.style.color = "gold";
      stars.appendChild(star);
    }

    // MIDDLE
    let comment = document.createElement("p");
    comment.innerHTML = item.comment;

    let commentContainer = document.createElement("div");
    commentContainer.classList.add("comment");
    commentContainer.appendChild(comment);
    // MIDDLE

    // BOTTOM

    let userImg = document.createElement("img");
    userImg.classList.add("user_img");
    userImg.src = item.image;

    let userHeading = document.createElement("h1");
    userHeading.classList.add("user_heading");
    userHeading.innerHTML = item.full_name;
    let userParagraph = document.createElement("p");
    userParagraph.classList.add("user_paragraph");
    userParagraph.innerHTML = "Reviews On Google";

    let userText = document.createElement("div");
    userText.classList.add("user_text");
    userText.appendChild(userHeading);
    userText.appendChild(userParagraph);

    let user = document.createElement("div");
    user.classList.add("user");
    user.appendChild(userImg);
    user.appendChild(userText);

    let card = document.createElement("swiper-slide");
    container.appendChild(card);
    card.appendChild(stars);
    card.appendChild(commentContainer);
    card.appendChild(user);
  });
}

fetchData();

const swiperEl = document.querySelector(".mySwiper");

// swiper parameters
const swiperParams = {
  slidesPerView: 1,
  breakpoints: {
    1160: {
      slidesPerView: 2,
    },
  },
  on: {
    init() {
      // ...
    },
  },
};

// now we need to assign all parameters to Swiper element
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
