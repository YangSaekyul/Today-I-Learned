let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let [n, m] = input[0].split(" ").map((el) => parseInt(el));

let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(i);
}

for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ").map((el) => parseInt(el));
  let tempArr = arr.slice(a - 1, b).reverse(); // 임시 배열 생성 -> 배열 뒤집기
  arr.splice(a - 1, b - a + 1, ...tempArr); // 임시 배열을 원래 배열에 삽입
}

console.log(arr.join(" "));

// 예제 입력 1
// 5 4
// 1 2
// 3 4
// 1 4
// 2 2
// 예제 출력 1
// 3 4 1 2 5
