import React from "react";
import CurrentWeather from "./CurrentWeather";
import "./MainSection.css";
import Signature from "./Signature";

export default function MainSection() {
  return (
    <div className="MainSection">
      <div className="row">
        <CurrentWeather defaultCity="Pittsburgh" />
        <Signature />
      </div>
    </div>
  );
}
