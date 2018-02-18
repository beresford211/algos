class mineSweeper {

  constructor(board) {
    this.board = board;
    this.columnHeight = this.board.length - 1;
    this.rowLength = this.board[0].length - 1;
    this.directions = [
      [1, 0],
      [- 1, 0],
      [-1, 1],
      [0, -1],
      [1, -1],
      [- 1, -1],
      [1, 1],
      [0, 1]
    ]
  }

  gameOver() {
    // shut down everything;
  }

  userClick(x, y) {
    // if (this.checkIfBomb(x, y)) {
    //   this.gameOver();
    // }
    this.crawlBoard(x, y);
    console.log(this.board);
  }

  isBombNear(x, y) {
    let count = 0;
    this.directions.forEach((p) => {
      let checkX = x + p[0];
      let checkY = y + p[1];
      if (this.isInValidMove(checkX, checkY) === false) {
        if (this.board[checkX][checkY] === "M") {
          count++;
        }
      }
    });

    return count > 0 ? count : false;
  }


  crawlBoard(x, y) {
    if (this.isInValidMove(x, y)) {
      return false;
    }

    let isBombAround = this.isBombNear(x, y);
    if (isBombAround) {
      this.board[x][y] = isBombAround;
      return false;
    }

    this.board[x][y] = "B";
    this.directions.forEach((p) => {
      let checkX = x + p[0];
      let checkY = y + p[1];
      this.crawlBoard(checkX, checkY);
    });
  }

  isInValidMove(x, y) {
    if (x < 0 || y < 0) {
      return true;
    }

    if (x > this.columnHeight || y > this.rowLength) {
      return true;
    }
    // console.log("What are x", x, "y", y, this.board[this.columnHeight - 1], this.rowLength);
    let boardVal = this.board[x][y];
    if (boardVal === "B" || Number.isInteger(boardVal)) {
      return true;
    }
    return false;
  }

  checkIfBomb(x, y) {
    let position = this.board[x][y];
    if (position === "M") {
      this.board[x][y] = "X";
      return true;
    }
    return false;
  }
}

let board = [['E', 'E', 'E', 'E', 'E'],
['E', 'E', 'M', 'E', 'E'],
['E', 'E', 'E', 'E', 'E'],
['E', 'E', 'E', 'E', 'E']];

let board2 = [["E", "M", "M", "E", "E", "E", "E", "E"],
["E", "E", "M", "E", "E", "E", "E", "E"],
["E", "E", "E", "E", "E", "E", "E", "E"],
["E", "M", "E", "E", "E", "E", "E", "E"],
["E", "E", "E", "E", "E", "E", "E", "E"],
["E", "E", "M", "E", "E", "E", "E", "E"],
["E", "E", "E", "E", "E", "E", "E", "E"],
["E", "E", "E", "E", "E", "E", "E", "E"]]

let board2Solution = [["E", "M", "M", "2", "B", "B", "B", "B"],
["E", "E", "M", "2", "B", "B", "B", "B"],
["E", "E", "2", "1", "B", "B", "B", "B"],
["E", "M", "1", "B", "B", "B", "B", "B"],
["1", "2", "2", "1", "B", "B", "B", "B"],
["B", "1", "M", "1", "B", "B", "B", "B"],
["B", "1", "1", "1", "B", "B", "B", "B"],
["B", "B", "B", "B", "B", "B", "B", "B"]]

let game = new mineSweeper(board2);
game.userClick(5, 5);
