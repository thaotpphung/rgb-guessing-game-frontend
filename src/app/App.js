import React, { useEffect, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import SignIn from '../view/pages/SignIn/SignIn';
import SignUp from '../view/pages/SignUp/SignUp';
import Game from '../view/pages/Game/Game';
import NotFound from '../view/pages/NotFound/NotFound';
import StatusBar from '../view/components/StatusBar/StatusBar';
import Header from '../view/components/Header/Header';
import {
  newGame,
  saveGame,
  setGame,
  lostGame,
} from '../redux/actions/gameActions';
import { STATUS } from '../constants/games';

function App() {
  const dispatch = useDispatch();
  const { loggedInUser } = useSelector((state) => state.user);
  const { result, level, score, seconds, status, pickedColor } = useSelector(
    (state) => state.game
  );

  // initialize game
  useEffect(() => {
    dispatch(newGame());
  }, []);

  // check end game
  useEffect(() => {
    if (result !== '') {
      if (loggedInUser)
        dispatch(
          saveGame({
            status: STATUS.COMPLETE,
            level: level.label,
            score,
            result,
            user: loggedInUser._id,
          })
        );
    }
  }, [result]);

  // restart time when it is set to started status
  useInterval(
    () => {
      if (seconds > 0) {
        dispatch(setGame({ seconds: seconds - 1 }));
      } else {
        // lost
        dispatch(lostGame(pickedColor, 0));
      }
    },
    status === STATUS.STARTED ? 1000 : null
  );

  return (
    <div className="game">
      <Header />
      <StatusBar />
      <Switch>
        <Route exact path="/" component={Game} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

// source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// https://stackoverflow.com/a/2998874/1673761
const twoDigits = (num) => String(num).padStart(2, '0');

export default App;
