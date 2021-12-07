import intersectionOfArrays from './index';

describe('intersectionOfArrays', () => {
  it('finds intersection for [4,9,5] and [9,4,9,8,4]', () => {
    expect(intersectionOfArrays([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9]);
  });
  it('finds intersection for [29,19,3315] and [19,29,9,3315,4]', () => {
    expect(intersectionOfArrays([29, 19, 3315], [19, 29, 9, 3315, 4])).toEqual([19, 29, 3315]);
  });
});
