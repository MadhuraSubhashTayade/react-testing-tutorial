type CounterProps = {
  count: number;
  incrementCount?: () => void;
  decrementCount?: () => void;
};

const Counter = ({ count, incrementCount, decrementCount }: CounterProps) => {
  return (
    <>
      <h1>Mock-Counter</h1>
      <p>{count}</p>
      {incrementCount && <button onClick={incrementCount}>INC</button>}
      {decrementCount && <button onClick={decrementCount}>DEC</button>}
    </>
  );
};

export default Counter;
