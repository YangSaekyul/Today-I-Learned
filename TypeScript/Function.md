# Named function

```ts
function add(a: number, b: number): number {
  // function add(a: number, b: number) {} 와 같음
  return a + b;
}
```

# arrow function

```ts
const add = (a: number, b: number): number => {
  // const add = (a: number, b: number) => {} 와 같음
  return a + b;
};
```

# 리턴 값이 없다면?

```ts
function printMe(name: string, age: number): void {
  console.log(`name: ${name}, age: ${age}`);
}
```

# undefined를 전달했을 때

```ts
let greeting = (firstName: string, lastName: string = "yang") => {
  console.log(`Hello, ${firstName} ${lastName}`);
};

// greeting("min"); // Hello, min yang
// greeting("min", undefined); // Hello, min yang
// greeting("Park", "Coding"); // Hello, Park Coding
```

# 선택적 매개변수

```ts
let greeting = (firstName: string, lastName?: string) => {
  console.log(`Hello, ${firstName} ${lastName}`);
};

// greeting("min"); // Hello, min undefined
// greeting("min", undefined); // Hello, min undefined
// greeting("Park", "Coding"); // Hello, Park Coding
```

> 위 예제에서 2개의 매개변수를 지정하였으나, 3개의 인자를 전달하면 에러가 발생한다.

````ts
greeting("A", "B", "C"); // error```
````
