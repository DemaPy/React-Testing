import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("Is should render nothing with empty array", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container.firstChild).toBeNull();
  });
  it("Is should render urls in img tag provided in imageUrl arrays", () => {
    const imageUrls = ["url_1", "url_2"];
    render(<ProductImageGallery imageUrls={imageUrls} />);
    const imgs = screen.getAllByRole("img");

    imageUrls.forEach((item, idx) => {
      expect(imgs[idx]).toHaveAttribute("src", item);
    });
  });
  it("Is should render the same amount of node", () => {
    const imageUrls = ["url_1", "url_2"];
    render(<ProductImageGallery imageUrls={imageUrls} />);
    const imgs = screen.getAllByRole("img");
    expect(imgs).toHaveLength(imageUrls.length);
  });
});
