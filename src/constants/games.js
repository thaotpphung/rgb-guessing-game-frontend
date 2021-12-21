const LEVEL = {
  1: {
    value: 1,
    label: 'easy',
    numSquares: 3,
    score: 0,
    chanceScore: 2,
    chanceCount: 2,
    seconds: 10,
  },
  2: {
    value: 2,
    label: 'medium',
    numSquares: 6,
    score: 24,
    chanceScore: 4,
    chanceCount: 2,
    seconds: 2,
  },
  3: {
    value: 3,
    label: 'hard',
    numSquares: 9,
    score: 54,
    chanceScore: 6,
    chanceCount: 2,
    seconds: 2,
  },
  4: {
    value: 4,
    label: 'extreme',
    numSquares: 12,
    score: 84,
    chanceScore: 7,
    chanceCount: 2,
    seconds: 2,
  },
  5: {
    value: 5,
    label: 'insane',
    numSquares: 15,
    score: 90,
    chanceScore: 6,
    chanceCount: 2,
    seconds: 2,
  },
  6: {
    value: 6,
    label: 'impossible',
    numSquares: 18,
    score: 108,
    chanceScore: 6,
    chanceCount: 2,
    seconds: 3,
  },
};

const DEFAULT_COLOR = 'rgb(70 130 180)';

const STATUS = {
  COMPLETE: 'COMPLETE',
  STARTED: 'STARTED',
  NOT_STARTED: 'NOT_STARTED',
};

const RESULT = {
  WIN: 'WIN',
  LOST: 'LOST',
  UNDETERMINED: '',
};

export { LEVEL, STATUS, RESULT, DEFAULT_COLOR };
