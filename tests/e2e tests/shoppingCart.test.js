import lodashReduce from "../../src/reduce.js";
import lodashFilter from "../../src/filter.js";
import get from "../../src/get.js";
import isEmpty from "../../src/isEmpty.js";

const defaultItemOne = {
  id: "a1",
  name: "Item one",
  description:
    "Descriptive description of an item starting with lower-case letter",
  price: 6
};

const defaultItemTwo = {
  id: "a2",
  name: "Item two",
  description:
    "Descriptive description of an item starting with lower-case letter",
  price: 18
};

const shoppingCartWithItems = [defaultItemOne, defaultItemTwo];
const shoppingCartWithItemOne = [defaultItemOne];

describe("Shopping cart E2E test", () => {
  let shoppingCart = [];
  test("The price of an empty shopping cart should be 0", () => {
    const currPrice = lodashReduce(
      shoppingCart,
      (accumulator, item) => get(item, "price") + accumulator,
      0
    );
    expect(currPrice).toBe(0);
  });
  test("Shopping cart should contents update upon adding items", () => {
    shoppingCart.push(defaultItemOne);
    shoppingCart.push(defaultItemTwo);
    expect(shoppingCart).toEqual(shoppingCartWithItems);
  });
  test("Price of the shopping cart should be updated", () => {
    const currPrice = lodashReduce(
      shoppingCart,
      (accumulator, item) => get(item, "price") + accumulator,
      0
    );
    expect(currPrice).toBe(24);
  });
  test("Shopping cart should update upon deleting an item based on its id", () => {
    shoppingCart = lodashFilter(shoppingCart, ({ id }) => id !== "a2"); //id of item two
    expect(shoppingCart).toEqual(shoppingCartWithItemOne);
  });
  test("The price of shopping cart should be update upon deleting an item", () => {
    const currPrice = lodashReduce(
      shoppingCart,
      (accumulator, item) => get(item, "price") + accumulator,
      0
    );
    expect(currPrice).toBe(6);
  });
});
