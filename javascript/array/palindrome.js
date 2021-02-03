// A palindrome is a word or phrase that reads
// the same backward as forward. Write a function
// that checks for this.

function isPalindrome(str) {
  const splitString = str.split("");
  const reverseArr = splitString.reverse();
  reverseStr = reverseArr.join("");
  if (str === reverseStr) {
    return true;
  }
  return false;
}

console.log(isPalindrome("shahriar"));
console.log(isPalindrome("dod"));
