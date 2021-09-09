import React from "react";
import sunny from "./media/sunny_icon.svg";

export default function CurrentWeather() {
  return (
    <div>
      <div className="currentLocAndTime">
        <h2 className="cityUpdate">Pittsburgh</h2>
        <div className="currentDateTime">
          <h6 id="date-time-now">Updated: 8/29/21 at 8:02</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <img
            id="current-weather-icon"
            className="currentIcon img-fluid d-flex float-end"
            alt="Current Weather"
            src={sunny}
          />
        </div>
        <div className="col-sm-3 align-self-center p-0">
          <div className="row currentTempWithUnits p-0">
            <span className="currentTemp p-0">89</span>
            <span className="currentUnits p-0">°F/°C</span>
          </div>
          <div className="row currentDesc">sunny</div>
        </div>
        <div className="col-sm-5 p-0 align-self-center">
          <h4 className="otherCurrentDesc">
            <div>21% chance of precipitation</div>
            <div id="wind-speed-input">wind speed: 1mph</div>
            <div id="humidity-input">humidity: 90%</div>
          </h4>
        </div>
      </div>
    </div>
  );
}
