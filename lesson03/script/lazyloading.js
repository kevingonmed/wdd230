// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Get the last modified date and time of the HTML file
    const lastModifiedElement = document.getElementById("lastModified");
    const file = new XMLHttpRequest();
    file.open("HEAD", window.location.href, false);
    file.send();

    if (file.status === 200) {
        const lastModified = new Date(file.getResponseHeader("Last-Modified"));
        lastModifiedElement.textContent = lastModified.toLocaleString();
    }
});
