/*
    Maneira antiga
function multiply(a,b){
    b = typeof b === 'undefined' ? 1 : b;
    return a * b;
}
console.log(multiply(8,3)); */

// Caso não expecificado o valor de B a função executa com B = 1.
function multiply(a,b = 1){
    return a * b;
}
console.log(multiply(8, undefined));
//Lazy evaluation
function randomNumber(){
    return Math.random() * 10;
}

function multiply(a ,b = randomNumber){
    return a * b;
}
console.log(multiply(8, undefined));



