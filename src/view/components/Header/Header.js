import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const { winColor, pickedColor } = useSelector((state) => state.game);

  return (
    <div className="heading" style={{ backgroundColor: pickedColor }}>
      <h3>
        <span className="space-around">The Great</span>
        <br />
        <span className="color">{winColor}</span>
        <br />
        <span className="space-around">Color Game</span>
      </h3>
    </div>
  );
};
export default Header;
