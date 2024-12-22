import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("Greet", () => {
  it("Should render with correct text and state", () => {
    render(<TermsAndConditions />);

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent(/Terms & Conditions/i);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    const btn = screen.getByRole("button");
    expect(btn).toHaveTextContent(/submit/i);
    expect(btn).toBeDisabled();
  });
  it("Should enable button when checkbox checked", async () => {
    render(<TermsAndConditions />);

    const chbox = screen.getByRole("checkbox");
    const user = userEvent.setup();
    await user.click(chbox);

    const btn = screen.getByRole("button");
    expect(btn).toBeEnabled();
  });
});
