// Time: O(n), where n is the number of elements in the array.
// Space: O(1), no extra memory allocated
const OddOccurringEl = array => {
  let result = 0;

  for (let value of array) {
    result ^= value;
  }

  return result;
}

const array = [4, 3, 3, 4, 4, 4, 5, 3, 5];
console.log(`Odd occurring element is ${OddOccurringEl(array)}`);
