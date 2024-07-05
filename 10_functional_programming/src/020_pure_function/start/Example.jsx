const Example = () => {
  const val1 = 2;
  const val2 = 3;
  const add = (val1, val2) => {
    return val1 + val2;
  };
  return (
    <>
      <div>純粋関数:{add(val1, val2)}</div>
    </>
  );
};

export default Example;
