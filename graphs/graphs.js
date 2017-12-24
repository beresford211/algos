/*

*/
class Graph {
  constructor() {
    this.vertices = [];
    this.adjacenyList = {};
  }

  addVertex() {

  }

  removeEdge() {

  }

}

class Graph2 {
  constructor(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];

    for (let i = 0; i < this.vertices; i++) {
      this.adj[i] = [];
      this.adj[i].push("");
    }

    this.addEdge = addEdge;
    this.toString = toString;
  }

  addEdge(n1, n2) {
    this.adj[n1].push(n2);
    this.adj[n2].push(n1);
    this.edges++;
  }

  removeEdge(n1, n2) {

  }

  addVertex(val) {
    this.adj[this.adj.length] = [];
  }


  showGraph() {
    let str = "";
    for (let i = 0; i < this.vertices; i++) {
      str += i + " -> ";
      for (let k = 0; k < this.vertices; k++) {
        if (this.adj[i][j] != undefined) {
          str += this.adj[i][j] + ' ';
        }
      }
      console.log(str);
      str = "";
    }
  }
}

class Vertices {
  constructor(data) {
    this.data = data;
    this.visited = false;
  }
}
