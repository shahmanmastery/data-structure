const strReverse = str => {
  const arr = str.split("");
  const arrReverse = arr.reverse();
  return arrReverse.join("");
};

console.log(strReverse("Hello"));
