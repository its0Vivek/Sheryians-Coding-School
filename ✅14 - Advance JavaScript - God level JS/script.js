// this - window


// global - window

console.log(this);

//funtion - window
function nam() {
    console.log(this);
}
nam();

// method - object 

let obj = {
    name: function () {
        console.log(this);
    },
    age: 25,
    email: "vivekmali@gmail.com"

}
obj.name();

//fnc inside method (es5) - window

let obh2 = {
    sayName: function () {
        console.log(this);
        function childfnc() {
            console.log(this)
        }
        childfnc();
    },
    age: 25
}
obh2.sayName()
//fnc inside method (es6) - object
let obj3 = {
    sayname: function () {
        const child = () => {
            console.log(this);
        }
        child();
    }
}
obj3.sayname();
// constrctor fnc mein this ki value - new black object 
function add() {
    console.log(this);
}
const ans = new add();

// event listerner mein thus ki value - that element jisper event lis. lagi

document.querySelector("button")
    .addEventListener("click", function () {
        console.log(this);
    })


//////////////////////////////////////////////////////////////////////////////////////
//this call , 
//apply - is use when parameter is come to use 
//,bind is same as call but not run we have to save redult in some variable
const obej = { name: "vivek" }
function abcd() {
    console.log(this);
}

const lol = abcd.bind(obej);

lol();



//////////////////////////////////////////////////////////////////////////////////////

// prototypal inheritance

function makehuman(name, age) {
    this.name = name;
    this.age = age;
}

makehuman.prototype.printMyName = function () {
    console.log(this.name)
}

const human1 = new makehuman("vivek", 21);
const human2 = new makehuman("niku", 14);


//closures

function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}

let fnc = counter();

fnc();

// event delegation

let parent = document.querySelector("#parent")

parent.addEventListener("click", function (details) {
    if (details.target.id === "play") {
        console.log("play song");
    }
    else if (details.target.id === "pause") {
        console.log("pause song");
    }
})


//higher order functions  (hofs)
// hofs is 
function niku(parameter) {

}

niku(function () { });


let djs = [1, 2, 3, 4, 5, 6, 7]

djs.forEach(function () { })

//try - catch

function divide(a, b) {
    try {
        if (b == 0) {
            throw Error("Error is there");
        }
        console.log(a / b);
    }
    catch (err) {
        console.error(err);
    }
}
divide(12, 0)

//Costom events
//evebts = click , dblclick, mouseover , input

const urevent = new Event("go home")

document.querySelector("button")
    .addEventListener("go home", function () {
        console.warn("coming home")
    })

document.querySelector("button").dispatchEvent(urevent)


