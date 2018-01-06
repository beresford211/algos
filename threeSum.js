// Brute Force
// time complexity is n^2;
// space complexity is n^2;

let threeSum = (arr, target) => {
  let storage = {};
  let valSum;

  for (let i = 0; i < arr.length; i++) {
    for (let m = i + 1; m < arr.length; m++) {
      valSum = arr[i] + arr[m];
      storage[target - valSum] = [i, m];
    }
  }

  for (let p = 0; p < arr.length; p++) {
    if (storage[arr[p]]) {
      return [arr[p], storage[arr[p]][0], storage[arr[p]][1]]
    }
  }
  return 0;
}

