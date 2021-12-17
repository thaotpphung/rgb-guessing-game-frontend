import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  nextGame,
  lostGame,
  winGame,
  retryGame,
} from '../../../redux/actions/gameActions';
import './Square.css';
import { LEVEL } from '../../../constants/games';

const Square = ({ color }) => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const { winColor, level, chanceCount, result } = game;
  const { name } = useSelector((state) => state.user);

  const handlePickColor = () => {
    if (result !== '') return;
    const nextLevel = LEVEL[level.value + 1];
    if (color === winColor && nextLevel) {
      dispatch(nextGame(color, nextLevel));
      return;
    }
    if (color === winColor) {
      // win
      dispatch(winGame(name, color));
      return;
    }
    const nextChanceCount = chanceCount - 1;
    if (nextChanceCount <= 0) {
      dispatch(lostGame(color, nextChanceCount));
      return;
    }
    dispatch(retryGame(color, nextChanceCount));
  };

  return (
    <div
      className={`square ${result !== '' ? 'disableClick' : ''}`}
      onClick={handlePickColor}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default Square;
