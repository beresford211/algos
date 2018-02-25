// Dynamic Programming Fibonacci Numbers

let fibonacciNumbers = (n) => {
  let cache = {};

  let calculateNumbers = (n) => {
    if (n < 3) {
      return 1;
    }
    if (!cache[n]) {
      cache[n] = calculateNumbers(n - 1) + calculateNumbers(n - 2);
    }
    return cache[n];
  }
  return calculateNumbers(n - 1) + calculateNumbers(n - 2);
}

console.log("Expect input 6 to be the value of 8 :", fibonacciNumbers(6));
console.log("Expect input 12 to be the value of 144 :", fibonacciNumbers(12));
console.log("Expect input 15 to be the value of 610 :", fibonacciNumbers(15));
console.log("Expect input 20 to be the value of 67657 :", fibonacciNumbers(20));