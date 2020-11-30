import isBoolean from "../../src/isBoolean";

describe('Tests for isBoolean.js', ()  => {
  test('Return true when input is true', () => {
    const result = isBoolean(true);
    expect(result).toBe(true);
  });

  test('Return true when input is true', () => {
    const result = isBoolean(true);
    expect(result).toBe(true);
  });

  test('Return true when input is false', () => {
    const result = isBoolean(false);
    expect(result).toBe(true);
  });

  test('Return false when input is string', () => {
    const result = isBoolean("true");
    expect(result).toBe(false);
  });

  test('Return false when input is number', () => {
    const result = isBoolean(12345);
    expect(result).toBe(false);
  });
}); 