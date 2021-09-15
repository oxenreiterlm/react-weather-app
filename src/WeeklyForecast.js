import React from "react";
import partlyCloudy from "./media/partly_cloudy_icon.svg";

export default function WeeklyForecast() {
  return (
    <div className="row weeklyForecast">
      <div className="row">
        <div className="col-sm-3">
          <div className="row dailyForecast day">Wed</div>
          <div className="row">
            <img
              src={partlyCloudy}
              alt="partly cloudy"
              className="img-fluid forecastIcon"
            />
          </div>
          <div className="forecastTemps d-flex justify-content-center">
            <span className="maxTemp pe-1">80°</span>
            <span className="minTemp">68°</span>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="row dailyForecast day">Thu</div>
          <div className="row">
            <img
              src={partlyCloudy}
              alt="partly cloudy"
              className="img-fluid forecastIcon"
            />
          </div>
          <div className="forecastTemps d-flex justify-content-center">
            <span className="maxTemp pe-1">80°</span>
            <span className="minTemp">68°</span>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="row dailyForecast day">Fri</div>
          <div className="row">
            <img
              src={partlyCloudy}
              alt="partly cloudy"
              className="img-fluid forecastIcon"
            />
          </div>
          <div className="forecastTemps d-flex justify-content-center">
            <span className="maxTemp pe-1">80°</span>
            <span className="minTemp">68°</span>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="row dailyForecast day">Sat</div>
          <div className="row">
            <img
              src={partlyCloudy}
              alt="partly cloudy"
              className="img-fluid forecastIcon"
            />
          </div>
          <div className="forecastTemps d-flex justify-content-center">
            <span className="maxTemp pe-1">80°</span>
            <span className="minTemp">68°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
