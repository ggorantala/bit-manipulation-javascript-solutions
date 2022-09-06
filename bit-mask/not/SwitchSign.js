// Time: O(1), We are not running a loop or scaling the inputs. The inputs never change. So the
// operation takes a single unit of time, which is O(1)
// Space: O(1), no extra memory allocated
const switchSign = number => {
  return ~number + 1;
}

let number = 8;
console.log(switchSign(number));