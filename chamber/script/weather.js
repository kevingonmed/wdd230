document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch weather data
    async function fetchWeatherData() {
        const apiKey = 'bb7c859fce80defacd12b35789a3be52';
        const latitude = 19.4994;
        const longitude = -99.2371;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
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

    // Function to display weather data
    function displayWeatherData(data) {
        const currentTemperature = document.getElementById('temperature');
        const currentWeatherDesc = document.getElementById('weather-description');
        const forecast = document.getElementById('forecast');

        // Display current temperature and description
        currentTemperature.textContent = `${data.main.temp}°F`; // 'data.main.temp' for current temperature
        currentWeatherDesc.textContent = data.weather[0].description; // 'data.weather[0].description' for weather description
        // ... (rest of the displayWeatherData function remains the same)
    }

    // Function to show/hide banner
    function displayBanner() {
        const today = new Date().getDay();
        const banner = document.getElementById('banner');
        if (today >= 1 && today <= 3) {
            banner.style.display = 'block'; // Show the banner on Monday, Tuesday, Wednesday
        } else {
            banner.style.display = 'none'; // Hide the banner on other days
        }
    }

    // Function to close banner
    function hideBanner() {
        const banner = document.getElementById('banner');
        banner.style.display = 'none';
    }

    // Event listener to load weather data and display banner
    window.addEventListener('load', () => {
        fetchWeatherData(); // Fetch weather data on page load
        displayBanner(); // Display banner based on the day
    });
});

