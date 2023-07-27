# JavaScript에서의 클래스

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `안녕하세요. 제 이름은 ${this.name}이고, 나이는 ${this.age}살입니다.`
    );
  }
}

const person = new Person("홍길동", 20);
person.greet(); // 안녕하세요. 제 이름은 홍길동이고, 나이는 20살입니다.
```

# TypeScript에서의 클래스

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `안녕하세요. 제 이름은 ${this.name}이고, 나이는 ${this.age}살입니다.`
    );
  }
}

const person = new Person("홍길동", 20);
person.greet(); // 안녕하세요. 제 이름은 홍길동이고, 나이는 20살입니다.
```

# 클래스와 상속

```ts
class Animal {
  move(distanceInMeters: number): void {
    console.log(`${distanceInMeters}m 를 이동합니다.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("멍멍!");
  }
}

const dog = new Dog();
dog.bark(); // 멍멍!
dog.move(10); // 10m 를 이동합니다.
```

# public, private 키워드

외부에 드러나지 않을 멤버가 있다면 `private` 키워드를 사용한다.

```ts
class Person {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `안녕하세요. 제 이름은 ${this.name}이고, 나이는 ${this.age}살입니다.`
    );
  }
}
```

# readonly 키워드

읽기 전용으로 하기 위함 (수정 불가)

```ts
class MyDog {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

let dog = new MyDog("멍멍이");
dog.name = "왈왈이"; // 에러
dog.name = "멍멍이"; // "멍멍이"
}
```

# JavaScript -> TypeSciript

`JavaScript`

```js
class Counter {
  constructor() {
    this.value = 0;
  }
  increase() {
    this.value++;
  }
  decrease() {
    this.value--;
  }
  getValue() {
    return this.value;
  }
}

let counter1 = new Counter();

counter1.increase();
console.log(counter1.getValue());
```

`TypeScript`

```ts
class Counter {
  private value: number;

  constructor() {
    this.value = 0;
  }

  increase(): void {
    this.value++;
  }

  decrease(): void {
    this.value--;
  }

  getValue(): number {
    return this.value;
  }
}

let counter1: Counter = new Counter();

counter1.increase();
console.log(counter1.getValue());
```
