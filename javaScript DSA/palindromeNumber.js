let isPalindrome = function (x) {
    x = x.toString();
    let arr = x.split('');
    let arrRev = arr.reverse();
    arr = arr.join(',');
    console.log(arr);

    if (arr.join() === arrRev.join()) {
        console.log('The number is a palindrome!');
    } else {
        console.log('The number is NOT a palindrome :/');
    }
}

isPalindrome(122);