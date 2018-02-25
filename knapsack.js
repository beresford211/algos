
function knapsack(items, maxWeight) {
  let matrix = [];
  let arr;
  let currentVal;
  let temp

  for (let k = 0; k <= items.length; k++) {
    arr = [];
    for (let m = 0; m <= maxWeight; m++) {
      arr[m] = 0;
    }
    matrix.push(arr);
  }
  console.log(items[0]);
  for (let item = 0; item < items.length; item++) {
    let currentVal = items[item];
    for (let w = 1; w <= maxWeight; w++) {
      if (w >= currentVal.w) {
        temp = currentVal.v + matrix[item][w - currentVal.w]
      } else {
        temp = 0;
      }

      matrix[item + 1][w] = Math.max(matrix[item][w], temp);
    }
  }
  console.log("Matrix", matrix);
  return matrix[matrix.length - 1][matrix[0].length - 1];
}

let items = [{ w: 1, v: 6 }, { w: 2, v: 10 }, { w: 3, v: 12 }]
let maxWeight = 5
console.log("Should return the result 22", knapsack(items, maxWeight)); // = 22
