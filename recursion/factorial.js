const factorial = number => {
  let product = 1;
  for (let i = 2; i <= number; i++) {
    product *= i;
  }
  return product;
};

console.log(factorial(5));

//-----------recursion version-------------
// v1
// All recursive functions share a common pattern.
// They are made from creating a recursive part that calls itself,
// and a base case that does not.

const recursiveFactorial = n => {
  if (n === 1) {
    return 1;
  }
  let product = n;
  product *= recursiveFactorial(n - 1);
  return product;
};

console.log(recursiveFactorial(5));

// v2
const recursiveFactorial2 = number => {
  return number < 2 ? 1 : number * recursiveFactorial2(number - 1);
};
