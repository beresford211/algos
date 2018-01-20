
// Brute Force Solution
let moveZerosToLeft = (arr) => {
  for (let k = arr.length - 1; k >= 0; k--) {
    if (arr[k] === 0) {
      let n = k;
      while (n > 0) {
        let temp = arr[n - 1];
        arr[n - 1] = arr[n];
        arr[n] = temp;
        n--;
      }
    }
  }
  return arr;
}
console.log(moveZerosToLeft([0, 9, 4, 0, 2, 0]));