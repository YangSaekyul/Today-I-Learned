let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let changeAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let alphabet of changeAlphabet) {
  input = input.split(alphabet).join("*");
}

console.log(input.length);

// 예제 입력 1
// ljes=njak
// 예제 출력 1
// 6
// 예제 입력 2
// ddz=z=
// 예제 출력 2
// 3
// 예제 입력 3
// nljj
// 예제 출력 3
// 3
// 예제 입력 4
// c=c=
// 예제 출력 4
// 2
// 예제 입력 5
// dz=ak
// 예제 출력 5
// 3
