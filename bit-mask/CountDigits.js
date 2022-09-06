// Optimal approach: Division
// Time: O(n), run time depends on the number of digits in n. In the worst case, it iterates
// through all the digits until it becomes 0.
// Space: O(1), space complexity is O(1) since no additional space is allocated.
const CountDigits = n => {
  let count = 0;

  while (n > 0) {
    n = Math.floor(n / 10);
    ++count;
  }

  return count;
};

// logarithmic approach
const LogarithmicApproach = (n) => {
  return n !== 0 ? Math.floor(Math.log10(n) + 1) : -1;
};

// recursive approach
const RecursiveApproach = (number) => {
  function helper(n) {
    //base checks
    if (n === 0) {
      return 0;
    }

    return (1 + helper(Math.floor(n / 10)));
  }

  return helper(number);
};

const StringApproach = n => {
  return n.toString().length;
};

console.log('Number of Digits:', CountDigits(125));
console.log('Number of Digits with logarithmicApproach:', LogarithmicApproach(125));
console.log('Number of Digits with recursiveApproach:', RecursiveApproach(125));
console.log('Number of Digits with stringApproach:', StringApproach(125));
