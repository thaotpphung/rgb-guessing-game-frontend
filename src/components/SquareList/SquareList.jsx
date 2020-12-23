import React from 'react';
import "./SquareList.css";

import Square from "./Square/Square";

const SquareList = ({ colors, onColorClick}) => {
  return (
    <div className="squareList">
      {
        colors.map((color, i) => {
          return (
            <Square
              key={i}
              color={color}
              onColorClick = {(event) => onColorClick(event, color)}
            />
          );
        })
      }
    </div>
  );
}

export default SquareList;
