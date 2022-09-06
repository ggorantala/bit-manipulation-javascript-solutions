// Time: O(1), always constant, as we are dealing with bit representation of decimals or ASCII.
// They are represented in either 32/64
// Space: O(1), no extra memory allocated
const FirstSetBitPosition = (number) => {
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

console.log(`First set-bit position for number: 18 is -> ${FirstSetBitPosition(18)}`);
console.log(`First set-bit position for number: 5 is -> ${FirstSetBitPosition(5)}`);
console.log(`First set-bit position for number: 32 is -> ${FirstSetBitPosition(32)}`);
