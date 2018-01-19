import pieces from './pieces.js'

class tetrisGame {

  constructor(board) {
    this.board = board;
    this.pieces;
    this.xyNow;
  }

  makeBoard() {
    this.board = Array(22).fill(Array(10).fill(0));
  }

  startGame() {
    this.makeBoard();
    this.pieces = pieces;
    this.currentPiece = this.pickRandomPiece();
    this.dropPiece();
  }

  dropPiece() {
    // piece needs to be drawn
    // piece needs to begin to move down the board
    // setInterval(() => {
    this.checkBoard
    // }, 1000);
  }

  checkBoard() {
    let pieceBottom = this.currentPiece[this.currentPiece.length - 1];

    for (let k = 0; k < pieceBottom.length; k++) {
      if (pieceBottom[k] === 1) {
        if (this.board[this.xyNow[0] + 1][this.xyNow[1] + k] === 1) {
          // need to set piece in current location
        } else {
          // you can advance the current piece
        }
      }

      // need to look ahead and see if that piece's 
      // position will collide with another piece
    }
  }

  movePieceDown() {
    this.xyNow = this.xyNow[0]++;
  }

  movePieceLeft() {
    //if left
    if (this.xyNow[1] - 1 >= 0 && this.board[this.xyNow[0][this.xyNow[1] - 1]] !== 1) {
      this.xyNow[1]--;
    }
  }

  checkRow() {

  }

  movePieceRight() {
    //if left
    let rightBound = this.xyNow[0].length - 1;
    // let rightWithPiece = this.xyNow[1] + this.currentPiece[] 1
    if (this.xyNow[1] + 1 <= rightBound && this.board[this.xyNow[0][this.xyNow[1] + 1]] !== 1) {
      this.xyNow[1]++;
    }
  }


  gameSpeed() {
    setInterval(() => {

    }, 1000);
  }

  getPieces() {
    return Object.keys(pieces)
  }

  pickRandomPiece() {
    let keyArr = Object.keys(pieces);
    let piece = keyArr[Math.floor(Math.random() * this.pieces.length)];
    return this.pieces[piece]();
  }
}

let game = new tetrisGame();

console.log(game.board);

