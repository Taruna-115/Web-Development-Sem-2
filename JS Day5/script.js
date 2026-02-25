// Select all the buttons:
let displaybox = document.querySelector("#displaybox");
let decbtn = document.querySelector("#decbtn")
let resetbtn = document.querySelector("#resetbtn")
let incbtn = document.querySelector("#incbtn")

// Now, add fxns(which they will perform):
let x = 0;

decbtn.addEventListener("click", function(){
    x--;
    displaybox.value = x;           // like text ko webpage pe show krne ke liye .textContent use hota h....vaise hi input tag ke liye .value use hota h
    console.log(x);
})

resetbtn.addEventListener("click", function(){
    x=0;
    displaybox.value = x;
    console.log(x)
})

incbtn.addEventListener("click", function(){
    x++;
    displaybox.value = x;
    console.log(x)
})