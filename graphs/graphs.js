/*

*/
class Graph {
  constructor(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    this.marked = [];
    for (let i = 0; i < this.vertices; ++i) {
      this.marked[i] = false;
      this.adj[i] = [];
      this.adj[i].push("");
    }
  }

  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }

  showGraph() {
    let str;
    for (let i = 0; i < this.vertices; i++) {
      str = `${i} -> `;
      for (let j = 0; j < this.vertices; ++j) {
        if (this.adj[i][j] != undefined) {
          str += `${this.adj[i][j]} `;
        }
      }
      console.log("Node: ", str);
    }
  }
  dfs(node) {
    this.marked[node] = true;
    if (this.adj[node]) {
      console.log("Visited vertex: ", node);
    }

    for (let k = 0; k < this.adj[node]; k++) {
      if (!this.marked[this.adj[node][k]]) {
        this.dfs(k);
      }
    }
  }

  bfs(node) {
    let queue = [];
    queue.push(this.adj[node]);
    this.marked[node] = true;
    let currNode;
    while (queue.length > 0) {
      currNode = queue.shift();
      if (this.adj[currNode]) {
        this.marked[currNode] = true;
        console.log("Visited vertex: ", currNode);
        for (let k = 0; k < this.adj.length; k++) {
          queue.push(this.adj[currNode][k]);
        }
      }
    }
  }

}

let g1 = new Graph(5);

g1.addEdge(0, 1);
g1.addEdge(0, 2);
g1.addEdge(1, 3);
g1.addEdge(2, 4);
g1.showGraph();






// let exBFGSraph = [
//   [0, 1, 1, 1, 0],
//   [0, 0, 1, 0, 0],
//   [1, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0],
//   [0, 1, 0, 0, 0]
// ];

// class Vertices {
//   constructor(data) {
//     this.data = data;
//     this.visited = false;
//   }
// }
