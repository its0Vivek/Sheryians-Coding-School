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


