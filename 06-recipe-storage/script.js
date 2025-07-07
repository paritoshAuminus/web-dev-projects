class Recipe {
    constructor(title, description, tags) {
        this.title = title;
        this.description = description;
        this.tags = tags.split(',');
    }
    id = crypto.randomUUID();

    ingredients = [];
    steps = [];

}

class Ingredients {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
}


const globalRecipes = [];
const globalTags = ['vegan', 'spicy'];

const addButtons = document.querySelectorAll('.add-button');
const addRecipeForm = document.getElementById('add-recipe-form');

const recipeList = document.getElementById('recipe-list');
const noRecipes = document.getElementById('no-recipes-yet');

const tagInput = document.getElementById('tags');
const tagSuggestions = document.getElementById('tag-suggestions');

function updateDisplay() {
    if (globalRecipes.length == 0) {
        recipeList.style.display = 'none';
        noRecipes.style.display = 'flex';
    } else {
        recipeList.style.display = 'flex';
        noRecipes.style.display = 'none';
    }
}


// FUNCTION CREATED BY CHAT-GPT (MODIFEID BY ME)
function renderDropdown(tags) {
    tagSuggestions.innerHTML = ''; // clear old list

    tags.forEach(tag => {
        const li = document.createElement('li');
        li.textContent = tag;
        li.classList.add('dropdown-item'); // optional styling class
        li.addEventListener('click', () => handleTagClick(tag));
        tagSuggestions.appendChild(li);
    });
}

// checking whether or not to show the card list
document.addEventListener('load', () => {
    updateDisplay();
})


// Add button
addButtons.forEach(item => {
    item.addEventListener('click', () => {
        addRecipeForm.style.display = 'flex'
    })
});

// Close button
addRecipeForm.addEventListener('click', (event) => {
    if (event.target.id.includes('close-add-form')) {
        addRecipeForm.style.display = 'none';
    }
})



// Submit button
addRecipeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // collecting input
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const tags = document.getElementById('tags').value.trim();

    // form validation
    if (!title) {
        alert('please enter the title');
    } else {
        if (!description) {
            alert('Please enter the description');
        } else {
            if (!tags) {
                alert('Please enter the tags');
            } else {

                const recipe = new Recipe(title, description, tags);

                const tagsList = tags.split(',').map(tag => tag.trim()).filter(tag => tag);
                tagsList.forEach(tag => {
                    if (!globalTags.includes(tag)) {
                        globalTags.push(tag);
                    }
                });

                globalRecipes.push(recipe);

                // creating a new element for card
                const recipeCard = document.createElement('div');
                recipeCard.classList.add(...'recipe-card flex flex-col p-6 shadow-lg rounded-xl bg-white border border-gray-200 max-w-xl w-full mb-4 transition hover:shadow-2xl hover:scale-[1.02]'.split(' '));
                recipeList.appendChild(recipeCard);
                recipeCard.dataset.cardId = recipe.id;
                recipeCard.innerHTML =
                    `
                    <h1 class="text-2xl font-bold text-rose-600 mb-2">${recipe.title}</h1>
                    <span class="text-base text-gray-700 mb-3">${recipe.description}</span>
                    <div class="spanTags flex flex-wrap gap-2 mb-4"></div>
                    <div class="additional-details hidden flex-col gap-2 mb-4">
                        <div class="flex items-center justify-between">
                            <h2 class="text-lg font-bold text-rose-600">Ingredients</h2>
                            <button class="edit-ingredients-btn flex items-center gap-1 text-rose-500 hover:text-rose-700"><i class="fa-solid fa-pen"></i></button>
                        </div>
                        <div class="ingredients-input-div hidden flex items-center gap-2 mt-2">
                            <input type="text" class="ingredients-input border border-gray-300 rounded-md p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-rose-400" placeholder="Add ingredient (ingredient, quantity)..." />
                            <button class="add-ingredients-btn bg-rose-500 text-white px-3 py-2 rounded-md hover:bg-rose-600 text-sm font-semibold flex items-center">Add</button>
                        </div>
                        <span class="no-ingredients-yet italic text-gray-700 text-sm">No ingredients added</span>
                        <div class="ingredients-div"></div>
                        <div class="flex items-center justify-between mt-2">
                            <h2 class="text-lg font-bold text-rose-600">Steps</h2>
                            <button class="edit-steps-btn flex items-center gap-1 text-rose-500 hover:text-rose-700"><i class="fa-solid fa-pen"></i></button>
                        </div>
                        <div class="steps-input-div hidden flex items-center gap-2 mt-2">
                            <input type="text" class="steps-input border border-gray-300 rounded-md p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-rose-400" placeholder="Add step..." />
                            <button class="add-steps-btn bg-rose-500 text-white px-3 py-2 rounded-md hover:bg-rose-600 text-sm font-semibold flex items-center">Add</button>
                        </div>
                        <div class="steps-div"></div>
                        <span class="no-steps-yet italic text-gray-700 text-sm">No steps added</span>
                    </div>
                    <div class="flex gap-2 mt-2 self-end">
                        <button
                            class="open-btn flex items-center gap-1 bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition text-sm font-semibold cursor-pointer"><i
                            class="fa-solid fa-eye"></i> Open</button>
                        <button
                            class="delete-btn flex items-center gap-1 bg-gray-200 text-rose-600 px-4 py-2 rounded-md hover:bg-gray-300 transition text-sm font-semibold cursor-pointer"><i
                            class="fa-solid fa-trash"></i> Delete</button>
                    </div>
                    `

                // dynamic injection of tags into new elements
                tagsList.forEach((item) => {
                    const spanTags = recipeCard.querySelector('.spanTags');
                    const userTags = document.createElement('span');
                    userTags.innerText = item;
                    userTags.classList.add(...'flex items-center justify-center bg-rose-100 text-rose-600 text-xs font-semibold px-3 py-1 rounded-full'.split(' '));
                    spanTags.appendChild(userTags);
                })

                addRecipeForm.reset();
                updateDisplay();

                // showing the successful addition of recipe
                document.getElementById('recipe-saved').style.display = 'flex';
                addRecipeForm.style.display = 'none'
                setTimeout(() => {
                    document.getElementById('recipe-saved').style.display = 'none';
                }, 1500); // the actaul timeout value is 1500
            }
        }
    }
})

