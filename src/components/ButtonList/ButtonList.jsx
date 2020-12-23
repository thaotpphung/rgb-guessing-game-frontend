import React from 'react';
import Button from "./Button/Button";

const ButtonList = ({ currentMode, modes, onButtonClick}) => {
  return (
    <span className="buttonList">
      {
        modes.map((mode, i) => {
          return (
            <Button
              key={mode.numSquares}
              modeLabel={mode.label}
              currentModeLabel = {currentMode.label}
              onButtonClick = {(event) => onButtonClick(event, mode)}
            />
          );
        })
      }
    </span>
  );
}

export default ButtonList;
