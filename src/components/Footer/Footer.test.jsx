import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer/Footer";
import { BsGithub, BsInstagram } from "react-icons/bs";

describe("Footer component", () => {
  test("renders social media icons", () => {
    render(<Footer />);
    
    expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/JaviAriza/HotelVonSteinblut"
    );
  });

  test("renders legal links", () => {
    render(<Footer />);
    
    expect(screen.getByText(/Legal Notice/i)).toBeInTheDocument();
    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
    expect(screen.getByText(/Terms and Conditions/i)).toBeInTheDocument();
  });

  test("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/© Hotel Von Steinblut 2025/i)).toBeInTheDocument();
  });

  test("renders logo image", () => {
    render(<Footer />);
    const logo = screen.getByAltText("Hotel Von Steinblut Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute(
      "src",
      "https://res.cloudinary.com/dw94v5tvs/image/upload/v1739433825/logo_ggptnk.png"
    );
  });
});
