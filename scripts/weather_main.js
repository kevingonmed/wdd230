// Get references to HTML elements
const weatherDescription = document.getElementById('weather-description');
const currentTemperature = document.getElementById('current-temperature');
const weatherIcon = document.getElementById('weather-icon');

// OpenWeatherMap API URL with your API key

const apiKey = 'bb7c859fce80defacd12b35789a3be52';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=19.499365529657354&lon=-99.23708598420487&units=imperial&appid=${apiKey}`;

// Function to fetch weather data and update HTML elements
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();

            // Update weather description
            weatherDescription.textContent = data.weather[0].description;

            // Update current temperature
            currentTemperature.textContent = `${data.main.temp}°F`;

            // Update weather icon
            const iconCode = data.weather[0].icon;
            weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon">`;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

apiFetch(); 
