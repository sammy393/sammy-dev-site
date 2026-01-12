// Replace with your API key from OpenWeather
const apiKey = "YOUR_API_KEY_HERE";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click", () => {
    let city = cityInput.value;
    if (city === "") {
        weatherResult.innerHTML = "Please enter a city name.";
        return;
    }

    getWeather(city);
});

function getWeather(city) {
    const url = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a598f336721da5592cf2933bb52cbd76&units=metric`);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                weatherResult.innerHTML = "City not found!";
            } else {
                weatherResult.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>🌡️ Temp: ${data.main.temp}°C</p>
          <p>☁️ Weather: ${data.weather[0].description}</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
          <p>🌬️ Wind: ${data.wind.speed} m/s</p>
        `;
            }
        })
        .catch(error => {
            weatherResult.innerHTML = "Error fetching data.";
            console.error(error);
        });
}
