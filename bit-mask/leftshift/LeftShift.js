// Time: O(1), always constant, as we are dealing with bit representation of decimals or ASCII.
// They are represented in either 32/64
// Space: O(1), no extra memory allocated
const LeftShift = (number, i) => {
  return number << i;
}

const number = 100;
console.log(`${number} shifted 1 position left, yields to " ${LeftShift(number, 1)}`);
console.log(`${number} shifted 1 position left, yields to " ${LeftShift(number, 2)}`);
console.log(`${number} shifted 1 position left, yields to " ${LeftShift(number, 3)}`);
console.log(`${number} shifted 1 position left, yields to " ${LeftShift(number, 4)}`);
