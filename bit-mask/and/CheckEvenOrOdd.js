// Time: O(1) time
// Space: O(1), no extra memory allocated
const IsEven = (n) => {
  return (n & 1) === 0 ? 'Even' : 'Odd';
}

const EvenOdd = array => {
  const result = [];

  function helper(array) {
    let k = 0;
    for (let n of array) {
      result[k++] = ((n & 1) === 1) ? "Odd" : "Even";
    }
    return result;
  }

  return helper(array);
}

console.log(`Number 125 is : ${IsEven(125)}`);
console.log(`Number 8 is : ${IsEven(8)}`);

// array input
console.log(EvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));

