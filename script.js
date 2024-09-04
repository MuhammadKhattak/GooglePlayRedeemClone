document.addEventListener("DOMContentLoaded", () => {
  //Navbar shadow controls
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (scrollY > 0) {
      nav.classList.add("shadow");
    } else {
      nav.classList.remove("shadow");
    }
  });

  //Games carousel control
});

const redeemButton = document.getElementById("redeem-button");
const modalOverlay = document.getElementById("modal-overlay");
const body = document.querySelector(".body");

redeemButton.addEventListener("click", () => {
  modalOverlay.classList.remove("hidden");
  body.style.height = "100";
  body.style.overflowY = "hidden";
});

modalOverlay.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
  body.style.height = "initial";
  body.style.overflowY = "initial";
});
