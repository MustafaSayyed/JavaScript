// let n = 5;

// for (let i = n; i >= 1; i--) {
//     let str = '';
//     for (let j = 0; j < n - i; j++) {
//         str += ' ';
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//         str += '*';
//     }
//     console.log(str);
// }

for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += j + " ";
  }
  console.log(pattern);
}


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(j + " ")        
    }
    document.write("<br>");
}