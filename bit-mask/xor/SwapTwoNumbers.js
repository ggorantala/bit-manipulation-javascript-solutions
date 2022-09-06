const SwapTwoNumbers = (a, b) => {
  a = a ^ b;
  b = b ^ a;
  a = a ^ b;

  console.log(`Finally, after swapping; a = ${a} , b = ${b}`)
}

const a = 10;
const b = 121;

SwapTwoNumbers(a, b);
