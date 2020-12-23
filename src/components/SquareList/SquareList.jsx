import React from 'react';
import "./SquareList.css";

import Square from "../../components/Square/Square";

const SquareList = ({ colors, winningColor, onWinningViewChange, onLosingViewChange}) => {
  return (
    <div class="container">
      {
        colors.map((color, i) => {
          return (
            <Square
              key={i}
              color={color}
              winningColor = {winningColor}
              onWinningViewChange = {onWinningViewChange}
              onLosingViewChange = {onLosingViewChange}
            />
          );
        })
      }
    </div>
  );
}

export default SquareList;
