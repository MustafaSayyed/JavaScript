let n = 5;
let pattern = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    pattern += " ";
  }
  for (let k = 0; k < n - i; k++) {
    pattern += i + 1;
  }
  pattern += "\n";
}

console.log(pattern);
