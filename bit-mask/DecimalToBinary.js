// bit shifting approach
const BitShifting = (n) => {
  let count = 0;

  while (n > 0) {
    ++count;
    n >>= 1; // this is equivalent to (n = n >> 1) OR (n = n/2);
  }

  return count;
}

// using Stack approach
const DecimalToBinaryUsingStack = (n) => {

  const array = [];

  while (n > 0) {
    let remainder = n % 2;
    array.push(remainder);
    n >>= 1; // this is equivalent to n/2;
  }

  //loggers
  console.log('while loop breaks only when "n" terminates to : ', n);
  console.log('  ');

  return array.reverse();
}

// optimal solution - bit shifting
const BitShiftingOptimal = (n) => {
  let bitsCounter = 0;

  while ((1 << bitsCounter) <= n) {
    bitsCounter += 1;
  }

  return bitsCounter;
}

console.log('Number of bits', BitShifting(125));
console.log('------------------ STACK -----------------')
console.log('Binary representation of number', 125, 'is', DecimalToBinaryUsingStack(125));
console.log('------------------ Optimal Solution -----------------')
console.log('Number of bits', BitShiftingOptimal(125));
