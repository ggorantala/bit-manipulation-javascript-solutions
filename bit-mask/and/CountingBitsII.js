// Time: O(n+1)*O(set-bit count) or O(n+1)*O(1), The time taken is proportional to set bits in
// binary representation and the outer loop which runs (n+1) times.
// Space: O(1), no extra memory allocated
const CountingBitsII = (n) => {
  const helper = (n) => {
    let count = 0;
    while (n > 0) {
      n &= (n - 1);
      count++;
    }
    return count;
  }
  const ans = [];

  for (let i = 0; i <= n; i++) {
    ans[i] = helper(i);
  }

  return ans;
}

const number = 6;
console.log('Result:', CountingBitsII(number));