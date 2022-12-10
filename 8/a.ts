//const input = await Deno.readTextFile("./example.txt");
const input = await Deno.readTextFile("./input.txt");
const lines = input.split("\n");

const grid = lines.map((line) => line.split("").map((str) => Number(str)));

const numOfLines = grid.length;
const numOfCols = grid[0].length;

const outerTrees = numOfLines * 2 + numOfCols * 2 - 4;

let numOfVisibles = outerTrees;

for (let i = 1; i < numOfLines - 1; i++) {
  for (let j = 1; j < numOfCols - 1; j++) {
    const isInvisible = [false, false, false, false];

    // FROM THE LEFT
    for (let l = 0; l < j; l++) {
      if (grid[i][l] >= grid[i][j]) {
        isInvisible[0] = true;
      }
    }
    // FROM THE RIGHT
    for (let l = j + 1; l < numOfCols; l++) {
      if (grid[i][l] >= grid[i][j]) {
        isInvisible[1] = true;
      }
    }
    // FROM ABOVE
    for (let l = 0; l < i; l++) {
      if (grid[l][j] >= grid[i][j]) {
        isInvisible[2] = true;
      }
    }
    // FROM BELLOW
    for (let l = i + 1; l < numOfLines; l++) {
      if (grid[l][j] >= grid[i][j]) {
        isInvisible[3] = true;
      }
    }

    if (isInvisible.some((element) => element === false)) {
      numOfVisibles++;
    }
  }
}

console.log(numOfVisibles);
