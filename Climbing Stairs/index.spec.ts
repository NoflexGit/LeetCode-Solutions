import climbStairs from './index';

describe('climbStairs', () => {
  it('calculates iteration range for 3', () => {
    expect(climbStairs(3)).toEqual(3);
  });
  it('calculates iteration range for 4', () => {
    expect(climbStairs(4)).toEqual(5);
  });
});
