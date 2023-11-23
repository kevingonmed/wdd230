// Function to fetch current weather data
async function fetchWeatherData() {
    const apiKey = 'bb7c859fce80defacd12b35789a3be52';
    const latitude = 19.4994;
    const longitude = -99.2371;
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

    try {
        const response = await fetch(weatherApiUrl);
        if (response.ok) {
            const data = await response.json();
            displayWeatherData(data);
        } else {
            throw new Error('Weather data not available.');
        }
    } catch (error) {
        console.error(error);
    }
}

// Function to display current weather data
function displayWeatherData(data) {
    const currentTemperature = document.getElementById('temperature');
    const currentWeatherDesc = document.getElementById('weather-description');

    // Display current temperature and description
    currentTemperature.textContent = `${data.main.temp}°F`;
    currentWeatherDesc.textContent = data.weather[0].description;
    // ... (other data display if needed)
}

// Function to fetch forecast data
async function fetchForecastData() {
    const apiKey = 'bb7c859fce80defacd12b35789a3be52';
    const latitude = 19.4994;
    const longitude = -99.2371;
    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

    try {
        const response = await fetch(forecastApiUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecastData(data);
        } else {
            throw new Error('Forecast data not available.');
        }
    } catch (error) {
        console.error(error);
    }
}

// Function to display forecast data
function displayForecastData(data) {
    const forecastList = document.getElementById('forecast-list');
    forecastList.innerHTML = ''; // Clear any existing forecast data

    // Loop through the forecast data (assuming the API returns data for the next 3 days)
    for (let i = 0; i < 3; i++) {
        const forecastItem = document.createElement('li');
        const date = new Date(data.list[i].dt * 1000);
        const temperature = data.list[i].main.temp;
        const weatherDesc = data.list[i].weather[0].description;

        // Create the forecast item HTML structure
        forecastItem.innerHTML = `${date.toDateString()} - ${temperature}°F, ${weatherDesc}`;
        forecastList.appendChild(forecastItem);
    }
}

// Inside the window load event listener
window.addEventListener('load', () => {
    fetchWeatherData(); // Fetch current weather data
    fetchForecastData(); // Fetch forecast data
    // You may call other functions or display banners here if needed
});
