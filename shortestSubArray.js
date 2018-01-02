/*
Given a set of integers, e.g. {1,3,2}, and an array of random integers, e.g. 
Find the shortest continuous subarray that contains all of the values from the set.
Result: [1, 2, 2, 0, 3]
*/

function shortestSubArray(numSet, arr) {
  let setCopy = Object.assign({}, numSet);
  // let setLength = Object.keys(setCopy).length;
  // let setLengthCopy = setLength;
  let currentBest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (setCopy[arr[i]]) {
      delete setCopy[arr[k]]
      for (let k = i + 1; k < arr.length; k++) {
        if (setCopy[arr[k]]) {
          delete setCopy[arr[k]]
          if (Object.keys(setCopy).length === 0) {
            let newLength = arr.slice(i, k);
            if (newLength.length < currentBest.length) {
              currentBest = newLength.length;
            }
          }
        }
      }
      setCopy = Object.assign({}, numSet);
    }
  }
  return currentBest;
}

