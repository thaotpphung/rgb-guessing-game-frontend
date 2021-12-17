import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGame, saveGame } from '../../../redux/actions/gameActions';
import './Square.css';
import { LEVELS } from '../../../constants/games';
import { resetColors } from '../../../utils/colors';

const Square = ({ color }) => {
  const dispatch = useDispatch();
  const { winColor, level, score, colors, chanceCount, result } = useSelector(
    (state) => state.game
  );
  const { name } = useSelector((state) => state.user);

  const handlePickColor = () => {
    if (result !== '') return;
    const nextLevel = LEVELS[level.num + 1];
    // check win
    if (color === winColor) {
      const nextScore = score + level.score;
      if (nextLevel) {
        // move to next level
        const { colors, winColor } = resetColors(nextLevel.numSquares);
        dispatch(
          setGame({
            message: `Correct! Moving on to next level!`,
            score: nextScore,
            colors,
            winColor,
            pickedColor: color,
            level: nextLevel,
          })
        );
      } else {
        // win
        dispatch(
          setGame({
            message: `Win! Congrats ${name ? name : ''}`,
            score: nextScore,
            colors: new Array(colors.length).fill(color),
            pickedColor: color,
            result: 'win',
          })
        );
      }
    } else {
      const nextChanceCount = chanceCount - 1;
      const computedNextScore = score - level.score;
      const nextScore = computedNextScore >= 0 ? computedNextScore : score;
      if (nextChanceCount >= 0) {
        // try again
        dispatch(
          setGame({
            message: 'Try again',
            score: nextScore,
            pickedColor: color,
            chanceCount: nextChanceCount,
          })
        );
      } else {
        // lose
        dispatch(
          setGame({
            message: 'You lost',
            score: nextScore,
            pickedColor: color,
            chanceCount: nextChanceCount,
            result: 'lost',
          })
        );
      }
    }
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
