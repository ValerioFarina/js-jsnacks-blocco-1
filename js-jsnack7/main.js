// CONSEGNA: Calcola la somma e la media dei numeri da 1 a 10.

// creo una variabile contenente l'estremo inferiore del range che voglio prendere in considerazione
var inf = 1;

// creo una variabile contenente l'estremo superiore del range che voglio prendere in considerazione
var sup = 10;

// creo una variabile di appoggio (inizializzata a zero) in cui andrò a salvare le somme parziali
var sum = 0;

// creo un ciclo for per iterare da inf a sup (compresi)
for (var i=inf; i<=sup; i++) {

    // incremento sum di un valore pari a i
    // quando i raggiunge il valore k, sum contiene la somma dei numeri da inf a k-1
    sum += i;
}

// stampo la somma dei numeri da inf a sup
console.log('La somma dei numeri da ' + inf + ' a ' + sup + ' è ' + sum);

// calcolo il numero di addendi coinvolti nella somma dei numeri da inf a sup
var numberOfAddends = (sup - inf) + 1

// calcolo la media dei numeri da inf a sup e la stampo
var mean = sum / numberOfAddends;
console.log('La media dei numeri da ' + inf + ' a ' + sup + ' è ' + mean);
