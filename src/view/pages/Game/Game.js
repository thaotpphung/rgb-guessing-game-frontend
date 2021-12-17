import React from 'react';
import { useSelector } from 'react-redux';
import SquareList from '../../components/SquareList/SquareList';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';
import StatusBoard from '../../components/StatusBoard/StatusBoard';
import './Game.css';

const Game = () => {
  const { error } = useSelector((state) => state.game);

  return (
    <div className="game-container">
      {error !== '' && (
        <div className="white center error red-text">{error}</div>
      )}
      <div className="game-layout">
        <StatusBoard />
        <SquareList />
        <ScoreBoard />
      </div>
    </div>
  );
};

export default Game;
