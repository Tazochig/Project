// smoothly ro chavides dacherisas buttonze

let btn = document.getElementById("choose_us_btn");

let About_bt = document.getElementById("About_btn");
let Services_bt = document.getElementById("Services_btn");
let Pricing_bt = document.getElementById("Pricing_btn");
let Contact_bt = document.getElementById("Contact_btn");
let about_scrl = document.getElementById("about_scroll");
let services_scrl = document.getElementById("services_scroll");
let pricing_scrl = document.getElementById("pricing_scroll");
let contacts_scrl = document.getElementById("contacts_scroll");

// Scroll to "About" section
About_bt.addEventListener("click", () => {
  about_scrl.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

// Scroll to "Services" section
Services_bt.addEventListener("click", () => {
  services_scrl.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

// Scroll to "Pricing" section
Pricing_bt.addEventListener("click", () => {
  pricing_scrl.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

// Scroll to "Contacts" section
Contact_bt.addEventListener("click", () => {
  contacts_scrl.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

// Scroll to "Contacts" section from "contatc us" btn
btn.addEventListener("click", () => {
  contacts_scrl.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});
