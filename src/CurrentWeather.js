import React, { useState } from "react";
import axios from "axios";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      iconURL: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div>
        <div className="currentLocAndTime">
          <h2 className="cityUpdate">{weatherData.city}</h2>
          <div className="currentDateTime">
            <h6 id="date-time-now">Updated: 8/29/21 at 8:02</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <img
              id="current-weather-icon"
              className="currentIcon img-fluid d-flex float-end"
              alt={weatherData.description}
              src={weatherData.iconURL}
            />
          </div>
          <div className="col-sm-3 align-self-center p-0">
            <div className="row currentTempWithUnits p-0">
              <span className="currentTemp p-0">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="currentUnits p-0">°F/°C</span>
            </div>
          </div>
          <div className="col-sm-5 p-0 align-self-center">
            <h4 className="otherCurrentDesc">
              <div>{weatherData.description}</div>
              <div id="wind-speed-input">
                wind speed: {Math.round(weatherData.wind)} mph
              </div>
              <div id="humidity-input">humidity: {weatherData.humidity}%</div>
            </h4>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "7c78b83b2a3e65f370802905f8ab06e0";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse);
    return "Loading";
  }
}
