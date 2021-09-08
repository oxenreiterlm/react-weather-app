import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <form id="search">
        <input
          className="citySearch"
          type="text"
          placeholder="Search a city . . ."
          autoComplete="off"
          autoFocus="on"
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
