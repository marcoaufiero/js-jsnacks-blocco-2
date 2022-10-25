// *Snack2*
// Generatore di “nomi cognomi” casuali del grande gatsby:
// Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati,
// dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, 
// scelti in modo casuale.

let names = ['Bob','Tom','John', 'Mike', 'Sam'];
let surnames = ['Tyson','McFly','Wolf', 'Gosling', 'Grey'];

let guestList = [];

for(i = 0; i < names.length; i++){

    let guestName = names[Math.floor(Math.random()*names.length)];

    let guestSurname = surnames[Math.floor(Math.random()*surnames.length)];

    let guest = `${guestName} ${guestSurname}`;

    guestList.push(guest);

    document.getElementById('guestList').innerHTML += `<div> ${guest} </div>`;
}

console.log(guestList)