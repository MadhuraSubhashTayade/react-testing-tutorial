import React, { FC, ReactElement } from "react";

type GreetProps = {
  name?: string;
};

const Greet: FC<GreetProps> = ({ name }: GreetProps): ReactElement => {
  return (
    <>
      <h1>Hello {name}</h1>
    </>
  );
};

export default Greet;
