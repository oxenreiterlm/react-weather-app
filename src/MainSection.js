import React from "react";
import CurrentWeather from "./CurrentWeather";
import "./MainSection.css";

export default function MainSection() {
  return (
    <div className="MainSection">
      <div className="today'sWeather">
        <div className="row">
          <CurrentWeather />
        </div>
      </div>
    </div>
  );
}
