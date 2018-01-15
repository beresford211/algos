// knapsack problem
let items = [
  {
    name: "pickle",
    cost: 1500,
    lbs: 1
  },
  {
    name: "stero",
    cost: 2000,
    lbs: 3
  },
  {
    name: "laptop",
    cost: 3000,
    lbs: 4
  },
]

let knapsackProblem = (items, maxLbs) => {
  let itemMax = []
  for (let p = 0; p < items.length + 1; p++) {
    itemMax.push(new Array(maxLbs + 1).fill(0));
  }
  let currLbs;
  let currItem;
  let lastItem;

  for (let i = 1; i <= items.length; i++) {

    for (let j = 1; j <= maxLbs; j++) {

      currLbs = items[i - 1].lbs;
      lastItem = itemMax[i - 1][j];
      currItem = currLbs + (itemMax[i - 1][j - currLbs] || 0);
      itemMax[i][j] = Math.max(currItem, lastItem);
    }
  }
  return itemMax[items.length - 1][maxLbs];
}

console.log("Solution: ", knapsackProblem(items, 4));