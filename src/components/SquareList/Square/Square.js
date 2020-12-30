import React from "react";
import "./Square.css";

const Square = ({
  isEnd,
  color,
  onColorClick
}) => {
  const classes = ['square'];

  if (isEnd) {
    classes.push('disableClick');
    onColorClick = null
  }

  return (
    <div 
      className={classes.join(' ')}
      onClick={onColorClick}
      style={{backgroundColor: color}}
    >
    </div>
  );
};

export default Square;
