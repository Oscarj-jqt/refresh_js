//On récupère ce qui est saisie à l'input
let input = document.querySelector("input");
//ajouter une action avec le button
let button = document.querySelector("button");
let list = document.querySelector('ul');
let li = document.createElement('li')

button.addEventListener("click", updateTask);

function updateTask(){

    const inputValue = input.value
    console.log(inputValue)

    li.innerText = inputValue
    list.append(li)
}
