# easy-graph

A graph/network library that has easy-to-use API to generate, manipulate and visualize graph! 

- Why I wrap another library (`Cytoscape.js` in this case)
  - I dont like their APIs, I prefer networkX and graphStream's API
  - Dependency Inversion Principle, High level modules should not depend upon low-level modules, both should depend upon abstractions. Since abstraction changed less than implementing details.
  - With abstraction, if `Cytoscape.js` updates, I only need to change one copy of code, that is the `easy-graph` wrapper.

## Quick Start

### Show me the code [Dijkstra Shortest Path]

- ```javascript
  //generate a random graph, by default node has integer ID from 0
  const eg = require('easy-graph')
  const G = eg.randomGraph({v:30, e:20, weightOnEdge: true});

  const dist,prev = Array(30).fill(-Infinity), Array(30).fill(null)
  const [source,target] = [0,29]
  dist[source] = 0
  //operations on nodes and edges
  const heap = new PriorityQueue(G.V(),dist)
  while(!heap.empty()){
      let u = heap.extractMin()
      for ( v of G.Neighbor(u) ){ 
          let alt = dist[u] + G.E(u,v).weight
          if ( dist[v] > alt ) {
              dist[v] = alt
              prev[v] = u
              heap.decreaseKey(v,alt)
          }
      }
  }
  let t = target, path = [t]
  while(prev[t]){
      t = prev[t]
      path.push(t)
  }
  console.log( dist[target], path.reverse() )

  ```

### Installation

- ​

### API Documentation

- ​