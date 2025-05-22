function calcularArea() {
  const A = parseFloat(document.getElementById("A").value);
  const B = parseFloat(document.getElementById("B").value);
  const C = parseFloat(document.getElementById("C").value);

  // Validaciones mínimas
  if (isNaN(A) || isNaN(B) || isNaN(C) || A <= 0 || B <= 0 || C <= 0 || A <= C) {
    document.getElementById("resultado").textContent = "Verificá los valores ingresados.";
    return;
  }

  const alturaTriangulo = A - C;
  const areaRectangulo = B * C;
  const areaTriangulo = (B * alturaTriangulo) / 2;

  const areaTotal = areaRectangulo + areaTriangulo;

  document.getElementById("resultado").textContent = `El área total del terreno es: ${areaTotal.toFixed(2)} m²`;
}
