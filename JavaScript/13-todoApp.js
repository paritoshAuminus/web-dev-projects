const prompt = require('prompt-sync')();

class TodoApp {
    constructor() {
        this.tasks = [];
        this.addTask = (task) => this.tasks.push(task);
        this.deleteTask = () => this.tasks.pop();
        this.deleteAllTasks = () => this.tasks.length = 0;
        this.showTasks = () => this.tasks.forEach(el => console.log(el));
    }
}

newUser = new TodoApp();

while (true) {
    
    console.log('\nWhat action do you want to perform?')
    console.log('Add Task         (1)')
    console.log('Remove Task      (2)')
    console.log('Show all Tasks   (3)')
    console.log('Delete all Tasks (4)')
    console.log('Exit             (5)')
    let userInput = Number(prompt('Please enter your number: '));
    
    if (userInput === 1) {
        let task = prompt('Enter the task: ').trim().toLowerCase();
        newUser.addTask(task);
    } else if (userInput === 2) {
        newUser.deleteTask();
    } else if (userInput === 3) {
        newUser.showTasks();
    } else if (userInput === 4) {
        newUser.deleteAllTasks();
    } else if (userInput === 5) {
        console.log('/*/*/*----Thankyou for using our ToDo App----*/*.*/')
        break;
    }
}



