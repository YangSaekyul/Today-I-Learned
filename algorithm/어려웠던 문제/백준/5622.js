let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split(" ");

let dial = {
  1: "",
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
  0: "",
};

let result = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    for (let k in dial) {
      if (dial[k].includes(input[i][j])) {
        result += Number(k) + 1;
      }
    }
  }
}

console.log(result);

// 예제 입력 1
// WA
// 예제 출력 1
// 13
// 예제 입력 2
// UNUCIC
// 예제 출력 2
// 36

// 객체 쓰긴 썼지만 다른 사람들도 다 객체 형태로 하더라...
