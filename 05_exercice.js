
list = [
    { fname: 'Gojira', lname: 'Dilbert', group: 1, mark: 10 },
    { fname: 'Murron', lname: 'Morticia', group: 2, mark: 12 },
    { fname: 'Furiosa', lname: 'Beetlejuice', group: 1, mark: 11 },
    { fname: 'Usagi', lname: 'Draven', group: 1, mark: 19 },
    { fname: 'Chewbacca', lname: 'Yoda', group: 2, mark: 8 },
    { fname: 'Murron', lname: 'Spock', group: 3, mark: 5 },
    { fname: 'Leia', lname: 'Murron', group: 4, mark: 15 },
    { fname: 'Jor-El', lname: 'Fester', group: 3, mark: 6 },
    { fname: 'Tintin', lname: 'Anakin', group: 4, mark: 9 },
    { fname: 'Beavis', lname: 'Dagwood', group: 2, mark: 15 },
]

//Ajouter 2 points à toutes les personnes
list.forEach((el) => {el.mark +=2; })
// console.log(list)
//Avec la limite à 20 et map
const list2 = list.map((el) => ({
    ...el,
    mark: Math.min(20, el.mark + 2),
}))

//Afficher les éléments ayant mark >=10
const listFiltree = list.filter(
    (el) => (el.mark >=10)
)
console.log(listFiltree)

//Afficher la meilleur note du groupe 1
//Faire en 2 étapes
//On isole le groupe 1 avec filter
const meilleureNoteGroupe1 = list
    .filter(({group}) => (group === 1))
    //Map pour ne garder que les notes
    .map(({ mark }) => (mark))

console.log(meilleureNoteGroupe1)


