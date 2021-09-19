import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function precipitation() {
    let chanceOfPrecip = Math.round(props.data.pop * 100);
    return `${chanceOfPrecip}`;
  }
  return (
    <div className="WeatherForecastDay">
      <div className="dailyForecast day">{day()}</div>
      <div className="d-flex justify-content-center">
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
      </div>
      <div className="forecastTemps d-flex justify-content-center">
        <span className="maxTemp pe-1">{maxTemperature()}°</span>
        <span className="minTemp">{minTemperature()}°</span>
      </div>
      <div className="d-flex justify-content-center precipitationPercent">
        {precipitation()}%💧
      </div>
    </div>
  );
}
