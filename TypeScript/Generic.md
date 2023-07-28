# 제네릭

# 필요성

함수나 클래스를 작성할 때, 사용될 데이터의 타입을 미리 지정하지 않고 호출할 때 인자로 전달된 타입에 따라 추론하게 된다.

## 제네릭 없이 구현한다면?

```jsx
function printLog(text: string): string {
  return text;
}

printLog("hello"); // 정상
printLog(123); // 에러
```

<aside>
💡 이외에도 함수를 중복으로 선언하거나, 유니온 타입을 사용하거나, any 타입을 사용하게 되면 각각의 단점이 있어 제네릭을 사용하게 될 필요성이 생긴다.

</aside>

## 제네릭을 사용한다면?

```jsx
function printLog<T>(text: T): T {
  return text;
}
```

여기서 `<T>`는 타입 변수이다. 유저가 준 파라미터의 타입을 캡처하고, 이 정보를 나중에 사용할 수 있게 한다.

제네릭을 사용하는 방법은 아래와 같다.

```jsx
const str = printLog < string > "hello";
```

혹은 타입 추론 기능을 활용할 수 있다.

```jsx
const str = printLog("hello");
```

# 인터페이스와 제네릭

```jsx
interface Item<T> {
  name: T;
  stack: number;
  selected: boolean;
}
```

이렇게 작성하면 `name`의 값만 어떤 타입이 들어갈지 작성해주면 인터페이스를 굳이 여러개 만들지 않아도 된다.

```jsx
const obj: item<string> = {
  name: "T-shirts",
  stock: 2,
  selected: false,
};

const obj: Item<number> = {
  name: 2044512,
  stock: 2,
  selected: false,
};
```

# 클래스와 제네릭

팩토리를 사용할 때 생성자 함수로 클래스 타입을 참조해야 한다.

```ts
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

# 제네릭 타입 변수

앞에서 작성한 `printLog` 코드이다.

```ts
function printLog<T>(text: T): T {
  console.log(text.length);
  return text;
}
```

이 코드는 에러가 발생한다. 왜냐하면 `T`라는 타입 변수는 `length`라는 속성이 없기 때문이다.

제네릭에 타입을 줘서 유연하게 함수의 타입을 정의해 줄 수 있다.

```ts
function printLog<T>(text: T[]): T[] {
  console.log(text.length);
  return text;
}
```

이 코드는 `T`라는 변수 타입을 받고, 인자 값으로는 배열 형태의 `T` 타입을 받는다.

# 제네릭 제약 조건

```ts
function printLog<T>(text: T): T {
  console.log(text.length);
  return text;
}
```

인자의 타입에 선언한 `T`는 아직 어떤 타입인지 구체적으로 정의하지 않았기 때문에 오류가 난다. 하지만 `length` 속성 정도는 허용하려면 아래처럼 작성한다.

```ts
interface LengthType {
  length: number;
}

function printLog<T extends LengthType>(text: T): T {
  console.log(text.length);
  return text;
}
```

혹은 `keyof`를 사용해서 특정 타입의 키만 받을 수 있도록 할 수도 있다.

```ts
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(option: T): T {
  return option;
}

getShoppingItemOption("name"); // 정상
getShoppingItemOption("key"); // 에러
```

제네릭을 선언할 때 `<T extends keyof ShoppingItem>` 이렇게 작성하면 `T`는 `ShoppingItem`의 키 값만 받을 수 있게 된다.

# 제네릭으로 작성하기

> ## Before

```ts
function getFirstNumber(numbers: number[]): number | undefined {
  if (numbers.length === 0) {
    return undefined;
  }
  return numbers[0];
}

function getFirstString(strings: string[]): string | undefined {
  if (strings.length === 0) {
    return undefined;
  }
  return strings[0];
}

const numbers: number[] = [1, 2, 3];
const firstNumber = getFirstNumber(numbers); // firstNumber의 타입은 number | undefined입니다.
console.log(firstNumber);

const strings: string[] = ["apple", "banana", "cherry"];
const firstString = getFirstString(strings); // firstString의 타입은 string | undefined입니다.
console.log(firstString);
```

> ## After

```ts
function getFirstElement<T>(items: T[]): T | undefined {
  if (items.length === 0) {
    return undefined;
  }
  return items[0];
}

const numbers: number[] = [1, 2, 3];
const firstNumber = getFirstElement<number>(numbers);
console.log(firstNumber); // 1

const strings: string[] = ["apple", "banana", "cherry"];
const firstString = getFirstElement<string>(strings);
console.log(firstString); // 'apple'
```
