import { useState } from "react";

const Child = ({ state, setState }) => {
  // setState({ value: 1 });
  const increment = () => {
    setState((prev) => ({ value: prev.value + 1 }));
  };
  return (
    <>
      <span>{state.value}</span>
      <button onClick={increment}>+</button>
    </>
  );
};

const Example = () => {
  const [state, setState] = useState({ value: 0 });

  return (
    <>
      <div>
        <Child state={state} setState={setState} />
      </div>
    </>
  );
};

export default Example;
