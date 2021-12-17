import {
  GAME_SET,
  GAME_SAVE_REQUEST,
  GAME_SAVE_SUCCESS,
  GAME_SAVE_FAIL,
} from '../constants/gameConstants';
import { INITIAL_GAME } from '../../constants/games';

const userReducer = (state = INITIAL_GAME, action) => {
  switch (action.type) {
    case GAME_SET:
      return { ...state, ...action.payload };

    case GAME_SAVE_REQUEST:
      return { ...state, loading: true, error: '' };

    case GAME_SAVE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };

    case GAME_SAVE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
