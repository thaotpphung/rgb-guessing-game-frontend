import React from 'react';
import { useSelector } from 'react-redux';
import Modal from '../../common/Modal/Modal';
import '../../../app/App.css';

const StatusBoard = () => {
  const { score, chanceCount, seconds } = useSelector((state) => state.game);

  // for display
  const secondsToDisplay = seconds % 60;
  const minutesRemaining = (seconds - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  return (
    <div className="board">
      <Modal label="STATUS">
        <div>
          <strong>Score:</strong> {score}
        </div>
        <div>
          <strong>Chance:</strong> {chanceCount}
        </div>
        <div>
          <strong>Time:&nbsp;</strong>
          {twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
          {twoDigits(secondsToDisplay)}
        </div>
      </Modal>
    </div>
  );
};

const twoDigits = (num) => String(num).padStart(2, '0');

export default StatusBoard;
