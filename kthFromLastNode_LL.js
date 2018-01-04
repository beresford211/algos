function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

let kthToLastNode = (k, head) => {
  let arr = new Array(k).fill();
  let node = head;

  while (node) {
    arr.shift();
    arr.push(node);
    node = node.next;
  }
  return arr.shift().value;
}

// let kthToLastNodeV2 = (k, head) => {
//   let arr = new Array(k).fill();
//   let node = head;
//   let count = k;

//   while (node) {
//     if (count === 0) {

//     }
//     node = node.next;
//   }
//   return arr.shift().value;
// }

console.log(kthToLastNode(2, a));
// console.log(kthToLastNodeV2(2, a));

