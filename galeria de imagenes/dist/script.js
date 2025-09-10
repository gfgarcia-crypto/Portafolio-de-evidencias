// Array de imágenes
const imagenes = [
  "",
  "",
  "",
  "",
  ""
];

// Selección de elementos
const boton = document.getElementById("btn-cambiar");
const imagenCard = document.getElementById("card-img");
const textoCard = document.getElementById("card-text");

// Contador de imágenes
let indice = 0;

// Evento click
boton.addEventListener("click", () => {
  indice++;
  if (indice >= imagenes.length) {
    indice = 0; // Reinicia al inicio
  }

  // Cambiar imagen y texto
  imagenCard.src = imagenes[indice];
  textoCard.textContent = `Mostrando imagen ${indice + 1} de ${imagenes.length}`;
});