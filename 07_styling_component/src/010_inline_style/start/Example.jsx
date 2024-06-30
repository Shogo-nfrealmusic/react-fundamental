import { useState } from "react";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);
  const clickHandlere = () => setIsSelected((prev) => !prev);

  const style = {
    width: 120,
    height: 60,
    display: "block",
    fontWeight: "bold",
    "border-radius": 9999,
    cursor: "pointer",
    border: "none",
    margin: "auto",
    background: isSelected ? "pink" : "blue",
  };
  const style2 = {
    width: 120,
    height: 60,
    display: "block",
    fontWeight: "bold",
    "border-radius": 9999,
    cursor: "pointer",
    border: "none",
    margin: "auto",
    background: isSelected ? "red" : "blue",
  };
  return (
    <>
      <button onClick={clickHandler} style={style}>
        ボタン
      </button>
      <button onClick={clickHandlere} style={style2}>
        ボタン2
      </button>
      <div>{isSelected && "クリックされました。"}</div>
    </>
  );
};

export default Example;
