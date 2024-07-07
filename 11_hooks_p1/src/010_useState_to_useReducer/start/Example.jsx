import { useReducer, useState } from "react";

const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer((prev) => ++prev, 0);
  const countUp = () => {
    setState((prev) => ++prev);
  };
  const rcountUp = () => {
    dispatch();
  };
  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={countUp}>+</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rcountUp}>+</button>
      </div>
    </>
  );
};

export default Example;
