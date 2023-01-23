import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const heading = screen.getByText(/hello/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders with name", () => {
    render(<Greet name="Sia" />);
    const textElement = screen.getByText(/hello sia/i);
    expect(textElement).toBeInTheDocument();
  });
});
