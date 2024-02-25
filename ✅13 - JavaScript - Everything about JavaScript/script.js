const a = 12;
const b = 32;

result = a + b;

console.log(result);

console.log("Hello World!");


let arr = [1, 2, 3, 4, 5, 6];
let ba = arr;

ba.pop();

//spread

//conditionals =if else else-if oprator switch switch case

// let age = prompt("what is your  age");

// if (age >= 18) {
//     console.log("user is adult")
// } else {
//     console.log('user is not adult')
// }


//for loop
let i = 0;
let total = 0;

for (let i = 0; i < 10; i++) {
    total = i + 1;
    console.log(total);
}


//while loop

let h = 0;
let s = 0;
while (h < 11) {
    h++
    s = h + 1;
    console.log(s)
}

//foreach   is use in arr


//functions

// js has a 2 types es5 and es6


// es5 - 1_function statements. 2)functions expreseions, 3)anonymous function

//es6 - fat arrow function
// a) basix fat arrow 
// b) fat arrow with one parom
// c) fat arrow with implicit returm

//what is function  
//why ew need 
// how to use 

function add() {
    console.log("learning function")
    let h = 0;
    let s = 0;
    while (h < 11) {
        h++
        s = h + 1;
    }
    return s;
}

add();

//oarneteres abd arguments

function name(para) {
    console.log(para);
}

name("i am vivek");

//prep for interview

function arguments() {
    //function statement
}

// let name = function () {
//     //function expression
// }

// function () {
//     // anonymous function
// }

//fat arrow

() => { }  //basic fat arrow

let num = b => { }  //fat arrow with one parameter

num(23)


let fun = () => "harsh";

console.log(fun())

//return


function abcd() {
    return "hi am js";
}

console.log(abcd())

//undefined is a value
//not defined is an error
//null is also a value

//arrays

let user = ["vivek", "harshika", "harshita", "akansha", "nishi", "niku"]

console.log(user[5]);


let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let fnum = 0;
arrays.forEach(function (val) {
    fnum = fnum + val;
    return fnum;
})

console.log(fnum);


//object

let obj = {
    name: "vivek",
    age: 18,
    email: "vivekmali@gmail.com",
    gender: "male"
};

console.log(obj);

//synchronous code and asynchronous js







