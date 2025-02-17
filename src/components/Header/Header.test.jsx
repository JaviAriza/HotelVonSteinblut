import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Header from "./Header";

describe("Header Logo", () => {
    it("hotel-logo", () => {
        render(<Header />);
        const followLogo = screen.getByAltText(/hotel-logo/i);
        expect(followLogo).toBeInTheDocument();
        expect(followLogo).toHaveAttribute("src","https://res.cloudinary.com/dw94v5tvs/image/upload/v1739433825/logo_ggptnk.png");
        expect(followLogo).toHaveAttribute("alt","hotel-logo");
    });
});

describe("Nav Items",()=>{
    it("should display the navigation links", () => {
        render(<Header />);
        expect(screen.getByText("Hotel von Steinblut")).toBeInTheDocument();
        expect(screen.getByText("Services")).toBeInTheDocument();
        expect(screen.getByText("Gallery")).toBeInTheDocument();
        expect(screen.getByText("FAQ")).toBeInTheDocument();
        expect(screen.getByText("Profile")).toBeInTheDocument();
      });      
});

describe("Toggle Button", ()=> {
    it("should toggle the 'open' class on the menu when clicking the toggle button", () => {
        render(<Header />);
        const toggleButton = screen.getByRole("button", { name: /toggle/i }) || screen.getByText("LOGO").parentElement.querySelector(".nav_toggle");
        expect(toggleButton).toBeInTheDocument();

        const navItems = screen.getByText("Hotel von Steinblut").parentElement;
        expect(navItems).not.toHaveClass("open");

        fireEvent.click(toggleButton);
        expect(navItems).toHaveClass("open");

        fireEvent.click(toggleButton);
        expect(navItems).not.toHaveClass("open");
    })
});