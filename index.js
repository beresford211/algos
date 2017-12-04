let palindrome = (word) => {
  let stack = [];

  for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);
  }

  for (let k = 0; k < word.length; k++) {
    if (word[i] !== stack.pop()) {
      return false;
    }
  }

  return true;
}