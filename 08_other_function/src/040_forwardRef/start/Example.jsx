import { useRef, forwardRef } from "react";

const input = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});
const Example = () => {
  const ref = useRef();
  return (
    <>
      <input ref={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
