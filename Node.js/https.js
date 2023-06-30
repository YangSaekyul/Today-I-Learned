// Desc: https 모듈을 사용하여 https 서버를 만드는 방법을 알아보자.
const https = require("https");
const fs = require("fs");

https
  .createServer(
    {
      key: fs.readFileSync("/디렉토리위치/key.pem", "utf-8"),
      cert: fs.readFileSync("/디렉토리위치/cert.pem", "utf-8"),
    },
    function (req, res) {
      res.write("<h1>Hello Node!</h1>");
      res.end();
    }
  )
  .listen(3001);

// Desc: express 모듈을 사용하여 https 서버를 만드는 방법을 알아보자.
const https = require("https");
const fs = require("fs");
const express = require("express");

const app = express();

https
  .createServer(
    {
      key: fs.readFileSync("/디렉토리위치/key.pem", "utf-8"),
      cert: fs.readFileSync("/디렉토리위치/cert.pem", "utf-8"),
    },
    app.use("/", function (req, res) {
      res.send("<h1>Hello Express!</h1>");
    })
  )
  .listen(3001);

// 실행 방법
// 터미널: node https.js
// 브라우저: https://localhost:3001
// 결과: Hello Node! or Hello Express!
