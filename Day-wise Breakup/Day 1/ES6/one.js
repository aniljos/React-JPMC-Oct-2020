console.log("in one.js");

function foo(){
    console.log("in one.js foo...");
}

export function add(){
    console.log("in one.js add...");
}

export function divide(){
    console.log("in one.js divide...");
}


export default foo; // only one 