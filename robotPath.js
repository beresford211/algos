/**
 * A simple version of robot paths this will stackOverflow over a certain amount.
 * 
 */

// Todo: Use dynamic programming to solve this

function makeBoard(n) {
  let board = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function (i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function (i, j) {
    return !!this[i][j];
  }
  return board;
}


function robotPaths(n) {
  let board = new makeBoard(n);
  let uniquePaths = 0;
  let isInBounds = function (x, y) {
    return !(x >= n || x < 0 || y < 0 || y >= n);
  };

  let pathFinder = function (x, y) {
    if (!isInBounds(x, y) || board.hasBeenVisited(x, y)) {
      return;
    }
    if (x === n - 1 && y === n - 1) {
      uniquePaths++;
      return;
    }

    board.togglePiece(x, y);
    pathFinder(x - 1, y);
    pathFinder(x, y + 1);
    pathFinder(x + 1, y);
    pathFinder(x, y - 1);
    board.togglePiece(x, y);
  };
  pathFinder(0, 0);
  return uniquePaths;
}
