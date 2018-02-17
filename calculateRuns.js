
let calculateRuns = (n) => {
  let cache = { "0": 1 };

  let runCalculator = (numberOfRuns) => {
    console.log("Number of Runs", numberOfRuns);

    if (numberOfRuns < 0) {
      return 0;
    }
    if (cache[numberOfRuns]) {
      return cache[numberOfRuns];
    }

    cache[numberOfRuns] = runCalculator(numberOfRuns - 1) + runCalculator(numberOfRuns - 2) + runCalculator(numberOfRuns - 4);
    return cache[numberOfRuns];
  }
  return runCalculator(n);
}

console.log("Expected 10, got :", calculateRuns(25));


// //Scoring options are 1, 2, 4
// let scoring_options_rec = function (n, result) {
//   if (n < 0) {
//     return 0;
//   }

//   if (result[n] > 0) {
//     return result[n];
//   }

//   result[n] = scoring_options_rec(n - 1, result) +
//     scoring_options_rec(n - 2, result) +
//     scoring_options_rec(n - 4, result);
//   return result[n];
// };

// let scoring_options = function (n) {
//   if (n <= 0) {
//     return 0;
//   }

//   let result = [];
//   for (let i = 0; i < n + 1; i++) {
//     result[i] = 0;
//   }

//   result[0] = 1;

//   scoring_options_rec(n, result);

//   return result[n];
// };

// let ss = scoring_options(25);
// console.log("What is SS", ss);