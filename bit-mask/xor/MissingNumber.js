// Hashtable approach
// Time: O(n) for the loop, and O(1) for the hash table operation `add(...)`
// Space: O(n), the space/memory required to store the elements of an array into hash_table
// where n is the length of the array.
const MissingNumber = array => {
  function helper(nums) {
    const set = new Set(); // we can use js object, `const lookup = {}`

    for (let i = 0; i < nums.length; i++) {
      set.add(nums[i]);
    }

    let n = nums.length + 1;

    for (let i = 0; i < n; i++) {
      if (!set.has(i)) {
        return i;
      }
    }
    return -1;
  }

  return helper(array);
}

// Math approach
// Time: O(n), for the loop over n elements
// Space: O(1), no extra memory allocated
const MissingNumberMathApproach = array => {
  function helper(nums) {
    const n = nums.length;
    const expectedSum = ((n * (n + 1)) / 2);

    let actualSum = 0;

    for (let num of nums) {
      actualSum += num;
    }

    return expectedSum - actualSum;
  }

  return helper(array);
}


// Optimal approach
// Time: O(n), where n is the number of elements present in the array.
// Space: O(1), no extra memory allocated
const MissingNumberOptimal = array => {
  function helper(nums) {
    const n = nums.length + 1;
    let res = 0;

    for (let i = 0; i < n; i++) {
      res ^= i;
    }

    for (const value of nums) {
      res ^= value;
    }
    return res;
  }

  return helper(array);
}

// above solution can be further optimized to below
const MissingNumberOptimal01 = array => {
  function helper(nums) {
    let missing = nums.length;

    for (let i = 0; i < nums.length; i++) {
      missing ^= i ^ nums[i];
    }
    return missing;
  }

  return helper(array);
}

const array = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(`Missing element in the array is ${MissingNumber(array)}`);
console.log(`Missing element in the array is ${MissingNumberMathApproach(array)}`);
console.log(`Missing element in the array is ${MissingNumberOptimal(array)}`);
console.log(`Missing element in the array is ${MissingNumberOptimal01(array)}`);
