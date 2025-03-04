import { render, screen, fireEvent } from "@testing-library/react";
import FAQ from "./Faq";
import "@testing-library/jest-dom";

describe("FAQ Component", () => {
  test("renders all questions", () => {
    render(<FAQ />);
    const questions = screen.getAllByText(/where|what|is|are|how/i);
    expect(questions.length).toBe(10);
  });

  test("toggles answer visibility on click", () => {
    render(<FAQ />);
    const firstQuestion = screen.getByText("Where is Hotel Von Steinblut located?");
    expect(screen.queryByText(/Hotel Von Steinblut is situated/i)).toBeNull();
    fireEvent.click(firstQuestion);
    expect(screen.getByText(/Hotel Von Steinblut is situated/i)).toBeInTheDocument();
    fireEvent.click(firstQuestion);
    expect(screen.queryByText(/Hotel Von Steinblut is situated/i)).toBeNull();
  });

  test("only one answer is visible at a time", () => {
    render(<FAQ />);
    const firstQuestion = screen.getByText("Where is Hotel Von Steinblut located?");
    const secondQuestion = screen.getByText("What kind of experiences does the hotel offer?");
    fireEvent.click(firstQuestion);
    expect(screen.getByText(/Hotel Von Steinblut is situated/i)).toBeInTheDocument();
    fireEvent.click(secondQuestion);
    expect(screen.getByText(/Our vampire-themed hotel offers/i)).toBeInTheDocument();
    expect(screen.queryByText(/Hotel Von Steinblut is situated/i)).toBeNull();
  });
});
