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


function subArrSearch(sortedArr, searchingFor) {
  let returnVal = null;
  let sp1 = 0;
  let sp2 = sortedArr.length - 1;
  let midPoint;

  while (sp1 <= sp2) {
    midPoint = sp1 + Math.floor((sp2 - sp1) / 2);

    if (searchingFor === sortedArr[midPoint]) {
      returnVal = sortedArr[midPoint];
      break;
    }

    if (searchingFor < sortedArr[midPoint]) {
      sp2 = midPoint - 1;
    } else {
      sp1 = midPoint + 1;
    }

    console.log("sp1", sp1, "sp2", sp2, midPoint)
  }

  return returnVal;
}

let threeSumSolution2 = function (arr, target) {
  let p1 = 0;
  let p2 = arr.length - 1;
  let p3;
  let resultCombo = [];

  var sortedArr = arr.sort((a, b) => { return a - b });

  for (let p1 = 0; p1 < sortedArr.length - 2; p1++) {
    for (let p2 = p1 + 1; p2 < sortedArr.length - 1; p2++) {
      p3 = subArrSearch(sortedArr, target - sortedArr[p1] - sortedArr[p2]);
      if (p3 && p3 !== p1 && p3 !== p2) {
        resultCombo = [sortedArr[p1], sortedArr[p2], sortedArr[p3]];
        break;
      }
    }
  }
  return resultCombo;
}

let result = threeSumSolution2([1, 9, 7, 25, 18, 52, 100], 26);
console.log("result", result);