// Time: O(n), loop continues to run until it breaks
// Space: O(1), no extra memory allocated
const BitLength = (number) => {
  let bitsCounter = 0;

  while ((1 << bitsCounter) <= number) {
    bitsCounter += 1;
  }

  return bitsCounter;
}

console.log(BitLength(8));
console.log(BitLength(2));
console.log(BitLength(7));

