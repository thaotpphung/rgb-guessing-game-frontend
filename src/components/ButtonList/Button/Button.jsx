import React from "react";
import "./Button.css";

const Button = ({
  currentModeLabel,
  modeLabel,
  onButtonClick
}) => {
  const classes = ['button'];
  if (currentModeLabel === modeLabel) {
    classes.push('selected')
  }

  return (
    <button 
      onClick={onButtonClick} 
      className={classes.join(' ')}
    >
      {modeLabel}
    </button>
  );
};

export default Button;
