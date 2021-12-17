import React, { useEffect } from 'react';
import './SquareList.css';
import { useSelector, useDispatch } from 'react-redux';
import { saveGame } from '../../../redux/actions/gameActions';
import Square from '../Square/Square';

const SquareList = () => {
  const { colors, result, score, level } = useSelector((state) => state.game);
  const { loggedInUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="square-list">
      {colors.map((color, idx) => {
        return <Square key={`color-square-${color}-${idx}`} color={color} />;
      })}
    </div>
  );
};

export default SquareList;
