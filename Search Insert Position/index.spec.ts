import intToRoman from "./index";

describe("intToRoman", () => {
  it("converts 3 to III", () => {
    expect(intToRoman(3)).toEqual("III");
  });
  it("converts 550 to DL", () => {
    expect(intToRoman(550)).toEqual("DL");
  });
  it("converts 2020 to MMXX", () => {
    expect(intToRoman(2020)).toEqual("MMXX");
  });
  it("returns an error after passing a string", () => {
    expect(() => intToRoman('Hi')).toThrow("Parameter must be a number");
  });
  it("returns an error after passing a 0", () => {
    expect(() => intToRoman(0)).toThrow("You cannot use 0 value as a parameter");
  });
});
