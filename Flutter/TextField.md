```dart
import 'package:flutter/material.dart';

class MainScreen extends StatefulWidget {
  const MainScreen({super.key});

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  TextEditingController idController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('메인 화면'),
        ),
        body: Column(
          children: [
            TextField(
              controller: idController,
              decoration: InputDecoration(
                labelText: '내용을 입력하세요',
              ),
            ),
            ElevatedButton(
              onPressed: () {
                // 클릭 시 동작 구현
                print(idController.text.toString());
              },
              child: Text('아이디 입력 값 가져오기'),
            ),
          ],
        ));
  }
}
```
