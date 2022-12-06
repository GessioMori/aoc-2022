const message = await Deno.readTextFile("./input.txt");

let count = 0;

const numOfDifferentChars = 14;

const arrOfLetters: string[] = [];

const isEqual = (a: string[], b: string[]) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

for (const letter of message) {
  if (
    arrOfLetters.length === numOfDifferentChars &&
    isEqual(arrOfLetters, [...new Set(arrOfLetters)])
  ) {
    break;
  } else {
    count++;
    if (arrOfLetters.length === numOfDifferentChars) {
      arrOfLetters.shift();
    }
    arrOfLetters.push(letter);
  }
}

console.log("count: ", count);
