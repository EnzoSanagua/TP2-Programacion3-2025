function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const altura = parseInt(document.getElementById("altura").value);
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje");

  let errores = [];

  if (nombre === "" || nombre.length > 50) {
    errores.push("Nombre inválido.");
  }

  if (apellido === "" || apellido.length > 50) {
    errores.push("Apellido inválido.");
  }

  if (isNaN(edad) || edad < 0 || edad < 18) {
    errores.push("Edad inválida o menor de edad.");
  }

  if (isNaN(altura) || altura <= 0 || altura > 230) {
    errores.push("Altura inválida.");
  }

  if (correo === "" || !correo.includes("@")) {
    errores.push("Correo electrónico inválido.");
  }

  if (errores.length > 0) {
    mensaje.textContent = errores.join(" ");
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "Formulario válido. ¡Gracias!";
    mensaje.style.color = "green";
  }
}
