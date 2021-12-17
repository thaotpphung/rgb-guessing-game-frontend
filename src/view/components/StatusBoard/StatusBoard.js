import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../common/Modal/Modal';

const StatusBoard = () => {
  const { score, chanceCount } = useSelector((state) => state.game);

  return (
    <Modal label="Status">
      <div>Score: {score}</div>
      <div>Chance: {chanceCount}</div>
    </Modal>
  );
};

export default StatusBoard;
