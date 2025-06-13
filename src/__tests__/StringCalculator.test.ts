import { StringCalculator } from "../StringCalculator";

describe("StringCalculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("should return 0 for empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("returns number for single value", () => {
    expect(calculator.add("5")).toBe(5);
  });

  test("returns sum for two comma-separated numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  test("returns sum for multiple numbers", () => {
    expect(calculator.add("1,2,3,4")).toBe(10);
  });

  test("handles newlines as delimiter", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test("should support different delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });
});
