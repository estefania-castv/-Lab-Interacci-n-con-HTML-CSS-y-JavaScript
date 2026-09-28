// Modificar el primer "¡Hola mundo!" para que diga "Adiós"
document.getElementById("saludo").textContent = "Adiós";

// Cambiar el color de fuente de un encabezado a naranja
document.getElementById("naranja").style.color = "orange";

// Encabezado clicable que cambia el color de fuente a marrón
document.getElementById("clic").addEventListener("click", function () {
  this.style.color = "brown";
});

// RETO EXTRA: manipular la etiqueta nueva (<p>) por medio del DOM
const extra = document.getElementById("extra");
extra.textContent = "¡Este párrafo fue modificado con JavaScript!";
extra.style.fontStyle = "italic";
extra.style.backgroundColor = "lightyellow";
extra.style.padding = "8px";