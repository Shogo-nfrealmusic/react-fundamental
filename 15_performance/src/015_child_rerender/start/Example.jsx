import { useState } from "react";
import Child from "./Child";
import "./Example.css";

const Example = () => {
  console.log("Parent render");
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  return (
    <div className="parent">
      <div>
        <h3>Parent</h3>
        <div>
          <button
            onClick={() => {
              setCountA((pre) => pre + 1);
            }}
          >
            buttonA
          </button>
          <span>update parent state</span>
        </div>
        <div>
          <button
            onClick={() => {
              setCountB((pre) => pre + 1);
            }}
          >
            buttonB
          </button>
          <span>update child state</span>
        </div>
      </div>
      <div>
        <p>times:{countA}</p>
      </div>
      <Child countB={countB} />
    </div>
  );
};

export default Example;
