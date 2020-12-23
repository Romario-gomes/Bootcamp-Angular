//Simple arrow function
/* var sum = (a,b)=> a+b;
 */
var sum = (a,b)=> {
    if(a>b) console.log("invalido")
    return a+b;
};

console.log(sum(5,8));