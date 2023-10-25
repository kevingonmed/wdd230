// Get the last modified date of the HTML document
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=CITY_NAME&appid=' + apiKey;

// Get the weather data
fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
        const weatherDescription = data.weather[0].description;
        const temperature = (data.main.temp - 273.15).toFixed(2); // Convert to Celsius
        const humidity = data.main.humidity;

        // Display the weather data
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
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#274c77";
        main.style.color = "#fff";
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🕶️";
    }
});