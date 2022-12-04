const input = await Deno.readTextFile("./input.txt");

const pairs = input.split("\n").map((pair) =>
  pair.split(",").map((list) => ({
    min: Number(list.split("-")[0]),
    max: Number(list.split("-")[1]),
  }))
);

let fullyWrongPairs = 0;

for (const pair of pairs) {
  if (
    (pair[0].min >= pair[1].min && pair[0].max <= pair[1].max) ||
    (pair[1].min >= pair[0].min && pair[1].max <= pair[0].max)
  ) {
    fullyWrongPairs++;
  }
}

console.log(fullyWrongPairs);
