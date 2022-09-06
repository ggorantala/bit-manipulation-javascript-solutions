// Time: O(n * 2^n), the complexity is n times the power-set.
// Space: O(2^n), storing `2^n` subset elements in an array. so the extra memory/space allocated
// is directly proportional to the O(2^n).
const Subsets = nums => {
  const result = [];

  let n = nums.length;
  let powSize = Math.pow(2, n);

  for (let i = 0; i < powSize; i++) {
    const val = [];
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) !== 0) {
        val.push(nums[j]);
      }
    }
    result.push('[' + val + ']');
  }
  return result;
}

console.log('Result: ' + Subsets([1, 2, 3]));