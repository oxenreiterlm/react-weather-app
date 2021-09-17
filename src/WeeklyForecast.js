import axios from "axios";
import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay.js";

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
        <div className="col-sm">
          <WeatherForecastDay data={forecast[1]} />
        </div>
        <div className="col-sm">
          <WeatherForecastDay data={forecast[2]} />
        </div>
        <div className="col-sm">
          <WeatherForecastDay data={forecast[3]} />
        </div>
        <div className="col-sm">
          <WeatherForecastDay data={forecast[4]} />
        </div>
        <div className="col-sm">
          <WeatherForecastDay data={forecast[5]} />
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
