const prompt = require('prompt-sync')();

const num1 = Number(prompt('Enter first number: '));
const num2 = Number(prompt('Enter second number: '));
const opr = prompt('Enter your operator: ');


if (opr === '+') {
    console.log('Result: ', num1 + num2);
} else if (opr === '-') {
    console.log('Result: ', num1 - num2);
} else if (opr === '*') {
    console.log('Result: ', num1 * num2);
} else if (opr === '/') {
    console.log('Result: ', num1 / num2);
} else {
    console.log('Invalid operator, please try again.')
}