import { getByAltText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { describe, it, expect } from "vitest";
import Hero from "./Hero";

    describe("Hero",()=>{
        it("Hero Logo",()=>{
            render(<Hero />);
            expect(screen.getByAltText("hotel von Steinblut logo")).toBeInTheDocument();
        })
    
    })

    