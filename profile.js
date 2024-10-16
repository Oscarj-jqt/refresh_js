// Elements HTML
let name = document.getElementById("#set");
let change = document.getElementbyId("#change");
let button1 = document.getElementsByClassName(".set");
let button2 = document.getElementsByClassName(".change");

let select = document.querySelector("select");

// Boutons
button1.addEventListener("click", setName);

button2.addEventListener("click", changeName);


// Fonctions donner un nom et changer de prénom
function setName(){
    const nameValue = name.value;
    console.log(nameValue);
    
    // Ajouter ce nom dans le menu
    option.innerText = name;

    // Afficher le message de bienvenue

}

function changeName() {
    const changeValue = change.value;
    console.log(changeValue);

    // Changer les noms du menu
}

