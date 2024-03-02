document.querySelector('#block')
.addEventListener('mouseenter', function(){
    document.querySelector('.tooltip').style.display ='initial';
})

document.querySelector('#block')
.addEventListener('mouseleave', function(){
    document.querySelector('.tooltip').style.display ='none';
})