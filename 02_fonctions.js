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