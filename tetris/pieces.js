module.exports = {
  "leftl": leftl,
  "rightl": rightl,
  "stairr": stairr,
  "stairl": stairl,
  "halfPlus": halfPlus,
  "box": box,
  "line": line
}

let halfPlus = () => {
  return [
    [0, 1, 0],
    [1, 1, 1]
  ]
}

let box = () => {
  return [
    [1, 1],
    [1, 1]
  ]
}

let line = () => {
  return [
    [1, 1, 1, 1]
  ]
}

let rightl = () => {
  return [
    [0, 0, 1],
    [1, 1, 1]
  ]
}

let leftl = () => {
  return [
    [1, 0, 0],
    [1, 1, 1]
  ]
}

let stairl = () => {
  return [
    [0, 1, 1],
    [1, 1, 0]
  ]
}

let stairr = () => {
  return [
    [1, 1, 0],
    [0, 1, 1]
  ]
}


[
  [1, 1, 0],
  [0, 1, 1]
]

let turnPiece = (piece, direction) => {
  let direction = direction === 1 ? "cc" : "c";
  let start = piece.length - 1;
  let newPiece = []
  let arr;

  while (start >= 0) {
    arr = []
    for (let m = 0; m < piece.length; m++) {
      if (direction === "c") {
        arr.push(piece[start][m]);
      } else if (direction === "cc") {
        arr.unshift(piece[start][m]);
      }
    }
    start--;
    newPiece.push(arr);
  }
  return newPiece;
}