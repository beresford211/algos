/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let dict = {};
  let arr = [];

  let helperFunc = function (arr, target, results) {
    for (let i = 0; i < arr.length; i++) {
      if (target - arr[i] === 0) {
        results = results + "," + arr[i];
        if (!dict[results]) {
          dict[results] = true;
          let k = results.split(",").map((x) => {
            if (x !== "") {
              return parseInt(x);
            }
          });
          arr.push(k);
        }
      } else if (target - arr[i] > 0) {
        let s = target
        helperFunc(arr.slice(i), s -= arr[i], results + "," + arr[i]);
      }
    }
  }
  helperFunc(candidates, target, "");
  return JSON.stringify(dict);
};