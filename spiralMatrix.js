let spiralMatrix = (matrix) => {
  let rows = matrix.length - 1;
  let columns = matrix[0].length - 1;

  let t = 0;
  let l = 0;
  let r = columns;
  let b = rows;
  let finArr = [];

  while (l <= r && t <= b) {

    for (let k = l; k <= r; k++) {
      let item = matrix[l][k];
      finArr.push(item);
    }
    ++t;

    for (let i = t; i <= b; i++) {
      let item = matrix[i][r];
      finArr.push(item)
    }
    --r;

    for (let m = r; m >= l; m--) {
      let item = matrix[b][m];
      finArr.push(item);
    }
    --b;

    for (let n = b; n >= t; n--) {
      let item = matrix[n][l];
      finArr.push(item);
    }
    ++l
  }
  return finArr;
}

spiralMatrix([["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]);