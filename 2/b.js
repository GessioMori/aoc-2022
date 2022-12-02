const fs = require("fs");

const lines = fs.readFileSync("input.txt").toString().split("\n");
lines.pop();

let total = 0;

const cases = {
  "A X": 3,
  "A Y": 4,
  "A Z": 8,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 2,
  "C Y": 6,
  "C Z": 7,
};

for (let i = 0; i < lines.length; i++) {
  total += cases[lines[i]];
}

console.log(total);
