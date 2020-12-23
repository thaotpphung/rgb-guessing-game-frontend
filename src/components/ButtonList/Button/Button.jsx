import React from "react";
import "./Button.css";

const Button = ({
  currentMode,
  mode,
  onButtonClick
}) => {
  const classes = ['button'];
  if (currentMode === mode) {
    classes.push('selected')
  }

  return (
    <button 
      onClick={onButtonClick} 
      className={classes.join(' ')}
    >
      {mode}
    </button>
  );
};

export default Button;
