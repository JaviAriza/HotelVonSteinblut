import { getByAltText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { describe, it, expect } from "vitest";
import Hero from "./Hero";

    describe("Hero",()=>{
        it("should render the logo image with the correct src and alt attributes",()=>{
            render(<Hero />);
            const logoImage = screen.getByAltText(/hotel von steinblut logo/i);
            expect(logoImage).toBeInTheDocument();
            expect(logoImage).toHaveAttribute("src", "https://res.cloudinary.com/dw94v5tvs/image/upload/v1739433825/logo_ggptnk.png");
            expect(logoImage).toHaveAttribute("alt", "hotel von Steinblut logo")
        })
        
        it("should apply the background image correctly", () => {
            render(<Hero />);
            const backgroundDiv = screen.getByTestId('background-image');
            expect(backgroundDiv).toHaveStyle("background-image: url('https://res.cloudinary.com/dw94v5tvs/image/upload/v1739433825/castle-2_zxiibh.png')");
        })
    });