
//ESERCIZIO 1

//Crea un arrey di oggetti: 

//ogni oggetto descriverà una bici da corsa con le seguenti propietà: 
// nome , peso 


//creamo arrey di oggetti descritti 
let biciDaCorsa = [
    {
        name: "bici1",
        weight: 6
    },
    {
        name: "bici2",
        weight: 7
    },
    {
        name: "bici3",
        weight: 9
    },
    {
        name: "bici4",
        weight: 3
    },
    {
        name: "bici5",
        weight: 4
    },
]

console.log(biciDaCorsa);


//troviamo la bici che ha il peso minore 
//lo facciamo tramite un ciclo for

//facciamo una variabile per avere qualche dato da confrontare
let biciLeggera = biciDaCorsa[0]
console.log(biciLeggera);


//partiamo con il ciclo 

console.log(biciDaCorsa.length);
for (let i = 0; i < biciDaCorsa.length; i++) {
    console.log(biciDaCorsa[i]);
    console.log(biciDaCorsa[i].weight + ' < ' + biciLeggera.weight);
    if (biciDaCorsa[i].weight < biciLeggera.weight) {
        // la bici piu' leggera
        biciLeggera = biciDaCorsa[i];
        console.log("ora la bici piu' leggera e' questa: ", biciLeggera);
    }
}
//stampa la bici più leggera in console 

console.log(biciLeggera.weight);

console.log(`La bici da corsa più leggera è ${biciLeggera.name} con un peso di ${biciLeggera.weight}`);


//ESERCIZIO 2

// Creare un array di oggetti di squadre di calcio.Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


//creiamo un array di oggetti di squadre

let squadre = [
    {
        nameS: "Napoli",
        puntifatti: 0,
        falliSubiti: 0,
    },
    {
        nameS: "Milan",
        puntifatti: 0,
        falliSubiti: 0,
    },
    {
        nameS: "Roma",
        puntifatti: 0,
        falliSubiti: 0,
    },
    {
        nameS: "Lazio",
        puntifatti: 0,
        falliSubiti: 0,
    },
    {
        nameS: "Inter",
        puntifatti: 0,
        falliSubiti: 0,
    },
]

//Genera numeri random per pnti fatti e falli subiti 

for (let squadra of squadre) {
    squadra.puntifatti = Math.floor(Math.random() * 100)
    squadra.falliSubiti = Math.floor(Math.random() * 50)
}

//Crea un nuovo array con nomi e falli subiti 

let squadreFalli = [];
for (let squadra of squadre) {
    squadreFalli.push({
        nameS: squadra.nameS,
        falliSubiti: squadra.falliSubiti
    })
}

//Stampiamo tutto in console 

console.log(squadre);
console.log(squadreFalli);

