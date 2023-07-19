# Custom Hooks

Custom Hooks는 React에서 제공하는 기본 Hooks 외에도 개발자가 필요에 따라 직접 만들 수 있는 Hooks이다.

## 왜 커스텀 훅을 쓰는가?

1. **재사용성**: 중복된 로직을 여러 컴포넌트에서 사용할 때, 커스텀 훅을 통해 한 곳에서 정의하고 여러 곳에서 재사용할 수 있다.
2. **로직 분리**: 컴포넌트 내의 복잡한 로직을 분리하여 가독성을 향상시키고 관리를 용이하게 할 수 있다.
3. **테스트 용이성**: 특정 로직을 커스텀 훅으로 분리하면, 해당 로직에 대한 테스트를 독립적으로 수행하기 쉽다.

## 커스텀 훅 예제

아래는 localStorage에 값을 저장하고 불러오는 간단한 커스텀 훅의 예제이다.

```jsx
import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
```

이 훅을 사용하면 컴포넌트에서 쉽게 localStorage의 값을 get/set 할 수 있다.

```jsx
function App() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
```

이렇게 커스텀 훅을 활용하면 로직을 효율적으로 관리하면서 컴포넌트의 코드를 깔끔하게 유지할 수 있다.
