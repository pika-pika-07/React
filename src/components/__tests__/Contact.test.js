import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page Test cases", () => {
  beforeAll(() => {
    console.log("Runs Before runing all test cases");
  });

  beforeEach(() => {
    console.log("Runs Before each of the test case");
  });

  afterEach(() => {
    console.log("Runs after reach test case");
  });
  // we can write 'it' as well instead of 'test'
  test("Should load contact us component", () => {
    render(<Contact />); // will be rendered in jsdom

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact us component", () => {
    render(<Contact />); // will be rendered in jsdom

    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside contact us component", () => {
    render(<Contact />); // will be rendered in jsdom

    const inputName = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on Contact Component", () => {
    render(<Contact />); // will be rendered in jsdom

    // Querying
    const inputBoxes = screen.getAllByRole("textbox"); // Will return jsx element

    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
