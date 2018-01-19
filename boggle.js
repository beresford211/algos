let dictionary = { 'cat': 'cat', 'cater': 'cater', 'art': 'art', 'toon': 'toon', 'moon': 'moon', 'not': 'not', 'eat': 'eat', 'ton': 'ton' };

let grid = [
  ['C', 'A', 'T'],
  ['R', 'R', 'E'],
  ['T', 'O', 'N'],
];

// output: number of words that can be created from the grid

// rules: a letter can only be used once

function boggle(dictionary, grid) {
  // up, upRight, right, downRight, down, leftDown, left, leftUp
  let outPut = [];
  let maxLength = Math.pow(grid.length, 2);
  let rowLength = grid.length - 1;

  function searchGrid(x, y, word) {
    if ((x < 0 || y < 0) && (x > rowLength || y > rowLength))
      return;
    if (word.length > maxLength)
      return;
    if (dictionary[word])
      outPut.push(word);

    //  rowCounter -1, -1, 0, 0, 1, 1
    //  colCounter 1, 1, 0, 0, -1, -1

    // up
    searchGrid(x - 1, y, word + grid[x][y]);

    // upRight
    searchGrid(x - 1, y + 1, word + grid[x][y]);

    // Right
    searchGrid(x, y + 1, word + grid[x][y]);

    //downRight
    searchGrid(x + 1, y + 1, word + grid[x][y]);

    // down;
    searchGrid(x + 1, y, word + grid[x][y]);

    // leftDown
    searchGrid(x + 1, y - 1, word + grid[x][y]);

    // left
    searchGrid(x, y - 1, word + grid[x][y]);

    // leftUp
    searchGrid(x - 1, y - 1, word + grid[x][y]);
  }

  return outPut
}

