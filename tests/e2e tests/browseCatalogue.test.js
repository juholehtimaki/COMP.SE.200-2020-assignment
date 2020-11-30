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
  it('Show amount of items which are vegetables.', () => {
    const result = countBy(catalogue, (item) => item.category);
    expect(result.vegetable).toBe(2);
  })

  it('Catalogue length is 0 when filtering by drinks', () => {
    const drinks = filter(catalogue, item => item.category === 'drink');
    expect(drinks.length).toBe(0);
  })

  it('isEmpty returns true when input is empty array from filtering.', () => {
    const drinks = filter(catalogue, item => item.category === 'drink');
    const result = isEmpty(drinks)
    expect(result).toBe(true);
  })

  it('isEmpty returns false when catalogue is not filtered', () => {
    const result = isEmpty(catalogue);
    expect(result).toBe(false);
  })
})
