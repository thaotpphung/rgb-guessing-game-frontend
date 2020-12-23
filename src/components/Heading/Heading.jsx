import React from "react";
import "./Heading.css";

const Heading = ({colorValue, headingColor}) => {
    return (
      <div
        className="heading"
        style={{ backgroundColor: headingColor }}
      >
        <h1>
          The Great
          <br/>
          <span className="colorHeading">{colorValue}</span>
          <br/>
          Color Game
        </h1>
      </div>
    );
  };


export default Heading;
