const cytoscape = require('cytoscape');
const nx = require('jsnetworkx');

class easyGraph {
   constructor() {
   }
   randomGraph(obj) {
      this.g = nx.gnpRandomGraph(obj.v, obj.p);
      if (obj.weightOnEdge == true) {
         for (let [u, v] of this.g.edges()) {
            let edge = this.g.edge.get(u).get(v);
            edge.weight = Math.random();
         }
      }
   }
   E(sourceId, targetId) {
      return this.g.edge.get(u).get(v);
   }
   V(sourceId) {
      if(sourceId == null){
         return this.g.nodes();
      }
      return this.g.node.get(sourceId);
   }
   Neighbor(sourceId) {
      return this.g.neighbors(sourceId);
   }
   draw(dom) {
      let eles = [];
      for (let id of this.g.nodes()) {
         eles.push({
            data: {
               id: id,
               selected: false, // whether the element is selected (default false)
               selectable: true, // whether the selection state is mutable (default true)
               locked: false, // when locked a node's position is immutable (default false)
               grabbable: true,
            }
         });
      }
      for (let pair of this.g.edges()) {
         eles.push({
            data:{
               id: pair.toString(),
               source: pair[0],
               target: pair[1],
            }
         })
      }

      this.cy = cytoscape({
         container: dom,
         elements : eles,
         layout: {
            name: 'grid'
          },  
          style: [
            {
              selector: 'node',
              style: {
                'content': 'data(id)'
              }
            }
          ]
      });
   }
}

module.exports = easyGraph; 