// Given coins denominations and total amount, find out the number of ways to make the change.
// For example, we have coin denominations 1, 2 and 5 and the total amount is 7. We can make its change in the following six ways.


// Denominations 1, 2, 5;
// Amount;


// Recursively
let coinCombo = (coins, target) => {
  let combinations = {};

  let findCoins = (i, valLeft, combo) => {
    if (valLeft - coins[i] >= 0) {
      combo.push(coins[i]);
      findCoins(i, valLeft - coins[i], combo);
      combo.pop();
    } else if (valLeft === 0) {
      if (!combinations[combo.join("")]) {
        // Create a copy of the array if we want to return all the possible combinations
        // We need to create a copy otherwise it will just have a pointer to the array
        // eventually the array will be empty
        combinations[combo.join("")] = combo.slice();
      }
      return;
    } else if (valLeft - coins[i] < 0) {
      return;
    }

    for (let k = i + 1; k < coins.length; k++) {
      findCoins(k, valLeft, combo);
    }
  };
  findCoins(0, 7, []);

  console.log("Print the count of possible ways", Object.keys(combinations).length);
  console.log("Print all of the possible ways", combinations);

};

coinCombo([1, 2, 5], 7);