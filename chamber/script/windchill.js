// Get temperature and wind speed elements
const temperatureElement = document.getElementById("temperature");
const windspeedElement = document.getElementById("windspeed");
const windchillElement = document.getElementById("windchill");

// Get temperature and wind speed values
const temperature = parseFloat(temperatureElement.textContent);
const windspeed = parseFloat(windspeedElement.textContent);

// Check if conditions for wind chill calculation are met
if (temperature <= 50 && windspeed > 3.0) {
    // Calculate wind chill
    const windChill = calculateWindChill(temperature, windspeed);
    windchillElement.textContent = windChill.toFixed(1) + " °F";
} else {
    // Conditions not met, display "N/A"
    windchillElement.textContent = "N/A";
}

// Function to calculate wind chill
function calculateWindChill(temperature, windspeed) {
    return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
}
