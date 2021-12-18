import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './StatusBar.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { logout } from '../../../redux/actions/userActions';
import { newGame } from '../../../redux/actions/gameActions';

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
    dispatch(newGame());
    if (location.pathname !== '/') {
      history.push('/');
    }
  };

  return (
    <div className="status-bar">
      <div>
        <span className="label selected">{level.label}</span>
        <span className="label" onClick={handleNewGame}>
          New Game
        </span>
      </div>

      <span className="message">{message}</span>

      {loggedInUser ? (
        <div>
          <span className="label">{loggedInUser.name}</span>
          <span className="label" onClick={handleLogout}>
            SIGN OUT
          </span>
        </div>
      ) : (
        <div>
          <Link className="label" to="/signin">
            SIGN IN
          </Link>
          <Link className="label" to="/signup">
            SIGN UP
          </Link>
        </div>
      )}
    </div>
  );
};

export default StatusBar;
