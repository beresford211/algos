// let threeSum = function (arr, target) {
//   let maxVal = -Infinity;
//   let maxVal2 = -Infinity;
//   let negVal = Infinity;
//   let negVal2 = Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxVal2) {
//       if (arr[i] > maxVal) {
//         maxVal = arr[i];
//       } else {
//         maxVal2 = arr[i];
//       }
//     } else if (arr[i] < negVal2) {
//       if (arr[i] < negVal) {
//         negVal = arr[i];
//       } else {
//         negVal2 = arr[i];
//       }
//     }
//   }
// }


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

