import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
import user from "@testing-library/user-event";

describe.only("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const btnAdd = screen.getByTestId("btn-add");
    const btnSub = screen.getByTestId("btn-sub");
    const count = screen.getByTestId("count");
    expect(btnAdd).toBeInTheDocument();
    expect(btnSub).toBeInTheDocument();
    expect(count).toBeInTheDocument();
  });

  test("renders with props", () => {
    const { getByText } = render(<Counter msg="hello" />);
    expect(getByText(/hello/i)).toBeInTheDocument();
  });

  // using fireEvent method
  test("increments correctly", () => {
    render(<Counter />);
    const btnAdd = screen.getByTestId("btn-add");
    const count = screen.getByTestId("count");
    fireEvent.click(btnAdd);
    expect(count).toHaveTextContent("1");
  });

  // using 'user-event' library
  test("count increments by 1 after add click", async () => {
    user.setup();
    render(<Counter />);
    const btnAdd = screen.getByTestId("btn-add");
    await user.click(btnAdd);
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent("1");
  });
  test("count increments by 2 after add click twice", async () => {
    user.setup();
    render(<Counter />);
    const btnAdd = screen.getByTestId("btn-add");
    // both are equivalent user.click() 2 times or user.dblclick()
    // await user.click(btnAdd);
    // await user.click(btnAdd);
    await user.dblClick(btnAdd);
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent("2");
  });

  test("decrements correctly", () => {
    render(<Counter />);
    const btnSub = screen.getByTestId("btn-sub");
    const count = screen.getByTestId("count");
    fireEvent.click(btnSub);
    expect(count).toHaveTextContent("-1");
  });

  test("input sets amount to 10 after btn click", async () => {
    user.setup();
    render(<Counter />);
    const inputElement = screen.getByTestId("amt-input");
    await user.type(inputElement, "10");
    expect(inputElement).toHaveValue(10);
    const btnElement = screen.getByTestId("amt-btn");
    await user.click(btnElement);
    const textElement = screen.getByTestId("amt-text");
    expect(textElement).toHaveTextContent("10");
  });

  test("tab key click sets element focused in correct order", async () => {
    user.setup();
    render(<Counter />);
    const btnAdd = screen.getByTestId("btn-add");
    await user.tab();
    expect(btnAdd).toHaveFocus();
    const btnSub = screen.getByTestId("btn-sub");
    await user.tab();
    expect(btnSub).toHaveFocus();
    const inputElement = screen.getByTestId("amt-input");
    await user.tab();
    expect(inputElement).toHaveFocus();
    const btnSetAmt = screen.getByTestId("amt-btn");
    await user.tab();
    expect(btnSetAmt).toHaveFocus();
  });
});
