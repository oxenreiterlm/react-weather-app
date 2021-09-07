import React from "react";
import partlyCloudy from "./media/partly_cloudy_icon.svg";

export default function TodaysWeather() {
  return (
    <div className="col">
      <div className="card h-100">
        <div>
          <h2>
            Today in{" "}
            <span>
              <em className="cityUpdate2">Pittsburgh</em>:
            </span>
          </h2>
        </div>
        <div className="row align-items-start">
          <div className="col">
            <img className="todayIcon" alt="Weather Today" src={partlyCloudy} />
            <h4 className="weatherToday">
              <span className="todayHighTemp">94°/</span>
              <span className="todayLowTemp">78°</span>
              <div className="todayDailyDesc">partly cloudy</div>
            </h4>
          </div>
          <div className="col-sm-6">
            <div className="willItRain"></div>
            <ul id="hourly-forecast">
              <li>
                <span className="hourlyTime">9:00: </span>
                <span className="hourlyPrecip">15% </span>/
                <span className="hourlyTemp"> 90°</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
