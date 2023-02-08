import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <form className="search-city" id="enter-city">
      <input
        type="text"
        placeholder="Enter a city"
        className="enter-city"
        autoFocus
        id="city-name"
      />
      <input type="submit" value="search" className="search-button" />
    </form>
  );
}
