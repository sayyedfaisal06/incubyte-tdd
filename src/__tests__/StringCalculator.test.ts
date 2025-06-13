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
});
