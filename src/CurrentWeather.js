import React from "react";
import sunny from "./media/sunny_icon.svg";
import "./CurrentWeather.css";
import WeeklyForecast from "./WeeklyForecast.js";

export default function CurrentWeather() {
  return (
    <div>
      <div>
        <h2>
          Currently in <em className="cityUpdate">Pittsburgh</em>:
        </h2>
        <div className="currentDateTime">
          <h6 id="date-time-now">Updated: 8/29/21 at 8:02</h6>
        </div>
      </div>
      <div className="row align-items-start">
        <div className="col-sm-5 ">
          <img
            id="current-weather-icon"
            className="currentIcon"
            alt="Current Weather"
            src={sunny}
          />
        </div>
        <div className="col">
          <h3 className="currentCard">
            <span id="temp">89</span>
            <span className="units">
              °
              <a href="/" className="active" id="fahrenheit-link">
                F
              </a>{" "}
              | °
              <a href="/" className="inactive" id="celsius-link">
                C
              </a>
            </span>
          </h3>
          <h4>
            <div id="weather-desc-input">sunny</div>
            <div id="wind-speed-input">wind speed: 1mph</div>
            <div id="humidity-input">humidity: 90%</div>
          </h4>
        </div>
        <WeeklyForecast />
      </div>
    </div>
  );
}
