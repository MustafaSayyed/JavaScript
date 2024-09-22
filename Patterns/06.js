let n = 5;
let pattern = "";
for (let i = 0; i < n; i++) {
  let val = i + 1;
  for (let j = 0; j <= i; j++) {
    pattern += val + " ";
    val--;
  }
  pattern += "\n";
}
console.log(pattern);

let p2 = "";
for (let i = 0; i <= n; i++) {
    for (let j = i + 1; j > 0; j--) {
        p2 += j + " "
    }
    p2 += "\n";
}

console.log(p2);