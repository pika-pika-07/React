import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

// Making a mock of fetch function of broswer
// fetch returns a promise which has json
// json also returns a promise which has api data
// api data we will have to mock
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render Body Component and search res liost for Dhaba input", async () => {
  // we use act function bec we are doing state updates in the component
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // Before Search there are 9 cards
  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  // Adding text to input element
  fireEvent.change(searchInput, { target: { value: "Dhaba" } });

  // click search button
  fireEvent.click(searchBtn);

  // Result should be 3 cards with name Dhaba
  // so we get all res cards ( res cards have data-id as resCard)
  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(3);
  //   render(<Body />);

  //   const name = screen.getByText("Nanak Sweets");

  //   expect(name).toBeInTheDocument();
});

it("should filter top rated restraunt", async () => {
  // we use act function bec we are doing state updates in the component
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // Before Search there are 9 cards
  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(9);

  const filterBtn = screen.getByRole("button", {
    name: "Top Rated Restraunts",
  });

  // click filter button
  fireEvent.click(filterBtn);

  // Result should be 3 cards with name Dhaba
  // so we get all res cards ( res cards have data-id as resCard)
  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(2);
  //   render(<Body />);

  //   const name = screen.getByText("Nanak Sweets");

  //   expect(name).toBeInTheDocument();
});
