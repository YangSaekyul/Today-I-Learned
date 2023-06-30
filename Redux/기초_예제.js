// 좀 더 복잡한 Redux 예제
// 간단한 TODO LIST 앱을 만들어보겠다.
import { createStore } from "redux";

// Action Types
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// Action Creators
let nextTodoId = 0;

const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
});

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

// Reducer
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      // 스프레드 연산자를 사용하여 기존 상태(state)를 복사하고, 새로운 할 일을 추가합니다.
      return [...state, { id: action.id, text: action.text, completed: false }];
    case TOGGLE_TODO:
      // map 함수를 사용하여 현재 상태(state)에서 특정 ID를 가진 할 일만 수정하고, 나머지 할 일은 그대로 반환합니다.
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

const store = createStore(todoReducer);

store.dispatch(addTodo("리덕스 배우기"));
store.dispatch(addTodo("리덕스 예제 만들기"));
store.dispatch(toggleTodo(0));

console.log(store.getState());
[
  { id: 0, text: "리덕스 배우기", completed: true },
  { id: 1, text: "리덕스 예제 만들기", completed: false },
];
