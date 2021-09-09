import React from "react";
import CurrentWeather from "./CurrentWeather";
import WeeklyForecast from "./WeeklyForecast.js";
import "./MainSection.css";
import Header from "./Header.js";

export default function MainSection() {
  return (
    <div className="MainSection">
      <div className="row">
        <Header />
        <CurrentWeather />
      </div>
      <WeeklyForecast />
    </div>
  );
}
