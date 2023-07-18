```jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>홈</h1>;
}

function MyPage() {
  return <h1>마이 페이지</h1>;
}

function Dashboard() {
  return <h1>대시보드</h1>;
}

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/mypage">마이 페이지</Link>
          </li>
          <li>
            <Link to="/dashboard">대시보드</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
```

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```
