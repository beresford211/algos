function isMatch(text, pattern) {
  let p1 = 0;
  let p2 = 0;
  let returnVal = true;

  while (text[p1]) {
    if (pattern[p2] === '.') {
      // if optional
      if (pattern[p2 + 1] === "*") {
        p1++;
        p2 += 2;
      } else {
        p1++;
        p2++;
      }
    } else if (pattern[p2 + 1] === "*") {

      while (text[p1] === pattern[p2] || pattern[p2] === ".") {
        p1++;
      }
      p2 += 2;

    } else if (text[p1] === pattern[p2]) {
      p1++;
      p2++;

    } else {
      returnVal = false;
      break;
    }
  }
  return returnVal;
}

function testResults(text, pattern, expected, actual) {
  console.log("Text:", text, "Pattern:", pattern, "Expected:", expected, " Actual:", actual);
}

testResults("", "", true, isMatch("", ""));
testResults("aa", "a", false, isMatch("aa", "a"));
testResults("bb", "bb", true, isMatch("bb", "bb"));
testResults("", "a*", true, isMatch("", "a*"));
testResults("abbdbb", "ab*d", false, isMatch("abbdbb", "ab*d"));
testResults("aba", "a.a", true, isMatch("aba", "a.a"));
testResults("acd", "ab*c.", true, isMatch("acd", "ab*c."));
testResults("abaa", "a.*a*", true, isMatch("abaa", "a.*a*"));





