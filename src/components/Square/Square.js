import React from "react";
import "./Square.css";

const Square = ( {color}) => {
  return (
    <div
      className="square"
      style={{
        background: color ,
      }}
    ></div>
  );
};

export default Square;
