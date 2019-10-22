// Write a program that outputs the string representation of
// numbers from 1 to n. But for multiples of three it should
// output “Fizz” instead of the number and for the multiples
// of five output “Buzz”. For numbers which are multiples of
// both three and five output “FizzBuzz”.

// O(n)
const n = 20;

function fizzBuzz(num) {
  let entry = "";
  if (num % 3 === 0) {
    entry += "fizz";
  }
  if (num % 5 === 0) {
    entry += "buzz";
  }
  if (num % 3 !== 0 && num % 5 !== 0) {
    entry = num;
  }
  return entry;
}

for (let i = 1; i <= n; i++) {
  console.log(fizzBuzz(i));
}
