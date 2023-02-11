const toggleContainer = document.querySelector(".toggle-container");
const toggleBurger = document.querySelectorAll(".toggle-burger");
const navText = document.querySelector(".nav_text");
const btnSave = document.querySelector(".btn_perfil_save");

const showToast = (message) => {
  // Create the toast container
  const toastContainer = document.createElement("div");
  toastContainer.style.position = "absolute";
  toastContainer.style.top = "10px";
  toastContainer.style.right = "50%";
  toastContainer.style.backgroundColor = "red";
  toastContainer.style.color = "#fff";
  toastContainer.style.padding = "10px";
  toastContainer.style.borderRadius = "5px";
  toastContainer.style.display = "flex";
  toastContainer.style.alignItems = "center";
  toastContainer.style.justifyContent = "center";
  toastContainer.style.fontSize = "1em";

  // Create the message text
  const toastMessage = document.createElement("span");
  toastMessage.innerHTML = message;

  // Append the message to the container
  toastContainer.appendChild(toastMessage);

  // Append the container to the body
  document.body.appendChild(toastContainer);

  // Remove the toast after 5 seconds
  setTimeout(() => {
    document.body.removeChild(toastContainer);
  }, 5000);
};

const clearForm = (arrayInputs) => {
  Array.from(arrayInputs).every((input) => (input.value = ""));
};

toggleContainer.addEventListener("click", () => {
  toggleBurger.forEach((toggle) => {
    toggle.classList.toggle("active");
  });
  navText.classList.toggle("active");
});

btnSave.addEventListener("click", () => {
  const allInputs = document.querySelectorAll(".input_save_account");

  const allfieldsEmpty = Array.from(allInputs).every(
    (input) => input.value !== ""
  );

  if (!allfieldsEmpty) {
    showToast(`<strong>Error</strong><br />Todos los campos son obligatorios`);
    clearForm(allInputs);
  } else {
    const formValues = new FormData(
      document.querySelector(".form_information_account")
    );
    const data = Object.fromEntries(formValues);
    console.log(data);
  }
});
