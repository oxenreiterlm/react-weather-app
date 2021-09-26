import React from "react";
import "./Signature.css";

export default function TodaysWeather() {
  return (
    <div className="Signature">
      <a
        href="https://github.com/oxenreiterlm/react-weather-app"
        target="blank"
        title="GitHub repository"
        className="gitHubLink"
      >
        Open-source code
      </a>{" "}
      by{" "}
      <a
        href="https://gifted-edison-603b21.netlify.app/"
        target="blank"
        title="Portfolio"
        className="profileLink"
      >
        Laura Oxenreiter
      </a>
    </div>
  );
}
