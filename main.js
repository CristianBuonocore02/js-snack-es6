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

//troviamo la bici che ha il peso minore 
//lo facciamo tramite un ciclo for

//facciamo una variabile 

let biciLeggera = biciDaCorsa[0]

//partiamo con il ciclo 

for (let i = 0; i < biciDaCorsa.length; i++) {
    if (biciDaCorsa[i].peso > biciLeggera.peso) {
        biciLeggera = biciDaCorsa[i]
    }
}
//stampa la bici più leggera in console 

console.log(`La bici da corsa più leggera è ${biciLeggera.nome} con un peso di ${biciLeggera.peso}`);
