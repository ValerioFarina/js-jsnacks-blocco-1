/* CONSEGNA: L’utente inserisce due parole in successione, con due prompt.
             Il software stampa prima la parola più corta, poi la parola più lunga. */


// chiedo all'utente di inserire due stringhe
var string1 = prompt('Inserisci una stringa');
var string2 = prompt('Inserisci una stringa');

// confronto le lunghezze delle due stringhe
if (string1.length < string2.length) {
    // se string1 è più corta, stampo prima string1 e poi string2
    console.log(string1);
    console.log(string2);
} else if (string2.length < string1.length) {
    // se string2 è più corta, stampo prima string2 e poi string1
    console.log(string2);
    console.log(string1);
} else {
    // se le due stringhe sono della stessa lunghezza, avviso l'utente con un messaggio
    console.log('Le due stringhe sono della stessa lunghezza');
}
