/**
 * Remove duplicates from a string
 * @param {string} str 
 */

function removeDuplicates(str) {
  let hash = {};
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (!hash[str][i]) {
      hash[str[i]] = true;
      word += str[i];
    }
  }

  return word;
}