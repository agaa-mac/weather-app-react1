import React from "react";
import "./CurrentCity.css";
export default function CurrentCity() {
  return (
    <section>
      <h1 id="current-city">Amsterdam</h1>
      <br />
      <div className="current-city">
        <span className="today" id="today">
          Today{" "}
        </span>
        <br />
        <span className="today">
          <i className="fa-sharp fa-solid fa-snowflake snowflake"> </i>

          <span className="temperature" id="temperature">
            17 °C
          </span>
        </span>
      </div>
    </section>
  );
}
