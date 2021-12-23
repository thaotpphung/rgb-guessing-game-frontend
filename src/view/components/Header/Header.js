import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import StatusBoard from '../StatusBoard/StatusBoard';

const Header = () => {
  const { winColor, pickedColor } = useSelector((state) => state.game);

  return (
    <div className="app-header-layout" style={{ backgroundColor: pickedColor }}>
      <StatusBoard />
      <div className="heading">
        <span className="header-text">The Great</span>
        <br />
        <span className="color">{winColor}</span>
        <br />
        <span className="header-text">Color Game</span>
      </div>
      <ScoreBoard />
    </div>
  );
};
export default Header;
