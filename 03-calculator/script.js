// Storing document components
const buttonContainer = document.querySelectorAll('.buttonContainer');
const btn = document.querySelectorAll('.btn');
const digitBtn = document.querySelectorAll('.digitBtn');
const funcBtn = document.querySelectorAll('.funcBtn');
const submit = document.getElementById('submit');
const clear = document.getElementById('clear');
const valueArr = [];


// function to push value to valueArr
function valueSender(value) {
  valueArr.push(value);
  let num = valueArr.join('')
  document.getElementById('display').innerText = num;
}

// function to calculate the result
function result(valueList) {
  let expression = valueList.join('');
  let result = eval(expression);
  document.getElementById('display').innerText = result;
  valueArr.length = 0;
  valueArr.push(result);
}

// function to backspace
function backspace() {
  valueArr.pop();
  let num = valueArr.join('')
  document.getElementById('display').innerText = num;
}

// function to clear
function clearList() {
  valueArr.length = 0;
  document.getElementById('display').innerText = 0;
}


// previous function
// submit.addEventListener('click', result(valueArr));

// function fixed by GPT
submit.addEventListener('click', () => result(valueArr));

// clear event
clear.addEventListener('click', () => clearList())

// DOM (styling)
buttonContainer.forEach(el => {
  el.classList.add('w-full', 'py-2', 'flex', 'justify-between');
});

btn.forEach(el => {
    el.classList.add('rounded-full', 'size-17')
});

digitBtn.forEach(el => {
  el.classList.add('bg-gray-700', 'hover:bg-gray-600')
})

funcBtn.forEach(el => {
  el.classList.add('bg-orange-400', 'hover:bg-orange-500')
})
