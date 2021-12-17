import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import openSocket from 'socket.io-client';
import Modal from '../../common/Modal/Modal';
import { getScores } from '../../../api/index';

const ScoreBoard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const socket = openSocket('http://localhost:5000');
    socket.on('scores', (data) => {
      setScores(data.scores);
    });
  }, []);

  useEffect(async () => {
    try {
      const { data } = await getScores();
      setScores(data.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Modal label="High Scores">
      {scores.map((score, idx) => (
        <div key={`score-${idx}`}>
          {score.user.name}: {score.value}
        </div>
      ))}
    </Modal>
  );
};

export default ScoreBoard;
