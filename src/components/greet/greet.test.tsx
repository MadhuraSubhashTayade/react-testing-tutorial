import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("Greet renders", () => {
  render(<Greet />);
  const heading = screen.getByText(/hello/i);
  expect(heading).toBeInTheDocument();
});
