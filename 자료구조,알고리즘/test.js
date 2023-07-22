let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let filteredData = input.filter((element) => {
  element.split(" ")[2] !== "P";
});

let result = filteredData.map((element) => {
  let data = element.split(" ");
  let object = {
    과목: data[0],
    점수: data[1],
    등급: data[2],
  };
  return object;
});

console.log(result);
