function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Cheese");
var e = new LinkedListNode("Cheese");
var f = new LinkedListNode("Devil's Food");
var g = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

let removeDuplicates = (node) => {
  let valStorage = {};
  let prev;

  while (node) {
    if (valStorage[node.val]) {
      prev.next = node.next;
      node.next = null;
      node = prev.next;
    } else {
      valStorage[node.val] = node.val;
      prev = node;
      node = node.next;
    }
  }
}