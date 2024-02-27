//Asynchronous 

// sync 
//async

//settimeout

console.log("hey 1")
console.log("hey 2")
setTimeout(() => {
    console.log("hey 3");
}, 1000)
console.log("hey 4")
//setinterval

let time = setInterval(() => {
    console.log("hey 1")
}, 1000)
clearInterval(time);
//fetch API
fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(readable => console.log(readable.results[0].gender))

//axios (or other HHTP libraries)
axios.get(`https://randomuser.me/api/`)
    .then(results => console.log(results.data.results[0]))

//promise
const parchi = new Promise(function (resolve, reject) {
    axios.get(`https://randomuser.me/api/`)
        .then(results => {
            if (results.data.results[0].gender === "female") resolve();
            else reject();
        });
});
parchi
    .then(function () {
        console.log("resolve")
    })
    .catch(function () {
        console.log("reject")
    })
//Callbacks

function calls(a, b) {
    b();
}
calls(1, function () { console.log("callback chala") })

function doSomeAsyncTask(url, callback) {
    fetch(url)
        .then(raw => raw.json())
        .then(result => {
            callback()
        })
}

doSomeAsyncTask("some url", function () {

})

//user data

function getData(url, callback) {
    fetch(url)
        .then(raw => raw.json())
        .then(result => {
            callback(result);
        })
}

getData("https://randomuser.me/api/", function (result) {
    console.log(result.results[0].gender, result.results[0].email,
        result.results[0].name.first)
})
//promises
//Async/Await

//Event loop


//Callback


async function waitr() {
    let a = await fetch(`https://randomuser.me/api/`);
    a = await a.json()
    console.log(a);
}
waitr()


// Callbacks vs Promises vs Async/await

// Callbacks 
function dataFetcher(url, callback) {
    fetch(url)
        .then(raw => raw.json())
        .then(result => {
            callback(result);
        })
}

dataFetcher("https://randomuser.me/api/", function (result) {
    console.log(result.results[0])
})

//promise

function dataFetcher(url) {
    const parchi = new Promise(function (resolve, reject) {
        fetch(url)
            .then(raw => raw.json())
            .then(result => {
                resolve(result);
            })
    })
    return parchi;
}

dataFetcher("https://randomuser.me/api/")
    .then(function (result) {
        console.log(result.results[0])
    })

//    Async/await

async function dataFetcher(url) {
    let data = await fetch(url);
    let result = await data.json();
    return result;
}

async function hh() {
    const data = await dataFetcher("https://randomuser.me/api/")
    console.log(data);
}
hh();

// generators

function* printNums() {
    console.log("started");
    yield 1;
    console.log("started horaha hai");
    yield 2;
    console.log("started hogaya");
    yield 3;
}

const ans = printNums();
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);


//Web workers
let num = Array.from({ length: 10000000 }, (_, b) => b + 1);
const worker = new Worker("worker.js")
worker.postMessage(num);

worker.onmessage = function (data) {
    console.log(data.data)
}