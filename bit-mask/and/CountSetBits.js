// Time: O(n), where n is the number of bits present in the data type, for int has 32bits, and
// long has 64bits
// Space: O(1), no extra memory allocated
const CountSetBits = (n) => {
  let count = 0;
  while (n > 0) {
    if (n % 2 !== 0) {
      count++;
    }
    n >>= 1;
  }

  return count;
}

// above solution can be further simplified into
// Time: O(n), where n is the number of bits present in the data type, for int has 32bits, and
// long has 64bits
// Space: O(1), no extra memory allocated
const CountSetBits01 = (n) => {
  let count = 0;
  while (n > 0) {
    if ((n & 1) === 1) {
      count++;
    }
    n >>= 1
  }

  return count;
}

// Above solutions can be further simplified into
// Time: O(n), where n is the number of bits present in the data type, for int has 32bits, and
// long has 64bits
// Space: O(1), no extra memory allocated
const CountSetBits02 = (n) => {
  let count = 0;
  while (n > 0) {
    count += (n & 1);
    n >>= 1;
  }

  return count;
}

// Brian Kernighan’s algorithm (optimal and recommended approach)
// Time: O(set-bit count)/ O(1), where set bit means number of `1` bits present in the given number
// In the worst case, all 32bits can be `1` bits, so O(32) or O(64) time
// Space: O(1), no extra memory allocated
const BrainKernighanAlgorithm = (n) => {
  let count = 0;

  while (n > 0) {
    n &= (n - 1);
    count++;
  }

  return count;
}

// Lookup table approach (optimal approach, recommended)
// Time: O(1), This requires an O(1) time solution to count the set bits in each of the 8-bit chunks.
// Space: O(1), no extra memory allocated
const LookupTableApproach = (n) => {
  const table = [];
  table[0] = 0;

  for (let i = 1; i < 256; i++) {
    table[i] = (i & 1) + table[i >> 1]; // i >> 1 equals to i/2
  }

  let res = 0;
  for (let i = 0; i < 4; i++) {
    res += table[n & 0xff];
    n >>= 8;
  }

  return res;
}

console.log('SetBit Count is', CountSetBits(125));
console.log('SetBit Count is', CountSetBits01(125));
console.log('SetBit Count is', CountSetBits02(125));
console.log('SetBit Count with BrainKernighanAlgorithm approach', BrainKernighanAlgorithm(125)); // optimal approach (recommended)
console.log('SetBit Count with LookupTableApproach approach', LookupTableApproach(125)); // optimal approach (recommended)


