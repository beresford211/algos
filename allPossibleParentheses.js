function allPossibleParentheses(number) {
  let results = [];

  function calculateParens(str, left, right) {

    if (left === right && left === number) {
      results.push(str);
      return;
    }

    if (right > left || left > number) {
      return;
    }

    calculateParens(str + "}", left, right + 1);

    calculateParens(str + "{", left + 1, right);

  }
  calculateParens("", 0, 0);
  console.log(results);
}

allPossibleParentheses(3);