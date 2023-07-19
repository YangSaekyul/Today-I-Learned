`fill()` 메서드는 배열의 일부 또는 전체를 고정된 값으로 채웁니다.

### 문법:

```javascript
arr.fill(value[, start[, end]])
```

#### 파라미터:

- `value`: 배열에 채워질 값입니다.
- `start`(optional): 시작 인덱스. 기본값은 `0`입니다.
- `end`(optional): 종료 인덱스 (하지만 이 인덱스는 포함되지 않습니다). 기본값은 `arr.length`입니다.

### 예시:

1. **배열의 모든 요소를 동일한 값으로 채우기**:

   ```javascript
   let array1 = [1, 2, 3, 4];
   console.log(array1.fill(0)); // [0, 0, 0, 0]
   ```

2. **특정 범위의 요소를 값으로 채우기**:

   ```javascript
   let array2 = [1, 2, 3, 4];
   console.log(array2.fill(0, 1, 3)); // [1, 0, 0, 4]
   ```

3. **새로운 배열을 생성하고 특정 값으로 채우기**:
   ```javascript
   let array3 = new Array(4).fill(0); // [0, 0, 0, 0]
   ```

`fill()` 메서드는 원본 배열을 변경합니다.
