import { render, screen } from "@testing-library/react";
import UserAccount from "../../components/UserAccount";
import { User } from "../../entities";

const user: User = {
  id: 1,
  name: "Dema",
  isAdmin: false,
};

describe("UserAccount", () => {
  it("Is should render h2 title with 'User Profile' text content", () => {
    render(<UserAccount user={user} />);

    const heading = screen.queryByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/User Profile/i);
  });
  it("Is should render button with 'Edit' text content if user is admin", () => {
    const user: User = {
      id: 1,
      name: "Dema",
      isAdmin: true,
    };
    render(<UserAccount user={user} />);

    const button = screen.queryByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Edit/i);
  });
  it("Is should not render button with 'Edit' text content if user is admin", () => {
    const user: User = {
      id: 1,
      name: "Dema",
      isAdmin: false,
    };
    render(<UserAccount user={user} />);
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
