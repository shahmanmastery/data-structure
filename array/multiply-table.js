let n = 10;
let m = 10;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= m; j++) {
    mult = padding(i * j);
    row += `${mult} `;
  }

  console.log(row);
}

function padding(n) {
  if (n < 10) {
    return "0" + n;
  }
  return n;
}
