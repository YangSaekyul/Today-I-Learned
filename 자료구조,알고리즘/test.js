let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number); // 숫자로 변환

let result = new Array(n).fill(0); // 초기화를 간소화

for (let i = 1; i <= m; i++) {
  let [start, end, value] = input[i].split(" ").map(Number); // 배열 값들을 숫자로 변환

  for (let j = start; j <= end; j++) {
    result[j - 1] = value;
  }
}

console.log(result.join(" "));
