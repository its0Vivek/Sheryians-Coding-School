 let input =  document.querySelector('input')
 
 let data = [
    {name: "vivek" , src:"https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "niku" , src:"https://plus.unsplash.com/premium_photo-1672857822411-ad82b8180078?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "vilas" , src:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "vishal" , src:"https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
 ]

let pers= "";

 data.forEach(function(ele){
     pers += `<div class="person">
        <div class="img">
            <img src="${ele.src}" alt="">
        </div>
        <h4>${ele.name}</h4>
    </div>`
 })

 document.querySelector(".people").innerHTML = pers;

input.addEventListener('input', function(){
    let matching = data.filter(function(e){
        return e.name.startsWith(input.value)
    });
    let newuser ='';
    matching.forEach(function(ele){
        newuser += `<div class="person">
           <div class="img">
               <img src="${ele.src}" alt="">
           </div>
           <h4>${ele.name}</h4>
       </div>`
    })
    document.querySelector(".people").innerHTML = newuser;
})