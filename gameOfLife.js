const matrix = require("./matrix.js");

function gameOfLife(m, n) {
  let gameBoard;
  gameBoard = new matrix(m, n);
  let row = gameBoard.getColumnHeight();
  let column = gameBoard.getRowLength();
}

function detectStatus(row, column, val) {
  let currentVal = gameBoard.matrix[row][column];
  let count = 0;
  let moves = [
    [0, 1], [0, -1],
    [1, 0], [-1, 0],
    [1, 1], [-1, -1],
    [1, -1], [-1, 1]
  ]

  moves.forEach((move) => {
    let x = row + move[0];
    let y = row + move[1];
    if (gameBoard.matrix[x][y] === 1) {
      count++;
    }
  });


  if (val === 1) {
    if (count === 2 || count === 3) {
      return 1;
    }
  } else if (val === 0 && count === 3) {
    return 1;
  }

  return 0;
}


function updateBoard(rowCount, columnCount) {
  for (let row = 0; row < rowCount; row++) {
    for (let column = 0; column < columnCount; column++) {
      let tempVal = gameBoard.matrixCopy[row][column];
      gameBoard.matrixCopy[row][column] = detectStatus(row, column, tempVal);
    }
  }
}


gameOfLife(5, 5);