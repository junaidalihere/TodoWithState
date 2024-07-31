let input = document.querySelector("#input");
let btn = document.querySelector(".btn");
let textbox = document.querySelector("#text-box");
let form = document.querySelector("form");





btn.addEventListener("click",function(){

let newtext = document.createElement("p");
newtext.innerHTML = input.value;
textbox.appendChild(newtext)


form.addEventListener("submit",function(e){
    e.preventDefault();
})


})

















