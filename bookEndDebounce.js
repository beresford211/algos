// def   tim   pood   donkey   gh   i   k
// - -   - -   -  -   -    -   --   -   -

// ^     ^
// 500ms  500ms

// let domNode.addEventListener("keydown", bookends((e)=>{
//   console.log("E.key", e.key);
//   return false;
// }), 500)

function boookends(callback, wait) {
  let inDebounceState = false;
  let timerID;
  let firstFunction = () => { setTimeout((e) => { callback(e) }, 0) };
  return function (e) {
    const wasFirstE;
    if (!inDebounceState) {
      firstFunction(e);
      inDebounceState = true;
      wasFirstE = inDebounceState;
    }
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      if (!wasFirstE) {
        callback(e);
      }
      inDebounceState = false;
    }, wait);
  }
}
