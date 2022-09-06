// Time: O(1)
// Space: O(1)
const CheckKthBitSet = (number) => {
  function helper(n) {
    if (n === 0) {
      return 0;
    }

    let k = 1;

    while (true) {
      if (((n >> (k - 1)) & 1) === 0) {
        k++;
      } else {
        return k;
      }
    }
  }

  return helper(number);
}

// Time: O(1), always constant, as we are dealing with bit representation of decimals or ASCII.
// They are represented in either 32/64
// Space: O(1), no extra memory allocated
const checkKthBitSet01 = (n, k) => {
  // return (n & (1 << (k - 1))) !== 0; using left shift
  return ((n >> (k - 1)) & 1) === 1;
}

console.log(`First set-bit position for number: 18 is -> ${CheckKthBitSet(18)}`);
console.log("------------");
console.log("n = 10, k = 2 : " + checkKthBitSet01(10, 2));
console.log("------------");
console.log("n = 10, k = 1 : " + checkKthBitSet01(10, 1));
