class Graph {
  constructor(grid) {
    this.grid = grid
    this.rows = grid.length
    this.cols = grid[0].length
    this.directions = [
      [0, 1], // Right
      [1, 0], // Down
      [0, -1], // Left
      [-1, 0], // Up
    ]
  }

  // Method to check if a cell is within the grid bounds and traversable
  isValid(x, y) {
    const isNonNegative = x >= 0 && y >= 0
    const isWithinGridBounds = x < this.rows && y < this.cols
    if(!isNonNegative || !isWithinGridBounds) return false
    const isPassable = this.grid[x][y] === 1
    return isPassable
  }

  // Method to find the shortest path using BFS
  findShortestPath() {
    const isObstacle =
      this.grid[0][0] === 0 || this.grid[this.rows - 1][this.cols - 1] === 0
    if (isObstacle) return -1

    const queue = [[0, 0, 0]] // [x, y, steps]
    const visited = new Set(['0,0'])

    while (queue.length > 0) {
      // console.log("current queue: ")
      // console.log(queue)
      // console.log("current visited: ")
      // console.log(visited)
      // console.log("--------")
      const [x, y, steps] = queue.shift()

      // Return current steps if it's final position
      const isFinalPosition = x === this.rows - 1 && y === this.cols - 1
      if (isFinalPosition) return steps

      for (const [dx, dy] of this.directions) {
        const newX = x + dx
        const newY = y + dy

        // If it's valid path, and haven't visited
        const shouldAddQueue = this.isValid(newX, newY) && !visited.has(`${newX},${newY}`)

        if (shouldAddQueue) {
          queue.push([newX, newY, steps + 1])
          visited.add(`${newX},${newY}`)
        }
      }
    }

    return -1 // Return -1 if no path is found
  }
}

module.exports = Graph