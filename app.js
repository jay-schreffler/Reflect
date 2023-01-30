const categoryArray = ['JavaScript','HTML','CSS'];

// side nav
const categoryContainer = document.querySelector('.category-container');
const addCategoryBtn = document.querySelector('#add-category-btn');
const categoryModal = document.querySelector('#new-category-modal')
const createNewCategoryBtn = document.querySelector('#new-category-modal-submit-btn');
// side nav modal
const newCategoryModalCloseBtn = document.querySelector('#close-new-category-btn');
const newCategoryInput = document.querySelector('#new-category-name');

addCategoryBtn.addEventListener('click', () => {
    categoryModal.showModal();
})

newCategoryModalCloseBtn.addEventListener('click', () => {
    categoryModal.close();
})

const test = () => {
    categoryArray.forEach((item) => {
        const newCategory = document.createElement('p');
        newCategory.textContent = item;
        newCategory.classList.add('category-container-style');
        categoryContainer.append(newCategory);
    })
}

createNewCategoryBtn.addEventListener('click', () => {
    categoryArray.push(newCategoryInput.value);
    let tempItem = document.createElement('p')
    tempItem.textContent = newCategoryInput.value;
    tempItem.classList.add('category-container-style');
    categoryContainer.append(tempItem);
    newCategoryInput.value ='';
  
    categoryModal.close();
})



test()