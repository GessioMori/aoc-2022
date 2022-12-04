const input = await Deno.readTextFile("./input.txt");

const rucksacks = input.split("\n");

let sum = 0;

for (let i = 0; i < rucksacks.length / 3; i++) {
  for (const letter of rucksacks[3 * i]) {
    if (
      rucksacks[3 * i + 1].includes(letter) &&
      rucksacks[3 * i + 2].includes(letter)
    ) {
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
