/* function sum(a ,b){
    // contem todos os argumentos da função console.log(arguments);
    var value = 0;
    for(var i=0; i < arguments.length; i++){
        value += arguments[i];
    }

    return a + b;
}

console.log(sum(5, 5, 5, 2, 3)); */

// rest operator = (...) dentro dos argumentos da funcao e rest operator
// arguments = obj args = array;(__protype__);
/* function sum(...args){
    return args.reduce((acc, value) =>{
        return acc+value
    },0)
}
console.log(sum(5, 5, 5, 2, 3)); 

Lista só sera exibida com rest operator.

*/
const multiply = (...args) => args.reduce((acc, value) => acc*value,1);

const sum = (...rest) => {
    //return multiply.apply(undefined, rest);
    //Spread operator
    return multiply(...rest);
};
console.log(sum(5, 5, 5, 2, 3));
// SPREAD OPERATOR COM STRINGS
const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];
function logArgs(a, b, c){
    console.log(a, b, c);
}
/* 
Metodo concat
const arr2 = arr.concat([5, 6, 7]);
console.log(arr2); */

const arr2 = [...arr, 5, 6, 7];

const arr3 = [...arr2, ...arr, 0, 0, 0];

logArgs(...arr);
//SPREAD OPERATOR OBJECT 
/* const obj = {
    test: 123
}
const obj2 = {
    ...obj2.test = 456
}
console.log(obj2); */

const obj = {
    test: 123,
    subObj: {
        test: 123
    }
};
const obj2 = {...obj, subObj:{ ...obj.subObj }}
obj2.subObj.test = 456;
console.log(obj2);











