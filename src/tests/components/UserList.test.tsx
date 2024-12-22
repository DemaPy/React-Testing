import { render, screen } from "@testing-library/react";
import UserList from "../../components/UserList";

const users = [
  {
    id: 1,
    name: "Dema",
    isAdmin: false,
  },
  {
    id: 1,
    name: "Demas",
    isAdmin: true,
  },
];

describe("Greet", () => {
  it("Should render no users when array is empty.", () => {
    render(<UserList users={[]} />);

    const text = screen.getByText(/No users available./i);
    expect(text).toBeInTheDocument();
  });
  it("Should render list of users when array is not empty.", () => {
    render(<UserList users={users} />);

    users.forEach((item) => {
      const text = screen.getByText(item.name);
      const link = screen.getByRole('link', {name: item.name});
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute("href", "/users/" + item.id)
      expect(text).toBeInTheDocument();
    });
  });
});
