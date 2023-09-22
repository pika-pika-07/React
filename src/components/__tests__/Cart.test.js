import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import RestrauntMenu from "../RestrauntMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should load res menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestrauntMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Salad(2)");

  // Click accordionHeader

  fireEvent.click(accordionHeader);

  // get divs for items from items list

  const items = screen.getAllByTestId("foodItems");

  //Assertion
  expect(items.length).toBe(2);

  // Cart is empty before clicking
  const cartTextBeforeAddingToCart = screen.getByText("Cart (0)");

  expect(cartTextBeforeAddingToCart).toBeInTheDocument();

  // Find all btns with Add+
  const addBtns = screen.getAllByRole("button", { name: "Add+" });

  // Click the add Btn
  fireEvent.click(addBtns[0]);
  // Cart is updated with 1 item
  const cartText = screen.getByText("Cart (1)");

  expect(cartText).toBeInTheDocument();

  //Cart Page shouldf also change

  // Check the no fo food items
  const itemsAfterCartAddition = screen.getAllByTestId("foodItems");

  //Assertion
  // 3 because 2 were already there in foodItems and 1 we addewd to cart
  expect(itemsAfterCartAddition.length).toBe(3);

  // Clear Cart

  fireEvent.click(screen.getByRole("button", { name: "ClearCart" }));

  const itemsAfterCartClear = screen.getAllByTestId("foodItems");

  //Assertion
  // 2 because 3 were already there in foodItems and 1 we removed
  expect(itemsAfterCartClear.length).toBe(2);

  // Text check for empty cart
  expect(screen.getByText("Add items to the cart")).toBeInTheDocument();
});
