let inp = document.querySelector('input');
let add = document.querySelector('#Add');
let remove = document.querySelector('#Remove');
let ul = document.querySelector('ul');
let li;


add.addEventListener('click', function() {
    if(inp.value.trim() ===''){}
    else{
    li = document.createElement('li');
        li.textContent = inp.value;
        ul.appendChild(li)
        inp.value = "";
        
    }

})

remove.addEventListener('click', function() {
   ul.removeChild(li)

})