```jsx
import React, { useState, useCallback } from "react"; // React 및 필요한 Hook import

function Example() {
  const [count, setCount] = useState(0); // 상태 정의, 초기 값은 0

  // useCallback Hook 사용
  // 이 Hook은 메모이제이션된 콜백을 반환합니다. 이는 특정 종속성이 변경될 때까지 동일하게 유지됩니다.
  // 여기서 종속성은 두 번째 인자인 배열에 포함된 것들입니다.
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); // 'count'가 변경될 때만 콜백이 재생성됩니다.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button> {/* increment 함수를 클릭 이벤트에 연결 */}
    </div>
  );
}

export default Example;
```
