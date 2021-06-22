import React, { useState } from "react";
import axios from "axios";

const AxiosData = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      return await axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => {
          setData(response.data);
        });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data ? (
        <textarea
          style={{ width: 300 }}
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      ) : (
        <textarea>
          불려진 데이터가 없습니다. 불러오기 버튼을 클릭하세요
        </textarea>
      )}
    </div>
  );
};

export default AxiosData;
