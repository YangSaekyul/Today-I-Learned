let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let arr = input[1].split(" ").map(Number);

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  let sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let count = 0;
for (let i = 0; i < N; i++) {
  if (isPrime(arr[i])) count++;
}

console.log(count);
