//function statement
// implicit args ==> this, arguments
function sum(x, y){
    console.log("in sum: ", arguments);
}

// function sum(){
//     console.log("in sum no args");
// }

// let a = 10, b= 20;
// window.sum(2, 3);
// sum(2,3,4,5);
// sum();
// sum(a, b);

//function expression ==> functions are first-class types
// implicit args ==> this, arguments
const add = function(x, y){
    return x + y;
}

//Arrow function

let calc = (x, y)=>{
    return x + y;
}
console.log(calc(2,3));

calc = (x, y) => x * y;
console.log(calc(2,3));

const squareIt = x => x * x;
console.log(squareIt(9));

const log = (msg) => console.log("logging", msg);
log("abc");

