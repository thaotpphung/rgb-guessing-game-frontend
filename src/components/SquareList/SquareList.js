import React from 'react';
import "./SquareList.css";

import Square from "./Square/Square";

const SquareList = ({ isEnd, colors, onColorClick}) => {
  return (
    <div className="squareList">
      {
        colors.map((color, i) => {
          return (
            <Square
              key={color+i}
              color={color}
              isEnd={isEnd}
              onColorClick = {(event) => onColorClick(event, color)}
            />
          );
        })
      }
    </div>
  );
}

export default SquareList;
