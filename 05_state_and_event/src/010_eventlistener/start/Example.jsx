const Example = () => {

  const clickHandler = () => {
    alert('Click!');
  }
  const clickHandler2 = () => {
    alert('What color is your Bugatti!');
  }
  return (
    <>
      <button onClick={clickHandler}>click!</button>
      <button onClick={clickHandler2}>click!</button>
    </>
  );
};

export default Example;
