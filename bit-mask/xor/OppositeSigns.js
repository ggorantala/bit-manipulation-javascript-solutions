// Time: O(1), We are not running a loop or scaling the inputs. The inputs never change. So, the
// operation takes a single unit of time, which is O(1)
// Space: O(1), no extra memory allocated
const OppositeSigns = (a, b) => {
  return (a ^ b) < 0 ? 'Signs are opposite' : 'Signs are not opposite';
}

const x = 100, y = -1;
console.log(`For inputs ${x}, ${y} :  ${OppositeSigns(x, y)}`);

const z = 100, p = 501;
console.log(`For inputs ${z}, ${p} :  ${OppositeSigns(z, p)}`);
