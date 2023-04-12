import logo from "./logo.svg";
import "./App.css";

function App() {
  let post = "강남 우동 맛집";
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <div className="list">
        <h4>글제목</h4>
        <p>4월 12일 발행</p>
      </div>
    </div>
  );
}

export default App;
