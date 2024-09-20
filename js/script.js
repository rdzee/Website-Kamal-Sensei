//Toggle active class

const navbarNav = document.querySelector(".navbar-nav");

//When hamburger clicked
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Click outside sidebar for deleting nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//Choosel ML Button
const optionMenu = document.querySelector(".choose-ml"),
  selectBtn = optionMenu.querySelector(".choose-btn"),
  options = optionMenu.querySelectorAll(".option"),
  btn_down = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

//Selected Options
options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    btn_down.innerText = selectedOption;
    optionMenu.classList.remove("active");
  });
});
