let form = document.querySelector('form');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');


form.addEventListener('submit', function(ev) {
    ev.preventDefault();
        console.log(inp1.value);
    
})