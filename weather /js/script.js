// Reemplaza con tu API Key gratuita de OpenWeatherMap
const API_KEY = "TU_API_KEY";
const CITY = "Mexico City";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&lang=es&appid=${API_KEY}`;

async function getWeather() {
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error("Error al obtener datos");
    const data = await response.json();

    document.getElementById("city-name").textContent = data.name;
    document.getElementById("temperature").textContent = `${Math.round(data.main.temp)} °C`;
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("humidity").textContent = `Humedad: ${data.main.humidity}%`;
    document.getElementById("wind").textContent = `Viento: ${data.wind.speed} km/h`;

    const iconCode = data.weather[0].icon;
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  } catch (error) {
    console.error(error);
    document.getElementById("description").textContent = "No se pudo cargar el clima.";
  }
}

getWeather();