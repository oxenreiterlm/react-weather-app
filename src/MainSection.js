import React from "react";
import CurrentWeather from "./CurrentWeather";
import "./MainSection.css";

export default function MainSection() {
  return (
    <div className="MainSection">
      <div className="row">
        <CurrentWeather defaultCity="Pittsburgh" />
      </div>
    </div>
  );
}
