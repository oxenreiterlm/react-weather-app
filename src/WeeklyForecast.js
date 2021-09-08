import React from "react";
import partlyCloudy from "./media/partly_cloudy_icon.svg";

export default function WeeklyForecast() {
  return (
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
  );
}
