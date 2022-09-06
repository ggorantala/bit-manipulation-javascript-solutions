const HammingDistance = (a, b) => {
  let xor = a ^ b;
  let distance = 0;

  while (xor ^ 0) {
    if (xor % 2 === 1) {
      distance += 1;
    }
    xor >>= 1;
  }

  return distance;
}

// recommended solution
// Time: O(1), the input size of the integer is fixed, constant time complexity
// Space: O(1), no extra memory allocated
const HammingDistanceOptimal = (a, b) => {
  let xor = a ^ b;
  let distance = 0;

  while (xor !== 0) {
    distance += 1;
    xor &= (xor - 1); // equals to `xor = xor & ( xor - 1);`
  }

  return distance;
}

let a = 1;
let b = 8;
console.log("Hamming Distance between two integers is", HammingDistance(a, b));
console.log("Hamming Distance between two integers is", HammingDistanceOptimal(a, b)); // recommended