/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum = function (candidates, target) {
  let hashMap = {};
  let results = [];
  let combinationPermuation = (candidates, searchVal, valsUsed) => {

    if (searchVal === 0) {
      let createKey = valsUsed.join("");
      if (!hashMap[createKey]) {
        hashMap[createKey] = true;
        results.push(valsUsed);
      }
      return;
    }
    let updateVal;

    for (let i = 0; i < candidates.length; i++) {
      if (searchVal - candidates[i] >= 0) {
        updateVal = searchVal - candidates[i];
        valsUsed.push(candidates[i]);
        combinationPermuation(candidates.slice(i), updateVal, valsUsed.slice(0));
        valsUsed.pop();
      }
    }
  }
  combinationPermuation(candidates, target, []);
  return results;
};