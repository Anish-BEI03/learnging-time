//simple calculator
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
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
console.log("Simple Calculator Module Loaded");
console.log("1. Addition:\n 2. Subtraction:\n 3. Multiplication:\n 4. Division:");
var choice = parseInt(prompt("Enter your choice :"));
switch (choice) {
    case 1:
        var a = parseFloat(prompt("Enter first number:"));
        var b = parseFloat(prompt("Enter second number:"));
        console.log("Result: " + add(a, b));
        break;
    case 2:
        var a = parseFloat(prompt("Enter first number:"));
        var b = parseFloat(prompt("Enter second number:"));
        console.log("Result: " + subtract(a, b));
        break;
    case 3:
        var a = parseFloat(prompt("Enter first number:"));
        var b = parseFloat(prompt("Enter second number:"));
        console.log("Result: " + multiply(a, b));
        break;
    case 4:
        var a = parseFloat(prompt("Enter first number:"));
        var b = parseFloat(prompt("Enter second number:"));
        try {
            console.log("Result: " + divide(a, b));
        } catch (error) {
            console.log(error.message);
        }
        break;
    default:
        console.log("Invalid choice");
}
// Exporting functions for external use