// CODE BLOCK ADDED BY COPILOT (START)
tagInput.addEventListener('input', (e) => {
    const fragments = e.target.value.split(',');
    const lastFragment = fragments[fragments.length - 1].trim().toLowerCase();
    const matchingTags = globalTags.filter(tag =>
        tag.toLowerCase().includes(lastFragment) && lastFragment.length > 0
    );
    renderDropdown(matchingTags);
});

function renderDropdown(matches) {
    tagSuggestions.innerHTML = '';
    if (matches.length === 0) {
        tagSuggestions.classList.add('hidden');
        return;
    }
    matches.forEach(tag => {
        const li = document.createElement('li');
        li.textContent = tag;
        li.className = 'bg-gray-100 px-3 py-1 rounded cursor-pointer hover:bg-rose-200 m-1';
        li.addEventListener('click', () => {
            // Replace only the last fragment with the clicked tag
            const fragments = tagInput.value.split(',');
            fragments[fragments.length - 1] = ' ' + tag; // add space for formatting
            tagInput.value = fragments.join(',').replace(/^,/, '');
            tagSuggestions.classList.add('hidden');
            tagInput.focus();
        });
        tagSuggestions.appendChild(li);
    });
    tagSuggestions.classList.remove('hidden');
}

document.addEventListener('click', (e) => {
    if (!tagSuggestions.contains(e.target) && e.target !== tagInput) {
        tagSuggestions.classList.add('hidden');
    }
});
// CODE BLOCK WRITTEN BY COPILOT (END)

