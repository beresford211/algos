class Sudoku {
  constructor(m, n, board) {
    this.m = m;
    this.n = n;
    this.board = board;
  }

  checkRowOrColumn(x, y) {
    let numberList = {};
    let isValid = true;

    for (let k = 0; k < x; k++) {
      for (let l = 0; l < y; l++) {
        let currentVal = this.board[k][l];
        if (numberList[currentVal]) {
          isValid = false;
          break;
        } else {
          numberList[currentVal] = currentVal;
        }
      }
      numberList = {};
    }
    return isValid;
  }

  checkSquare() {
    let count = 0;
    let isValid = true;

    function checkSubMatrix(start, end) {
      let numberList = {};
      if (count === 3 || isValid === false) {
        return;
      }

      for (let row = start; row < end; row++) {
        for (let col = start; col < end; col++) {
          let currentVal = this.board[row][col];
          if (numberList[currentVal]) {
            isValid = false;
            break;
          } else {
            numberList[currentVal] = true;
          }
        }
      }
      ++count;
      checkSubMatrix(start + 3, end + 3);
    }
    checkSubMatrix(0, 3);

    return isValid;
  }

  runChecker() {
    let columnHeight = this.board.length;
    let rowLength = this.board[0].length;

    let check1 = checkRowOrColumn(columnHeight, rowLength);
    if (!check1) {
      return;
    }
    let check2 = checkRowOrColumn(rowLength, columnHeight);
    if (!check2) {
      return;
    }
    return this.checkSquare();
  }
}