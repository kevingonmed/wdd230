const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", function () {
    // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const apiKey = 'bb7c859fce80defacd12b35789a3be52';
    const cityName = 'Cozumel';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDetails = document.querySelector('.weather-details');
            const closeableMessage = document.querySelector('.closeable-message');

            // Get current temperature and humidity
            const currentTemperature = data.list[0].main.temp;
            const currentHumidity = data.list[0].main.humidity;

            // Get next 3 days' forecast at 15:00 (3:00pm)
            const nextThreeDaysForecast = data.list.filter(item => {
                const date = new Date(item.dt * 1000);
                return date.getHours() === 15 &&
                    date.getDate() !== new Date().getDate() &&
                    date.getDate() <= new Date().getDate() + 2; // Next 3 days
            });

            // Display current temperature and humidity
            weatherDetails.innerHTML += `
          <p>Current Temperature: ${currentTemperature}°C</p>
          <p>Current Humidity: ${currentHumidity}%</p>
        `;

            // Display next 3 days' forecast at 15:00 (3:00pm)
            nextThreeDaysForecast.forEach(item => {
                const date = new Date(item.dt * 1000);
                const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' });
                const temperature = item.main.temp;
                const weatherDescription = item.weather[0].description;
                const weatherIcon = item.weather[0].icon;

                weatherDetails.innerHTML += `
            <p>${dayOfWeek}: ${temperature}°C, ${weatherDescription} <img src="http://openweathermap.org/img/wn/${weatherIcon}.png" alt="Weather Icon"></p>
          `;
            });

            // Get high temperature for the current day
            const highTemperature = Math.max(...data.list.map(item => item.main.temp_max));
            closeableMessage.innerHTML = `Today's High Temperature: ${highTemperature}°C <span class="close-btn">X</span>`;

            // Close button functionality
            const closeButton = closeableMessage.querySelector('.close-btn');
            closeButton.addEventListener('click', () => {
                closeableMessage.style.display = 'none';
            });
        })
        .catch(error => console.log('Error fetching weather:', error));
});


document.getElementById("currentYear").textContent = new Date().getFullYear();


document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);
