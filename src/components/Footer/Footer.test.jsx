import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";
import { describe, it, expect } from "vitest";

describe("Footer component", () => {
    it("follow us on:", () => {
        render(<Footer />);
        const followText = screen.getByText(/follow us on:/i);
        expect(followText).toBeInTheDocument();
    });

    it("logo", () => {
        render(<Footer />);
        const logo = screen.getByAltText("Hotel Von Steinblut Logo");
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute("src", "https://res.cloudinary.com/dw94v5tvs/image/upload/v1739433825/logo_ggptnk.png");
    });

    it("github link", () => {
        render(<Footer />);
        const githubLink = screen.getByRole("link", { name: /github/i });
        expect(githubLink).toBeInTheDocument();
        expect(githubLink).toHaveAttribute("href", "https://github.com/JaviAriza/HotelVonSteinblut");
    });

    it("legal links", () => {
        render(<Footer />);
        const legalLinks = [
            { text: "Legal Notice", href: "#" },
            { text: "Privacy Policy", href: "#" },
            { text: "Terms and Conditions", href: "#" }
        ];

        legalLinks.forEach(({ text, href }) => {
            const link = screen.getByRole("link", { name: new RegExp(text, "i") });
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute("href", href);
        });
    });
});
