import searchInsertPosition from './index';

describe('searchInsertPosition', () => {
  it('finds target for 6', () => {
    expect(searchInsertPosition([1, 3, 5, 6, 8, 9, 22, 78, 99], 6)).toEqual(3);
  });
  it('finds target for 0', () => {
    expect(searchInsertPosition([1, 3, 5, 6], 0)).toEqual(0);
  });
  it('finds target for 4', () => {
    expect(searchInsertPosition([1, 3, 5, 6], 4)).toEqual(2);
  });
  it('finds target for 22', () => {
    expect(searchInsertPosition([1, 3, 5, 6], 22)).toEqual(4);
  });
});
