const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

const movements = lines
  .filter((line) => line.startsWith("move"))
  .map((movement) => {
    const parts = movement.split(" ");
    return {
      amount: Number(parts[1]),
      from: Number(parts[3]),
      to: Number(parts[5]),
    };
  });

const numOfStacks = Number(
  lines
    .filter((line) => line.trimStart().startsWith("1"))[0]
    .trimEnd()
    .at(-1)
);

const stackLines = lines
  .filter((line) => line.trimStart().startsWith("["))
  .reverse();

const stacks: string[][] = Array.from({ length: numOfStacks }, () => []);

for (let i = 0; i < numOfStacks; i++) {
  for (const stackLine of stackLines) {
    if (
      stackLine[1 + 4 * i] !== " " &&
      stackLine[1 + 4 * i] !== "[" &&
      stackLine[1 + 4 * i] !== "]"
    ) {
      stacks[i].push(stackLine[1 + 4 * i]);
    }
  }
}

for (const movement of movements) {
  for (let i = 0; i < movement.amount; i++) {
    stacks[movement.to - 1].push(stacks[movement.from - 1].pop() as string);
  }
}

const finalString = stacks.reduce((acc, cur) => acc + cur.at(-1), "");

console.log("RESULT: ", finalString);
