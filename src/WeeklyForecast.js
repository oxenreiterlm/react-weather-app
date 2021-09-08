import React from "react";
import partlyCloudy from "./media/partly_cloudy_icon.svg";

export default function WeeklyForecast() {
  return (
    <div className="row">
      <div className="col-sm-3">
        <div className="row dailyForecast">Wed</div>
        <div className="row">
          <img
            src={partlyCloudy}
            alt="partly cloudy"
            className="img-fluid forecastIcon"
          />
        </div>
        <div className="row dailyForecast">80°/68°</div>
      </div>
      <div className="col-sm-3">
        <div className="row dailyForecast">Thu</div>
        <div className="row">
          <img
            src={partlyCloudy}
            alt="partly cloudy"
            className="img-fluid forecastIcon"
          />
        </div>
        <div className="row dailyForecast">80°/68°</div>
      </div>
      <div className="col-sm-3">
        <div className="row dailyForecast">Fri</div>
        <div className="row">
          <img
            src={partlyCloudy}
            alt="partly cloudy"
            className="img-fluid forecastIcon"
          />
        </div>
        <div className="row dailyForecast">80°/68°</div>
      </div>
      <div className="col-sm-3">
        <div className="row dailyForecast">Sat</div>
        <div className="row">
          <img
            src={partlyCloudy}
            alt="partly cloudy"
            className="img-fluid forecastIcon"
          />
        </div>
        <div className="row dailyForecast">80°/68°</div>
      </div>
    </div>
  );
}
