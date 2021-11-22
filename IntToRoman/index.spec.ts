import intToRoman from "./index";

describe("intToRoman", () => {
  it("converts 3 to III", () => {
    expect(intToRoman(3)).toEqual("III");
  });
  it("converts 550 to III", () => {
    expect(intToRoman(550)).toEqual("DL");
  });
  it("converts 2020 to III", () => {
    expect(intToRoman(2020)).toEqual("MMXX");
  });
  it("return an error", () => {
    expect(() => intToRoman('Hi')).toThrow("Parameter must be a number");
  });
});
