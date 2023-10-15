const addButton = document.querySelector('button');
const inputField = document.querySelector('#favchap');
const list = document.querySelector('#list');

addButton.addEventListener('click', () => {
    if (inputField.value !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = inputField.value;
        deleteButton.textContent = '❌';
        li.appendChild(deleteButton);
        list.appendChild(li);
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            inputField.focus();
        });
        inputField.value = '';
    } else {
        // Display a message or alert the user to enter a book and chapter.
        inputField.focus();
    }
});