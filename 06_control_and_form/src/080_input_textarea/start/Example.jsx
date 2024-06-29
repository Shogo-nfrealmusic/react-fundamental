import { useState } from "react";
const Example = () => {
  const [val, setVal] = useState("");
  const clearVal = () => setVal("");
  return (
    <>
      <label htmlFor="456">label</label>

      <div>
        <input
          id="123"
          placeholder="hello"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <textarea
          id="456"
          placeholder="こんにちは"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
      <h3>{val}</h3>
      <button onClick={clearVal}>クリア</button>
    </>
  );
};

export default Example;
