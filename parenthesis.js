function parenthesisCount(str) {
  let stack = [];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push("(");
      count++;
    } else if (str[i] === ")") {
      if (count === 0) {
        return;
      } else {
        stack.pop();
        count--;
      }
    }
  }
  return stack.length + count;
}


function bracketValidator(str) {
  if (str.length % 2 !== 0) {
    return;
  }
  let openers = {
    "{": "}",
    "(": ")",
    "[": "]"
  };
  let closers = {
    "}": "{",
    ")": "(",
    "]": "["
  }

  let stack = [];

  for (let k = 0; k < str.length; k++) {
    if (closers[str[k]]) {
      if (str[k] !== stack.pop()) {
        return;
      }
    } else if (openers[str[k]]) {
      stack.push(openers[str[k]]);
    }
  }
  return true;
}

