import React, { useEffect, useState } from 'react';
import openSocket from 'socket.io-client';
import Modal from '../../common/Modal/Modal';
import { getScores } from '../../../api/index';
import { getEnvVars } from '../../../utils/envs';
import '../../../app/App.css';

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
    <div className="board">
      <Modal label="HIGH SCORES">
        {scores.map((score, idx) => (
          <div key={`score-${idx}`}>
            <strong>{score.user.name}:</strong> {score.value}
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default ScoreBoard;
