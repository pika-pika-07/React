import { render, screen } from "@testing-library/react";
import RestrauntCard, { withPromotedLabel } from "../RestrauntCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should render Res Card component with props", () => {
  render(<RestrauntCard resData={MOCK_DATA} />);

  const name = screen.getByText("Nanak Sweets");

  expect(name).toBeInTheDocument();
});

test("should render Res Card component with promoted label", () => {
  const RestrauntCardPromoted = withPromotedLabel(RestrauntCard);
  render(<RestrauntCardPromoted resData={MOCK_DATA} />);

  const name = screen.getByText("Nanak Sweets");

  expect(name).toBeInTheDocument();
});
