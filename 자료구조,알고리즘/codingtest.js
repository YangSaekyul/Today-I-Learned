let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let arr = input.split("");
let newArr = input.split("").reverse();

let original = arr.join("");
let reversed = newArr.join("");

if (original !== reversed) {
  console.log(0);
} else {
  console.log(1);
}
