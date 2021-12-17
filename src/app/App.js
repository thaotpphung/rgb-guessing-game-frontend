import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import SignIn from '../view/pages/SignIn/SignIn';
import SignUp from '../view/pages/SignUp/SignUp';
import Game from '../view/pages/Game/Game';
import NotFound from '../view/pages/NotFound/NotFound';
import StatusBar from '../view/components/StatusBar/StatusBar';
import Header from '../view/components/Header/Header';
import openSocket from 'socket.io-client';
import { resetColors } from '../utils/colors';
import { setGame, saveGame } from '../redux/actions/gameActions';
import { LEVELS } from '../constants/games';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const { colors, winColor } = resetColors(LEVELS['1'].numSquares);
    dispatch(
      setGame({
        colors,
        winColor,
      })
    );
  }, []);

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

export default App;
