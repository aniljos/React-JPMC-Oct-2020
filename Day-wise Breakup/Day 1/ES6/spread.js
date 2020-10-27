const numbers = [1,2,3,4,5,6];

const copy_of_numbers = [...numbers, 200, 300, 400];

console.log("numbers", numbers);
console.log("copy_of_numbers", copy_of_numbers);

numbers.push(100);

console.log("numbers", numbers);
console.log("copy_of_numbers", copy_of_numbers);


const emp = {
    id: 1, name: "Anil"
};

const emp_copy = {
    ...emp
}

console.log("emp_copy", emp_copy);




