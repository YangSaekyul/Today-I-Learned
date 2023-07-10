# 자바스크립트와 DOM 조작

## 1. DOM (Document Object Model)

DOM은 웹 페이지를 프로그래밍적으로 조작하기 위한 인터페이스이다. 웹 페이지는 문서와 이 문서의 구성 요소를 객체로 표현하며, 이 객체들의 계층 구조를 DOM 트리라고 한다.

## 2. DOM 조작 메서드

### 2.1 생성 (Create)

새로운 요소를 생성하려면 `document.createElement()` 메서드를 사용한다. 이 메서드는 새로운 요소를 만들고, 그 요소를 반환한다.

**예제:**

```javascript
let newElement = document.createElement("div");
```

### 2.2 추가 (Append)

생성된 요소를 DOM에 추가하려면 `Node.appendChild()` 메서드를 사용한다. 이 메서드는 특정 부모 노드의 자식 노드 리스트의 끝에 노드를 추가한다.

**예제:**

```javascript
let parentElement = document.getElementById("parent");
parentElement.appendChild(newElement);
```

### 2.3 읽기 (Read)

DOM에서 특정 요소를 선택하려면 다양한 메서드를 사용할 수 있다. 가장 기본적인 메서드는 `document.getElementById()`, `document.getElementsByClassName()`, `document.getElementsByTagName()`, `document.querySelector()`, `document.querySelectorAll()` 등이다.

**예제:**

```javascript
let element = document.getElementById("myId");
```

### 2.4 수정 (Update)

DOM 요소의 내용을 변경하려면 `innerHTML` 혹은 `textContent` 속성을 사용한다.

**예제:**

```javascript
let element = document.getElementById("myId");
element.innerHTML = "새로운 내용";
```

### 2.5 삭제 (Delete)

DOM에서 요소를 삭제하려면 `Node.removeChild()` 메서드를 사용한다. 이 메서드는 부모 노드에서 특정 자식 노드를 제거한다.

**예제:**

```javascript
let element = document.getElementById("myId");
element.parentNode.removeChild(element);
```

DOM 조작은 자바스크립트를 통해 웹 페이지의 동적인 변경을 가능하게 한다. 다양한 메서드와 속성을 사용하여 웹 페이지의 요소를 생성, 추가, 읽기, 수정, 삭제할 수 있다. 이를 통해 사용자와 상호작용하는 동적인 웹 애플리케이션을 구축할 수 있다.

## 3**. 이벤트 객체 (Event Object)**

이벤트 객체는 발생한 이벤트에 대한 다양한 정보를 담고 있는 객체이다. 이 객체는 이벤트 핸들러 내부에서 자동으로 생성되며, 이벤트의 종류, 발생 위치, 발생 시간 등의 정보를 담고 있다. 이벤트 객체는 여러 속성과 메서드를 가지며, 이를 이용하여 이벤트와 관련된 다양한 정보를 얻을 수 있다.

## 3-1**. event.target**

`e**vent.target**` 속성은 이벤트가 발생한 요소, 즉 대상 요소를 가리킨다. 이 속성을 이용하면 이벤트가 발생한 요소를 알아내고, 이 요소에 대한 조작을 수행할 수 있다.

**예제:**

```
javascriptCopy code
document.querySelector("button").addEventListener("click", function(event) {
    console.log(event.target); // 클릭된 버튼 요소를 출력한다.
});

```

위 예제에서 **`event.target`**은 클릭된 버튼 요소를 가리킨다. 이를 이용하면 클릭된 버튼에 대해 다양한 동작을 수행할 수 있다.

`e**vent.target**`을 이용하면 이벤트 위임(event delegation)이 가능해진다. 이벤트 위임은 상위 요소에서 하위 요소의 이벤트를 제어하는 방법으로, 이를 이용하면 동적으로 추가된 요소에 대한 이벤트도 제어할 수 있다. 따라서 이벤트 관리가 용이하다는 장점이 있다.
