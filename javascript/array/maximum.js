function getMaximum(arr) {
    let max = arr[0];
    for (let n of arr) {
        if (n > max) {
            max = n;
        }
    }
    return max;
}

const max = getMaximum([15, 10, 3]);
console.log(max);
