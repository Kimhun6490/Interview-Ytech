const assert = require('assert')
const Graph = require('../src/graph')
const { 
  generateGrid,
  generateNoPathGrid
 } = require('../src/gridUtil')

describe('Breadth-First Search', function () {
  describe('Create grid manaully', function () {
    it('shortest path must be 6 in a small grid', () => {
      const grid = [
        [1, 1, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 0, 1],
        [1, 1, 1, 1]
      ];
      const graph = new Graph(grid);
      const steps = graph.findShortestPath()
      assert.strictEqual(steps, 6);
    });

    it('should not find shortest path in a small grid', () => {
      const grid = [
        [1, 1, 1, 1],
        [0, 1, 1, 1],
        [0, 1, 0, 0],
        [1, 1, 0, 1]
      ];
      const graph = new Graph(grid);
      const steps = graph.findShortestPath()
      assert.strictEqual(steps, -1);
    });
  }) 


  describe('Create grid using generator', function () {
    it('[obstacleProbability = 100%] should not find shortest path in a large grid', () => {
      const grid = generateNoPathGrid(1000)
      const graph = new Graph(grid);
      const steps = graph.findShortestPath()
      assert.strictEqual(steps, -1);
    });

    it('[obstacleProbability = 0%] should find shortest path in a large grid', () => {
      const grid = generateGrid(1000, 0)
      const graph = new Graph(grid);
      const steps = graph.findShortestPath()
      assert(steps > 0);
    });
  })  
})
