import { useMemo, useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(1);

  const computeExpensiveValue = (num: number) => {
    console.log("Computing expensive value");
    let value: number = num;
    for (let i: number = 0; i < 1000000000; i++) {
      value += num;
    }
    console.log("Done computing expensive value");
    return value;
  };

  const expensiveValue = useMemo(() => computeExpensiveValue(count), [count]);

  return (
    <div>
      <p>
        Expensive value(count) is {expensiveValue}
      </p>
      <p>
        Simple value(item): {item}
      </p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <button onClick={() => setItem(item + 1)}>Increment item</button>
    </div>
  );
};

export default Counter;
