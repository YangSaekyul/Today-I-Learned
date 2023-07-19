let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);

let result = new Array(n).fill(0);

for (let i = 1; i <= m; i++) {
  let [start, end, value] = input[i].split(" ").map(Number);

  for (let j = start; j <= end; j++) {
    result[j - 1] = value;
  }
}

console.log(result.join(" "));
