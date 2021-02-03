// using javascript dictionary to return the character with maximum occurance
const max = str => {
  const dict = {};

  for (let s of str) {
    dict[s] = dict[s] + 1 || 1;
  }

  let max = 0;
  let char = null;
  for (let d in dict) {
    if (max < dict[d]) {
      max = dict[d];
      char = d;
    }
  }

  return `${char.toUpperCase()} has maximum occurance of ${max} in string ${str}.`;
};

console.log(max("hello")); // output: l
