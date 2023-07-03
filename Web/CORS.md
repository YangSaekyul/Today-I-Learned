## 개요

CORS는 Cross-Origin Resource Sharing의 약자로, 다른 도메인으로부터 자원을 공유하려고 할 때 적용되는 웹 표준이다. 웹 애플리케이션은 종종 여러 도메인 간의 리소스 공유가 필요하다. 이러한 요청은 보안 상의 이유로 웹 브라우저에서 제한되는데, CORS 정책이 이를 가능하게 한다.

## 동작 방식

웹 애플리케이션에서 다른 출처의 리소스에 접근하려고 하면, 웹 브라우저는 HTTP 요청 헤더의 Origin 필드에 요청을 보내는 페이지의 출처를 포함시킨다. 응답을 받은 서버는 Access-Control-Allow-Origin 헤더를 사용하여 해당 리소스가 어느 출처에서 액세스될 수 있는지 지정한다.

## CORS 사전 요청 (Preflight Request)

브라우저는 자원을 요청하기 전에 사전 요청(Preflight Request)를 보낼 수 있다. 이는 서버에게 실제 요청을 보내기 전에 HTTP 메서드나 헤더들이 안전한지 확인하는 것이다. 이 사전 요청은 OPTIONS 메서드를 사용해 보내지며, 실제 요청을 보낼 수 있을지 결정하는데 도움이 된다.

## 코드 예시

```javascript
// Express.js를 사용한 서버 측 CORS 설정 예시
const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://example.com", // 허용하려는 도메인
    methods: ["GET", "POST"], // 허용하려는 메서드
    credentials: true, // 쿠키를 함께 전송하려면 true로 설정
  })
);
```

위의 코드에서는 Express.js의 미들웨어인 cors를 이용해 CORS 정책을 설정하고 있다. origin 속성에 허용하고자 하는 도메인을 지정하고, methods 속성에 허용하고자 하는 HTTP 메서드를 지정한다. credentials 속성을 true로 설정하면, 해당 서버에 요청을 보낼 때 쿠키를 함께 전송할 수 있다.

결국 CORS도 다시 공부해야 할듯....
