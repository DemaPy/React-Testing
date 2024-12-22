import { render, screen } from "@testing-library/react";
import Greet from "../../components/Greet";

describe("Greet", () => {
  it("Is should render Hello with provided name", () => {
    render(<Greet name="Dema" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/dema/i);
  });
  it("Is should render Login with provided name", () => {
    render(<Greet name="" />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
