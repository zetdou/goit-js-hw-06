const categoriesList = document.getElementById('categories');
const categoriesCount = document.querySelectorAll('li.item').length;
console.log("Number of categories:", categoriesCount);

const categoryItems = categoriesList.querySelectorAll('li.item');
categoryItems.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const elementsCount = category.querySelectorAll('ul li').length;
    console.log("Category:", categoryName);
    console.log("Elements:", elementsCount);
});