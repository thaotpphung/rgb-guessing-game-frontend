import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const { winColor, pickedColor } = useSelector((state) => state.game);

  return (
    <div className="heading" style={{ backgroundColor: pickedColor }}>
      <span className="header-text">The Great</span>
      <br />
      <span className="color">{winColor}</span>
      <br />
      <span className="header-text">Color Game</span>
    </div>
  );
};
export default Header;
