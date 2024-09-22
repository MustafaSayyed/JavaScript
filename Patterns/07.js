let n = 5
let pattern = ""
let val = 1;
for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i ; j++) {
        pattern += val + " "
        val++;
    }
    pattern += "\n"
}
console.log(pattern)