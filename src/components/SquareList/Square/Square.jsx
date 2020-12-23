import React from "react";
import "./Square.css";

const Square = ({
  color,
  onColorClick
}) => {
  return (
    <div 
      className="square"
      onClick={onColorClick}
      style={{backgroundColor: color}}
    >
    </div>
  );
};

export default Square;
