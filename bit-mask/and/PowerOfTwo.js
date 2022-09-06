// Time: O(logN), we can do better using brian kernighan's algorithm
// Space: O(1), no extra memory allocated
const IsPowerOf2 = number => {

  function helper(n) {
    if (n === 0) {
      return false;
    }

    while (n !== 1) {
      if (n % 2 !== 0) {
        return false;
      }
      n >>= 1;
    }
    return true;
  }

  return helper(number);
}

// optimal solution, recommended
// Time: O(1), the run time depends on the number of 1-bits, worst-case time for int data type is
// O(32), and O(64) for long
// Space: O(1), no extra memory allocated
const isPowerOfTwoOptimal = n => {
  /* this works, but we can simplify this into single line as shown below
   if (n == 0) {
     return false;
   }
   return (n & (n - 1)) == 0;
   */
  return n !== 0 && (n & (n - 1)) === 0;
}

console.log(IsPowerOf2(6));
console.log(isPowerOfTwoOptimal(8)); // recommended approach
