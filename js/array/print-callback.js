// Strategy Pattern

function print(func) {
  for (let i = 1; i <= 10; i++) {
    func(i);
  }
}

function logToConsole(i) {
  console.log(i);
}

print(logToConsole);

// Arrow Function
print(i => console.log(i));
