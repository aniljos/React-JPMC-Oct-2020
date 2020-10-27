console.log("in two.js");

function bar(){
    console.log("int two.js bar...")
}


export function add(){
    console.log("in two.js add...");
}

export function divide(){
    console.log("in two.js divide...");
}
export const a = 100;

export default bar;