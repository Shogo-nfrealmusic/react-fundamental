import { useState } from "react";

const Example = () => {
  console.log("render");
  const [countA, setCountA] = useState({
    val: 0,
  });
  return (
    <>
      <div className="parent">
        <h3>Rendering?</h3>
        <button
          onClick={() => {
            setCountA({
              val: 0,
            });
          }}
        >
          button
        </button>
      </div>
      <div>
        <p>times:{countA.val}</p>
      </div>
    </>
  );
};

export default Example;
