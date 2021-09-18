import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature";

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
      <div className="row weatherToday">
        <div className="col-sm-4">
          <div className="d-flex float-end me-4">
            <WeatherIcon code={props.data.icon} size={84} />
          </div>
        </div>
        <div className="col-sm-3 align-self-center p-0">
          <div className="row currentTempWithUnits p-0">
            <WeatherTemperature
              fahrenheit={Math.round(props.data.temperature)}
            />
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
