import React from "react";
import sunny from "./media/sunny_icon.svg";

export default function CurrentWeather() {
  return (
    <div>
      <div className="currentLocAndTime">
        <h2>
          Currently in <em className="cityUpdate">Pittsburgh</em>:
        </h2>
        <div className="currentDateTime">
          <h6 id="date-time-now">Updated: 8/29/21 at 8:02</h6>
        </div>
      </div>
      <div className="row align-items-start">
        <div className="col-sm-6 ">
          <img
            id="current-weather-icon"
            className="currentIcon img-fluid d-flex"
            alt="Current Weather"
            src={sunny}
          />
        </div>
        <div className="col-sm-6">
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
      </div>
    </div>
  );
}
