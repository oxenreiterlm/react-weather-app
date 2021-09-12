import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";

export default function CurrentWeather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = "7c78b83b2a3e65f370802905f8ab06e0";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="Header">
          <form id="search" onSubmit={handleSubmit}>
            <input
              className="citySearch"
              type="search"
              placeholder="Search a city . . ."
              autoComplete="off"
              autoFocus="on"
              id="input-city"
              onChange={handleCityChange}
            />
            <button className="search" type="submit" value="Search">
              Search
            </button>
            <button className="currentLoc">
              <span role="img" aria-label="compass" alt="compass">
                🧭
              </span>
              Current Location
            </button>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
