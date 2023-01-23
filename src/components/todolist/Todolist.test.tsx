import { render, screen, waitFor } from "@testing-library/react";
import Todolist from "./Todolist";

describe("Todolist", () => {
  test("renders", () => {
    render(<Todolist />);
    const heading = screen.getByText(/todolist/i);
    expect(heading).toBeInTheDocument();
  });

  test.skip("renders todolist from api", () => {
    render(<Todolist />);
    const text = waitFor(() => screen.getByText(/delectus aut autem/i));
    expect(text).toBeInTheDocument();
  });
});