// Event delegation logic
recipeList.addEventListener('click', (event) => {

    const recipeCard = event.target.closest('.recipe-card');
    const cardId = recipeCard.dataset.cardId;
    const cardObj = globalRecipes.find(item => item.id === cardId);

    // Card deletion logic
    if (event.target.closest('.delete-btn')) {
        const index = globalRecipes.findIndex(recipe => recipe.id === cardId);

        if (index !== -1) {
            globalRecipes.splice(index, 1);
        }
        recipeCard.remove();
    }

    updateDisplay();


    const ingredientsInput = recipeCard.querySelector('.ingredients-input');
    const ingridentsInputDiv = recipeCard.querySelector('.ingredients-input-div');
    const stepsInputDiv = recipeCard.querySelector('.steps-input-div');
    const ingredientsDiv = recipeCard.querySelector('.ingredients-div');
    const stepsDiv = recipeCard.querySelector('.steps-div');
    const stepsInput = recipeCard.querySelector('.steps-input');

    // show/hide details of recipe cards logic
    if (event.target.closest('.open-btn')) {
        const openBtn = event.target.closest('.open-btn');
        // const recipeCard = event.target.closest('.recipe-card');
        const additionalDetails = recipeCard.querySelector('.additional-details');

        if (additionalDetails.classList.contains('hidden')) {
            additionalDetails.classList.remove('hidden');
            openBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Close';
        } else {
            additionalDetails.classList.add('hidden');
            openBtn.innerHTML = '<i class="fa-solid fa-eye"></i> Open';

            if (!ingridentsInputDiv.classList.contains('hidden')) {
                ingridentsInputDiv.classList.add('hidden');
                ingredientsInput.value = '';
            }

            if (!stepsInputDiv.classList.contains('hidden')) {
                stepsInputDiv.classList.add('hidden');
                stepsInput.value = '';
            }
        }

    }


    // edit/cancel logic inside the cards
    if (event.target.closest('.edit-ingredients-btn')) {

        if (ingridentsInputDiv.classList.contains('hidden')) {
            ingridentsInputDiv.classList.remove('hidden');
        } else {
            ingridentsInputDiv.classList.add('hidden');
            ingredientsInput.value = '';
        }
    }

    if (event.target.closest('.edit-steps-btn')) {

        if (stepsInputDiv.classList.contains('hidden')) {
            stepsInputDiv.classList.remove('hidden');

        } else {
            stepsInputDiv.classList.add('hidden');
            stepsInput.value = '';
        }
    }

    // logic for ingredient input to ingredients object (adding ingredients)
    if (event.target.classList.contains('add-ingredients-btn')) {

        if (ingredientsInput.value.trim() !== '') {
            const ingredientsInputList = ingredientsInput.value.split(',');
            for (let i = 0; i < ingredientsInputList.length; i++) {
                ingredientsInputList[i] = ingredientsInputList[i].trim();
            }

            if (ingredientsInputList.length !== 2) {
                alert('Please enter the input in the right format');
                ingredientsInput.value = '';
            } else {
                // ingredient instance > globalRecipes > recipe object > ingredients (array inside object)
                const ingredient = new Ingredients(ingredientsInputList[0], ingredientsInputList[1]);
                cardObj.ingredients.push(ingredient);

                const ingredientList = document.createElement('div');
                cardObj.ingredients.forEach((item) => {
                    ingredientList.innerHTML =
                        `
                    <div class="ingredient-item flex items-center justify-between w-full gap-4 py-1">
                        <div class="flex-1 text-sm text-rose-600 bg-rose-100 px-3 py-1 rounded-full flex flex-wrap justify-between items-center gap-1">
                            Ingredient: <span class="ingredient-name font-bold ml-1">${item.name}</span>
                            <span class="mx-1">|</span>
                            Quantity: <span class="ingredient-quantity font-bold ml-1">${item.quantity}</span>
                        </div>

                        <button class="delete-ingredient bg-rose-100 text-rose-600 text-xs font-semibold px-3 py-2 rounded-full hover:bg-rose-200 transition cursor-pointer">
                            Delete
                        </button>
                    </div>

                    `
                })
                ingredientsDiv.appendChild(ingredientList);
                ingredientsInput.value = '';
            }
        } else {
            alert('Please enter a valid ingredient input')
        }

        if (cardObj.ingredients.length !== 0) {
            recipeCard.querySelector('.no-ingredients-yet').classList.add('hidden');
        }
    }

    // deleting ingredient from dom and object
    if (event.target.classList.contains('delete-ingredient')) {
        const deleteIngredient = event.target.closest('.delete-ingredient');
        const ingredientItem = deleteIngredient.closest('.ingredient-item');
        const ingredientName = ingredientItem.querySelector('.ingredient-name').innerText.trim();
        const ingredientQuantity = ingredientItem.querySelector('.ingredient-quantity').innerText.trim();

        let ingredientIndex = cardObj.ingredients.findIndex((item) => item.name == ingredientName && item.quantity == ingredientQuantity);
        cardObj.ingredients.splice(ingredientIndex, 1);
        ingredientItem.remove();

        if (cardObj.ingredients.length !== 0) {
            recipeCard.querySelector('.no-ingredients-yet').classList.add('hidden');
        } else {
            recipeCard.querySelector('.no-ingredients-yet').classList.remove('hidden');
        }
    }


    // logic for steps input to cardObj (adding steps)
    if (event.target.classList.contains('add-steps-btn')) {

        if (stepsInput.value.trim() !== '') {

            cardObj.steps.push(stepsInput.value.trim());

            const stepsList = document.createElement('div');
            cardObj.steps.forEach((items) => {
                stepsList.innerHTML =
                    `
                <div class="step-item flex items-center justify-between w-full gap-4 py-1">
                     <div class="flex-1 text-sm text-rose-600 bg-rose-100 px-3 py-1 rounded-full flex flex-wrap items-center gap-1">
                         Step: <span class="step-description font-bold ml-1">${items}</span>
                     </div>
                     <i class="step-up fa-solid fa-arrow-up text-sm text-red-600 cursor-pointer"></i>
                     <i class="step-down fa-solid fa-arrow-down text-sm text-red-600 cursor-pointer"></i>
                     <button class="delete-step bg-rose-100 text-rose-600 text-xs font-semibold px-3 py-2 rounded-full hover:bg-rose-200 transition cursor-pointer">
                         Delete
                     </button>
                 </div>
                 `
            })
            stepsDiv.appendChild(stepsList);
        } else {
            alert('Please enter a valid step');
        }

        stepsInput.value = '';

        if (cardObj.steps.length !== 0) {
            recipeCard.querySelector('.no-steps-yet').classList.add('hidden');
        } else {
            recipeCard.querySelector('.no-steps-yet').classList.remove('hidden');
        }
    }

    // deleting steps from the doma and object
    if (event.target.classList.contains('delete-step')) {

        const deleteStep = event.target.closest('.delete-step');
        const stepsItem = deleteStep.closest('.step-item');
        const stepDescription = stepsItem.querySelector('.step-description').innerText;
        const index = cardObj.steps.findIndex((item) => item == stepDescription);

        cardObj.steps.splice(index, 1);
        stepsItem.remove();

        if (cardObj.steps.length !== 0) {
            recipeCard.querySelector('.no-steps-yet').classList.add('hidden');
        } else {
            recipeCard.querySelector('.no-steps-yet').classList.remove('hidden');
        }
    }

    // Moving steps up and down in the list
    if (event.target.closest('.step-up') || event.target.closest('.step-down')) {

        const stepsItem = event.target.closest('.step-item');
        const stepDescription = stepsItem.querySelector('.step-description').innerText.trim();

        let index = cardObj.steps.findIndex((item) => item === stepDescription);

        if (event.target.classList.contains('step-up') && index !== 0 && index !== -1) {

            cardObj.steps.splice(index, 1);
            cardObj.steps.splice(index - 1, 0, stepDescription);

            stepsDiv.innerHTML = '';

            cardObj.steps.forEach((items) => {
                const stepsList = document.createElement('div');
                stepsList.innerHTML =
                    `
                        <div class="step-item flex items-center justify-between w-full gap-4 py-1">
                            <div class="flex-1 text-sm text-rose-600 bg-rose-100 px-3 py-1 rounded-full flex flex-wrap items-center gap-1">
                                Step: <span class="step-description font-bold ml-1">${items}</span>
                            </div>
                            <i class="step-up fa-solid fa-arrow-up text-sm text-red-600 cursor-pointer"></i>
                            <i class="step-down fa-solid fa-arrow-down text-sm text-red-600 cursor-pointer"></i>
                            <button class="delete-step bg-rose-100 text-rose-600 text-xs font-semibold px-3 py-2 rounded-full hover:bg-rose-200 transition cursor-pointer">
                                Delete
                            </button>
                        </div>
                        `

                stepsDiv.appendChild(stepsList);
            })

        }

        if (event.target.classList.contains('step-down') && index !== cardObj.steps.length && index !== -1) {

            cardObj.steps.splice(index, 1);
            cardObj.steps.splice(index + 1, 0, stepDescription);
            console.log(cardObj.steps);

            stepsDiv.innerHTML = '';

            cardObj.steps.forEach((items) => {
                const stepsList = document.createElement('div');
                stepsList.innerHTML =
                    `
                        <div class="step-item flex items-center justify-between w-full gap-4 py-1">
                            <div class="flex-1 text-sm text-rose-600 bg-rose-100 px-3 py-1 rounded-full flex flex-wrap items-center gap-1">
                                Step: <span class="step-description font-bold ml-1">${items}</span>
                            </div>
                            <i class="step-up fa-solid fa-arrow-up text-sm text-red-600 cursor-pointer"></i>
                            <i class="step-down fa-solid fa-arrow-down text-sm text-red-600 cursor-pointer"></i>
                            <button class="delete-step bg-rose-100 text-rose-600 text-xs font-semibold px-3 py-2 rounded-full hover:bg-rose-200 transition cursor-pointer">
                                Delete
                            </button>
                        </div>
                        `

                stepsDiv.appendChild(stepsList);
            })

        }

    }
})
