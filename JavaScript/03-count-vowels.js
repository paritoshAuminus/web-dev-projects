const prompt = require('prompt-sync')();


function countVowels(str) {
    let arr = [];
    let newArr = [];
    for (items of str) {
        arr.push(items);
    }
    for (items of arr) {
        if('aeiou'.includes(items)) {
            newArr.push(items);
        }
    }

    let num = newArr.length;
    console.log('There are ', num, 'vowels in your string');
}

let userInput = String(prompt("Please enter your word: "));

countVowels(userInput);