/**
 * Given root of a binary tree, display node values at each level. Node values for all levels should be displayed on separate lines. Lets take a look at the below binary tree.
 */

function levelOrderTraversal(root) {
  if (!root) {
    return null;
  }

  let stack = [[root]];
  let level = 1;

  while (stack.length > 0) {
    let nextSubStack = [];
    let levelSubStack = stack.pop();
    let printLevelValues = "" += level + " ";
    let currentNode;
    for (let k = 0; k < levelSubStack.length; k++) {
      currentNode = levelSubStack[k];
      printLevelValues += currentNode.value;
      if (currentNode.left) {
        nextSubStack.push(currentNode.left);
      }
      if (currentNode.right) {
        nextSubStack.push(currentNode.right);
      }
    }
    if (nextSubStack.length > 0) {
      stack.push(nextSubStack);
    }
    level++;
    console.log(printLevelValues + '\n');
  }
}