function parenthesisCount(str) {
  let stack = [];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push("(");
      count++;
    } else if (str[i] === ")") {
      if (stack.length > 0) {
        stack.pop();
        count--;
      }
    }
  }
  return stack.length + count;
}