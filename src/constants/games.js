const LEVELS = {
  1: {
    value: 1,
    label: 'easy',
    numSquares: 3,
    score: 10,
    chanceScore: 2,
  },
  2: {
    value: 2,
    label: 'medium',
    numSquares: 6,
    score: 20,
    chanceScore: 4,
  },
  3: {
    value: 3,
    label: 'hard',
    numSquares: 9,
    score: 30,
    chanceScore: 6,
  },
};

const INITIAL_GAME = {
  message: 'Guess the color',
  score: 0,
  chanceCount: 5,
  result: '',
  colors: [],
  winColor: '',
  pickedColor: 'rgb(70 130 180)',
  level: LEVELS['1'],
  loading: false,
  error: '',
};

export { LEVELS, INITIAL_GAME };
