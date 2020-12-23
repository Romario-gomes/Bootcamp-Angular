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
