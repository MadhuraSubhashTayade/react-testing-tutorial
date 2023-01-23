import { render, screen } from "@testing-library/react";
import { User } from "./User";
import { rest } from "msw";
import { server } from "./mocks/server";

describe("Mocking users", () => {
  test("renders correctly", () => {
    render(<User />);
    const heading = screen.getByText(/users/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders list of users", async () => {
    render(<User />);
    const list = await screen.findAllByRole("listitem");
    expect(list).toHaveLength(2);
  });

  // error need to be handled for every individual test
  test("renders error", async () => {
    // 1. resetting the handler
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    // render component and test assertion
    render(<User />);
    const error = await screen.findByText("error fetching users...");
    expect(error).toBeInTheDocument();
  });
});
