// String Reverse
const strReverse = str => {
  const arr = str.split("");
  const arrReverse = arr.reverse();
  return arrReverse.join("");
};

// Given an integer, reverse the order of the digits.

function intReversal(n) {
  if (typeof n !== "number") {
    return `${n} is not a number.`;
  }
  let flag = false;
  if (n < 0) {
    flag = true;
    n *= -1;
  }
  let intString = String(n);
  let intReverse = strReverse(intString);
  if (flag === true) {
    return parseInt(`-${intReverse}`);
  }
  return parseInt(intReverse);
}

console.log(intReversal(123)); // 321
console.log(intReversal(-123)); // -321

// Alternative Method
const reverse = integer =>
  parseInt(
    integer
      .toString()
      .split("")
      .reverse()
      .join("")
  ) * Math.sign(integer);

console.log(reverse(-223));

console.log(Math.sign(10));
console.log(Math.sign(-10));
