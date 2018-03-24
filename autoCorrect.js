/**
 
 You've been tasked with writing an autocorrect service for messages sent by your legal team. The messages which are sent to other lawyers need to be updated so that each message sent references the lawyer's client for clarity.To do this you need to replace all instances of "you" and it's misspellings with "your client".
 
 Write a function called autocorrect that takes a string and replaces all instances of "you", "youuu", or "u"(not case sensitive) with "your client"(always lower case).
 
 Return the resulting string.
 
 Here's the slightly tricky part: These are informal messages, so there are different forms of "you" and "u".
 
 For the purposes of this challenge, here's what you need to support:
 
 "youuuuu" with any number of u characters tacked onto the end
 "u" at the beginning, middle, or end of a string, but NOT part of a word
 "you" but NOT as part of another word like "young" or "Bayou"
 
 */


function autocorrect(input) {
  console.log("what is input?", input);
  let str = ""
  let okValues = {
    " ": " ",
    ".": ".",
    "!": "!",
    ",": ","
  }

  function checkIfU(p1) {
    let next = (input[p1 + 1] === " " || p1 + 1 > input.length - 1);
    let prev = (input[p1 - 1] === " " || p1 - 1 < 0);
    if (next && prev) {
      return true;
    }

    return false
  }

  function checkIfyou(p1) {
    let prev = input[p1 - 1] === undefined || okValues[input[p1 - 1]]

    if (!prev) {
      return;
    }

    let p2 = p1 + 2

    while (input[p2] === "u") {
      p2++;
    }

    if (p2 >= input.length || okValues[input[p2]]) {
      return p2;
    }
  }

  for (let i = 0; i < input.length; i++) {
    let isaY = input[i] === "Y" || input[i] === "y";
    if (input[i] === "u" && checkIfU(i)) {
      str += "your client"
      continue;
    } else if (isaY && input[i + 1] === "o" && input[i + 2] === "u" && checkIfyou(i)) {
      str += "your client";
      i = checkIfyou(i) - 1;
      continue;
    }
    str += input[i];
  }
  return str;
}