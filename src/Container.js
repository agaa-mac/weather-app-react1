import React from "react";
import "./Container.css";

export default function Container() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          Tuesday
          <br />
          <i className="fa-solid fa-cloud cloud"></i> 8°C
        </div>
        <div className="col-2">
          Wednesday <br />
          <i className="fa-solid fa-cloud-sun cloud-sun"></i> 10°C
        </div>
        <div className="col-2">
          Thursday
          <br />
          <i className="fa-sharp fa-solid fa-snowflake snowflake"></i>
          5°C
        </div>
        <div className="col-2">
          Friday
          <br />
          <i className="fa-solid fa-sun"></i> 10°C
        </div>
        <div className="col-2">
          Saturday
          <br />
          <i className="fa-solid fa-cloud-sun cloud-sun"></i> 10°C
        </div>
        <div className="col-2">
          Sunday
          <br />
          <i className="fa-sharp fa-solid fa-snowflake snowflake"> </i>
          2°C
        </div>
      </div>
    </div>
  );
}
