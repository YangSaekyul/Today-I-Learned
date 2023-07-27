let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split(" ").map(Number);

let n = input[0];
let result = "";

for (let i = 1; i <= n; i++) {
  for (let j = n; j > i; j--) {
    result += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    result += "*";
  }
  result += "\n";
}

for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < i; j++) {
    result += " ";
  }
  for (let k = i + 1; k < n * 2 - i; k++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);

// 예제 입력 1
// 5
// 예제 출력 1
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
