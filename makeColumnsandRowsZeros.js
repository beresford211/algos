/** 
 Make Columns and Rows Zeros
 Given a two dimensional array, if any element in it is zero make its whole row and column zero.
 
 Description
 Given a two dimensional array, if any element in it is zero make its whole row and column zero.For example, consider the below matrix.
 
 There are two zeros in the input matrix i.e.at position(2, 2) and(3, 4).Output of this should be a matrix in which 2nd and 3rd row becomes zero and 2nd and fourth columns become zeros.Below is the expected output matrix.
*/

let testData = [
  [5, 4, 3, 9],
  [2, 0, 7, 6],
  [1, 3, 4, 0],
  [9, 8, 3, 4]
]

// start to iterate through the rows 
// if you find a zero store the coordinates somewhere
// once you are done iterating through it

// start over and begin to change the zeros
function makeColumnsAndRowsZeros() {
  let storeArr = [];
  let matrixRow = testData.length;
  let matrixLength = testData[0].length;

  for (let k = 0; k < testData.length; k++) {
    for (let m = 0; m < testData[0].length; m++) {
      if (testData[k][m] == 0) {
        storeArr.push([k, m]);
      }
    }
  }

  while (storeArr.length > 0) {
    let storeVals = storeArr.pop();
    let [row, column] = storeVals;

    for (let k = 0; k < matrixLength; k++) {
      testData[row][k] = 0;
    }

    for (let m = 0; m < matrixRow; m++) {
      testData[m][column] = 0;
    }
  }

}
console.log('results', testData);