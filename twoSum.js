/*
Given an array of integers and a value, determine if there are any two integers in the array which sum equal to the given value.

Consider this array and target sums.
*/

// Two Sum

let twoSum = (arr, target) => {
  let sortedArr = arr.sort((a, b) => { return a - b });
  let p1 = 0;
  let p2 = sortedArr.length - 1;
  let combined;
  let finalResult = [];

  console.log("sorted", sortedArr)
  while (p1 < p2) {
    combined = sortedArr[p1] + sortedArr[p2];
    if (combined === target) {
      finalResult = [sortedArr[p1], sortedArr[p2]];
      break;
    }

    if (combined > target) {
      p2--;
    } else if (combined < target) {
      p1++;
    }
  }

  return finalResult;
}


let twoSumMeth2 = (arr, val) => {
  let storage = {};
  let finalResult = [];

  for (let i = 0; i < arr.length; i++) {
    storage[val - arr[i]] = arr[i]
  }

  for (let k = 0; k < arr.length; k++) {
    if (storage[arr[k]]) {
      finalResult = [storage[arr[k]], arr[k]];
      break;
    }
  }
  return finalResult;
}

let testTwoSum = twoSum([9, 2, 4, 69295, 252, 3, 1, 41, 45, 2, 49], 45);
console.log("Should return numerical values for twoSumMeth:", testTwoSum);

let testTwoSumMeth2 = twoSumMeth2([9, 2, 4, 69295, 252, 3, 1, 41, 45, 2, 49], 45);
console.log("Should return numerical values twoSumMeth2:", testTwoSumMeth2);