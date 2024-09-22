let n = 9;
let pattern = "";

for (let i = 0; i < 1; i++) {
  pattern += "\n\n";

  for (let i = 0; i < n / 2 - 2; i++) {
    pattern += "        ";
    pattern += "*";
    pattern += "\n";
  }

  for (let i = 0; i < n; i++) {
    pattern += "* ";
  }

  pattern += "\n";
  
  for (let i = 0; i < n / 2 - 2; i++) {
    pattern += "        ";
    pattern += "*";
    pattern += "\n";
  }

  pattern += "\n\n";
}
console.log(pattern);
