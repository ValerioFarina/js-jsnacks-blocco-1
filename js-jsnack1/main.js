/* CONSEGNA : L’utente inserisce due numeri in successione, con due prompt.
              Il software stampa il maggiore. */


// chiedo all'utente di inserire due numeri
var number1 = parseFloat(prompt('Inserisci un numero'));
var number2 = parseFloat(prompt('Inserisci un numero'));

// controllo se in entrambi i casi l'utente ha inserito un numero
if (!isNaN(number1) && !isNaN(number2)) {
    /* se in entrambi i casi l'utente ha inserito un numero, controllo quale dei due è maggiore e lo stampo
       (se i due numeri sono uguali, avverto l'utente con un messaggio) */
    if (number1 > number2) {
        console.log('Il numero maggiore è ' + number1);
    } else if (number2 > number1) {
        console.log('Il numero maggiore è ' + number2);
    } else {
        console.log('I due numeri sono uguali');
    }
} else {
    /* se l'utente ha inserito in almeno uno dei due casi un input che non è un numero,
       lo avverto con un messaggio */
    console.log('Per favore, inserisci due numeri');
}
