import React, { useEffect, useState } from 'react';
import openSocket from 'socket.io-client';
import Modal from '../../common/Modal/Modal';
import { getScores } from '../../../api/index';
import { getEnvVars } from '../../../utils/envs';

const ScoreBoard = () => {
  const [scores, setScores] = useState([]);
  const env = getEnvVars();

  useEffect(() => {
    const socket = openSocket(env.BASE_URL);
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
