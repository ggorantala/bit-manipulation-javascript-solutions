// Time: O(1)
// Space: O(1)
const CheckKthBitSet = n => {
  if (n === 0) {
    return 0;
  }

  let k = 1;

  while (true) {
    if ((n & (1 << (k - 1))) === 0) {
      k++;
    } else {
      return k;
    }
  }
}

// Time: O(1), always constant, as we are dealing with bit representation of decimals or ASCII.
// They are represented in either 32/64
// Space: O(1), no extra memory allocated
const CheckKthBitSetOptimal = (n, k) => {
  return (n & (1 << (k - 1))) !== 0;
}

console.log(`First set-bit position for number: 18 is -> ${CheckKthBitSet(18)}`);
console.log("------------");
console.log("n = 10, k = 2 : " + CheckKthBitSetOptimal(10, 2)); // optimal approach
console.log("------------");
console.log("n = 10, k = 1 : " + CheckKthBitSetOptimal(10, 1)); // optimal approach