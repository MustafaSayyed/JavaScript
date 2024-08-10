// Loops in JavaScript


let i = 0;
// for loop
for (i = 0; i < 5; i++) {
    console.log(i, "Sayyed Mustafa");
}


let j = 0;
//while loop
while(j < 5) {
    console.log(j, "Sayyed Mustafaa");
    j++;
}


let k = 0;
//do-while loop
do {
    console.log(k, "Sayyed Mustafaaa");
    k++;
} while(k < 10);


let arr = [10, 12, 14, 16, 18, 20];
let str = "Sayyed_Mustafa";

//for-of loop
// It is used for Strings and Arrays
for(let i of str) {
    console.log(i);
}

const student = {
    Name: "Mustafa",
    RollNo: 144,
    Course: "JavaScript",
    Dream: "To be a Full Stack Developer",
    Project_01: "AI Attender",
    Project_02: "myform.in"
}

//forin loop
// It is used for Objects and Arrays
for(let key in student) {
    console.log(key + ": " + student[key]);
}