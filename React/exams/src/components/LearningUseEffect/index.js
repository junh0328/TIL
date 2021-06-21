import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("렌더링이 완료되었습니다!");
    console.log("none clean up: ", { name, nickname });
    return () => {
      console.log("clean up!");
      console.log("clean up name: ", { name });
    };
  });

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <>
      <>
        <input
          style={{ marginRight: 10 }}
          value={name}
          onChange={onChangeName}
        />
        <input
          style={{ marginRight: 10 }}
          value={nickname}
          onChange={onChangeNickname}
        />
      </>
      {name || nickname ? (
        <div style={{ display: "block" }}>
          {name} {nickname}
        </div>
      ) : (
        <div>입력이 필요합니다</div>
      )}
    </>
  );
};

export default Info;
