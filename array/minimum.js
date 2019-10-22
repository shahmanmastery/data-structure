function getMinimum(arr) {
  let min = arr[0];
  for (let n of arr) {
    if (n < min) {
      min = n;
    }
  }
  return min;
}

const min = getMinimum([8, 10, 3]);
console.log(min);
