let stepCombinations = (numberOfSteps) => {
  let storage = {};

  function breakDownNum(val) {
    if (val === 1 || val === 2) {
      return val;
    } else if (val < 1) {
      return 0;
    }

    if (storage[val]) {
      return storage[val];
    } else {
      storage[val] = breakDownNum(val - 2) + breakDownNum(val - 1);
    }
    return storage[val];
  };

  return breakDownNum(numberOfSteps);
};

stepCombinations(26);

