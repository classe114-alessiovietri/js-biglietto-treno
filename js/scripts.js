/* 

    JS Biglietto Treno

    1) Chiedo KM all'utente
    2) Chiedo età all'utente
    3) Calcolo prezzo base biglietto
    4) VE RI FI CO lo sconto da applicare:
        - SE l'utente è minorenne
            - Applico uno sconto del 20% sul prezzo base del biglietto
            - Mostra il prezzo scontato
        - SE l'utente è over 65
            - Applico uno sconto del 40% sul prezzo base del biglietto
            - Mostra il prezzo scontato
        - ALTRIMENTI
            - Mostra il prezzo base

*/

// 1) Chiedo KM all'utente                                      OK
const km = prompt('Quanti KM dovrai percorrere?');
const kmInNumber = parseInt(km);

console.log('km', km, typeof km);
console.log('kmInNumber', kmInNumber, typeof kmInNumber);

// console.log(km == kmInNumber);  // Questo dà TRUE
// console.log(km === kmInNumber);  // Questo dà FALSE

// 2) Chiedo età all'utente                                     OK
const age = prompt('Quanti anni hai?');
const ageInNumber = parseInt(age);

console.log('age', age, typeof age);
console.log('ageInNumber', ageInNumber, typeof ageInNumber);

// console.log(age == ageInNumber);  // Questo dà TRUE
// console.log(age === ageInNumber);  // Questo dà FALSE

// 3) Calcolo prezzo base biglietto                         OK
let price = (kmInNumber * 0.21);
console.log('price', price, typeof price);

// 4) VE RI FI CO lo sconto da applicare:
// - SE l'utente è minorenne                                    OK
if (ageInNumber < 18) {
    // - Applico uno sconto del 20% sul prezzo base del biglietto OK
    price *= 0.8;
}
// - SE l'utente è over 65                                      OK
else if (ageInNumber > 65) {
    // - Applico uno sconto del 40% sul prezzo base del biglietto OK
    price *= 0.6;
}

price = price.toFixed(2);

// Selettore con querySelector
const resultContainer = document.querySelector('#result-container');
// OPPURE
// Selettore con getElementById
// const resultContainer = document.getElementById('result-container');
console.log('resultContainer', resultContainer, typeof resultContainer);
resultContainer.innerHTML = 'Il prezzo del tuo biglietto è €' + price;


