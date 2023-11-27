const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

// Get the last modified date of the HTML document
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

const apiKey = 'bb7c859fce80defacd12b35789a3be52'; // Replace with your OpenWeatherMap API key
const latitude = 19.4994;
const longitude = -99.2371;
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

// Fetch weather data and update the UI
fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
        const weatherDescription = data.weather[0].description;
        const temperature = (data.main.temp - 273.15).toFixed(2); // Convert to Celsius
        const humidity = data.main.humidity;

        const weatherInfo = `Weather: ${weatherDescription}<br>Temperature: ${temperature}°C<br>Humidity: ${humidity}%`;
        document.querySelector('.weather-card h2').textContent = 'Current Weather';
        document.querySelector('.weather-card p').innerHTML = weatherInfo;
    })
    .catch((error) => {
        console.error('Error fetching weather data:', error);
    });

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    const body = document.body;
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        main.style.background = "#000000";
        main.style.color = "#fff";
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🕶️";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const message = document.querySelector('.message');
    const numVisits = Number(localStorage.getItem("numVisits-ls")) || 0;
    const lastVisit = localStorage.getItem("lastVisit-ls");
    const currentTimestamp = Date.now();
    const oneDayInMillis = 24 * 60 * 60 * 1000; // One day in milliseconds

    if (numVisits === 0) {
        message.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((currentTimestamp - Number(lastVisit)) / oneDayInMillis);

        if (daysSinceLastVisit === 0) {
            message.textContent = "Back so soon! Awesome!";
        } else {
            const plural = daysSinceLastVisit === 1 ? '' : 's';
            message.textContent = `You last visited ${daysSinceLastVisit} day${plural} ago.`;
        }
    }

    localStorage.setItem("lastVisit-ls", currentTimestamp);
    localStorage.setItem("numVisits-ls", numVisits + 1);
});
