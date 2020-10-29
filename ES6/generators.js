
function* test(){

    yield 10;
    yield 20;
    yield 30;

}

const it = test();
console.log(it);

const result1 = it.next();
console.log("result1", result1);

const result2 = it.next();
console.log("result2", result2);

const result3 = it.next();
console.log("result3", result3);

const result4 = it.next();
console.log("result4", result4);