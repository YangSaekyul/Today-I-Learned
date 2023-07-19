```jsx
import React, { useState } from "react"; // React 및 useState Hook을 import 합니다.

function Counter() {
  const [count, setCount] = useState(0); // useState를 사용하여 count 상태를 정의하고 초기값을 0으로 설정합니다.

  // 클릭 시 count 상태를 증가시키는 함수
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>현재 카운트: {count}</p> // 현재 count 값을 보여줍니다.
      <button onClick={increment}>증가</button> // 클릭 시 increment 함수를 실행하여
      count 상태를 증가시킵니다.
    </div>
  );
}

export default Counter;
```
