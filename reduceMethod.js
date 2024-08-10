// Calculate a factorial of any number

let arr = [];

for (let i = 0; i < 5; i++) {
    arr[i] = i + 1;
}

let factorial = arr.reduce((res, curr) => {
    return res * curr
})

console.log(`The Factorial is ${factorial}`);