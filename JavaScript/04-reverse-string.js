const prompt = require('prompt-sync')();

function reverseString(str) {
    let arr = [];
    for (item of str) {
        arr.push(item);
    }
    arr.reverse()
    let reversed = arr.join('');
    console.log(reversed);
}

str = prompt("Please enter your string: ");
reverseString(str);