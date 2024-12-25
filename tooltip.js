tippy(".dot", {
  content: (reference) => {
    const info = reference.getAttribute("data-info");
    const imageUrl = reference.getAttribute("data-image");
    return `<div>
            <img src="${imageUrl}" alt="${info}" style="display: block; margin: 0 auto;" width="150" />
            <p style="margin: 0; text-align: center; font-family: Inter; font-size: 23px; ">${info}</p>
            </div>`;
  },
  allowHTML: true,
  placement: "top",
  animation: "scale",
  followCursor: true,
  theme: "light",
  animation: "fade",
  duration: "350"
});

// popup video
function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}
