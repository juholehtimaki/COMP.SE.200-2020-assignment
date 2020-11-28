import lodashMap from "../../src/map.js";
import lodashReduce from "../../src/reduce.js";
import lodashFilter from "../../src/filter.js";
import capitalize from "../../src/capitalize.js";
import ceil from "../../src/ceil.js";
import get from "../../src/get.js";

const exampleItems = [
  {
    id: "a1",
    name: "Item one",
    description:
      "descriptive description of an item starting with lower-case letter",
    price: "20.23223"
  },
  {
    id: "a2",
    name: "Item two",
    description:
      "descriptive description of an item starting with lower-case letter",
    price: "6"
  }
];

const exampleItemsFormated = [
  {
    id: "a1",
    name: "Item one",
    description:
      "Descriptive description of an item starting with lower-case letter",
    price: 20.24
  },
  {
    id: "a2",
    name: "Item two",
    description:
      "Descriptive description of an item starting with lower-case letter",
    price: 6
  }
];

describe("E2E type of tests", () => {
  test("Should format an array of items to be in correct format (price with 2 decimal accuracy and description starting with upper-case letter", () => {
    const formatedItems = lodashMap(exampleItems, (item) => {
      item.description = capitalize(get(item, "description"));
      item.price = ceil(get(item, "price"), 2);
      return item;
    });
    expect(formatedItems).toEqual(exampleItemsFormated);
  });
});
