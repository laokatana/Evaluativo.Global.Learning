window.addEventListener("DOMContentLoaded", () => {
  console.log("la pagina ya esta cargada a programar");

  const nameAndSurname = document.querySelector("#nombre-apellido");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#telefono");
  const contactBy = document.querySelectorAll(".contacto-us").checked;
  const send = document.querySelector(".enviar");
  let contactMethod;

  let savedData = [];

  send.addEventListener("click", (event) => {
    event.preventDefault();

    showSelected();

    const customer = {
      nameAndSurname: nameAndSurname.value,
      email: email.value,
      phone: phone.value,
      contactUs: contactMethod,
    };

    savedData.push(customer);

    window.localStorage.setItem("contacto", JSON.stringify(savedData));
  });
});

const showSelected = () => {
  if (document.getElementById("radio-email").checked) {
    alert("tu informacion a sido enviada te vamos a contactar por email");
    contactMethod = document.getElementById("radio-email").value;
  }
  if (document.getElementById("radio-telefono").checked) {
    alert("tu informacion a sido enviada te vamos a contactar por telefono");
    contactMethod = document.getElementById("radio-telefono").value;
  }
  if (document.getElementById("radio-whatsapp").checked) {
    alert("tu informacion a sido enviada te vamos a contactar por whatsapp");
    contactMethod = document.getElementById("radio-whatsapp").value;
  }
};
