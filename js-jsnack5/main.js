/* CONSEGNA: Stampa il cubo dei primi N numeri,
             dove N è un numero indicato dall’utente. */


// creo una variabile avente come valore l'esponente che userò nell'elevamento a potenza
var exponent = 3;

// chiedo all'utente di inserire un numero
var userNumber = parseInt(prompt('Inserisci un numero'));

// controllo se l'utente ha inserito un numero maggiore di zero
if (!isNaN(userNumber) && userNumber>0) {
    /* se l'utente ha inserito un numero maggiore di zero,
    creo un ciclo for che eseguirà un numero di iterazioni pari al numero inserito dall'utente */
    for (var i=1; i<=userNumber; i++) {

        // creo una variabile di appoggio (inizializzata a 1) per salvare il risultato parziale dell'elevamento a potenza
        var resultExponentiation = 1;

        // creo un ciclo for che eseguirà un numero di iterazioni pari al valore di exponent
        for (var j=0; j<exponent; j++) {

            /* quando j raggiunge il valore k, resultExponentiation contiene il valore "i elevato k";
            con la seguente istruzione facciamo in modo che il valore di resultExponentiation diventi "i elevato k+1";
            alla fine del ciclo, resultExponentiation contiene il valore "i elevato exponent" */
            resultExponentiation *= i;
        }

        // stampiano resultExponentiation, cioè il valore "i elevato exponent"
        console.log(i + ' elevato alla ' + exponent + ' fa ' + resultExponentiation);
    }
} else {
    /* se l'utente inserisce un valore NON numerico,
    oppure un valore numerico che però è minore o uguale a zero,
    stampo un messaggio di errore */
    console.log('Per favore, inserisci un numero maggiore di 0');
}
