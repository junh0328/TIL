import React, { useRef, useState } from "react";

const IterationSample = () => {
  const style = { cursor: "pointer" };
  const inputRef = useRef();
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  // change 감지
  const onChange = (e) => {
    setInputText(e.target.value);
  };

  // 데이터 추가
  const onClick = (e) => {
    e.preventDefault();
    if (inputText) {
      const nextNames = names.concat({
        id: nextId,
        text: inputText,
      });
      setNextId(nextId + 1);
      setNames(nextNames);
      setInputText("");
    } else {
      alert("입력한 값이 없습니다\n아무거나 입력해주세요🥲");
      inputRef.current.focus();
    }
  };

  // 데이터 제거

  const onRemove = (id) => {
    // 해당 id 값을 가진 객체 filter, id가 클릭한 아이디가 아닌것 만 보여줘
    const nextNames = names.filter((name) => name.id !== id);
    console.log(nextNames);
    // 추후 결과값은 namse 배열에 다시 렌더링
    setNames(nextNames);
  };

  return (
    <div>
      <form onSubmit={onClick}>
        <input ref={inputRef} value={inputText} onChange={onChange} />
        <button onClick={onClick}>추가</button>
      </form>
      {names &&
        names.map((name) => (
          <li
            style={style}
            key={name.id}
            onDoubleClick={() => {
              onRemove(name.id);
            }}
          >
            {name.text}
          </li>
        ))}
    </div>
  );
};

export default IterationSample;
