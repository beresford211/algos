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



// Dynamic Programming Coin Change
/**
I think when looking at this problem it is easy to run the code in the repl and tell yourself you understand what is going on but really why?
I'm going to break things down line by line and explain them.

~ Input ~
  - "amount" - A total value we are trying to make
  - coins - A list of coins in array form

Step 1.
* let coinCombos = []
  - For this problem you could actually use a hash but you would be responsible for
  indexes and with an array it is easier to let the dataStructure handle in the index 
  themselves.

Step 2.
* for (let i = 0; i <= sum; i++) {
    coinCombos = 0;
  }
  - We need to set up the array for the values 0 <-> Sum
  - We don't know what coins we will receive so lets initialize everything at 0
  ~ Why are we filling up the array to the sum? ~
    - If we create an array of size X, we are trying to figure out how many ways we create EACH value with the coins given
  
Step 3.
* coinCombos[0] = 1
  - I think this part is actually tricker than people think about
    - Why does 0 need to be 1?
    - In some explanation you will read there is only 1 way to make zero with 0.
    - I think it is more interesting if you look at how it is used.
      - Will talk about it further in point (a.1)

    Example. lets say we have we have the coin 5
    when we start to iterate through the array we know we will have to start at index 5.

Step 4.
* for (let index = 0; index < coins.length; index++) {
}
  - Here we want to iterate through our coins and calculate all the possible ways we can make them.


Step 5.
* for (let x = coins[index]; x <= sum; index++) {
}
  - In this we are iterating through the array until we reach the last value in the array, which is the same index as the "amount"
  - Also note we are starting to iterate at the coin's value

Step 6.
* coinCombos[x] += coinCombos[x - coins[index]];
  - In this we are accessing the current array index / value
    - We are saying add to this value whatever the difference is between this value
    and the coin.  index 10 - 6, means we need to access index 4 and add all the ways you can make 4.


By the end of this I realized my explanation kind of sucks.
*/





function coinChangeDP(coins, sum) {
  let coinCombos = [];

  for (let i = 0; i <= sum; i++) {
    coinCombos = 0;
  }
  coinCombos[0] = 1;

  for (let index = 0; index < coins.length; index++) {
    for (let x = coins[index]; x <= sum; x++) {
      coinCombos[x] += coinCombos[x - coins[index]];
    }
  }

  return coinCombos[sum];
}



