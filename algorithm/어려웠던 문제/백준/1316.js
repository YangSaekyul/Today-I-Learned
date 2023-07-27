// 아직 못풀었다.

let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = parseInt(input[0]);

function isGroupWord(word) {
  const last = Array(26).fill(-1);
  for (let i = 0; i < word.length; i++) {
    const index = word.charCodeAt(i) - "a".charCodeAt(0);
    if (last[index] === -1 || last[index] === i - 1) {
      last[index] = i;
    } else {
      return false;
    }
  }
  return true;
}

let count = 0;
for (let i = 1; i <= n; i++) {
  if (isGroupWord(input[i])) {
    count++;
  }
}

console.log(count);

// 예제 입력 1
// 3
// happy
// new
// year
// 예제 출력 1
// 3
// 예제 입력 2
// 4
// aba
// abab
// abcabc
// a
// 예제 출력 2
// 1
