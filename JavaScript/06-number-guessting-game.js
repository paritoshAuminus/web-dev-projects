const prompt = require('prompt-sync')();

function randomNumberGenerator() {
    let num = Math.random();
    num *= 100;
    num = parseInt(num);
    return num;
}

const randomValue = randomNumberGenerator();
console.log(randomValue);

while (true) {

    let userValue = Number(prompt("Enter your value: "))

    if (userValue > randomValue) {
        console.log('Too high!');
    } else if (userValue < randomValue) {
        console.log('Too low!');
    } else if (userValue === randomValue) {
        console.log('You guessed the correct number!');
        break;
    }
}
