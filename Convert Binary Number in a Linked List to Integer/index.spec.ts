import getDecimalValue from './index';

const linkedList = {
  value: 1,
  next: {
    value: 0,
    next: {
      value: 1,
      next: null,
    },
  },
};

describe('getDecimalValue', () => {
  it('converts [1,0,1] to 5', () => {
    expect(getDecimalValue(linkedList)).toEqual(5);
  });
  it('converts [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0] to 18800', () => {
    expect(getDecimalValue(linkedList)).toEqual(5);
  });
  it('converts [0, 0] to 0', () => {
    expect(getDecimalValue(linkedList)).toEqual(5);
  });
});
