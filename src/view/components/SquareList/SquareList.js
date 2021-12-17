import React from 'react';
import './SquareList.css';
import { useSelector } from 'react-redux';
import Square from '../Square/Square';

const SquareList = () => {
  const { colors } = useSelector((state) => state.game);

  return (
    <div className="square-list">
      {colors.map((color, idx) => {
        return <Square key={`color-square-${color}-${idx}`} color={color} />;
      })}
    </div>
  );
};

export default SquareList;
