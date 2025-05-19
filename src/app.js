let pronoun = ['el', 'la'];
let adj = ['grande', 'pequeño'];
let noun = ['gato', 'perro'];
let extensions = ['.com', '.net'];  


function generateDomains(pronoun, adj, noun, extensions) {
  let totalCombinations = 0; 

  
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let ext of extensions) {
          
          let domain = p + a + n + ext;
          console.log(domain); 
          totalCombinations++; 

          
          if (totalCombinations >= pronoun.length * adj.length * noun.length * extensions.length) {
            return;
          }
        }
      }
    }
  }
}

generateDomains(pronoun, adj, noun, extensions);

