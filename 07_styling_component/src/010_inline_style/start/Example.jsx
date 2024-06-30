import { useState } from "react";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

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
  return (
    <>
      <button onClick={clickHandler} style={style}>
        ボタン
      </button>
      <div>{isSelected && "クリックされました。"}</div>
    </>
  );
};

export default Example;
