import { useState } from "react";

const Example = () => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <>
      <label htmlFor="my-check">チェック：</label>
      <input
        type="checkbox"
        id="my-check"
        checked={isChecked}
        onChange={() => setIsChecked((prevState) => !prevState)}
      />
      <div>{isChecked ? "ON!" : "OFF!"}</div>
    </>
  );
};

export default Example;
