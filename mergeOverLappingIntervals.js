function mergeOverLappingIntervals(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else if (arr.length < 1) {
    return [];
  }

  let newTimeStamps = [];
  let lastTimeStamp = arr[0];
  let currentTimeStamp;

  for (let k = 1; k < arr.length; k++) {
    currentTimeStamp = arr[k];
    if (lastTimeStamp[1] > currentTimeStamp[0]) {
      if (lastTimeStamp[1] < currentTimeStamp[1]) {
        lastTimeStamp[1] = currentTimeStamp[1];
      }
    } else if (lastTimeStamp[1] < currentTimeStamp[0]) {
      newTimeStamps.push(lastTimeStamp);
      lastTimeStamp = currentTimeStamp;
    }
  }
  newTimeStamps.push(lastTimeStamp);

  return newTimeStamps;
}

console.log(mergeOverLappingIntervals([[1, 5], [3, 7], [4, 6], [6, 8], [10, 12], [11, 15]]), "Should equal: [ [ 1, 8 ] ,[ 10 , 15 ] ]");