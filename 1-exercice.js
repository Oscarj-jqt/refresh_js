
// 1234562728
// 2444666667788
// 12 -> 2, 34 -> 444, 56 -> 66666, 27 -> 77, 28 -> 88
﻿
function suiteParlee() {
  // Demande la suite à l'utilisateur
  const suite = prompt('Suite à convertir ?');
  // Teste que la suite contient un nombre pair de caractères
  if (suite.length % 2 === 1) {
    console.error('La suite doit contenir un nombre pair de caractères');
    return;
  }
  // if (suite % 2 === 1) return console.error('La suite doit contenir un nombre pair de caractères');
  // Initialisation de la variable de résultat
  let resultat = '';
  // Parcours de la suite, 2 par 2
  for (let i = 0 ; i < suite.length ; i += 2) {
    let caractère = '';
    for (let j = 0 ; j < suite[i] ; j++) {
      caractère += suite[i + 1];
    }
    resultat += caractère; 
  }
  console.log(resultat);
}
suiteParlee();
﻿
// Explication double/triple égal
// const aa = '2';
// console.log(aa == 2) // vrai
// console.log(aa === 2) // faux