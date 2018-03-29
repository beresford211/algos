function addOne(arr) {
  let carryOver = 1;
  let newVal;
  let setVal;

  for (let k = arr.length - 1; k >= 0; k--) {
    if (arr[k] + carryOver > 9) {
      carryOver = 1;
      arr[k] = 0;
    } else {
      arr[k] += carryOver;
      carryOver = 0;
    }
  }
  if (carryOver) {
    arr.unshift(carryOver);
  }
  console.log("Arr", arr);
}

addOne([2, 9, 9, 9])