import axios from "axios";
import React, { useState } from "react";
import partlyCloudy from "./media/partly_cloudy_icon.svg";

export default function WeeklyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row weeklyForecast">
        <div className="row">
          <div className="col-sm-3">
            <div className="row dailyForecast day">{forecast[0].dt}</div>
            <div className="row">
              <img
                src={partlyCloudy}
                alt="partly cloudy"
                className="img-fluid forecastIcon"
              />
            </div>
            <div className="forecastTemps d-flex justify-content-center">
              <span className="maxTemp pe-1">
                {Math.round(forecast[0].temp.max)}°
              </span>
              <span className="minTemp">
                {Math.round(forecast[0].temp.min)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "8fa4cb7231bf2903d6edf1c11f74aca3";
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
