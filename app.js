// Definimos los arrays de palabras en español
let pronoun = ['el', 'la'];
let adj = ['grande', 'pequeño'];
let noun = ['gato', 'perro'];
let extensions = ['.com', '.net'];  // Agregamos algunas extensiones comunes

// Función para generar combinaciones de dominios
function generateDomains(pronoun, adj, noun, extensions) {
  let totalCombinations = 0; // Contador para asegurar que el código se detenga después de generar todas las combinaciones

  // Bucle anidado para generar todas las combinaciones posibles
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let ext of extensions) {
          // Concatenamos el pronombre, adjetivo, sustantivo y la extensión
          let domain = p + a + n + ext;
          console.log(domain); // Imprimimos cada dominio en la consola
          totalCombinations++; // Aumentamos el contador

          // Si se generaron todas las combinaciones, detenemos el proceso
          if (totalCombinations >= pronoun.length * adj.length * noun.length * extensions.length) {
            return; // Salimos de la función cuando todas las combinaciones han sido generadas
          }
        }
      }
    }
  }
}

// Llamamos a la función para generar los dominios
generateDomains(pronoun, adj, noun, extensions);
