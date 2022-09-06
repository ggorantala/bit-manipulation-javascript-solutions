const MinFlips = (x, y, z) => {

  function helper(a, b, c) {
    let ans = 0;
    for (let i = 0; i < 32; i++) {
      let bitC = ((c >> i) & 1);
      let bitA = ((a >> i) & 1);
      let bitB = ((b >> i) & 1);

      if ((bitA | bitB) !== bitC) {
        if (bitC === 0) {
          if (bitA === 1 && bitB === 1) {
            ans += 2;
          } else {
            ans += 1;
          }
        } else {
          ans += 1;
        }
      }
    }
    return ans;
  }

  return helper(x, y, z);
}

// above snippet/algorithm can be further simplified into
// Time: O(logN), as we are comparing bit values in each integer
// Space: O(1), no extra memory allocated
const NumberOfFlipsSimplified = (x, y, z) => {

  function helper(a, b, c) {
    let ans = 0;
    for (let i = 0; i < 32; i++) {
      let bitC = ((c >> i) & 1);
      let bitA = ((a >> i) & 1);
      let bitB = ((b >> i) & 1);

      if ((bitA | bitB) !== bitC) {
        ans += (bitC === 0) ? (bitA === 1 && bitB === 1) ? 2 : 1 : 1;
      }
    }
    return ans;
  }

  return helper(x, y, z);
}

const a = 2;
const b = 6;
const c = 5

console.log(`Min Flips required to make two numbers equal to third is : ${MinFlips(a, b, c)}`);
console.log(`Min Flips required to make two numbers equal to third is : ${NumberOfFlipsSimplified(a, b, c)}`);
