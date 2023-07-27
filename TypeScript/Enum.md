열거형(Enum)은 특정 값의 집합을 정의할 때 사용된다.

## 숫자형 열거형

```ts
enum Color {
  Red,
  Green,
  Blue,
}
```

위와 같이 정의하면 `Color`는 `Red`, `Green`, `Blue`라는 3개의 멤버를 가지게 된다. 이때 `Red`는 `0`으로 초기화되고, `Green`은 `1`, `Blue`는 `2`로 초기화된다. 만약 초기화를 하지 않으면 `0`부터 시작하여 1씩 증가하는 값을 가지게 된다.

```ts
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}

let c: Color = Color.Blue; // 4
let blueValue: number = Color.Blue; // 4
let greenValue: number = Color.Green; // 2
```

## 문자형 열거형

열거형의 값을 전부 특정 문자 혹은 다른 열거형 값으로 초기화해야 한다.

```ts
enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

function request(url: string, method: HttpMethod) {
  // ...
}

request("/users", HttpMethod.GET);
```

## 역 매핑 (Reverse Mapping)

```ts
enum Enum {
  A,
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
```
