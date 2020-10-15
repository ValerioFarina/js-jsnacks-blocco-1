/* CONSEGNA: Il software deve chiedere per 5 volte all’utente di inserire un numero.
             Il programma stampa la somma di tutti i numeri inseriti */


// creo una variabile che contiene il numero di volte che l'utente deve inserire l'input
var numberOfPrompt = 5;

// creo una variabile di appoggio (inizializzata a zero) dove andrò a salvare le somme parziali
var totalSum = 0;

/* creo un ciclo for che andrà ad eseguire un numero di iterazioni pari a numberOfPrompt,
   a meno che l'utente inserisca un input che non è un numero (in tal caso totalSum diventa NaN e si esce dal ciclo) */
for (var i=0; i<numberOfPrompt && !isNaN(totalSum); i++) {
    // chiedo all'utente di inserire un numero
    var userNumber = parseFloat(prompt('Inserisci un numero'));

    // incremento totalSum di un valore pari al numero inserito dall'utente
    totalSum += userNumber;
}

// controllo se totalSum è un numero (cioè, se tutti gli input inseriti dall'utente erano numeri)
if (!isNaN(totalSum)) {
    // se l'utente ha inserito solo valori numerici, stampo la somma totale dei numeri inseriti dall'utente
    console.log('La somma di tutti i numeri inseriti è ' + totalSum);
} else {
    // se l'utente ha inserito qualche valore non numerico, stampo un messaggio di errore
    console.log('Per favore, inserisci solo valori numerici');
}
