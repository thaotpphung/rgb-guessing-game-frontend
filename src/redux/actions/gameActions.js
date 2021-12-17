import {
  GAME_SET,
  GAME_NEXT,
  GAME_NEW,
  GAME_WIN,
  GAME_LOST,
  GAME_RETRY,
  GAME_SAVE_REQUEST,
  GAME_SAVE_SUCCESS,
  GAME_SAVE_FAIL,
} from '../constants/gameConstants';
import * as api from '../../api/index';
import { ERROR_MESSAGE } from '../../constants/messages';
export { setGame, saveGame, newGame, nextGame, winGame, lostGame, retryGame };

const setGame = (game) => async (dispatch) => {
  dispatch({ type: GAME_SET, payload: game });
};

const newGame = (color) => async (dispatch) => {
  dispatch({ type: GAME_NEW, payload: { color } });
};

const nextGame = (color, nextLevel) => async (dispatch) => {
  dispatch({ type: GAME_NEXT, payload: { color, nextLevel } });
};

const winGame = (name, color) => async (dispatch) => {
  dispatch({ type: GAME_WIN, payload: { name, color } });
};

const lostGame = (color, nextChanceCount) => async (dispatch) => {
  dispatch({ type: GAME_LOST, payload: { color, nextChanceCount } });
};

const retryGame = (color, nextChanceCount) => async (dispatch) => {
  dispatch({ type: GAME_RETRY, payload: { color, nextChanceCount } });
};

const saveGame = (game) => async (dispatch) => {
  dispatch({ type: GAME_SAVE_REQUEST, payload: game });
  try {
    const { data } = await api.saveGame(game);
    dispatch({ type: GAME_SAVE_SUCCESS, payload: data });
  } catch (error) {
    console.error(error);
    dispatch({
      type: GAME_SAVE_FAIL,
      payload: error?.response ? error.response.data.message : ERROR_MESSAGE,
    });
  }
};
