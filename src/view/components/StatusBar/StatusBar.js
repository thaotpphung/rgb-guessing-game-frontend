import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './StatusBar.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { logout } from '../../../redux/actions/userActions';
import { setGame } from '../../../redux/actions/gameActions';
import { INITIAL_GAME, LEVELS } from '../../../constants/games';
import { resetColors } from '../../../utils/colors';

const StatusBar = () => {
  const dispatch = useDispatch();
  const { loggedInUser } = useSelector((state) => state.user);
  const { level, message } = useSelector((state) => state.game);
  const history = useHistory();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleNewGame = () => {
    const { colors, winColor } = resetColors(LEVELS['1'].numSquares);
    dispatch(setGame({ ...INITIAL_GAME, colors, winColor }));
    if (location.pathname !== '/') {
      history.push('/');
    }
  };

  return (
    <div className="status-bar">
      <span className="label selected">{level.label}</span>
      <span className="label" onClick={handleNewGame}>
        New Game
      </span>
      <span className="message">{message}</span>
      {loggedInUser ? (
        <>
          <div className="label" onClick={handleLogout}>
            SIGN OUT
          </div>
        </>
      ) : (
        <>
          <Link className="label" to="/signin">
            SIGN IN
          </Link>
          <Link className="label" to="/signup">
            SIGN UP
          </Link>
        </>
      )}
    </div>
  );
};

export default StatusBar;
