let h1=document.querySelector("h1");
let form=document.querySelector("form");
let ul=document.querySelector("ul");
let input=document.querySelector("input");
let btn=document.querySelector(".sub");

btn.addEventListener("click",function(){
    let text=input.value.trim();
    if(!text)return;

    let item=document.createElement("li");
    
    let span = document.createElement("span");
    span.textContent = text;
    item.appendChild(span);

    
    let check=document.createElement("input");
    check.type="checkbox"
    item.appendChild(check);

    let delbt=document.createElement("button");
    delbt.innerText="Delete";
    item.appendChild(delbt);

    ul.appendChild(item);
    input.value="";


});
ul.addEventListener("click",function(event){
   if(event.target.nodeName=="BUTTON"){
    event.target.parentElement.remove();
   }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
});
