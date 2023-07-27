## 백준 문제 풀이

```jsx
// 1. 입력값이 한 개일 때(한 줄)
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
```

```jsx
// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
/_ ex)
110 78 158
_/
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
```

```jsx
// 3. 입력값이 여러 줄일 때
/_ ex)
110
78
158
_/
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
```

```jsx
// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
/_ ex)
3
110 78 158
_/
const fs = require('fs');
const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputArr = input.trim().split(" ")
```

```jsx
// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
/_ ex)
3
110
78
158
_/
const fs = require('fs');
const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
```

---

1. 한 줄로 입력을 받을 때

```jsx
// 한 줄 입력

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let num = Number(input);

for (let i = 1; i <= num; i++) {
  console.log(i);
}
```

2. 여러 줄로 입력을 받을 때

```jsx
// 여러 줄 입력

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = input[0];
let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}

for (let i = 0; i < numbers.length; i++) {
  let num1 = Number(numbers[i][0]);
  let num2 = Number(numbers[i][1]);

  console.log(num1 + num2);
}
```
