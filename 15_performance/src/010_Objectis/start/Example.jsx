import { useState } from "react";

const Example = () => {
  console.log("render");
  const [countA, setCountA] = useState(0);
  return (
    <>
      <div className="parent">
        <h3>Rendering?</h3>
        <button
          onClick={() => {
            setCountA(1);
          }}
        >
          button
        </button>
      </div>
      <div>
        <p>times:{countA}</p>
      </div>
    </>
  );
};

export default Example;
