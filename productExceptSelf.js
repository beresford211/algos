/**
 * @param {number[]} nums
 * @return {number[]}
 */
let productExceptSelf = function (nums) {
  let outPutArr = new Array(nums.length).fill(1);

  let p1 = 1;
  let p2 = 1;
  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1) {
      outPutArr[i] = p1;
    } else {
      outPutArr[i] *= p1;
      p1 *= nums[i];
    }

    if ((nums.length - 1 - i) === 0) {
      outPutArr[nums.length - 1 - i] = p2;
    } else {
      outPutArr[nums.length - 1 - i] *= p2;
      p2 *= nums[nums.length - 1 - i];
    }
  }
  return outPutArr;
};