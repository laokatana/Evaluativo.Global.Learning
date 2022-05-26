window.addEventListener("DOMContentLoaded", () => {
  console.log("la pagina ya esta cargada a programar");

  const nameAndSurname = document.querySelector("#nombre-apellido");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#telefono");
  const contactBy = document.querySelectorAll(".contact-us");
  const send = document.querySelector(".enviar");

  /*
  contactBy.forEach((contactValue) => {
    if (contactValue.value === "email") {
      console.log(contactValue.value);
    }
  });
*/
  let savedData =  [];

  send.addEventListener("click", (event) => {
    event.preventDefault();

    const cliente = {

      nameAndSurname: nameAndSurname.value,
      email: email.value,
      phone: phone.value,
      
    }

    savedData.push(cliente)
    console.log(cliente)

    window.localStorage.setItem("contacto", JSON.stringify(savedData));
    

  });
});
