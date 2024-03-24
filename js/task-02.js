const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
ingredients.forEach(ingredient => {
  const listItem = document.createElement(ingredient);
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  list.appendChild(listItem);
});