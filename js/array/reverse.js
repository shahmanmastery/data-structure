// o(n) time, o(n) space
function reverse(a) {
  let b = [],
    counter = 0;
  for (let i = a.length - 1; i >= 0; i -= 1) {
    b[counter] = a[i];
    counter += 1;
  }
  return b;
}

const arr = [1, 2, 3, 4, 5];
console.log(reverse(arr));

// o(n) time, o(1) space
function reverseOpt(arr) {
  const n = arr.length;
  const lastIndex = n - 1;
  for (let i = 0; i < n / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[lastIndex - i];
    arr[lastIndex - i] = temp;
  }
  return arr;
}

console.log(reverseOpt(arr));
