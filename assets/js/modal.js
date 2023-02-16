const login_modal = document.querySelector(".modal__login");
const register_modal = document.querySelector(".modal__register");
const btn_login_modal = document.querySelector(".login__login");
const btn_register_modal = document.querySelector(".register__register");
const btn_close__login_modal = document.querySelector(".btn__close_login");
const btn_close__register_modal = document.querySelector(
  ".btn__close_register"
);

if (window.location.pathname === "/index.html") {
  window.history.pushState(null, null, "/login");
}
const main__background = document.querySelector(".main__background");
const inputs = document.querySelectorAll(".input__login");
const inputs__register = document.querySelectorAll(".input__register");
const btn_login_confirmar = document.querySelector(".btn__login");
const btn_register_confirmar = document.querySelector(
  ".btn_confirmar_register"
);
const msg_error_modal = document.querySelector(".msg__login_error");
const msg_error_modal_register = document.querySelector(".msg__register_error");

const api = "http://localhost:3000";

/***************************************************************************/

const clearInput = (inputs) => {
  inputs.forEach((input) => {
    input.value = "";
  });
};

/********** LOGIN **************/

//  Abrir Modal
btn_login_modal.addEventListener("click", () => {
  main__background.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  login_modal.style.display = "block";
  register_modal.style.display = "none";
  msg_error_modal_register.style.display = "none";
  msg_error_modal.style.display = "none";
});

// Cerrar Modal
btn_close__login_modal.addEventListener("click", () => {
  clearInput(inputs);
  clearInput(inputs__register);
  main__background.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  login_modal.style.display = "none";
  msg_error_modal_register.style.display = "none";
  msg_error_modal.style.display = "none";
});

// Confirmar envio de datos
btn_login_confirmar.addEventListener("click", async () => {
  let allInputsFilled = Array.from(inputs).every((input) => input.value !== "");

  // Si es true, si el o los campos estan vacios muestra mensaje
  if (!allInputsFilled) {
    msg_error_modal.style.display = "block";
  } else {
    msg_error_modal.style.display = "none";

    //  Traer los datos del formulario
    const formData = new FormData(document.getElementById("form_login"));
    const data = Object.fromEntries(formData);

    /* Conectar con la api(url api, {
      metodo, 
      body, 
      header:{
        "Content-type":"application/json"
      }
    })
      resultado de la conexion se almacena en res
    */

    const res = await fetch(`${api}/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //////////////////////////////////////
    const dato = await res.json();
    console.log(dato);
    setTimeout(() => {
      window.location.replace("/perfil.html");
    }, 500);
  }
});

/*****************  REGISTER ********************/

btn_register_modal.addEventListener("click", () => {
  main__background.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  register_modal.style.display = "block";
  login_modal.style.display = "none";
  msg_error_modal_register.style.display = "none";
  msg_error_modal.style.display = "none";
});

btn_close__register_modal.addEventListener("click", () => {
  clearInput(inputs);
  clearInput(inputs__register);
  main__background.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  register_modal.style.display = "none";
  msg_error_modal_register.style.display = "none";
  msg_error_modal.style.display = "none";
});

btn_register_confirmar.addEventListener("click", () => {
  let allInputsFilled = Array.from(inputs__register).every(
    (input) => input.value !== ""
  );
  console.log(allInputsFilled);
  if (!allInputsFilled) {
    msg_error_modal_register.style.display = "block";
  } else {
    msg_error_modal_register.style.display = "none";
  }
});
