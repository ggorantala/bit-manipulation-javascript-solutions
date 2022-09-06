// Hashtable approach
// Time: O(n) for the loop, and O(1) for the hash table operation `pop()`
// Space: O(n), the space/memory required to store the elements of an array into hash_table
// where n is the length of the array.
const SingleNumber = array => {
  function helper(nums) {
    const lookup = {};

    for (let el of nums) {
      lookup[el] = lookup[el] ? ++lookup[el] : 1;
    }

    for (let value of nums) {
      if (lookup[value] === 1) {
        return value;
      }
    }

    return -1;
  }

  return helper(array);
}


// Math approach
// Time: O(n), where n is the number of elements present in the array.
// Space: O(n), the space/memory required to store the elements of an array into hash_table
const SingleNumberMathApproach = array => {
  function helper(nums) {
    let sumOfUniqueElements = 0;
    let totalSum = 0;

    //The Set object lets you store unique values of any type, whether primitive values or object references.
    const lookup = new Set();

    for (let el of nums) {
      if (!lookup.has(el)) {
        lookup.add(el);
        sumOfUniqueElements += el;
      }
      totalSum += el;
    }
    return (2 * sumOfUniqueElements) - totalSum;
  }

  return helper(array);
}


// optimal approach
// Time: O(n), where n is the number of elements present in the array
// Space: O(1), no extra memory/space allocated.
const SingleNumberOptimal = array => {
  function helper(nums) {
    let xor = 0;
    for (let num of nums) {
      xor ^= num;
    }
    return xor;
  }

  return helper(array);
}
const array = [4, 1, 2, 9, 1, 4, 2];
console.log(`Element appearing one time is ${SingleNumber(array)}`);
console.log(`Element appearing one time is ${SingleNumberMathApproach(array)}`);
console.log(`Element appearing one time is ${SingleNumberOptimal(array)}`); // recommended approach
