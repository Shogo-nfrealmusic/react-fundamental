const Example = () => {
  const nums = [1, 2, 3, 4, 5];
  const sum = (arry) => {
    const nums = arry;
    let sumValue = 0;
    // for (let i = 0; i < nums.length; i++) {
    //   sumValue += nums[i];
    // }
    nums.forEach((num) => (sumValue += num));
    return sumValue;
  };

  const numObj = {
    nums: [1, 2, 3],
    sum() {
      const nums = this.nums;
      let sumValue = 0;
      for (let i = 0; i < nums.length; i++) {
        sumValue += nums[i];
      }
      return sumValue;
    },
  };
  return (
    <>
      <div>オブジェクト指向型:{numObj.sum()}</div>
      <div>関数型{sum(nums)}:</div>
    </>
  );
};

export default Example;
