/*
Given an array of integers and a value, determine if there are any two integers in the array which sum equal to the given value.

Consider this array and target sums.
*/

// Two Sum

let twoSum = (arr, val) => {
  let storage = {};

  for (let i = 0; i < arr.length; i++) {
    let remains;
    if (!storage[arr[i]]) {
      storage[arr[i]] = arr[i];
    }
    remains = val - arr[i];
    if (storage[remains]) {
      return [arr[i], remains];
    }
  }
  return [];
}
let testTwoSum = twoSum([9, 2, 4, 69295, 252, 3, 1, 41, 45, 2, 49], 45);
console.log("Should return numerical values twoSumMeth2:", testTwoSum);
