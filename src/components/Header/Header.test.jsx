import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Header from "./Header";

describe("Header Logo", () => {
    it("hotel-logo", () => {
        render(<Header />);
        const followLogo = screen.getByAltText(/hotel-logo/i);
        expect(followLogo).toBeInTheDocument();
    });
})

describe("Nav Items",()=>{
    it("should display the navigation links", () => {
        render(<Header />);
        expect(screen.getByText("Hotel von Steinblut")).toBeInTheDocument();
        expect(screen.getByText("Services")).toBeInTheDocument();
        expect(screen.getByText("Gallery")).toBeInTheDocument();
        expect(screen.getByText("FAQ")).toBeInTheDocument();
        expect(screen.getByText("Profile")).toBeInTheDocument();
      });
})