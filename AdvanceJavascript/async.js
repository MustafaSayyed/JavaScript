let n = 1;
function hello() {
    console.log(`Hello ${n}`);
    n++;
}


// setTimeout(hello, 2000);
setInterval(hello, 1000);
console.log("This wil print first even it is wrote in last");