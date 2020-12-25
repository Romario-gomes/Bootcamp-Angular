//symbols
const uniqueId = symbol('Hello');

// Well Know symbols
/* symbol.iterator
symbol.split
symbol.toStringTag */

//iterator function

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

console.log(arr[Symbol.iterator]().next()); 

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0;

        return {
            next: ()=>{
                return{
                    value: this.value[i-1],
                    done: i > this.values.length
                };
            }
        };
    }
};
const it = obj[Symbol.iterator]();

console.log(it.next());
// Generators

function* naturalNumbers(){
    let number = 0;
    while(true){
        yield number;
        number++;
    }
}
const it = naturalNumbers();
console.log(it.next());
/* 



*/

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator](){
        for(var i=0; i < this.values.length; i++){
            yield this.values[i];
        }
    }
};
for(let value of obj){
    console.log(value);
}