let n = 5;
let pattern = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    pattern += " ";
  }

  for (let k = 0; k <= i; k++) {
    pattern += k + 1;
  }

  for (let l = i; l > 0; l--) {
    pattern += l;
  }

  pattern += "\n";
}

console.log(pattern);
