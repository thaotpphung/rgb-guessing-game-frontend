import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGame, saveGame } from '../../../redux/actions/gameActions';
import './Square.css';
import { LEVELS } from '../../../constants/games';
import { resetColors } from '../../../utils/colors';

const Square = ({ color }) => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const { winColor, level, score, colors, chanceCount, result } = game;
  const { loggedInUser } = useSelector((state) => state.user);
  const { name } = useSelector((state) => state.user);

  const handlePickColor = () => {
    if (result !== '') return;
    const nextLevel = LEVELS[level.value + 1];
    let nextScore = score + level.score;
    if (color === winColor && nextLevel) {
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
      return;
    }
    // check win
    if (color === winColor) {
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
      return;
    }
    // check lose
    const nextChanceCount = chanceCount - 1;
    const computedNextScore = score - level.score;
    nextScore = computedNextScore >= 0 ? computedNextScore : score;

    if (nextChanceCount <= 0) {
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
      return;
    }
    // try again
    dispatch(
      setGame({
        message: 'Try again',
        score: nextScore,
        pickedColor: color,
        chanceCount: nextChanceCount,
      })
    );
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
