import countBy from "../../src/countBy.js";
import isEmpty from "../../src/isEmpty.js";
import filter from "../../src/filter.js";

const catalogue = [
  {
    id: "1",
    name: "Broccoli",
    category:
      "vegetable",
    price: "3"
  },
  {
    id: "2",
    name: "Carrot",
    category:
      "vegetable",
    price: "3"
  },
  {
    id: '3',
    name: "Bacon",
    category:
      "meat",
    price: "2"
  },
]

describe('User browsing and filtering catalog array of items', () => {
  test('Show amount of items which are vegetables.', () => {
    const result = countBy(catalogue, (item) => item.category === 'vegetable');
    expect(result.true).toBe(2);
  })

  test('Catalogue is empty when filtering by drinks', () => {
    const drinks = filter(catalogue, item => item.category === 'drink');
    expect(isEmpty(drinks)).toBe(true);
  })
})
