// const tagInput = document.getElementById('tag-input');
// const suggestionBox = document.getElementById('tag-suggestions');
// const selectedTagsContainer = document.getElementById('selected-tags');

// const globalTags = ['Vegan', 'Spicy', 'Quick', 'Dessert', 'Gluten-Free'];
// let selectedTags = [];

// tagInput.addEventListener('input', () => {
//   const query = tagInput.value.toLowerCase();
//   const matches = globalTags.filter(tag =>
//     tag.toLowerCase().includes(query) && !selectedTags.includes(tag)
//   );

//   renderSuggestions(matches);
// });

// function renderSuggestions(matches) {
//   suggestionBox.innerHTML = '';

//   if (matches.length === 0 || tagInput.value === '') {
//     suggestionBox.classList.add('hidden');
//     return;
//   }

//   matches.forEach(tag => {
//     const li = document.createElement('li');
//     li.textContent = tag;
//     li.className = 'p-2 hover:bg-gray-200 cursor-pointer';
//     li.addEventListener('click', () => {
//       selectTag(tag);
//     });
//     suggestionBox.appendChild(li);
//   });

//   suggestionBox.classList.remove('hidden');
// }

// function selectTag(tag) {
//   selectedTags.push(tag);
//   updateSelectedTags();
//   tagInput.value = '';
//   suggestionBox.classList.add('hidden');
// }

// function updateSelectedTags() {
//   selectedTagsContainer.innerHTML = '';
//   selectedTags.forEach(tag => {
//     const tagElement = document.createElement('span');
//     tagElement.textContent = tag;
//     tagElement.className =
//       'bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm';
//     selectedTagsContainer.appendChild(tagElement);
//   });
// }

const newArr = ['hello', 'world'];
console.log(newArr.length);