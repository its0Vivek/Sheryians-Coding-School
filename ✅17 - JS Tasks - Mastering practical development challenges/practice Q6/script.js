let home =document.querySelector('#Home')
let about =document.querySelector('#About')
let contact =document.querySelector('#content')

let Hometext =document.querySelector('#Hometext')
let Abouttext =document.querySelector('#Abouttext')
let contacttext =document.querySelector('#contenttext')


Hometext.style.display = 'block';
Hometext.style.width = '50%';

home.addEventListener('click', function(){
    allclear()
    Hometext.style.display = 'block';
    Hometext.style.width = '50%';
})


about.addEventListener('click', function(){
    allclear()
    Abouttext.style.display = 'block';
    Abouttext.style.width = '50%';
})

contact.addEventListener('click', function(){
    allclear()
    contacttext.style.display = 'block';
    contacttext.style.width = '50%';
})


function allclear(){
    document.querySelectorAll('h3').forEach(function(h3){
        h3.style.display = 'none';
    })
}