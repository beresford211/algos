// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.Please note that your returned answers(both index1 and index2) are not zero - based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.
//   Input: numbers = { 2, 7, 11, 15}, target = 9
// Output: index1 = 1, index2 = 2

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

let testTwoSum = twoSum([9, 2, 4, 69295, 252, 3, 1, 41, 45, 2, 49], 45);
console.log("Should return numerical values for twoSumMeth:", testTwoSum);
