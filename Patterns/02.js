let n = 3;
let val = 1;
let pattern = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    pattern += val + " ";
    val++;
  }
  pattern += "\n";
}
console.log(pattern);