// smoothly ro chavides dacherisas buttonze
let btn = document.getElementById("choose_us_btn");
let ctn = document.getElementById("contacts");

btn.addEventListener("click", () => {
  ctn.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});
// videoze custom buttoni
const video = document.getElementsByClassName("custom-video__video");
let i;
for (i = 0; i < video.length; i++) {
  video[i].addEventListener("click", function () {
    const controls = this.nextElementSibling;
    if (controls.innerHTML === "▶") {
      controls.innerHTML = "| |";
      this.play();
    } else {
      controls.innerHTML = "▶";
      this.pause();
    }
  });
  video[i].addEventListener("mouseout", function () {
    const controls = this.nextElementSibling;
    if (!this.paused) {
      controls.style.display = "none";
    }
  });
  video[i].addEventListener("mouseover", function () {
    const controls = this.nextElementSibling;
    controls.style.display = "flex";
  });
  video[i].addEventListener(
    "ended",
    function () {
      const controls = this.nextElementSibling;
      controls.style.display = "flex";
      controls.innerHTML = "▶";
    },
    false
  );
}
