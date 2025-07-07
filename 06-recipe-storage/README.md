# Recipe creator and tracker 

This is a recipe tracker app created primarily with the help of html, tailwind CSS (popular CSS framework) and Vanilla Javascript. Packed with great features it can come in handy even in daily activities.

## Features

- The user can add/remove/edit and delete recipe
- Store and retrieve recipe from local storage
- List all the recipes
- Mark each recipe with number times created 
- Look at heatmap of specific/all recipe(s)

## Basic Object structure
<pre>
const recipe = {
  id: 'uuid-123',
  title: 'Spaghetti Carbonara',
  description: 'Classic Italian pasta dish',
  ingredients: [
    { name: 'Spaghetti', quantity: '200g' },
    { name: 'Eggs', quantity: '3' },
    { name: 'Pancetta', quantity: '100g' },
    { name: 'Parmesan Cheese', quantity: '50g' }
  ],
  steps: [
    'Boil the pasta.',
    'Fry pancetta.',
    'Mix eggs and cheese.',
    'Combine all with pasta.'
  ],
  nutrition: {
    calories: 550,
    protein: '25g',
    fat: '20g',
    carbs: '60g'
  },
  tags: ['Italian', 'Pasta', 'Quick'],
  rating: 4.7,
  createdAt: '2025-06-14T10:00:00Z'
};
</pre>