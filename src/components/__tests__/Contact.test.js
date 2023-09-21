import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<Contact />); // will be rendered in jsdom

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
