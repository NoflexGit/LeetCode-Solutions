import getMiddleOfLinkedList from './index';

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

const linkedList2 = {
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

describe('getMiddleOfLinkedList', () => {
  it('gets center from [0, 1, 0]', () => {
    expect(getMiddleOfLinkedList(linkedList).value).toEqual(0);
  });
  it('gets center from [1, 2, 3, 4]', () => {
    expect(getMiddleOfLinkedList(linkedList2).value).toEqual(3);
  });
});
