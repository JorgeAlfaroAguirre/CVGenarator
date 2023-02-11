const toggleContainer = document.querySelector(".toggle-container");
const toggleBurger = document.querySelectorAll(".toggle-burger");
const navText = document.querySelector(".nav_text");
toggleContainer.addEventListener("click", () => {
  toggleBurger.forEach((toggle) => {
    toggle.classList.toggle("active");
  });
  navText.classList.toggle("active");
});
