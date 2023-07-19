```js
// `reduce`는 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환합니다.

// 숫자 배열의 합계를 계산하는 예제
const numbers = [1, 2, 3, 4, 5];

// reduce 함수 사용하여 배열의 합계 계산
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 초기값은 0

console.log(sum); // 출력: 15

// 문자열 배열을 하나의 문자열로 결합하는 예제
const strings = ["안", "녕", "하", "세", "요"];

const combinedString = strings.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, ""); // 초기값은 빈 문자열

console.log(combinedString); // 출력: 안녕하세요
```
