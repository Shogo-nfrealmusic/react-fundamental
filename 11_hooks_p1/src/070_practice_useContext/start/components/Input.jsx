const Input = ({ name }) => {
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
