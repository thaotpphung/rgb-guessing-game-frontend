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
import { LEVEL, STATUS, RESULT, DEFAULT_COLOR } from '../../constants/games';
import { resetColors } from '../../utils/colors';

const INITIAL_GAME = {
  status: STATUS.STARTED,
  seconds: LEVEL['1'].seconds,
  level: LEVEL['1'],
  score: LEVEL['1'].score,
  chanceCount: LEVEL['1'].chanceCount,
  message: 'Which color?',
  result: RESULT.UNDETERMINED,
  colors: [],
  winColor: '',
  pickedColor: DEFAULT_COLOR,
  loading: false,
  error: '',
};

const userReducer = (state = INITIAL_GAME, action) => {
  switch (action.type) {
    case GAME_SET:
      return { ...state, ...action.payload };

    case GAME_NEXT: {
      const { level, score, seconds, chanceCount } = state;
      const { color, nextLevel } = action.payload;
      const nextScore = score + level.score;
      const nextChanceCount = chanceCount + nextLevel.chanceCount;
      const nextTimer = seconds + level.seconds;
      const { colors, winColor } = resetColors(nextLevel.numSquares);
      const newGame = {
        message: `Correct! Level ${nextLevel.value}/${
          Object.keys(LEVEL).length
        }`,
        score: nextScore,
        colors,
        winColor,
        pickedColor: color,
        level: nextLevel,
        chanceCount: nextChanceCount,
        seconds: nextTimer,
        status: STATUS.STARTED,
      };
      return { ...state, ...newGame };
    }

    case GAME_WIN: {
      const { level, score, colors } = state;
      const { name, color } = action.payload;
      const nextScore = score + level.score;
      const newGame = {
        message: `Win! Congrats ${name ? name : ''}`,
        score: nextScore,
        colors: new Array(colors.length).fill(color),
        pickedColor: color,
        result: RESULT.WIN,
        status: STATUS.COMPLETE,
      };
      return { ...state, ...newGame };
    }

    case GAME_LOST: {
      const { score, level } = state;
      const { color, nextChanceCount } = action.payload;
      const nextScore = score + level.score;
      const newGame = {
        message: 'You lost',
        score: nextScore,
        pickedColor: color,
        chanceCount: nextChanceCount,
        result: RESULT.LOST,
        status: STATUS.COMPLETE,
      };
      return { ...state, ...newGame };
    }

    case GAME_RETRY: {
      const { score, level } = state;
      const { color, nextChanceCount } = action.payload;
      const computedNextScore = score - level.chanceScore;
      const nextScore = computedNextScore >= 0 ? computedNextScore : score;
      const newGame = {
        message: 'Try again',
        score: nextScore,
        pickedColor: color,
        chanceCount: nextChanceCount,
      };
      return { ...state, ...newGame };
    }

    case GAME_NEW: {
      const { colors, winColor } = resetColors(LEVEL['1'].numSquares);
      const newGame = {
        ...INITIAL_GAME,
        colors,
        winColor,
      };
      return { ...state, ...newGame };
    }

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
