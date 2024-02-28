//  DOM
//  DOM Manipulation

//  Accessing Elements:
//  document.querySelector()

//selection and save

// let btn = document.querySelector('button');

//id
document.querySelector('#head');

//class
document.querySelector('.hl');

//tag

document.querySelector('h3');

//  Modifying Elements:

//  innerHTML, textContent

let btn1  = document.querySelector('button');
btn1.textContent = "Starting Download";
//  Manipulating Styles and Classes:

//tag
//  style
let h1 = document.querySelector('h1');
h1.style.color = 'red';
h1.style.fontFamily = 'gilroy';


//  classList

let h2 = document.querySelector("p");
h2.classList.add('makeitred');
h2.classList.remove('makeitred');


//  Creating and Deleting Elements:
//  createElement()
//  appendChild()
let h3 = document.createElement('h3');
h3.textContent = "Hello World";
h3.classList.add("makeitred");

document.querySelector("body").appendChild(h3);


//  removeChild()
document.querySelector("body").appendChild(h3);




//  Event Handling:
       //  addEventListener()


let btn = document.querySelector('button')
btn.addEventListener('mouseover', function(){
    btn.textContent = 'making card';
    btn.style.backgroundColor = "red";
})

btn.addEventListener('mouseleave', function(){
    btn.textContent = 'make card';
    btn.style.backgroundColor = "#71717a";
}) 


//event object

