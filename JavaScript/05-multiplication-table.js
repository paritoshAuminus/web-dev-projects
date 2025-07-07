const prompt = require('prompt-sync')();

function multiplicationTable(n) {
    let x = 10;
    for (let x = 1; x < 11; x++)
    console.log(`${n} * ${x} = ${n * x}`);
}

let num = prompt('Enter your number: ');

multiplicationTable(num);