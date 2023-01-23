import React, { FC, ReactElement, useState } from "react";

type CounterProps = {
  msg?: string;
};

type MsgProps = {
  m: string;
};
const MsgComponent = ({ m }: MsgProps) => {
  return <h3>{m}</h3>;
};

const Counter: FC<CounterProps> = ({ msg }: CounterProps): ReactElement => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const [amt, setAmt] = useState(0);
  return (
    <>
      {msg && <MsgComponent m={msg} />}
      <button data-testid="btn-add" onClick={() => setCount((c) => c + 1)}>
        +
      </button>
      <span data-testid="count"> {count} </span>
      <button data-testid="btn-sub" onClick={() => setCount((c) => c - 1)}>
        -
      </button>
      <br />
      <input
        data-testid="amt-input"
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <span data-testid="amt-text"> Amount: {amt} </span>
      <button data-testid="amt-btn" onClick={() => setAmt(value)}>
        SET AMOUNT
      </button>
    </>
  );
};

export default Counter;
