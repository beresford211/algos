// smallest common number

// you could iterate through all the arrays
// add the values to a hashMap

// if the count in the hashMap is three
// set that value to be the min value
// if another count in the hashMap is three set that value to be the min
// once you are doing iterating you would have the min value


// what is another way to handle this?
// have 3 pointers
// the starting point for the pointers
// has to be the largest index 0

function smallestCommonNumber(arr1, arr2, arr3) {
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p1Val;
  let p2Val;
  let p3Val;
  let smallestNum = null;


  while (p3 < arr3.length || p2 < arr2.length || p1 < arr1.length) {
    p1Val = arr1[p1];
    p2Val = arr2[p2];
    p3Val = arr3[p3];
    if (p1Val === p2Val && p2Val === p3Val) {
      smallestNum = p1Val;
      break;
    }

    if (p1Val <= p2Val && p1Val <= p3Val) {
      ++p1;
    } else if (p2Val <= p1Val && p2Val <= p3Val) {
      ++p2;
    } else if (p3Val <= p1Val && p3Val <= p2Val) {
      ++p3;
    }
  }
  return smallestNum;
}

let isAlgoCorrect = smallestCommonNumber([6, 7, 10, 25, 30, 63, 64], [-1, 4, 5, 6, 7, 8, 50], [1, 6, 10, 14]);
console.log("Expected: 6, Result:", isAlgoCorrect);

