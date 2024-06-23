function generateGrid(size, obstacleProbability = 0.3) {
  const grid = [];
  for (let row = 0; row < size; row++) {
    const newRow = [];
    for (let col = 0; col < size; col++) {
      // Randomly assign 0 or 1 based on obstacle probability
      const random = Math.random()
      newRow.push(random < obstacleProbability ? 0 : 1);
    }
    grid.push(newRow);
  }
  // Ensure start and end points are traversable
  if (grid[0][0] === 0) grid[0][0] = 1;
  if (grid[size - 1][size - 1] === 0) grid[size - 1][size - 1] = 1;

  //console.log(grid)
  return grid;
}

function generateNoPathGrid(size) {
  const grid = Array.from({ length: size }, () => Array(size).fill(0));

  //console.log(grid)
  return grid;
}


module.exports = {
  generateGrid,
  generateNoPathGrid
};