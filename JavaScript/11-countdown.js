const prompt = require('prompt-sync')();

let num = Number(prompt("Enter the number: "));


// made by chatGPT
const interval = setInterval(() => {
    console.log(num);
    num--;
    if (num < 0) { clearInterval(interval); }
}, 1000);