import { memo } from "react";

function areEqual(prevProps, nextProps) {
  if (prevProps.countB !== nextProps.countB) {
    return false;
  } else {
    return true;
  }
}

const ChildMemo = memo(({ countB }) => {
  console.log("%cChild render", "color: red;");

  return (
    <div className="child">
      <h2>子コンポーネント領域</h2>
      <span>ボタンBクリック回数：{countB}</span>
    </div>
  );
}, areEqual);

export default ChildMemo;
