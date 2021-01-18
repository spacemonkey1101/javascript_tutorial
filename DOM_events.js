//Events are interactions that the user can perform on the webpage

//Inline events --NOT RECOMMENDED
//<button id="submitCode" onClick="console.log('Code Submitted')">Click Me </button>  

//setting the onClick property
document.querySelector("#btnId").onclick = function(){
    console.log("I am Clicked")
}
document.querySelector("#btnId").onmouseenter = function(){
    
}
//Event Listeners --best way
//addEventListener('event', function_name)
document.querySelector("#hello").addEventListener('click', function(){
    console.log("hello")
})

//can add multiple events to a single element without overring it
var btn = document.querySelector("#hello")
btn.addEventListener('click', function(){
    console.log("hello")
})
btn.addEventListener('dblclick', function(){
    console.log("hello hello")
})
