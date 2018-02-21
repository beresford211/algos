// TODO: This passes all of the test cases for Leetcode except one where they feed you a 9000 character string
// Next step is to implement KMP algorithim.

/**
 * @param {string} 
 * @return {string}
 */
var shortestPalindrome = function (str) {
  function isPalindrome(str) {
    if (str === str.split("").reverse().join("")) { return true }
  }

  if (str.length === 1) return str;
  if (isPalindrome(str)) return str;

  let p1 = 0;
  let p2 = p1 + 1;
  let newStr = "";
  let lastIndex;
  let prependStr = ""

  while (true) {
    if (p2 > str.length - 1) {
      break;
    }

    if (str[p2 + 1] !== str[p2] && isPalindrome(newStr) && newStr.length > 1) {
      lastIndex = p2;
      console.log("What happens?", lastIndex);
    }

    if (newStr === "") {
      newStr += str[p1];
      newStr += str[p2];
    } else {
      newStr += str[p2];
    }
    p2++;
  }

  for (let k = lastIndex || 1; k < str.length; k++) {
    prependStr = str[k] + prependStr;
  }
  str = prependStr + str;
  return str;

};