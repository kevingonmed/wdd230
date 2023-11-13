const baseURL = "https://kevingonmed.github.io/wdd230/";
const linksURL = "https://kevingonmed.github.io/wdd230/data/links.json";
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
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
            anchor.href = `${baseURL}${link.url}`;
            anchor.textContent = link.title;

            listItem.appendChild(anchor);
        });

        // Append the list item to the container
        linksContainer.appendChild(listItem);
    });
}
