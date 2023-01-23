import { useState } from "react";

type CustomHookProps = {
  initialCount?: number;
};

export const UseCounter = ({ initialCount = 0 }: CustomHookProps = {}) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};
