import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import Greet from "../../components/Greet";
import "@testing-library/jest-dom/vitest";

describe("Greet", () => {
  it("Is should render Hello with provided name", () => {
    render(<Greet name="Dema" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/dema/i);
  });
});
