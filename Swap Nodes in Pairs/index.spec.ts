import swapPairs from './index';

const linkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const swappedLinkedList = {
  value: 2,
  next: {
    value: 1,
    next: {
      value: 4,
      next: {
        value: 3,
        next: null,
      },
    },
  },
};

describe('getDecimalValue', () => {
  it('converts [1,2,3,4] to [2, 1, 4, 3]', () => {
    expect(swapPairs(linkedList)).toEqual(swappedLinkedList);
  });
});
