//generate a number of random colors and place into "colors" state, choose a random winning color
const generateRandomColors = (numSquares) => {
  let colors = [];
  let r = '';
  let g = '';
  let b = '';
  for (let i = 0; i < numSquares; i++) {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    colors.push('rgb(' + r + ', ' + g + ', ' + b + ')');
  }
  return colors;
};

// pick a random color out of given colors as winning color
const pickColor = (colors) => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const resetColors = (numSquares) => {
  const colors = generateRandomColors(numSquares);
  const winColor = pickColor(colors);
  return {
    colors,
    winColor,
  };
};

export { resetColors };
