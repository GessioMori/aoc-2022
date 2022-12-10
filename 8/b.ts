//const input = await Deno.readTextFile("./example.txt");
const input = await Deno.readTextFile("./input.txt");
const lines = input.split("\n");

const grid = lines.map((line) => line.split("").map((str) => Number(str)));

const numOfLines = grid.length;
const numOfCols = grid[0].length;

let maxScenicScore = 0;

for (let i = 1; i < numOfLines - 1; i++) {
  for (let j = 1; j < numOfCols - 1; j++) {
    const visibleTrees = {
      up: 0,
      down: 0,
      left: 0,
      right: 0,
    };

    // LEFT
    for (let l = j - 1; l >= 0; l--) {
      visibleTrees.left++;
      if (grid[i][l] >= grid[i][j]) {
        break;
      }
    }
    // RIGHT
    for (let l = j + 1; l < numOfCols; l++) {
      visibleTrees.right++;
      if (grid[i][l] >= grid[i][j]) {
        break;
      }
    }
    // UP
    for (let l = i - 1; l >= 0; l--) {
      visibleTrees.up++;
      if (grid[l][j] >= grid[i][j]) {
        break;
      }
    }
    // DOWN
    for (let l = i + 1; l < numOfLines; l++) {
      visibleTrees.down++;
      if (grid[l][j] >= grid[i][j]) {
        break;
      }
    }

    const scenicScore =
      visibleTrees.down *
      visibleTrees.up *
      visibleTrees.left *
      visibleTrees.right;

    if (scenicScore > maxScenicScore) {
      maxScenicScore = scenicScore;
    }
  }
}

console.log(maxScenicScore);
