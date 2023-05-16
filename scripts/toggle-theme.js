const body = document.querySelector("body");
const toggleButton = document.querySelector(".theme-toggle");
const lightOnButton = document.querySelector(".light-mode-on");
const darkOnButton = document.querySelector(".dark-mode-on");
let lightModeOn = body.classList.contains("light-mode");
toggleButton.addEventListener("click", (e) => {
    lightModeOn = !lightModeOn;
    body.classList.toggle("light-mode");
    lightOnButton.classList.toggle("hide");
    darkOnButton.classList.toggle("hide");
});
