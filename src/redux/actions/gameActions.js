import {
  GAME_SET,
  GAME_SAVE_REQUEST,
  GAME_SAVE_SUCCESS,
  GAME_SAVE_FAIL,
} from '../constants/gameConstants';
import * as api from '../../api/index';
import { ERROR_MESSAGE } from '../../constants/messages';

export { setGame, saveGame };

const setGame = (game) => async (dispatch) => {
  dispatch({ type: GAME_SET, payload: game });
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
