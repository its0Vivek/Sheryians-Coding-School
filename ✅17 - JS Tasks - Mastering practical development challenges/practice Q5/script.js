let h3 = document.querySelector('h3');
let btn = document.querySelector('button');
let stop = document.querySelector('#Stop');

let int;

btn.addEventListener("click", function() {
    let count = 0;
    int = setInterval(function(){
        h3.textContent = count;
        console.log(count);
        count++
    }, 1000)


})

stop.addEventListener("click", function() {
    clearInterval(int)
})
