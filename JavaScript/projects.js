const prompt = require('prompt-sync')();


function numberGuessingGame() {
    const target = Math.floor(Math.random() * 100) + 1;
    let guess;
    while (guess !== target) {
        guess = parseInt(prompt("Guess a number between 1 and 100:"));
        if (guess > target) console.log("Too high!");
        else if (guess < target) console.log("Too low!");
        else console.log("Correct!");
    }
}


function evenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}


function quizApp() {
    const questions = [
        { q: "2 + 2 = ?", a: "4" },
        { q: "Capital of India?", a: "Delhi" },
        { q: "5 * 3 = ?", a: "15" },
    ];
    let score = 0;
    questions.forEach(({ q, a }) => {
        const ans = prompt(q);
        if (ans.toLowerCase() === a.toLowerCase()) score++;
    });
    console.log(`Your score is ${score}/${questions.length}`);
}


function countVowels(str) {
    return str.match(/[aeiou]/gi)?.length || 0;
}


function reverseString(str) {
    return str.split('').reverse().join('');
}



function multiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}



function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}



function calculator(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return "Invalid operator";
    }
}



function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}



function countdown(seconds) {
    const interval = setInterval(() => {
        console.log(seconds);
        seconds--;
        if (seconds < 0) clearInterval(interval);
    }, 1000);
}



function letterFrequency(str) {
    const freq = {};
    for (let char of str.toLowerCase()) {
        if (/[a-z]/.test(char)) {
            freq[char] = (freq[char] || 0) + 1;
        }
    }
    return freq;
}



class TodoApp {
    // Methods to add, delete, and list todos
    constructor() {
        this.todoList = [];
        this.addTodo = function (task) { this.todoList.push(task); };
        this.deleteTodo = function (index) { this.todoList.splice(index, 1) ; };
        this.listTodos = function () { console.log(this.todoList); };
    };
}

// const todoApp = new TodoApp();
// todoApp.addTodo("Learn JavaScript 1 h");
// todoApp.addTodo("Learn Python 2 h");
// todoApp.addTodo("Learn html 2 h");
// todoApp.addTodo("Learn css 2 h");
// todoApp.listTodos();
// todoApp.deleteTodo(2);
// todoApp.listTodos();



class ShoppingCart {
    constructor() {
        this.items = [];
    }
    addItem(name, price) {
        this.items.push({ name, price });
    }
    total() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

// const sumit_cart = new ShoppingCart();
// const mohit_cart = new ShoppingCart();

// mohit_cart.addItem('dettol', 87);
// mohit_cart.addItem('harpic', 120);
// sumit_cart.addItem('mango', 90);
// sumit_cart.addItem('apple', 190);

// console.log("Sumit Cart amount: ", sumit_cart.total());
// console.log("Mohit Cart amount: ", mohit_cart.total());
// console.log('mohit_cart type', typeof mohit_cart);
// console.log('Shopping cart type', typeof new ShoppingCart());


class Contact {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}

class ContactBook {
    constructor() { 
        this.contacts = [];
    }
    addContact(name, phone) {
        this.contacts.push(new Contact(name, phone));
    }
    searchContact(name) {
        return this.contacts.find(c => c.name.toLowerCase() === name.toLowerCase());
    }
    deleteContact(name) {
        const index = this.contacts.findIndex(c => c.name.toLowerCase() === name.toLowerCase());
        if (index >= 0) this.contacts.splice(index, 1);
    }
    listContacts() {
        return this.contacts.map(c => `${c.name}: ${c.phone}`).join('\n');
    }
    // Example usage
    // const contactBook = new ContactBook();
    // contactBook.addContact("Alice", "1234567890");
    // console.log(contactBook.listContacts());
    // console.log(contactBook.searchContact("Alice"));
    // contactBook.deleteContact("Alice");
}

// const contactBook = new ContactBook();
// contactBook.addContact("Alice", "1234567890");
// console.log(contactBook.listContacts());
// console.log(contactBook.searchContact("Alice"));
// contactBook.deleteContact("Alice");