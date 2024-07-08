import { useCalc, useDispatchCalc } from "../contexts/CalcContext";
const Input = ({ name }) => {
  const state = useCalc();
  const dispatch = useDispatchCalc();
  const numChangeHandler = (e) => {
    dispatch({
      type: "change",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  return (
    <>
      {name}:
      <div>
        <input
          type="number"
          name={name}
          value={state[name]}
          onChange={numChangeHandler}
        />
      </div>
    </>
  );
};

export default Input;
