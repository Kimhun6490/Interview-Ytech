const { 
  generateGrid,
  generateNoPathGrid
} = require('./gridUtil')
const Graph = require("./graph")

//CASE 1: RANDOM GRID
const grid = generateGrid(5)
const graph = new Graph(grid)
const steps = graph.findShortestPath()
console.log(steps)

//CASE 2: GRID WITH NO PATH
const gridWithNoPath = generateNoPathGrid(5)
const graphNoPath = new Graph(gridWithNoPath)
const stepsNoPath = graphNoPath.findShortestPath()
console.log(stepsNoPath)
