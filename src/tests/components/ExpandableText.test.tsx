import { render, screen } from "@testing-library/react";
import ExpandableText from "../../components/ExpandableText";

describe("Greet", () => {
  it("Should render article with short text", () => {
    render(<ExpandableText text="test case" />);
  });
  it("Should render button with Show Less when clicked", () => {
    render(<ExpandableText text="test case" />);
  });
  it("Should render button with Show More when clicked", () => {
    render(<ExpandableText text="test case" />);
  });
  it("Should render 255 symbols when not expanded", () => {
    render(<ExpandableText text="test case" />);
  });
});
