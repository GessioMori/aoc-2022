const fs = require("fs");

const lines = fs.readFileSync("input.txt").toString().split("\n");
lines.pop();

let total = 0;

const cases = {
  "A X": 4,
  "A Y": 8,
  "A Z": 3,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 7,
  "C Y": 2,
  "C Z": 6,
};

for (let i = 0; i < lines.length; i++) {
  total += cases[lines[i]];
}

console.log(total);
