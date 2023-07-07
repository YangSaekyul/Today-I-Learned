# 큐 (Queue)

큐는 컴퓨터 과학에서 주로 사용되는 추상 데이터 유형 중 하나이다. 이는 선입선출(FIFO: First In First Out) 또는 후입후출(LILO: Last In Last Out)의 원칙을 따른다. 이 원칙은 톨게이트를 통과하는 차량의 움직임과 비슷하다 - 먼저 들어온 차량이 먼저 나간다.

## 큐의 주요 메서드

### 1. enqueue

`enqueue` 메서드는 큐의 끝(tail)에 새로운 데이터를 추가한다.

```js
queue.enqueue(data);
```

### 2. dequeue

`dequeue` 메서드는 큐의 앞(head)의 데이터를 제거하고 반환한다. 큐가 빌 때까지 계속 이 메서드를 사용할 수 있다.

```js
data = queue.dequeue();
```

## 큐의 활용

큐는 다양한 곳에서 활용된다. 그 중 하나는 문서 출력 기능이다. 사용자가 출력 명령을 내리면 문서가 큐에 차례대로 저장되고, 프린터는 큐의 앞에서부터 하나씩 인쇄 작업을 수행한다.

```js
// JavaScript에서의 큐 활용 예시
let printQueue = [];

// 문서 출력
printQueue.push("document1");
printQueue.push("document2");
printQueue.push("document3");

// 인쇄 시작
let printDoc = printQueue.shift(); // document1이 반환되고 큐에서 제거됨
```

또한, 데이터를 주고 받을 때 각 장치 사이에 존재하는 속도의 차이나 시간 차이를 극복하기 위해 큐를 사용한다. (이 것을 버퍼라고 한다.) 이를 통해 데이터의 흐름을 안정화하고 효율적으로 관리할 수 있다.

# 원형 큐 (Circular Queue)

원형 큐는 특별한 종류의 큐로, 그 이름에서 알 수 있듯이 마치 원형의 형태를 가진다. 이 큐는 데이터의 시작과 끝이 서로 연결되어 있어 순환할 수 있는 구조를 가진다.

원형 큐는 효율적인 자원 활용을 위해 사용된다. 선형 큐에서는 데이터가 모두 비워지면 큐의 앞 부분은 빈 공간으로 남게 되는데, 이는 메모리의 낭비로 이어질 수 있다. 하지만 원형 큐에서는 이러한 문제가 발생하지 않는다. 즉, 큐의 끝에 도달하면 다시 처음으로 돌아가서 빈 공간을 활용할 수 있다.

## 원형 큐의 주요 메서드

원형 큐도 선형 큐와 마찬가지로 `enqueue`와 `dequeue` 메서드를 사용한다. 하지만 이 메서드들은 큐가 원형이라는 점을 고려해야 한다.

```js
// 원형 큐에서 데이터 추가
queue.enqueue(data);

// 원형 큐에서 데이터 제거 및 반환
data = queue.dequeue();
```

## 원형 큐의 활용

원형 큐는 컴퓨터에서 스케줄링, 네트워크 관리, 메모리 관리 등 다양한 분야에서 활용된다.

```js
// JavaScript에서의 원형 큐 활용 예시
class CircularQueue {
  constructor(k) {
    this.k = k;
    this.queue = new Array(k);
    this.head = this.tail = -1;
  }

  // 데이터 추가
  enqueue(data) {
    if ((this.tail + 1) % this.k === this.head) {
      console.log("Circular Queue is full\\n");
      return;
    } else if (this.head === -1) {
      this.head = 0;
      this.tail = 0;
      this.queue[this.tail] = data;
    } else {
      this.tail = (this.tail + 1) % this.k;
      this.queue[this.tail] = data;
    }
  }

  // 데이터 제거
  dequeue() {
    if (this.head === -1) {
      console.log("Circular Queue is empty\\n");
      return null;
    } else if (this.head === this.tail) {
      let temp = this.queue[this.head];
      this.head = this.tail = -1;
      return temp;
    } else {
      let temp = this.queue[this.head];
      this.head = (this.head + 1) % this.k;
      return temp;
    }
  }
}
```

이렇게 원형 큐는 데이터 처리에 있어 더 효율적인 자원 활용을 가능하게 해주는 데이터 구조이다.
