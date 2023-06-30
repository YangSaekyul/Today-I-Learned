// 1. Redux Store 생성 예제
import { createStore } from "redux";

// Reducer
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

// 위 예제는 'INCREMENT'와 'DECREMENT'라는 두 개의 액션만을 처리하는 간단한 리듀서를 정의하고,
// 이를 createStore() 함수에 전달하여 스토어를 생성하는 예제이다.

// 2. Redux Action 보내기 예제
store.dispatch({ type: "INCREMENT" }); // state = 1
store.dispatch({ type: "INCREMENT" }); // state = 2
store.dispatch({ type: "DECREMENT" }); // state = 1

// 위 예제는 스토어를 생성한 후, dispatch() 함수를 사용하여 액션을 보내는 예제이다.
// 리듀서에 의해 처리되어 애플리케이션 상태가 업데이트 됨

// 3. Redux 상태 가져오기 예제
console.log(store.getState()); // state = 1

// 위 예제는 getState() 함수를 사용하여 현재 상태를 가져오는 예제이다.
// getState() 함수는 스토어의 상태를 반환한다.

// 4. Redux Store에 변경 감지자 설정하기 예제
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.unsubscribe({ type: "INCREMENT" }); // state = 2
store.unsubscribe({ type: "DECREMENT" }); // state = 1

unsubscribe();

// store.subscribe 함수는 스토어의 상태가 변경될 때마다 호출되는 함수를 등록한다.
// 구독을 취소하는 함수를 반환한다.
