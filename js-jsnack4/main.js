/* CONSEGNA: Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
             un numero, se è dispari inseriscilo nell’array. */


// creo un array vuoto
var oddNumbers = [];

// creo una variabile che contiene il numero di volte che il prompt dovrà essere attivato
var numberOfPrompt = 6;

// creo un ciclo for che eseguirà un numero di iterazioni pari a numberOfPrompt
for (var i=0; i<numberOfPrompt; i++) {
    // chiedo all'utente di inserire un numero
    var userNumber = parseFloat(prompt('Inserisci un numero'));

    // controllo se l'input inserito dall'utente è un numero dispari
    if (userNumber % 2 == 1 || userNumber % 2 == -1) {
        // se l'input inserito dall'utente è un numero dispari, allora lo inserisco nell'array oddNumbers
        oddNumbers.push(userNumber);
    }
}

// mostro in console l'array oddNumbers
console.log(oddNumbers);
