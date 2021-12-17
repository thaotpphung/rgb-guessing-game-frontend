import React from 'react';
import { useSelector } from 'react-redux';
import Modal from '../../common/Modal/Modal';

const StatusBoard = () => {
  const { score, chanceCount, seconds } = useSelector((state) => state.game);

  // for display
  const secondsToDisplay = seconds % 60;
  const minutesRemaining = (seconds - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  return (
    <Modal label="Status">
      <div>Score: {score}</div>
      <div>Chance: {chanceCount}</div>
      <div>
        Time:
        {twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
        {twoDigits(secondsToDisplay)}
      </div>
    </Modal>
  );
};

// https://stackoverflow.com/a/2998874/1673761
const twoDigits = (num) => String(num).padStart(2, '0');

export default StatusBoard;
