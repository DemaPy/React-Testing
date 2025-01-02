import { render, screen } from "@testing-library/react";
import ExpandableText from "../../components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("Expandable text", () => {
  it("Should render article with short text", () => {
    render(<ExpandableText text="test case" />);
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
    expect(article).toHaveTextContent(/test case/i);
  });
  it("Should render 255 symbols", () => {
    const testText = "a".repeat(255);
    render(<ExpandableText text={testText} />);
    expect(screen.getByText(testText)).toBeInTheDocument();
  });
  it("Should render 256 symbols with dots and Show More button", () => {
    const testText = "a".repeat(256);
    render(<ExpandableText text={testText} />);
    const truncated = testText.slice(0, 255) + "..."
    expect(screen.getByText(truncated)).toBeInTheDocument()
    expect(screen.getByText("Show More")).toBeInTheDocument();
  });
  it("Should change text content for button when clicked", async () => {
    const testText = "a".repeat(256);
    render(<ExpandableText text={testText} />);
    const user = userEvent.setup()
    await user.click(screen.getByText("Show More"))

    expect(screen.getByText(testText)).toBeInTheDocument();
    expect(screen.getByText("Show Less")).toHaveTextContent("Show Less");
  });
  it("Should change text content for button when clicked", async () => {
    const testText = "a".repeat(256);
    const truncated = testText.slice(0, 255) + "..."

    render(<ExpandableText text={testText} />);
    const user = userEvent.setup()
    await user.click(screen.getByText("Show More"))
    await user.click(screen.getByText("Show Less"))

    expect(screen.getByText(truncated)).toBeInTheDocument();
    expect(screen.getByText("Show More")).toHaveTextContent("Show More");
  });
});
