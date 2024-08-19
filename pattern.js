let n = 5;

for (let i = n; i >= 1; i--) {
    let str = '';
    for (let j = 0; j < n - i; j++) {
        str += ' ';
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        str += '*';
    }
    console.log(str);
}
