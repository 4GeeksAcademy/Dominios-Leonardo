window.onload = function() {
  //Todas las opciones para generar las combinaciones
  let pronombre = ["tu", "mi", "nuestro", "esta"];
  let adjetivo = ["rápido", "inteligente", "fuerte", "fresco"];
  let sustantivo = ["nube", "sala", "eshop"];
  let dominio = [".com", ".net", ".us", ".io"];

  //Aquí almacena las combinaciones
  let resultados = document.getElementById("combinaciones");

  let lista = resultados.querySelector("select");
  // Genera las combinaciones
  for (let i = 0; i < pronombre.length; i++) {
    for (let j = 0; j < adjetivo.length; j++) {
      for (let k = 0; k < sustantivo.length; k++) {
        for (let l = 0; l < dominio.length; l++) {
          let option = document.createElement("option");
          option.textContent =
            pronombre[i] + adjetivo[j] + sustantivo[k] + dominio[l];
          lista.appendChild(option); // Añadir el <option> al <select>
        }
      }
    }
  }
};
