import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="currentLocAndTime">
        <h2 className="cityUpdate">{props.data.city}</h2>
        <div className="currentDateTime">
          <h6 id="date-time-now">
            <FormattedDate date={props.data.date} />
          </h6>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <img
            id="current-weather-icon"
            className="currentIcon img-fluid d-flex float-end"
            alt={props.data.description}
            src={props.data.iconURL}
          />
        </div>
        <div className="col-sm-3 align-self-center p-0">
          <div className="row currentTempWithUnits p-0">
            <span className="currentTemp p-0">
              {Math.round(props.data.temperature)}
            </span>
            <span className="currentUnits p-0">°F/°C</span>
          </div>
        </div>
        <div className="col-sm-5 p-0 align-self-center">
          <h4 className="otherCurrentDesc">
            <div>{props.data.description}</div>
            <div id="wind-speed-input">
              wind speed: {Math.round(props.data.wind)} mph
            </div>
            <div id="humidity-input">humidity: {props.data.humidity}%</div>
          </h4>
        </div>
      </div>
    </div>
  );
}