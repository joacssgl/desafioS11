document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formRegistro");
    const resultadoDiv = document.getElementById("resultado");
  
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const nombre = document.getElementById("nombre").value;
      const apellido = document.getElementById("apellido").value;
      const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  
      const formData = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento,
      };
  
      const url = "https://jsonplaceholder.typicode.com/users";
  
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
  
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          resultadoDiv.innerHTML = "Registro realizado con éxito";
        })
        .catch((error) => {
            resultadoDiv.innerHTML = "No se pudo realizar su registro";
          })
    });
  });  