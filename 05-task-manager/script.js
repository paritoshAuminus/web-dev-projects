class Task {
    constructor(title, description, deadline, tags, status, id) {
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.tags = tags.split(',');
        this.status = status;
        this.id = id;
    }
}


// Global array to keep all object instances and tags
const globalTasks = [];
const tagList = [];

function idGenerator() {
    let x = Math.random();
    return x;
}

const successBlock = document.getElementById('success-block');


const tagBlock = document.getElementById('tag-block');
tagBlock.addEventListener('click', (event) => {
    if (event.target.id.contains('tags')) {
        
    }
})


form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const deadline = document.getElementById('deadline').value.trim();
    const tags = document.getElementById('tags').value.trim();
    const status = false;

    form.reset();


    // Generating new ID for the taskCard
    let id = idGenerator();

    const idCheck = globalTasks.find((item) => item.id === id);

    if (idCheck === undefined) {

        // sending object into globalTasks
        const task = new Task(title, description, deadline, tags, status, id);
        globalTasks.push(task);

        // creating dynamic div for taskCard
        const taskCard = document.createElement('div');
        taskCard.className = 'bg-white p-4 rounded-xl shadow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 taskCard';
        document.getElementById('taskList').appendChild(taskCard);

        taskCard.innerHTML =
            `<div>
            <h3 class="text-lg font-semibold">${task.title}</h3>
            <p class="text-sm text-gray-500">Deadline: <span class="text-red-600 font-medium"> ${task.deadline}</span></p>
            <p class="text-sm text-gray-600 mt-1">${task.description}</p>
            <div class="mt-2 flex flex-wrap gap-2 tagSection">
                <!-- dynamic tagList here -->
            </div>
            </div>
            <div class="flex gap-2 mt-2 sm:mt-0">
                <button class="completeBtn text-sm px-3 py-1 bg-green-500 text-gray-100 rounded hover:bg-green-600">Complete</button>
                <button class="deleteBtn text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"">Delete</button>
            </div>`;

        // giving unique ID to taskCard
        taskCard.dataset.taskId = task.id;

        // creating dynamic div for tagList
        const ObjectTagList = task.tags.forEach((item) => {
            const tagCard = document.createElement('span');
            tagCard.className = 'text-sm text-blue-600 px-3 py-1 bg-sky-500/30 text-white rounded hover:bg-sky-600/30 tagCard';
            tagCard.innerText = item;
            taskCard.querySelector('.tagSection').appendChild(tagCard);
        })

        // DOM for successful submission
        const addTaskBlock = document.getElementById('add-task-block');

        addTaskBlock.style.display = 'none';
        successBlock.style.display = 'block';

        setTimeout(() => {
            addTaskBlock.style.display = 'block';
            successBlock.style.display = 'none';
        }, 1000);

    }
})

// Deleting task from list
const taskList = document.getElementById('taskList');

taskList.addEventListener('click', (event) => {

    if (event.target.classList.contains('deleteBtn')) {
        const deleteBtn = event.target;
        const cardToDelete = deleteBtn.closest('.taskCard');
        const taskId = cardToDelete.dataset.taskId;

        const index = globalTasks.findIndex((item) => item.id == taskId);

        if (index != -1) {
            // removing card from the dom and globalTasks
            cardToDelete.remove()
            globalTasks.splice(index, 1);
        } else {
            alert('Card not found');
        }
    }

    // Toggling task status
    if (event.target.classList.contains('completeBtn')) {
        const completeBtn = event.target;
        const taskCard = completeBtn.closest('.taskCard');
        const taskId = taskCard.dataset.taskId;

        const index = globalTasks.findIndex((item) => item.id == taskId);
        const status = globalTasks[index].status;

        if (index != -1) {
            if (status) {
                globalTasks[index].status = false;
                completeBtn.classList.toggle('text-white');
                completeBtn.classList.toggle('bg-green-500');
                completeBtn.classList.toggle('hover:bg-green-600');
                completeBtn.innerHTML = `
                    Complete
                    `
            } else {
                globalTasks[index].status = true;
                completeBtn.classList.toggle('text-green-600');
                completeBtn.classList.toggle('bg-green-500/70');
                completeBtn.classList.toggle('hover:bg-green-600/70');
                completeBtn.innerHTML = `
                    <i class="fa-solid fa-check pr-2"></i>Completed
                    `
            }
        } else {
            alert('Card not found');
        }


    }
})

// filter cards based on completed, pending and overdue
const showCards = document.querySelector('#show-cards');

showCards.addEventListener('click', (event) => {

    if (event.target.id.includes('show-all')) {
        const taskNodeList = taskList.querySelectorAll('.taskCard');
        if (taskNodeList.length !== 0) {
            taskNodeList.forEach((item) => item.style.display = 'flex');
        } else {
            alert('No tasks found')
        }
    }
    
    // all task cards selected
    const taskCardsList = taskList.querySelectorAll('.taskCard');

    if (event.target.id.includes('show-completed')) {
        const completedTasks = globalTasks.filter((items) => items.status);

        if (globalTasks.length !== 0 && completedTasks.length !== 0) {

            const taskIds = [];
            completedTasks.forEach((items) => taskIds.push(items.id));
            // Created by chatGPT
            taskCardsList.forEach(items => {
                if (taskIds.includes(Number(items.dataset.taskId))) {
                    items.style.display = 'flex';
                } else {
                    items.style.display = 'none';
                }
            });
        } else {
            alert('No such tasks found')
        }
    }

    if (event.target.id.includes('show-pending')) {
        const pendingTasks = globalTasks.filter((item) => !item.status)

        if (globalTasks.length !== 0 && pendingTasks.length !== 0) {
            const taskIds = [];
            pendingTasks.forEach((items) => taskIds.push(items.id));

            taskCardsList.forEach((items) => {
                if (taskIds.includes(Number(items.dataset.taskId))) {
                    items.style.display = 'flex';
                } else {
                    items.style.display = 'none';
                }
            })

        } else {
            alert('No such task found')
        }
    }
})
