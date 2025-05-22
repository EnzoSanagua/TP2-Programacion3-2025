function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const estatura = parseFloat(document.getElementById("estatura").value);

  if (isNaN(peso) || isNaN(estatura) || estatura <= 0) {
    alert("Por favor, ingrese valores válidos.");
    return;
  }

  const imc = peso / (estatura * estatura);
  alert("Su IMC es: " + imc.toFixed(2));
}
