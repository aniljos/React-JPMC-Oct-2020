//var x;
//

console.log("x: ", x);
// x = 10
var x = 10; // global, hoisting(variable, functions pushed to the top of the scope)
console.log("x: ", x);

var y; //global, undefined
console.log("y: ", y);

//console.log("z: ", z); //reference error

//foo();
function foo(){
    //var a, msg

    console.log("foo...")
    var a = 10; // function scope
    if(x < 100){
        //var msg = "hello"; // function scope
        let msg = "hello"; // block scope, no hoisting
        console.log("Msg: ", msg);
       // msg= "abc";
       // console.log("Msg: ", msg);
    }
    

}
foo();


console.log("Scopes Application");