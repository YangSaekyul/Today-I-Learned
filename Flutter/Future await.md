# Future

비동기 작업의 결과 또는 완료 상태를 나타내는 객체

```dart
void main() {
  playComputerGame(); // 프로그램이 실행되면 이 함수부터 실행
}

void playComputerGame() {
  startBoot(); // 1. 컴퓨터 부팅
  startInternet(); // 2. 인터넷 실행
  startGame(); // 3. 게임 실행
}

// 1 - 2 - 3 순서로 실행하고자 하면 해당 함수를 아래처럼 바꾸면 됨
// Future<void> playComputerGame() async {
//   startBoot(); // 1. 컴퓨터 부팅
//   await startInternet(); // 2. 인터넷 실행
//   startGame(); // 3. 게임 실행
// }

void startBoot() {
  print('1. boot Completed');
}

Future<void> startInternet() async {
  // 이 함수는 비동기 함수이다 를 의미

  // await - 비동기 함수 내에서 사용되며, await 뒤에 나오는 결과 값이
  // 완료될 때까지 실행을 일시적으로 중단시킴
  await Future.delayed(Duration(seconds: 2), () {
    // 2초 뒤 실행 (비동기)
    print('2. internet Completed');
  });
  print('delay Completed'); // 1 - 3 - 2 이후 실행
}

void startGame() {
  print('3. game Completed');
}
```

정리하면 비동기 프로그래밍을 이해하는 건 중요하다.

async await 를 적절히 사용하면 좋다.

쉽게 풀어서 await 가 완료되면 다음으로 넘어가게끔 한다는 뜻

그러나 await는 강제는 아님!!
