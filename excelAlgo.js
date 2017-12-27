/**
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
  For example:
    A -> 1
    B -> 2
    C -> 3
    Z -> 26
    AA -> 27
    AB -> 28
 */

/**
 * @param {string}
 * @return {number}
 */
var titleToNumber = function (string) {
  if (string === "") { return 0 }

  let hashMap = {};
  let abcs = ".ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let count = 0;

  for (let i = 1; i < abcs.length; i++) {
    hashMap[abcs[i]] = i;
  }

  for (let m = 0; m < string.length; m++) {
    let key = string[string.length - m - 1].toUpperCase();
    let multiple = Math.pow(26, m);
    let tests = (hashMap[key] * multiple);
    if (hashMap[key]) {
      count += tests;
    }
  }
  return count;
};