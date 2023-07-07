// 입력한 괄호 값들이 모두 쌍이 맞게 올바른지를 판단해 모두 쌍이 맞으면 true 그렇지 않으면 false를 출력하세요

// 입력된 괄호 값들이 유효한 경우들은 다음에 해당합니다.
// 1. 열린 괄호는 같은 타입의 닫힌 괄호로 닫혀있어야 한다.
// 2. 열린 괄호는 올바른 순서대로 닫혀야만 한다.
// 3. 모든 닫힌 괄호는 그에 상응하는 같은 타입의 열린 괄호를 갖고 있다.

// 입력값을 통해 들어오는 괄호는 ()[]{}로만 이루어져 있습니다.
const isValid = (str) => {
  let result = [];
  if (str === "") {
    return false;
  } else {
    for (let i = 0; i < str.length; i++) {
      switch (str[i]) {
        case "[":
        case "{":
        case "(":
          result.push(str[i]);
          return;
        case "]":
          if (result.pop() !== "[") return false;
          break;
        case "}":
          if (result.pop() !== "{") return false;
          break;
        case ")":
          if (result.pop() !== "(") return false;
          break;
      }
    }
  }
  return result.length === 0;
};
