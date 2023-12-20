상수들의 그룹을 정의할 때 유용함

협업하는 개발자들 간에 코드를 더 읽기 쉽고 이해하기 쉽게 만들어 줌

```dart
enum Color {
  red,
  green,
  blue,
  yellow,
}

void main() {
  // enum 값을 변수에 할당
  Color myColor = Color.red;

  // 조건문으로 enum 값을 비교
  if (myColor == Color.red) {
    print('빨강');
  } else if (myColor == Color.blue) {
    print('파랑'); // 결과
  } else if (myColor == Color.green) {
    print('초록');
  }

  print(Color.green.index); // 1 - 배열의 인덱스 개념
  for (int i = 0; i < Color.values.length; i++) {
    print(Color.values[i]); // Color.red Color.green ...
  }
}
```
