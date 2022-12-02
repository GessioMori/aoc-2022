const fs = require("fs");

const lines = fs.readFileSync("input.txt").toString().split("\n\n");

const max = lines
  .map((line) =>
    line
      .split("\n")
      .map((str) => parseInt(str, 10))
      .reduce((acc, cur) => acc + cur, 0)
  )
  .reduce((acc, cur) => (cur > acc ? cur : acc), Number.MIN_SAFE_INTEGER);

console.log(max);
