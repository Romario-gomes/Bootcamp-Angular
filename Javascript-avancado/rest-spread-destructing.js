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

/* DESTRUCTION */

var arr = ['Apple', 'Banana', 'Orange'];
// comun
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var [apple, banana, orange] = ['Apple', 'Banana', 'Orange', ['Tomato']];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];



var arr = [{name: 'Apple', type: 'fruit'}];
var fruit1 =  arr[0].name;
// Destructuring Assignment

var [apple, banana, orange,[tomato]] = ['Apple', 'Banana', 'Orange',['Tomato']];

//Obj 

var obj = {
    name: 'Celso',
    age: 15
}
//Destructuring
var { name, age } = obj;


var obj = {
    name: 'Celso'
}
//Destructuring
// destruindo a propriedade name e criando variavel name2
var { name: name2} = obj;
console.log(name2);

var obj = {
    name: 'Celso',
    props: {
        age: 26
    }
}
var {props: {age}} = obj;
console.log(age);

var obj = {
    name: 'Celso',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
}
var {props: {age, favoriteColors:[color1, color2]}} = obj;
console.log(color1, color2);


var arr = [{name: 'Apple', type: 'fruit'}];

var [{ name:nome }] = arr;

console.log(nome);


// functions
//Example default values
function sum([a, b]= [0,0]){
    return a+b;
}
console.log(sum([undefined,5]));

//functions objetcs
function sum({a, b}){
    return a+b;
}
console.log(sum({a:undefined,b:5}));