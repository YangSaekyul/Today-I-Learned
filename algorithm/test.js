let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let number = input[i].split(" ").map(Number);

  if (number[1] % number[0] === 0) {
    console.log("factor");
  } else if (number[0] % number[1] === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}
