import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [count, setCount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <button
        onClick={() => {
          let list = [...글제목];
          list.sort();
          글제목변경(list);
        }}
      >
        가나다순정렬
      </button>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          글제목변경(copy);
        }}
      >
        글수정
      </button>
      <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              setCount(count + 1);
            }}
          >
            👍
          </span>{" "}
          {count}
        </h4>
        <p>4월 12일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>4월 12일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            // 방법 1: modal == true ? setModal(false) : setModal(true);
            // 방법 2: setModal((modal) => { return !modal;});
            setModal(!modal);
          }}
        >
          {글제목[2]}
        </h4>
        <p>4월 12일 발행</p>
      </div> */}

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  let copy = [...count];
                  copy[i] += 1;
                  setCount(copy);
                }}
              >
                👍
              </span>
              {count[i]}
            </h4>
            <p>4월 12일 발행</p>
          </div>
        );
      })}

      {modal == true ? (
        <Modal 글제목변경={글제목변경} title={글제목} color="skyblue" />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.title[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let list = [...props.title];
          list[0] = "여자 코트 추천";
          props.글제목변경(list);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
