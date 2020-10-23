import React from 'react';
import Square from '../Square/Square';

const SquareList = ({ colors }) => {
  return (
    <div id="container">
      {
        colors.map((square, i) => {
          return (
            <Square
              key={i}
              color= {colors[i]}
            />
          );
        })
      }
    </div>
  );
}

export default SquareList;