// CONSEGNA: Stampa le potenze di 2 senza superare il numero 1000.

// creo una variabile il cui valore è il numero che voglio prendere in considerazione come base
var base = 2;

// creo una variabile che contiene il valore massimo che le potenze della base non possono superare
var maximum = 1000;

// creo un ciclo for che stampa tutti i numeri della forma base^k (per qualche k>=1) compresi tra base (cioè, base^1) e maximum
for (var i=base; i<=maximum; i*=base) {
    console.log(i);
}
