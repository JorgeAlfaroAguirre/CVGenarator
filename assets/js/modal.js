const login_modal = document.querySelector(".modal__login");
const btn_login_modal = document.querySelector(".login__login");
const btn_close__login_modal = document.querySelector(".btn__close_login");
const main__background = document.querySelector(".main__background");
const inputs = document.querySelectorAll(".input");

btn_login_modal.addEventListener("click", () => {
  main__background.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  login_modal.style.display = "block";
});

btn_close__login_modal.addEventListener("click", () => {
  inputs.forEach((input) => {
    input.value = "";
  });
  main__background.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  login_modal.style.display = "none";
});
