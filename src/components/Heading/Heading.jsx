import React, { Component } from "react";

const Heading = ({message, colorValue, headingColor}) => {
  return (
    <div
      className="heading"
      style={{ backgroundColor: headingColor }}
    >
      <h1>
        <span>{message}</span>
        <br></br>
        <br></br>
        {colorValue}
      </h1>
    </div>
  );
};

export default Heading;
