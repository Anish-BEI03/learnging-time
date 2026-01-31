const arr=[1, 2, 3, 4, 5];
const doubledArr = arr.map(num => num * 2);
console.log(doubledArr); // Output: [2, 4, 6, 8, 10]
export { doubledArr };
const age1= 25;
if (age1 >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}   
// This code checks if the age is 18 or older and logs a message accordingly.
const name1 = "Alice";
const age = 30;
const dob = '10/15/1993';
function sayName(){
    console.log("My name is " + name1);
}
//functionto say name
function sayAge(){
    console.log("My age is " + age);
}   
function sayDOB(){
    console.log("My date of birth is " + dob);
}
sayName();
sayAge();
sayDOB();   
module.exports = {
    sayName,
    sayAge,
    sayDOB
};
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}       
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }   
    return a / b;
}
module.exports = {
    add,              
    subtract,
    multiply,
    divide
};

