import React from "react";
import sunny from "./media/sunny_icon.svg";
import partlyCloudy from "./media/partly_cloudy_icon.svg";

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
        <div className="row">
          <div className="col">
            <div className="row">Wed</div>
            <div className="row">
              <img src={partlyCloudy} alt="partly cloudy" />
            </div>
            <div className="row">80°/68°</div>
          </div>
          <div className="col">
            <div className="row">Thu</div>
            <div className="row">
              <img src={partlyCloudy} alt="partly cloudy" />
            </div>
            <div className="row">80°/68°</div>
          </div>
          <div className="col">
            <div className="row">Fri</div>
            <div className="row">
              <img src={partlyCloudy} alt="partly cloudy" />
            </div>
            <div className="row">80°/68°</div>
          </div>
          <div className="col">
            <div className="row">Sat</div>
            <div className="row">
              <img src={partlyCloudy} alt="partly cloudy" />
            </div>
            <div className="row">80°/68°</div>
          </div>
          <div className="col">
            <div className="row">Sun</div>
            <div className="row">
              <img src={partlyCloudy} alt="partly cloudy" />
            </div>
            <div className="row">80°/68°</div>
          </div>
        </div>
      </div>
    </div>
  );
}
