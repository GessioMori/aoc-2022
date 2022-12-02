const fs = require("fs");

const lines = fs.readFileSync("input.txt").toString().split("\n\n");

const max3 = lines
  .map((line) =>
    line
      .split("\n")
      .map((str) => parseInt(str, 10))
      .reduce((acc, cur) => acc + cur, 0)
  )
  .reduce((acc, cur) => {
    const top3 = [...acc, cur].sort((a, b) => b - a);
    if (top3.length > 3) {
      top3.pop();
    }
    return top3;
  }, [])
  .reduce((acc, cur) => acc + cur, 0);

console.log(max3);
