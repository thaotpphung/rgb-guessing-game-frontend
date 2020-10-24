import React from 'react';

import Square from "../../components/Square/Square";

const SquareList = ({ colors, winningColor, onWinningViewChange, onLosingViewChange}) => {
  return (
    <div id="container">
      {
        colors.map((color, i) => {
          return (
            <Square
              key={color}
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
