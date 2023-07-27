# 스택 (Stack)

스택은 컴퓨터 과학에서 주로 사용되는 추상 데이터 유형 중 하나이다. 이는 후입선출(LIFO: Last In First Out)의 원칙을 따른다. 이 원칙은 마치 프링글스와 같은 튜브 형태의 간식을 먹는 것과 같다 - 마지막에 넣은 간식을 먼저 꺼내 먹게 된다.

## 스택의 주요 메서드

### 1. push

`push` 메서드는 스택의 가장 위에 새로운 데이터를 추가한다.

```js
stack.push(data);
```

### 2. pop

`pop` 메서드는 스택의 가장 위의 데이터를 제거하고 반환한다. 스택이 빌 때까지 계속 이 메서드를 사용할 수 있다.

```js
data = stack.pop();
```

## 스택의 활용

스택은 많은 곳에서 사용된다. 그 중 하나는 웹 브라우저의 '뒤로 가기'와 '앞으로 가기' 기능이다. 브라우저는 사용자가 방문한 웹페이지를 스택에 저장하고, '뒤로 가기'를 누르면 가장 최근에 방문했던 웹페이지를 pop하여 표시한다.

```javascript
// JavaScript에서의 스택 활용 예시
let browserStack = [];

// 웹페이지 방문
browserStack.push("page1");
browserStack.push("page2");
browserStack.push("page3");

// 뒤로 가기
let lastPage = browserStack.pop(); // page3이 반환되고 스택에서 제거됨
```

이런 식으로 스택의 특성을 이해하고 활용하면 다양한 문제 해결에 도움이 될 수 있다.
