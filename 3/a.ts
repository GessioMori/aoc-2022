const input = await Deno.readTextFile("./input.txt");

const rucksacks = input
  .split("\n")
  .map((line) => [
    line.substring(0, line.length / 2),
    line.substring(line.length / 2, line.length),
  ]);

let sum = 0;

for (let i = 0; i < rucksacks.length; i++) {
  for (const letter of rucksacks[i][0]) {
    if (rucksacks[i][1].includes(letter)) {
      const charCode = letter.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        sum += letter.charCodeAt(0) - 38;
      } else if (charCode >= 97 && charCode <= 123) {
        sum += letter.charCodeAt(0) - 96;
      }
      break;
    }
  }
}

console.log(sum);
