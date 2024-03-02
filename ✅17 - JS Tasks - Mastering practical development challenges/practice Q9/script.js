let textarea = document.querySelector('textarea')
let count = document.querySelector('span')
let num;


textarea.addEventListener('input',function(){
    num = textarea.value.length
    count.textContent = num;
})