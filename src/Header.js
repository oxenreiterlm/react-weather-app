import React from "react";
import logo from "./media/weatherNowLogo.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <form id="search">
        <img className="logo" src={logo} alt="Weather Now Logo" />
        <input
          className="citySearch"
          type="text"
          placeholder="Search a city . . ."
          autocomplete="off"
          autofocus="on"
          id="input-city"
        />
        <button className="search">Search</button>
        <button className="currentLoc">
          <span role="img" aria-label="compass" alt="compass">
            🧭
          </span>
          Current Location
        </button>
      </form>
    </div>
  );
}
