function maFonction(param1, param2) {
    return param1 + param2
}

console.log(maFonction(1,2))//affiche 3
console.log(maFonction(2))//affiche NaN
console.log(maFonction('a','b'))//affiche ab
console.log(maFonction(undefined,2))//affiche NaN


function direBonjour(){
    return 'Bonjour'
}

//setTimout(callback, temps)
setTimeout(direBonjour,3000);

const maStruct = {
    a:2,
    ajouter2AA:() => { this.a +=2;},
    ajouter2AAbis: function() {this.a += 2;}
};

console.log(maStruct.a)//affiche 2
maStruct.ajouter2AA();
console.log(maStruct.a)//affiche 2, ca ne marche pas avec la fonction anonyme fléchée
maStruct.ajouter2AAbis();
console.log(maStruct.a) // affiche 4







