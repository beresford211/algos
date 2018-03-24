// Key: 1, Low = 0 and High = 0
// Key: 2, Low = 1 and High = 1
// Key: 5, Low = 2 and High = 9
// key: 20, Low = 10 and High = 10

// Brute Force Solution

function findHighLowIndex(arr, key) {
  let high;
  let low;

  for (let k = 0; k < arr.length; k++) {
    if (arr[k] === key && !low) {
      low = k;
      high = k;
    } else if (arr[k] === key && high) {
      high = k;
    } else if (arr[k] !== key && high) {
      break;
    }
  }
  return [low, high];
}

let testArray = [1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 20];
console.log("Returns: ", findHighLowIndex(testArray, 1), "\nShould be: Key: 1, Low = 0 and High = 0")
console.log("Returns: ", findHighLowIndex(testArray, 2), "\nShould be: Key: 2, Low = 1 and High = 1")
console.log("Returns: ", findHighLowIndex(testArray, 5), "\nShould be: Key: 5, Low = 2 and High = 9")
console.log("Returns: ", findHighLowIndex(testArray, 20), "\nShould be: key: 20, Low = 10 and High = 10")
// Key: 5, Low = 2 and High = 9
// key: 20, Low = 10 and High = 10

/**
function findHighLowIndex(arr, key) {
  let high;
  let low;
  let end = arr.length - 1;
  let start = 0;

  while (true) {
    let midPoint = Math.floor(end - start / 2);

    if (arr[midPoint] === key) {
      high = midPoint;
      low = midPoint;
      break;
    } else if (arr[midPoint] < key) {
      start = midPoint;
    } else if (arr[midPoint] > key) {
      end = midPoint;
    }
  }

  while (true) {

  }

}

* /