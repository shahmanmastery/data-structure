function reverse(a) {
    let b = [], counter = 0;
    for (let i = a.length - 1; i >= 0; i -= 1) {
        b[counter] = a[i];
        counter += 1;
    }
    return b;
}

const arr = [1, 2, 3, 4, 5]
console.log(reverse(arr));