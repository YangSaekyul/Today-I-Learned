```dart
import 'package:flutter/material.dart';

class MainScreen extends StatefulWidget {
  const MainScreen({super.key});

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('메인 화면'),
      ),
      body: Column(
        children: [
          Container(
            height: 70,
            width: 200,
            margin: EdgeInsets.all(32),
            child: ElevatedButton(
              onPressed: () {
                // 클릭했을 때 동작하고 싶은 액션 정의
                print('버튼이 클릭되었다!');
              },
              style: ElevatedButton.styleFrom(
                primary: Colors.green,
                onPrimary: Colors.yellow,
                elevation: 0,
              ),
              child: Text('눌러보셈'),
            ),
          )
        ],
      ),
    );
  }
}
```
