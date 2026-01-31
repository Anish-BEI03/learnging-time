const age1= 25;
if (age >= 18) {
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
//function to say name
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
module.exports = {
    add,              
    subtract,
    multiply,
    divide
};
