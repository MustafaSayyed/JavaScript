// A Callback is a function passed as a argument to another funtion 

function sum(a, b) {
    console.log(`The Sum is ${a + b}`);
}

function calculator(a, b, sumfunction) {
    sumfunction(a, b);
}

calculator(7, 3, sum)

