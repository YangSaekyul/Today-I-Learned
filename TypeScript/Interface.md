## 인터페이스는 왜 쓰는가?

일반적으로 타입 체크를 위해 사용한다.

```typescript
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Lee",
  age: 20,
};
// 정상 작동, age와 name을 바꿔도 정상 작동

const user: User = {
  name: "Yang",
};
// age가 없어서 오류 발생

const user: User = {
  name: "Park",
  age: "20",
  job: "Developer",
};
// 정의된 인터페이스에 없는 속성이 있어서 오류 발생
```

## ? 연산자 사용

> Optional property

```ts
interface User {
  name: string;
  age?: number;
}

const user: User = {
  name: "Lee",
};
// age가 없어도 정상 작동
```

## 함수 인터페이스

```ts
interface User {
  name: string;
  age: number;
  job: string;
}

interface Greeting {
  (user: User, greeting: string): string;
}

const greet: Greeting = (user, greeting) => {
  return `${user.name}님, ${greeting}`;
};

const user = User {
  name: "Lee",
  age: 20,
  job: "Developer",
};

console.log(greet(user, "안녕하세요")); // Lee님, 안녕하세요
```

## 클래스 인터페이스

```ts
interface Calculator {
  add(x: number, y: number): number;
  substract(x: number, y: number): number;
}

class SimpleCalculator implements Calculator {
  add(x: number, y: number): number {
    return x + y;
  }
  substract(x: number, y: number): number {
    return x - y;
  }
}

const calc = new SimpleCalculator();

console.log(calc.add(1, 2)); // 3
console.log(calc.substract(5, 2)); // 3
```

---

### 타입스크립트로 포팅하기

`JavaScript`

```js
// Todo 인터페이스를 타입으로 받는 todos를 완성합니다.
let todos = [];

// Todo 인터페이스를 타입으로 받는 addTodo를 완성합니다.
function addTodo(todo) {
  todos = [...todos, todo];
}

// Todo 인터페이스를 타입으로 받는 newTodo를 완성합니다.
const newTodo = {
  id: 1,
  content: "learn typescript",
  isDone: false,
};

addTodo(newTodo);

console.log(todos);
```

`TypeScript`

```ts
interface Todo {
  id: number;
  content: string;
  isDone: boolean;
}

let todos: Todo[] = [];

function addTodo(todo: Todo): void {
  todos = [...todos, todo];
}

const newTodo: Todo = {
  id: 1,
  content: "learn typescript",
  isDone: false,
};

addTodo(newTodo);

console.log(todos); // [{ id: 1, content: 'learn typescript', isDone: false }]
```

---

## Extends

인터페이스는 상속이 가능하다.

```ts
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

const person: Developer = {
  name: "Lee",
  age: 20,
  language: "TypeScript",
};
```

여러 인터페이스도 상속받을 수 있다.

```ts
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

interface FrontendDeveloper extends Developer {
  framework: string;
}

const person: FrontendDeveloper = {
  name: "Lee",
  age: 20,
  language: "TypeScript",
  framework: "React",
};
```

근데 실습 과정에서 `extends`를 사용하지 않았는데 정상 작동되었다.
찾아보니 `extends`를 사용하는 이유는 재사용성, 명확성, 유지보수 등의 이유로 사용하는 것이 좋다고 한다.

예를 들어, Color나 ClothesType 인터페이스에 변경이 필요할 경우 `extends`를 사용하지 않으면 모든 인터페이스를 수동으로 수정해야 한다.

반면, `extends`를 사용하면 `Color`나 `ClothesType` 인터페이스만 수정하면 된다.
