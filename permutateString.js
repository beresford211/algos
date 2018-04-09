function permutateString(str) {
  let hash = {};

  function permutations(permutation, lettersLeft) {

    if (permutation.length === str.length) {
      if (hash[permutation]) {
        return;
      }
      hash[permutation] = permutation;
    } else if (permutation.length > str.length) {
      return;
    }

    for (let i = 0; i < lettersLeft.length; i++) {
      let letter = lettersLeft[i];
      permutations(permutation + letter, lettersLeft.slice(0, i) + lettersLeft.slice(i + 1))
    }
  }

  permutations("", str);
  return hash;
}

console.log(permutateString("bad"));
