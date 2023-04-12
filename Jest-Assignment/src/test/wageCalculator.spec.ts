import { wageCalculator } from "../wageCalculator";

describe("wageCalculator", () => {
  it("Case 1: Not a leap year, mon, tue, wed, thu, sat, sun no work level", () => {
    expect(
      wageCalculator(2023, ["mon", "tue", "wed", "thu", "sat", "sun"])
    ).toStrictEqual(720);
  });

  it("Case 2: Not a leap year, tue with director work level", () => {
    expect(wageCalculator(2023, ["tue"], "director")).toStrictEqual(110);
  });

  it("Case 3: Not a leap year, tue, fri with manager work level", () => {
    expect(wageCalculator(2023, ["tue", "fri"], "manager")).toStrictEqual(180);
  });

  it("Case 4: Leap year, fri, invalidDay with no work level", () => {
    expect(wageCalculator(2020, ["fri", "invalidDay"])).toStrictEqual(252);
  });
});
