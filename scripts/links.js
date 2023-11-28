const baseURL = "https://kevingonmed.github.io/wdd230/";
const linksURL = "https://kevingonmed.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data);
        displayLinks(data);
    } catch (error) {
        console.error("Error fetching links data:", error);
    }
}

getLinks();

function displayLinks(weeks) {
    const linksContainer = document.getElementById("activity-links"); // Adjust the ID as needed

    weeks.lessons.forEach((week) => {
        const weekNumber = week.lesson;
        const links = week.links;

        // Create a list item for each link in the week
        const listItem = document.createElement("li");

        // Create a link for each lesson
        links.forEach((link) => {
            const anchor = document.createElement("a");
            anchor.href = `${link.url}`;
            anchor.textContent = link.title;

            listItem.appendChild(anchor);
        });

        // Append the list item to the container
        linksContainer.appendChild(listItem);
    });
}

function displayLinks(weeks) {
    const linksContainer = document.getElementById("activity-links"); // Adjust the ID as needed

    weeks.lessons.forEach((week) => {
        const lessonNumber = week.lesson;
        const links = week.links;

        const lessonSection = document.createElement("section");
        lessonSection.classList.add('lesson-section');

        const lessonHeader = document.createElement("h4");
        lessonHeader.textContent = `Lesson ${lessonNumber}`;
        lessonSection.appendChild(lessonHeader);

        const activitiesList = document.createElement("ul");

        links.forEach((link) => {
            const listItem = document.createElement("li");
            const anchor = document.createElement("a");
            anchor.href = link.url;
            anchor.textContent = link.title; // Display only the activity name
            listItem.appendChild(anchor);
            activitiesList.appendChild(listItem);
        });

        lessonSection.appendChild(activitiesList);
        linksContainer.appendChild(lessonSection);
    });
}

