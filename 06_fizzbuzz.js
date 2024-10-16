// ne pas écrire les tags, faire avec les createelement
// getElementsByTag/ClassName
// querySelector

// Exercice - le FizzBuzz
//Pour les créer dans la page
//On créer l'élément li et les insère dans ol
const ol = document.querySelector('ol');

const prefixFiniParNeuf = ["dix","vingt","quarante","cinquante","soixante-dix","quatre-vingt"]
// 1-Compter de 1 à 100(boucle)
for ( i = 0; i < 100; i++) {
    const li = document.createElement('li');
    //On insère les éléments li dans la liste ol
    ol.append(li)
    // un nombre multiple de 3
    if (i % 15 === 0) li.innerText = 'FizzBuzz'
    if (i % 5 === 0) li.innerText += "Buzz"
    if (i % 3 === 0) li.innerText = 'Fizz'
    //Ni multiple de 3 ni multiple de 5
    if (!li.innerText) {
        //Fini par un 9
        if (i % 10 === 9) {
            const prefix = prefixFiniParNeuf.shift();
            li.innerText = `${prefix}-neuf`
        }
    }
    
}
console.log(i)




