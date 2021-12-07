const searchInsertPosition = (nums: Array<number>, target: number): number => {
  if (target === 0) return 0;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // Searching for mid, preventing overflow
    const mid = left + Math.floor((right - left) / 2);
    if (target === nums[mid]) {
      left = mid;
    }
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

export default searchInsertPosition;
