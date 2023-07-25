유니온 타입에 대해 알아보자.
예를 들어 아래와 같은 함수가 있다고 하자.

```typescript
function printValue(value: any) void {
    if (typeof value === 'number') {
        console.log('number: ', value)
    } else {
        console.log('string: ', value)
    }
}

printValue('Hello World!') // string: Hello World!
printValue(123) // number: 123
```

이처럼 `any` 타입을 사용하면 타입스크립트를 굳이 왜 쓰겠는가?
이럴 때 유니온 타입을 사용하면 된다.

```typescript
function printValue(value: number | string) void {
    if (typeof value === 'number') {
        console.log('number: ', value)
    } else {
        console.log('string: ', value)
    }
}
```

`any` 대신 `number | string`을 사용하여 지정한다.

## 장점

1. 타입을 추론할 수 있기 때문에 타입에 관련된 API를 쉽게 자동완성으로 얻어낼 수 있다.
2. 코드의 가독성을 높일 수 있다.
