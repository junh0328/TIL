import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function App() {
  const [text, setText] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["rememberText"]);

  let now = new Date();
  let afterOneMinute = new Date();

  useEffect(() => {
    if (cookies.rememberText !== undefined) {
      setText(cookies.rememberText);
      setIsRemember(true);
    }
  }, []);

  const onChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleOnChage = (e) => {
    setIsRemember(e.target.checked);
    if (e.target.checked) {
      afterOneMinute.setMinutes(now.getMinutes() + 1);
      setCookie("rememberText", text, { path: "/", expires: afterOneMinute });
    } else {
      removeCookie("rememberText");
    }
  };

  return (
    <div>
      <h1>react-cookie</h1>
      <input value={text} onChange={onChange} />
      <input type="checkBox" onChange={handleOnChage} checked={isRemember} />
      <h1>{text}</h1>
    </div>
  );
}

export default App;
