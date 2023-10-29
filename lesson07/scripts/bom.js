const addButton = document.querySelector('button');
const inputField = document.querySelector('#favchap');
const list = document.querySelector('#list');

// Get the list of chapters from localStorage or initialize an empty array
let chaptersArray = getChapterList() || [];

// Display existing chapters on page load
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

addButton.addEventListener('click', () => {
    if (inputField.value !== '') {
        const chapter = inputField.value;

        // Add the chapter to the array
        chaptersArray.push(chapter);

        // Update localStorage with the new array
        setChapterList();

        // Call the displayList function to add the chapter to the list
        displayList(chapter);

        inputField.value = '';
        inputField.focus();
    } else {
        inputField.focus();
    }
});

function displayList(chapter) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = chapter;
    deleteButton.textContent = '❌';
    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);

        // Remove the chapter from the array and update localStorage
        deleteChapter(chapter);

        inputField.focus();
    });
}

function setChapterList() {
    // Update the localStorage item with the chaptersArray
    localStorage.setItem('myFavChapList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    // Retrieve and parse the chapters from localStorage
    return JSON.parse(localStorage.getItem('myFavChapList'));
}

function deleteChapter(chapter) {
    // Remove the chapter from the array
    chaptersArray = chaptersArray.filter(item => item !== chapter);

    // Update localStorage with the updated array
    setChapterList();
}
