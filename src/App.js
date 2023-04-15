import { render } from "@testing-library/react";
import "./App.css";
import React, { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [count, setCount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [detail, setDetail] = useState(0);
  let [inputValue, setInputValue] = useState("");

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
                setDetail(i);
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
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          if (!inputValue) return;
          let copy = [...글제목];
          copy.unshift(inputValue);
          글제목변경(copy);
          setInputValue("");

          let copyCount = [...count];
          copyCount.unshift(0);
          setCount(copyCount);
        }}
      >
        입력
      </button>

      {modal == true ? (
        <Modal
          글제목변경={글제목변경}
          title={글제목}
          color="skyblue"
          detail={detail}
        />
      ) : null}
      <Modal2></Modal2>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.title[props.detail]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "kim",
      age: 20,
    };
  }
  render() {
    return (
      <div>
        안녕{this.state.age}
        <button
          onClick={() => {
            this.setState({ age: 21 });
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}

export default App;
