import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import user from "@testing-library/user-event";

describe("Mocking Counter", () => {
  test("renders correctly", () => {
    render(<Counter count={0} />);
    const heading = screen.getByText(/Mock-Counter/i);
    expect(heading).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    user.setup();
    const incrementhandler = jest.fn();
    const decrementhandler = jest.fn();
    render(
      <Counter
        count={0}
        incrementCount={incrementhandler}
        decrementCount={decrementhandler}
      />
    );
    const btnInc = screen.getByRole("button", {
      name: "INC",
    });
    const btnDec = screen.getByRole("button", {
      name: "DEC",
    });
    await user.click(btnInc);
    await user.click(btnDec);
    expect(incrementhandler).toHaveBeenCalledTimes(1);
    expect(decrementhandler).toHaveBeenCalledTimes(1);
  });
});
