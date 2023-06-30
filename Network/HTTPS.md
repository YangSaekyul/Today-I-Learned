## HTTPS

HTTP는 웹에서 데이터를 주고받을 때 사용되는 프로토콜이다. 하지만 HTTP는 암호화 기능이 없어, 아이디나 비밀번호 등의 중요한 정보가 탈취될 위험이 있다. 이를 방지하기 위해 나온 것이 HTTPS(Hyper Text Transfer Protocol Secure)이다. HTTPS는 기본적으로 HTTP와 같은 요청을 주고받지만, 이를 암호화하여 데이터를 더 안전하게 전송한다.

## 대칭 키 암호화 방식

대칭 키 암호화 방식은 암호화와 복호화에 하나의 키만을 사용하는 방식이다. 이 방식의 장점은 연산 속도가 빠르다는 것이다. 하지만, 키를 주고 받는 과정에서 탈취당하면 암호화가 소용 없어지고, 키를 안전하게 관리해야 한다는 단점이 있다.

## 공개 키(비대칭 키) 암호화 방식

공개 키 암호화 방식은 암호화와 복호화에 서로 다른 키를 사용하는 방식이다. 요청을 보내는 사용자는 공개 키를, 받는 서버는 비밀 키를 사용한다. 이 방식은 비밀 키가 해킹되지 않는 한 탈취되지 않는다는 장점이 있지만, 복잡한 연산이 필요하여 더 많은 시간이 소모된다는 단점이 있다.

## SSL/TLS

HTTPS를 사용할 때, 브라우저는 서버의 응답과 함께 전달된 인증서를 확인한다. 이 인증서는 서버의 신원을 보증하는 것으로, 인증서를 발급해주는 기관을 CA(Certificate Authority)라고 한다.

서버는 정보와 공개 키를 CA에게 전달하면, CA는 비밀 키로 이를 암호화하여 인증서를 발급한다. 이 인증서는 서버가 클라이언트에게 보내진다. CA의 비밀 키로 암호화된 데이터는 CA의 공개 키로만 복호화가 가능하다.

- 복호화가 **성공**적으로 진행되면, 클라이언트는 서버의 정보와 공개 키를 얻게 되며, 해당 서버가 신뢰할 수 있는 서버임을 인지하게 된다.
- 복호화가 **실패**하면, 서버가 보내준 인증서가 신뢰할 수 없는 것이라는 사실을 확인하게 된다.

이제 사용자는 서버의 공개 키를 확보했지만, 그대로 사용할 수는 없다. 이 공개 키는 클라이언트와 서버 간에 대칭 키를 주고 받을 때 사용된다. 클라이언트는 데이터를 암호화하여 주고 받을 대칭키를 생성하고, 이를 서버의 공개 키로 암호화하여 전달한다. 서버는 이를 자신의 비밀 키로 복호화하여 대칭 키를 확보한다.

이 과정을 SSL(Secure Socket Layer) 또는 TLS(Transport Layer Security)라고 하며, HTTP에 SSL/TLS 프로토콜을 더한 것을 HTTPS라고 한다.

## key와 cert의 차이

**`key`**와 **`cert`**는 각각 개인키와 인증서를 의미한다. 보통 SSL/TLS와 같은 암호화 프로토콜에서 사용되며, 역할은 아래와 같다.

**`key`**: 개인키로, 해당 서버만이 가지고 있는 비밀 정보다. 이 키는 데이터를 암호화하거나, 서버가 받은 데이터를 복호화하는데 사용된다. 보안을 유지하기 위해 이 키는 서버 외부에 노출되어서는 안 된다.

**`cert`**: 인증서로, 공개키와 그 키가 실제로 해당 서버의 것임을 증명하는 디지털 서명이 포함되어 있다. 이 서명은 신뢰할 수 있는 인증 기관(CA, Certificate Authority)에 의해 발급된다. 클라이언트는 이 인증서를 사용하여 서버의 공개키를 얻고, 서버와 안전하게 통신할 수 있는지를 검증할 수 있다.

따라서, **`key`**와 **`cert`**의 가장 큰 차이점은, **`key`**는 비밀로 유지되어야 하는 반면, **`cert`**는 안전하게 통신하고자 하는 모든 클라이언트에게 공개될 수 있어야 한다는 점이다. 이 두 요소를 통해 안전한 암호화 통신이 가능하다.

## Node.js를 이용한 HTTPS 서버 생성

Node.js에서 HTTPS 서버를 만드는 방법을 알아보았다.

```javascript
// https 모듈과 fs 모듈을 불러온다
const https = require("https");
const fs = require("fs");

// https.createServer를 이용해 서버를 만든다
https
  .createServer(
    {
      // fs.readFileSync 함수를 사용해 key와 cert 파일을 읽어온다
      key: fs.readFileSync("/디렉토리위치/key.pem", "utf-8"),
      cert: fs.readFileSync("/디렉토리위치/cert.pem", "utf-8"),
    },
    // 요청이 들어올 경우 응답을 반환하는 함수를 작성한다
    function (req, res) {
      res.write("<h1>Hello Node!</h1>");
      res.end();
    }
  )
  .listen(3001); // 서버는 3001포트에서 요청을 기다린다
```

이와 유사하게 express 모듈을 사용해 HTTPS 서버를 만드는 방법도 있었다.

```javascript
// https, fs, express 모듈을 불러온다
const https = require("https");
const fs = require("fs");
const express = require("express");

// express 앱을 생성한다
const app = express();

https
  .createServer(
    {
      // fs.readFileSync 함수를 사용해 key와 cert 파일을 읽어온다
      key: fs.readFileSync("/디렉토리위치/key.pem", "utf-8"),
      cert: fs.readFileSync("/디렉토리위치/cert.pem", "utf-8"),
    },
    // express 앱을 사용해 요청을 처리한다
    app.use("/", function (req, res) {
      res.send("<h1>Hello Express!</h1>");
    })
  )
  .listen(3001); // 서버는 3001포트에서 요청을 기다린다
```

### 실행 방법

터미널: node https.js
브라우저: https://localhost:3001
결과: Hello Node! or Hello Express!
