interface IChar {
  key: string;
  value: number;
}

const chars: Array<IChar> = [
  { key: "M", value: 1000 },
  { key: "CM", value: 900 },
  { key: "D", value: 500 },
  { key: "CD", value: 400 },
  { key: "C", value: 100 },
  { key: "XC", value: 90 },
  { key: "L", value: 50 },
  { key: "XL", value: 40 },
  { key: "X", value: 10 },
  { key: "IX", value: 9 },
  { key: "V", value: 5 },
  { key: "IV", value: 4 },
  { key: "I", value: 1 },
];

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num: number): string => {
  let output: string = "";

  if(num === 0) {
    throw new Error("You cannot use 0 value as a parameter")
  }

  if(typeof num !== "number") {
    throw new Error("Parameter must be a number")
  }

  do {
    for (let i = 0; i < chars.length; i++) {
      const { value, key }: IChar = chars[i];

      if (num - value >= 0) {
        output = `${output}${key}`;
        num -= value;

        break;
      }
    }
  } while (num > 0);

  return output;
};

export default intToRoman;
