import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import StatusBar from '../../components/StatusBar/StatusBar';
import SquareList from '../../components/SquareList/SquareList';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';
import StatusBoard from '../../components/StatusBoard/StatusBoard';
import Spinner from '../../common/Spinner/Spinner';
import './Game.css';

const Game = () => {
  return (
    <div className="layout">
      <StatusBoard />
      <SquareList />
      <ScoreBoard />
    </div>
  );
};

export default Game;
