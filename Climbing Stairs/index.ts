const climbStairs = (n): number => {
  if (n < 0) {
    throw new Error('Argument cannot be negative');
  }

  const cache = new Array(n + 1);
  cache[0] = cache[1] = 1;

  const iterator = (x) => {
    if (x === 0 || cache[x]) {
      return cache[x];
    }
    return (cache[x] = iterator(x - 1) + iterator(x - 2));
  };

  return iterator(n);
};

export default climbStairs;
